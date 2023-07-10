import { useState } from 'react'
import { Container, Box, LinearProgress, SelectChangeEvent } from "@mui/material"
import { Table } from "@/components/Table/Table"
import { cells } from "@/components/Table/constants"
import { useQuery } from "react-query"
import { getPassengers } from "@/services/users"
import { PassengerDataResponse } from '@/types/general'
import { useSnackbarStore } from '@/store/general'

export const Posts = () => {
  const [page, setPage] = useState(1)
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [rows, setRows] = useState<PassengerDataResponse[]>([]) 
  const handleAddMessage = useSnackbarStore(state => state.handleAddMessage)
  
  /*const { data, isLoading, isFetching } = useQuery({ 
    queryKey: ['posts', {page: page, rowsPerPage: rowsPerPage}], 
    queryFn: getPosts,
    keepPreviousData: true,
    onSuccess() {
      const startIndex = (page - 1 ) * rowsPerPage
      const endIndex = startIndex + rowsPerPage
      const response = data?.data.slice(startIndex, endIndex)
      setRows(response)
    }
  })*/

  const params = {
    page: page,
    size: rowsPerPage
  }

  const { data, isLoading, isFetching } = useQuery({ 
    queryKey: ['passengers', {...params}],
    queryFn: () => getPassengers(params),
    keepPreviousData: true,
    onSuccess() {
      setRows(data?.data as PassengerDataResponse[])
    }
  })

  const handlePageChange = (event: unknown, newPage: number) => {
    setPage(newPage)
  }

  const handleRowsPerPageChange = (event: SelectChangeEvent) => {
    setRowsPerPage(Number(event.target.value as string))
  }

  const handleRemoveRow = (id: string) => {
    //TODO fazer esse remove funcionar e adicionar o snaback
    //setRows(rows => rows?.filter((row) => row.id.toString() !== id))
    handleAddMessage('Removido com sucesso!', 'success')
    console.log('PASSOU AQUI@@@')
  }
  
  return (
    <Container sx={{ mt: 3}}>
      {isFetching &&  
        <Box sx={{ width: '100%', position: 'absolute', top: 0, left: 0 }}>
          <LinearProgress />
        </Box>
      }
      <Table 
        rows={rows} 
        cells={cells} 
        loading={isLoading} 
        page={page}
        count={data?.totalPages || 1}
        rowsPerPage={rowsPerPage}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleRowsPerPageChange}
        handleRemoveRow={handleRemoveRow}
      />
    </Container>
  )
}