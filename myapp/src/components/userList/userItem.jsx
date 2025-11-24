import "./userlist.css";

const UserItem = (props) => {
  const { userInfo } = props;

  const { image, name, age, city } = userInfo;
  return (
    <div className={"useritem_container"}>
      <img src={image} className={"useritem_image"} />
      <div className="useritem_details">
        <p className="useritem_name">{name}</p>
        <p className="useritem_subtitle">
          {age} | {city}
        </p>
      </div>
    </div>
  );
};

export default UserItem;
