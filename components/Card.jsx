import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import React from "react";
import AvatarIcon from "@/assets/icons/avatar.svg";
import Link from "next/link";
import { FILE_URL } from "@/services/api";

function Card({ key, data }) {
  return (
    <Box key={key} width={"100%"}>
      <Link href={`/design/${data?.id}`}>
        <div className="card-box">
          <picture>
            <source
              media="(max-width: 450px)"
              srcset={`${FILE_URL}${data?.attributes?.Images?.data[0]?.attributes?.formats?.medium?.url}`}
            />
            <source
              media="(max-width: 600px)"
              srcset={`${FILE_URL}${data?.attributes?.Images?.data[0]?.attributes?.formats?.medium?.url}`}
            />
            <source
              media="(max-width: 900px)"
              srcset={`${FILE_URL}${data?.attributes?.Images?.data[0]?.attributes?.formats?.medium?.url}`}
            />
            <img
              src={`${FILE_URL}${data?.attributes?.Images?.data[0]?.attributes?.formats?.medium?.url}`}
              alt={data?.attributes?.Images?.data[0]?.attributes?.name}
              className="card-img"
            />
          </picture>
        </div>
      </Link>
      <Flex mt={"16px"} align={"center"} gap={"8px"}>
        {
          data?.attributes?.designers.data[0]?.attributes?.Avatar?.data?.attributes?.url === undefined ? (
            <Image
            src={
              AvatarIcon.src
            }
            alt="AvatarIcon"
            width={"32px"}
            height={"32px"}
            objectFit={"cover"}
            borderRadius={"50%"}
          />
          ) :  <Image
          src={
            `${FILE_URL}${data?.attributes?.designers?.data[0]?.attributes?.Avatar?.data?.attributes?.url}`
          }
          alt="AvatarIcon"
          width={"32px"}
          height={"32px"}
          objectFit={"cover"}
          borderRadius={"50%"}
        />
        }
        <Heading {...css.title}>{data?.attributes?.Title}</Heading>
      </Flex>
    </Box>
  );
}

export default Card;

const css = {
  title: {
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: "500",
    color: "var(--title-primary)",
    letterSpacing: "-0.16px",
  },
  image: {
    height: "246px",
    width: "90%",
    objectFit: "cover",
    borderRadius: "var(--radius-md, 8px)",
    border: "1px solid var(--border-action-normal, #DEE0E3)",
  },
};
