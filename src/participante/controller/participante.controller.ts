import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put} from "@nestjs/common";
import { ApiBody, ApiTags } from "@nestjs/swagger";
import { Participante } from "../entity/participante.entity";
import { ParticipanteService } from "../service/participante.service";

@ApiTags('Participante')
@Controller("/Participante")
export class ParticipanteController {
  constructor(private readonly service: ParticipanteService) { }

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<Participante[]> {
    return this.service.findAll();
  }

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  findById(@Param('id') id: string): Promise<Participante> {
    return this.service.findOneById(id);
  }

  @Get('/firstname/:firstname')
  @HttpCode(HttpStatus.OK)
  findByTitulo(@Param('firstname') firstname: string): Promise<Participante[]> {
    return this.service.findOneByTitulo(firstname);
  }

  @ApiBody({ type: Participante })
  @Post()
  @HttpCode(HttpStatus.CREATED)
  post(@Body() part: Participante): Promise<Participante> {
    return this.service.create(part);
  }

  @ApiBody({ type: Participante })
  @Put()
  @HttpCode(HttpStatus.OK)
  put(@Body() part: Participante): Promise<Participante> {
    return this.service.update(part);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id') id: string) {
    this.service.remove(id);
  }
}