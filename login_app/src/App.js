import Register from "./components/Register";
import Login from "./components/Login";
import Students from "./components/Students";

function App() {
  return (
    <div>
      <h1>Supabase Auth + CRUD Demo</h1>
      <Register />
      <hr />
      <Login />
      <hr />
      <h1>CRUD Demo</h1>
      <Students />
    </div>
  );
}

export default App;
