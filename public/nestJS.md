# How to start a NestJS project

1. Move to the directory where you want to create a project
2. Run the command `nest new project-name`
3. To create a controller run the command `nest g controller controller-name`

# How to connect to a database

1. Install typeORM `npm install @nestjs/typeorm typeorm` : it's a library that allows us to connect to a database.
2. Install setting package `npm install --save @nestjs/config` : it's a library that allows us to use environment variables.
3. Add next code to app.module.ts :

```typescript
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import config from './config/config':

ConfigModule.forRoot({
  isGlobal: true, // this will make the config module available everywhere in the app
  load: [config], // this will load the config object from config.ts
}),
  TypeOrmModule.forRootAsync({
    // this will make the typeorm module available everywhere in the app
    imports: [ConfigModule], // this will import the config module
    inject: [ConfigService], // this will inject the config service
    useFactory: (
      configService: ConfigService //this will create a factory function that will return the config object
    ) => configService.get<TypeOrmModuleOptions>('database'), // this will get the database object from the config object
  });
```

4. Createa a ormconfig.ts file with date from database :

```typescript
var dbConfig = {
  // this is the config object
  synchronize: false, // it's mean that the typeorm will not create tables automatically
  username: process.env.POSTGRES_DB_USER, // those are the environment variables
  password: process.env.POSTGRES_PASSWORD,
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT,
  database: process.env.POSTGRES_DATABASE_NAME,
  ssl: process.env.POSTGRES_SSL,

  migrations: ['migrations/*.js'], // it's mean that the typeorm will look for migrations in the migrations folder
  cli: {
    // this is the config for the typeorm cli, mean that the typeorm cli will look for migrations in the migrations folder
    migrationsDir: 'migrations',
  },
  type: 'postgres', // this is the type of the database
  entities: ['**/*.entity.js'], // this is the folder where the typeorm will look for entities
  migrationsRun: true, // it's mean that the typeorm will run migrations automatically
};

switch (
  process.env.NODE_ENV // it's mean that the typeorm will use different config for different environments
) {
  case 'development':
    Object.assign(dbConfig, {
      type: 'postgres', // this is the type of the database
      entities: ['**/*.entity.js'], // this is the folder where the typeorm will look for entities
      migrationsRun: true, // it's mean that the typeorm will run migrations automatically
      ssl: dbConfig.ssl // it's mean that the typeorm will use ssl if the ssl is true
        ? {
            rejectUnauthorized: false, // it's mean that the typeorm will not reject unauthorized connections
          }
        : false,
    });
    break;
  case 'test':
    Object.assign(dbConfig, {
      type: '',
      database: '',
      entities: ['**/*.entity.ts'],
      migrationsRun: true,
    });
    break;
  case 'production':
    Object.assign(dbConfig, {
      type: 'postgres',
      entities: ['**/*.entity.js'],
      migrationsRun: true,
      ssl: dbConfig.ssl
        ? {
            rejectUnauthorized: false,
          }
        : false,
    });
    break;
  default:
    throw new Error('unknown environment');
}

module.exports = dbConfig;
```

5. Install postgres `npm install --save pg` : it's a library that allows us to connect to a postgres database.
