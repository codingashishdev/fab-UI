import { type VariantProps } from "class-variance-authority";
import React from "react";
import  {buttonVariants} from "./buttonVariants"

// type ButtonVariantProperties = VariantProps<typeof buttonVariants>;

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>,VariantProps<typeof buttonVariants>{
    varient: string,
    classname: string
}; 


// type ButtonPropertiesMain = VariantProps<typeof buttonVariants> &  React.ButtonHTMLAttributes<HTMLButtonElement>

    // type ButtonPropertiesTemp = {
//     varient: any,
//     size: any
//     classname: any,
// }

const Button : React.FC<ButtonProps> = ({ varient, size, classname, ...props}) => (
    <button 
        {...props}
        className={`${buttonVariants({size})} ${varient}  ${classname}`}
    />
)

export default Button