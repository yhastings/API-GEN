import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ParticipanteController } from "./controller/participante.controller";
import { Participante } from "./entity/participante.entity";
import { ParticipanteService } from "./service/participante.service";

@Module({
    imports: [TypeOrmModule.forFeature([Participante])], // Resgistrando a Model no modulo de postagem
    providers: [ParticipanteService], // Registrando o Service no modulo de postagem
    controllers: [ParticipanteController], // Resgistrando Controlador de postagem
    exports: [TypeOrmModule]
})
export class ParticipanteModule {}