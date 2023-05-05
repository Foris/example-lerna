import * as React from 'react'

export interface ButtonProps {
  title?: string;
}

export const Button = ({ title = 'Default label' }: ButtonProps) => (
   <div>
     <button>{title}</button>
   </div> 
)
