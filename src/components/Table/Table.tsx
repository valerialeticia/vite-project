import { 
  Paper, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow 
} from "@mui/material"
import TableMUI from '@mui/material/Table'

type Rows = {
  userId: number;
  id: number;
  title: string;
  completed: boolean
}[]

type Cells = {
  label: string
}[]
interface TableProps {
  rows: Rows;
  cells: Cells
}

export const Table = ({ rows, cells }: TableProps) => {
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
          {rows.map((row) => (
            <TableRow
              component="tr"
              key={row.userId}
            >
              <TableCell component="td" scope="row" align="left">{row.userId.toString()}</TableCell>
              <TableCell component="td" scope="row" align="left">
                {row.title}
              </TableCell>
              <TableCell component="td" scope="row" align="left">{row.completed.toString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </TableMUI>
    </TableContainer>
  )
}