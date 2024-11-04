import {
  CheckCircleOutline,
  PanoramaFishEye,
  RemoveCircleOutline,
} from "@mui/icons-material";
import { Box, Button, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";
import { Column, Row } from "../layout/elements";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Crochet: React.FC = () => {
  const theme = useTheme();
  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    }),
  };
  return (
    <HelmetProvider>
      <Helmet>
        <title>포트폴리오 1 - 뜨개 메모</title>
      </Helmet>
    <Column
      justifyContent="flex-start"
      alignItems="center"
      width="100%"
      minWidth={480}
      maxWidth={480}
      m="0 auto"
      p={1}
      gap={1}
      height="100vh"
      bgcolor={theme?.palette?.crochet?.background?.default}
      sx={{ overflowX: "hidden", overflowY: "auto" }}
    >
      <Column width="100%" gap={1} justifyContent="flex-start">
        <Column
          sx={{
            width: "100%",
            borderRadius: 2,
            p: 2,
            gap: 1,
            backgroundColor: theme?.palette?.crochet?.primary?.pink,
          }}
        >
          <Typography
            variant="h2"
            textAlign="left"
            sx={{
              fontWeight: "bold",
              color: theme?.palette?.background?.paper,
            }}
          >
            ⭐️ 현재 뜨고 있는 도안은 ?
          </Typography>
          <Typography
            p={1}
            sx={{
              color: theme?.palette?.crochet?.primary?.pink,
              fontWeight: "bold",
              backgroundColor: "rgba(255,255,255,0.8)",
              borderRadius: 2,
            }}
          >
            🍓 인형용 딸기 모자
            {"...".split("").map((letter, index) => (
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
        </Column>
        <Column
          sx={{
            width: "100%",
            borderRadius: 2,
            p: 2,
            gap: 1,
            bgcolor: theme.palette.crochet?.primary?.lightYellow,
            color: theme.palette.secondary?.dark,
          }}
        >
          <Typography variant="h2" textAlign="left" sx={{ fontWeight: "bold" }}>
            📌 뜨개질 목록
          </Typography>
          <Row gap={1} alignItems="center">
            <RemoveCircleOutline
              fontSize="small"
              sx={{ color: theme.palette?.crochet?.primary?.green }}
            />
            <Typography variant="h3">인형용 딸기 모자</Typography>
          </Row>
          <Row gap={1} alignItems="center">
            <PanoramaFishEye
              fontSize="small"
              sx={{ color: theme.palette?.crochet?.primary?.green }}
            />
            <Typography variant="h3">인형용 왹져 선글라스</Typography>
          </Row>
          <Row gap={1} alignItems="center">
            <CheckCircleOutline fontSize="small" color="disabled" />
            <Typography variant="h3">선물용 키링</Typography>
          </Row>
        </Column>
      </Column>
      <Row gap={1} width="100%">
        <Button
          sx={{
            p: 1,
            bgcolor: theme?.palette?.crochet?.primary?.light,
            flex: 1,
            minHeight: 80,
            borderRadius: 3,
          }}
        >
          <Column height="100%" justifyContent="center" alignItems="center">
            <Typography
              variant="h3"
              color="white"
              sx={{ fontFamily: "WantedSans-ExtraBold", fontSize: "1.2rem" }}
            >
              뜨개 정보
            </Typography>
          </Column>
        </Button>
        <Button
          sx={{
            p: 1,
            bgcolor: theme?.palette?.crochet?.primary?.green,
            flex: 1,
            minHeight: 80,
            borderRadius: 3,
          }}
        >
          <Column height="100%" justifyContent="center" alignItems="center">
            <Typography
              variant="h3"
              color="white"
              sx={{ fontFamily: "WantedSans-ExtraBold", fontSize: "1.2rem" }}
            >
              뜨개 도안
            </Typography>
          </Column>
        </Button>
        <Button
          sx={{
            p: 1,
            bgcolor: theme?.palette?.crochet?.primary?.blue,
            flex: 1,
            minHeight: 80,
            borderRadius: 3,
          }}
        >
          <Column height="100%" justifyContent="center" alignItems="center">
            <Typography
              variant="h3"
              color="white"
              sx={{ fontFamily: "WantedSans-ExtraBold", fontSize: "1.2rem" }}
            >
              새 메모
            </Typography>
          </Column>
        </Button>
      </Row>
    </Column>
    </HelmetProvider>
  );
};

export default Crochet;
