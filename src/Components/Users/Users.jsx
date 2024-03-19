import { useLoaderData } from "react-router-dom";
import Abcd from "../Abcd/Abcd";
// import Abcd from "../Abcd/Abcd";

const Users = () => {
  const users = useLoaderData();
  console.log(users);
  return (
    <>
      <div>
        <h2>Users:{users.length}</h2>
      </div>
      <div>
        {
            users.map(user=> <Abcd key={user.id} user={user}></Abcd>)
        }
      </div>
    </>
  );
};

export default Users;
