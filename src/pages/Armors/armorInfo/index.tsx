import { ArmorPiece } from "../../../models/ArmorPiece";
import {
  Box,
  Wrapper,
  ArmorData,
  Table,
  TRow,
  Skills,
  SkillsData,
  SkillTitle,
  SkillInfo,
} from "./styles";

import SquareFill from "../../../assets/interface/square_fill.png";
import { Bonus } from "../../../models/Bonus";

interface ArmorProps {
  armorPiece: ArmorPiece;
  bonus?: Bonus;
}

const ArmorInfo = ({ armorPiece, bonus }: ArmorProps) => {
  const filledSquares = (squareQtd: number) => {
    const stars = [];
    for (let i = 1; i <= squareQtd; i++) {
      stars.push(<img key={i + "-img"} src={SquareFill} alt="Filled" />);
    }
    return stars;
  };

  return (
    <Wrapper>
      <Box>
        <ArmorData>
          <h3>Equipment info</h3>
          <h4>{armorPiece.name}</h4>
          <Table>
            <TRow>
              <p>Level 1</p>
              <p>Rarity {armorPiece.rarity}</p>
            </TRow>
            <TRow>
              <p>Defense</p>
              <p>{armorPiece.defense.base}</p>
            </TRow>
            <TRow>
              <p>Vs. Fire</p>
              <p>{armorPiece.resistances.fire}</p>
            </TRow>
            <TRow>
              <p>Vs. Water</p>
              <p>{armorPiece.resistances.water}</p>
            </TRow>
            <TRow>
              <p>Vs. Thunder</p>
              <p>{armorPiece.resistances.thunder}</p>
            </TRow>
            <TRow>
              <p>Vs. Ice</p>
              <p>{armorPiece.resistances.ice}</p>
            </TRow>
            <TRow>
              <p>Vs. Dragon</p>
              <p>{armorPiece.resistances.dragon}</p>
            </TRow>
          </Table>
        </ArmorData>
        <SkillsData>
          {/* {armorPiece.skills.length != 0 && } */}
          {armorPiece.skills.length != 0 && (
            <>
              <h4 className="title">Skills</h4>
              <Skills>
                {armorPiece.skills.map((skill) => (
                  <SkillTitle key={skill.id + "-skill"}>
                    <h5 className="title">{skill.skillName}</h5>
                    <div>
                      <div>{filledSquares(skill.level)}</div>
                      <p>Level {skill.level}</p>
                    </div>
                  </SkillTitle>
                ))}
              </Skills>
            </>
          )}
          {bonus && bonus.ranks.length != 0 && (
            <>
              <h4 className="title">Set Bonus Skills</h4>
              <Skills>
                <SkillTitle>
                  <h5 className="title">{bonus.name}</h5>
                </SkillTitle>
                <SkillInfo>
                  {bonus.ranks.map((rank) => (
                    <p>
                      <span>{rank.pieces}</span> {"►"} {rank.skill.skillName}
                    </p>
                  ))}
                </SkillInfo>
              </Skills>
            </>
          )}
        </SkillsData>
      </Box>
    </Wrapper>
  );
};

export default ArmorInfo;
