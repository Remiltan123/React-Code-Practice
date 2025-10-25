type RemiProps ={
    children: React.ReactNode
}

export const Remi = (props : RemiProps)=>{
    return (
        <p>{props.children}</p>
    )
}