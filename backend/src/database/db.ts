import { PrismaClient, Prisma } from 'generated/prisma';
import { env } from '@/common/utils/envConfig';

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: env.DATABASE_URL, // Override the default DATABASE_URL here
    },
  },
  transactionOptions: {
    isolationLevel: Prisma.TransactionIsolationLevel.Serializable,
    maxWait: 5000, // default: 2000
    timeout: 10000, // default: 5000
  },
  omit: {
    // user: {
      // password: true, // Omit sensitive fields like password
    // },
  },
})

export default prisma
