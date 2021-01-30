import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./styles.css";

function Profile() {
  const { user, isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
      <div className="containerForm">
        <div className="profile">
          <img className="srcImgs" src={user.picture} alt={user.name} />

          <h2 className="wel">Welcome {user.name}</h2>
          <br />
          <br />
          {/* <p>{user.email}</p> */}
          {console.log(JSON.stringify(user, null, 2))}
          <div className="profImage">
            <img
              className="imgProf"
              width="100%"
              alt="home page banner"
              src="https://visme.co/blog/wp-content/uploads/2020/02/header-1200.gif"
            />
          </div>
          <br />
          <br />
          <div className="contanerProf">
            <h2 className="ment colour">About Mentor Matcher</h2>
            <p className="ment">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a
              metus sed sapien ullamcorper suscipit et non urna. Mauris ornare
              velit id arcu consectetur facilisis pulvinar elementum ipsum.
              Fusce et ante vitae ligula suscipit hendrerit quis id justo.
              Mauris et nisl vitae ligula sagittis efficitur vel a quam. Donec
              dictum aliquam nulla, eu blandit urna volutpat at. Nam ac molestie
              libero, vel semper neque. Orci varius natoque penatibus et magnis
              dis parturient montes, nascetur ridiculus mus. In vel luctus
              libero, at rutrum dui. Quisque tincidunt quis mauris nec congue.
              Etiam pulvinar rutrum neque, quis ultrices quam pretium sed.
              Suspendisse condimentum turpis justo, et dapibus magna vehicula
              sit amet. Nulla varius mi vitae tellus euismod sollicitudin.
            </p>
          </div>
        </div>
      </div>
    )
  );
}

export default Profile;
