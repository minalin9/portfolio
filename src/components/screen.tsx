import React, { useState } from "react";
import { Box, Button, Typography, useTheme } from "@mui/material";
import { keyframes } from "@emotion/react";
import happyImg from "/happy.png";
import cloverImg from "/clover.png";
import { Column, Row } from "./layout/elements";
import { motion } from "framer-motion";

// flyIn 애니메이션 정의
const flyIn = (startX: string, startY: string) => keyframes`
  from {
    transform: translate(${startX}, ${startY});
  }
  to {
    transform: translate(0, 0);
    opacity: 1;
  }
`;

const Screen: React.FC = () => {
  const theme = useTheme();
  const [animationCompleteCount, setAnimationCompleteCount] = useState(0);
  const totalAnimations = 32;

  // 모든 애니메이션이 완료되었을 때 배경색 변경
  const handleAnimationEnd = () => {
    setAnimationCompleteCount((prevCount) => {
      const newCount = prevCount + 1;
      return newCount;
    });
  };

  const animationCompleted = animationCompleteCount >= totalAnimations * 0.8;

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
      },
    }),
  };
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 1, // 컨테이너 애니메이션 시작 지연 시간 (1초)
        delayChildren: 1, // 자식 요소 애니메이션 시작 지연 시간 (1초)
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <Column sx={{ width: "100%", height: "100%", overflowY: "auto" }}>
      {/* 네비게이션 바 */}
      <Row
        sx={{
          position: "fixed",
          left: 0,
          top: 0,
          width: "100%",
          gap: "8px",
          display: "flex",
          justifyContent: "flex-end",
          backgroundColor: theme?.palette?.background?.default,
          zIndex: 100,
          borderBottom: `2px solid ${theme?.palette?.primary?.main}`,
          "& button, & a": { fontFamily: "WantedSans-ExtraBold" },
        }}
      >
        <Button variant="text">HOME</Button>
        <Button variant="text">RESUME</Button>
        <Button variant="text">PORTFOLIO</Button>
        <Button
          variant="text"
          component="a"
          href="https://github.com/minalin9"
          target="_blank"
        >
          GITHUB
        </Button>
      </Row>
      {/* 1 */}
      <Column
        sx={{
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100vh",
          overflow: "hidden",
          gap: "16px",
          position: "relative",
          backgroundColor: animationCompleted
            ? theme.palette.primary.main
            : "transparent",
          transition: "background-color 1s ease",
        }}
      >
        {!animationCompleted && (
          <>
            {["-100vw", "100vw", "0", "0"].map((startX, indexX) =>
              ["-100vh", "0", "100vh", "0"].map((startY, indexY) => (
                <Box
                  key={`${indexX}-${indexY}`}
                  position="absolute"
                  sx={{
                    width: 50,
                    height: 50,
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    opacity: 0,
                    animation: `${flyIn(startX, startY)} 5s ${
                      indexX * 0.5 + indexY * 0.5
                    }s ease-in-out forwards`,
                    "& img": { width: "100%" },
                  }}
                  onAnimationEnd={handleAnimationEnd}
                >
                  <img src={happyImg} alt="happy_clover" />
                </Box>
              ))
            )}
            {["-50vw", "50vw", "-25vw", "25vw"].map((startX, indexX) =>
              ["-50vh", "25vh", "50vh", "-25vh"].map((startY, indexY) => (
                <Box
                  key={`clover-${indexX}-${indexY}`}
                  position="absolute"
                  sx={{
                    width: 50,
                    height: 50,
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    opacity: 0,
                    animation: `${flyIn(startX, startY)} 5s ${
                      indexX * 0.5 + indexY * 0.5
                    }s ease-in-out forwards`,
                    "& img": { width: "100%" },
                  }}
                  onAnimationEnd={handleAnimationEnd}
                >
                  <img src={cloverImg} alt="clover" />
                </Box>
              ))
            )}
          </>
        )}
        {animationCompleted && (
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            width="100%"
            height="100%"
            component={motion.div}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <Typography
              variant="h3"
              fontSize="2em"
              fontFamily="WantedSans-Bold"
              sx={{ color: theme.palette?.notepad?.background?.default }}
            >
              {"🍀 Hello, my world! 🍀".split("").map((letter, index) => (
                <motion.span
                  key={index}
                  variants={letterVariants}
                  initial="hidden"
                  animate="visible"
                  custom={index}
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </Typography>

            <Typography
              variant="h3"
              fontSize="1.5em"
              fontFamily="WantedSans-SemiBold"
              sx={{ color: theme.palette?.notepad?.background?.default }}
              component={motion.span}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 5 }}
            >
              Frontend Developer
            </Typography>
          </Box>
        )}
      </Column>
      {/* 2 */}
      <Column
        justifyContent="center"
        alignContent="center"
        width="100%"
        height="100vh"
        gap={2}
        p={4}
      >
        <Column justifyContent="center" alignItems="center" flex={1}>
          <Column
            width="100%"
            maxWidth={480}
            border={`2px solid ${theme.palette.primary.main}`}
          >
            <Row
              gap={1}
              alignItems="center"
              borderBottom={`1px solid ${theme.palette.primary.main}`}
            >
              <Typography
                variant="h3"
                fontFamily={"WantedSans-SemiBold"}
                color="primary"
                px={2}
                py={1}
              >
                경력
              </Typography>
              <Typography sx={{ color: theme.palette.primary.dark }}>
                총 3년 6개월
              </Typography>
            </Row>
            <Column>
              <Row alignItems="flex-start">
                <Typography variant="h4" color="gray" px={2} py={1}>
                  2020.07 ~ 2023.12
                </Typography>
                <Row
                  alignItems="center"
                  gap={1}
                  px={2}
                  py={1}
                  borderLeft={`1px solid ${theme.palette.primary.main}`}
                >
                  <Typography variant="h3">한길로다</Typography>
                  <Typography
                    sx={{
                      fontSize: "12px",
                      color: theme.palette.secondary.main,
                    }}
                  >
                    프론트엔드 ・ 개발팀 사원
                  </Typography>
                </Row>
              </Row>
            </Column>
          </Column>
        </Column>
        <Column justifyContent="center" alignItems="center" gap={2} flex={1}>
          <Typography
            variant="h3"
            fontSize="1.5em"
            fontFamily="WantedSans-SemiBold"
          >
            ✨ Tech Stack ✨
          </Typography>
          <Row
            sx={{
              justifyContent: "center",
              alignItems: "center",
              gap: "8px",
              maxWidth: "480px",
              flexWrap: "wrap",
            }}
          >
            <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black" />
            <img src="https://img.shields.io/badge/Vue.js-4FC08D?style=for-the-badge&logo=Vue.js&logoColor=white" />
            <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
            <img src="https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=Typescript&logoColor=white" />
            <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=Next.js&logoColor=white" />
            <img src="https://img.shields.io/badge/styled components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" />
            <img src="https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white" />
            <img src="https://img.shields.io/badge/Bootstrapap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white" />
            <img src="https://img.shields.io/badge/Amazon AWS-232F3E?style=for-the-badge&logo=amazonaws&logoColor=white" />
            <img src="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=Heroku&logoColor=white" />
            <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
            <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
          </Row>
        </Column>
      </Column>
      {/* 하단 */}
    </Column>
  );
};

export default Screen;
