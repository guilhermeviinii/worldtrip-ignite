import { Box, Flex } from "@chakra-ui/react";
import { TravelTipsItem } from "./TravelTipsItem";

export function TravelTips() {
  return (
    <Flex
      w="100%"
      maxW={1160}
      mx="auto"
      my="20"
      justifyContent="space-between"
      flexDirection={["column", 'column', 'row']}
      px={['6', '4' , '4', 0]}
    >
      <TravelTipsItem image="cocktail.png" type="vida noturna" />
      <TravelTipsItem image="beach.png" type="praia" />
      <TravelTipsItem image="building.png" type="moderno" />
      <TravelTipsItem image="museum.png" type="clássico" />
      <TravelTipsItem image="earth.png" type="e mais..." />
    </Flex>
  );
}
