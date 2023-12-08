import { PrismaClient } from '../prisma/generated/client/index.js';
const prisma = new PrismaClient();

const main = async () => {
 const data = [{
    email: 'alice@prisma.io',
    username: 'Alice',
    password: '$2b$10$6n6x71bnWE4RNgAVThAp2uSdMugTFpfT6fYgVLlJ6wgyLRUw.ciAq',
    isAdmin: true,
  },
  {
    email: 'bob@prisma.io',
    username: 'Bob',
    password: '$2b$10$6n6x71bnWE4RNgAVThAp2uSdMugTFpfT6fYgVLlJ6wgyLRUw.ciAq',
    isAdmin: true,
    products: {
      create: [
        {
          name: 'CU',
          description: '좋은 군것질이 많아서 좋아요!',
          price: 2500,
        },
      ],
    },
  },];
  const alice = await prisma.users.upsert({
    where: { email: 'alice@prisma.io' },
    update: data[0],
    create: data[0],
  });

  const bob = await prisma.users.upsert({
    where: { email: 'bob@prisma.io' },
    update: data[1],
    create: 
      data[1],
  });

  console.log({ alice, bob });
};

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
