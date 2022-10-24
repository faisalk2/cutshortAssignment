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

export default function Page2({ onClick, heading }) {
  return (
    <Flex minH={"80vh"} align={"center"} justify={"center"}>
      <Stack className="widthManage" width={"70%"}>
        <Stack align={"center"}>
          <Heading fontSize={["xl", "2xl", "4xl"]}>
            Let's set up a home for all your work
          </Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            You can always create another workspace later
          </Text>
        </Stack>
        <Box padding="10px" rounded={"lg"} width={"100%"} p={8}>
          <Stack spacing={8}>
            <FormControl id="">
              <FormLabel>Workspace Name</FormLabel>
              <Input
                type="text"
                placeholder="Eden"
                width={"100%"}
                display={"inline-block"}
                padding={"25px"}
              />
            </FormControl>
            <FormControl id="">
              <FormLabel>
                Workspace URL<span>(optional)</span>
              </FormLabel>
              <Flex>
                <Input
                  value={"www.eden.com/"}
                  width="52%"
                  padding={"25px"}
                  bgColor="gray.100"
                  borderRightRadius="none"
                ></Input>
                <Input
                  type="url"
                  placeholder="Example"
                  padding={"25px"}
                  borderLeftRadius="none"
                />
              </Flex>
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
