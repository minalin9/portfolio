import React from "react";
import { Column, Row } from "./layout/elements";
import { Button, useTheme } from "@mui/material";

const Screen: React.FC = () => {
  const theme = useTheme();
  return (
    <Column height="100vh" width="100%" p={2}>
      {/* 네비게이션 바 */}
      <Row
        width="100%"
        gap={1}
        justifyContent="flex-end"
        sx={{
          "& button, & a": {
            fontFamily: "WantedSans-ExtraBold",
            fontSize: "1.1em",
          },
          borderBottom: `2px solid ${theme?.palette?.primary?.main }`,
        }}
      >
        <Button variant="text">HOME</Button>
        <Button variant="text">RESUME</Button>
        <Button variant="text">PORTFOLIO</Button>
        <Button variant="text"  component='a' href="https://github.com/minalin9" target="_blank">GITHUB</Button>
      </Row>
      {/* 상단에 경력 */}
      {/* 컨텐츠구역 */}
      {/* 하단 */}
    </Column>
  );
};

export default Screen;
