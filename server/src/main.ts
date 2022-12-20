import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import * as graphqlUploadExpress from "graphql-upload/graphqlUploadExpress.js";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(graphqlUploadExpress({ maxFileSize: 2 * 1024 * 1024, maxFiles: 1 }));
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    })
  );
  await app.listen(3333);
}
bootstrap();