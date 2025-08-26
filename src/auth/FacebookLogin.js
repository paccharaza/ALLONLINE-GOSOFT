import FacebookLogin from 'react-facebook-login'
import { IoLogoFacebook } from "react-icons/io";

const responseFacebook = (response) => {
    console.log("login result", response);
    window.location = '/'
}
const componentClicked = (data) => {
    console.warn(data);
}

function facebookLogin() {
    return (
        <div className="App">
            <FacebookLogin
                appId="732301718273637"
                textButton={<div><IoLogoFacebook />Login Facebook</div>}
                fields="name,email,picture"
                onClick={componentClicked}
                callback={responseFacebook}
                cssClass="Facebookstyle"
            />
        </div>
    );
}

export default facebookLogin