import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";

// Replace test data with your own
const features = Array.apply(null, Array(11)).map(function (x, i) {
  return {
    id: i,
    title: "Dental Service",
    text: "Short Detail about the service. Max two sentence",
  };
});

export default function Services() {
  return (
    <Box px={4} py={35}>
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading fontSize={"4xl"}>Our Services</Heading>
        <Text color={"gray.600"} fontSize={"xl"}>
          We provide these dental services at a very affordable price. The first
          checkup is always free for our clients. Feel free to call us to know
          the details about any dental service.
        </Text>
      </Stack>

      <Container maxW={"6xl"} mt={10}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          {features.map((feature) => (
            <HStack key={feature.id} align={"top"}>
              <Box color={"green.400"} px={2}>
                <Icon as={CheckIcon} />
              </Box>
              <VStack align={"start"}>
                <Text fontWeight={600}>{feature.title}</Text>
                <Text color={"gray.600"}>{feature.text}</Text>
              </VStack>
            </HStack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
