"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const moment = require("moment");
moment.locale("pt-br");
const allEvents = [
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
const printAllEventsEx2 = (events) => {
    events.forEach((item) => {
        const duration = item.finishAt.diff(item.startAt, "minutes");
        const today = moment();
        const daysUntilEvent = item.startAt.diff(today, "days");
        console.log(`
    Nome: ${item.name}
    Horário de início: ${item.startAt.format("dddd, DD [de] MMMM [de] YYYY, HH:mm")}
    Horário de fim: ${item.finishAt.format("DD [de] MMM [de] YYYY, HH:mm")}
    Descrição: ${item.description}`);
    });
};
printAllEventsEx2(allEvents);
const printAllEventsEx3 = (events) => {
    events.forEach((item) => {
        const duration = item.finishAt.diff(item.startAt, "minutes");
        const today = moment();
        const daysUntilEvent = item.startAt.diff(today, "days");
        console.log(`
    Nome: ${item.name}
    Horário de início: ${item.startAt.format("dddd, DD [de] MMMM [de] YYYY, HH:mm")}
    Horário de fim: ${item.finishAt.format("DD [de] MMM [de] YYYY, HH:mm")}
    Descrição: ${item.description}
    Duração total do evento: ${duration} minutos
    Dias até (ou que passaram do) o evento: ${daysUntilEvent} dias `);
    });
};
printAllEventsEx3(allEvents);
const createEvent = (events) => {
    const newEvent = {
        name: process.argv[2],
        description: process.argv[3],
        startAt: moment(process.argv[4], "DD/MM/YYYY, HH:mm"),
        finishAt: moment(process.argv[5], "DD/MM/YYYY, HH:mm"),
    };
    if (!newEvent.name ||
        !newEvent.description ||
        !newEvent.startAt ||
        !newEvent.finishAt) {
        console.log("Por gentileza, verifique se todos os dados foram inseridos");
        return;
    }
    const diffStartAndToday = newEvent.startAt.diff(moment(), "seconds");
    const diffFinishAndToday = newEvent.finishAt.diff(moment(), "seconds");
    if (diffStartAndToday < 0 && diffFinishAndToday < 0) {
        console.log("A data inserida precisa ser futura!");
        return;
    }
    allEvents.push(newEvent);
};
createEvent(allEvents);
//# sourceMappingURL=ex1.js.map