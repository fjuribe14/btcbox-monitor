-- CreateTable
CREATE TABLE "tb_operacion" (
    "id_operacion" SERIAL NOT NULL,
    "in_btcbox" INTEGER NOT NULL DEFAULT 0,
    "in_csmf" INTEGER NOT NULL DEFAULT 0,
    "in_core" INTEGER NOT NULL DEFAULT 0,
    "in_inm" INTEGER NOT NULL DEFAULT 0,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tb_operacion_pkey" PRIMARY KEY ("id_operacion")
);
