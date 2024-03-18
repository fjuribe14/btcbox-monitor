import { DataTypes, Model } from "sequelize";
import { corebcv } from "..";
import { TbSaldoCuenta } from "./tb_saldo_cuenta";

export class TbPrioridad extends Model {
  ID_PRIORIDAD!: number;
  CO_INSTITUCION!: string;
  CO_SUB_PRODUCTO!: string;
  NU_PRIORIDAD!: number;
}

TbPrioridad.init(
  {
    ID_PRIORIDAD: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    CO_INSTITUCION: {
      type: DataTypes.STRING,
    },
    CO_SUB_PRODUCTO: {
      type: DataTypes.STRING,
    },
    NU_PRIORIDAD: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize: corebcv,
    modelName: "TB_PRIORIDAD",
    timestamps: false,
    freezeTableName: true,
  }
);

export interface Prioridad {
  ID_PRIORIDAD: number;
  CO_INSTITUCION: number;
  CO_SUB_PRODUCTO: string;
  NU_PRIORIDAD: number;
}
