import { baseApi } from "@/utils/api.utils";
import { remove_white_space } from "@/utils/string.utils";
import {
  Box,
  Button,
  CircularProgress,
  Stack,
  SxProps,
  Typography,
} from "@mui/material";
import { ChangeEvent, ReactNode, useRef, useState } from "react";
import Row from "../common/Row";

interface Props {
  defaultIcon?: ReactNode;
  title?: string;
  value: any;
  imageStyle?: SxProps;
  name: string;
  onChange?: (ev: any) => void;
}

const Upload = ({ title, value, onChange, name }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [loading, setLoading] = useState(false);

  const handleImage = async (ev: ChangeEvent<HTMLInputElement>) => {
    try {
      setLoading(true);
      const file = ev.target.files?.[0];

      const url = await new baseApi("").uploadFile(file as File, "");
      if (url) {
        console.log({ url });
        onChange?.({ target: { name, value: url } });
      }
    } catch (err) {
      console.log("error when send file", err);
    } finally {
      setLoading(false);
      (document.getElementById("form") as HTMLFormElement).reset();
    }
  };

  const onChangeImage = () => {
    inputRef.current?.click();
  };

  const onDeleteImage = async (ev: any) => {
    ev?.stopPropagation();
    try {
      setLoading(true);

      onChange?.({ target: { name, value: null } });
      (document.getElementById("form") as HTMLFormElement).reset();
    } catch (err) {
      console.log("error when delete file", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Stack flexDirection={"row"} alignItems="flex-end">
      <Stack spacing={2}>
        {title ? <Typography> {title}</Typography> : null}

        <Box
          sx={{
            position: "relative",
            borderRadius: 4,
            overflow: "hidden",
            background: `url(${
              remove_white_space(value ?? "").length
                ? value
                : "/images/default_image.png"
            }) no-repeat`,
            backgroundPosition: "center center",
            backgroundSize: "cover",
            height: 150,
            width: 1,
          }}
        >
          {loading ? (
            <CircularProgress
              sx={{ position: "absolute", top: "50%", right: "50%" }}
            />
          ) : null}
        </Box>
        <Row spacing={2}>
          <Button
            size="small"
            sx={{
              bgcolor: "tertiary.main",
              color: "#FFF",
              minWidth: 115,
              cursor: "pointer",
              "&:hover": {
                bgcolor: "tertiary.main",
              },
            }}
            onClick={onChangeImage}
          >
            {"upload"}
          </Button>
          <Button
            size="small"
            sx={{
              minWidth: 114,
              bgcolor: "#FEF2F2",
              color: "error.main",
              cursor: "pointer",
              "&:hover": {
                bgcolor: "#FEF2F2",
              },
            }}
            color="error"
            onClick={onDeleteImage}
          >
            {"remove"}
          </Button>
        </Row>
      </Stack>
      <form id="form">
        <input
          ref={inputRef}
          type="file"
          hidden
          onChange={handleImage}
          accept="image/*"
        />
      </form>
    </Stack>
  );
};

export default Upload;
