import { PlusOutlined } from "@ant-design/icons";
import "./pfHeader.scss";
import { Button } from "antd";

export default function PFHeader() {
  const onCreate = () => {
    console.log("create");
  };

  return (
    <div>
      <Button
        className="add-btn"
        type="primary"
        shape="circle"
        icon={<PlusOutlined />}
        onClick={onCreate}
      />
    </div>
  );
}
