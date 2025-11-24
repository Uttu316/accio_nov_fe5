import { USERS_DATA } from "../../data/userData";
import UserItem from "./userItem";
import "./userlist.css";

const UserList = () => {
  return (
    <div className="userlist_container">
      {USERS_DATA.map((item) => (
        <UserItem userInfo={item} key={item.id} />
      ))}
    </div>
  );
};

export default UserList;
