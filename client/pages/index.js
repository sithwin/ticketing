import axios from "axios";

const LandingPage = ({ currentUser }) => {
  console.log("current user", currentUser);
  return <h1>Landing Page</h1>;
};

LandingPage.getInitialProps = async ({ req }) => {
  if (typeof window === "undefined") {
    console.log("we are on the server!");
    // requests should be made to http://ingress-nginx.ingress-nginx...laksdjfk
    const { data } = await axios.get(
      "http://ingress-nginx.ingress-nginx.svc.cluster.local/api/users/currentuser",
      {
        headers: req.headers,
      }
    );

    return data;
  } else {
    console.log("we are on the browser!");
    // requests can be made with a base url of ''
    const { data } = await axios.get("/api/users/currentuser");

    return data;
  }
  return response.data;
};

export default LandingPage;
