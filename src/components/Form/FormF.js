import { useState } from "react";

const FormF = (props) => {
  const { length = length - 1 } = props;
  const [firstName, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState(false);

  const [lastName, setLastName] = useState("");
  const [lastNameError, setLastNameError] = useState(false);

  const [age, setAge] = useState("");
  const [ageError, setAgeError] = useState(false);

  const [state, setState] = useState("");
  const [stateError, setStateError] = useState(false);

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);

  const [food, setFood] = useState("");
  const [foodError, setFoodError] = useState(false);

  const [step, setStep] = useState(1);

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "firstName":
        if (firstNameError) setFirstNameError(false);
        setFirstName(value.trim().toLowerCase());
        break;
      case "lastName":
        if (lastNameError) setLastNameError(false);
        setLastName(value.trim().toLowerCase());
        break;
      case "age":
        if (ageError) setAgeError(false);
        setAge(value);
        break;
      case "state":
        if (stateError) setStateError(false);
        setState(value);
        break;
      case "email":
        if (emailError) setEmailError(false);
        setEmail(value.trim().toLowerCase());
        break;
      case "food":
        if (foodError) setFoodError(false);
        setFood(value);
        break;
      default:
        console.log(`Incorrect Name: ${name}`);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setStep((prev) => prev + 1);
  };
  const handleBack = () => setStep((prev) => prev - 1);
  const handleInvalid = (e) => {
    const {
      target: { name },
    } = e;
    e.preventDefault();
    switch (name) {
      case "firstName":
        setFirstNameError(true);
        break;
      case "lastName":
        setLastNameError(true);
        break;
      case "age":
        setAgeError(true);
        break;
      case "state":
        setStateError(true);
        break;
      case "email":
        setEmailError(true);
        break;
      case "food":
        setFoodError(true);
        break;
      default:
        console.log(`Invalid name: ${name}`);
    }
  };
  return {
    handleChange,
    handleSubmit,
    handleInvalid,
    handleBack,
    step,
    values: {
      firstName: { value: firstName, error: firstNameError },
      lastName: { value: lastName, error: lastNameError },
      age: { value: age, error: ageError },
      state: { value: state, error: stateError },
      email: { value: email, error: emailError },
      food: { value: food, error: foodError },
    },
  };
};

export default FormF;
