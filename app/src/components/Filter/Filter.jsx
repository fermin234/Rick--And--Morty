import { Box, Input, Radio, RadioGroup, Stack, Button } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { cleanFilters, filter } from "../../redux/actions";

export default function Filter({ onClose }) {
  const dispatch = useDispatch()
  const filterValues = useSelector(s => s.filterValues)
  //Agregar debounce a los inputs
  //Agregar debounce a los inputs
  //Agregar debounce a los inputs
  //Agregar debounce a los inputs
  //Agregar debounce a los inputs
  //Agregar debounce a los inputs
  //Agregar debounce a los inputs
  //Agregar debounce a los inputs

  return (
    <Box display="flex" flexDirection="column" justifyContent="space-around" height="100%">

      {/* Species  */}
      <Box bgColor="purple.200" >
        <Box display="flex" justifyContent="center">
          Species
        </Box>
        <Input variant='filled' textAlign="center" placeholder='Human | Alien | Humanoid ...' defaultValue={filterValues.species ? filterValues.species : ""} onChange={e => { filterValues.species = e.target.value, dispatch(filter(filterValues)) }} />
      </Box>
      {/* ------------------------ */}

      {/* Type  */}
      <Box bgColor="gray.200">
        <Box display="flex" justifyContent="center">
          Type
        </Box>
        <Input variant='filled' textAlign="center" placeholder=' Experiment | Superhuman ...' defaultValue={filterValues.type ? filterValues.type : ""} onChange={e => { filterValues.type = e.target.value, dispatch(filter(filterValues)) }} />
      </Box>
      {/* ------------------------ */}

      {/* Status  */}
      <Box bgColor="red.200">
        <Box display="flex" justifyContent="center">
          Status
        </Box>
        <RadioGroup defaultValue={filterValues.status ? filterValues.status : ""}
          onChange={(e) => {
            filterValues.status = e,
              dispatch(filter(filterValues))
          }}>
          <Stack spacing={5} direction='row' justifyContent="center" my="1">
            <Radio variant="solid" colorScheme='green' value='Alvie'>
              Alvie
            </Radio>
            <Radio colorScheme='red' value='Dead'>
              Dead
            </Radio>
          </Stack>
          <Stack alignItems="center">
            <Radio colorScheme='gray' value='Unknow'>
              Unknow
            </Radio>
          </Stack>
        </RadioGroup>
      </Box>
      {/* ------------------------ */}

      {/* Gender  */}
      <Box bgColor="blue.200">
        <Box display="flex" justifyContent="center">
          Status
        </Box>
        <RadioGroup defaultValue={filterValues.gender ? filterValues.gender : ""}
          onChange={(e) => {
            filterValues.gender = e,
              dispatch(filter(filterValues))
          }}>
          <Stack spacing={5} display='flex' direction='row' alignItems="center" justifyContent="center" my="1">
            <Radio value='Female'>
              Female
            </Radio>
            <Radio value='Male'>
              Male
            </Radio>
          </Stack>
          <Stack spacing={5} display='flex' direction='row' alignItems="center" justifyContent="center">
            <Radio value='Genderless'>
              Genderless
            </Radio>
            <Radio value='Unknow'>
              Unknow
            </Radio>
          </Stack>
        </RadioGroup>
      </Box>
      {/* ------------------------ */}

      {/* Gender  */}
      <Button onClick={() => { dispatch(cleanFilters()), onClose() }}>
        Clear Filters
      </Button>
      {/* ------------------------ */}
    </Box >
  )
}

