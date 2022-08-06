import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { GetUser } from './decorators/get-user.decorator';
import { LoginDto } from './dto/login-in.dto';
import { RefreshTokenDto } from './dto/refreah-token.dto';
import { RegisterDto } from './dto/register.dto';
import { User } from './user.entity';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/register')
  async signIn(@Body(ValidationPipe) body: RegisterDto) {
    return this.authService.signUp(body);
  }

  @Post('/login')
  async logIn(@Body(ValidationPipe) body: LoginDto) {
    return this.authService.logIn(body);
  }

  @Post('/refresh')
  async refresh(@Body(ValidationPipe) body: RefreshTokenDto) {
    return this.authService.refreshToken(body.refreshToken);
  }

  @Get('/test')
  @UseGuards(AuthGuard())
  test(@GetUser() user: User) {
    console.log(user);
  }
}
