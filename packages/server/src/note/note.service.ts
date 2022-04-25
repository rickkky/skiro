import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { mkdir } from 'fs/promises';

@Injectable()
export class NoteService {
  constructor(private configService: ConfigService) {}

  async create(id: string, name: string) {
    const workspace = this.configService.get<string>('WORKSPACE');
    try {
      await mkdir(`${workspace}/${id}`);
    } catch (error) {
      console.log(error);
    }
  }
}
