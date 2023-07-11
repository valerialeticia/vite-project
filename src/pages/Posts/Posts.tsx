import { useState } from 'react'
import { Container, Box, LinearProgress, SelectChangeEvent } from "@mui/material"
import { Table } from "@/components/Table/Table"
import { cells } from "@/components/Table/constants"
import { useQuery } from "react-query"
import { getPassengers } from "@/services/users"
import { PassengerDataResponse } from '@/types/general'

export const Posts = () => {
  const [page, setPage] = useState(1)
  const [rowsPerPage, setRowsPerPage] = useState(10)


  const params = {
    page: page,
    size: rowsPerPage
  }

  const { data, isLoading, isFetching } = useQuery({ 
    queryKey: ['passengers', {...params}],
    queryFn: () => getPassengers(params),
    keepPreviousData: true
  })

  const handlePageChange = (_: unknown, newPage: number) => {
    setPage(newPage)
  }

  const handleRowsPerPageChange = (event: SelectChangeEvent) => {
    setRowsPerPage(Number(event.target.value as string))
  }
  
  return (
    <Container sx={{ mt: 3}}>
      {isFetching &&  
        <Box sx={{ width: '100%', position: 'absolute', top: 0, left: 0 }}>
          <LinearProgress />
        </Box>
      }
      <Table 
        rows={data?.data as PassengerDataResponse[]} 
        cells={cells} 
        loading={isLoading} 
        page={page}
        count={data?.totalPages || 1}
        rowsPerPage={rowsPerPage}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleRowsPerPageChange}
      />
    </Container>
  )
}