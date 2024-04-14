import {
  Box,
  Button,
  Flex,
  FormControl,
  Heading,
  Text,
  Image,
} from "@chakra-ui/react";
import React from "react";
import SearchIcon from "@/assets/icons/email.svg";
import SearchLightIcon from "@/assets/icons/email2.svg";
import { useMyContext } from "@/context/DarkModeContext";

export default function Header() {
  const context = useMyContext();
  return (
    <Box
      background={"var(--dark-bg1)"}
      padding={{
        base: "80px 0px",
        md: "80px 90px 120px",
        lg: "96px 120px 160px",
      }}>
      <Box className="container">
        <Flex {...css.list}>
          <Heading {...css.title}>
            Curated design inspirations by designers for designers
          </Heading>
          <Text {...css.text}>
            Hand-picked UI designs are from Twitter, Dirbbble, Arena, and other
            resources.
          </Text>
          <Flex
            width={{ base: "100%", md: "auto" }}
            flexDirection={{ base: "column", md: "row" }}
            gap={"8px"}
            mt="40px">
            <FormControl {...css.label}>
              <Image
                src={
                  context?.darkMode === true
                    ? SearchIcon.src
                    : SearchLightIcon.src
                }
                className="header-icon"
                alt="SearchIcon Logo"
              />
              <input
                type="email"
                className="navbar-input header-input"
                placeholder="Enter your email"
              />
            </FormControl>
            <Text display={{ base: "block", md: "none" }} {...css.subText}>
              No spam. Just featured design inspirations will your inbox
            </Text>
            <Button {...css.button}>Subscribe</Button>
          </Flex>
          <Text display={{ base: "none", md: "block" }} {...css.subText}>
            No spam. Just featured design inspirations will your inbox
          </Text>
        </Flex>
      </Box>
    </Box>
  );
}

const css = {
  list: {
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    color: "var(--title-primary)",
    textAlign: "center",
    fontSize: {
      base: "24px",
      md: "28px",
      lg: "48px",
    },
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: {
      base: "32px",
      md: "40px",
      lg: "56px",
    },
    letterSpacing: {
      base: "-0.336px",
      lg: "-0.96px",
    },
    width: {
      base: "100%",
      md: "500px",
      lg: "700px",
    },
  },
  label: {
    display: "flex",
    alignItems: "center",
  },
  text: {
    color: "var(--dark-text)",
    textAlign: "center",
    fontSize: {
      base: "16px",
      md: "18px",
      lg: "20px",
    },
    lineHeight: {
      base: "24px",
      lg: "28px",
    },
    fontWeight: 400,
    letterSpacing: {
      base: "-0.16px",
      md: "-0.24px",
    },
    width: {
      base: "100%",
      md: "450px",
      lg: "600px",
    },
    marginTop: "24px",
  },
  button: {
    borderRadius: "var(--radius-lg, 10px)",
    background: "var(--dark-button)",
    boxShadow: "0px 1px 2px 0px rgba(20, 21, 26, 0.05)",
    fontSize: "14px",
    lineHeight: "20px",
    fontWeight: 500,
    letterSpacing: "-0.07px",
    color: "var(--dark-bg)",
    transition: "0.3s all ease-in-out",
    border: "none",
    cursor: "pointer",
    height: "40px",
    minWidth: "auto",
    width: {
      base: "100%",
      sm: "320px",
      md: "99px",
    },
    margin:{
      base:'auto',
      md:0
    },

    _hover: {
      background: "var(--dark-design-button)",
    },
    _focus: {
      border: "1px solid var(--border-action-focus-light, #B78AF0)",
      background: "var(--dark-design-button)",
      boxShadow: "0px 0px 0px 2px rgba(200, 178, 255, 0.50)",
    },
  },
  subText: {
    fontSize: "12px",
    lineHeight: "18px",
    fontWeight: 400,
    letterSpacing: "-0.07px",
    color: "var(--dark-subText)",
    // width: "310px",
    margin:{
      base:'auto',
      md:0
    },
    marginTop: {
      base: 0,
      md: "8px",
    },
    marginRight: {
      base:'auto',
      lg:"108px"
    },
  },
};
