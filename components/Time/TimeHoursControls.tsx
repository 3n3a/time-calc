import { useState } from "react";
import { Stack } from "@mantine/core";

import { TimeInput } from "@mantine/dates";

import {IconClock} from "@tabler/icons"

//@ts-ignore
export default function TimeHoursControls({ value, onChange }) {

  const [time, setTime] = useState<[Date, Date]>(value)

  //@ts-ignore
  const updateStart = start => {
    setTime((c) => ([start, c[1]]))
    onChange([start, time[1]])
  }

  //@ts-ignore
  const updateEnd = end => {
    setTime((c) => ([c[0], end]))
    onChange([time[0], end])
  }

  return (
    <>
      <Stack>
        <TimeInput label="Start Time" value={time[0]} format='24' icon={<IconClock size={16} />} onChange={updateStart}></TimeInput>
        <TimeInput label="End Time" value={time[1]} format='24' icon={<IconClock size={16} />} onChange={updateEnd}></TimeInput>
      </Stack>
    </>
  );
}
