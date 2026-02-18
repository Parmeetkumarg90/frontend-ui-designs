import { Box, Typography } from "@mui/material";
import style from "./style.module.css";

const EcotricityPlans = () => {
    return (
        <Box className={`${style.grid2UneqCol} ${style.flexCenter} ${style.gap20} ${style.marginY5}`}>
            <Box className={`${style.gap20}`}>
                <Typography className={`${style.boxText1}`}>JOIN ECOTRICITY</Typography>
                <Typography className={`${style.boxText4}`}>Keen to go green?</Typography>
                <Typography>Make the switch to NZ's only Toitū climate positive certified electricity. The process is simple, with support available every step of the way. For any questions, contact the customer support team.</Typography>
            </Box>
            <Box>right panel</Box>
        </Box>
    )
}

export default EcotricityPlans