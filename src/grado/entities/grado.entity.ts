import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Institucion } from '../../institucion/entities/institucion.entity';
import { Curso } from "src/curso/entities/curso.entity";

@Entity()
export class Grado {
   @PrimaryGeneratedColumn()
   id: number;
    
   @Column()
   descripcion: number;

   @ManyToMany(() => Curso)
   @JoinTable()
   cursos: Curso[];
    
   @ManyToMany(() => Institucion)
   @JoinTable()
   institucion: Institucion[];
}