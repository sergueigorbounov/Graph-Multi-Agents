import { Module } from "@nestjs/common";
import { AppService } from './app.service.js';
import { AppController } from './app.controller.js';
import { ServeStaticModule } from '@nestjs/serve-static';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Get the equivalent of `__dirname`
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
@Module({
  imports: [ServeStaticModule.forRoot({
    rootPath: join(__dirname, '..', 'public'), // Adjust the path if needed
  }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
