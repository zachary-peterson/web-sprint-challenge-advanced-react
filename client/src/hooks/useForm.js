// write your custom hook here to control your checkout form
import { useState } from 'react';

// const initialValue = {
//     firstName: "",
//     lastName: "",
//     address: "",
//     city: "",
//     state: "",
//     zip: "",
//   };

const useForm = initVal => {
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [values, setValues] = useState(initVal);

    const handleChanges = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
      };

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowSuccessMessage(true);
    };

      return {
          values,
          showSuccessMessage,
          handleChanges,
          handleSubmit
      }
};

export default useForm;