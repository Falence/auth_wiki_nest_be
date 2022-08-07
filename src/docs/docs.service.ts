import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/auth/user.entity';
import { MongoRepository, ObjectID } from 'typeorm';
import { CreateDocDto } from './dtos/create-doc.dto';
import { EditDocDto } from './dtos/edit-doc.dto';
import { Doc } from './entities/doc.entity';

@Injectable()
export class DocsService {
  constructor(
    @InjectRepository(Doc)
    private repository: MongoRepository<Doc>,
  ) {}

  async createDoc(dto: CreateDocDto, user: User): Promise<Doc> {
    delete user.password;
    let doc = new Doc(dto.title, dto.description, user, dto.blocks);
    doc = await this.repository.save(doc);
    return doc;
  }

  async getAllDocs(): Promise<Doc[]> {
    const docs = await this.repository.find();
    return docs;
  }

  async getDoc(id: ObjectID): Promise<Doc> {
    let doc;
    try {
      doc = await this.repository.findOneBy(id);
    } catch (error) {
      throw new HttpException('Doc not found', HttpStatus.NOT_FOUND);
    }
    if (!doc) {
      throw new HttpException('Doc not found', HttpStatus.NOT_FOUND);
    }
    return doc;
  }

  async editDoc(dto: EditDocDto, id: ObjectID): Promise<Doc> {
    const doc = await this.getDoc(id);
    doc.title = dto.title;
    doc.description = dto.description;
    doc.blocks = dto.blocks;
    await this.repository.update(id, doc);
    return await this.getDoc(id);
  }

  async deleteDoc(id: ObjectID): Promise<void> {
    const doc = await this.getDoc(id);
    await this.repository.delete(id);
    return;
  }

  // async likeOrDislikeDoc(id: ObjectID, isLike: boolean): Promise<void> {
  //   const doc = await this.getDoc(id);
  //   if (isLike === true) {
  //     doc.likes += 1;
  //   } else if (isLike === false) {
  //     doc.dislikes += 1;
  //   }
  //   await this.repository.update(id, doc);
  //   return;
  // }
}
