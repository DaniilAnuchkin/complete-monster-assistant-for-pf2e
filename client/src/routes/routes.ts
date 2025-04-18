import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import MonsterLib from "../pages/monsterLib/MonsterLib";

const route = createBrowserRouter([
  {
    Component: Root,
    children: [
      {
        path: "/",
        Component: MonsterLib,
      },
    ],
  },
]);

export default route;
