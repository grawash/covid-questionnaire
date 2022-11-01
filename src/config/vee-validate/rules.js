import { defineRule } from "vee-validate";
import { required, email, min } from "@vee-validate/rules";

defineRule("required", required);
defineRule("email", email);
defineRule("redberry", (value) => {
  if (!value.endsWith("@redberry.ge")) {
    return "გთხოვთ დარეგისტრირდეთ Redberry-ს მეილით (youremail@redberry.ge)";
  }
  return true;
});
defineRule("min", min);
