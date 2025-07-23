import { MigrationInterface, QueryRunner } from "typeorm";

export class UsernameUnique1753275626013 implements MigrationInterface {
    name = 'UsernameUnique1753275626013'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "admin" DROP COLUMN "paswordHash"`);
        await queryRunner.query(`ALTER TABLE "admin" ADD "passwordHash" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "contractor" ADD CONSTRAINT "UQ_4a6e717f3eeb5184fa5004042ea" UNIQUE ("username")`);
        await queryRunner.query(`ALTER TABLE "admin" ADD CONSTRAINT "UQ_5e568e001f9d1b91f67815c580f" UNIQUE ("username")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "admin" DROP CONSTRAINT "UQ_5e568e001f9d1b91f67815c580f"`);
        await queryRunner.query(`ALTER TABLE "contractor" DROP CONSTRAINT "UQ_4a6e717f3eeb5184fa5004042ea"`);
        await queryRunner.query(`ALTER TABLE "admin" DROP COLUMN "passwordHash"`);
        await queryRunner.query(`ALTER TABLE "admin" ADD "paswordHash" character varying NOT NULL`);
    }

}
