import { Box, Typography } from "@mui/material";
import style from "./style.module.css";
import Image from "next/image";

const WorkingStructure = () => {
    return (
        <Box className={style.structureBox}>
            <Box className={style.workingBox}>
                <Typography className={style.blurryText}>Webflow Fulfillment using Amazon’s logistics network</Typography>
                <Typography className={style.bigText}>How Amazon Multi-Channel Fulfillment works</Typography>
                <Typography className={`${style.descriptionText}`}>
                    The Amazon Multi‑Channel Fulfillment app for Webflow ecommerce links your store to Amazon’s nationwide fulfillment centers, securely storing your inventory and ensuring orders are picked, packed, and shipped quickly. With multiple delivery speeds, white‑label packaging, and automated ecommerce fulfillment, you can streamline operations and grow your Webflow business efficiently.
                </Typography>
            </Box>
            <Box className={style.imageBox}>
                <Image src={"working-structure.svg"} fill alt="working structure image" className={style.image}/>
            </Box>
        </Box>
    )
}

export default WorkingStructure;