import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.user.deleteMany();
  // await prisma.qRCode.deleteMany();
  // await prisma.notice.deleteMany();

  console.log('Seeding...');

  // const user1 = await prisma.user.create({
  //   data: {
  //     wx_id: 'sdfasf',
  //     ali_id: 'sdfsdfsd',
  //     openid: 'sdfsdfsd',
  //     nickname: 'sdfsdfsd',
  //     avatar: 'sdfsdfsd',
  //     phone: 'sdfsdfsd',
  //     backup_phone: 'sdfsdfsd',
  //     enable_protect: false,
  //     enable_sms: false,
  //     enable_wechat: false,
  //     sex: 'sdfsdfsd',
  //     country: 'sdfsdfsd',
  //     province: 'sdfsdfsd',
  //     city: 'sdfsdfsd',
  //     car_number: 'sdfsdfsd',
  //     car_message: 'sdfsdfsd',
  //     status: 'sdfsdfsd',
  //     username: 'kim',
  //     password: '$2b$10$EpRnTzVlqHNP0.fUbXUwSOyuiXe/QLSUG6xNekdHgTGmrpHEfIoxm', // secret42
  //   },
  // });

  // console.log({ user1 });
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
