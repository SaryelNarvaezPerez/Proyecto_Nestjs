import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Tipo } from "../../tipo/entities/tipo.entity";
import { DocenteAsesor } from "src/docente-asesor/entities/docente-asesor.entity";
import { DocenteFormacion } from "src/docente-formacion/entities/docente-formacion.entity";
import { DocenteTutor } from "src/docente-tutor/entities/docente-tutor.entity";
import { Grado } from "src/grado/entities/grado.entity";

@Entity()
export class Actividad {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    tema: string;

    @Column()
    fecha: Date;

    @Column({ type: 'datetime' })
    horaInicio: Date;

    @Column({ type: 'datetime' })
    horaFin: Date;

    @Column()
    noHoras: number;

    @OneToOne(type => Grado)
    @JoinColumn({ name: "grado_grupo_id" })
    gradoGrupo: Grado;

    @ManyToOne(type => DocenteFormacion)
    @JoinColumn({ name: "docente_formacion_id" })
    docenteFormacion: DocenteFormacion;

    @ManyToOne(type => DocenteTutor)
    @JoinColumn({ name: "docente_tutor_id" })
    docenteTutor: DocenteTutor;

    @ManyToOne(type => DocenteAsesor)
    @JoinColumn({ name: "docente_asesor_id" })
    docenteAsesor: DocenteAsesor;

    @OneToOne(type => Tipo)
    @JoinColumn({ name: "tipo_id" })
    tipo: Tipo;
}