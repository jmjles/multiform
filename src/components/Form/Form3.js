import FormStep from "./FormStep";
import Text from "./Text";

const Form3 = (props) => {
  const {
    handleChange,
    handleSubmit,
    values,
    handleInvalid,
    step,
    handleBack,
    length,
  } = props;
  const { email, food } = values;
  return (
    <FormStep
      title="Last Step!"
      className={step === 3 ? "Form Active" : "Form"}
      handleSubmit={handleSubmit}
      handleInvalid={handleInvalid}
      step={step}
      length={length}
      handleBack={handleBack}
    >
      <Text
        label="Email"
        name="email"
        type="email"
        value={email.value}
        error={email.error}
        helperText={email.error ? "Must be a valid email" : null}
        onChange={handleChange}
      />
      <Text
        label="Food"
        name="food"
        value={food.value}
        error={food.error}
        onChange={handleChange}
        helperText={food.error ? "We all have a favorite food!" : null}
        required
      />
    </FormStep>
  );
};

export default Form3;
