"use client";
import style from "./style.module.css";
import { Box } from "@mui/material";
import RightPanel from "../../panel/right-panel/right-panel";
import { RootState } from "../../../redux/store";
import { useSelector } from "react-redux";

export default function BodyRightLayout({ children, bookMarks }: { children: React.ReactNode, bookMarks: string[] }) {
    const { isDarkMode } = useSelector((state: RootState) => state.states);

    return (
        <>
            <Box className={`${style.flexRow} ${isDarkMode ? style.darkMode : style.lightMode}`}>
                <Box className={style.body}>
                    {children}
                </Box>
                <Box className={style.rightPanel}>
                    <RightPanel bookMarks={bookMarks} />
                </Box>
            </Box>
        </>
    );
}
