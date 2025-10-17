import { useEffect, useState } from "react";
import RegistrationInBondee from "./components/RegistrationInBondee/RegistrationInBondee.jsx";
import CreateUserProfile from "./components/CreateUserProfile/CreateUserProfile.jsx";
import axios from "axios";
import "./App.css";

function App() {
  const [registrAccStatus, setRegistrAccStatus] = useState("");
  const [userProfileStatus, setUserProfileStatus] = useState("");

  function registrationСheck() {
    axios.get("http://localhost:3001/userData").then((userData) => {
      if (!userData || Object.keys(userData.data).length === 0) {
        setRegistrAccStatus("not registered");
      } else {
        setRegistrAccStatus("registered");
      }
    });
  }

  function createdProfileCheck() {
    axios.get("http://localhost:3001/userProfile").then((userData) => {
      if (!userData || Object.keys(userData.data).length === 0) {
        setUserProfileStatus("not created");
      } else {
        setUserProfileStatus("created");
      }
    });
  }

  useEffect(() => {
    registrationСheck();
    createdProfileCheck();
  }, []);

  function renderRegisteringForm() {
    if (
      registrAccStatus === "not registered" &&
      userProfileStatus === "not created"
    ) {
      return <RegistrationInBondee />;

    } else if (
      registrAccStatus === "registered" &&
      userProfileStatus === "not created"
    ) {
      return <CreateUserProfile />;
    }
  }

  return <main>{renderRegisteringForm()}</main>;
}

export default App;
