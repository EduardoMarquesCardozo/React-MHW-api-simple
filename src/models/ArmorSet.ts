import { ArmorPiece } from "./ArmorPiece";
import { Bonus } from "./Bonus";

export interface ArmorSet {
  id: number;
  rank: string;
  name: string;
  pieces: ArmorPiece[];
  bonus: Bonus;
}
