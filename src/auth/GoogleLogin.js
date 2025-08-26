import { GoogleLogin } from 'react-google-login'
import { IoLogoGoogleplus } from "react-icons/io";

const clientId = "936832981032-njd8boe80j4vs8hub11sq4enbvv4akla.apps.googleusercontent.com"

function googleLogin() {

    const onSuccess = (res) => {
        alert("Login success")
        console.log("login success", res.profileObj);
        window.location = "/"
    }

    const onFailure = (res) => {
        console.log("login failed", res);
        if (res.error === "popup_closed_by_user") {
            alert("Login failed. Popup window closed.")
        } 
        // else {
        //     console.log(res)
        //     alert("Login failed. Please try again.")
        // }
    }
   

    return (
        <div id='signInButton'>
            <GoogleLogin
                clientId={clientId}
                buttonText="Google Login"
                render={renderProps => (
                    <button
                        onClick={renderProps.onClick}
                        disabled={renderProps.disabled}
                        className="ButtonGoogle" ><IoLogoGoogleplus />  Login With Google</button>
                )}
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={"single_host_origin"}
                uxMode={"redirect"}
                redirectUri={"http://localhost:3000"}
            />
        </div>
    )
}
export default googleLogin;