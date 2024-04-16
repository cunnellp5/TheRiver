import { PrismaClient } from '@prisma/client';
import * as postsQueries from './queries/posts';

const db = new PrismaClient();

export { db, postsQueries };
