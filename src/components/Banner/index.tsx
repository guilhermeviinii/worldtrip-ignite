import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

export function Banner() {
  return (
    <Box position="relative" h={368}>
      <Image
        src="/images/background.png"
        position="absolute"
        w="100%"
        h="340"
        alt="Background Banner"
      />
      <Flex
        w="100%"
        maxW={1160}
        mx="auto"
        flexDirection={["column", "column", "row"]}
        pt={["2"]}
       px={['2', '2', '4', '2']}
        align="center"
        justify="space-between"
        position="relative"
        zIndex="2"
      >
        <Box>
          <Heading color="light.handt" fontWeight="normal">
            5 Continentes, <br />
            infinitas possibilidades.
          </Heading>
          <Text color="light.info" mt="5" fontSize="20" maxW="524">
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.{" "}
          </Text>
        </Box>
        <Image
          position="relative"
          top={["0", "0","20"]}
          src="/images/airplane.png"
          alt="Avião de Viagem"
        />
      </Flex>
    </Box>
  );
}
