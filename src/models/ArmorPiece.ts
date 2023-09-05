import { Assets } from "./Asset";
import { Crafting } from "./Crafting";
import { Defense } from "./Defense";
import { Resistances } from "./Resistance";
import { Skill } from "./Skill";

export interface ArmorPiece {
  id: number;
  type: string;
  rank: string;
  rarity: number;
  attributes: any;
  defense: Defense;
  resistances: Resistances;
  name: string;
  slots: any[];
  skills: Skill[];
  armorSet: number;
  assets: Assets;
  crafting: Crafting;
}
