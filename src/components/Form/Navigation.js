import { Button, Grid, Typography as Font } from "@material-ui/core";
import { NavigateBefore, NavigateNext } from "@material-ui/icons";

const Navigation = (props) => {
  const { step, length, handleBack } = props;
  return (
    <Grid
      container
      justify={step !== 1 ? "space-between" : "flex-end"}
      style={{ paddingBottom: "12px", paddingTop: "24px" }}
    >
      {step !== 1 && (
        <Grid item>
          <Button variant="contained" color="primary" onClick={handleBack}>
            <NavigateBefore />
            <Font variant="button">Prev</Font>
          </Button>
        </Grid>
      )}
      {length === step ? (
        <Grid item>
          <Button variant="contained" color="primary" type="submit">
            <Font variant="button">Preview</Font>
          </Button>
        </Grid>
      ) : (
        <Grid item>
          <Button variant="contained" color="primary" type="submit">
            <Font variant="button">Next</Font>
            <NavigateNext />
          </Button>
        </Grid>
      )}
    </Grid>
  );
};

export default Navigation;
