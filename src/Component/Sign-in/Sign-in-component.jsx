import React from 'react';


import './Sign-in.scss';

import { signInwithGoogle } from '../../Firebase/Firebase';
import FormInput from '../Form-input/Form-input';
import CustomButton from '../Custom-Button/Custom-button';


class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();


        this.setState({ email: ' ', password: '' });
    }


    handleChange = (event) => {
        const { name, value } = event.target;

        this.setState({ [name]: value });
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have a account</h2>
                <span>Sign in with your email email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" type="email" value={this.state.email} handleChange={this.handleChange} label="email" />
                    <FormInput name="password" type="password" value={this.state.password} handleChange={this.handleChange} label="password" />
                    <div className="buttons"> <CustomButton type="submit" > Sign in </CustomButton>
                        <CustomButton onClick={signInwithGoogle}>
                            {' '} Sign in with google {' '}
                        </CustomButton></div>
                </form>
            </div>
        )
    }
}


export default SignIn;