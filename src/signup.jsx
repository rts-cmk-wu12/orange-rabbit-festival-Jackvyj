import { useRef, useState } from 'react';
import './css/signup.css'
import Tickets from './components/tickets';


export default function Signup() {

    const [people, setPeople] = useState([]);

    const formElement = useRef(null)

    function submitHandler(event) {
        event.preventDefault();

        const data = new FormData(formElement.current)

        const dataObject = Object.fromEntries(data.entries());

        formElement.current.reset();

        setPeople([...people, { name: dataObject.Name, email:dataObject.email, phone:dataObject.phone, birthday:dataObject.birthdate }]);

        console.log(dataObject);
        
    }

    return (
        <>
            

            <form ref={formElement} className="signup-form" onSubmit={submitHandler}>
                <input className="signup-form__input" name='Name' placeholder="Full Name" />
                <input className="signup-form__input" name='email' type="email" placeholder="Email" />
                <input className="signup-form__input" name='phone' type="tel" placeholder="Phone" />
                <input className='signup-form__input' name='birthday' placeholder="Birthdate" />
                <input className="signup-form__button" type="submit" value="Sign Up" />
            </form>

            <Tickets persons={people}/>
        </>
    )
}