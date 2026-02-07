export default function Topbar({ onLogout }) {
  return (
    <div className="flex justify-between items-center bg-slate-800 p-4 rounded-xl shadow">
      <h2 className="text-xl font-semibold">Dashboard Overview</h2>

      <button
        onClick={onLogout}
        className="bg-red-500 px-4 py-2 rounded hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  );
}
