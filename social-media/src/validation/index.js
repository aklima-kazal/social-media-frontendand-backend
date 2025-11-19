import * as Yup from "yup";

export const signUp = Yup.object({
  fName: Yup?.string().required("First name is required"),
  lName: Yup?.string().required("Last name is required"),
  email: Yup?.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup?.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  gender: Yup?.string().required("Gender is required"),
});
export const signIn = Yup.object({
  email: Yup?.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup?.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});
