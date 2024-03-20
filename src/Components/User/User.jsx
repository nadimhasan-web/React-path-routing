import { Link, useNavigate } from "react-router-dom";

const User = ({user}) => {
    const navigate = useNavigate();
    const{id, name, email}=user;
    const userStyle ={
        border: '2px solid black',
        padding: '10px',
        borderRadius: '12px',
        margin:'10px',
        display: 'grid',
    }
    const handleBack = () => {
        navigate(-1)
    }
    return (
        <div style={userStyle}>
            <p>Id:{id}</p>
            <p>Name:{name}</p>
            <p>Email:{email}</p>
            <Link to={`/userInfo/:userId`}>Users details</Link>
            <button onClick={handleBack}>Go back</button>
        </div>
    );
};

export default User;