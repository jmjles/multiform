import FormStep from "./FormStep";
import Text from "./Text";

const Form1 = (props) => {
  const {
    handleChange,
    handleSubmit,
    values,
    handleInvalid,
    step,
    handleBack,
  } = props;
  const { firstName, lastName } = values;
  return (
    <FormStep
      title="About You?"
      className={step === 1 ? "Form Active" : "Form"}
      handleSubmit={handleSubmit}
      handleInvalid={handleInvalid}
      step={step}
      handleBack={handleBack}
    >
      <Text
        label="First Name"
        name="firstName"
        value={firstName.value}
        error={firstName.error}
        helperText={
          firstName.error ? "Must be at least 2 characters long." : null
        }
        onChange={handleChange}
        inputProps={{ minLength: 2 }}
        required
      />
      <Text
        label="Last Name"
        name="lastName"
        value={lastName.value}
        error={lastName.error}
        helperText={
          lastName.error ? "Must be at least 2 characters long." : null
        }
        onChange={handleChange}
        inputProps={{ minLength: 2 }}
        required
      />
    </FormStep>
  );
};

export default Form1;
