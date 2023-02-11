import { PrismaService } from 'nestjs-prisma';
import { Injectable } from '@nestjs/common';
import { PasswordService } from 'src/auth/password.service';

@Injectable()
export class UsersService {
  constructor(
    private prisma: PrismaService,
    private passwordService: PasswordService
  ) {}

  // 查询所有用户
  fetchUsers() {
    return this.prisma.user.findMany();
  }

  // 查询用户详情
  fetchUser(userId: string) {
    return this.prisma.user.findUnique({
      where: {
        id: userId,
      },
    });
  }

  // 创建用户
  createUser(newUserData: any) {
    return this.prisma.user.create({
      data: newUserData,
    });
  }

  // 更新用户
  updateUser(userId: string, newUserData: any) {
    return this.prisma.user.update({
      data: newUserData,
      where: {
        id: userId,
      },
    });
  }
}
