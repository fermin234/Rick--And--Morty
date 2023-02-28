import { Box, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import s from './navbar.module.css'
import { ArrowRightIcon } from '@chakra-ui/icons'

export default function NavBar({ onOpen }) {
  return (
    <Box className={s.containerAll}>
      <Box m={3}>
        <Button colorScheme='blue' onClick={onOpen}>
          <ArrowRightIcon />
        </Button>
      </Box>
      <Box className={s.containerNavigation}>
        <Link to="/landingPage">
          <Button>landingPage</Button>
        </Link>
        <Link to="/home">
          <Button>Home</Button>
        </Link>
      </Box>
    </Box >
  )
}