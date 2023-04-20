import React, {useEffect, useState} from 'react';
import facade from "../apiFacade.js";
import '../Persons.css'
import {addPersonURL} from "../settings.js"
import loggedIn from "../components/LoggedIn.jsx";


const Persons = ({user}) => {
    const [data, setData] = useState([]);
    const [name, setName] = useState("");

    const handleSubmit = event => {
        event.preventDefault();
        fetch(addPersonURL + `/${name}`)
            .then(res => res.json())
            .then(data => console.log(data.name))
            .catch(err => console.log(err));
        setName(" ")
    }

    useEffect(() => {
        // const url = user.roles.split(',').includes('user') ? '/api/game/all' : '/api/info/admin';
        const url = '/api/game/all'
        if (user.roles.includes('user')) {
            facade.fetchData(url).then((res) => {
                const arr = res.map((person) => {
                    return (<tr key={person.name}>
                        <td>{person.name}</td>
                        <td>{person.age}</td>
                        <td>{person.count}</td>
                        <td>{person.gender}</td>
                        <td>{person.probability}</td>
                    </tr>);
                })
                setData(arr)

            });
        }
    }, [handleSubmit]);

    // useEffect(() => {
    //     const url = user.roles.split(',').includes('user') ? '/api/game/all' : '/api/info/admin';
    //     if(user.roles.includes('user')){
    //         fetch(url)
    //             .then((res) => res.map((person) => {
    //                 setData(data => [...data, <tr key={person.name}>
    //                     <td>{person.name}</td>
    //                     <td>{person.age}</td>
    //                     <td>{person.count}</td>
    //                     <td>{person.gender}</td>
    //                     <td>{person.probability}</td>
    //                 </tr>]  );
    //             }))
    //             .catch(err => console.log(err));
    //     }
    //
    //
    // }, []);

    const handleChange = event => {
        const target = event.target;
        const value = target.value.toLowerCase();
        console.log(value)
        setName(value);
    }



    return (
        <div>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Amount</th>
                    <th>Gender</th>
                    <th>Probability of Gender</th>
                </tr>

                {data}

            </table>

            <form>
                <div className="input-field">
                    <input onChange={handleChange} type="text"/>
                    <button type="submit" onClick={handleSubmit}>Add Person</button>
                </div>
            </form>


        </div>
    );

};

export default Persons;