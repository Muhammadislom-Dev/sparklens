import { MyContextProvider } from "@/context/DarkModeContext";
import { ChakraProvider } from "@chakra-ui/react";
import "@/styles/globals.css";
import { MySearchContextProvider } from "@/context/SearchInputContext";

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <MyContextProvider>
        <MySearchContextProvider>
          <Component {...pageProps} />
        </MySearchContextProvider>
      </MyContextProvider>
    </ChakraProvider>
  );
}
