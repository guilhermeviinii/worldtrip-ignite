import { Box, Flex, Icon, Image } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FaChevronLeft } from "react-icons/fa";

interface HeaderProps {
  back?: boolean;
}

export function Header({ back = false }: HeaderProps) {
  const { back: lastUrl } = useRouter();

  function handlerBackChevrol() {
    lastUrl();
  }

  return (
    <Flex w="100%" h={100} justify="center" align="center">
      <Flex
        align="center"
        w="100%"
        mx="auto"
        maxW="1160px"
        pos="relative"
        px={{ base: "2" }}
      >
        {!!back && (
          <Icon
            title="Voltar"
            cursor="pointer"
            position="relative"
            left="0"
            color="dark.handt"
            fontSize="20px"
            onClick={handlerBackChevrol}
            as={FaChevronLeft}
          />
        )}
        <Image mx="auto" src="/images/logo.png" alt="Logo" />
      </Flex>
    </Flex>
  );
}
