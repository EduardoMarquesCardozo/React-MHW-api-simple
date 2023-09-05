import { ArmorPiece } from "../../../models/ArmorPiece";
import {
  ArmorName,
  Box,
  MaterialsTable,
  Row,
  Scroll,
  TRow,
  Title,
  Wrapper,
} from "./styles";

import Placeholder from "../../../assets/icon_armor_placeholder.svg";

interface ArmorProps {
  armorPiece: ArmorPiece;
}

const Armor = ({ armorPiece }: ArmorProps) => {
  return (
    <Wrapper>
      <Box>
        <Row>
          <ArmorName>{armorPiece.name}</ArmorName>
        </Row>
        <Row>
          <img
            src={
              armorPiece.assets?.imageMale
                ? armorPiece.assets?.imageMale
                : Placeholder
            }
            alt="armor image"
          />
        </Row>
        <Row>
          <MaterialsTable>
            <Title>
              <h4 className="title"> Required Materials</h4>
            </Title>
            {armorPiece.crafting.materials.length != 0 ? (
              <Scroll>
                {armorPiece.crafting.materials.map((material) => (
                  <TRow key={material.item.id}>
                    <p>{material.item.name}</p>
                    <hr />
                    <p>x {material.quantity}</p>
                  </TRow>
                ))}
              </Scroll>
            ) : (
              <h1>No Data</h1>
            )}
          </MaterialsTable>
        </Row>
      </Box>
    </Wrapper>
  );
};

export default Armor;
