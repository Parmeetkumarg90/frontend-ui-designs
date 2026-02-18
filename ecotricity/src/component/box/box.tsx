import { Box, Typography } from "@mui/material";
import style from "./style.module.css";
import Image from "next/image";

const BoxItem = ({ imagePath, heading, text }: { imagePath: string, heading: string, text: string }) => {
    return (
        <Box className={`${style.box} ${style.relative} ${style.flexCol} ${style.paddingTop3} ${style.gap20}`}>
            <Box className={style.imageWrapper}>
                <Image src={imagePath} alt={imagePath} width={50} height={50} className={`${style.yellowBack}`} />
            </Box>
            <Typography className={`${style.boxText3}`}>{heading}</Typography>
            <Typography className={`${style.linkText}`}>{text}​</Typography>
        </Box>
    )
}

export default BoxItem