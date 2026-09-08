import {buttonVariants} from "@/components/ui/button";
import Link from "next/link";
import {cn} from "@/lib/utils";
import {Separator} from "@/components/ui/separator";

export type Location = "gym-ledger";

export default function Header({title, subtitle, location}: { title: string; subtitle: string; location?: Location }) {
    return (
        <header className={"leather-dark seam-b stitch-b min-h-16"}>
            <div className={"container mx-auto h-full flex flex-col pb-6 pt-6"}>
                <p className={"pb-2 font-sans text-[0.625rem] uppercase tracking-[0.36em] font-normal text-accent"}>{subtitle.toUpperCase()}</p>
                <div className={"flex justify-between items-center w-full"}>
                    <h1>{title}</h1>
                    <nav className={"flex space-x-2"}>
                        <Link href={"/gym-ledger"} className={cn(buttonVariants({
                            variant: location === "gym-ledger" ? "default" : "outline",
                            size: "sm"
                        }))}>Gym Ledger</Link>
                        <Separator orientation={"vertical"}/>
                        <Link href={"/"} className={cn(buttonVariants({
                            variant: location === undefined ? "default" : "outline",
                            size: "sm"
                        }))}>Home</Link>
                    </nav>
                </div>
            </div>
        </header>
    )
}