"use client"
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import style from "./style.module.css";
import { Box, Button, IconButton, Typography } from "@mui/material";
import { IoToggle } from "react-icons/io5";
import { LuSparkles } from "react-icons/lu";
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

export default function Home() {
  return (
    <div className={`${style.flexCol} ${style.flexCenter}`}>
      <div className={style.shadow}></div>
      <nav className={`${style.nav} ${style.flexRow} ${style.flexCenter} ${style.gap20}`}>
        <span className={`${style.grid1_auto_1} ${style.navBorder} ${style.gap20}`}>
          <a href="" className={`${style.linkText}`}>
            <span className={`${style.flexRow} ${style.flexCenter} ${style.gap10}`}>
              <img src="/images.jpeg" alt="/images.jpeg" className={`${style.logo} ${style.filterGreyScale}`} />
              <Typography className={`${style.navHeaderText} ${style.figTreeFont}`}>upstream</Typography>
            </span>
          </a>
          <span className={`${style.flexRow} ${style.flexCenter} ${style.gap20}`}>
            <Typography className={`${style.linkText} ${style.navText} ${style.figTreeFont}`}>Features</Typography>
            <Typography className={`${style.linkText} ${style.navText} ${style.figTreeFont}`}>Pricing</Typography>
            <Typography className={`${style.linkText} ${style.navText} ${style.figTreeFont}`}>Reviews</Typography>
            <Typography className={`${style.linkText} ${style.navText} ${style.figTreeFont}`}>FAQ</Typography>
            <Typography className={`${style.linkText} ${style.navText} ${style.figTreeFont}`}>Blog</Typography>
            <Typography className={`${style.linkText} ${style.navText} ${style.figTreeFont}`}>Login</Typography>
          </span>
          <Button className={`${style.whiteButton} ${style.noTextTransform}`}>Get Started</Button>
        </span>
        <IconButton>
          <IoToggle />
        </IconButton>
      </nav>
      <div className={`${style.flexCol} ${style.flexCenter} ${style.gap20}`}>
        <span className={`${style.flexRow} ${style.flexCenter} ${style.gap10} ${style.lucideStar}`}>
          <LuSparkles />
          <p>Multistream to 10 platforms for free</p>
        </span>
        <span className={`${style.relative} ${style.flexCol} ${style.flexCenter} ${style.shine}`}>
          <img src="/highlight.svg" alt="/highlight.svg" className={`${style.absolute} ${style.highlightImage}`} />
          <Typography className={`${style.bigText} ${style.wordSpacing} ${style.frameMovement}`}>24/7 YouTube Live Stream</Typography>
          <Typography className={`${style.bigText} ${style.wordSpacing} ${style.frameMovement}`}>Pre-Recorded Videos</Typography>
        </span>
        <span className={`${style.flexCol} ${style.flexCenter}`}>
          <Typography className={`${style.whiteText}`}>Take your YouTube channel to the next level with Upstream.</Typography>
          <Typography className={`${style.whiteText}`}>The easiest way to build & maintain a 24 hour live stream using pre-</Typography>
          <Typography className={`${style.whiteText}`}>recorded videos.</Typography>
        </span>
        <span className={`${style.flexCol} ${style.flexCenter} ${style.gap10}`}>
          <Button className={`${style.blueButton} ${style.mediumText} ${style.noTextTransform}`}>Sign Up For Free</Button>
          <Typography className={`${style.navText}`}>No credit card required</Typography>
        </span>
        <span className={`${style.flexCol} ${style.flexCenter} ${style.relative} ${style.marginY2}`}>
          <img src="/left-leaf.png" alt="/left-leaf.png" className={`${style.absolute} ${style.filterImage} ${style.verifyLogo} ${style.leftLeaf}`} />
          <span className={`${style.flexCol} ${style.flexCenter}`}>
            <Typography>Verified by</Typography>
            <span className={`${style.flexRow} ${style.flexCenter} ${style.gap10}`}>
              <img src="/youtube.png" alt="/youtube.png" className={`${style.logo}`} />
              <Typography>Youtube</Typography>
            </span>
          </span>
          <img src="/right-leaf.png" alt="/right-leaf.png" className={`${style.absolute} ${style.filterImage} ${style.verifyLogo} ${style.rightLeaf}`} />
        </span>
      </div>
      <div className={`${style.relative} ${style.marginY2} ${style.flexCol} ${style.flexCenter}`}>
        <video src="/intro.webm" className={`${style.fullWidth} ${style.borderRadius}`} autoPlay muted loop />
        <img className={`${style.absolute} ${style.circleImg}`} src="/circle.svg" alt="/circle.svg" />
        <img className={`${style.absolute} ${style.starImg}`} src="/star.svg" alt="/star.svg" />
        <img className={`${style.absolute} ${style.arrowImg}`} src="/arrow.svg" alt="/arrow.svg" />
        <Button className={`${style.watchNowButton} ${style.flexRow} ${style.absolute} ${style.gap20} ${style.noTextTransform}`}>
          <PlayCircleIcon className={`${style.playIcon}`} />
          <span className={`${style.flexCol} ${style.leftAlignText}`}>
            <Typography>Watch Now</Typography>
            <Typography>Upstream in 60 seconds</Typography>
          </span>
        </Button>
      </div>
      <div className={`${style.flexRow} ${style.flexCenter} ${style.marginY2}`}>
        <Typography className={`${style.bigText} ${style.marginX2} ${style.halfWidth}`}>
          Get More Exposure With a 24/7 YouTube Live Stream
        </Typography>
        <Typography className={`${style.font2em} ${style.wordSpacing} ${style.marginX2} ${style.halfWidth}`}>
          Get on top of the search since live videos have priority over regular ones, making it easier for you to get
          <span className={`${style.purpleUnderline}`}> more views, followers & profit.</span>
        </Typography>
      </div>
      <div className={`${style.flexCol} ${style.flexCenter} ${style.marginY2} ${style.card}`}>
        <Typography className={`${style.font3em} ${style.noMarginPadding}`}>How long videos</Typography>
        <Typography className={`${style.font3em} ${style.noMarginPadding}`}>compare to regular videos</Typography>
        <Typography>Don't take our word for it, let the numbers speak for themselves.</Typography>
        <Typography className={`${style.greyText}`}>Note: data based on a channel with roughly 2,500 subscribers.</Typography>
        <span className={`${style.col3Grid} ${style.spaceEvenly} ${style.marginY2} ${style.gap10}`}>
          <span className={`${style.flexCol} ${style.flexCenter} ${style.gap20}`}>
            1
          </span>
          <span className={` ${style.flexCol} ${style.flexCenter}`}>
            <Box className={`${style.relative}`}
              sx={{
                height: 100,
                width: 100
              }}>
              <div className={style.overlay} />
              <img src="/stars-grape.svg"
                alt="/stars-grape.png"
                width={200}
                height={200}
                className={` ${style.absolute}`} />
            </Box>
            <Typography>In profit</Typography>
            <Typography>$500</Typography>
            <Typography className={`${style.greenText} ${style.flexRow} ${style.flexCenter}`}>
              <KeyboardDoubleArrowUpIcon sx={{
                color: "#06c58b"
              }} /> 649% increase
            </Typography>
          </span>
          <span className={`${style.flexCol} ${style.flexCenter} ${style.gap20}`}>
            3
          </span>
        </span>
      </div>
    </div>
  );
}
