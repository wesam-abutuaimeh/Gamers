import { boolean, object, string } from "yup";
import REGEX from "./regex";

export const signinSchema = object().shape({
  email: string().matches(REGEX.EMAIL, "Whoops! Invaild Email").required(),
  password: string()
    .min(6, "Password must be more than 6 characters")
    .max(15, "Password must be less than 12 characters")
    .matches(
      REGEX.PASSWORD,
      "Whoops! Write letters, digits, and special characters"
    )
    .required("Whoops! Password Cannot Be Empty!"),
});

export const registrationSchema = object().shape({
  ...signinSchema.fields,
  name: string().required(),
  phoneNumber: string()
    .typeError("Whoops! Phone number must be a number")
    .test("phone-number", "Whoops! Invalid phone number format", (value) =>
      REGEX.PHONE_NUMBER.test(value)
    )
    .required("Whoops! Phone number is required"),
  agreement: boolean().oneOf([true], "You Must Agree of our  Policy"),
});
