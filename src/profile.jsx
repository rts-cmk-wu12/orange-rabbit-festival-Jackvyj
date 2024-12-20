import { useEffect, useState } from "react"


export default function Profile() {

    const [name, setName] = useState('');

    useEffect(() => {

        // localStorage.setItem('name', 'Bob');

        setName( localStorage.getItem('name') );

    }, [])


    return (
        <>
            <h1>{name}</h1>
        </>
    )
}