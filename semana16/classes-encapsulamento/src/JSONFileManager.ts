import * as fs from "fs";

export class JSONFileManager {
  // Para chumbar o caminho do arquivo que será lido e escrito:
  private fileName: string = "data.json";

  // LER O ARQUIVO DATA BASE (data.json)
  public readDataBase(): any {
    try {
      return JSON.parse(fs.readFileSync(`./${this.fileName}`).toString());
    } catch (error) {
      console.log("Erro ao ler a base de dados: " + error.message);
      return [];
    }
  }

  // ESCREVER NO ARQUIVO DATA BASE (data.json)
  public writeToDataBase(objectToSave: any): void {
    try {
      // os parâmetros (null, 2) servem para identação do data.json quando o usuário finalizar sua ação
      const dataAsString: string = JSON.stringify(objectToSave, null, 2);
      fs.writeFileSync(`./${this.fileName}`, dataAsString);
    } catch (error) {
      console.log("Erro ao salvar os dados: " + error.message);
    }
  }
}
