import Header from "@/components/header";
import {uploadWorkoutsCsv} from "@/actions/workouts";
import {getWorkouts} from "@/lib/workout";

export default async function Home() {
    const workouts = await getWorkouts();

    return (
        <>
            <Header title={"Gym Ledger"} subtitle={"bizeps brennt | road to 90kg"} location={"gym-ledger"}/>
            <main className={"container mx-auto flex flex-col mt-8"}>
                <form action={async formData => {
                    const res = await uploadWorkoutsCsv(formData);
                }}>
                    <input type={"file"}/>
                    <button type="submit">Upload Workouts</button>
                </form>

                {workouts.map((workout, index) => (
                    <div key={index}>{workout.title}</div>
                ))}
            </main>
        </>
    );
}
