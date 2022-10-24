import {
  Flex,
  Box,
  Stack,
  Button,
  Heading,
  Text,
  HStack,
} from "@chakra-ui/react";
import "./component.css";
import { FaBeer, FaUserAlt } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";
import { useState } from "react";
export default function Page3({ onClick, heading }) {
  const [myself, setMyself] = useState(false);
  const [team, setTeam] = useState(false);

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
          <Stack spacing={8} direction={["column", "column", "row"]}>
            <Box
              className={myself ? "highlight" : "normalBorder"}
              onClick={() => {
                setMyself(true);
                setTeam(false);
              }}
              lineHeight={"25px"}
              padding="30px"
            >
              <Text padding={"10px"}>
                <FaUserAlt color="#4299e1" fontSize={"30px"} />
              </Text>
              <Heading fontSize={"20px"} marginBottom="15px">
                For myself
              </Heading>
              <Text fontSize={"18px"}>
                Write better, Think more clearly, Stay organized
              </Text>
            </Box>
            <Box
              className={team ? "highlight" : "normalBorder"}
              onClick={() => {
                setMyself(false);
                setTeam(true);
              }}
              lineHeight={"25px"}
              padding="30px"
            >
              <Text padding={"10px"}>
                <HiUserGroup fontSize={"30px"} />
              </Text>
              <Heading fontSize={"20px"} marginBottom="15px">
                With my team
              </Heading>
              <Text fontSize={"18px"}>
                Wikis, docs, tasks & projects, all in one place
              </Text>
            </Box>
          </Stack>
        </Box>
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
    </Flex>
  );
}
