import { useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import { Paper, Grid, Typography, Button } from '@mui/material'
import { useSnackbarStore } from '@/store/general'
import { Airline } from '@/types/general'


export const Details = () => {
  const handleAddMessage = useSnackbarStore(state => state.handleAddMessage)

  const useQueryParams = () => {
    const location = useLocation()
    return useMemo(() => new URLSearchParams(location.search), [location.search])
  }

  const query = useQueryParams()
  const airline = JSON.parse(query.get('airline') || '') as Airline[]

  return (
    <Paper elevation={0} sx={{ p: 4 }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Typography sx={{fontWeight: 'bold'}}>Nome:</Typography>
          <Typography>{query.get('name')}</Typography>
        </Grid>
        <Grid item xs={4}>
        <Typography sx={{fontWeight: 'bold'}}>Viagens:</Typography>
          <Typography>{query.get('trips')}</Typography>
        </Grid>
        <Grid item xs={4}>
          <Button onClick={() => handleAddMessage('TESTE 2')}>Snackbar</Button>
        </Grid>
      </Grid>
      {airline.map((item, index) => (
        <Grid container spacing={2} key={index} mt={3}>
          <Grid item xs={4}>
            <Typography sx={{fontWeight: 'bold'}}>Id:</Typography>
            <Typography>{item.id.toString()}</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography sx={{fontWeight: 'bold'}}>Linha aérea:</Typography>
            <Typography>{item.name}</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography sx={{fontWeight: 'bold'}}>País:</Typography>
            <Typography>{item.country}</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography sx={{fontWeight: 'bold'}}>Slogan:</Typography>
            <Typography>{item.slogan}</Typography>
          </Grid>
        </Grid>
      ))}
    </Paper>
  )
}
