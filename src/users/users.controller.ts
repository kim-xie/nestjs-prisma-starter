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
  @ApiOperation({ summary: '分页查询用户列表' })
  @ApiResponse({
    status: 200,
    description: 'success',
  })
  @HttpCode(HttpStatus.OK)
  async fetchUsers() {
    return await this.userService.fetchUsers();
  }

  @Get(':id')
  @ApiOperation({ summary: '根据id查询用户详情' })
  @ApiResponse({
    status: 200,
    description: 'success',
  })
  @HttpCode(HttpStatus.OK)
  async fetchUser(@Param('id') id: string) {
    return await this.userService.fetchUser(id);
  }
}
