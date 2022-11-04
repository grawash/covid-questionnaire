import { configure } from "vee-validate";
import { localize } from "@vee-validate/i18n";
import en from "@vee-validate/i18n/dist/locale/en.json ";
import ka from "@vee-validate/i18n/dist/locale/ka.json ";

configure({
  generateMessage: localize({
    en: {
      ...en,
      messages: {
        required: "This field is required",
        email: "This input is not in email format",
        min: "{field} must have at least 0:{min} symbols",
        numeric: "This field should contain only numbers",
      },
      names: {
        name: "Name",
        lastName: "last name",
        email: "email",
      },
    },
    ka: {
      ...ka,
      messages: {
        required: "გთხოვთ შეავსოთ მოცემული ველი",
        email: "თქვენს მიერ შეყვანილი ტექსტი არ აკმაყოფილებს მეილის ფორმატს",
        min: "{field} ველი უნდა შეიცავდეს მინიმუმ 0:{min} სიმბოლოს",
        numeric: "შეიყვანეთ მხოლოდ ციფრები.",
      },
      names: {
        name: "სახელის",
        lastName: "გვარის",
        email: "მეილის",
      },
    },
  }),
});
