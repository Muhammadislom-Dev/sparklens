import { Box, Flex, Heading, SimpleGrid, Text, Image } from "@chakra-ui/react";
import React, {useState, useEffect} from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useRouter } from "next/router";
import axios from "axios";
import { BASE_URL } from "@/services/api";
import Image404 from "@/assets/icons/09.svg";
import { useMyContext } from "@/context/DarkModeContext";
import Card from '@/components/Card'

function Category() {
  const contextValue = useMyContext();
  const [posts, setPosts] = useState([]);
  const router = useRouter();

  useEffect(() => {
    axios
      .get(
        `${BASE_URL}/posts?populate=*&populate[designers]=true&populate[designers][populate][Avatar]=true&populate[Images]=true&filters[categories]=${router?.query?.id}&populate[categories]=true&pagination[pageSize]=48`
      )
      .then((res) => setPosts(res?.data?.data))
      .catch((err) => console.log(err));
  }, [router?.query?.id]);

  return (
    <main className={contextValue?.darkMode === false ? "light" : "dark"}>
      <Navbar />
      <Box
        background={"var(--dark-category)"}
        pb={"80px"}
        height={posts?.length > 0 ? "" : "calc(100vh - 65.45px - 72px)"}
        pt={"48px"}
      >
        <Box className="container">
        <Heading {...css.title}>{posts[0]?.attributes?.categories?.data[0]?.attributes?.Title}</Heading>
          {posts?.length > 0 ? (
            <SimpleGrid
              gap={"24px"}
              mt={"48px"}
              columns={{ base: 1, md: 2, lg: 3 }}
            >
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
        </Box>
      </Box>
      <Footer />
    </main>
  );
}

export default Category;


const css = {
    list: {
        flexDirection: "column",
        alignItems: "center",
        marginTop:'55px'
      },
      image: {
        width: "84px",
        height: "84px",
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

      title: {
        color: "var(--title-primary)",
        fontSize: "24px",
        fontStyle: "normal",
        fontWeight: 500,
        lineHeight: "32px",
        letterSpacing: "-0.336px",
      },
}