import { defineRule } from "vee-validate";
import { required, email, min, numeric } from "@vee-validate/rules";

defineRule("required", required);
defineRule("email", email);
defineRule("numeric", numeric);
defineRule("redberry", (value) => {
  if (!value.endsWith("@redberry.ge")) {
    return "გთხოვთ დარეგისტრირდეთ Redberry-ს მეილით (youremail@redberry.ge)";
  }
  return true;
});
defineRule("min", min);
