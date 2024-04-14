import {
  Box,
  Button,
  Flex,
  FormControl,
  Heading,
  Image,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState, useMemo } from "react";
import HomeLogo from "@/assets/icons/logo.svg";
import HomeLogoLight from "@/assets/icons/icon.svg";
import SearchIcon from "@/assets/icons/icons.svg";
import SearchLlightIcon from "@/assets/icons/search2.svg";
import DarkMode from "./DarkMode";
import { useMyContext } from "@/context/DarkModeContext";
import { useMyContextSearch } from "@/context/SearchInputContext";
import { KeyTypeEnum } from "@/enum/key-type";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import ModalIcon from "@/assets/icons/10.svg";
import CopyIcon from "@/assets/icons/copy.svg";
import { useRouter } from "next/router";
import NavbarMenu from "./NavbarMenu";
import Search from "./Search";
import Link from "next/link";
import { useEffect } from "react";

import { debounce } from "lodash";

export default function Navbar() {
  const router = useRouter();
  const context = useMyContext();
  const contextSearch = useMyContextSearch();

  const [copy, setCopy] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleClick = () => {
    navigator.clipboard.writeText("jamshidbektashpulatov@gmail.com");
    setCopy(true);
  };


  useEffect(() => {
    const handleRouteChange = () => {
      window.scrollTo({ top: 5100, behavior: "smooth" });
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);

  return (
    <Box background={"var(--dark-bg1)"} p={"16px 0"}>
      <Box className="container">
        <Flex align={"center"} justifyContent={"space-between"}>
          <Flex gap={"24px"} align={"center"}>
            <a href="/">
              {context?.darkMode === true ? (
                <Image height={"32px"} src={HomeLogo.src} alt="Home Logo" />
              ) : (
                <Image
                  height={"32px"}
                  src={HomeLogoLight.src}
                  alt="Home Logo"
                />
              )}
            </a>
            <FormControl ml={"8px"} {...css.label}>
              <input
                type="text"
                className="navbar-input"
                placeholder="Search high-quality design inspirations"
                onKeyDown={(evt) => {
                  if(evt?.keyCode === 13){
                    contextSearch.handleSearch(evt.target.value);
                  }
                }}
              />
              <Image
                src={
                  context?.darkMode === true
                    ? SearchIcon.src
                    : SearchLlightIcon.src
                }
                className="navbar-icon"
                alt="SearchIcon Logo"
              />
            </FormControl>
            {router.pathname.slice(0, 7) === "/design" ? (
              <Link className="navbar-link" href="/">
                Explore
              </Link>
            ) : (
              <a className="navbar-link" href="#explore">
                Explore
              </a>
            )}
          </Flex>
          <Flex gap={"16px"} align={"center"}>
            <Search />
            <DarkMode />
            <NavbarMenu onOpenOne={onOpen} />
            <Button onClick={onOpen} {...css.button}>
              Share your work
            </Button>
          </Flex>
        </Flex>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <Heading {...css.title}>Suggest designer</Heading>
          <ModalCloseButton />
          <ModalBody p={"0 !important"} textAlign={"center"}>
            <Flex mt={"24px"} align={"center"} justifyContent={"center"}>
              <Image
                width={"88px"}
                height={"88px"}
                objectFit={"cover"}
                src={ModalIcon.src}
                alt="ModalIcon"
              />
            </Flex>
            <Text {...css.text}>
              We will share your work on the Sparklens and other social
              networks. For now, you can only send your work by email.
            </Text>
            <Button onClick={handleClick} {...css.buttons}>
              <Image src={CopyIcon.src} alt="CopyIcon" />{" "}
              {copy ? "Copied" : "Copy email address"}
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}

const css = {
  button: {
    display: {
      base: "none",
      md: "block",
    },
    borderRadius: "var(--radius-lg, 10px)",
    background: "var(--dark-button)",
    boxShadow: "0px 1px 2px 0px rgba(20, 21, 26, 0.05)",
    fontSize: "14px",
    lineHeight: "20px",
    fontWeight: 400,
    letterSpacing: "-0.07px",
    color: "var(--dark-bg)",
    padding: "var(--spacing-6, 6px) var(--spacing-10, 10px)",
    transition: "0.3s all ease-in-out",
    border: "1px solid var(--dark-button)",
    cursor: "pointer",
    height: "auto",

    _hover: {
      background: "var(--dark-design-button)",
    },
    _focus: {
      border: "1px solid var(--border-action-focus-light, #B78AF0)",
      background: "var(--dark-design-button)",
      boxShadow: "0px 0px 0px 2px rgba(200, 178, 255, 0.50)",
    },
  },
  label: {
    display: {
      base: "none",
      md: "flex",
    },
    alignItems: "center",
    width: "auto",
  },
  text: {
    color: "var(--dark-circle-text)",
    fontSize: {
      base: "14px",
      md: "16px",
    },
    lineHeight: {
      base: "20px",
      md: "24px",
    },
    fontWeight: 400,
    textAlign: "center",
    mt: "24px",
  },
  buttons: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    borderRadius: "var(--radius-lg, 10px)",
    background: "#14151a",
    boxShadow: "0px 1px 2px 0px rgba(20, 21, 26, 0.05)",
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: 500,
    letterSpacing: "-0.07px",
    color: "#fff",
    padding: "var(--spacing-6, 6px) var(--spacing-10, 10px)",
    transition: "0.3s all ease-in-out",
    border: "1px solid #14151a",
    cursor: "pointer",
    height: "48px",
    width: "100%",
    mt: "24px",

    _hover: {
      background: "#14151a",
    },

    _focus: {
      border: "1px solid var(--border-action-focus-light, #B78AF0)",
      background: "#1f2228",
      boxShadow: "0px 0px 0px 2px rgba(200, 178, 255, 0.50)",
    },
  },
  title: {
    fontSize: "18px",
    lineHeight: "26px",
    fontWeight: 500,
    color: "#14151a",
    fontFamily: "Inter !important",
    mb: "38px",
  },
};
