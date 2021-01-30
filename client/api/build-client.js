import axios from "axios";

export default (req) => {
  if (typeof window === "undefined") {
    console.log("We are on the server");
    return axios.create({
      baseURL: "http://ingress-nginx.ingress-nginx.svc.cluster.local",
      headers: req.headers,
    });
  } else {
    console.log("We are on the browser");
    return axios.create({
      baseURL: "/", // optional
    });
  }
};
