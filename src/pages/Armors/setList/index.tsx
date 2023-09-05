import { ArmorSet } from "../../../models/ArmorSet";
import {
  Box,
  ButtonGroup,
  Icon,
  Row,
  TRow,
  Table,
  Title,
  Wrapper,
} from "./styles";
import Helmet from "../../../assets/icon_helmet.svg";
import Chestplate from "../../../assets/icon_chestplate.svg";
import Armguard from "../../../assets/icon_armguard.svg";
import Waist from "../../../assets/icon_waist.svg";
import Leggings from "../../../assets/icon_leggings.svg";
import Pagination from "../../../components/Pagination";
import { ArmorPiece } from "../../../models/ArmorPiece";
import { Bonus } from "../../../models/Bonus";

interface ArmorListProps {
  armorList: ArmorSet[];
  listLength: number;
  rank: "low" | "high" | "master";
  changeRank: (rankData: "low" | "high" | "master") => void;
  changePage: (pageToGo: number) => void;
  changeArmor: (armor: ArmorPiece, bonus: Bonus) => void;
  // children: React.ReactNode;
}

const ArmorList = ({
  armorList,
  listLength,
  rank,
  changeRank,
  changePage,
  changeArmor,
}: ArmorListProps) => {
  return (
    <Wrapper>
      <Box>
        <Row>
          <article>
            <h3 className="title">Armor Sets</h3>
          </article>
        </Row>
        <Row>
          <ButtonGroup>
            <button
              className={`low-rank ${rank == "low" && `selected`}`}
              onClick={() => {
                changeRank("low");
              }}
            >
              Low Rank
            </button>
            <button
              className={`high-rank ${rank == "high" && `selected`}`}
              onClick={() => {
                changeRank("high");
              }}
            >
              High Rank
            </button>
            <button
              className={`master-rank ${rank == "master" && `selected`}`}
              onClick={() => {
                changeRank("master");
              }}
            >
              Master Rank
            </button>
          </ButtonGroup>
        </Row>
        <Row>
          <Title>
            <p>Sets</p>
            <p>Parts</p>
          </Title>
        </Row>
        <Table>
          {armorList.length > 0 &&
            armorList?.map((UNArmor) => (
              <TRow key={UNArmor.id}>
                <p>{UNArmor.name}</p>
                <div>
                  {UNArmor.pieces.map((piece) => (
                    <Icon
                      key={piece.id + "-piece"}
                      onClick={() => {
                        changeArmor(piece, UNArmor.bonus);
                      }}
                    >
                      <img
                        src={
                          piece.type == "head"
                            ? Helmet
                            : piece.type == "chest"
                            ? Chestplate
                            : piece.type == "gloves"
                            ? Armguard
                            : piece.type == "waist"
                            ? Waist
                            : Leggings
                        }
                        alt={piece.type}
                      />
                    </Icon>
                  ))}
                </div>
              </TRow>
            ))}
        </Table>
      </Box>
      {!!listLength && (
        <Pagination length={listLength} changePage={changePage} />
      )}
    </Wrapper>
  );
};

export default ArmorList;
