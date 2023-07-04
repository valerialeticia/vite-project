import { useState, useMemo } from 'react'
import { Container, Box, LinearProgress, SelectChangeEvent } from "@mui/material"
import { Table } from "../../components/Table/Table"
import { cells } from "../../components/Table/constants"
import { useQuery } from "react-query"
import { getPosts } from "../../services/users"

export const Posts = () => {
  const { data, isLoading, isFetching } = useQuery({ queryKey: ['posts'], queryFn: getPosts})

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

  const handlePageChange = (event: unknown, newPage: number) => {
    setPage(newPage)
  }

  const handleRowsPerPageChange = (event: SelectChangeEvent) => {
    setRowsPerPage(Number(event.target.value as string))
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
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleRowsPerPageChange}
      />
    </Container>
  )
}