import { Box, Typography } from "@mui/material";
import style from "./style.module.css";
import Image from "next/image";

const LogisticNetwork = () => {
    return (
        <Box className={style.logisticBox}>
            <Box className={style.mcfBox}>
                <Box className={style.innerContainer}>
                    <Typography className={style.blurryText}>Webflow Ecommerce Fulfillment using Amazon’s logistics network</Typography>
                    <Typography className={style.bigText}>What is Amazon Multi-Channel Fulfillment (MCF)?</Typography>
                </Box>
                <Typography className={`${style.descriptionText} ${style.innerContainer}`}>
                    Amazon Multi-Channel Fulfillment (MCF) integrates directly with your Webflow ecommerce storefront, storing your inventory in Amazon’s nationwide network of warehouses. When an order is placed, Amazon automatically picks, packs, and ships it for you, handling the entire ecommerce order fulfillment process. With flexible delivery options and brand‑neutral packaging, MCF simplifies ecommerce product fulfillment, speeds up delivery, and helps you scale without extra effort.
                </Typography>
            </Box>
            <Box className={style.serviceBox}>
                <Box className={style.serviceRow1}>
                    <Box className={style.bigServiceContainerDesign}>
                        <Typography className={style.bigText}>Sell</Typography>
                        <Typography className={style.blurryText}>
                            Your Webflow storefront continues to function as it always has, no changes to the checkout flow or customer experience. Orders placed through your store are fulfilled behind the scenes by Amazon’s logistics experts, giving you dependable shipping without managing warehousing or handling logistics yourself. Your brand remains front and center while Amazon handles the rest.
                        </Typography>
                        <Box className={style.rightSideImageBox}>
                            <Image src="/parcel.svg" fill alt="parcel-image" className={style.rightSideImage} />
                        </Box>
                    </Box>
                    <Box className={style.smallServiceContainerDesign}>
                        <Typography className={style.bigText}>Store</Typography>
                        <Typography className={style.blurryText}>
                            Amazon Multi-Channel Fulfillment for Webflow ecommerce securely stores your inventory in a nationwide network of fulfillment centers. You get faster delivery to customers, lower storage overhead, and seamless order fulfillment, no warehouse management required.
                        </Typography>
                        <Box className={style.relative}>
                            <Image src="/factory.svg" fill alt="store-image" className={style.bottomSideImage} />
                        </Box>
                    </Box>
                </Box>
                <Box className={style.serviceRow2}>
                    <Box className={style.smallServiceContainerDesign}>
                        <Typography className={style.bigText}>Supply</Typography>
                        <Typography className={style.blurryText}>
                            Your suppliers send inventory directly to Amazon’s fulfillment centers, removing the need for you to manage storage or shipping. This simplifies your supply chain, lowers overhead, and ensures your products are always ready for fast, reliable delivery..
                        </Typography>
                        <Box className={style.relative}>
                            <Image src="/courier.svg" fill alt="delivery-image" className={style.bottomSideImage} />
                        </Box>
                    </Box>
                    <Box className={style.bigServiceContainerDesign}>
                        <Typography className={style.bigText}>Send</Typography>
                        <Typography className={style.blurryText}>
                            Amazon handles shipping your Webflow storefront orders with fast, reliable delivery options. With MCF, you can choose between two click-to-door speeds: Standard (3 business days) and Expedited (2 business days). No matter which you choose, your customers get quick, dependable delivery, powered by Amazon’s trusted network.
                        </Typography>
                        <Box className={style.rightSideImageBox}>
                            <Image src="/truck.svg" fill alt="sending-truck-image" className={style.rightSideImage} />
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box className={style.movingShadow}></Box>
        </Box>
    )
}

export default LogisticNetwork;