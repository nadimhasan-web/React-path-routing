

const Abcd = ({user}) => {
    
    const[id, name, email]=user;
    return (
        <div>
            <h3>name:{name}</h3>
        </div>
    );
};

export default Abcd;