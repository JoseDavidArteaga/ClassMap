// src/components/ScheduleList.tsx
import { materias } from '../data/materiasMock';

export function ScheduleList() {
  return (
    <div className="p-4 max-w-xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Materias Disponibles</h2>
      <ul className="space-y-3">
        {materias.map((materia) => (
          <li key={materia.id} className="border rounded p-3 shadow hover:shadow-md transition">
            <h3 className="font-bold text-lg">{materia.nombre} ({materia.codigo})</h3>
            <p><strong>Profesor:</strong> {materia.profesor}</p>
            <p><strong>Días:</strong> {materia.dias.join(', ')}</p>
            <p><strong>Horario:</strong> {materia.horaInicio} - {materia.horaFin}</p>
            <p><strong>Salón:</strong> {materia.salon}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
