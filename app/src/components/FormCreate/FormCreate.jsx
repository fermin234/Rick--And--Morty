import { Box, Button, FormControl, Heading, Input, Select, Tag } from "@chakra-ui/react";
import NavBar from "../NavBar/NavBar";
import s from './formCreate.module.css'

export default function FormCreate() {
  return (
    <Box className={s.containerAll}>
      <NavBar />
      <Box width="100%" height="94vh" display="flex" justifyContent="center" alignItems="center">
        <Box height="90%" w="50%" mt="auto" bgColor="#2cb5a0" borderRadius="35px">
          <FormControl display="flex" height="100%" flexDirection="column" justifyContent="space-evenly" alignItems="center" >
            <Tag>Name</Tag>
            <Input name="name" w="75%" />
            <Tag>Status</Tag>
            <Select name="status" w="75%"></Select>
            <Tag>Gender</Tag>
            <Select name="gender" w="75%"></Select>
            <Tag>Species</Tag>
            <Select name="species" w="75%"></Select>
            <Tag>Type</Tag>
            <Select name="type" w="75%"></Select>
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
//   image?: String;
//   origin?: {
//     name: String;
//     url: String;
//   };
//   location?: {
//     name: String;
//     url: String;
//   };
//   episode?: [];