import { AppModule } from "./app.module.js";
import { NestFactory } from "@nestjs/core";
import 'dotenv/config';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { ExpressAdapter } from '@nestjs/platform-express';
import express from 'express'; // Correct way to import express

// Define the Express server instance
const server = express();

async function bootstrap() {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  // Create the NestJS application with the Express adapter
  const app = await NestFactory.create(AppModule, new ExpressAdapter(server));

  app.enableCors(); // Enable CORS if needed for frontend-backend communication
  await app.init();
}
bootstrap();
export default server;
