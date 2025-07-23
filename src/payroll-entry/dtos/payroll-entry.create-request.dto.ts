export class PayrollEntryCreateRequestDto {
    contractorId: string;
    startDate: Date;
    endDate: Date;
    payoutDate: Date;
    amount: number;
    currencyCode: string;
    comments: string;
}
