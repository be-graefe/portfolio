import {Button as ButtonPrimitive} from "@base-ui/react/button"
import {cva, type VariantProps} from "class-variance-authority"

import {cn} from "@/lib/utils"

const buttonVariants = cva(
    "group/button inline-flex shrink-0 items-center justify-center rounded-sm border bg-clip-padding font-sans font-normal tracking-[0.14em] uppercase whitespace-nowrap transition-all duration-200 outline-none select-none border-transparent focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/30 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-40 aria-invalid:border-destructive aria-invalid:ring-2 aria-invalid:ring-destructive/20 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
    {
        variants: {
            variant: {
                default:
                    "border-primary bg-gradient-to-b from-brass to-brass-dark text-primary-foreground shadow-[inset_0_1px_0_rgb(239_232_213/.35),0_2px_6px_rgb(0_0_0/.4)] hover:from-primary hover:to-brass hover:text-espresso",
                outline:
                    "border-border/70 text-secondary-foreground hover:border-primary hover:bg-secondary hover:text-foreground aria-expanded:border-primary aria-expanded:bg-secondary aria-expanded:text-foreground",
                secondary:
                    "border-border/60 bg-gradient-to-b from-secondary to-background text-primary shadow-[inset_0_1px_0_rgb(210_172_97/.18)] hover:border-primary hover:text-foreground aria-expanded:border-primary",
                ghost:
                    "text-muted-foreground hover:bg-secondary/60 hover:text-primary aria-expanded:bg-secondary aria-expanded:text-foreground",
                destructive:
                    "border-destructive bg-destructive/15 text-foreground hover:bg-destructive/35 focus-visible:border-destructive focus-visible:ring-destructive/30",
                link: "text-primary underline-offset-4 hover:text-foreground hover:underline",
            },
            size: {
                default:
                    "h-9 gap-1.5 px-3.5 text-xs has-data-[icon=inline-end]:pr-2.5 has-data-[icon=inline-start]:pl-2.5 [&_svg:not([class*='size-'])]:size-3.5",
                xs: "h-6 gap-1 px-2 text-[0.625rem] tracking-[0.18em] has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-2.5",
                sm: "h-7 gap-1 px-2.5 text-[0.6875rem] has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 [&_svg:not([class*='size-'])]:size-3",
                lg: "h-10 gap-2 px-5 text-[0.8125rem] tracking-[0.16em] has-data-[icon=inline-end]:pr-3.5 has-data-[icon=inline-start]:pl-3.5 [&_svg:not([class*='size-'])]:size-4",
                icon: "size-9 [&_svg:not([class*='size-'])]:size-3.5",
                "icon-xs": "size-6 [&_svg:not([class*='size-'])]:size-2.5",
                "icon-sm": "size-7 [&_svg:not([class*='size-'])]:size-3",
                "icon-lg": "size-10 [&_svg:not([class*='size-'])]:size-4",
            },
        },
        defaultVariants: {variant: "default", size: "default"},
    }
)

function Button({
                    className,
                    variant = "default",
                    size = "default",
                    ...props
                }: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
    return (
        <ButtonPrimitive
            data-slot="button"
            className={cn(buttonVariants({variant, size, className}))}
            {...props}
        />
    )
}

export {Button, buttonVariants}
