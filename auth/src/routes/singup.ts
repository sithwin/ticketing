import express from "express";

const router = express.Router();

router.post('/api/users/singup', (request, response) => {
  const { email, password } = request.body;
});

export { router as signupRouter };