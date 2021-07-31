import { Box, Image, Text, VStack } from "@chakra-ui/react";

interface TravelTipsItemProps {
  image: string;
  type: string;
}

export function TravelTipsItem({ image, type }: TravelTipsItemProps) {
  return (
    <Box>
      <VStack spacing="6">
      <Image src={`/images/traveltips/${image}`} alt={type} />
      <Text fontWeight="semibold" color="dark.handt" fontSize="24">{type}</Text>
      </VStack>
    </Box>
  );
}
