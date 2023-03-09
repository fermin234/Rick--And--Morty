import React, { useState } from "react";
import NavBar from "../NavBar/NavBar.jsx";
import ScrollInfinite from "../InfiniteScroll/InfiniteScroll.jsx";
import Filter from "../Filter/Filter.jsx";
import { Button, DrawerBody, useDisclosure, Drawer, DrawerContent, Box, Img, Tooltip } from '@chakra-ui/react'
import { CloseIcon } from '@chakra-ui/icons'
import Banner from "../Banner/Banner.jsx";
import s from './home.module.css'
import Statistics from "../Statistics/Statistics.jsx";
import { useSelector } from "react-redux";
import { GiMoon } from "react-icons/gi";
import { BsFillMoonFill, BsFillSunFill, BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [fondo, setFondo] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure()
  const filterValues = useSelector(s => s.filterValues)
  let [values, setValues] = useState({
    name: filterValues.name ? filterValues.name : null,
    species: filterValues.species ? filterValues.species : null,
    type: filterValues.type ? filterValues.type : null,
    status: filterValues.status ? filterValues.status : null,
    gender: filterValues.gender ? filterValues.gender : null,
  })

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Box className={darkMode ? s.dark : s.light} display="flex" flexDirection="column" overflow="clip" position="relative">
      <NavBar onOpen={onOpen} values={values} setValues={setValues} />
      {/* darkmode */}
      <Button position="fixed" left="1" top="100px" zIndex="999" onClick={handleDarkModeToggle} fontSize="100" p="1" bgColor="transparent" border="solid 3px" borderRadius="50%" height="50px" width="50px" color={darkMode ? "white" : "black"}> {darkMode ? <BsFillSunFill /> : <BsFillMoonFill />} </Button>
      {/* fondo mode */}
      <Button position="fixed" left="1" top="150px" zIndex="999" fontSize="100" p="1" bgColor="transparent" border="solid 3px" borderRadius="50%" height="50px" width="50px" color={darkMode ? "white" : "black"} onClick={() => setFondo(!fondo)}> {fondo ? <BsFillEyeSlashFill /> : <BsFillEyeFill />} </Button>

      {/* Statistics */}
      <Box display={fondo ? "none" : "flex"} width="100%">
        <Box className={s.statistics} height="98vh" display="flex" alignItems="end" justifyContent="center" position="sticky" top="0" mx="2">
          <Statistics position="absolute" />
        </Box>
        {/* ************ */}

        <Box position="relative" my="4" mr="6%" display="flex" flexDirection="column" alignItems="center" zIndex="1" width="100%" mt="7vh">

          {/* Banner */}
          <Box w="100%" >
            <Banner />
          </Box>
          {/* ************ */}

          {/* ScrollInfinite */}
          <ScrollInfinite />
          {/* ************ */}

        </Box>
      </Box>

      {/* Filtro */}
      <Drawer placement='left' onClose={onClose} isOpen={isOpen} size={window.innerWidth > 991 ? "xs" : "r"}>
        <DrawerContent>
          <Box style={{ display: "flex", justifyContent: "center", position: "relative", width: "100%", height: "50px", alignItems: "center" }}>
            Filters
            <Button onClick={onClose} style={{ display: "flex", position: "absolute", top: "3px", right: "3px" }}>
              <CloseIcon />
            </Button>
          </Box>
          <DrawerBody>
            <Filter onClose={onClose} values={values} setValues={setValues} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      {/* ************ */}

      {/* Up page */}
      <Box position="fixed" bottom="0" w="100%" right="0" height="100px" display="flex" justifyContent="end" alignItems="end">
        <Tooltip hasArrow label='Subir' bg='gray.300' color='black' placement='top'>
          <Img className={s.image} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth', })} src="/src/assets/pngCharacter/rick_arriba1-removebg-preview.png" alt="Rick_up" width="5%" mr="2" mb="2" />
        </Tooltip>
      </Box>
      {/* ************ */}

    </Box >
  )
}


