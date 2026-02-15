import { Box } from '@mui/material';
import style from "./style.module.css";
import Navbar from '../components/navbar/navbar';
import Introduction from '../components/divisions/introduction/introduction';
import VideoIntroduction from '../components/divisions/video-representation/video-intro';
import LogisticNetwork from '../components/divisions/logistic-network/logistic-network';
import WorkingStructure from '../components/divisions/working-structure/working-structure';

const HomePage = () => {
  return (
    <Box className={style.mainBox}>
      <Navbar />
      <Introduction />
      <VideoIntroduction />
      <LogisticNetwork />
      <WorkingStructure />
    </Box>
  )
}

export default HomePage