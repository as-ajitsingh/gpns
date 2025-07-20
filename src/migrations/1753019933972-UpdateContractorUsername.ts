import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateContractorUsername1753019933972 implements MigrationInterface {
    name = 'UpdateContractorUsername1753019933972'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contractor" RENAME COLUMN "name" TO "username"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contractor" RENAME COLUMN "username" TO "name"`);
    }

}
