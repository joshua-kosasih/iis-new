import React from 'react';
import { GoogleLogin } from 'react-google-login';

const clientId = "143563181875-oaoe48c64doa9avddal4pcmimrub0mqs.apps.googleusercontent.com"

function Login() {
    let userName = '';
    const onSuccess = (res) => {
        console.log("Login SUCCESS! res: ", res);
        userName = `${res.profileObj.name}`;
        console.log(`Logged in successfully welcome ${userName}`)
        
    }
    const onFailure = (res) => {
        console.log("Login Failed! res: ", res)
    }

    return (
        <div id = "signInButton">
            <GoogleLogin 
                clientId={clientId}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}    
            />
            
        </div>
    )
}

export default Login;