import { auth } from "../firebase";

function Profile() {
  const user = auth.currentUser;

  return (
    <div className="container mt-5">
      <div className="card p-4 shadow">
        <h3>Welcome to Profile</h3>
        <p>Email: {user?.email}</p>
        <button className="btn btn-danger" onClick={() => auth.signOut()}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Profile;
