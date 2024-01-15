import dayjs from 'dayjs';

export const formatDateYYYYMMDD = (date: string | Date) => dayjs(date).format('YYYY년 MM월 DD일');
