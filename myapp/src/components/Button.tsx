import { useState } from "react"

type ButtonProps = {
    handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void
    count: number
}
export const Button = (props: ButtonProps) => {
    return (
        <>
            <button onClick={props.handleClick}>Click</button>
            <p>Button clicked succes </p>
            <h2>{props.count}</h2>
        </>
    )
}