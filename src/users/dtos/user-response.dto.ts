import { Exclude } from 'class-transformer';

export class UserResponseDto {
  id: number;
  username: string;
  email: string;
  birthdate: Date;

  @Exclude()
  password: string;

  constructor(partial: Partial<UserResponseDto>) {
    Object.assign(this, partial);
  }
}
