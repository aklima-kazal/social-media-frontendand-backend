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
export const findUser = Yup.object({
  email: Yup?.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup?.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});
export const userCode = Yup.object({
  code: Yup?.string()
    .min(5, "Code must be at least 5 characters")
    .max(5, "Code must be at most 5 characters")
    .required("Code is required"),
});
export const newPassword = Yup.object({
  password: Yup?.string()
    .min(8, "Password must be at least 8 characters")
    .required("Enter Your New Password "),
});
