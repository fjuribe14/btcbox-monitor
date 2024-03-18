import { Router } from "express";
import { QueryTypes } from "sequelize";
import { corebcv } from "../db";

const router = Router();

router.get("/", async (_, res) => {
  const result = await corebcv.query(`SELECT * FROM dba_tablespaces;`, {
    type: QueryTypes.SELECT,
  });
  return res.json(result);
});

export default router;
