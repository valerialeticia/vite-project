import { Container, Link as LinkMUI } from "@mui/material"
import { Link } from "react-router-dom"


export const Home = () => {

  return (
    <Container sx={{ mt: 3}}>
      <h2>Hello, seja bem-vindo!</h2>
      <LinkMUI component={Link} to="/posts">VEJA NOSSOS POSTS</LinkMUI>
    </Container>
  )
}