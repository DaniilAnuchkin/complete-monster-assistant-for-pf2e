import { Button, Card } from "antd";
import { IMonster } from "../../api/monsters/types";
import "./PFCard.scss";

const PFCard = ({ data }: { data: IMonster }) => {
  return (
    <div className="pf-card">
      <div className="pf-card__image" />
      <Card
        title={data.name}
        variant="borderless"
        className="pf-card__info"
        actions={[
          <Button type="primary" variant="outlined">
            Открыть
          </Button>,
          <Button type="primary" variant="outlined">
            Удалить
          </Button>,
        ]}
      >
        {data.description || "Нет описания"}
      </Card>
    </div>
  );
};

export default PFCard;
