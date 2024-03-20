import { useLoaderData, useNavigate } from "react-router-dom";

const UserInfo = () => {
    const navigate = useNavigate();
    const info = useLoaderData();
    const {name, email} = info;
    console.log(info);
    const handleBack= ()=>{
        navigate(-1);
    }
    return (
        <div>
            <h3>Name:{name}</h3>
            <p>Email:{email}</p>
            <button onClick={handleBack}>Go back</button>
        </div>
    );
};

export default UserInfo;