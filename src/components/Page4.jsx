import { Flex, Box, Stack, Button, Heading, Text } from "@chakra-ui/react";
import { AiOutlineCheck } from "react-icons/ai";
import "./component.css";

export default function Page4({ onClick }) {
  return (
    <Flex minH={"50vh"} align={"center"} justify={"center"}>
      <Stack className="widthManage" width={"70%"}>
        <Box
          height={"80px"}
          width="80px"
          margin="auto"
          borderRadius={"50%"}
          marginBottom="30px"
          bgColor={"#4299e1"}
          display="flex"
          alignItems={"center"}
          justifyContent="center"
        >
          <AiOutlineCheck fontSize={"40px"} color="white" />
        </Box>
        <Stack align={"center"}>
          <Heading fontSize={["xl", "2xl", "4xl"]}>
            Congratulations, Eren!
          </Heading>
          <Text fontSize={["sm", "small", "large"]} color={"gray.600"}>
            We have completed onboarding, you can start using the Eden!
          </Text>
        </Stack>
        <Box padding="10px" rounded={"lg"} width={"100%"} p={8}>
          <Stack spacing={8}>
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
                Launch Eden
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
