import { useMyContext } from "@/context/DarkModeContext";
import { Box, Flex, Image } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import SearchIcon from "@/assets/icons/icons.svg";
import SearchLlightIcon from "@/assets/icons/search2.svg";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
  useDisclosure,
  FormControl,
} from "@chakra-ui/react";
import axios from "axios";
import { BASE_URL } from "@/services/api";

import Link from "next/link";
import PrevIcon from "@/assets/icons/prev.svg";

function Search() {
  const context = useMyContext();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const [posts, setPosts] = useState([]);

  const [search, setSearch] = useState("");
  const handleSearch = (evt) => {
    setSearch(evt.target.value);
  };

  const searchFilter = search
    ? `filters[$or][0][Title][$containsi]=${search}&filters[$or][1][Tag][$containsi]=${search}`
    : "filters[containsi]=undefined";

  useEffect(() => {
    axios
      .get(`${BASE_URL}/posts?${searchFilter}`)
      .then((res) => {
        console.log(res);
        setPosts(res?.data?.data);
      })
      .catch((err) => console.log(err));
  }, [search]);

  return (
    <>
      <Box onClick={onOpen} {...css.list}>
        {context?.darkMode === true ? (
          <Image src={SearchIcon.src} alt="Home Logo" />
        ) : (
          <Image src={SearchLlightIcon.src} />
        )}
      </Box>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}>
        <AlertDialogOverlay>
          <AlertDialogContent className="search-menu">
            <Flex position={"fixed"} width={"90%"} gap={"8px"} align={"center"}>
              <Box onClick={onClose}>
                <Image src={PrevIcon.src} alt="SearchIcon Logo" />
              </Box>
              <FormControl {...css.label}>
                <input
                  type="text"
                  className="navbar-input"
                  style={{
                    width: "100%",
                    border: `1px solid ${
                      context?.darkMode === true ? "#DEDFE3" : "#DEDFE3"
                    }`,
                    color: `${
                      context?.darkMode === true ? "#9EA0A8" : "#9EA0A8"
                    }`,
                  }}
                  placeholder="Search high-quality design inspirations"
                  onChange={handleSearch}
                  value={search}
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
            </Flex>
            <Flex
              overflowY={"scroll"}
              mt={"55px"}
              gap={"12px"}
              flexDirection={"column"}>
              {posts?.length > 0
                ? posts?.map((evt, index) => (
                    <Link
                      className="navbar-links search-link"
                      href={`/design/${evt?.id}`}
                      key={index}>
                      {evt?.attributes?.Title}
                    </Link>
                  ))
                : ""}
            </Flex>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}

export default Search;

const css = {
  list: {
    display: {
      base: "block",
      md: "none",
    },
  },
  label: {
    display: "flex",
    alignItems: "center",
    width: "100%",
  },
};
