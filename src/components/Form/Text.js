import { Grid, TextField } from "@material-ui/core";

const Text = (props) => {
  return (
    <Grid item>
      <TextField {...props} color="primary" />
    </Grid>
  );
};

export default Text;
