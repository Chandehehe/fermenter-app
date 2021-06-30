-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS users_id_seq;

-- Table Definition
CREATE TABLE "public"."users" (
    "id" int4 NOT NULL DEFAULT nextval('users_id_seq'::regclass),
    "displayName" varchar NOT NULL DEFAULT ''''''::character varying,
    "email" varchar NOT NULL,
    "createdAt" timestamp NOT NULL,
    "updatedAt" timestamp NOT NULL,
    "password" varchar NOT NULL,
    PRIMARY KEY ("id")
);

INSERT INTO "public"."users" ("id", "displayName", "email", "createdAt", "updatedAt", "password") VALUES
(1, 'Head Brewer', 'head@brewer.com', '2021-06-16 17:52:19.254237', '2021-06-16 17:52:19.254237', 'pAsSWoRd!'),
(2, 'Another Head Brewer', 'another@brewer.com', '2021-06-16 18:23:22.047535', '2021-06-16 18:23:22.047535', 'pAsSWoRd!');
