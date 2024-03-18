import { DataTypes, Model } from "sequelize";
import { corebcv } from "..";

export class TbComponente extends Model {
  NB_NOMBRE!: string;
  TX_DESCRIPCION!: string;
  CO_COMPONENTE!: string;
  IN_EJECUCION!: number;
  TX_PARAMETROS!: TxParametros;
  ST_COMPONENTE!: number;
}

TbComponente.init(
  {
    NB_NOMBRE: {
      type: DataTypes.STRING,
    },
    TX_DESCRIPCION: {
      type: DataTypes.STRING,
    },
    CO_COMPONENTE: {
      primaryKey: true,
      type: DataTypes.STRING,
    },
    IN_EJECUCION: {
      type: DataTypes.INTEGER,
    },
    TX_PARAMETROS: {
      type: DataTypes.JSON,
    },
    ST_COMPONENTE: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize: corebcv,
    modelName: "TB_COMPONENTE",
    timestamps: false,
    freezeTableName: true,
  }
);

export interface Componente {
  NB_NOMBRE: string;
  TX_DESCRIPCION?: string;
  CO_COMPONENTE: string;
  IN_EJECUCION: number;
  TX_PARAMETROS: TxParametros;
  ST_COMPONENTE: number;
}

export interface TxParametros {
  HH_RANGO_DESDE: string;
  HH_RANGO_HASTA: string;
}
