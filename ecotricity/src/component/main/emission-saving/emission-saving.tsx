import { Box, Typography } from '@mui/material'
import style from "./style.module.css";
import Image from 'next/image';

const EmissionSavingPage = () => {
    const infoData = [
        {
            count: "41,096,498",
            type: "T/CO2",
            description: "NZ electricity emissions last 12 months (Energylink)"
        },
        {
            count: "81",
            type: "T/CO2",
            description: "Emissions saved by Ecotricity in last 12 months"
        },
        {
            count: "620",
            type: "Kg/CO2",
            description: "Annual carbon emissions you could save by joining Ecotricity"
        },
    ]


    return (
        <Box className={`${style.marginY5} ${style.gridCol2} ${style.gap20}`}>
            <Box className={`${style.relative} ${style.imgBox}`}>
                <Image src={'/emission-saving.png'} alt='/emission-saving.png' fill className={`${style.padding5}`} />
            </Box>
            <Box className={`${style.flexCol} ${style.gap10} ${style.infoBox}`}>
                <Typography className={`${style.boxText1}`}>EMISSION SAVINGS</Typography>
                <Typography className={`${style.boxText4}`}>On a mission to reduce emissions</Typography>
                <Typography className={`${style.boxText0}`}>
                    Electricity generation is one of New Zealand’s main sources of carbon emissions. Ecotricity sources electricity exclusively from 100% renewable, Toitū climate positive certified wind, hydro, and solar generation. Be part of the renewable energy movement and reduce your carbon footprint.
                </Typography>
                <Box className={`${style.gridCol3} ${style.flexCenter} ${style.gap20}`}>
                    {infoData.map((info,index) => (
                        <Box key={index} className={`${style.flexCol}`}>
                            <Typography className={`${style.boldText2} ${style.skyColor}`}>{info.count}</Typography>
                            <Typography className={`${style.boxText1}`}>{info.type}</Typography>
                            <Typography className={`${style.boxText0}`}>{info.description}</Typography>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    )
}

export default EmissionSavingPage