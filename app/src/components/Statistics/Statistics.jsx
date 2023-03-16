import { Box, Heading } from "@chakra-ui/react";
import { useSelector } from "react-redux";

export default function Statistics() {
  const character = useSelector(s => s.filteredItems)
  return (
    <Box display="flex" flexDirection="column" alignItems="center" gap="20px" justifyContent="center" bgColor="#4130C2" borderRadius="20px" border=" 3px solid black" transition="all 1.5s" mx="2">
      {/* Characters */}
      <Box bgColor="#2CB5A0" display="flex" flexDirection="column" alignItems="center" px="1" borderTopRadius="15px">
        <Heading as='h4' size='md'>
          Characters
        </Heading>
        <Heading as='h4' size='sm'>
          {character.length}
        </Heading>
      </Box>

      {/* Status */}
      <Box bgColor="#2CB5A0" display="flex" flexDirection="column" alignItems="center" width="100%">
        <Heading as='h4' size='md'>
          Status
        </Heading>
        <Heading as='h4' size='xs'>
          {"Alive: "}
          {character.filter(e => e.status === "Alive").length}
        </Heading>
        <Heading as='h4' size='xs'>
          {"Dead: "}
          {character.filter(e => e.status === "Dead").length}
        </Heading>
        <Heading as='h4' size='xs'>
          {"Unknown: "}
          {character.filter(e => e.status === "unknown").length}
        </Heading>
      </Box>

      {/* Gender */}
      <Box bgColor="#2CB5A0" display="flex" flexDirection="column" alignItems="center" width="100%">
        <Heading as='h4' size='md'>
          Gender
        </Heading>
        <Heading as='h4' size='xs'>
          {"Female: "}
          {character.filter(e => e.gender === "Female").length}
        </Heading>
        <Heading as='h4' size='xs'>
          {"Male: "}
          {character.filter(e => e.gender === "Male").length}
        </Heading>
        <Heading as='h4' size='xs'>
          {"Genderless: "}
          {character.filter(e => e.gender === "Genderless").length}
        </Heading>
        <Heading as='h4' size='xs'>
          {"Unknown: "}
          {character.filter(e => e.gender === "unknown").length}
        </Heading>
      </Box>

      {/* Created */}
      <Box bgColor="#2CB5A0" w="100%" display="flex" flexDirection="column" alignItems="center" px="1" pt="1" borderBottomRadius="15px" width="100%">
        <Heading as='h4' size='md'>
          Created
        </Heading>
        <Heading as='h4' size='xs'>
          {/* {character.length} */}
          0
        </Heading>
      </Box>

    </Box>
  )
}