import express from "express";
import data from "./MOCK_DATA.json";

export const addTestPost = (app: ReturnType<typeof express>) => {
  app.post("/test", function (req, res) {
    const body = req.body;
    if (!body?.quantity || typeof body.quantity !== "number")
      res.sendStatus(400);

    const toSend = data.slice(0, body.quantity + 1);
    res.send(toSend);
  });
};
