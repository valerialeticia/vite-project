import { useState, useMemo, useEffect } from 'react'
import { Container, Box, LinearProgress, SelectChangeEvent } from "@mui/material"
import { Table } from "@/components/Table/Table"
import { cells } from "@/components/Table/constants"
import { useQuery } from "react-query"
import { getPosts } from "@/services/users"
import { Rows } from '@/types/general'

export const Posts = () => {
  const { data, isLoading, isFetching } = useQuery({ queryKey: ['posts'], queryFn: getPosts})

  const [page, setPage] = useState(1)
  const [rowsPerPage, setRowsPerPage] = useState(5)
  const [rows, setRows] = useState<Rows[]>([]) 

  //TODO ver qual opção fica melhor sobre esse state para as rows
  const visibleRows = useMemo(
    () =>
    data?.data.slice(
      page * rowsPerPage,
      page * rowsPerPage + rowsPerPage,
    ),
    [data?.data, page, rowsPerPage]
  )

  /*useEffect(() => {
    setRows(data?.data)
    rows.slice(
      page * rowsPerPage,
      page * rowsPerPage + rowsPerPage
    )
  }, [rows, page, rowsPerPage, data?.data])*/

  const handlePageChange = (event: unknown, newPage: number) => {
    setPage(newPage)
  }

  const handleRowsPerPageChange = (event: SelectChangeEvent) => {
    setRowsPerPage(Number(event.target.value as string))
  }

  const handleRemoveRow = (id: string) => {
    //TODO fazer esse remove funcionar e adicionar o snaback
    data?.data.filter((item: { id: string }) => item.id !== id) as Rows[]
    console.log('PASSOU AQUI@@@')
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
        handleRemoveRow={handleRemoveRow}
      />
    </Container>
  )
}