import React, { useState } from "react";
import { useFormik } from "formik";

const RegistrationForm = () => {
  const [step, setStep] = useState(1);

  const { handleChange, handleSubmit, values } = useFormik({
    initialValues: {
      name: "",
      NIK: "",
    },
    onSubmit: () => {
      // Submit logic
    },
  });

  const nextStep = () => {
    setStep(step + 1);
  };

  return (
    <form onSubmit={handleSubmit}>
      {step === 1 && (
        <>
          <input
            name="name"
            placeholder="Nama"
            value={values.name}
            onChange={handleChange}
          />
          <button type="button" onClick={nextStep}>
            Next
          </button>
        </>
      )}
      {step === 2 && (
        <>
          <input
            name="NIK"
            placeholder="NIK"
            value={values.NIK}
            onChange={handleChange}
          />
          <button type="button" onClick={nextStep}>
            Next
          </button>
        </>
      )}
      {step === 3 && (
        <>
          <button type="submit">Submit</button>
        </>
      )}
    </form>
  );
};

export default RegistrationForm;
