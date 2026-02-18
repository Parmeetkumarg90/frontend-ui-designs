"use client";
import { Button, IconButton, Typography } from "@mui/material";
import style from "./style.module.css";
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Navbar = () => {
    return (
        <div className={`${style.grid2UneqCol} ${style.margin2_12}`}>
            <span className={`${style.flexCol} ${style.flexCenter}`}>
                <img src="/logo.svg" alt="/logo.svg" className={`${style.paddingTop2} ${style.logo}`} />
            </span>
            <span className={`${style.grid2UneqRow} ${style.flexEnd} ${style.paddingRight12} ${style.fullWidth}`}>
                <span className={`${style.flexRow} ${style.alignCenter} ${style.gap10}`}>
                    <Typography className={`${style.linkText} ${style.textPadding}`}>EVs</Typography>
                    <Typography className={`${style.linkText} ${style.textPadding}`}>Blog</Typography>
                    <Typography className={`${style.linkText} ${style.textPadding}`}>Help</Typography>
                    <span className={`${style.flexRow} ${style.flexCenter} ${style.margin2_12}`}>
                        <Button variant="contained" className={`${style.linkText} ${style.button} ${style.noTextTransform}`}>Login</Button>
                        <Button variant="contained" className={`${style.linkText} ${style.button} ${style.noTextTransform} ${style.skyBack}`}>Join us</Button>
                    </span>
                </span>
                <span className={`${style.flexRow} ${style.alignCenter} ${style.marginTop2} ${style.fullWidth} ${style.margin2_12}`}>
                    <Typography className={`${style.textPadding} ${style.flexRow} ${style.flexCenter} ${style.gap10} ${style.borderBottom} ${style.borderColorGreen}`}>
                        Why ecotricity
                        <KeyboardArrowDownIcon className={`${style.skyColor}`}/>
                    </Typography>
                    <Typography className={`${style.textPadding} ${style.flexRow} ${style.flexCenter} ${style.gap10} ${style.borderBottom} ${style.borderColorLightGreen}`}>
                        For home
                        <KeyboardArrowDownIcon className={`${style.skyColor}`}/>
                    </Typography>
                    <Typography className={`${style.textPadding} ${style.flexRow} ${style.flexCenter} ${style.gap10} ${style.borderBottom} ${style.borderColorSky}`}>
                        For business
                        <KeyboardArrowDownIcon className={`${style.skyColor}`}/>
                    </Typography>
                    <Typography className={`${style.textPadding} ${style.flexRow} ${style.flexCenter} ${style.gap10} ${style.borderBottom} ${style.borderColorYellow}`}>
                        Solar
                        <KeyboardArrowDownIcon className={`${style.skyColor}`}/>
                    </Typography>
                    <IconButton className={`${style.textPadding} ${style.searchButton} ${style.marginRight2}`}>
                        <SearchIcon />
                    </IconButton>
                </span>
            </span>
        </div>
    )
}

export default Navbar