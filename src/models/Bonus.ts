export interface Bonus {
  id: number;
  name: string;
  ranks: Rank[];
}

export interface Rank {
  pieces: number;
  skill: BonusSkill;
  description: string;
}

export interface BonusSkill {
  id: number;
  level: number;
  modifiers: any;
  skill: number;
  skillName: string;
}
