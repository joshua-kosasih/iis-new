import React from 'react';
import '../../App.css';
// import LoginHooks from '../LoginHooks';
// import LogoutHooks from '../LogoutHooks';
import LoginButton from "./../Login";
// import LogoutButton from "./../Logout";
import { useEffect } from 'react';
import { gapi } from 'gapi-script';

const clientId = "143563181875-oaoe48c64doa9avddal4pcmimrub0mqs.apps.googleusercontent.com";

export default function SignUp() {
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: ""
      })
    };
    gapi.load('client: auth2', start);
  });

  return  (
    <div className='sign-up'>
      
      

      {/* <h2>Hooks way</h2> */}
      {/* <LoginHooks />
      <LogoutHooks /> */}
      <LoginButton />
      
    </div>
  );;
}
