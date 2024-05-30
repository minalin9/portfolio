import { ArrowBackIosNewRounded, NoteAltOutlined } from "@mui/icons-material";
import {
  Badge,
  Collapse,
  IconButton,
  Typography,
  useTheme,
} from "@mui/material";
import dayjs from "dayjs";
import { FC, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { getProjectData } from "../../utils/notionapi";
import InputPageComponent from "./input";
import { Column, Row } from "../layout/elements";

const Notepad: FC = () => {
  const theme = useTheme();
  const [data, setData] = useState<any>(null);
  const [contentToggle, setContentToggle] = useState<boolean>(false);
  const [inputPage, setInputPage] = useState<boolean>(false);
  const { data: projectData } = useQuery("projectData", getProjectData);

  useEffect(() => {
    setData(projectData?.data?.results);
  }, [projectData]);

  const CategoryType = {
    빨강: "error",
    파랑: "info",
    초록: "success",
    노랑: "warning",
  };

  return (
    <Column
      maxWidth={480}
      bgcolor={theme?.palette?.notepad?.background?.default}
      height="100vh"
      width="100%"
      margin="auto"
      px={2}
    >
      <Row justifyContent="space-between" alignItems="center" width="100%">
        <Typography variant="h1">나모</Typography>
        <IconButton
          sx={{ color: theme?.palette?.notepad?.primary?.main }}
          onClick={() => setInputPage((prev) => !prev)}
        >
          {inputPage ? <ArrowBackIosNewRounded /> : <NoteAltOutlined />}
        </IconButton>
      </Row>
      {!inputPage ? (
        <Column justifyContent="center" alignItems="center" gap={1} py={2}>
          {data?.map((item: any, index: number) => {
            const props = item?.properties;

            return (
              <Row
                key={index}
                justifyContent="space-between"
                alignItems="center"
                gap={1}
                p={2}
                borderRadius={3}
                sx={{ bgcolor: theme.palette?.background?.paper }}
                width="100%"
              >
                <Column maxWidth={250}>
                  {/* title */}
                  {props?.title?.title?.map((cont: any, i: number) => (
                    <Row alignItems="center" key={i}>
                      <Typography variant="h2" fontWeight={700}>
                        {cont?.text?.content}
                      </Typography>
                      <Badge
                        variant="dot"
                        sx={{ pl: 1, pb: 0.5 }}
                        color={
                          CategoryType[
                            props?.category?.select
                              ?.name as keyof typeof CategoryType
                          ] as
                            | "error"
                            | "info"
                            | "success"
                            | "warning"
                            | "default"
                            | "primary"
                            | "secondary"
                        }
                      ></Badge>
                    </Row>
                  ))}
                  {/* content */}
                  {props?.content?.rich_text?.map((cont: any, i: number) => (
                    <Collapse in={contentToggle} collapsedSize={50} key={i}>
                      <Typography
                        variant="h4"
                        lineHeight={1.6}
                        pl={1}
                        onClick={() => setContentToggle((prev) => !prev)}
                      >
                        {cont?.text?.content}
                      </Typography>
                    </Collapse>
                  ))}
                </Column>
                <Column
                  justifyContent="flex-start"
                  alignItems="flex-end"
                  gap={1}
                  height="100%"
                >
                  {/* time-stamp */}
                  <Column alignItems="flex-end">
                    <Typography fontSize="14px" lineHeight={1} fontWeight={700}>
                      수정 시간
                    </Typography>
                    <Typography fontSize="14px" lineHeight={1}>
                      {dayjs(props?.modified_at?.last_edited_time).format(
                        "YYYY-MM-DD HH:mm:ss"
                      )}
                    </Typography>
                  </Column>
                  <Column alignItems="flex-end">
                    <Typography fontSize="14px" lineHeight={1} fontWeight={700}>
                      생성 시간
                    </Typography>
                    <Typography fontSize="14px" lineHeight={1}>
                      {dayjs(props?.created_at?.created_time).format(
                        "YYYY-MM-DD HH:mm:ss"
                      )}
                    </Typography>
                  </Column>
                </Column>
              </Row>
            );
          })}
        </Column>
      ) : (
        <InputPageComponent />
      )}
    </Column>
  );
};
export default Notepad;
