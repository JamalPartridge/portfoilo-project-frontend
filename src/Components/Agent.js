import { Link } from 'react-router-dom'

function Agent ({ agent }) {
    return (
        <div style={{
            padding: 5,
            height: 'auto',
            textAlign: 'center',
            margin: '50px auto'
        }}>
            <Link to={`/agents/${agent.id}`}>
                <img src={agent.image}></img>
            </Link>
            <p>{agent.name}</p>
        </div>
    )
}

export default Agent;