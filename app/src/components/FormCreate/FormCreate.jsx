import { Box, Button, FormControl, Heading, Input, Select, Tag } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import NavBar from "../NavBar/NavBar";
import s from './formCreate.module.css'

export default function FormCreate() {
  const species = useSelector(s => s.species)
  const types = useSelector(s => s.types)
  const origin = useSelector(s => s.origin)

  return (
    <Box className={s.containerAll}>
      <NavBar />
      <Box width="100%" height="94vh" display="flex" justifyContent="center" alignItems="center">
        <Box height="90%" w="50%" mt="auto" bgColor="#2cb5a0" borderRadius="35px">
          <FormControl display="flex" height="100%" flexDirection="column" justifyContent="space-evenly" alignItems="center" >
            <Box w="100%" position="relative" display="flex" flexDirection="column" alignItems="center">
              <Tag position="absolute" top="0px" left="0px">Name</Tag>
              <Input name="name" w="75%" />
            </Box>
            <Tag>Status</Tag>
            <Select name="status" w="75%">
              <option disabled selected>Selecciona una opción</option>
              <option value="alive">Alive</option>
              <option value="dead">Dead</option>
              <option value="unknown">Unknown</option>
            </Select>
            <Tag>Gender</Tag>
            <Select name="gender" w="75%">
              <option disabled selected>Selecciona una opción</option>
              <option value="female">Demale</option>
              <option value="male">Male</option>
              <option value="unknown">Unknown</option>
              <option value="genderless">Genderless</option>
            </Select>
            <Tag>Species</Tag>
            <Select name="species" w="75%">
              <option disabled selected>Selecciona una opción</option>
              {
                species?.length && species.map(e => <option key={e._id} value={e.name}>{e.name}</option>)
              }
            </Select>
            <Tag>Type</Tag>
            <Select name="type" w="75%">
              <option disabled selected>Selecciona una opción</option>
              {
                types?.length && types.map(e => <option key={e._id} value={e.name}>{e.name}</option>)
              }
            </Select>
            <Tag>Origin</Tag>
            <Select name="type" w="75%">
              <option disabled selected>Selecciona una opción</option>
              {
                origin?.length && origin.map(e => <option key={e.name} value={e.name}>{e.name}</option>)
              }
            </Select>
            <Button>
              <Heading fontSize="20px">
                Create character
              </Heading>
            </Button>
          </FormControl>
        </Box>
      </Box>
    </Box >
  )
}

// name: String;          X
//   status: String;          X
//   gender: String;          X
//   species?: String;          X
//   type?: String;          X
//   origin?: {              X
//     name: String;
//     url: String;
//   };
//   location?: {
  //     name: String;
  //     url: String;
  //   };
  //   episode?: [];
  //   image?: String;