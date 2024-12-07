import { Box, Button, Stack, Popover } from "@mui/material";
import dayjs, { type Dayjs } from "dayjs";
import { useEffect, useState } from "react";

import { IconCalendar } from "@tabler/icons-react";
import { getFormatedDate } from "@/utils/date.utils";
import DateInput from "./DateInput";
import { capitalizeFirstLetter } from "@/utils/string.utils";
import Row from "../common/Row";

export default function DateFilter({
  start,
  end,
  containerStyle,
  onApply,
}: {
  start: number;
  containerStyle?: any;
  labelStyle?: any;
  iconColor?: any;
  end: number;
  onApply?: (startAt: number, endAt: number) => void;
}) {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const open = Boolean(anchorEl);
  const id = open ? "date-range-id" : undefined;
  const [selected, setSelected] = useState<string | null>(null);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [range, setRange] = useState<{
    start: Dayjs | null;
    end: Dayjs | null;
  }>({ start: null, end: null });

  const onOpen = (event: React.MouseEvent<any>) => {
    setAnchorEl(event.currentTarget);
  };

  const onChange = (name: string) => (ev: any) => {
    const val = ev.target.value;
    setRange((prev) => ({ ...prev, [name]: dayjs(val) }));
  };

  useEffect(() => {
    if (open) {
      if (start) {
        console.log(start);
        setRange((prev) => ({ ...prev, start: dayjs(start) }));
      }
      if (end) {
        console.log(end);
        setRange((prev) => ({ ...prev, end: dayjs(end) }));
      }
    }
  }, [start, end, open]);

  const apply = () => {
    onApply?.(
      dayjs(range.start).toDate().getTime(),
      dayjs(range.end).toDate().getTime()
    );
    handleClose();
  };

  return (
    <Box>
      <Button
        sx={{
          color: "#FFF",
          display: "flex",
          alignItems: "center",
          gap: "10px",
          cursor: "pointer",
          borderRadius: 1,
          p: 0.5,
          px: 3,
          bgcolor: "primary.main",
          ...containerStyle,
        }}
        aria-describedby={id}
        onClick={onOpen}
        startIcon={<IconCalendar />}
      >
        {getFormatedDate(start, end, "en")}
      </Button>

      <Popover id={id} open={open} anchorEl={anchorEl} onClose={handleClose}>
        <Stack gap={3} bgcolor="background.paper" p={3}>
          <Row>
            {items.map((it, i) => (
              <Button
                key={i}
                variant={selected === it.label ? "contained" : "text"}
                onClick={() => {
                  setRange(it.getValue());
                  setSelected(it.label);
                }}
              >
                {capitalizeFirstLetter(it?.label)}
              </Button>
            ))}
          </Row>

          <DateInput
            value={range.start}
            onChange={onChange("start")}
            maxDate={range.end}
            title={"start date"}
          />

          <DateInput
            value={range.end}
            onChange={onChange("end")}
            minDate={range.start}
            maxDate={dayjs().add(1, "day")}
            title={"end date"}
          />

          <Row justifyContent="flex-end">
            <Button variant="outlined" color="error" onClick={handleClose}>
              {capitalizeFirstLetter("cancel")}
            </Button>
            <Button
              disabled={dayjs(range.end).isBefore(dayjs(range.end))}
              onClick={apply}
              variant="contained"
            >
              {capitalizeFirstLetter("apply")}
            </Button>
          </Row>
        </Stack>
      </Popover>
    </Box>
  );
}

const items: any[] = [
  {
    label: "to_day",
    id: 1,
    getValue: () => {
      const today = dayjs();
      return { start: today.startOf("day"), end: today.endOf("day") };
    },
  },
  {
    label: "this_week",
    id: 2,
    getValue: () => {
      const today = dayjs();
      return { start: today.startOf("week"), end: today };
    },
  },
  {
    label: "this_month",
    id: 5,
    getValue: () => {
      const today = dayjs();
      return { start: today.startOf("month"), end: today };
    },
  },
  {
    label: "last_month",
    id: 6,
    getValue: () => {
      const today = dayjs();
      const lastMonth = today.subtract(1, "month");

      return {
        start: Number(lastMonth.startOf("month")),
        end: Number(lastMonth.endOf("month")),
      };
    },
  },
];
