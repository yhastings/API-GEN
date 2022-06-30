import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Participante {
  @PrimaryGeneratedColumn('uuid')
  @ApiProperty()
  id: string;

  @Column({name: 'nome', length: 255})
  @ApiProperty()
  nome: string;

  @Column({name: 'data_nascimento', type: 'timestamp'})
  @ApiProperty()
  dataNascimento: Date;

  @Column({name: 'periodo',  length: 255})
  @ApiProperty()
  periodo: string;

  @Column({name: 'tipo_curso', length: 255})
  @ApiProperty()
  tipoCurso: string;

  @CreateDateColumn({name: 'data_cadastro'})
  @ApiProperty()
  dataCadastro: string;
}