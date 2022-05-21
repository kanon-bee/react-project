import { BrowserRouter, Route } from "react-router-dom";
import "./App.scss";
import NameList from "./components/NameList";
import InfoCard from "./components/InfoCard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={NameList} />
        <Route exact path="/users/:id" component={InfoCard} />
      </BrowserRouter>
    </div>
  );
}

export default App;
