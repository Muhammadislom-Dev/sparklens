import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { Link as ALink } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import BackToIcon from "@/assets/icons/lead-icon.svg";
import ArrowIcon from "@/assets/icons/arrow.svg";
import ArrowRightIcon from "@/assets/icons/arrow-right.svg";
import LightArrowIcon from "@/assets/icons/light-arrow.svg";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useMyContext } from "@/context/DarkModeContext";
import { BASE_URL, FILE_URL } from "@/services/api";
import axios from "axios";
import { useRouter } from "next/router";

import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import "yet-another-react-lightbox/styles.css";
import Share from "yet-another-react-lightbox/plugins/share";
import ScrollToTop from "@/components/Scroll";

import Head from "next/head";
import Link from "next/link";

export default function Design() {
  const router = useRouter();
  const postId = router?.query?.id;
  const [open, setOpen] = React.useState(false);
  const [posts, setPosts] = useState([]);
  const contextValue = useMyContext();
  const [category, setCategory] = useState([]);

  const [copy, setCopy] = useState(false);
  const handleClick = () => {
    navigator.clipboard.writeText("jamshidbektashpulatov@gmail.com");
    setCopy(true);
  };
  useEffect(() => {
    axios
      .get(`${BASE_URL}/categories?populate=*`)
      .then((res) => setCategory(res?.data?.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/posts/${postId}?populate=*`)
      .then((res) => setPosts(res?.data?.data))
      .catch((err) => console.log(err));
  }, [postId]);

  return (
    <>
      <Head>
        <title>{posts?.attributes?.Title}</title>
        <link sizes="any" rel="icon" href="/logo.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content={posts?.attributes?.Title} />
        <meta property="og:description" content={posts?.attributes?.Title} />
        <meta
          property="og:image"
          content={`${FILE_URL}${posts?.attributes?.Images?.data[0]?.attributes?.url}`}
        />
        <meta property="og:url" content="https://dashing-chaja-ec5648.netlify.app" />

        {/* <meta
          name="keywords"
          content="inspiration, ui, ux, dropdown, navigation, megamenu, modal, button, navbar, tab, design inspiration, creative community, designer portfolio, design showcase, UI/UX design, graphic design, animation, illustration, design trends, freelance design jobs"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:image"
          content={`${FILE_URL}${posts?.attributes?.Images?.data[0]?.attributes?.url}`}
        />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:image"
          content={`${FILE_URL}${posts?.attributes?.Images?.data[0]?.attributes?.url}`}
        /> */}
      </Head>
      <main className={contextValue?.darkMode === false ? "light" : "dark"}>
        <Navbar />
        <ScrollToTop />
        <Box background={"var(--dark-category)"}>
          <Box className="container">
            <Flex p={"48px 0"} align={"center"} justify={"space-between"}>
              <Flex align={"center"} gap={"16px"}>
                {category?.length > 0
                  ? category?.map((evt, index) => (
                      <Link href={`/category/${evt?.id}`}>
                        <div key={index} className="category-list">
                          <p className="category-title">
                            {evt?.attributes?.Title}
                          </p>
                          <span className="category-circle">
                            {evt?.attributes?.Posts?.data?.length}
                          </span>
                        </div>
                      </Link>
                    ))
                  : ""}
              </Flex>
            </Flex>
            <Flex
              flexDirection={{ base: "column", md: "row" }}
              pb="82px"
              gap="24px"
            >
              <div onClick={() => setOpen(true)} className="design-box">
                <picture>
                  <source
                    media="(max-width: 450px)"
                    srcset={`${FILE_URL}${posts?.attributes?.Images?.data[0]?.attributes?.formats?.medium?.url}`}
                  />
                  <source
                    media="(max-width: 600px)"
                    srcset={`${FILE_URL}${posts?.attributes?.Images?.data[0]?.attributes?.formats?.medium?.url}`}
                  />
                  <source
                    media="(max-width: 900px)"
                    srcset={`${FILE_URL}${posts?.attributes?.Images?.data[0]?.attributes?.formats?.medium?.url}`}
                  />
                  <source
                    media="(max-width: 1100px)"
                    srcset={`${FILE_URL}${posts?.attributes?.Images?.data[0]?.attributes?.formats?.medium?.url}`}
                  />
                  <img
                    src={`${FILE_URL}${posts?.attributes?.Images?.data[0]?.attributes?.url}`}
                    alt={posts?.attributes?.Images?.data[0]?.attributes?.name}
                    className="design-image"
                  />
                </picture>
              </div>
              <Flex flexDirection="column" gap="20px">
                <Box {...css.card}>
                  <ALink {...css.link} href={"/"}>
                    <Image
                      src={
                        contextValue.darkMode === true
                          ? BackToIcon.src
                          : LightArrowIcon.src
                      }
                      alt="BackToIcon"
                    />
                    Back to main
                  </ALink>
                  <Heading {...css.cardTitle}>
                    {posts?.attributes?.Title}
                  </Heading>
                  <Text {...css.subtitle}>Details</Text>
                  <Flex {...css.item}>
                    <Heading {...css.listTitle}>Designer</Heading>
                    <Text {...css.listTitle}>
                      {posts?.attributes?.designers?.data[0]?.attributes?.Name}
                    </Text>
                  </Flex>
                  <Flex {...css.item}>
                    <Heading {...css.listTitle}>Category</Heading>
                    <Text {...css.listTitle}>
                      {
                        posts?.attributes?.categories?.data[0]?.attributes
                          ?.Title
                      }
                    </Text>
                  </Flex>
                  <Flex align="center" justifyContent="space-between">
                    <Heading {...css.listTitle}>Source</Heading>
                    <ALink
                      {...css.links}
                      target="_blank"
                      href={posts?.attributes?.Source}
                    >
                      <Flex gap="8px">
                        <Text {...css.listTitle}> View source</Text>
                        <Image
                          src={
                            contextValue.darkMode === true
                              ? ArrowIcon.src
                              : ArrowRightIcon.src
                          }
                        />
                      </Flex>
                    </ALink>
                  </Flex>
                </Box>
                <Box {...css.topCard}>
                  <Heading {...css.topTitle}>Looking for a designer?</Heading>
                  <Text mb={"8px"} {...css.listTitle}>
                    Bring your vision to life with a world-class designer. No
                    hiring chaos, just predictable expertise for a flat fee.
                  </Text>
                  <Flex mt={"20px"} gap="16px">
                    <p
                      onClick={handleClick}
                      // href="mailto:jamshidbektashpulatov@gmail.com"
                      // target="_blank"
                      className="design-email"
                    >
                      {copy ? "Copied" : " Get in touch"}
                    </p>
                  </Flex>
                </Box>
              </Flex>
            </Flex>
          </Box>
          <Lightbox
            open={open}
            close={() => setOpen(false)}
            plugins={[Fullscreen, Share]}
            slides={[
              {
                src: `${FILE_URL}${posts?.attributes?.Images?.data[0]?.attributes?.url}`,
              },
            ]}
          />
        </Box>
        <Footer />
      </main>
    </>
  );
}

const css = {
  title: {
    color: "var(--dark-category1)",
    fontSize: "14px",
    lineHeight: "20px",
    fontWeight: 500,
    letterSpacing: "-0.07px",
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
  card: {
    borderRadius: "var(--radius-md, 8px)",
    border: "1px solid var(--dark-left-card)",
    padding: "var(--spacing-16, 16px)",
    height: "310px",
    width: {
      base: "100%",
      md: "384px",
    },
  },
  image: {
    width: {
      base: "95%",
      sm: "90%",
      md: "95%",
      xl: "95%",
    },
    height: {
      base: "500px",
      md: "550px",
    },
    objectFit: "cover",
    borderRadius: "8px",
    border: "1px solid var(--border-action-normal, #DEE0E3)",
  },
  link: {
    borderRadius: "var(--radius-lg, 10px)",
    background: "var(--dark-button1)",
    padding: "var(--spacing-6, 6px) var(--spacing-10, 10px)",
    color: "var(--title-primary)",
    fontSize: "14px",
    lineHeight: "20px",
    fontWeight: 500,
    letterSpacing: "-0.07px",
    display: "flex",
    alignItems: "center",
    gap: "4px",
    width: "130px",
    transition: "0.3s",

    _hover: {
      textDecoration: "none",
    },
  },
  links: {
    transition: "0.3s",

    _hover: {
      textDecoration: "none",
    },
  },
  cardTitle: {
    color: "var(--title-primary)",
    fontSize: "20px",
    lineHeight: "28px",
    fontWeight: 500,
    letterSpacing: "-0.24px",
    margin: "24px 0",
  },
  subtitle: {
    color: "var(--dark-category1)",
    fontSize: "12px",
    lineHeight: "16px",
    fontWeight: 500,
  },
  listTitle: {
    color: "var(--dark-category1)",
    fontSize: {
      base: "12px",
      sm: "14px",
    },
    lineHeight: {
      base: "16px",
      sm: "20px",
    },
    fontWeight: 400,
    letterSpacing: "-0.07px",
  },
  item: {
    justifyContent: "space-between",
    pb: "16px",
    borderBottom: "1px solid var(--dark-left-card)",
    m: "20px 0",
  },
  topCard: {
    borderRadius: "var(--radius-md, 8px)",
    border: "1px solid var(--dark-left-card)",
    background:
      "linear-gradient(161deg, rgba(244, 142, 47, 0.13) -14.46%, rgba(252, 64, 64, 0.06) -5.48%, rgba(200, 178, 255, 0.15) 22.82%, rgba(255, 255, 255, 0.00) 88.42%)",
    padding: "var(--spacing-16, 16px)",
    width: {
      base: "100%",
      md: "384px",
    },
  },
  topTitle: {
    color: "var(--title-primary)",
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: 500,
    letterSpacing: "-0.16px",
    mb: "12px",
  },
  check: {
    borderRadius: "1000px",
    border: "0.5px solid var(--border-action-normal, #DEE0E3)",
    background:
      "radial-gradient(137.05% 100% at 50% 0%, #E5DCFF 0%, #FAFFDA 61.79%, #FFF 100%)",
    padding: "3.09px 3px 2.91px 3px",
    width: "16px",
    height: "16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  subtitles: {
    color: "var(--title-primary)",
    fontSize: "12px",
    lineHeight: "16px",
    fontWeight: 500,
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
    padding: "var(--spacing-10, 10px) var(--spacing-12, 12px)",
    transition: "0.3s all ease-in-out",
    border: "none",
    cursor: "pointer",
    width: "180px",

    _hover: {
      background: "var(--dark-design-button)",
    },
    _focus: {
      border: "1px solid var(--border-action-focus-light, #B78AF0)",
      background: "var(--dark-design-button)",
      boxShadow: "0px 0px 0px 2px rgba(200, 178, 255, 0.50)",
    },
  },
  buttons: {
    color: "var(--title-primary)",
    fontSize: "14px",
    lineHeight: "20px",
    fontWeight: 500,
    letterSpacing: "-0.07px",
    borderRadius: "var(--radius-xl, 12px)",
    border: "1px solid var(--border-action-normal, #DEE0E3)",
    background: "var(--dark-category)",
    boxShadow: "0px 1px 2px 0px rgba(20, 21, 26, 0.05)",
    padding: "var(--spacing-10, 10px) var(--spacing-12, 12px)",
    transition: "0.3s all ease-in-out",
    cursor: "pointer",
    width: "100%",

    _hover: {
      background: "var(--dark-bg1)",
    },
    _focus: {
      borderRadius: "var(--radius-xl, 12px)",
      border: "1px solid var(--border-action-focus-light, #B78AF0)",
      background: "var(--dark-bg1)",
      boxShadow: "0px 0px 0px 2px rgba(200, 178, 255, 0.50)",
    },
  },
};
