import { Body, Controller, Post } from '@nestjs/common';
import { CreateNoteDto } from './dto/create-note.dto';

@Controller('note')
export class NoteController {
  @Post()
  create(@Body() dto: CreateNoteDto) {
    const name = dto.name;
    const id = dto.id || name;
  }
}
