import { Box, ListItem, Typography } from '@mui/material';
import style from './style.module.css';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { RootState } from '../../../redux/store';

function RightPanel({ bookMarks }: { bookMarks: string[] }) {
    const { isDarkMode } = useSelector((state: RootState) => state.states);
    const [currentBookMarkIndex, setCurrentBookMarkIndex] = useState<number>(0);
    const router = useRouter();

    const handleBookMarkChange = (index: number) => {
        router.push(`#${bookMarks[index]}`)
        setCurrentBookMarkIndex(index);
    }

    return (
        <Box className={`${style.rightPanel} ${isDarkMode ? style.darkMode : style.lightMode}`}>
            <Box className={`${style.navigationBox}`}>
                {bookMarks.map((bookMark, index) => (
                    <Box
                        className={`${style.bookMark} ${currentBookMarkIndex === index && style["current-mark"]}`}
                        key={index}
                        onClick={() => { handleBookMarkChange(index); }}
                    >
                        <Box className={`${style.dot}`}></Box>
                        <ListItem className={style.textColor}>{bookMark}</ListItem>
                    </Box>
                ))}
            </Box>
            <Box>
                <Box className={style.imageWrapper}>
                    <Image src={'/right-panel-image.jpeg'} fill alt='right-panel-image.jpeg' className={style.image} />
                    <Typography className={style.smallAdvertisementText}>Check out the latest remote job listing from Authentic Jobs</Typography>
                    <Typography className={style.extraSmallAdvertisementText}>ADS VIA CARBON</Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default RightPanel;
