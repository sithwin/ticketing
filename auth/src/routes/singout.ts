import express from "express";

const router = express.Router();

router.post('/api/users/signout', (request, response) => {
  response.send('Hi There!');
});

export { router as signoutRouter };