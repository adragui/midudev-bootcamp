import "./App.css";
import Mensaje from "./Mensaje.js";

function App() {
    return (
        <div className="App">
            <Mensaje color="green" message="Estamos trabajndo" />
            <Mensaje color="blue" message="En un curso" />
            <Mensaje color="yellow" message="De React" />
        </div>
    );
}

export default App;
