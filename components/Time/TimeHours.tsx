import { useState } from 'react';

import { Stack, Title } from '@mantine/core';

import TimeControls from './TimeHoursControls';
import TimeOutput from './TimeOutput';
import { Config } from './_Config';


//@ts-ignore
function calculateTime(start, end, unit = 'hours'): number {
	//@ts-ignore
	return Number(Config.dayjs(end).diff(Config.dayjs(start), unit, true).toFixed(2))
}

export function TimeHours() {
	const defaultStart = Config.dayjs("00:00", Config.timeFormat).toDate();
	const defaultEnd = Config.dayjs("00:00", Config.timeFormat).toDate();
  
	const [time, setTime] = useState<[Date, Date]>([defaultStart, defaultEnd])

	return (
			<Stack>
				<Title order={1}>Time in hours</Title>
				<TimeControls value={time} onChange={setTime}></TimeControls>
				<TimeOutput unit='hours' output={calculateTime(time[0], time[1], 'hours')}></TimeOutput>
				<TimeOutput unit='minutes' output={calculateTime(time[0], time[1], 'minutes')}></TimeOutput>
			</Stack>
	);
}
