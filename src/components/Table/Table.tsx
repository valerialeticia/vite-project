import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { 
  Box,
  IconButton,
  FormControl,
  Menu,
  MenuItem,
  Pagination,
  Paper, 
  Select,
  SelectChangeEvent,
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow
} from '@mui/material'
import TableMUI from '@mui/material/Table'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { PassengerDataResponse } from '@/types/general'
import { useSnackbarStore } from '@/store/general'
import { CircularProgress } from '../CircularProgress'

type Cells = {
  label: string
}
interface TableProps {
  rows: PassengerDataResponse[];
  cells: Cells[];
  loading: boolean;
  rowsPerPage?: number;
  page: number;
  count: number;
  onPageChange: (event: unknown, newPage: number) => void;
  onRowsPerPageChange?: (event: SelectChangeEvent) => void
}

export const Table = ({ 
  rows, 
  cells, 
  loading, 
  rowsPerPage, 
  page, 
  count,
  onPageChange, 
  onRowsPerPageChange
}: TableProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [rowInfo, setRowInfo] = useState<PassengerDataResponse | null>(null)
  const open = Boolean(anchorEl)
  const handleAddMessage = useSnackbarStore(state => state.handleAddMessage)
  const navigate = useNavigate()

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>, row: PassengerDataResponse) => {
    setAnchorEl(event.currentTarget)
    setRowInfo(row)
  }

  const handleClose = () => {
    setAnchorEl(null)
    setRowInfo(null)
  }

  const goToDetails = (row: PassengerDataResponse) => (
    navigate({
      pathname: '/posts/detail',
      search: `?name=${row.name}&trips=${row.trips}&airline=${encodeURI(JSON.stringify(row.airline))}`
    })
  )

  return (
    <TableContainer component={Paper}>
      <TableMUI sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {cells.map(cell => (
              <TableCell 
                component="th" 
                align="left" 
                sx={{ fontWeight: 'bold' }} 
                key={cell.label}
              >
                {cell.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows?.map(row => (
            <TableRow
              component="tr"
              key={row.name}
            >
              <TableCell component="td" scope="row" align="left">
                {row.name}
              </TableCell>
              <TableCell component="td" scope="row" align="left">{row.trips.toString()}</TableCell>
              <TableCell component="td" scope="row" align="left">
                <IconButton 
                  id="basic-button"
                  aria-controls={open ? 'basic-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={(event) => handleClick(event, row)}
                  sx={{ width: 20, height: 20}}
                >
                  <MoreVertIcon />
                </IconButton> 
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </TableMUI>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        sx={{ boxShadow: 'none' }}
      >
        <MenuItem onClick={() => handleAddMessage('deu ruim :C', 'error')}>Snackbar aqui</MenuItem>
        <MenuItem onClick={() => goToDetails(rowInfo as PassengerDataResponse)}>Info</MenuItem>
      </Menu>
      {loading &&  
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 2 }}>
          <CircularProgress />
        </Box>
      }
      <FormControl sx={{ minWidth: 84 }} size="small">
          <Select
            labelId="pages-select"
            id="pages-select"
            value={rowsPerPage?.toString()}
            onChange={onRowsPerPageChange}
            inputProps={{MenuProps: {disableScrollLock: true}}}
            sx={{
              '.MuiSelect-select': {
                py: '5px',
              }
            }}
          >
            {
              ['10', '20', '50'].map((item, index) => (
                <MenuItem 
                  value={item} 
                  key={index}
                >
                  {item}
                </MenuItem>
              ))
            }
          </Select>
        </FormControl>
      <Pagination count={count} page={page} onChange={onPageChange} />
    </TableContainer>
  )
}
