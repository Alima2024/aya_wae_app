import { Button, CircularProgress, Stack, Typography } from "@mui/material";
import TextInput from "../forms/TextInput";
import { baseApi } from "@/utils/api.utils";
import { useRef, useState, type ChangeEvent } from "react";
import { capitalizeFirstLetter } from "@/utils/string.utils";
import { DeleteBgICON, FileICON } from "@/icons/settings";

export default function FileInput({
  onChange,
  title,
  value,
}: {
  onChange?: (ev: any) => void;
  title?: string;
  value?: File;
}) {
  const inputRef = useRef<HTMLInputElement>(null);

  const [loading, setLoading] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);

  const handleImage = async (ev: ChangeEvent<HTMLInputElement>) => {
    try {
      setLoading(true);
      const file = ev.target.files?.[0];
      if (file) {
        const url = await new baseApi("").uploadFile(file as File, "");
        if (url) {
          setFileName(file.name);
          console.log({ url });
          onChange?.({ target: { name, value: url } });
        }
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
    <Stack gap={1} width={"100%"}>
      {title && (
        <Typography
          variant="body1"
          sx={{
            color: "text.primary",
          }}
          noWrap
        >
          {capitalizeFirstLetter(title)}
        </Typography>
      )}

      <TextInput
        value={fileName || ""}
        placeholder="Browse File"
        startIcon={fileName ? <FileICON /> : null}
        endIcon={
          fileName ? (
            <Button
              onclick={onDeleteImage}
              disabled={loading}
              size="small"
              sx={{
                bgcolor: "error.main",
                minWidth: 35,
                height: 30,
                borderRadius: 1,
              }}
            >
              <DeleteBgICON />
            </Button>
          ) : (
            <Button
              sx={{ minWidth: 155, height: 30, borderRadius: 2 }}
              size="small"
              onClick={onChangeImage}
              disabled={loading}
            >
              {loading ? (
                <CircularProgress size={20} color="inherit" />
              ) : (
                "Upload"
              )}
            </Button>
          )
        }
      />

      <input
        ref={inputRef}
        type="file"
        hidden
        onChange={handleImage}
        accept="image/*"
        id="form"
      />
    </Stack>
  );
}
