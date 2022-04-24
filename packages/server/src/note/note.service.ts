import { Injectable } from '@nestjs/common';
import * as fs from 'fs/promises';

@Injectable()
export class NoteService {
  async create(id: string, name: string) {
    try {
      await fs.mkdir(`./data/${id}`, { recursive: true });
    } catch (error) {
      console.log(error);
    }
  }
}
