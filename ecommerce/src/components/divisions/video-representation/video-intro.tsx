"use client";
import { Box, IconButton } from "@mui/material"
import { useRef, useState } from "react";
import style from "./style.module.css";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Image from "next/image";

const VideoIntroduction = () => {
    const [isControlActive, setControlActivation] = useState<boolean>(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    const handleActivateVideoPlay = () => {
        setControlActivation(true);
        videoRef.current?.play();
    }

    return (
        <Box className={style.videoBox}>
            <Box className={style.video}>
                <video ref={videoRef} poster="/video_thumbnail.jpg" autoPlay={isControlActive} controls={isControlActive} className={style.videoWidth}>
                    <source src="/video_playback.mp4" type="video/mp4" />
                    Video is not available
                </video>
                {!isControlActive && <IconButton onClick={handleActivateVideoPlay} className={style.playButton}>
                    <PlayArrowIcon className={style.playIcon} />
                </IconButton>}
            </Box>
            <Box className={style.imageContainer}>
                <Box className={style.imageBox}>
                    <Image src={"logo.svg"} fill alt="website-logo" className={style.relative} />
                </Box>
                <div className={style.rightBorder}></div>
                <Box className={style.imageBox}>
                    <Image src={"logo_name.svg"} fill alt="webflow_logo" className={style.relative} />
                </Box>
            </Box>
            <Box className={style.movingShadow}></Box>
        </Box>
    )
}

export default VideoIntroduction