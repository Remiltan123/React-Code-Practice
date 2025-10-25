import { useState } from "react"


type UserType = {
    name: string,
    email: string
}


export const UseStateExample = () => {

    //const [user, SetUser] = useState<UserType | null>(null)
    const [user, SetUser] = useState<UserType>({} as UserType)

    const Login = () => {
        //SetUser(null)
        SetUser({
            name: "Remi",
            email: "test@gmail.cokm"
        })
    }

    const updateEmail = () => {
        SetUser((prevUser) => {
            return { ...prevUser, email: "newemail@gmail.com" };
        });
    };


    // return (
    //     <>
    //         <button onClick={Login}>Set User</button>
    //         <div>user name: {user?.name}</div>
    //         <div>user email: {user?.email}</div>
    //     </>
    // )

    return (
        <>
            <button onClick={Login}>Set User</button>
            <div>user name: {user.name}</div>
            <div>user email: {user.email}</div>
        </>

    )
}
