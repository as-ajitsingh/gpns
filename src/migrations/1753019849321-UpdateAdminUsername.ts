import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateAdminUsername1753019849321 implements MigrationInterface {
    name = 'UpdateAdminUsername1753019849321'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "admin" RENAME COLUMN "name" TO "username"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "admin" RENAME COLUMN "username" TO "name"`);
    }

}
