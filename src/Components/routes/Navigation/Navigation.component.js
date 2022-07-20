import { Fragment, useContext } from "react";
import { Outlet, Link} from "react-router-dom";
import {ReactComponent as CrownLogo} from "../../../assets/crown.svg"
import "./navigation.styles.scss"
import { UserContext } from "../../../Contexts/user.contexts";
import { signOutUser } from "../../../Utils/Firebase/firebase.utils";


const Navigation = () => {
  const {currentUser,} = useContext(UserContext)
 

    return(
      <Fragment>
        <div className="navigation">
            
            <Link  className="logo-container" to="/">
                <CrownLogo className="logo"/>
            </Link>
            <div className="nav-links-container">
                <Link className="nav-link" to="/shop">
                    SHOP
                </Link>
                {
                  currentUser ? (
                    <span className="nav-link" onClick={signOutUser}>Sign out</span>)
                    : (<Link className="nav-link" to="/auth">
                      Sign in
                    </Link>
                    )
                }

            </div>
        </div>
        <Outlet/>
      </Fragment>
        
     
    )
  }
 
export default Navigation