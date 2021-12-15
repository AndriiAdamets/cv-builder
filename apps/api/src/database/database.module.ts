import { config } from 'dotenv';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { User } from '../users/entities/user.entity';

config();

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: process.env.DB_HOST || '127.0.0.1',
      port: Number(process.env.DB_PORT || '3306'),
      username: process.env.DB_USERNAME || 'root',
      password: process.env.DB_PASSWORD || null,
      database: 'cv_maker',
      models: [User],
    }),
  ],
  exports: [SequelizeModule],
})
export class DatabaseModule {}
