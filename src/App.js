import {Routes, Route} from "react-router-dom";
import "./categories.styles.scss"
import Home from "./Components/routes/Home/Home.component";
import Navigation from "./Components/routes/Navigation/Navigation.component";



const App = () => {


  return (
      <Routes>
        <Route path="/" element={<Navigation/>}>
          <Route index element={<Home/>} />
        </Route>
        
      </Routes>
  );
}

export default App;
