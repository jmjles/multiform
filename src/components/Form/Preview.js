import {
  Button,
  Container,
  Grid,
  Paper,
  Typography as Font,
} from "@material-ui/core";
import { NavigateBefore } from "@material-ui/icons";

const Preview = (props) => {
  const { values, handleBack, step } = props;
  const { firstName, lastName, age, email, food, state } = values;
  return (
    <Paper
      className={step === 4 ? "Form Active" : null}
      style={step !== 4 ? { display: "none" } : null}
    >
      <Container>
        <Font variant="h2" align="center">
          Preview
        </Font>
        <Grid container spacing={2} direction="column">
          <Grid item>
            <Font variant="body1">
              Name: {firstName.value} {lastName.value}
            </Font>
          </Grid>
          <Grid item>Age: {age.value}</Grid>
          <Grid item>Favorite Food: {food.value}</Grid>
          <Grid item>From: {state.value}</Grid>
          <Grid item>Email: {email.value}</Grid>
        </Grid>
        <Grid container style={{ paddingBottom: 12, paddingTop: 12 }}>
          <Grid item>
            <Button color="primary" variant="contained" onClick={handleBack}>
              <NavigateBefore />
              <Font variant="button">Prev</Font>
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
};

export default Preview;
