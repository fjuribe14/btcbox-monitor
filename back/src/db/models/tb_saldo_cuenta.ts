import { DataTypes, Model } from "sequelize";
import { corebcv } from "..";
import { TbPrioridad } from "./tb_prioridad";

export class TbSaldoCuenta extends Model {
  CO_CUENTA!: string;
  TX_INICIADOR!: string;
  MO_SALDO!: string;
  CO_CUENTA_MATRIZ!: string;
  TX_RIF!: string;
  TX_NOMBRE_CLIENTE!: string;
}

TbSaldoCuenta.init(
  {
    CO_CUENTA: {
      primaryKey: true,
      type: DataTypes.STRING,
    },
    TX_INICIADOR: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    MO_SALDO: {
      type: DataTypes.STRING,
    },
    CO_CUENTA_MATRIZ: {
      type: DataTypes.STRING,
    },
    TX_RIF: {
      type: DataTypes.STRING,
    },
    TX_NOMBRE_CLIENTE: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize: corebcv,
    modelName: "TB_SALDO_CUENTA",
    timestamps: false,
    freezeTableName: true,
  }
);

TbSaldoCuenta.hasMany(TbPrioridad, {
  foreignKey: "CO_INSTITUCION", // Campo de relación en TbPrioridad
  sourceKey: "TX_INICIADOR", // Campo de relación en TbSaldoCuenta
  as: "PRIORIDAD", // Alias para acceder a esta relación
});
