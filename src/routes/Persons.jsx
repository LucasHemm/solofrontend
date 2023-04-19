import React, {useEffect, useState} from 'react';
import facade from "../apiFacade.js";
 import '../persons.css';


const Persons = ({user}) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const url = user.roles.split(',').includes('user') ? '/api/game/all' : '/api/info/user';
        facade.fetchData(url).then((res) => {

            res.map((person) => {
                setData(data => [...data, <tr key={person.name}>
                    <td>{person.name}</td>
                    <td>{person.age}</td>
                    <td>{person.count}</td>
                    <td>{person.gender}</td>
                    <td>{person.probability}</td>
                </tr>]  );
            })

        });
    }, []);

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
        </div>
    );

};

export default Persons;