import { Container } from "@mui/material"
import { Table } from "../../components/Table/Table"
import { useUserStore } from "../../store/users"
import { cells } from "../../components/Table/constants"

export const Home = () => {
  const rows = useUserStore()

  return (
    <Container sx={{ mt: 3}}>
      <Table rows={rows?.data} cells={cells} />
    </Container>
  )
}