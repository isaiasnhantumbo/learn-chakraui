import React from 'react';
import {
  Input as CharkraInput,
  InputProps as ChakraInputProps,
} from '@chakra-ui/core';

const Input: React.FC<ChakraInputProps> = (props) => {
  return (
    <CharkraInput
      height="50px"
      backgroundColor="gray.800"
      focusBorderColor="purple.500"
      borderRadius="sm"
      {...props}
    />
  );
};

export default Input;
