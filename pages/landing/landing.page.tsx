import { Box } from "@chakra-ui/react";
import WhoWeAre from "./sections/who_we_are";
import Intro from "./sections/intro";
import Ourteam from "./sections/ourteam";
import Services from "./sections/services";
import Works from "./sections/works";
import BasicStatistics from "./sections/statistics";
import ClinicMap from "./sections/map";

const Landing = () => {
  return (
    <Box>
      <Intro />
      <BasicStatistics />
      <WhoWeAre />
      <Services />
      <Ourteam />
      <Works />
      <ClinicMap />
    </Box>
  );
};

export default Landing;
