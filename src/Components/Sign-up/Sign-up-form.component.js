import { async } from "@firebase/util"
import { useState,} from "react"
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../Utils/Firebase/firebase.utils"
import FormInput from "../Form-input/Form-input.component"
import "./Sign-up-form.styles.scss"
import Button from "../Button/Button.component"
const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
}


const SignUpForm = () => {
    
    const [formFields, setFormFields] = useState(defaultFormFields)
    const {displayName, email, password, confirmPassword} = formFields;

    const resetFormField = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if(password != confirmPassword){
            alert("passwords do not match")
            return;
        }

        try{
            const {user} = await createAuthUserWithEmailAndPassword(
                email, 
                password
                );
               

            await createUserDocumentFromAuth(user, {displayName})
            resetFormField()

        } catch(error){
            if(error.code == "auth/email-already-in-use"){
                alert("Cannot create user, email already in use");
            }
            console.log("user creation encountered an error", error);
        }
    }

    const handleChange = (event) => {
        const {name, value} = event.target; 

        setFormFields({...formFields, [name]: value })

    }


    return(
        <div className="sign-up-container">
        <h2>Dont have an account?</h2>
        <span>Sign up with your email and password</span>
        <form onSubmit={handleSubmit}>
            
            <FormInput label="Dispay Name" type="text" onChange={handleChange} name="displayName" value={displayName} required/>
    
            <FormInput label="Email" type="email" onChange={handleChange} name="email" value={email} required/>

            <FormInput label="Password" type="password" onChange={handleChange} name="password" value={password} required/>

            <FormInput label="Confirm Password" type="password" onChange={handleChange} name="confirmPassword" value={confirmPassword} required/>

            <Button  type="submit">Sign up</Button>
        </form>
        </div>
    )
}

export default SignUpForm