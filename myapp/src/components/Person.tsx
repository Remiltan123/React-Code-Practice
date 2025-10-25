type personProps = {
    name:{
        frist: string,
        last: string 
    }
}

export const Person = (props: personProps)=>{
    return(
        <p>Hi - {props.name.frist} {props.name.last}</p>
    )
}