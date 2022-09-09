import "./newuser.css";

const NewUser = () => {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New user</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Username</label>
          <input type="text" placeholder="Felix" />
        </div>
        <div className="newUserItem">
          <label>Full name</label>
          <input type="text" placeholder="Felix Anyaegbu" />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="email" placeholder="felix@gmail.com" />
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input type="password" />
        </div>
        <div className="newUserItem">
          <label>Phone</label>
          <input type="text" placeholder="07036176131" />
        </div>
        <div className="newUserItem">
          <label>Address</label>
          <input type="text" placeholder="Jos, Nigeria" />
        </div>
        <div className="newUserItem">
          <label>Gender</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label htmlFor="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label htmlFor="female">Female</label>
            <input type="radio" name="gender" id="others" value="others" />
            <label htmlFor="others">Others</label>
          </div>
        </div>
        <div className="newUserItem">
            <label>Active</label>
            <select name="active" id="active" className="newUserSelect">
                <option value="yes">Yes</option>
                <option value="no">No</option>
            </select>
        </div>
      </form>
        <button className="newUserButton">Create</button>
    </div>
  );
};

export default NewUser;
