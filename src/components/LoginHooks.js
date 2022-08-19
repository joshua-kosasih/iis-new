import React from 'react';
import { useGoogleLogin } from 'react-google-login';
// import GoogleLogin from 'react-google-login';

// refresh token
import { refreshTokenSetup } from '../utils/refreshToken';

const clientId =
  '143563181875-oaoe48c64doa9avddal4pcmimrub0mqs.apps.googleusercontent.com';
  //707788443358-u05p46nssla3l8tmn58tpo9r5sommgks.apps.googleusercontent.com
  //143563181875-oaoe48c64doa9avddal4pcmimrub0mqs.apps.googleusercontent.com
  //735699469767-u7r8jsgp9ch666c8r0jqlo0shv3iv1ge.apps.googleusercontent.com

function LoginHooks() {
  const onSuccess = (res) => {
    console.log('Login Success: currentUser:', res.profileObj);
    alert(
      `Logged in successfully welcome ${res.profileObj.name}.`
    );
    refreshTokenSetup(res);
  };

  const onFailure = (res) => {
    console.log('Login failed: res:', res);
    alert(
      `Failed to login.`
    );
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    accessType: 'offline',
    // responseType: 'code',
    // prompt: 'consent',
  });

  return (
    <button onClick={signIn} className="button">
      {/* <img src="./../images/google.svg" alt="google login" className="icon"></img> */}

      <span className="buttonText">Sign-In with Google</span>
      {/* <GoogleLogin></GoogleLogin> */}
    </button>
  );
}

export default LoginHooks;
