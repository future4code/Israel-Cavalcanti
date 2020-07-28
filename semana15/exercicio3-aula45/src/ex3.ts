// Crie uma aplicação Node que receba uma string representando o **nome do arquivo da lista de tarefas** e uma string representando **uma nova tarefa**, em seguida o programa deve adicionar a **nova tarefa** em um arquivo que tenha **o nome da lista de tarefas.** Para isso, crie um arquivo chamado `tarefas.txt`

import * as fs from "fs";

const arquivo: string = process.argv[2];

const novaTarefa: string = process.argv[3];

fs.appendFileSync(`./src/${arquivo}`, "\n" + novaTarefa);
