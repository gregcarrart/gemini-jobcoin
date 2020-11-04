/* eslint no-shadow: ["error", { "allow": ["inputs"] }] */

import { useState } from 'react';

export const useForm = (callback: any) => {
  const [inputs, setInputs] = useState({ address: '', destination: '', amount: '' });
  const handleSubmit = (event: any) => {
    if (event) {
      event.preventDefault();
    }
    callback();
  };
  const handleInputChange = (event: any) => {
    event.persist();
    setInputs(inputs => ({ ...inputs, [event.target.name]: event.target.value }));
  };
  return {
    handleSubmit,
    handleInputChange,
    inputs,
  };
};
