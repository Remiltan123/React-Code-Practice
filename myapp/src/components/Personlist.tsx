import { Person } from "./Person"
type PersonListProps = {
    name:{
        frist: string,
        last: string
    }[]
}

// export const PersonList = ({name} : PersonListProps)=>{
//     return(
//         <div>
//             {name.map((item) => <Person name={{frist: item.frist, last: item.last}}/>)}
//         </div>
//     )
// }

export const PersonList = (props : PersonListProps)=>{
    return(
        <div>
            {props.name.map((item) => <Person name={{frist: item.frist, last: item.last}}/>)}
        </div>
    )
}
