import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "lib/utils";

const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-md   ring-offset-background transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none",
    {
        variants: {
            variant: {
                default: "bg-gray-900 text-primary hover:bg-gray-700",
                outline:
                    "border border-gray-800 bg-background  hover:border-gray-600",
                text: "bg-transparent text-white hover:text-[#19A651]",
                secondary:
                    "bg-secondary text-gray-950 hover:bg-[#19A651] disabled:bg-gray-300 disabled:text-white",
            },
            size: {
                default: "py-sp2 px-4 h-[34px] body-2",
                lg: "h-[54px] rounded-md px-8 py-[17px] body-1",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    },
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button";
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        );
    },
);
Button.displayName = "Button";

export { Button, buttonVariants };