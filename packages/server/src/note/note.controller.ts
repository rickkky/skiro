import {
  Body,
  Controller,
  InternalServerErrorException,
  Post,
} from '@nestjs/common';
import { CreateNoteDto } from './dto/create-note.dto';
import { NoteService } from './note.service';

@Controller('note')
export class NoteController {
  constructor(private noteService: NoteService) {}

  @Post('/create')
  async create(@Body() dto: CreateNoteDto) {
    const name = dto.name;
    const id = dto.id || name;
    try {
      await this.noteService.create(id, name);
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
    return 'success';
  }
}
