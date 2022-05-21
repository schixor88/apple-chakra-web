{
  /* <Box
  className={styles.map_container}
  w={["100%", "100%", "600px", "600px"]}
  m={8}
>
  <AspectRatio ratio={16 / 9}>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3533.4384175856635!2d85.31936258650816!3d27.67284153544597!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19e8439f65dd%3A0x5010e5c1fa50099f!2sA%20Dente%20Home!5e0!3m2!1sen!2snp!4v1652162777025!5m2!1sen!2snp"
      width="600"
      height="450"
      style={{ border: "1px solid #0002" }}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </AspectRatio>
</Box>; */
}

import {
  AspectRatio,
  Box,
  chakra,
  Container,
  Flex,
  Heading,
  Link,
  SimpleGrid,
  Stack,
  Stat,
  StatLabel,
  StatNumber,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";

export default function ClinicMap() {
  return (
    <Container maxW={"container.xl"} padding={0}>
      <Flex direction={"row"} height={"auto"} paddingY={20}>
        <Stack w={["500px", "100%", "100%", "50%"]} m={8}>
          <AspectRatio ratio={16 / 9}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14126.598752974003!2d85.324195!3d27.7281004!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1cec64d0479318c7!2sApple%20Dental%20Clinic!5e0!3m2!1sen!2snp!4v1653151672695!5m2!1sen!2snp"
              width="600"
              height="450"
              loading="lazy"
            ></iframe>
          </AspectRatio>
        </Stack>
        <VStack spacing={3} alignItems={"flex-start"} m={8}>
          <Heading size={"xl"}>Contact</Heading>
          <Text fontSize={20}>Call Us for Appointment</Text>
          <Link>9860773808</Link>
          <Link>9860773808</Link>
          <Link>9860773808</Link>
        </VStack>
      </Flex>
    </Container>

    // <Box
    //   maxW="auto"
    //   mx={"auto"}
    //   pt={5}
    //   py={10}
    //   px={{ base: 2, sm: 12, md: 17 }}
    // >
    //   <Heading textAlign={"center"} fontSize={"3xl"} py={10}>
    //     Contact
    //   </Heading>

    // </Box>
  );
}
