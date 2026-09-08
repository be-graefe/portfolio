'use server';

import Papa from 'papaparse';
import {put} from '@vercel/blob';
import {revalidatePath} from 'next/cache';
import type {Workout, WorkoutSet} from '@/lib/workout';

type HevyRow = {
    title: string;
    start_time: string;
    end_time: string;
    exercise_title: string;
    set_index: string;
    set_type: string;
    weight_kg: string;
    reps: string;
    distance_km: string;
    duration_seconds: string;
    rpe: string;
};

function parseHevyCsv(csvText: string): Workout[] {
    const { data } = Papa.parse<HevyRow>(csvText, { header: true, skipEmptyLines: true });

    const byWorkout = new Map<string, Workout>();

    for (const row of data) {
        const key = `${row.title}__${row.start_time}`;
        if (!byWorkout.has(key)) {
            byWorkout.set(key, {
                title: row.title,
                startTime: new Date(row.start_time).toISOString(),
                endTime: new Date(row.end_time).toISOString(),
                exercises: {},
            });
        }

        const workout = byWorkout.get(key)!;
        const set: WorkoutSet = {
            setIndex: Number(row.set_index),
            setType: row.set_type,
            weightKg: row.weight_kg ? Number(row.weight_kg) : null,
            reps: row.reps ? Number(row.reps) : null,
            distanceKm: row.distance_km ? Number(row.distance_km) : null,
            durationSeconds: row.duration_seconds ? Number(row.duration_seconds) : null,
            rpe: row.rpe ? Number(row.rpe) : null,
        };

        (workout.exercises[row.exercise_title] ??= []).push(set);
    }

    return [...byWorkout.values()].sort((a, b) => +new Date(b.startTime) - +new Date(a.startTime));
}

export async function uploadWorkoutsCsv(formData: FormData) {
    const file = formData.get('file') as File | null;
    if (!file) throw new Error('No file selected');

    const workouts = parseHevyCsv(await file.text());

    await put('workouts.json', JSON.stringify(workouts), {
        access: 'public',
        addRandomSuffix: false,
        allowOverwrite: true,
        contentType: 'application/json',
    });

    revalidatePath('/');
}