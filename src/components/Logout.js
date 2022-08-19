import React from 'react';
import { GoogleLogin } from 'react-google-login';

const clientId = "143563181875-oaoe48c64doa9avddal4pcmimrub0mqs.apps.googleusercontent.com"

function Logout() {

    const onSuccess = (res) => {
        console.log("Logout SUCCESS! res: ", res);
    }

    return (
        <div id = "signOutButton">
            <GoogleLogin 
                clientId={clientId}
                buttonText="Logout"
                onLogoutSuccess={onSuccess}
            />
        </div>
    )
}

export default Logout;