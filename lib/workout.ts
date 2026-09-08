import {list} from '@vercel/blob';

export type WorkoutSet = {
    setIndex: number;
    setType: string;
    weightKg: number | null;
    reps: number | null;
    distanceKm: number | null;
    durationSeconds: number | null;
    rpe: number | null;
};

export type Workout = {
    title: string;
    startTime: string;
    endTime: string;
    exercises: Record<string, WorkoutSet[]>;
};

const BLOB_PATHNAME = 'workouts.json';

export async function getWorkouts(): Promise<Workout[]> {
    const {blobs} = await list({prefix: BLOB_PATHNAME, limit: 1});
    if (blobs.length === 0) return [];

    const res = await fetch(blobs[0].url, {cache: 'no-store'});
    return res.json();
}