import React from "react";
import NavBar from "../NavBar/NavBar.jsx";
import ScrollInfinite from "../InfiniteScroll/InfiniteScroll.jsx";
import Filter from "../Filter/Filter.jsx";
import { Button, DrawerBody, useDisclosure, Drawer, DrawerOverlay, DrawerContent, Box, Img, Tooltip } from '@chakra-ui/react'
import { CloseIcon } from '@chakra-ui/icons'
import Banner from "../Banner/Banner.jsx";
import s from './home.module.css'
import Statistics from "../Statistics/Statistics.jsx";

export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box display="flex" flexDirection="column" overflow="clip" position="relative">
      <NavBar onOpen={onOpen} />

      <Box display="flex" width="100%">
        <Box className={s.statistics} height="98vh" display="flex" alignItems="end" justifyContent="center" position="sticky" top="0" mx="2">
          <Statistics position="absolute" />
        </Box>
        <Box position="relative" my="4" mr="6%" mt="4%" display="flex" flexDirection="column" alignItems="center" zIndex="1" width="100%">
          {/* Banner */}
          <Banner />
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
            <Filter onClose={onClose} />
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


