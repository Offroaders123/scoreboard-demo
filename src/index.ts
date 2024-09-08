import { read } from "nbtify";
import scoreboard from "../nbt/scoreboard.nbt?url";
import type { Scoreboard } from "./scoreboard.js";

const buffer: ArrayBuffer = await (await fetch(scoreboard)).arrayBuffer();
console.log(buffer);

const data = new Uint8Array(buffer);
console.log(data);

console.time();
console.log("Started the timer");

const nbt = await read<Scoreboard>(data);
console.log(nbt.data.data);

console.timeEnd();

const scoreboardData = nbt.data.data;
const { PlayerScores } = scoreboardData;

const playerNames = new Set<string>();

for (const score of PlayerScores) {
  const { Name } = score;
  const isUUID: boolean = Name.length === 36 && Name.match(/-/g)?.length === 4;
  if (isUUID) continue;
  playerNames.add(Name);
}

console.log(JSON.stringify([...playerNames], null, 2));