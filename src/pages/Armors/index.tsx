import { useEffect, useState } from "react";
import { listArmorSets } from "../../services/armorSets";
import { Wrapper } from "./styles";
import { ArmorSet } from "../../models/ArmorSet";
import ArmorList from "./setList";
import { pageSize } from "../../utils/constants";
import { ArmorPiece } from "../../models/ArmorPiece";
import Armor from "./armor";
import ArmorInfo from "./armorInfo";
import { Bonus } from "../../models/Bonus";

const Armors = () => {
  const [rank, setRank] = useState<"low" | "high" | "master">("low");
  const [armorSets, setArmorSets] = useState<ArmorSet[]>([]);
  const [armorSetPages, setArmorSetPages] = useState<ArmorSet[]>([]);
  const [selectedArmor, setSelectedArmor] = useState<ArmorPiece>();
  const [selectedBonus, setSelectedBonus] = useState<Bonus>();

  useEffect(() => {
    changeRank(rank);
  }, []);

  const changePage = (pageToGo: number) => {
    setArmorSetPages(
      armorSets.slice(pageToGo * pageSize - pageSize, pageToGo * pageSize)
    );
  };

  const changeArmorPiece = (armor: ArmorPiece, bonus: Bonus) => {
    setSelectedArmor(armor);
    setSelectedBonus(bonus);
  };

  const changeRank = (rankData: "low" | "high" | "master") => {
    setRank(rankData);
    listArmorSets(rankData)
      .then((listData) => {
        setArmorSetPages(listData.slice(0, pageSize));
        setArmorSets(listData);
      })
      .finally();
  };

  return (
    <Wrapper>
      <ArmorList
        armorList={armorSetPages}
        listLength={armorSets.length}
        rank={rank}
        changeArmor={changeArmorPiece}
        changeRank={changeRank}
        changePage={changePage}
      ></ArmorList>
      {!!selectedArmor && (
        <>
          <Armor armorPiece={selectedArmor}></Armor>
          <ArmorInfo
            armorPiece={selectedArmor}
            bonus={selectedBonus}
          ></ArmorInfo>
        </>
      )}
    </Wrapper>
  );
};

export default Armors;
