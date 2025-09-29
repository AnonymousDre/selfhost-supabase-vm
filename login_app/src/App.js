import Register from "./components/Register";
import Login from "./components/Login";
import Tasks from "./components/Tasks";

function App() {
  return (
    <div>
      <h1>Supabase Auth + CRUD Demo</h1>
      <Register />
      <hr />
      <Login />
      <hr />
      <Tasks />
    </div>
  );
}

export default App;
