import type { BooleanTag, IntTag, StringTag } from "nbtify";

export interface Scoreboard {
  data: ScoreboardData;
}

export interface ScoreboardData {
  Objectives: Objective[];
  PlayerScores: PlayerScore[];
  Teams: Team[];
  DisplaySlots: DisplaySlots;
}

export interface Objective {
  CriteriaName: StringTag;
  DisplayName: StringTag;
  Name: StringTag;
  RenderType: StringTag<ObjectiveRenderType>;
  display_auto_update: BooleanTag;
  format?: ScoreboardFormat;
}

export type ObjectiveRenderType = "integer" | "hearts";

export interface PlayerScore {
  Score: IntTag;
  Name: StringTag;
  Objective: StringTag;
  Locked: BooleanTag;
  display?: StringTag;
  format?: ScoreboardFormat;
}

export interface Team {
  AllowFriendlyFire: BooleanTag;
  SetFriendlyInvisibles: BooleanTag;
  NameTagVisibility: StringTag;
  DeathMessageVisibility: StringTag<TeamDeathMessageVisibility>;
  CollisionRile: StringTag<TeamCollisionRule>;
  DisplayName: StringTag;
  Name: StringTag;
  MemberNamePrefix: StringTag;
  MemberNameSuffix: StringTag;
  TeamColor?: StringTag<TeamColor>;
  Players: StringTag[];
}

export type TeamDeathMessageVisibility = "never" | "hideForOtherTeams" | "hideForOwnTeam" | "always";

export type TeamCollisionRule = "always" | "pushOwnTeam" | "never" | "pushOtherTeams";

export type TeamColor = "black" | "white" | "orange" | "magenta" | "light_blue" | "yellow" | "lime" | "pink" | "gray" | "light_gray" | "cyan" | "purple" | "blue" | "brown" | "green" | "red" | "black";

export type DisplaySlots = {
  [K in `slot_${DisplaySlot}`]: StringTag;
};

export type DisplaySlot = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18;

export interface ScoreboardFormat {
  type: StringTag<ScoreboardNumberFormat>;
}

export type ScoreboardNumberFormat = "blank" | "fixed" | "result";