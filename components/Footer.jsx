import { Box, Flex, Image, Link, Text } from "@chakra-ui/react";
import React from "react";
import HomeLogo from "@/assets/icons/logo.svg";
import { useMyContext } from "@/context/DarkModeContext";
import HomeLogoLight from "@/assets/icons/icon.svg";

function Footer() {
  const context = useMyContext();
  return (
    <Box {...css.box}>
      <Box className="container">
        <Flex
          flexDirection={{ base: "column", md: "row" }}
          align={"center"}
          justifyContent={"space-between"}>
          {context?.darkMode === true ? (
            <Image mb={{base:"40px", md:0}} src={HomeLogo.src} alt="Home Logo" />
          ) : (
            <Image mb={{base:"40px", md:0}} src={HomeLogoLight.src} alt="Home Logo" />
          )}
          <Text color={context.darkMode === true ? 'rgba(13, 17, 38, 0.40)' : 'rgba(255, 255, 255, 0.60)'} mb={{base:"40px", md:0}} {...css.text}>
            © 2024 Pixellz. All rights reserved. All screenshots are copyright
            of their owners.
          </Text>
          <Flex align="center" gap={"4px"}>
            <Text color={context.darkMode === true ? 'rgba(13, 17, 38, 0.40)' : 'rgba(255, 255, 255, 0.60)'} {...css.text}>Curated by</Text>
            <Link target="_blank" color={context.darkMode === true ? '#6C6E79' : 'rgba(255, 255, 255, 0.60)'} {...css.text}  href="https://twitter.com/itsjamik">
              @itsjamik
            </Link>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}

export default Footer;

const css = {
  box: {
    background: "var(--dark-bg1)",
    padding: {
      xl: "var(--spacing-40, 40px) var(--spacing-120, 120px)",
      lg: "var(--spacing-40, 30px) var(--spacing-120, 100px)",
      md: "var(--spacing-40, 20px) var(--spacing-120, 40px)",
      sm: "var(--spacing-40, 20px) var(--spacing-120, 20px)",
      base: "var(--spacing-40, 20px) var(--spacing-120, 20px)",
    },
  },
  text: {
    textAlign: "center",
    fontSize: "14px",
    lineHeight: "20px",
    fontWeight: 500,
    letterSpacing: "-0.07px",

    _hover:{
      textDecoration:"none"
    }
  },
};
