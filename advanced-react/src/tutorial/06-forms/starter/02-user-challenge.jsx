import { useState } from "react";
const UserChallenge = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");

  return (
    <div>
      <form className="form">
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      {/* render users below */}
    </div>
  );
};
export default UserChallenge;
