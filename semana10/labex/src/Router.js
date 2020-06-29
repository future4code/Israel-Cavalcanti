import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import HomePage from "./components/HomePage";
import ApplicationFormPage from "./components/ApplicationFormPage";
import LoginPage from "./components/LoginPage";
import CreateTripPage from "./components/CreateTripPage";
import ListTripsPage from "./components/ListTripsPage";
import TripDetailsPage from "./components/TripDetailsPage";
import AdmPage from "./components/AdmPage";
import Error from "./components/Error";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/application-form">
          <ApplicationFormPage />
        </Route>
        <Route exact path="/login-adm">
          <LoginPage />
        </Route>
        <Route exact path="/trips/create">
          <CreateTripPage />
        </Route>
        <Route exact path="/trips/list">
          <ListTripsPage />
        </Route>
        <Route exact path="/trips/details/:id">
          <TripDetailsPage />
        </Route>
        <Route>
          <AdmPage exact path="/adm" />
        </Route>
        <Route path="">
          <Error />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
