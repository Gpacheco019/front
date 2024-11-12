import { useState } from 'react';

export default function useErrors() {
  const [errors, setErrors] = useState([]);

  function setError({ fieldName, message }) {
    const errorAlreadyExists = errors.find(error => error.field === fieldName);

    if (errorAlreadyExists) return;

    setErrors(prev => [...prev, { field: fieldName, message }]);
  }

  function removeError(fieldName) {
    setErrors(prev => prev.filter(error => error.field !== fieldName));
  }

  const getErrorMessageByFieldName = fieldName => {
    const result = errors.find(error => error.field === fieldName)?.message;
    return result;
  };

  return {
    errors,
    setError,
    removeError,
    getErrorMessageByFieldName,
  };
}
