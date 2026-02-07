export default function Signup({ onLogin }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-500 to-red-500">
      <div className="bg-white p-8 rounded-xl shadow-xl w-80">
        <h2 className="text-2xl font-bold text-center mb-4">Signup</h2>

        <input className="input" placeholder="Email" />
        <input className="input mt-2" type="password" placeholder="Password" />

        <button className="btn w-full mt-4" onClick={onLogin}>
          Create Account
        </button>
      </div>
    </div>
  );
}
