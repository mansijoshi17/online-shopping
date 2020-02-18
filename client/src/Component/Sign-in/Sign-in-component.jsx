import React, { useState } from 'react';
import { connect } from 'react-redux';


import './Sign-in.scss';

import FormInput from '../Form-input/Form-input';
import CustomButton from '../Custom-Button/Custom-button';
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.action';


const SignIn = ({ emailSignInStart, googleSignInStart }) => {

    const [userCredentials, setuserCredentials] = useState({ email: '', password: '' });
    const { email, password } = userCredentials;

    const handleSubmit = async (event) => {
        event.preventDefault();
        emailSignInStart(email, password);
    }


    const handleChange = (event) => {
        const { name, value } = event.target;
        setuserCredentials({...userCredentials, [name]: value });
    }
    
    return (
        <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sign in with your email email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput name="email" type="email" value={email} handleChange={handleChange} label="email" />
                <FormInput name="password" type="password" value={password} handleChange={handleChange} label="password" />
                <div className="buttons"> <CustomButton type="submit"  > Sign in </CustomButton>
                    <CustomButton type="button" onClick={googleSignInStart}>
                        {' '} Sign in with google {' '}
                    </CustomButton></div>
            </form>
        </div>
    )

}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})

export default connect(null, mapDispatchToProps)(SignIn);