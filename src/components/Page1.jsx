import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  Text,
} from "@chakra-ui/react";
import "./component.css";

export default function Page1({ onClick }) {
  return (
    <Flex minH={"70vh"} align={"center"} justify={"center"}>
      <Stack className="widthManage" width={"70%"}>
        <Stack align={"center"}>
          <Heading fontSize={["xl", "2xl", "4xl"]}>
            Welcome! First things first...
          </Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            You can always change theme later
          </Text>
        </Stack>
        <Box padding="10px" rounded={"lg"} width={"100%"} p={8}>
          <Stack spacing={8}>
            <FormControl id="">
              <FormLabel>Full Name</FormLabel>
              <Input
                type="text"
                placeholder="Steve Jobs"
                width={"100%"}
                display={"inline-block"}
                padding={"25px"}
              />
            </FormControl>
            <FormControl id="">
              <FormLabel>Display Name</FormLabel>
              <Input type="url" placeholder="Steve" padding={"25px"} />
            </FormControl>
            <Stack spacing={10}>
              <Button
                onClick={onClick}
                padding={"25px"}
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Create Workspace
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
