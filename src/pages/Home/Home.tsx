import { Box, Container, Link as LinkMUI } from "@mui/material"
import { Link } from "react-router-dom"

export const Home = () => {
  return (
    <Container sx={{ mt: 3}}>
      <h2>Hello, seja bem-vindo!</h2>
      <Box>
        <LinkMUI component={Link} to="/posts">VEJA NOSSOS POSTS DE PASSAGEIROS</LinkMUI>
      </Box>
      <LinkMUI component={Link} to="/infinite-query">Infinite Query</LinkMUI>
    </Container>
  )
}
