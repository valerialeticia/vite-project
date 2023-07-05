import { Box, Paper, Grid, Typography, Button } from "@mui/material"
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getPostDetails } from "../../services/users";
import { Detail } from "../../types/general";
import { useSnackbarStore } from "../../store/general";


export const Details = () => {
  const params = useParams()

  const { data: detailsQuery } = useQuery<Detail>({ 
    queryKey: ['details'], 
    queryFn: () => getPostDetails(params?.id)
  })

  const handleAddMessage = useSnackbarStore(state => state.handleAddMessage)

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
            <Grid>
              <Button onClick={() => handleAddMessage('TESTE 2')}>Snackbar</Button>
            </Grid>
          </Box>
      </Grid>
    </Paper>
  )
}