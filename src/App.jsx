import "bootstrap/dist/css/bootstrap.min.css";
import HelloMyFriendsPlus from "./components/HelloMyFriendsPlus";
function App() {
  const saludo = "my friends";
  return (
    <>
      <h1>Ejercicio 03</h1>
      <HelloMyFriendsPlus saludo={saludo} />
    </>
  );
}

export default App;
