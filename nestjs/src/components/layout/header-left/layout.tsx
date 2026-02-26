"use client";
import { Box } from "@mui/material";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persister, store } from "../../../redux/store";
import Header from "../../header/header";
import LeftPanel from "../../panel/left-panel/left-panel";
import style from "./page.module.css";

export default function HeaderLeftLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persister}>
        <Header />
        <Box className={style.flexRow}>
          <LeftPanel />
          <Box className={style.fullWidth}>{children}</Box>
        </Box>
      </PersistGate>
    </Provider>
  );
}
