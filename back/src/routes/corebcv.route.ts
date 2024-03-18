import { Router } from "express";
import { TbPrioridad } from "../db/models/tb_prioridad";
import { StateManagerInstance } from "../store";
import { TbComponente } from "../db/models/tb_componente";
import { TbSaldoCuenta } from "../db/models/tb_saldo_cuenta";
import lodash from "lodash";

const router = Router();

router.get("/prioridad", async (_, res) => {
  try {
    const result = await TbPrioridad.findAll();
    //   const sub_prodcutos = Object.keys(lodash.groupBy(result, "CO_SUB_PRODUCTO"));
    //   const iniciadores = Object.keys(lodash.groupBy(result, "CO_INSTITUCION"));

    //   StateManagerInstance.updateState({
    //     sub_prodcutos,
    //     iniciadores,
    //   });

    return res.json(result);
  } catch (error) {
    return res.json(error);
  }
});

router.get("/saldo_cuenta", async (_, res) => {
  try {
    const saldoCuenta = await TbSaldoCuenta.findAll({ include: ["PRIORIDAD"] });
    // const prioridad = await TbPrioridad.findAll();

    const result = lodash.groupBy(saldoCuenta, "TX_INICIADOR");

    return res.json(result);
  } catch (error) {
    return res.json(error);
  }
});

router.get("/componente", async (_, res) => {
  try {
    const componentes = await TbComponente.findAll({
      where: {
        ST_COMPONENTE: 1,
      },
    });

    StateManagerInstance.updateState({
      componentes,
    });

    return res.json(componentes);
  } catch (error) {
    return res.json(error);
  }
});

export default router;

// {
//     "1012": [
//         {
//             "CO_CUENTA": "00010001320001001012",
//             "TX_INICIADOR": "1012",
//             "MO_SALDO": 137044.12,
//             "CO_CUENTA_MATRIZ": "00010001320001001012",
//             "TX_RIF": "G200045965",
//             "TX_NOMBRE_CLIENTE": "GOBERNACIÓN DEL ESTADO MIRANDA",
//             "PRIORIDAD": [
//                 {
//                     "ID_PRIORIDAD": 11,
//                     "CO_INSTITUCION": 1012,
//                     "CO_SUB_PRODUCTO": "001",
//                     "NU_PRIORIDAD": 1
//                 },
//                 {
//                     "ID_PRIORIDAD": 12,
//                     "CO_INSTITUCION": 1012,
//                     "CO_SUB_PRODUCTO": "002",
//                     "NU_PRIORIDAD": 1
//                 },
//                 {
//                     "ID_PRIORIDAD": 9,
//                     "CO_INSTITUCION": 1012,
//                     "CO_SUB_PRODUCTO": "220",
//                     "NU_PRIORIDAD": 1
//                 }
//             ]
//         }
//     ],
//     "1216": [
//         {
//             "CO_CUENTA": "00010001340003001216",
//             "TX_INICIADOR": "1216",
//             "MO_SALDO": 46337.32,
//             "CO_CUENTA_MATRIZ": "00010001340003001216",
//             "TX_RIF": "G200096772",
//             "TX_NOMBRE_CLIENTE": "BOLSA DE VALORES BICENTENARIA",
//             "PRIORIDAD": [
//                 {
//                     "ID_PRIORIDAD": 10,
//                     "CO_INSTITUCION": 1216,
//                     "CO_SUB_PRODUCTO": "220",
//                     "NU_PRIORIDAD": 1
//                 },
//                 {
//                     "ID_PRIORIDAD": 13,
//                     "CO_INSTITUCION": 1216,
//                     "CO_SUB_PRODUCTO": "001",
//                     "NU_PRIORIDAD": 1
//                 },
//                 {
//                     "ID_PRIORIDAD": 14,
//                     "CO_INSTITUCION": 1216,
//                     "CO_SUB_PRODUCTO": "002",
//                     "NU_PRIORIDAD": 1
//                 }
//             ]
//         }
//     ],
//     "101459": [
//         {
//             "CO_CUENTA": "00010001375050007000",
//             "TX_INICIADOR": "101459",
//             "MO_SALDO": 258770.68,
//             "CO_CUENTA_MATRIZ": "00010001320004101459",
//             "TX_RIF": "G200126116",
//             "TX_NOMBRE_CLIENTE": "FUNDACIÓN PATRIA",
//             "PRIORIDAD": [
//                 {
//                     "ID_PRIORIDAD": 4,
//                     "CO_INSTITUCION": 101459,
//                     "CO_SUB_PRODUCTO": "221",
//                     "NU_PRIORIDAD": 3
//                 },
//                 {
//                     "ID_PRIORIDAD": 5,
//                     "CO_INSTITUCION": 101459,
//                     "CO_SUB_PRODUCTO": "224",
//                     "NU_PRIORIDAD": 3
//                 },
//                 {
//                     "ID_PRIORIDAD": 6,
//                     "CO_INSTITUCION": 101459,
//                     "CO_SUB_PRODUCTO": "220",
//                     "NU_PRIORIDAD": 2
//                 }
//             ]
//         },
//         {
//             "CO_CUENTA": "00010001345043007000",
//             "TX_INICIADOR": "101459",
//             "MO_SALDO": 227342163.28,
//             "CO_CUENTA_MATRIZ": "00010001340003101459",
//             "TX_RIF": "G200126116",
//             "TX_NOMBRE_CLIENTE": "FUNDACIÓN PATRIA",
//             "PRIORIDAD": [
//                 {
//                     "ID_PRIORIDAD": 4,
//                     "CO_INSTITUCION": 101459,
//                     "CO_SUB_PRODUCTO": "221",
//                     "NU_PRIORIDAD": 3
//                 },
//                 {
//                     "ID_PRIORIDAD": 5,
//                     "CO_INSTITUCION": 101459,
//                     "CO_SUB_PRODUCTO": "224",
//                     "NU_PRIORIDAD": 3
//                 },
//                 {
//                     "ID_PRIORIDAD": 6,
//                     "CO_INSTITUCION": 101459,
//                     "CO_SUB_PRODUCTO": "220",
//                     "NU_PRIORIDAD": 2
//                 }
//             ]
//         },
//         {
//             "CO_CUENTA": "00010001365042007000",
//             "TX_INICIADOR": "101459",
//             "MO_SALDO": 1155227318.16,
//             "CO_CUENTA_MATRIZ": "00010001360002101459",
//             "TX_RIF": "G200126116",
//             "TX_NOMBRE_CLIENTE": "FUNDACIÓN PATRIA",
//             "PRIORIDAD": [
//                 {
//                     "ID_PRIORIDAD": 4,
//                     "CO_INSTITUCION": 101459,
//                     "CO_SUB_PRODUCTO": "221",
//                     "NU_PRIORIDAD": 3
//                 },
//                 {
//                     "ID_PRIORIDAD": 5,
//                     "CO_INSTITUCION": 101459,
//                     "CO_SUB_PRODUCTO": "224",
//                     "NU_PRIORIDAD": 3
//                 },
//                 {
//                     "ID_PRIORIDAD": 6,
//                     "CO_INSTITUCION": 101459,
//                     "CO_SUB_PRODUCTO": "220",
//                     "NU_PRIORIDAD": 2
//                 }
//             ]
//         }
//     ],
//     "101572": [
//         {
//             "CO_CUENTA": "00010001335049007000",
//             "TX_INICIADOR": "101572",
//             "MO_SALDO": 1766054.83,
//             "CO_CUENTA_MATRIZ": "00010001310001101572",
//             "TX_RIF": "G200129530",
//             "TX_NOMBRE_CLIENTE": "TESORERIA CRIPTOACTIVOS DE VZL",
//             "PRIORIDAD": [
//                 {
//                     "ID_PRIORIDAD": 8,
//                     "CO_INSTITUCION": 101572,
//                     "CO_SUB_PRODUCTO": "447",
//                     "NU_PRIORIDAD": 2
//                 },
//                 {
//                     "ID_PRIORIDAD": 7,
//                     "CO_INSTITUCION": 101572,
//                     "CO_SUB_PRODUCTO": "220",
//                     "NU_PRIORIDAD": 2
//                 },
//                 {
//                     "ID_PRIORIDAD": 1,
//                     "CO_INSTITUCION": 101572,
//                     "CO_SUB_PRODUCTO": "222",
//                     "NU_PRIORIDAD": 4
//                 },
//                 {
//                     "ID_PRIORIDAD": 2,
//                     "CO_INSTITUCION": 101572,
//                     "CO_SUB_PRODUCTO": "228",
//                     "NU_PRIORIDAD": 2
//                 },
//                 {
//                     "ID_PRIORIDAD": 3,
//                     "CO_INSTITUCION": 101572,
//                     "CO_SUB_PRODUCTO": "230",
//                     "NU_PRIORIDAD": 4
//                 }
//             ]
//         }
//     ],
//     "101603": [
//         {
//             "CO_CUENTA": "00010001350001101603",
//             "TX_INICIADOR": "101603",
//             "MO_SALDO": 64503.7,
//             "CO_CUENTA_MATRIZ": "00010001350001101603",
//             "TX_RIF": null,
//             "TX_NOMBRE_CLIENTE": "INSTITUTO AUTÓNOMO CUERPO DE BOMBEROS DEL ESTADO MIRANDA",
//             "PRIORIDAD": [
//                 {
//                     "ID_PRIORIDAD": 15,
//                     "CO_INSTITUCION": 101603,
//                     "CO_SUB_PRODUCTO": "001",
//                     "NU_PRIORIDAD": 1
//                 },
//                 {
//                     "ID_PRIORIDAD": 16,
//                     "CO_INSTITUCION": 101603,
//                     "CO_SUB_PRODUCTO": "002",
//                     "NU_PRIORIDAD": 1
//                 },
//                 {
//                     "ID_PRIORIDAD": 17,
//                     "CO_INSTITUCION": 101603,
//                     "CO_SUB_PRODUCTO": "220",
//                     "NU_PRIORIDAD": 1
//                 }
//             ]
//         }
//     ]
// }
