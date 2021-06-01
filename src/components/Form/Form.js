import { Grid } from "@material-ui/core";
import Form1 from "./Form1";
import Form2 from "./Form2";
import Form3 from "./Form3";
import FormF from "./FormF";
import "./Form.css";
import Preview from "./Preview";
const Form = (props) => {
  const length = 3;
  const {
    handleChange,
    handleSubmit,
    handleInvalid,
    values,
    step,
    handleBack,
  } = FormF({
    length,
  });

  const formProps = {
    handleChange,
    handleSubmit,
    values,
    handleInvalid,
    step,
    handleBack,
    length,
  };

  const forms = [
    <Form1 {...formProps} />,
    <Form2 {...formProps} />,
    <Form3 {...formProps} />,
    <Preview {...formProps} />,
  ];
  return (
    <>
      <Grid container justify="center">
        {forms.map((f) => f)}
      </Grid>
    </>
  );
};

export default Form;
