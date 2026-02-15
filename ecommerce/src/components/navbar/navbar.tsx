"use client"
import { Box, Button, Typography } from "@mui/material"
import style from "./style.module.css";
import Image from "next/image";

const Navbar = () => {
    const handleRemoveActiveClass = (e: React.MouseEvent<HTMLElement>) => {
        e.currentTarget.classList.remove(style.active);
    }

    const handleAddActiveClass = (e: React.MouseEvent<HTMLElement>) => {
        e.currentTarget.classList.add(style.active);
    }

    return (
        <Box className={style.navbarBox}>
            <Box className={style.navbarLogo}>
                <Image src={"/logo.svg"} fill alt="Website logo" className={style.logoImg} />
                <div className={style.rightBorder}></div>
                <Typography>Never Settle</Typography>
            </Box>
            <Box className={style.navLinkBox}>
                <Typography className={`${style.navLinkText} ${style.active}`}
                    onMouseEnter={handleRemoveActiveClass} onMouseLeave={handleAddActiveClass}
                >
                    Features
                </Typography>
                <Typography className={`${style.navLinkText} ${style.active}`}
                    onMouseEnter={handleRemoveActiveClass} onMouseLeave={handleAddActiveClass}
                >
                    Pricing
                </Typography>
                <Typography className={`${style.navLinkText} ${style.active}`}
                    onMouseEnter={handleRemoveActiveClass} onMouseLeave={handleAddActiveClass}
                >
                    Explainer
                </Typography>
                <Typography className={`${style.navLinkText} ${style.active}`}
                    onMouseEnter={handleRemoveActiveClass} onMouseLeave={handleAddActiveClass}
                >
                    Compare
                </Typography>
                <Box className={`${style.navbarLinkLogo} ${style.active}`}
                    onMouseEnter={handleRemoveActiveClass} onMouseLeave={handleAddActiveClass}
                >

                    <Image src={"/woo--small-logo.svg"} fill alt="Webflow logo" className={style.linkLogo} />
                    <Typography className={`${style.navLinkText}`}>
                        Webflow
                    </Typography>
                </Box>
                <Box className={`${style.navbarLinkLogo} ${style.active}`}
                    onMouseEnter={handleRemoveActiveClass} onMouseLeave={handleAddActiveClass}
                >
                    <Image src={"/woo-text-logo.svg"} fill alt="WooCommerce logo" className={style.linkLogo} />
                    <Typography className={`${style.navLinkText}`}>
                        WooCommerce
                    </Typography>
                </Box>
            </Box>
            <Box className={style.navbarButtonBox}>
                <Typography className={`${style.navbarButtonTextBox}`}>Login</Typography>
                <Button className={style.button}>Get Started</Button>
            </Box>
        </Box>
    )
}

export default Navbar