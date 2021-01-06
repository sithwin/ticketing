import express from "express";

const router = express.Router();

router.post('/api/users/signin', (request, response) => {
  response.send('Hi There!');
});

export { router as signinRouter };