export type Materia = {
  id: string           // OIDMATERIA-GRUPO
  oid: string          // OIDMATERIA
  codigo: string       // COD_MATERIA
  nombre: string       // MATERIA
  grupo: string        // GRUPO
  profesor: string     // DOCENTES
  cupo: number         // CUPO
  semestre: number     // SEM
  programa: string     // PROG
  departamento: string // Dpto
  periodo: string      // PER
  sesiones: Sesion[]   // sesiones por día
}

export type Sesion = {
  dia: string          // "Lunes", etc.
  horaInicio: string   // "07:00"
  horaFin: string      // "09:00"
  salon: string        // "Salón 221-FIET"
}


export const materiasMock: Materia[] = [
  // Lunes: Materia de 1 hora (7:00 - 8:00)
  {
    id: "MAT-LUNES-A", oid: "MLUNES", codigo: "MLN", nombre: "Materia del Lunes", grupo: "A",
    profesor: "Prof. Lunes", cupo: 25, semestre: 1, programa: "GEN", departamento: "DEP", periodo: "2023.2",
    sesiones: [{ dia: "Lunes", horaInicio: "07:00", horaFin: "10:00", salon: "Aula L" }]
  },

  // Martes: Materia de 1 hora (09:00 - 10:00)
  {
    id: "MAT-MARTES-B", oid: "MMARTES", codigo: "MRT", nombre: "Materia del Martes", grupo: "B",
    profesor: "Prof. Martes", cupo: 25, semestre: 1, programa: "GEN", departamento: "DEP", periodo: "2023.2",
    sesiones: [{ dia: "Martes", horaInicio: "08:00", horaFin: "09:00", salon: "Aula M" }]
  },

  // Miércoles: Materia de 1 hora (10:00 - 11:00)
  {
    id: "MAT-MIERCOLES-C", oid: "MMIERC", codigo: "MRC", nombre: "Materia del Miércoles", grupo: "C",
    profesor: "Prof. Miércoles", cupo: 25, semestre: 1, programa: "GEN", departamento: "DEP", periodo: "2023.2",
    sesiones: [{ dia: "Miércoles", horaInicio: "10:00", horaFin: "11:00", salon: "Aula X" }]
  },

  // Jueves: Materia de 1 hora (11:00 - 12:00)
  {
    id: "MAT-JUEVES-D", oid: "MJUEVES", codigo: "JVS", nombre: "Materia del Jueves", grupo: "D",
    profesor: "Prof. Jueves", cupo: 25, semestre: 1, programa: "GEN", departamento: "DEP", periodo: "2023.2",
    sesiones: [{ dia: "Jueves", horaInicio: "11:00", horaFin: "12:00", salon: "Aula J" }]
  },

  // Viernes: Materia de 1 hora (12:00 - 13:00)
  {
    id: "MAT-VIERNES-E", oid: "MVIERNES", codigo: "VRN", nombre: "Materia del Viernes", grupo: "E",
    profesor: "Prof. Viernes", cupo: 25, semestre: 1, programa: "GEN", departamento: "DEP", periodo: "2023.2",
    sesiones: [{ dia: "Viernes", horaInicio: "12:00", horaFin: "13:00", salon: "Aula V" }]
  },

  // Sábado: Materia de 1 hora (13:00 - 14:00)
  {
    id: "MAT-SABADO-F", oid: "MSABADO", codigo: "SBD", nombre: "Materia del Sábado", grupo: "F",
    profesor: "Prof. Sábado", cupo: 25, semestre: 1, programa: "GEN", departamento: "DEP", periodo: "2023.2",
    sesiones: [{ dia: "Sábado", horaInicio: "13:00", horaFin: "14:00", salon: "Aula S" }]
  },

  // Domingo: Materia de 1 hora (14:00 - 15:00)
  {
    id: "MAT-DOMINGO-G", oid: "MDOMINGO", codigo: "DGO", nombre: "Materia del Domingo", grupo: "G",
    profesor: "Prof. Domingo", cupo: 25, semestre: 1, programa: "GEN", departamento: "DEP", periodo: "2023.2",
    sesiones: [{ dia: "Domingo", horaInicio: "14:00", horaFin: "15:00", salon: "Aula D" }]
  },
];