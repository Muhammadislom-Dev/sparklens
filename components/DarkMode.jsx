import { useMyContext } from "@/context/DarkModeContext";
import React from "react";
import SoonIcon from "@/assets/icons/soon.svg";
import MoonIcon from "@/assets/icons/moon.svg";
import { Box, Image } from "@chakra-ui/react";

export default function DarkMode() {
  const contextValue = useMyContext();

  return (
    <Box>
      {contextValue?.darkMode === true ? (
        <div onClick={contextValue?.toggleDarkMode} className='darkMode'>
          <Image cursor={'pointer'} src={MoonIcon.src} alt="SoonIcon" />
        </div>
      ) : (
        <div onClick={contextValue?.toggleDarkMode} className='darkMode'>
          <Image cursor={'pointer'} src={SoonIcon.src} alt="MoonIcon" />
        </div>
      )}
    </Box>
  );
}

