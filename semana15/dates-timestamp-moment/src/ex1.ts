// EX 1 - a) Crie um tipo para representar um evento. Ele deve possuir: um nome, uma descrição,  uma data de início (com dia, mês, ano, e hora) e uma data de fim.  Ambas as datas devem ser do tipo moment.Moment.

import * as moment from "moment";
moment.locale("pt-br");

type event = {
  name: string;
  description: string;
  startAt: moment.Moment;
  finishAt: moment.Moment;
};

// b) Agora, crie um array no escopo global do seu código para representar todos os eventos da agenda. Coloque, nele, ao menos dois eventos.

const allEvents: event[] = [
  {
    name: "Reveillon",
    description: "Comemoração da virada de ano",
    startAt: moment("31/12/2019 21:00", "DD/MM/YYYY HH:mm"),
    finishAt: moment("01/01/2020 07:00", "DD/MM/YYYY HH:mm"),
  },
  {
    name: "Carnaval",
    description: "Bora cair na folia!",
    startAt: moment("05/03/2020 20:30", "DD/MM/YYYY HH:mm"),
    finishAt: moment("15/03/2020 00:00", "DD/MM/YYYY HH:mm"),
  },
  {
    name: "Páscoa",
    description: "Coelhinho da páscoa, que trazes pra mim?",
    startAt: moment("21/04/2020 00:00", "DD/MM/YYYY HH:mm"),
    finishAt: moment("21/04/2020 23:59", "DD/MM/YYYY HH:mm"),
  },
  {
    name: "Dia das crianças",
    description: "Dia de garantir a diversão",
    startAt: moment("15/10/2020 00:00", "DD/MM/YYYY HH:mm"),
    finishAt: moment("15/10/2020 23:59", "DD/MM/YYYY HH:mm"),
  },
];

//=====================================================================
// EX 2 - Crie uma função que recebe o array de eventos criado no exercício anterior, e imprime algumas informações sobre cada um no console

// a) Exiba as informações do evento como uma string com o seguinte formato:
/*
Nome: Festa de aniversário
Horário de início: Segunda-feira, 25 de Junho de 2020, 12:00
Horário de fim: 25 de Junho de 2020, 18:30
Descrição: Festa super animada! Sua presença já é um presente. 
*/

const printAllEventsEx2 = (events: event[]): void => {
  events.forEach((item: event) => {
    const duration = item.finishAt.diff(item.startAt, "minutes");
    const today = moment();
    const daysUntilEvent = item.startAt.diff(today, "days");

    console.log(`
    Nome: ${item.name}
    Horário de início: ${item.startAt.format(
      "dddd, DD [de] MMMM [de] YYYY, HH:mm"
    )}
    Horário de fim: ${item.finishAt.format("DD [de] MMM [de] YYYY, HH:mm")}
    Descrição: ${item.description}`);
  });
};
printAllEventsEx2(allEvents);

// b) Que alterações precisariam ser feitas com as datas e horários caso a festa acontecesse em Londres, Inglaterra? (Responda essa pergunta em um comentário. Você não precisa implementar)

// CASO OS EVENTOS FOSSEM REALIZADOS NA INGLATERRA É SÓ RETIRAR O moment.locale("pt-br")

//=====================================================================
/* EX 3 - Vamos alterar um pouco o exercício anterior, agora, exibindo duas outras informações: 
- A duração do evento (em minutos); 
- A quantidade de dias que faltam até o evento começar

Veja abaixo:
Nome: Festa de aniversário
Horário de início: Segunda-feira, 25 de Junho de 2020, 12:00
Horário de fim: 25 de Junho de 2020, 18:30
Descrição: Festa super animada! Sua presença já é um presente.
Duração: 390 minutos
Dias até o evento: 1

*/

const printAllEventsEx3 = (events: event[]): void => {
  events.forEach((item: event) => {
    const duration = item.finishAt.diff(item.startAt, "minutes");
    const today = moment();
    const daysUntilEvent = item.startAt.diff(today, "days");

    console.log(`
    Nome: ${item.name}
    Horário de início: ${item.startAt.format(
      "dddd, DD [de] MMMM [de] YYYY, HH:mm"
    )}
    Horário de fim: ${item.finishAt.format("DD [de] MMM [de] YYYY, HH:mm")}
    Descrição: ${item.description}
    Duração total do evento: ${duration} minutos
    Dias até (ou que passaram do) o evento: ${daysUntilEvent} dias `);
  });
};
printAllEventsEx3(allEvents);

//=====================================================================
/* EX 4 - Deve ser possível cadastrar um novo evento no seu calendário pessoal, passando o dia com o horário de início, o dia com o horário de fim, o nome do evento e um pequeno texto descritivo. Solte a imaginação aqui para criar os eventos.

Crie uma função para guardar um evento (createEvent) no array
Adicione duas validações na função createEvent:  
  
(a) se ela for chamada sem passar alguma das informações necessárias para a criação do evento, imprima uma mensagem de erro no console;
(b) se ela for chamada com uma data anterior ao dia de hoje, imprima uma mensagem de erro também
*/

const createEvent = (
  name: string,
  description: string,
  startAt: moment.Moment,
  finishAt: moment.Moment
): void => {
  if (!name || !description || !startAt || !finishAt) {
    console.log("Por gentileza, verifique se todos os dados foram inseridos");
    return;
  }

  const diffStartAndToday = startAt.diff(moment(), "seconds");
  const diffFinishAndToday = finishAt.diff(moment(), "seconds");

  if (diffStartAndToday < 0 && diffFinishAndToday < 0) {
    console.log("A data inserida precisa ser futura!");
    return;
  }

  allEvents.push({
    name,
    description,
    startAt,
    finishAt,
  });
};

createEvent("Evento Teste", "Descrição teste", "29/07/2020", "29/07/2020");
createEvent(process.argv[2], process.argv[3], process.argv[4], process.argv[5]);
