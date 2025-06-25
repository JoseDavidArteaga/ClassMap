// src/components/ScheduleGrid.tsx
import { type Materia, type Sesion, materiasMock } from '../data/materiasMock';

// Lista de días de la semana, que serán utilizados como cabeceras de las columnas en la tabla
const diasSemana = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

// Lista de horas del día (de 6:00 a 22:00)
const horas = Array.from({ length: 17 }, (_, i) => i + 6); // 6:00 a 22:00

// Lista de colores asignados a las materias para diferenciarlas visualmente
const colores = [
  'bg-blue-300 text-blue-900',
  'bg-green-300 text-green-900',
  'bg-yellow-300 text-yellow-900',
  'bg-purple-300 text-purple-900',
  'bg-pink-300 text-pink-900',
  'bg-red-300 text-red-900',
  'bg-indigo-300 text-indigo-900',
  'bg-orange-300 text-orange-900',
  'bg-emerald-300 text-emerald-900',
  'bg-teal-300 text-teal-900',
  'bg-cyan-300 text-cyan-900',
  'bg-lime-300 text-lime-900',
  'bg-rose-300 text-rose-900',
  'bg-violet-300 text-violet-900',
  'bg-fuchsia-300 text-fuchsia-900',
  'bg-gray-300 text-gray-900',
  'bg-sky-300 text-sky-900',
  'bg-stone-300 text-stone-900',
  'bg-amber-300 text-amber-900',
];


// Objeto que almacena el color asignado a cada materia según su código
const colorPorCodigo: Record<string, string> = {};
let colorIndex = 0;

// Asignación de un color único a cada materia
materiasMock.forEach((materia) => {
  // Si aún no se ha asignado color a esta materia, lo hacemos con el siguiente color de la lista
  if (!colorPorCodigo[materia.codigo]) {
    colorPorCodigo[materia.codigo] = colores[colorIndex % colores.length];
    colorIndex++;
  }
});

// Función que da formato a la hora (de 6 a 22) en el formato "HH:00"
function formatoHora(h: number) {
  return `${h.toString().padStart(2, '0')}:00`;
}

// Componente principal que renderiza la tabla con el horario
export function ScheduleGrid() {
  // Conjunto que mantiene las celdas ocupadas para evitar que se superpongan las clases
  const celdasOcupadas = new Set<string>();

  return (
    <div className="overflow-x-auto p-4 bg-gray-50 min-h-screen">
      {/* Tabla que muestra el horario */}
      <table className="table-fixed border-collapse w-full bg-white shadow rounded">
        <thead>
          <tr>
            {/* Columna vacía para las horas */}
            <th className="w-20 bg-gray-100 border p-2"></th>
            {/* Cabecera con los días de la semana */}
            {diasSemana.map((dia) => (
              <th key={dia} className="bg-gray-100 border p-2 text-sm font-medium">{dia}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {/* Filas de la tabla para cada hora */}
          {horas.map((hora) => (
            <tr key={hora}>
              {/* Columna de la hora */}
              <td className="border bg-gray-50 text-xs text-center font-medium">{formatoHora(hora)}</td>
              {/* Celdas correspondientes a cada día */}
              {diasSemana.map((dia) => {
                // Clave única para cada celda en función del día y la hora
                const cellKey = `${dia}-${hora}`;
                // Si la celda ya está ocupada, no la renderizamos
                if (celdasOcupadas.has(cellKey)) return null;

                let foundMateria: Materia | undefined;
                let foundSesion: Sesion | undefined;

                // Buscamos si hay una materia y sesión correspondiente a esta hora y día
                for (const materia of materiasMock) {
                  const sesion = materia.sesiones.find(s =>
                    s.dia === dia &&
                    parseInt(s.horaInicio.split(':')[0]) === hora
                  );
                  if (sesion) {
                    foundMateria = materia;
                    foundSesion = sesion;
                    break;
                  }
                }

                // Si no se encuentra una sesión, devolvemos una celda vacía
                if (!foundMateria || !foundSesion) {
                  return <td key={cellKey} className="border h-16"></td>;
                }

                // Calculamos la duración de la sesión
                const horaInicio = parseInt(foundSesion.horaInicio.split(':')[0]);
                const horaFin = parseInt(foundSesion.horaFin.split(':')[0]);
                const duracion = horaFin - horaInicio;

                // Marcar las celdas que serán ocupadas por esta materia
                for (let i = 0; i < duracion; i++) {
                  celdasOcupadas.add(`${dia}-${hora + i}`);
                }

                // Renderizamos la celda con la información de la materia
                return (
                  <td
                    key={cellKey}
                    rowSpan={duracion}  // Esta celda ocupa varias filas si la sesión dura más de una hora
                    className={`border p-2 text-sm align-top text-center ${colorPorCodigo[foundMateria.codigo]}`}
                  >
                    {/* Información de la materia */}
                    <div className="font-semibold">{foundMateria.nombre}</div>
                    <div className="text-xs">{foundSesion.salon}</div>
                    <div className="text-xs italic">{foundMateria.profesor}</div>
                    <div className="text-xs">{foundMateria.grupo}</div>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
