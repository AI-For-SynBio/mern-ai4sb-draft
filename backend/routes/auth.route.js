import express from 'express';

const router = express.Router();

router.get("/login", (req, res) => {
    res.send("U logged in");
})

export default router; 