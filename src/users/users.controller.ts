import {
  Controller,
  Get,
  Param,
  UseGuards,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
// import { AuthGuard } from '@nestjs/passport';
import { UsersService } from './users.service';

@Controller('/user')
@ApiBearerAuth()
@ApiTags('user')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get('/all')
  @ApiOperation({ summary: 'Find all users' })
  @ApiResponse({
    status: 200,
    description: 'The found users',
  })
  @HttpCode(HttpStatus.OK)
  async fetchUsers() {
    return await this.userService.fetchUsers();
  }

  @Get(':id')
  async fetchUser(@Param('id') id: string) {
    return await this.userService.fetchUser(id);
  }
}
