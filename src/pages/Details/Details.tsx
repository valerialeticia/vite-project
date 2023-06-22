import { Paper, Grid, Typography } from "@mui/material"

type Detail = {
  userId: number;
  id: number;
  title: string;
  body: string
}
interface Props {
  detail?: Detail;
  loading?: boolean
}

export const Details = () => {
  return (
    <Paper>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Typography>xs=8</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography>xs=4</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography>xs=4</Typography>
        </Grid>
        <Grid item xs={8}>
          <Typography>xs=8</Typography>
        </Grid>
      </Grid>
    </Paper>
  )
}