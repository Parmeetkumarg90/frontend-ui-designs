"use client"
import { Box, Button, IconButton, Typography } from "@mui/material";
import style from "./style.module.css";
import Image from "next/image";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useEffect, useState } from "react";

const ProductCarousal = () => {
    const slideContent = [
        {
            topic: "RESIFLEX PROJECT",
            title: "60 c/kWh for peak export!",
            description: "If you're in the Orion network, have solar + battery, and are connected to Ecotricity's VPP programme, you could be earning more from your excess energy - get paid 60c/kWh for peak export!",
            imagePath: "/cantury-offer.png"
        },
        {
            topic: "",
            title: "21c Solar Buy Back Rate!",
            description: `Get 21c per kWh for peak export all year round with Ecotricity's ecoSOLAR plan. Available to customers who have a solar system installed.`,
            imagePath: "/solar-buypack.png"
        }
    ]
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const handleChangeIndex = (changeByValue: number) => {
        if (currentIndex === 0 && changeByValue === -1) {
            setCurrentIndex(slideContent.length - 1);
        }
        else if (currentIndex === slideContent.length - 1 && changeByValue === 1) {
            setCurrentIndex(0);
        }
        else {
            setCurrentIndex(currentIndex + changeByValue);
        }
    }

    return (
        <div className={`${style.marginTop5} ${style.flexCol} ${style.flexCenter}`}>
            <Typography className={`${style.boxText1}`}>ECOTRICITY NEWS</Typography>
            <Typography className={`${style.boxText4}`}>The Latest...</Typography>
            <Box className={`${style.flexRow} ${style.flexCenter}`}>
                <IconButton onClick={() => { handleChangeIndex(-1); }}>
                    <ArrowBackIosNewIcon className={`${style.arrowIcon}`} />
                </IconButton>
                {slideContent.length > 0 &&
                    <Box className={`${style.relative} ${style.box}`}>
                        <Image src={slideContent[currentIndex].imagePath} fill alt={slideContent[currentIndex].imagePath} className={`${style.bgImg}`} />
                        <Box className={`${style.flexCol} ${style.gap20} ${style.innerBox}`}>
                            <span>
                                <Typography className={`${style.boxText1}`}>{slideContent[currentIndex].topic}</Typography>
                                <Typography className={`${style.boxText4}`}>{slideContent[currentIndex].title}</Typography>
                            </span>
                            <Typography className={`${style.boxText0}`}>{slideContent[currentIndex].description}</Typography>
                            <Button variant="contained" className={`${style.noTextTransform} ${style.button} ${style.skyBack}`}>Learn More</Button>
                        </Box>
                    </Box>
                }
                <IconButton onClick={() => { handleChangeIndex(1); }}>
                    <ArrowForwardIosIcon className={`${style.arrowIcon}`} />
                </IconButton>
            </Box>
        </div>
    )
}

export default ProductCarousal;