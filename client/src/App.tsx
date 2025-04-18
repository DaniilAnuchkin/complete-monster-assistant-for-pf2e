import "./App.scss";
import { RouterProvider } from "react-router/dom";
import { px2remTransformer, StyleProvider } from "@ant-design/cssinjs";
import { ConfigProvider } from "antd";
import route from "./routes/routes";

const px2rem = px2remTransformer({
  rootValue: 16,
});

function App() {
  return (
    <>
      <ConfigProvider
        theme={{
          cssVar: true,
          token: {
            colorPrimary: "#6c3db6",
            colorInfo: "#6c3db6",
            colorSuccess: "#3dd68c",
            colorError: "#d64550",
            colorWarning: "#eba91b",
            colorTextBase: "#2c2c2c",
            colorBgBase: "#f5f5f5",
          },
        }}
        button={{ className: "pf-btn" }}
      >
        <StyleProvider transformers={[px2rem]}>
          <RouterProvider router={route} />
        </StyleProvider>
      </ConfigProvider>
    </>
  );
}

export default App;
