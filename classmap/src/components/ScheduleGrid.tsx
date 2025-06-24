// src/components/ScheduleGrid.tsx
import { materias } from '../data/materiasMock';

const diasSemana = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
const horas = Array.from({ length: 17 }, (_, i) => i + 6); // 6:00 a 22:00

// Asignar un color diferente a cada materia
const materiaColores = [
  'bg-blue-200',
  'bg-green-200',
  'bg-yellow-200',
  'bg-purple-200',
  'bg-pink-200',
  'bg-red-200',
  'bg-indigo-200',
];

// Mapea ID de materia a color para consistencia
const colorPorMateria: Record<string, string> = {};
materias.forEach((m, i) => {
  colorPorMateria[m.id] = materiaColores[i % materiaColores.length];
});

function formatoHora(hora: number) {
  return `${hora.toString().padStart(2, '0')}:00`;
}

// Evita que se repita el bloque cuando ocupa varias celdas
function materiaEmpiezaEnHora(materia: any, hora: number) {
  return parseInt(materia.horaInicio.split(':')[0]) === hora;
}

export function ScheduleGrid() {
  return (
    <div className="overflow-x-auto">
      <table className="table-fixed border-collapse w-full">
        <thead>
          <tr>
            <th className="w-20 border border-gray-300 bg-gray-100"></th>
            {diasSemana.map((dia) => (
              <th key={dia} className="border border-gray-300 bg-gray-100 px-2 py-1 text-sm">
                {dia}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {horas.map((hora) => (
            <tr key={hora}>
              <td className="border border-gray-300 bg-gray-50 text-xs text-center">
                {formatoHora(hora)}
              </td>
              {diasSemana.map((dia) => {
                const materia = materias.find((m) =>
                  m.dias.includes(dia) &&
                  parseInt(m.horaInicio.split(':')[0]) <= hora &&
                  parseInt(m.horaFin.split(':')[0]) > hora
                );

                // Si no hay materia, celda vacía
                if (!materia) {
                  return <td key={dia + hora} className="border border-gray-200 h-16"></td>;
                }

                // Si ya fue renderizada en una fila anterior (parte de un rowspan), omitimos esta celda
                if (!materiaEmpiezaEnHora(materia, hora)) return null;

                const horaInicio = parseInt(materia.horaInicio.split(':')[0]);
                const horaFin = parseInt(materia.horaFin.split(':')[0]);
                const duracion = horaFin - horaInicio;

                return (
                  <td
                    key={dia + hora}
                    rowSpan={duracion}
                    className={`border text-sm text-center align-top px-2 py-1 ${colorPorMateria[materia.id]} font-medium`}
                  >
                    <div>{materia.nombre}</div>
                    <div className="text-xs text-gray-700">{materia.salon}</div>
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
