import React from "react";
import NavBar from "../NavBar/NavBar.jsx";
import ScrollInfinite from "../InfiniteScroll/InfiniteScroll.jsx";
import Filter from "../Filter/Filter.jsx";
import { Button, DrawerBody, useDisclosure, Drawer, DrawerOverlay, DrawerContent, Box } from '@chakra-ui/react'
import { CloseIcon } from '@chakra-ui/icons'

export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box>
      <NavBar onOpen={onOpen} />
      <Drawer placement='left' onClose={onClose} isOpen={isOpen} size={window.innerWidth > 991 ? "xs" : "r"}>
        <DrawerOverlay />
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
      <ScrollInfinite />
    </Box>
  )
}


