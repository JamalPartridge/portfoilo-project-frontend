import { useState, useEffect } from 'react';
import Agent from './Agent';
import axios from 'axios';

const API = process.env.REACT_APP_API_URL;

function Agents () {
    const [agents, setAgents] = useState([]);

    useEffect(() => {
        axios
        .get(`${API}/agents`)
        .then((res) => setAgents(res.data))
        .catch((err) => console.log(err));
    }, []);

    return (
        <div className='Agents'>
            <ul className='agents' style={{ listStyle: 'none'}}>{agents.map((agent) => {
                return (
                    <li style={{width: '300px', border: '1px black'}} key={agent.id}>
                        <Agent agent={agent} />
                    </li>
                )
            })}
            </ul>
        </div>
    )
}

export default Agents;