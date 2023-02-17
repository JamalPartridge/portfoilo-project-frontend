import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

function AgentNewForm() {
    let navigate = useNavigate();

    const [agent, setAgent] = useState({
        name: "",
        role: "",
        isPlayableCharacter: "",
        image: "",
    });

    const addAgent = (newAgent) => {
        axios
            .post(`${API}/agents`, newAgent)
            .then(() => {
                navigate(`/agents`);
            },
            (error) => console.error(error)
            )
            .catch((c) => console.warn("catch", c));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        addAgent(agent);
    };

    const handleTextChange = (event) => {
        setAgent({...agent, [event.target.id]: event.target.value });
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
                    placeholder="Name"
                />
                <label htmlFor="role">Role:</label>
                <input 
                    id="role"
                    value={agent.role}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="Role"
                />
                <label htmlFor="isPlayableCharacter">Is Playable:</label>
                <input
                    id="isPlayableCharacter"
                    value={agent.isPlayableCharacter}
                    type="checkbox"
                    onChange={handleTextChange}
                />
                <label htmlFor="image">Image:</label>
                <input
                    id="image"
                    type="text"
                    value={agent.image}
                    onChange={handleTextChange}
                />
                <br />
                <input type="submit" />
            </form>
        </div>
    )
}

export default AgentNewForm;