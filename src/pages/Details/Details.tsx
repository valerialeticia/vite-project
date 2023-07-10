import { Box, Paper, Grid, Typography, Button } from "@mui/material"
import { useLocation } from "react-router-dom";
import { useSnackbarStore } from "../../store/general";
import { useMemo } from "react";


export const Details = () => {
  const handleAddMessage = useSnackbarStore(state => state.handleAddMessage)

  const useQueryParams = () => {
    const location = useLocation()
    console.log('location >>>', location)
    return useMemo(() => new URLSearchParams(location.search), [location.search])
  }

  const query = useQueryParams()
  console.log(query)

  return (
    <Paper elevation={0} sx={{ p: 4 }}>
      <Grid container spacing={2}>
          <Box component="div">
            <Grid item xs={8}>
              <Typography>{query.get("name")}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography>{query.get("trips")}</Typography>
            </Grid>
            <Grid item xs={4}>
              <>
              {Array.from(query.values()).map((item) => (
                <Typography key={item}>{/*item.name*/}-</Typography>
              ))}
              </>
            </Grid>
            <Grid>
              <Button onClick={() => handleAddMessage('TESTE 2')}>Snackbar</Button>
            </Grid>
          </Box>
      </Grid>
    </Paper>
  )
}