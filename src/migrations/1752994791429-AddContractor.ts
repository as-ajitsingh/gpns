import { MigrationInterface, QueryRunner } from "typeorm";

export class AddContractor1752994791429 implements MigrationInterface {
    name = 'AddContractor1752994791429'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."contractor_contracttype_enum" AS ENUM('permanent', 'contract')`);
        await queryRunner.query(`CREATE TABLE "contractor" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying NOT NULL, "address" character varying NOT NULL, "passwordHash" character varying NOT NULL, "startDate" TIMESTAMP NOT NULL, "endDate" date NOT NULL, "contractType" "public"."contractor_contracttype_enum" NOT NULL DEFAULT 'contract', "countryId" uuid, CONSTRAINT "PK_27a7037ba4d95c429e611cef10e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "contractor" ADD CONSTRAINT "FK_3bb7f3e1aac602bd6d6a2d417a3" FOREIGN KEY ("countryId") REFERENCES "country"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contractor" DROP CONSTRAINT "FK_3bb7f3e1aac602bd6d6a2d417a3"`);
        await queryRunner.query(`DROP TABLE "contractor"`);
        await queryRunner.query(`DROP TYPE "public"."contractor_contracttype_enum"`);
    }

}
