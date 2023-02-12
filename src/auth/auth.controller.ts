import {
  Controller,
  Get,
  Post,
  Param,
  UseGuards,
  Logger,
  Body,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { Token } from './models/token.entity';
import { SingupOrLoginDto } from './dto/singup.dto';
import { RefreshTokenDto } from './dto/refresh-token.dto';
import { User } from 'src/users/models/user.entity';

@Controller('/auth')
@ApiBearerAuth()
@ApiTags('auth')
export class AuthController {
  private readonly logger = new Logger(AuthController.name);
  constructor(private readonly authService: AuthService) {}

  @Post('/signup')
  @ApiOperation({ summary: '注册' })
  async signup(@Body() data: SingupOrLoginDto): Promise<Token> {
    this.logger.log(`${data.username} 进行注册`);
    const { accessToken, refreshToken } = await this.authService.createUser(
      data
    );
    return {
      accessToken,
      refreshToken,
    };
  }

  @Post('/login')
  @ApiOperation({ summary: '登录' })
  async login(
    @Body() { username, password }: SingupOrLoginDto
  ): Promise<Token> {
    this.logger.log(`${username} 进行登录`);
    const { accessToken, refreshToken } = await this.authService.login(
      username,
      password
    );

    return {
      accessToken,
      refreshToken,
    };
  }

  @Post('/refreshToken')
  @ApiOperation({ summary: '刷新token' })
  async refreshToken(@Body() { token }: RefreshTokenDto): Promise<Token> {
    return this.authService.refreshToken(token);
  }

  @Get(':token')
  @ApiOperation({ summary: '获取登录用户信息' })
  @UseGuards(AuthGuard('jwt'))
  async user(@Param('token') token: string): Promise<User> {
    const user = await this.authService.getUserFromToken(token);
    return user;
  }
}
