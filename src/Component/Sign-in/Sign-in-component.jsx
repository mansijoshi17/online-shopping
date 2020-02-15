import React from 'react';
import { connect } from 'react-redux';


import './Sign-in.scss';

import FormInput from '../Form-input/Form-input';
import CustomButton from '../Custom-Button/Custom-button';
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.action';


class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const { emailSignInStart } = this.props;
        const { email, password } = this.state;

        emailSignInStart(email, password);
    }


    handleChange = (event) => {
        const { name, value } = event.target;

        this.setState({ [name]: value });
    }

    render() {
  
        const { googleSignInStart } = this.props;

        return (
            <div className="sign-in">
                <h2>I already have a account</h2>
                <span>Sign in with your email email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" type="email" value={this.state.email} handleChange={this.handleChange} label="email" />
                    <FormInput name="password" type="password" value={this.state.password} handleChange={this.handleChange} label="password" />
                    <div className="buttons"> <CustomButton type="submit"  > Sign in </CustomButton>
                        <CustomButton  type = "button" onClick={googleSignInStart}>
                            {' '} Sign in with google {' '}
                        </CustomButton></div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart : () => dispatch(googleSignInStart()),
    emailSignInStart : (email, password) => dispatch(emailSignInStart({email, password}))
})

export default connect(null,mapDispatchToProps)(SignIn);