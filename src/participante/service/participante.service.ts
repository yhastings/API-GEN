//Documentação: https://docs.nestjs.com/techniques/database#repository-pattern

import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import * as moment from 'moment';
import { Like, Repository } from "typeorm";
import { Participante } from "../entity/participante.entity";

@Injectable()
export class ParticipanteService {
    constructor(
        @InjectRepository(Participante)
        private participanteRepository: Repository<Participante>
    ) { }

    async findAll(): Promise<Participante[]> {
        return await this.participanteRepository.find();
    }

    async findOneById(id: string): Promise<Participante> {

        let post = await this.participanteRepository.findOne({
            where: {
            }
        });

        if (!post)
            throw new HttpException('Usuario não existe', HttpStatus.BAD_REQUEST);

        return post;
    }

    async findOneByTitulo(nome: string): Promise<Participante[]> {
        return await this.participanteRepository.find({
            where: {
                nome: Like(`%${nome}%`)
            }
        });
       
    }

    async create(participante: Participante): Promise<Participante> {
        //Colocar a logica para aceitar apenas maiores de 18 anos

         const idade = moment().diff(moment(participante.dataNascimento, 'YYYY-MM-DD'), 'years')

        if(idade <= 18) {
            throw new HttpException('Voce não possui a idade necessaria', HttpStatus.BAD_REQUEST);
        }

        
        return await this.participanteRepository.save(participante);
    }

    async update(participante: Participante): Promise<Participante> {
        const idade = moment().diff(moment(participante.dataNascimento, 'YYYY-MM-DD'), 'years')

        if(idade <= 18) {
            throw new HttpException('Voce não possui a idade necessaria', HttpStatus.BAD_REQUEST);
        }

        let post = this.findOneById(participante.id);
       
        return await this.participanteRepository.save(participante);
    }

    async remove(id: string): Promise<void> {
        let post = this.findOneById(id);
        await this.participanteRepository.delete(id);
    }
}