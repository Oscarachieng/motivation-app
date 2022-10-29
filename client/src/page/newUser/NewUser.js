import './newUser.css'

export default function NewUser() {
  return (
    <div className="container">
      <h3 className="newUserTitle text-white">Create New User</h3>
      <form className="newUserForm col-md-12">
        <div className="newUserItem">
          <label>First Name</label>
          <input type="text" placeholder="John" />
        </div>
        <div className="newUserItem">
          <label>Last Name</label>
          <input type="text" placeholder="Doe" />
        </div>
        {/* select */}
        <div className="newUserItem">
          <label>User Category</label>

          <select name="category">
            <optgroup label="Select user category" value="null">
              <option value="student">Student</option>
              <option value="staff">Staff</option>
            </optgroup>
          </select>
        </div>
        {/* select */}
        <div className="newUserItem">
          <label>Email</label>
          <input type="email" placeholder="johndoe@moringaschool.student.com" />
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input type="password" placeholder="password" />
        </div>
        <div className="newUserItem">
          <button className="btn btn-primary p-0 w-100" type="submit">
            CREATE
          </button>
        </div>
      </form>
    </div>
  )
}
