import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  components: {
    Divider: {
      baseStyle: {
        height: "4px",
      },
    },
  },
  styles: {
    global: {
      ".swiper-button-next, .swiper-button-prev": {
        color: "#FFBA08",
      },
      ".swiper-pagination-bullet": {
        width: '16px',
        height: '16px',
        backgroundColor: '#999999',
        opacity: '1'
      },
      ".swiper-pagination-bullet-active": {
        backgroundColor: '#FFBA08'
      },
      
      body: {
        backgroundColor: "#F5F8FA",
      },
    },
  },
  colors: {
    highligh: "#FFBA08",
    dark: {
      black: "#000",
      handt: "#47585B",
      info: "#999999",
    },
    light: {
      white: "#FFF",
      handt: "#F5F8FA",
      info: "#DADADA",
    },
  },
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
});
