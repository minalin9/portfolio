import { keyframes } from "@emotion/react";
import {
  Box,
  Button,
  Divider,
  Tab,
  Tabs,
  Typography,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import { Column, Row } from "./layout/elements";
import cloverImg from "/clover.png";
import happyImg from "/happy.png";
import { useNavigate } from "react-router-dom";
import PortfolioImg from "../assets/img/portfolio.png";

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

  const [tabValue, setTabValue] = useState(0);
  const handleTabChange = (newValue: number) => {
    setTabValue(newValue);
  };
  const HomeRef = useRef(null);
  const ResumeRef = useRef(null);
  const PortfolioRef = useRef(null);

  const scrollToSection = (sectionRef: React.RefObject<HTMLElement>) => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const navigate = useNavigate();

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
        <Button
          variant="text"
          onClick={() => {
            scrollToSection(HomeRef);
          }}
        >
          HOME
        </Button>
        <Button
          variant="text"
          onClick={() => {
            scrollToSection(ResumeRef);
          }}
        >
          RESUME
        </Button>
        <Button
          variant="text"
          onClick={() => {
            scrollToSection(PortfolioRef);
          }}
        >
          PORTFOLIO
        </Button>
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
        ref={HomeRef}
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
        ref={ResumeRef}
        justifyContent="center"
        alignContent="center"
        width="100%"
        height="100vh"
        overflow="hidden"
      >
        <Column height="100%" py={2} gap={2}>
          <Column
            justifyContent="center"
            alignItems="center"
            gap={2}
            flex={0.5}
          >
            <Typography
              variant="h3"
              fontSize="1.2em"
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
                "& img": {
                  width: "auto",
                  maxHeight: "20px",
                },
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
          {/* //스택 */}
          <Column justifyContent="center" alignItems="center" flex="auto">
            <Column
              width="100%"
              maxWidth={480}
              border={`2px solid ${theme.palette.primary.main}`}
            >
              <Row
                gap={1}
                justifyContent="flex-start"
                alignItems="center"
                borderBottom={`1px solid ${theme.palette.primary.main}`}
                py={1}
              >
                <Typography
                  variant="h2"
                  fontFamily={"WantedSans-ExtraBold"}
                  color="primary"
                  minWidth={97}
                  maxWidth={97}
                  textAlign="center"
                >
                  경력
                </Typography>
                <Column alignItems="flex-start">
                  <Row alignItems="center" gap={1}>
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
                  <Typography sx={{ color: theme.palette.primary.dark }}>
                    2020.07 ~ 2023.12(총 3년 6개월)
                  </Typography>
                </Column>
              </Row>
              <Row alignItems="flex-start">
                <Column maxWidth={100}>
                  <Tabs
                    orientation="vertical"
                    variant="scrollable"
                    value={tabValue}
                    onChange={(_, newValue) => handleTabChange(newValue)}
                  >
                    {[
                      "2023.01 - 2023.12",
                      "2022.07 - 2022.12",
                      "2020.07 - 2022.12",
                    ].map((label, index) => (
                      <Tab
                        key={label}
                        label={label}
                        sx={{
                          backgroundColor:
                            tabValue === index
                              ? theme.palette.primary.main
                              : "inherit",
                          color:
                            tabValue === index
                              ? `${theme.palette.notepad?.background?.default} !important`
                              : theme.palette.primary.light,
                          fontSize: 14,
                          fontWeight: tabValue === index ? "bold" : "normal",
                        }}
                      />
                    ))}
                  </Tabs>
                </Column>
                <Column
                  flex="auto"
                  px={2}
                  py={1}
                  borderLeft={`1px solid ${theme.palette.primary.main}`}
                >
                  <Column>
                    {tabValue === 0 && (
                      <>
                        <Typography
                          variant="h4"
                          sx={{
                            color: theme.palette.secondary.main,
                          }}
                        >
                          2023.01 - 2023.12
                        </Typography>
                        <Typography
                          variant="h3"
                          sx={{ color: theme.palette.secondary.main }}
                        >
                          사주바주 ➡️ 더큼만세력 웹/앱 서비스 리뉴얼 프로젝트
                        </Typography>
                      </>
                    )}
                    {tabValue === 1 && (
                      <>
                        <Typography
                          variant="h4"
                          sx={{
                            color: theme.palette.secondary.main,
                          }}
                        >
                          2022.07 - 2022.12
                        </Typography>
                        <Typography
                          variant="h3"
                          sx={{ color: theme.palette.secondary.main }}
                        >
                          외부 협력사와 전화 상담 프로그램 개발
                        </Typography>
                      </>
                    )}
                    {tabValue === 2 && (
                      <>
                        <Typography
                          variant="h4"
                          sx={{
                            color: theme.palette.secondary.main,
                          }}
                        >
                          2020.07 - 2022.12
                        </Typography>
                        <Typography
                          variant="h3"
                          sx={{ color: theme.palette.secondary.main }}
                        >
                          사주바주
                        </Typography>
                      </>
                    )}
                    <Divider sx={{ my: 1 }} />
                    <Column
                      minHeight={300}
                      maxHeight={300}
                      sx={{ overflowY: "auto" }}
                    >
                      {tabValue === 0 && (
                        <Typography variant="h4" color="initial">
                          - React.js 기반 사주바주 웹사이트 전면 리뉴얼 <br />-
                          홈, 서비스 제공페이지 (만세력), 마이페이지, 결제 기능
                          UI 및 API 연동
                          <br /> - Material-UI(MUI) 라이브러리 기반 UI 컴포넌트
                          개발
                          <br /> - Chat GPT API 연동을 통한 AI 기반 사주 해석
                          기능 개발
                          <br /> 　1) API 연동
                          <br /> 　　OpenAI Chat GPT API 엔드포인트에 HTTP
                          요청을 보내기 위한 코드 작성 (Axios 사용)
                          <br />
                          　2)데이터 바인딩 <br />
                          　　사용자 생년월일시 정보를 Chat GPT 모델에 맞는
                          형식으로 가공 <br />
                          　　Chat GPT 응답 데이터를 프론트엔드에서 효과적으로
                          렌더링할 수 있게 파싱
                          <br />
                          　3) UI 개발
                          <br /> 　　MUI 라이브러리를 활용한 사주 해석 결과
                          시각화 UI 컴포넌트 개발 <br />
                          　　사용자 입력 폼 및 결과 화면 UI 구성
                          <br /> 　4) 상태 관리
                          <br /> 　　사용자 입력 데이터와 Chat GPT 응답 결과를
                          React 상태로 관리 　<br />
                          　5) 데이터 전송
                          <br /> 　　사용자 입력 데이터와 Chat GPT 응답을 서버
                          API로 전송하기 위한 코드 작성 <br />
                          　6) 라이프사이클 관리
                          <br /> 　　API 응답 대기 중 UI 렌더링 최적화를 위한
                          라이프사이클 훅 활용
                          <br /> 　7) 에러 핸들링
                          <br /> 　　API 호출 또는 데이터 파싱 실패 시 에러 처리
                          로직 구현 - Google Play Store 앱 배포
                          <br /> - Channel.io 채팅 솔루션 연동 및 고객 서비스
                          기능 구축
                        </Typography>
                      )}
                      {tabValue === 1 && (
                        <Typography variant="h4" color="initial">
                          - React.js 기반 상담사/관리자 페이지 개발
                          <br /> - Sendbird 라이브러리를 활용한 전화 상담 시스템
                          구축 <br />- Material-UI(MUI) 라이브러리를 통한
                          상담자/관리자 UI 개발 <br />- REST API 연동을 통한
                          데이터 바인딩
                        </Typography>
                      )}
                      {tabValue === 2 && (
                        <Typography variant="h4" color="initial">
                          - 초기 HTML5, CSS, jQuery를 활용한 웹페이지 퍼블리싱
                          업무 수행
                          <br />
                          - UI/UX 개선을 위한 A/B 테스트 및 반응형 웹 구현
                          <br />
                          - 사용자 친화적인 UI/UX 디자인 개선 작업 진행
                          <br />
                          - 월간 활성 사용자(MAU) 증대를 위한 생년월일 기반 사주
                          테스트 결과 페이지 제작
                          <br />
                          <br />
                          React를 통한 SPA 개발
                          <br />
                          - Styled-Component를 활용한 스타일링 작업
                          <br />
                          - React 기반 SEO(검색 엔진 최적화) 작업 수행
                          <br />
                          - Google Analytics(GA) 연동을 통한 사용자 활동 트래킹
                          <br />
                          <br />
                          Vue.js 기반 웹 애플리케이션 개발
                          <br />
                          - 외부 벤더사와 협업 하며 커뮤니케이션 능력 배양
                          <br />
                          - Git을 통한 체계적인 버전 관리 경험
                          <br />
                          - Vue.js에서의 SEO 최적화 작업
                          <br />
                          - API 연동을 통한 데이터 바인딩
                          <br />
                        </Typography>
                      )}
                    </Column>
                  </Column>
                </Column>
              </Row>
            </Column>
          </Column>
          {/* //경력 */}
        </Column>
      </Column>

      <Column
        ref={PortfolioRef}
        justifyContent="center"
        alignContent="center"
        width="100%"
        height="100vh"
        overflow="hidden"
      >
        <Column
          height="100%"
          gap={2}
          p={4}
          justifyContent="center"
          alignItems="center"
        >
          <Row gap={1}>
            <Column
              onClick={() => {
                navigate("/project/crochet-note");
              }}
            >
              <Button 
                sx={{
                  "& img": { width: "100%" },
                  "& img:hover": { opacity: 0.8 },
                  border: `2px solid ${theme.palette.primary.light}`,
                }}
              >
                <img src={PortfolioImg} alt="포트폴리오_이미지(1)" />
              </Button>
              <Column justifyContent="center" alignItems="center">
                <Typography
                  textAlign="center"
                  variant="h4"
                  fontFamily="WantedSans-SemiBold"
                >
                  나만의 메모장(나모) <br />
                  개인 제작 메모장
                </Typography>
                <Typography variant="h5">
                  React, Typescript, vite 사용
                </Typography>
              </Column>
            </Column>
            <Column
              onClick={() => {
                navigate("/project/crochet-note");
              }}
            >
              <Button
                sx={{
                  "& img": { width: "100%" },
                  "& img:hover": { opacity: 0.8 },
                  border: `2px solid ${theme.palette.primary.light}`,
                }}
              >
                <img src={PortfolioImg} alt="포트폴리오_이미지(1)" />
              </Button>
              <Column justifyContent="center" alignItems="center">
                <Typography
                  textAlign="center"
                  variant="h4"
                  fontFamily="WantedSans-SemiBold"
                >
                  나만의 메모장(나모) <br />
                  개인 제작 메모장
                </Typography>
                <Typography variant="h5">
                  React, Typescript, vite 사용
                </Typography>
              </Column>
            </Column>
            <Column
              onClick={() => {
                navigate("/project/crochet-note");
              }}
            >
              <Button
                sx={{
                  "& img": { width: "100%" },
                  "& img:hover": { opacity: 0.8 },
                  border: `2px solid ${theme.palette.primary.light}`,
                }}
              >
                <img src={PortfolioImg} alt="포트폴리오_이미지(1)" />
              </Button>
              <Column justifyContent="center" alignItems="center">
                <Typography
                  textAlign="center"
                  variant="h4"
                  fontFamily="WantedSans-SemiBold"
                >
                  나만의 메모장(나모) <br />
                  개인 제작 메모장
                </Typography>
                <Typography variant="h5">
                  React, Typescript, vite 사용
                </Typography>
              </Column>
            </Column>
          </Row>
        </Column>
      </Column>
      {/* 하단 */}
    </Column>
  );
};

export default Screen;
