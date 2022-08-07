import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseBoolPipe,
  Post,
  Put,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/decorators/get-user.decorator';
import { User } from 'src/auth/user.entity';
import { ObjectID } from 'typeorm';
import { DocsService } from './docs.service';
import { CreateDocDto } from './dtos/create-doc.dto';
import { EditDocDto } from './dtos/edit-doc.dto';

@Controller('docs')
@UseGuards(AuthGuard())
export class DocsController {
  constructor(private docService: DocsService) {}

  @Post('')
  async createDoc(
    @Body(ValidationPipe) body: CreateDocDto,
    @GetUser() user: User,
  ) {
    return this.docService.createDoc(body, user);
  }

  @Get('/')
  async getAllDocs() {
    return this.docService.getAllDocs();
  }

  @Get('/:id')
  async getDoc(@Param('id', ValidationPipe) id: ObjectID) {
    return this.docService.getDoc(id);
  }

  @Put('/:id/edit')
  async editDoc(
    @Body(ValidationPipe) body: EditDocDto,
    @Param('id', ValidationPipe) id: ObjectID,
  ) {
    return this.docService.editDoc(body, id);
  }

  @Delete('/:id/delete')
  async deleteDoc(@Param('id', ValidationPipe) id: ObjectID) {
    return this.docService.deleteDoc(id);
  }

  // @Post('/:id/like')
  // async likeOrDislikeDoc(
  //   @Param('id', ValidationPipe) id: ObjectID,
  //   @Body('isLike', ParseBoolPipe) isLike: boolean,
  // ) {
  //   return this.docService.likeOrDislikeDoc(id, isLike);
  // }
}
