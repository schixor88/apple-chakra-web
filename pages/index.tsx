import { Container, Flex, VStack } from "@chakra-ui/react";

const IndexPage = () => {
  return (
    <Container maxW={"full"}>
      <Flex h={"100vh"} py={20}>
        <VStack w={"full"} h={"full"} alignItems={"flex-start"}></VStack>
        <VStack
          bg={"gray.50"}
          w={"full"}
          h={"full"}
          alignItems={"flex-start"}
        ></VStack>
      </Flex>
    </Container>
  );
};

export default IndexPage;
