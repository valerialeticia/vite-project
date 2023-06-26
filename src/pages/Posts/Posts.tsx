import { useState, useMemo } from 'react'
import { Container, Box, LinearProgress } from "@mui/material"
import { Table } from "../../components/Table/Table"
import { cells } from "../../components/Table/constants"
import { useQuery } from "react-query"
import { getUsers } from "../../services/users"

export const Posts = () => {
  const { data, isLoading, isFetching } = useQuery({ queryKey: ['users'], queryFn: getUsers})

  const [page, setPage] = useState(1)
  const [rowsPerPage, setRowsPerPage] = useState(5)

  const visibleRows = useMemo(
    () =>
    data?.data.slice(
      page * rowsPerPage,
      page * rowsPerPage + rowsPerPage,
    ),
    [data?.data, page, rowsPerPage]
  )

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(Number(event.target.value))
    setPage(1)
  }
  
  return (
    <Container sx={{ mt: 3}}>
      {isFetching &&  
        <Box sx={{ display: 'flex' }}>
          <LinearProgress />
        </Box>
      }
      <Table 
        rows={visibleRows} 
        cells={cells} 
        loading={isLoading} 
        page={page}
        rowsPerPage={rowsPerPage}
        handleChangePage={handleChangePage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Container>
  )
}