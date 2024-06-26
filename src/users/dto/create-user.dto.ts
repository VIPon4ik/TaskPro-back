import { IsDefined, IsEmail, IsString, Length, Matches, MaxLength } from 'class-validator';
import { PASSWORD_VALIDATION_PATTERN } from '../constants/password-validation';

export class CreateUserDto {
  @IsDefined()
  @IsString()
  @Length(2, 36)
    name: string;

  @IsEmail()
  @IsDefined()
  @MaxLength(256)
    email: string;

  @IsDefined()
  @Length(8, 36)
  @Matches(PASSWORD_VALIDATION_PATTERN, {
    message: 'Password must contain at least one digit, one uppercase and one lowercase letter, and it can\'t contain spaces',
  })
    password: string;
}
