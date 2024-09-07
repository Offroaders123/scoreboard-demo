import { read } from "nbtify";
import scoreboard from "../nbt/scoreboard.nbt?url";

const buffer: ArrayBuffer = await (await fetch(scoreboard)).arrayBuffer();
console.log(buffer);

const data = new Uint8Array(buffer);
console.log(data);

const nbt = await read<any>(data);
console.log(nbt.data.data);