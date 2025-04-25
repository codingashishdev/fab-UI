import {cva,  type VariantProps } from "class-variance-authority";
import React from "react";
// type ButtonVariantProperties = VariantProps<typeof buttonVariants>;

const buttonVariants = cva(
    "px-4 py-2 rounded font-medium transition-colors",
    {
        variants: {
            variant: {
                default: "bg-blue-400 text-white",
                success: "bg-green-500 text-gray",
                failed: "bg-red-500 text-white",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
);

// type ButtonProperties = VariantProps<typeof variants>;

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>,VariantProps<typeof buttonVariants>{};

const Button : React.FC<ButtonProps> = ({ variant, ...props}) => (
    <button 
    {...props}
    className={`${ buttonVariants({variant})} cursor-pointer`}
    />
)

export default Button


// // type ButtonPropertiesMain = VariantProps<typeof buttonVariants> &  React.ButtonHTMLAttributes<HTMLButtonElement>

//     // type ButtonPropertiesTemp = {
// //     variant: any,
// //     size: any
// //     classname: any,
// // }
