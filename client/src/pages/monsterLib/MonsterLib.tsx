import "./monsterLib.scss";
import { getMonsterList } from "../../api/monsters";
import PaginatedList from "../../components/paginatedList/PaginatedList";
import PFCard from "../../components/pfCard/PFCard";

function MonsterLib() {
  return (
    <PaginatedList
      dataFetch={getMonsterList}
      dataSlot={(item) => <PFCard key={item._id} data={item} />}
    />
  );
}

export default MonsterLib;
