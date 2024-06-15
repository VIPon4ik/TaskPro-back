import { IsDefined, IsEnum, MaxLength } from 'class-validator';
import { DashboardBackgrounds, DashboardIcons } from '../models';

export class CreateDashboardDto {
  @IsDefined()
  @MaxLength(120)
    name: string;

  @IsDefined()
  @IsEnum(DashboardIcons)
    icon: DashboardIcons;

  @IsDefined()
  @IsEnum(DashboardBackgrounds)
    background: DashboardBackgrounds;
}