import { IsMongoId, IsNumber } from 'class-validator';

export class ProviderCaseDto {
  @IsMongoId()
  provider_id: string;
  @IsNumber()
  moneycase: number;
}
