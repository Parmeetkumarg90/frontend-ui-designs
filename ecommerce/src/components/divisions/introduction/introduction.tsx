import { Box, Button, Typography } from "@mui/material";
import style from "./style.module.css";
import Image from "next/image";

const Introduction = () => {
    return (
        <Box className={style.introductionBox}>
            <Box>
                <Box className={style.backgroundImageBox}>
                    <Image src="/background_image_1.svg" fill alt="background-image" className={style.backgroundImage}/>
                </Box>
            </Box>
            <Box className={style.infoBox}>
                <Typography className={style.blurryBoldText}>Amazon Multi-Channel Fulfillment for Webflow Ecommerce</Typography>
                <Typography className={style.bigText}>Frictionless Ecommerce Fulfillment for Webflow</Typography>
                <Typography className={style.descriptiveText}>
                    Accelerate your growth by connecting your Webflow storefront to the world’s leading Amazon product fulfillment network. By using Amazon Multi‑Channel Fulfillment (MCF) for ecommerce fulfillment, you get fast, reliable 3‑day delivery and white‑label packaging, all within a seamless, end‑to‑end solution.
                </Typography>
                <Box className={style.buttonBox}>
                    <Button className={`${style.button} ${style.j}`}>Fulfill at scale</Button>
                    <Button className={`${style.button} ${style.blueButton}`}>How it workds</Button>
                </Box>
            </Box>
            <Box className={style.movingShadow}></Box>
        </Box>
    )
}

export default Introduction;