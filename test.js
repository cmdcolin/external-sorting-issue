import fs from "fs";
import esort from "external-sort";

console.log("processing", process.argv[2], process.argv[3]);
await esort(
  fs.createReadStream(process.argv[2]),
  fs.createWriteStream(process.argv[3]),
  {
    maxHeap: 1024 * 1024,
    serializer: (a) => {
      return a + "\n";
    },
    deserializer: (a) => {
      return a;
    },
    comparer: (a, b) => {
      return a.localeCompare(b);
    },
  }
);
