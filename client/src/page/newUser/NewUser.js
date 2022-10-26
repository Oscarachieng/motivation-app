import "./newUser.css";

export default function NewUser() {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>First Name</label>
          <input type="text" placeholder="John" />
        </div>
        <div className="newUserItem">
          <label>Last Name</label>
          <input type="text" placeholder="Doe" />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="email" placeholder="johndoe@moringaschool.student.com" />
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input type="password" placeholder="password" />
        </div>
        <div className="newUserItem">
        <button className="newUserButton">Create</button>
        </div>
      
      
        
        
      </form>
    </div>
  );
}
