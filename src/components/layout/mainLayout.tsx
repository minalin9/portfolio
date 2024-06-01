import { useTheme } from "@mui/material";
import { Outlet } from "react-router-dom";
import { FC, ReactNode } from "react";
import { Column, Row } from "./elements";

const MainLayout: FC<{ children?: ReactNode }> = ({ children }) => {
  const theme = useTheme();

  return (
    <Column
      justifyContent="center"
      alignItems="center"
    >
      <Row width={"100%"} sx={{ overflowX: "hidden" }}>
        {children || <Outlet />}
      </Row>
    </Column>
  );
};

export default MainLayout;
