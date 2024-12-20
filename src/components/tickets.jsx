export default function Tickets(props) {

    return (
        <div>
        {props.persons.length !== 0 && props.persons.map((person) => (
            <div>
                <div>{person.name}</div>
                <div>{person.email}</div>
                <div>{person.phone}</div>
                <div>{person.birthdate}</div>
            </div>
        ))}
        </div>
    )
}