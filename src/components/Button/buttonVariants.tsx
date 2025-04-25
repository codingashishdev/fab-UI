import { cva } from "class-variance-authority";

export const buttonVariants = cva(
    "px-4 py-2 rounded font-medium transition-colors",
    {
        variants: {
            variant: {
                default: "bg-blue-400 text-white",
                success: "bg-green-500 text-gray",
                failed: "bg-red-500 text-white",
            },
            className: {
                default: "cursor-pointer"
            }
        },
        defaultVariants: {
            variant: "default",
            className: "default"
        },
    }
);