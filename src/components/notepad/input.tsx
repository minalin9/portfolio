import { Button, TextField, useTheme } from "@mui/material";
import { Column } from "../layout/elements";

const InputPageComponent = () => {
  const theme = useTheme();
  return (
    <Column
      justifyContent="center"
      alignItems="center"
      gap={1}
      pt={2}
      width="100%"
      height="100vh"
    >
      <Column
        justifyContent="space-between"
        alignItems="center"
        gap={1}
        p={2}
        borderRadius={3}
        sx={{bgcolor: theme.palette?.background?.paper}}
        width="100%"
        height="100%"
      >
        <Column
          width="100%"
          height="100%"
          sx={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent 0%, transparent calc(100% - 1px), ${theme.palette.divider} calc(100% - 1px), ${theme.palette.divider} 100%)`,
            backgroundSize: `100% 34px`,
            backgroundPosition: `0px -1px`,
          }}
        >
          <Column>
            <TextField
              label="제목"
              InputLabelProps={{
                style: {
                  left: "-5px",
                  top: "-18px",
                  fontSize: "24px",
                },
              }}
            />
          </Column>
          <Column flexGrow={1}>
            <TextField variant="filled" multiline />
          </Column>
        </Column>
      </Column>
      <Button
        variant="contained"
        fullWidth
        sx={{
          bgcolor: theme.palette?.notepad?.primary?.main,
          fontWeight: 900,
          fontSize: "18px",
        }}
      >
        저장
      </Button>
    </Column>
  );
};

export default InputPageComponent;
