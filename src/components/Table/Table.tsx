import { 
  Box,
  CircularProgress,
  IconButton,
  Link,
  Pagination,
  Paper, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TablePagination,
  TableRow
} from "@mui/material"
import TableMUI from '@mui/material/Table'
import InfoIcon from '@mui/icons-material/Info'
import { Rows } from "../../types/table"
import { Link as  LinkRouter } from "react-router-dom"

type Cells = {
  label: string
}
interface TableProps {
  rows: Rows[];
  cells: Cells[];
  loading: boolean;
  rowsPerPage?: number;
  page: number;
  handleChangePage: (event: unknown, newPage: number) => void;
  handleChangeRowsPerPage?: (event: React.ChangeEvent<HTMLInputElement>) => void

}

export const Table = ({ rows, cells, loading, rowsPerPage, page, handleChangePage, handleChangeRowsPerPage }: TableProps) => {
  return (
    <TableContainer component={Paper}>
      <TableMUI sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {cells.map(cell => (
              <TableCell component="th" align="left" sx={{ fontWeight: 'bold' }} key={cell.label}>{cell.label}</TableCell>
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
                <IconButton sx={{ width: 20, height: 20}}>
                  <Link component={LinkRouter} to={`/posts/${row.id}`}>
                    <InfoIcon />
                  </Link>
                </IconButton> 
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </TableMUI>
      {loading &&  
        <Box sx={{ display: 'flex' }}>
          <CircularProgress />
        </Box>
      }
      {/*<TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={rows?.length || 0}
        rowsPerPage={rowsPerPage}
        page={!rows?.length || rows?.length <= 0 ? 0 : page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
    />*/}
      <Pagination count={rows?.length || 0} page={page} onChange={handleChangePage} />
    </TableContainer>
  )
}