import { Box, Heading } from "@chakra-ui/react";
import { useSelector } from "react-redux";

export default function Statistics() {
  const character = useSelector(s => s.filteredItems)
  return (
    <Box display="flex" flexDirection="column" alignItems="center" gap="20px" justifyContent="center" bgColor="purple" borderRadius="20px">

      {/* Characters */}
      <Box bgColor="blue.500" display="flex" flexDirection="column" alignItems="center" >
        <Heading as='h4' size='md'>
          Characters
        </Heading>
        <Heading as='h4' size='sm'>
          {character.length}
        </Heading>
      </Box>

      {/* Status */}
      <Box bgColor="blue.500" display="flex" flexDirection="column" alignItems="center" >
        <Heading as='h4' size='md'>
          Status
        </Heading>
        <Heading as='h4' size='sm'>
          {"Alive: "}
          {character.filter(e => e.status === "Alive").length}
        </Heading>
        <Heading as='h4' size='sm'>
          {"Dead: "}
          {character.filter(e => e.status === "Dead").length}
        </Heading>
        <Heading as='h4' size='sm'>
          {"Unknown: "}
          {character.filter(e => e.status === "unknown").length}
        </Heading>
      </Box>

      {/* Gender */}
      <Box bgColor="blue.500" display="flex" flexDirection="column" alignItems="center" >
        <Heading as='h4' size='md'>
          Gender
        </Heading>
        <Heading as='h4' size='sm'>
          {"Female: "}
          {character.filter(e => e.gender === "Female").length}
        </Heading>
        <Heading as='h4' size='sm'>
          {"Male: "}
          {character.filter(e => e.gender === "Male").length}
        </Heading>
        <Heading as='h4' size='sm'>
          {"Genderless: "}
          {character.filter(e => e.gender === "Genderless").length}
        </Heading>
        <Heading as='h4' size='sm'>
          {"Unknown: "}
          {character.filter(e => e.gender === "unknown").length}
        </Heading>
      </Box>

      {/* Created */}
      <Box bgColor="blue.500" display="flex" flexDirection="column" alignItems="center" >
        <Heading as='h4' size='md'>
          Created
        </Heading>
        <Heading as='h4' size='sm'>
          {/* {character.length} */}
          0
        </Heading>
      </Box>

    </Box>
  )
}