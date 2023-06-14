import { useState, useMemo } from 'react'
import { Container } from "@mui/material"
import { Table } from "../../components/Table/Table"
import { cells } from "../../components/Table/constants"
import { useQuery } from "react-query"
import { getUsers } from "../../services/users"

export const Home = () => {
  const { data, isFetching } = useQuery({ queryKey: ['users'], queryFn: getUsers})

  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)

  const visibleRows = useMemo(
    () =>
    data?.data.slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage,
      ),
    [data?.data, page, rowsPerPage],
  )

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(Number(event.target.value))
    setPage(0)
  }

  return (
    <Container sx={{ mt: 3}}>
      <Table 
        rows={visibleRows} 
        cells={cells} 
        loading={isFetching} 
        page={page}
        rowsPerPage={rowsPerPage}
        handleChangePage={handleChangePage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Container>
  )
}