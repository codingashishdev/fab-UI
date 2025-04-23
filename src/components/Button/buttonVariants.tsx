import {cva} from "class-variance-authority"

export const buttonVariants = cva("px-4 py-2 rounded font-medium transition-colors", {
    variants: {
        variant: {
            default: "bg-blue-600 text-white",
            destructive: "bg-red-600 text-white",
            primary: "bg-black text-white",
            secondary: "bg-white text-black"
        },
        size: {
            small: "text-sm",
            medium: "text-md",
            large: "text-lg",
        },
    },
    defaultVariants: {
        variant: "default",
        size: "medium",
    },
})