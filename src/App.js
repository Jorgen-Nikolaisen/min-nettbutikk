import {Routes, Route} from "react-router-dom";
import "./categories.styles.scss"
import Home from "./Components/routes/Home/Home.component";
import Navigation from "./Components/routes/Navigation/Navigation.component";
import Signin from "./Components/routes/Sign-in/Sign-in.compnent";



const App = () => {


  return (
      <Routes>
        <Route path="/" element={<Navigation/>}>
          <Route index element={<Home/>} />
          <Route path="sign-in" element={<Signin/>}/>
        </Route>
        
      </Routes>
  );
}

export default App;
