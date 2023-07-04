import { useState } from 'react'
import { 
  Box,
  CircularProgress,
  IconButton,
  FormControl,
  Link,
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
} from "@mui/material"
import TableMUI from '@mui/material/Table'
import InfoIcon from '@mui/icons-material/Info'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { Rows } from "../../types/general"
import { Link as  LinkRouter } from "react-router-dom"
import { useSnackbarStore } from '../../store/general'

type Cells = {
  label: string
}
interface TableProps {
  rows: Rows[];
  cells: Cells[];
  loading: boolean;
  rowsPerPage?: number;
  page: number;
  onPageChange: (event: unknown, newPage: number) => void;
  onRowsPerPageChange?: (event: SelectChangeEvent) => void
}

export const Table = ({ 
  rows, 
  cells, 
  loading, 
  rowsPerPage, 
  page, 
  onPageChange, 
  onRowsPerPageChange 
}: TableProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const addMessage = useSnackbarStore(state => state.addMessage)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  }

  const handleClose = () => {
    setAnchorEl(null);
  }
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
              key={row.id}
            >
              <TableCell component="td" scope="row" align="left">{row.id.toString()}</TableCell>
              <TableCell component="td" scope="row" align="left">
                {row.title}
              </TableCell>
              <TableCell component="td" scope="row" align="left">{row.body}</TableCell>
              <TableCell component="td" scope="row" align="left">
                <IconButton 
                  id="basic-button"
                  aria-controls={open ? 'basic-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}
                  sx={{ width: 20, height: 20}}
                >
                  <MoreVertIcon />
                </IconButton> 
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    'aria-labelledby': 'basic-button',
                  }}
                >
                  <MenuItem sx={{ display: 'flex', alignItems: 'center'}} onClick={handleClose}>
                    <Link component={LinkRouter} to={`/posts/${row.id}`} sx={{ mr: 0.5 }}>
                      <InfoIcon sx={{ width: 25, height: 25, mt: 0.5 }} /> 
                      Info
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={() => addMessage('Testandoooooooo!!', true)}>Snackbar aqui</MenuItem>
                  <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </TableMUI>
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
              ['5', '10', '20'].map((item, index) => (
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
      <Pagination count={rows?.length || 0} page={page} onChange={onPageChange} />
    </TableContainer>
  )
}