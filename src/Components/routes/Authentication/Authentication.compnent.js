
import SignUpForm from "../../Sign-up/Sign-up-form.component"
import SignInForm from "../../Sign-in/Sign-in-form.component"
import "./Authentication.styles.scss"

const Authentication = () => {

    return(
        <div className="authentication-container">
            <SignInForm/>
            <SignUpForm/>
        </div>
    )
}
export default Authentication