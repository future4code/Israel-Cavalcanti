import * as fs from "fs";

export default class JSONFileManager {
  private fileName: string;

  constructor(fileName: string) {
    this.fileName = fileName;
  }

  //readDatabase
  public getObjectFromFile(): any {
    try {
      const fileData: string = fs.readFileSync("./data.json").toString();
      return JSON.parse(fileData);
    } catch (error) {
      console.log("Erro ao ler a base de dados: " + error.message);
      return [];
    }
  }

  // writeToDatabase
  public writeObjectToFile(objectToSave: any): void {
    try {
      const dataAsString: string = JSON.stringify(objectToSave, null, 2);
      fs.writeFileSync("./data.json", dataAsString);
    } catch (error) {
      console.log("Erro ao salvar os dados: " + error.message);
    }
  }
}
