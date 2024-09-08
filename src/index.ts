import { read } from "nbtify";
import scoreboard from "../nbt/scoreboard.nbt?url";

const buffer: ArrayBuffer = await (await fetch(scoreboard)).arrayBuffer();
console.log(buffer);

const data = new Uint8Array(buffer);
console.log(data);

console.time();
console.log("Started the timer");

const nbt = await read<any>(data);
console.log(nbt.data.data);

console.timeEnd();