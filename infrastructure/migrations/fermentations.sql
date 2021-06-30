-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS fermentations_id_seq;

-- Table Definition
CREATE TABLE "public"."fermentations" (
    "id" int4 NOT NULL DEFAULT nextval('fermentations_id_seq'::regclass),
    "userId" int4 NOT NULL,
    "name" varchar NOT NULL,
    "createdAt" timestamp NOT NULL,
    "updatedAt" timestamp NOT NULL,
    "active" bool NOT NULL,
    "targetTemperature" float4 NOT NULL,
    PRIMARY KEY ("id")
);

INSERT INTO "public"."fermentations" ("id", "userId", "name", "createdAt", "updatedAt", "active", "targetTemperature") VALUES
(1,1,'Pale Ale','2021-06-16 18:00:01.346827','2021-06-16 18:00:01.346827"',TRUE,9.99),
(5,1,'IPA','2021-06-16 18:57:39.926961','2021-06-16 18:57:39.926961',TRUE,8);