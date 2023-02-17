import { lazy } from "react";

export const AboutPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      // временно для отображения загрузки
      //@ts-ignore
      setTimeout(() => resolve(import("./AboutPage")), 1500);
    })
);
