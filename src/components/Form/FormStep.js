import { Container, Grid, Paper, Typography as Font } from "@material-ui/core";
import Navigation from "./Navigation";

const FormStep = (props) => {
  const {
    title,
    handleSubmit,
    step,
    handleInvalid,
    handleBack,
    className,
    length,
  } = props;
  return (
    <Paper className={className}>
      <Container>
        <form onSubmit={handleSubmit} onInvalid={handleInvalid}>
          <Font variant="h2" align="center">
            {title}
          </Font>
          <Grid container spacing={2}>
            {props.children}
          </Grid>
          <Navigation step={step} handleBack={handleBack} length={length} />
          <Font variant="body2" style={{ paddingBottom: "12px" }}>
            * Example Only, No information will be used
          </Font>
        </form>
      </Container>
    </Paper>
  );
};

export default FormStep;
