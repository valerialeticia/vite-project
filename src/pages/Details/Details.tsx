import { Box, Paper, Grid, Typography } from "@mui/material"
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getPostDetails } from "../../services/users";
import { Detail } from "../../types/general";


export const Details = () => {
  const params = useParams()

  const { data: detailsQuery } = useQuery<Detail>({ 
    queryKey: ['details'], 
    queryFn: () => getPostDetails(params?.id)
  })

  return (
    <Paper elevation={0} sx={{ p: 2 }}>
      <Grid container spacing={2}>
          <Box component="div">
            <Grid item xs={8}>
              <Typography>{detailsQuery?.title}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography>{detailsQuery?.body}</Typography>
            </Grid>
          </Box>
      </Grid>
    </Paper>
  )
}