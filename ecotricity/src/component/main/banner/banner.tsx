import { Box, Button, Typography } from "@mui/material";
import style from "./style.module.css";
import BoxItem from "../../box/box";

const BannerPage = () => {
    const bannerData = [
        {
            imagePath: "/recycle.svg",
            heading: "100% Renewables",
            text: "Purchased from wind, hydro and solar only. Matched to your consumption on an annualised basis."
        },
        {
            imagePath: "/climate.svg",
            heading: "Climate Positive",
            text: "Aligned to strict international standards (ISO14067 and ISO14064-1) to meet Toitū climate positive certification requirements."
        },
        {
            imagePath: "/done.svg",
            heading: "Time Of Use Pricing",
            text: "Time of use price plans to help you move energy consumption to off-peak periods. Good for the planet and your wallet!"
        },
        {
            imagePath: "/solar.svg",
            heading: "21c Solar Buy Back",
            text: "Make the most of your solar system with 21c buy back rate on the ecoSOLAR plan."
        },
    ]
    return (
        <div className={`${style.flexCol} ${style.gap20} ${style.bgImg}`}>
            <Box className={`${style.box} ${style.flexCol} ${style.gap10}`}>
                <Typography className={`${style.boxText1}`}>
                    CLIMATE POSITIVE
                </Typography>
                <Typography className={`${style.boxText2}`}>
                    Toitū climate positive power
                </Typography>
                <Typography className={`${style.boxText3}`}>
                    Ecotricity - NZ's first and only Toitū climate positive certified product.
                    <br />
                    ISO 14067 Product annualised and ISO 14064-1 Organisation certified.
                </Typography>
                <Box className={`${style.flexRow} ${style.gap20}`}>
                    <Button className={`${style.skyBack} ${style.button} ${style.boxText1} ${style.noTextTransform} ${style.borderRadius}`}>Learn More</Button>
                    <Button className={`${style.skyBack} ${style.button} ${style.boxText1} ${style.noTextTransform} ${style.borderRadius}`}>Get a price</Button>
                </Box>
            </Box>
            <Box className={`${style.relative} ${style.fullWidth} ${style.benefitBox} ${style.flexCol} ${style.alignCenter} `}>
                <Typography className={`${style.boxText1}`}>BENEFITS</Typography>
                <Typography className={`${style.boxText4}`}>The Ecotricity Difference</Typography>
                <Box className={`${style.flexRow} ${style.flexCenter} ${style.gap20} ${style.marginTop5} ${style.relative}`}>
                    {bannerData.map((each, index) => (
                        <BoxItem imagePath={each.imagePath}
                            heading={each.heading}
                            text={each.text}
                            key={index}
                        />
                    ))}
                </Box>
                <Button variant="contained" className={`${style.marginTop2} ${style.skyBack}`}>Learn More</Button>
            </Box>
        </div>
    )
}

export default BannerPage;