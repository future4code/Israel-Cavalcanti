"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const arquivo = process.argv[2];
const novaTarefa = process.argv[3];
fs.appendFileSync(`./src/${arquivo}`, "\n" + novaTarefa);
//# sourceMappingURL=ex3.js.map