import Usericon from "./Usericon";

const User = (props) => {
  return (
    <div className="user">
      <span>{props.username}</span>
      <Usericon />
    </div>
  );
};

export default User;
