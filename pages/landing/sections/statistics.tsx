import {
  Box,
  chakra,
  Heading,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from "@chakra-ui/react";

interface StatsCardProps {
  title: string;
  stat: string;
}
function StatsCard(props: StatsCardProps) {
  const { title, stat } = props;
  return (
    <Stat
      px={{ base: 4, md: 8 }}
      py={"5"}
      shadow={"xl"}
      border={"1px solid"}
      borderColor={useColorModeValue("gray.800", "gray.500")}
      rounded={"lg"}
    >
      <StatLabel fontWeight={"medium"}>{title}</StatLabel>
      <StatNumber fontSize={"2xl"} fontWeight={"medium"}>
        {stat}
      </StatNumber>
    </Stat>
  );
}

export default function BasicStatistics() {
  return (
    <Box maxW="7xl" mx={"auto"} pt={5} py={10} px={{ base: 2, sm: 12, md: 17 }}>
      <Heading textAlign={"center"} fontSize={"4xl"} py={10}>
        Our Pride
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
        <StatsCard title={"We serve"} stat={"900+ clients"} />
        <StatsCard title={"With"} stat={"12+ different services"} />
        <StatsCard title={"Since"} stat={"2018 AD"} />
      </SimpleGrid>
    </Box>
  );
}
