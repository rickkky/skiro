import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { mkdir } from 'fs/promises';

@Injectable()
export class NoteService {
  constructor(private configService: ConfigService) {}

  async create(id: string, name: string) {
    const workspacePath = this.configService.get<string>('WORKSPACE_PATH');
    const noteFolder = this.configService.get<string>('NOTE_FOLDER');
    await mkdir(`${workspacePath}/${noteFolder}/${id}`);
  }
}
