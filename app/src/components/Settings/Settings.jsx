import { Box, Button, Heading } from "@chakra-ui/react";
import { useSelector } from "react-redux";

export default function Settings({ themeDark, setThemeDark, setHiddenBanner }) {

  function resetSettings() {
    setThemeDark(false)
    setHiddenBanner(false)
    localStorage.setItem("themeDark", false)
    localStorage.setItem("hiddenBanner", false)
  }

  return (
    <Box display="flex" flexDirection="column" justifyContent="space-between" height="100%">
      <h1>Las settings</h1>
      <Button onClick={resetSettings}>
        <Heading fontSize="20px">
          Restablecer configuracion
        </Heading>
      </Button>
    </Box>
  )
} 