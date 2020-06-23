import React, { useState } from "react";
import ProfilePage from "./components/ProfilePage";
import MatchPage from "./components/MatchPage";

function App() {
  const [currentPage, setCurrentPage] = useState("ProfilePage");

  const changePage = () => {
    if (currentPage === "ProfilePage") {
      setCurrentPage("MatchPage");
    } else {
      setCurrentPage("ProfilePage");
    }
  };

  return currentPage === "ProfilePage" ? (
    <ProfilePage changePage={changePage} />
  ) : (
    <MatchPage changePage={changePage} />
  );
}

export default App;
