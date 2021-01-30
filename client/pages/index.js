import axios from "axios";
import buildClient from "../api/build-client";

const LandingPage = ({ currentUser }) => {
  console.log("current user", currentUser);
  return <h1>Landing Page</h1>;
};

LandingPage.getInitialProps = async ({ req }) => {
  const client = buildClient(req);
  const { data } = await client.get("api/users/currentUser");
  return data;
};

export default LandingPage;
