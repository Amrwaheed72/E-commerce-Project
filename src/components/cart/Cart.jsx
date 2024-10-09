import { Box, CssBaseline, Stack, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "../../theme";
import Carte from "./test";
import Header1 from "components/hearder/Header1";
import Header2 from "components/hearder/Header2";
import Header3 from "components/hearder/Header3";

function Cart() {
  const [theme, colorMode] = useMode();
  return (

    <>
      <ColorModeContext.Provider
        // @ts-ignore
        value={colorMode}>
        <ThemeProvider
          // @ts-ignore
          theme={theme}>
          <CssBaseline />
          <Box bgcolor={theme.
            // @ts-ignore
            palette.bg.main}>
              <Header1 />
              <Header2 />
              <Header3 />
            <Stack direction={"row"} justifyContent={"space-between"}>
              <Carte />
            </Stack>
          </Box>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  )
}

export default Cart