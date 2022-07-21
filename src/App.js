import {Routes, Route} from "react-router-dom";
import "./categories.styles.scss"
import Home from "./Components/routes/Home/Home.component";
import Navigation from "./Components/routes/Navigation/Navigation.component";
import Authentication from "./Components/routes/Authentication/Authentication.compnent";
import Shop from "./Components/routes/Shop/Shop.component";


const App = () => {


  return (
      <Routes>
        <Route path="/" element={<Navigation/>}>
          <Route index element={<Home/>} />
          <Route path="shop" element={<Shop/>}/>
          <Route path="auth" element={<Authentication/>}/>
        </Route>
        
      </Routes>
  );
}

export default App;
