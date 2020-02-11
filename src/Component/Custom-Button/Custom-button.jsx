 
import React from 'react';

import { CustomButtonContainer } from './Custom.styles'

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
  <CustomButtonContainer
    className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
    {...otherProps}
  >
    {children}
  </CustomButtonContainer>
);

export default CustomButton;