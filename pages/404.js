import React from "react";
import Image404 from "@/assets/icons/09.svg";
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useMyContext } from "@/context/DarkModeContext";

export default function PageNotFound() {
  const contextValue = useMyContext();
  return (
    <main className={contextValue?.darkMode === false ? "light" : "dark"}>
      <Navbar />
      <Box height={{base:'calc(100vh - 64px - 212px)',md:'calc(100vh - 64px - 72px)', lg:'calc(100vh - 64px - 92px)'}} background={"var(--dark-category)"}>
      <Box p={"175px 0"} className="container">
        <Flex {...css.list}>
          <Image {...css.image} src={Image404.src} alt="404" />
          <Heading {...css.title}>404</Heading>
          <Text {...css.text}>
            {" "}
            The page you are looking for does not exist.
          </Text>
        </Flex>
      </Box>
      </Box>
      <Footer />
    </main>
  );
}

const css = {
  title: {
    color: "var(--title-primary)",
    textAlign: "center",
    fontSize: "30px",
    fontStyle: "normal",
    fontWeight: 450,
    lineHeight: "36px",
    letterSpacing: "-0.48px",
    mt: "32px",
  },
  text: {
    color: "var(--dark-category1)",
    textAlign: "center",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "24px",
    letterSpacing: "-0.16px",
    mt: "16px",
  },
  list: {
    flexDirection: "column",
    alignItems: "center",
  },
  image: {
    width: "84px",
    height: "84px",
  },
};
