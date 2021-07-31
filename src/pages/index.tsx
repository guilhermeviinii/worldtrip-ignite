import { Box, Center, Divider, Heading, Image } from "@chakra-ui/react";

import Head from "next/head";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper/core";

import { Banner } from "../components/Banner";
import { Header } from "../components/Header";
import { TravelTips } from "../components/TravelTips";
import { continentsInfo } from "../utils/continentInfo";

// install Swiper modules
SwiperCore.use([Pagination, Navigation, Autoplay]);

export default function Home() {
  return (
    <>
      <Head>
        <title>WordTrip | Inicial</title>
      </Head>

      <Header />

      <Banner />

      <TravelTips />

      <Divider
        w={100}
        mx="auto"
        mb="20"
        bg="dark.handt"
        orientation="horizontal"
      />

      <Box w="100%" maxW={1240} mx="auto" mb="10">
        <Heading
          fontWeight="normal"
          lineHeight="tall"
          fontSize="36"
          color="dark.handt"
          textAlign="center"
        >
          Vamos nessa? <br /> Então escolha seu continente
        </Heading>
        <Box mt="12">
          <Swiper
            height={450}
            // autoplay={true}
            navigation={true}
            slidesPerView={1}
            pagination={true}
          >
            {continentsInfo.map((c) => (
              <SwiperSlide key={c.slug}>
                <Box position="relative">
                  <Image
                    objectFit="cover"
                    src={c.src}
                    alt={c.continent}
                    w="100%"
                    maxHeight={450}
                  />
                  <Box
                    pos="absolute"
                    w="100%"
                    h="100%"
                    zIndex="2"
                    bg="dark.black"
                    opacity={0.35}
                    bottom="0"
                  ></Box>
                  <Link passHref href={c.slug}>
                    <Box
                      alignItems="center"
                      justifyContent="center"
                      position="absolute"
                      zIndex="3"
                      display="flex"
                      flexDirection="column"
                      h="100%"
                      w="100%"
                      bottom="0"
                      top="0"
                      color="white"
                    >
                      <Heading color="light.handt">{c.continent}</Heading>
                      <Heading color="light.info" fontSize="20">{c.info}</Heading>
                    </Box>
                  </Link>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Box>
    </>
  );
}
