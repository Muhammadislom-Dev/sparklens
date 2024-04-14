import {
  AlertDialogCloseButton,
  Box,
  Flex,
  Image,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import React, {useState} from "react";

import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogOverlay,
} from "@chakra-ui/react";
import MenuIcon from "@/assets/icons/menu.svg";
import MenuDarkIcon from "@/assets/icons/menus.svg";
import { useRouter } from "next/router";
import Link from "next/link";
import { useMyContext } from "@/context/DarkModeContext";

function NavbarMenu({ onOpenOne }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const context = useMyContext();
  const router = useRouter();

  return (
    <>
      <Box onClick={onOpen} display={{ base: "block", md: "none" }}>
        {context?.darkMode === true ? (
          <Image src={MenuIcon.src} alt="Home Logo" />
        ) : (
          <Image src={MenuDarkIcon.src} />
        )}
      </Box>
      <AlertDialog
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        motionPreset={"slideInRight"}
        isCentered={false}>
        <AlertDialogOverlay />

        <AlertDialogContent className="navbar-menu">
          <AlertDialogCloseButton />
          <AlertDialogBody>
            <Flex {...css.list}>
              <a
                className="navbar-links"
                href={
                  router.pathname.slice(0, 7) === "/design"
                    ? "/"
                    : router.pathname.slice(0.7) === "/store"
                    ? "/"
                    : "#explore"
                }>
                Explore
              </a>
              {/* <Link className="navbar-links" href="/store">
                Store (Soon)
              </Link> */}
              <Button
                backgroundColor={"#14151A"}
                color={"#fff"}
                onClick={onOpenOne}
                {...css.button}>
                Share your work
              </Button>
            </Flex>
          </AlertDialogBody>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}

export default NavbarMenu;

const css = {
  list: {
    marginTop: "50px",
    flexDirection: "column",
    gap: "15px",
  },
  button: {
    borderRadius: "var(--radius-lg, 10px)",
    background: "var(--dark-button)",
    boxShadow: "0px 1px 2px 0px rgba(20, 21, 26, 0.05)",
    fontSize: "14px",
    lineHeight: "20px",
    fontWeight: 400,
    letterSpacing: "-0.07px",
    // color: "var(--dark-bg)",
    padding: "var(--spacing-6, 6px) var(--spacing-10, 10px)",
    transition: "0.3s all ease-in-out",
    border: "1px solid var(--dark-button)",
    cursor: "pointer",
    height: "auto",
    width: "136px",

    _focus: {
      border: "1px solid var(--border-action-focus-light, #B78AF0)",
      background: "#14151A",
      boxShadow: "0px 0px 0px 2px rgba(200, 178, 255, 0.50)",
    },
  },
};
