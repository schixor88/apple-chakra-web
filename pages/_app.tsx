import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import Footer from "../components/footer";
import Header from "../components/header";
import Landing from "./landing/landing.page";

const App = () => {
  return (
    <ChakraProvider>
      <Header />
      {/* <Component {...pageProps} /> */}
      <Landing />
      <Footer />
    </ChakraProvider>
  );
};

export default App;
