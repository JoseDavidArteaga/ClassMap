// src/components/ScheduleGrid.tsx
import { materias } from '../data/materiasMock';

const diasSemana = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
const horas = Array.from({ length: 17 }, (_, i) => i + 6); // 6:00 a 22:00

function formatoHora(hora: number) {
  return `${hora.toString().padStart(2, '0')}:00`;
}

function materiaEmpiezaEnHora(materia: any, hora: number) {
  return parseInt(materia.horaInicio.split(':')[0]) === hora;
}

// 🔵 Aquí declaramos explícitamente las clases
const clasesColor = [
  'bg-blue-300',
  'bg-green-300',
  'bg-yellow-300',
  'bg-purple-300',
  'bg-pink-300',
  'bg-red-300',
  'bg-indigo-300',
  'bg-orange-300',
  'bg-emerald-300',
  'bg-teal-300',
  'bg-rose-300',
];

// 🔁 Generamos un mapeo estático entre id de materia y clase
const colorPorMateria: Record<string, string> = {};
materias.forEach((m, index) => {
  colorPorMateria[m.id] = clasesColor[index % clasesColor.length];
});

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

                if (!materia) {
                  return <td key={dia + hora} className="border border-gray-200 h-16"></td>;
                }

                if (!materiaEmpiezaEnHora(materia, hora)) return null;

                const horaInicio = parseInt(materia.horaInicio.split(':')[0]);
                const horaFin = parseInt(materia.horaFin.split(':')[0]);
                const duracion = horaFin - horaInicio;

                const claseFondo = colorPorMateria[materia.id];

                return (
                  <td
                    key={dia + hora}
                    rowSpan={duracion}
                    className={`border text-sm text-center align-top px-2 py-1 font-medium ${claseFondo}`}
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
