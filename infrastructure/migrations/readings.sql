-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS readings_id_seq;

-- Table Definition
CREATE TABLE "public"."readings" (
    "id" int4 NOT NULL DEFAULT nextval('readings_id_seq'::regclass),
    "sensorId" varchar,
    "fermentationId" int4,
    "createdAt" timestamp,
    "updatedAt" timestamp,
    "temperature" float4,
    PRIMARY KEY ("id")
);

INSERT INTO "public"."readings" ("id", "sensorId", "fermentationId", "createdAt", "updatedAt", "temperature") VALUES
(1, 'test', 1, '2021-06-17 16:56:19.931213', '2021-06-17 16:56:19.931213', 1),
(2, 'test', 1, '2021-06-17 16:57:45.212606', '2021-06-17 16:57:45.212606', 1),
(3, 'test', 1, '2021-06-17 16:57:46.501237', '2021-06-17 16:57:46.501237', 1);
