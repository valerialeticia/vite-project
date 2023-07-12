import Box from '@mui/material/Box'
import CircularMUI, {
  circularProgressClasses,
  CircularProgressProps,
} from '@mui/material/CircularProgress'


export const CircularProgress = (props: CircularProgressProps) => {
  return (
    <Box sx={{ position: 'relative' }}>
      <CircularMUI
        variant="determinate"
        sx={{
          color: '#AAB3DF'
        }}
        size={40}
        thickness={4}
        {...props}
        value={100}
      />
      <CircularMUI
        variant="indeterminate"
        disableShrink
        sx={{
          color: '#090051',
          position: 'absolute',
          left: 0,
          [`& .${circularProgressClasses.circle}`]: {
            strokeLinecap: 'round'
          }
        }}
        size={40}
        thickness={4}
        {...props}
      />
    </Box>
  )
}
