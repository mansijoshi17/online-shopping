import React from 'react';

import './Sign-in-Sign-Up.scss';
import SignIn from '../../Component/Sign-in/Sign-in-component';
import SignUp from '../../Component/Sign-up/Sign-up-component';


const SignInAndSignOut = () => (
    <div className="sign-in-and-sign-up">
        <SignIn />
        <SignUp />
    </div>
)

export default SignInAndSignOut;