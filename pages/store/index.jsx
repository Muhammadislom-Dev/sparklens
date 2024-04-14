import { Box, Flex, Heading, SimpleGrid, Text, Image } from "@chakra-ui/react";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useMyContext } from "@/context/DarkModeContext";
import Link from "next/link";
import DesignImage from "@/assets/images/design.jpg";

export default function Store() {
  const contextValue = useMyContext();
  return (
    <main className={contextValue?.darkMode === false ? "light" : "dark"}>
      <Navbar />
      <Box
        background={"var(--dark-category)"}
        p={{ base: "25px 0 80px", md: "48px 0 200px" }}
      >
        <Box className="container">
          <Heading {...css.title}>Curated design resources</Heading>
          <Text width={{ base: "100%", md: "430px" }} {...css.text}>
            High-quality design tools and assets to help speed up your design
            process
          </Text>
          <SimpleGrid
            mt={"48px"}
            spacing={"24px"}
            columns={{ base: 1, md: 2, lg: 3 }}
          >
            <Box>
              <Link href={"/"}>
                <div className="card-box">
                  <Image
                    className="card-img"
                    {...css.image}
                    src={DesignImage.src}
                    alt="Card"
                  />
                </div>
                <Flex
                  mt={"18px"}
                  justifyContent="space-between"
                  align={"center"}
                >
                  <Heading {...css.cardTitle}>
                    Untitled UI Kit & Design System
                  </Heading>
                  <Box {...css.card}>$99</Box>
                </Flex>
                <Text {...css.cardText}>
                  The Ultimate Figma UI Kit and Design System
                </Text>
              </Link>
            </Box>
            <Box>
              <Link href={"/"}>
                <div className="card-box">
                  <Image
                    className="card-img"
                    {...css.image}
                    src={DesignImage.src}
                    alt="Card"
                  />
                </div>
                <Flex
                  mt={"18px"}
                  justifyContent="space-between"
                  align={"center"}
                >
                  <Heading {...css.cardTitle}>
                    Untitled UI Kit & Design System
                  </Heading>
                  <Box {...css.card}>$99</Box>
                </Flex>
                <Text {...css.cardText}>
                  The Ultimate Figma UI Kit and Design System
                </Text>
              </Link>
            </Box>
            <Box>
              <Link href={"/"}>
                <div className="card-box">
                  <Image
                    className="card-img"
                    {...css.image}
                    src={DesignImage.src}
                    alt="Card"
                  />
                </div>
                <Flex
                  mt={"18px"}
                  justifyContent="space-between"
                  align={"center"}
                >
                  <Heading {...css.cardTitle}>
                    Untitled UI Kit & Design System
                  </Heading>
                  <Box {...css.card}>$99</Box>
                </Flex>
                <Text {...css.cardText}>
                  The Ultimate Figma UI Kit and Design System
                </Text>
              </Link>
            </Box>
          </SimpleGrid>
        </Box>
      </Box>
      <Footer />
    </main>
  );
}

const css = {
  title: {
    color: "var(--title-primary)",
    fontSize: "24px",
    fontStyle: "normal",
    fontWeight: 450,
    lineHeight: "32px",
    letterSpacing: "-0.336px",
  },
  text: {
    color: "var(--dark-category1)",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "24px",
    letterSpacing: "-0.216px",
    mt: "12px",
  },

  cardText: {
    color: "var(--dark-category1)",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "20px",
    letterSpacing: "-0.07px",
    mt: "14px",
  },
  cardTitle: {
    color: "var(--title-primary)",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "24px",
    letterSpacing: "-0.16px",
  },
  card: {
    borderRadius: "var(--radius-md, 8px)",
    background: "var(--dark-number)",
    padding: "var(--spacing-4, 4px) var(--spacing-6, 6px)",
    color: "var(--dark-number1)",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "20px",
    letterSpacing: "-0.07px",
  },
  image: {
    height: "246px",
    width: "200px",
    objectFit: "cover",
    borderRadius: "var(--radius-md, 8px)",
    border: "1px solid var(--border-action-normal, #DEE0E3)",
  },
};
