import { Paper, Grid, Typography } from "@mui/material"
import { useParams } from "react-router-dom";

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
  const params = useParams()
  console.log(params)
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