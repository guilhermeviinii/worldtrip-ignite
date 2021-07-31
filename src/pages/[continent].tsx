import { useRouter } from "next/router";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { continentsInfo } from "../utils/continentInfo";
import { Box, Flex, Heading, HStack, Text, VStack } from "@chakra-ui/layout";
import { Image, Stack } from "@chakra-ui/react";
import { Header } from "../components/Header";

interface ContinentProps {
  dataContinent: DataContinent;
}

type DataContinent = {
  src: string;
  continent: string;
  info: string;
  slug: string;
  banner: string;
  description: string;
  countries: number;
  languages: number;
  cities_count: number;
  cities: [
    {
      capital: string;
      country: string;
      flag: string;
    }
  ];
};

export default function Continent({ dataContinent }: ContinentProps) {
  console.log(dataContinent.banner);
  if (typeof dataContinent.banner == "undefined") {
    return (
      <>
        <Head>
          <title>{dataContinent.continent}</title>
        </Head>

        <Box w="100%" maxW={1140} mx="auto">
          <Heading>Estamos trabalhado nos dados dessa página ainda</Heading>
        </Box>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>{dataContinent.continent}</title>
      </Head>

      <Header back />

      <Box w="100%" position="relative">
        <Image
          h={500}
          w="100%"
          objectFit="cover"
          src={dataContinent.banner}
          alt={dataContinent.continent}
        />
        <Box mx="auto" w="100%" maxW={1160}>
          <Heading color="light.handt" position="absolute" bottom="15">
            {dataContinent.continent}
          </Heading>
        </Box>
      </Box>

      <Flex
        w="100%"
        maxW={1140}
        mx="auto"
        mt="20"
        flexDirection={["column"]}
        px={["4"]}
      >
        <Stack flexDirection={["column", "column", "row"]} alignItems="center"  spacing={[70, 70, 0]} >
          <Text maxW={['100%', '100%', 600]} fontSize="24" textAlign="justify">
            A Europa é, por convenção, um dos seis continentes do mundo.
            Compreendendo a península ocidental da Eurásia, a Europa geralmente
            divide-se da Ásia a leste pela divisória de águas dos montes Urais,
            o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
          </Text>
          <Flex
            w="100%"
            fontWeight="bold"
            fontSize="40"
            alignItems="center"
            justify="center"
            mx="auto"
            textAlign="center"
            gridColumnGap="42px"
            flexWrap="wrap"
          >
            <Box>
              <Text color="highligh">{dataContinent.countries}</Text>
              <Text fontSize="24" color="dark.handt">
                países
              </Text>
            </Box>
            <Box>
              <Text color="highligh">{dataContinent.languages}</Text>
              <Text fontSize="24" color="dark.handt">
                línguas
              </Text>
            </Box>
            <Box>
              <Text color="highligh">{dataContinent.cities_count}</Text>
              <Text fontSize="24" color="dark.handt">
                cidades +100
              </Text>
            </Box>
          </Flex>
        </Stack>
      </Flex>

      <Box w="100%" maxW="1140px" mx="auto" mt="80px" px={['6', '6' , 0]}>
        <Heading mb="20">Cidades +100</Heading>
        <Flex gridGap="35px" flexWrap="wrap" justify={['center', 'center', 'flex-start']}>
          {dataContinent.cities.map((city) => (
            <Box w="256px" rounded="sm" key={city.country} bg="white">
              <Image
                roundedTopLeft="sm"
                roundedTopRight="sm"
                src={dataContinent.banner}
                alt={city.capital}
              />
              <Flex
                alignItems="center"
                justify="space-between"
                px="24px"
                py="18px"
              >
                <Box>
                  <Text>{city.capital}</Text>
                  <Text>{city.country}</Text>
                </Box>
                <Image
                  rounded="full"
                  w="30px"
                  h="30px"
                  src={city.flag}
                  alt={city.country}
                />
              </Flex>
            </Box>
          ))}
        </Flex>
      </Box>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = continentsInfo.map((cont) => ({
    params: {
      continent: cont.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { continent } = params;

  const [dataContinent] = continentsInfo.filter(
    (cont) => cont.slug == continent
  );

  return {
    props: {
      dataContinent,
    },
  };
};
