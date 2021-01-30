import React from "react";
import LoginButton from "../LoginButton";
import LogoutButton from "../LogoutButton";
import Profile from "../Profile";
import { useAuth0 } from "@auth0/auth0-react";
import "./styles.css";

function LoginPage() {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return (
      <div className="loadingContainer">
        <div className="loadingDiv">
          <img
            className="lodaingImage"
            alt="loading animation"
            src="https://media4.giphy.com/media/xTk9ZvMnbIiIew7IpW/giphy.gif"
          />
        </div>
      </div>
    );
  }

  return (
    <div>
      <LoginButton />
      <LogoutButton />
      <Profile />
    </div>
  );
}

export default LoginPage;
