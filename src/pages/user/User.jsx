import "./user.css";
import {
  PermIdentity,
  CalendarToday,
  PhoneAndroid,
  MailOutline,
  LocationSearching,
  Publish,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { update } from "../../redux/userslice";
import UpdateButton from "../../components/updatebutton/UpdateButton";

const User = () => {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [dob, setDob] = useState("");
  const [img, setImg] = useState(null);

  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleUpdate = (e) => {
    e.preventDefault();
    //update is our action name from reducers inside useSlice. name and email are our payload(values to be updated)
    dispatch(update({ username, name, email, phone, address, dob, img }));
    console.log(img)
  };

  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit user</h1>
        <Link to="/newuser">
          <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="ShowTop">
            <img src={user.img} alt="" className="userShowImg" />
            <div className="userShowTopTitle">
              <span className="userShowUsername">{user.name}</span>
              <span className="userShowUserTitle">Software Engineer</span>
            </div>
          </div>
          <div className="ShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">{user.username}</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">01.16.1933</span>
            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">{user.phone}</span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">{user.email}</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">{user.address}</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm" action="">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <input
                  type="text"
                  placeholder={user.username}
                  className="userUpdateInput"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>

              <div className="userUpdateLeft">
                <div className="userUpdateItem">
                  <label>Full name</label>
                  <input
                    type="text"
                    placeholder={user.name}
                    className="userUpdateInput"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
              <div className="userUpdateLeft">
                <div className="userUpdateItem">
                  <label>Email</label>
                  <input
                    type="text"
                    placeholder={user.email}
                    className="userUpdateInput"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="userUpdateLeft">
                <div className="userUpdateItem">
                  <label>Phone</label>
                  <input
                    type="text"
                    placeholder={user.phone}
                    className="userUpdateInput"
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>
              <div className="userUpdateLeft">
                <div className="userUpdateItem">
                  <label>Address</label>
                  <input
                    type="text"
                    placeholder={user.address}
                    className="userUpdateInput"
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <label htmlFor="file">
                  <Publish className="userUpdateIcon" />
                </label>
                <span>Upload a picture</span>
                <input
                  type="file"
                  id="file"
                  style={{display: "none"}}
                  onChange={(e) => {
                    setImg(e.target.files[0]);
                  }}
                />
                {img != null ? (
                  <img
                    alt="not found"
                    width={"250px"}
                    src={URL.createObjectURL(img)}
                    className="userUpdateImage"
                  />
                ) : null}
              </div>
              <UpdateButton>
                update
              </UpdateButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default User;
