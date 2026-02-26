import { Box, Button, IconButton, InputAdornment, TextField, Typography } from '@mui/material';
import Image from 'next/image';
import style from './style.module.css'
import Link from 'next/link';
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';
import { FaStackOverflow, FaGlobe, FaDiscord } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import SunnyIcon from '@mui/icons-material/Sunny';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { setDarkMode, setDrawerOpen } from '../../redux/slices/states';

const Header = () => {
    const { isDarkMode, isDrawerOpen } = useSelector((state: RootState) => state.states);
    const dispatch = useDispatch();

    const handleDrawerState = () => {
        dispatch(setDrawerOpen(!isDrawerOpen));
    }

    const handleModeChange = () => {
        dispatch(setDarkMode(!isDarkMode));
    }

    return (
        <Box className={style.header}>
            <Box className={style.container1}>
                <Button disableRipple onClick={handleDrawerState} className={`${style.drawerButton} ${isDrawerOpen ? style.drawerOpenWidth : style.drawerCloseWidth}`}>
                    <Image src={"/burger.svg"} alt='burger.svg' fill className={style.drawerImage} />
                </Button>
                <Box className={style.logo}>
                    <Image src={'/nestjs-logo.svg'} alt='nestjs-logo.svg' fill className={style.image} />
                </Box>
            </Box>
            <Box className={`${style.container2} ${style.flexEnd}`}>
                <TextField
                    id="outlined-adornment-search"
                    className={style.searchField}
                    variant='standard'
                    placeholder='Search'
                    slotProps={{
                        input: {
                            startAdornment:
                                <InputAdornment position="end" >
                                    <IconButton
                                        edge="start"
                                    >
                                        <CiSearch className={style.searchIcon} />
                                    </IconButton>
                                </InputAdornment>,
                            className: style.searchFieldText
                        },
                    }}
                />
                <Box className={`${style.flexRowEvenly} ${style.linkBox}`}>
                    <Link href={'/'}>
                        <Typography className={style.linkText}>
                            COURSES
                        </Typography>
                    </Link>
                    <Link href={'/'}>
                        <Typography className={style.linkText}>
                            ENTERPRISE
                        </Typography>
                    </Link>
                    <Link href={'/'}>
                        <Typography className={style.linkText}>
                            <span className={style.redTextBox}>New</span>
                            DEVTOOLS
                        </Typography>
                    </Link>
                    <Link href={'/'}>
                        <Button className={style.redTextButton}>
                            DEPLOY WITH MAU
                        </Button>
                    </Link>
                </Box>
                <Box className={style.iconBox}>
                    <IconButton className={style.iconButton}>
                        <XIcon />
                    </IconButton>
                    <IconButton className={style.iconButton}>
                        <GitHubIcon />
                    </IconButton>
                    <IconButton className={style.iconButton}>
                        <FaStackOverflow />
                    </IconButton>
                    <IconButton className={style.iconButton}>
                        <FaGlobe />
                    </IconButton>
                    <IconButton className={style.iconButton}>
                        <FaDiscord />
                    </IconButton>
                    <Box className={style.separator}></Box>
                    <IconButton className={style.modeButton} onClick={handleModeChange}>
                        {isDarkMode ? <SunnyIcon /> : <DarkModeIcon />}
                    </IconButton>
                </Box>
            </Box>
        </Box >
    )
}

export default Header;