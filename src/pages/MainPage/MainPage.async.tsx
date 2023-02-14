import { lazy } from "react";

export const MainPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      // временно для отображения загрузки
      //@ts-ignore
      setTimeout(() => resolve(import("./MainPage")), 1500);
    })
);
