import {
  Box,
  Button,
  Flex,
  SimpleGrid,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";
import { BASE_URL } from "@/services/api";
import { useMyContextSearch } from "@/context/SearchInputContext";
import Image404 from "@/assets/icons/09.svg";

function Category() {
  const [pageSize, setPageSize] = useState(48);
  const [category, setCategory] = useState([]);
  const [categoryId, setCategoryId] = useState("");
  const [posts, setPosts] = useState([]);
  const [active, setActive] = useState("");
  const contextSearch = useMyContextSearch();

  const filters = categoryId ? `filters[categories]=${categoryId}` : "";
  const filter = active ? `filters[Dark]=${active}` : "";
  const searchFilter = contextSearch?.search
    ? `filters[$or][0][Title][$containsi]=${contextSearch?.search}&filters[$or][1][Tag][$containsi]=${contextSearch?.search}`
    : "";

  useEffect(() => {
    axios
      .get(`${BASE_URL}/categories?populate=*`)
      .then((res) => setCategory(res?.data?.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get(
        `${BASE_URL}/posts?populate=*&${searchFilter}&${filters}&${filter}&pagination[pageSize]=${pageSize}&populate[designers]=true&populate[designers][populate][Avatar]=true&populate[Images]=true`
      )
      .then((res) => setPosts(res?.data?.data))
      .catch((err) => console.log(err));
  }, [categoryId, active, pageSize, contextSearch?.search]);

  return (
    <Box
      id="explore"
      background={"var(--dark-category)"}
      pb={"80px"}
      height={posts?.length > 0 ? "" : "calc(100vh - 65.45px - 72px)"}
      pt={"48px"}>
      <Box className="container">
        {contextSearch?.search?.length > 5 ? (
          <Flex align={"center"} gap={"16px"}>
            <Heading {...css.category1}>Search results for:</Heading>
            <Heading {...css.title1}>{contextSearch?.search}</Heading>
          </Flex>
        ) : (
          <Flex align={"center"} justify={"space-between"}>
            <Flex align={"center"} gap={"16px"}>
              {category?.length > 0
                ? category?.map((evt, index) => (
                    <div
                      onClick={() => setCategoryId(evt?.id)}
                      key={index}
                      className={`category-list ${
                        evt?.id === Number(categoryId) ? "active" : ""
                      }`}>
                      <p className="category-title">{evt?.attributes?.Title}</p>
                      <span className="category-circle">
                        {evt?.attributes?.Posts?.data?.length}
                      </span>
                    </div>
                  ))
                : ""}
            </Flex>
            <Flex align={"center"} gap={"12px"}>
              <button
                className={`category-button ${
                  active === "false" ? "active" : ""
                }`}
                onClick={(e) => setActive("false")}>
                # Light
              </button>
              <button
                onClick={(e) => setActive("true")}
                className={`category-button ${
                  active === "true" ? "active" : ""
                }`}>
                # Dark
              </button>
            </Flex>
          </Flex>
        )}
        {posts?.length > 0 ? (
          <SimpleGrid
            gap={"24px"}
            mt={"48px"}
            columns={{ base: 1, md: 2, lg: 3 }}>
            {posts?.map((evt, index) => (
              <Card key={index} data={evt} />
            ))}
          </SimpleGrid>
        ) : (
          <Flex {...css.list}>
            <Image {...css.image} src={Image404.src} alt="404" />
            <Heading {...css.titles}>Nothing :(</Heading>
            <Text {...css.text}>
              {" "}
              Nothing found. Please, try with other keywords.
            </Text>
          </Flex>
        )}

        {posts?.length > 0 ? (
          <Flex mt={"84px"} justify="center">
            <Button onClick={() => setPageSize(pageSize + 20)} {...css.button}>
              Load more
            </Button>
          </Flex>
        ) : (
          ""
        )}
      </Box>
    </Box>
  );
}

export default Category;

const css = {
  title: {
    color: "var(--dark-category1)",
    fontSize: "14px",
    lineHeight: "20px",
    fontWeight: 500,
    letterSpacing: "-0.07px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  circle: {
    borderRadius: "var(--radius-sm, 6px)",
    background: "var(--dark-circle)",
    fontSize: "12px",
    lineHeight: "16px",
    fontWeight: 500,
    letterSpacing: "-0.07px",
    color: "var(--title-primary)",
    padding: "var(--spacing-2, 2px) var(--spacing-3, 3px)",
  },
  button: {
    borderRadius: " var(--radius-xl, 12px)",
    background: "var(--dark-button1)",
    color: "var(--title-primary)",
    fontSize: "14px",
    lineHeight: "20px",
    fontWeight: 500,
    letterSpacing: "-0.07px",
    padding: "var(--spacing-10, 10px) var(--spacing-12, 12px)",
    border: "none",
    cursor: "pointer",
    minWidth: "auto",
    width: {
      base: "103px",
    },
  },

  titles: {
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
    marginTop: "55px",
  },
  image: {
    width: "84px",
    height: "84px",
  },

  title1: {
    color: "var(--title-primary)",
    fontSize: {
      base: "20px",
      md: "22px",
      lg: "24px",
    },
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: {
      base: "24px",
      md: "28px",
      lg: "32px",
    },
    letterSpacing: {
      base: "-0.336px",
      lg: "-0.96px",
    },
  },
  category1: {
    color: "var(--dark-category1)",
    fontSize: {
      base: "20px",
      md: "22px",
      lg: "24px",
    },
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: {
      base: "24px",
      md: "28px",
      lg: "32px",
    },
    letterSpacing: {
      base: "-0.336px",
      lg: "-0.96px",
    },
  },
};
