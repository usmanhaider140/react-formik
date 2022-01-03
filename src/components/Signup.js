import React from "react";
import { Formik, Form } from "formik";
import TextField from "./TextField";
import * as Yup from "yup";
const Signup = () => {
  const validate = Yup.object({
    firstName: Yup.string()
      .max(15, "must be 15 characters or less")
      .required("First Name is required"),
    lastName: Yup.string()
      .max(20, "must be 20 characters or less")
      .required("Last Name is required"),
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string()
      .min(6, "password must be 6 or more characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password must match")
      .required("Confirm Password is required"),
  });
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={validate}
      onSubmit={(values) => console.log(values)}
    >
      {() => (
        <div>
          <h1 className="my-4 font-weight-bold-display-4">Sign Up</h1>
          <Form>
            <TextField label="First Name" type="text" name="firstName" />
            <TextField label="Last Name" type="text" name="lastName" />
            <TextField label="Email" type="email" name="email" />
            <TextField label="Password" type="password" name="password" />
            <TextField
              label="Confirm Password"
              type="password"
              name="confirmPassword"
            />
            <button className="btn btn-dark mt-3" type="submit">
              Register
            </button>
            <button className="btn btn-danger mx-4 mt-3" type="reset">
              Reset
            </button>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default Signup;
