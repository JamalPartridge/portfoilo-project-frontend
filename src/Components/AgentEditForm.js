import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

function AgentEditForm() {
    let { id } = useParams();
    let navigate = useNavigate();

    const [agent, setAgent] = useState({
        name: "",
        role: "",
        isPlayableCharacter: "",
    });

    const updateAgent = (updatedagent) => {
        axios
        .put(`${API}/agents/${id}`, updatedagent)
        .then(() => {
            navigate(`/agents/${id}`);
        })
        .catch((error) => console.log(error));
    };

    const handleTextChange = (event) => { setAgent({...agent, [event.target.id]: event.target.value });
}

    useEffect(() => {
        axios
        .get(`${API}/agents/${id}`)
        .then((res) => setAgent(res.data),
        (error) => navigate(`/not-found`)
        );
    }, [id, navigate]);

    const handleSubmit = (event) => {
        event.preventDefault();
        updateAgent(agent, id);
    };
    return (
        <div className="NewAgent">
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input
                    id="name"
                    value={agent.name}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="Name" />
                <label htmlFor="role">Role:</label>
                <input
                    id="role"
                    type="text"
                    name="role"
                    value={agent.role}
                    onChange={handleTextChange}
                    />
                <label htmlFor="isPlayableCharacter">Is Playable</label>
                <input
                    id="isPlayableCharacter"
                    type="checkbox"
                    name="isPlayableCharacter"
                    onChange={handleTextChange} 
                    />
                <br />
                <input type="submit" />
            </form>
            <Link to={`/agents/${id}`}>
                <button>Back</button>
            </Link>
        </div>
    );
}

export default AgentEditForm;