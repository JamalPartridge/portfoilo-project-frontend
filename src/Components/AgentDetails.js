import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom"

import axios from "axios";

const API = process.env.REACT_APP_API_URL;

function AgentDetails(){
    const { id } = useParams();
    const [agent, setAgent] = useState({});
    const navigate = useNavigate()

    const deleteAgent = () => {
        axios
        .delete(`${API}/agents/${id}`)
        .then(
            () => {
                navigate(`/agents`);
            },
            (error) => console.error(error)
        )
        .catch((c) => console.warn('catch', c));
    };

    const handleDelete = () => {
        deleteAgent();
    };

    useEffect(() => {
        axios
        .get(`${API}/agents/${id}`)
        .then((res) => {
            setAgent(res.data)
        })
        .catch((error) => {
            console.log(error)
        })
    }, [id]);
    console.log(agent)
    return (
        <div className="Show">
            <div style={{display: 'flex', flexDirection: "column", justifyContent: "center", alignItems: 'center', backgroundColor: 'snow'}}>
            <p>{agent.name}</p>
            <img src={agent.image} alt="agent"></img>
            <p>Role: {agent.role}</p>
            <p>Abilities: {agent.ability1}, {agent.ability2}, {agent.ability3}</p>
            <p>Ultimate: {agent.ultimate}</p>
            <>
            <Link to={`/agents`}>
                <button>Back</button>
            </Link>
            </>
            <>
            <Link to={`/agents/${agent.id}/edit`}>
                <button>Edit Agent</button>
            </Link>
            </>
            <>
            <button onClick={handleDelete}>delete</button>
            </>
        </div>
        </div>
    )
}

export default AgentDetails;