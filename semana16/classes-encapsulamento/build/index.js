"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeToDatabase = exports.readDatabase = void 0;
const fs = __importStar(require("fs"));
const moment_1 = __importDefault(require("moment"));
function readDatabase() {
    try {
        const fileData = fs.readFileSync("./data.json").toString();
        return JSON.parse(fileData);
    }
    catch (error) {
        console.log("Erro ao ler a base de dados: " + error.message);
        return [];
    }
}
exports.readDatabase = readDatabase;
function writeToDatabase(data) {
    try {
        const dataAsString = JSON.stringify(data, null, 2);
        fs.writeFileSync("./data.json", dataAsString);
    }
    catch (error) {
        console.log("Erro ao salvar os dados: " + error.message);
    }
}
exports.writeToDatabase = writeToDatabase;
function createAccount(name, cpf, birthDate, balance) {
    const accounts = readDatabase();
    const newAccount = {
        name,
        cpf,
        birthDate: moment_1.default(birthDate, "DD/MM/YYYY"),
        balance: 0,
        transactions: [],
    };
    if (moment_1.default().diff(birthDate, "years") >= 18) {
        accounts.push(newAccount);
        writeToDatabase(accounts);
    }
    else {
        console.log("\x1b[31m", "Invalid birth date");
    }
}
function getAllAccounts() {
    const accounts = readDatabase();
    const mappedAccounts = accounts.map((account) => {
        return {
            name: account.name,
            cpf: account.cpf,
            birthDate: account.birthDate,
            balance: account.balance,
            transactions: account.transactions,
        };
    });
    return mappedAccounts;
}
function main(action) {
    switch (action) {
        case "create":
            createAccount(process.argv[3], process.argv[4], process.argv[5], Number(process.argv[6]));
            break;
        case "get":
            console.log(getAllAccounts());
            break;
        default:
            console.log("\x1b[31m", "Invalid call. Please use create or get");
    }
}
main(process.argv[2]);
