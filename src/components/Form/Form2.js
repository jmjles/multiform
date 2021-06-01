import FormStep from "./FormStep";
import Text from "./Text";
const Form2 = (props) => {
  const {
    handleChange,
    handleSubmit,
    values,
    handleInvalid,
    step,
    handleBack,
  } = props;
  const { age, state } = values;
  return (
    <FormStep
      title="Almost There..."
      className={step === 2 ? "Form Active" : "Form"}
      handleSubmit={handleSubmit}
      handleInvalid={handleInvalid}
      step={step}
      handleBack={handleBack}
    >
      <Text
        label="Age"
        name="age"
        type="number"
        value={age.value}
        error={age.error}
        helperText={age.error ? "Must between 18 - 100" : null}
        onChange={handleChange}
        inputProps={{ min: 18, max: 100 }}
        required
      />
      <Text
        label="State"
        name="state"
        value={state.value}
        error={state.error}
        onChange={handleChange}
      />
    </FormStep>
  );
};

export default Form2;
