import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";

export default function Intro() {
  return (
    <Flex
      w={"full"}
      h={"100vh"}
      backgroundImage={
        "url(https://images.unsplash.com/photo-1600170311833-c2cf5280ce49?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470)"
      }
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
    >
      <VStack
        w={"full"}
        justify={"center"}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
      >
        <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
          <Text
            color={"white"}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
          >
            Welcome to
          </Text>
          <Text
            color={"white"}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
          >
            Apple Dental Clinic
          </Text>
          <Stack direction={"row"}>
            <Button
              bg={"blue.400"}
              rounded={"full"}
              color={"white"}
              _hover={{ bg: "blue.500" }}
            >
              Call Us
            </Button>
            <Button
              bg={"whiteAlpha.300"}
              rounded={"full"}
              color={"white"}
              _hover={{ bg: "whiteAlpha.500" }}
            >
              Learn More
            </Button>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
}
