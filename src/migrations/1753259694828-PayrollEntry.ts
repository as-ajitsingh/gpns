import { MigrationInterface, QueryRunner } from "typeorm";

export class PayrollEntry1753259694828 implements MigrationInterface {
    name = 'PayrollEntry1753259694828'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "payroll_entry" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "startDate" date NOT NULL, "endDate" date NOT NULL, "payoutDate" date NOT NULL, "amount" double precision NOT NULL, "comments" character varying NOT NULL, "contractorId" uuid, "addedById" uuid, CONSTRAINT "PK_3329186685dcfe2e5a2c6d5e3e9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "payroll_entry" ADD CONSTRAINT "FK_4487a5603562367222ace5e7a72" FOREIGN KEY ("contractorId") REFERENCES "contractor"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "payroll_entry" ADD CONSTRAINT "FK_50fb1d1b5e638265a0fe85a8aa2" FOREIGN KEY ("addedById") REFERENCES "admin"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "payroll_entry" DROP CONSTRAINT "FK_50fb1d1b5e638265a0fe85a8aa2"`);
        await queryRunner.query(`ALTER TABLE "payroll_entry" DROP CONSTRAINT "FK_4487a5603562367222ace5e7a72"`);
        await queryRunner.query(`DROP TABLE "payroll_entry"`);
    }

}
