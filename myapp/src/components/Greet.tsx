

type Greetprops = {
    name : string,
    age: number,
    address?:{
        city: string,
        road: string,
        no: number
    }
}

// export const Greet = (props: Greetprops )=> {
//     return(
//         <div >
//             <h1>{`Hi hello ${props.name}  and you age is ${props.age}`}</h1>
//         </div>
//     )   
// }

export const Greet = ({ name , age }: Greetprops)=> {
    return(
        <div >
            <h1>{`Hi hello ${name}  and you age is ${age}`}</h1>
        </div>
    )   
}


