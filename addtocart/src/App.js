import "./App.css";
import Header from "./Components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cards from "./Components/Cards";
import Cardsdetails from "./Components/Cardsdetails";
import store from './Store'
import {Provider} from 'react-redux'
function App() {
  return (
    <div className="App">
      
      <Router>
        <Provider store={store}>
      <Header />
        <Routes>
          <Route exact path="/" element={<Cards />} />
          <Route  path="/cart/:id" element={<Cardsdetails />} />
        </Routes>
        </Provider>
      </Router>
    </div>
  );
}

export default App;
