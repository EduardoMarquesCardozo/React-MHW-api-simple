export interface Crafting {
  materials: Material[];
}

export interface Material {
  quantity: number;
  item: Item;
}

export interface Item {
  id: number;
  rarity: number;
  carryLimit: number;
  value: number;
  name: string;
  description: string;
}
