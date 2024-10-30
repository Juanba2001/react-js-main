import { Box } from "@chakra-ui/react";
import { NavBar } from "../componentes";


const MainLayout = ({ children }) => {
  return (
    <Box>
      {children}
    </Box>
  );
};

export default MainLayout;