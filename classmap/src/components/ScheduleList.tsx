// src/components/ScheduleList.tsx

// Importa los tipos `Materia`, `Sesion` y `materiasMock` desde un archivo de datos (mock) que contiene las materias disponibles y sus sesiones.
import { type Materia, type Sesion, materiasMock } from '../data/materiasMock'; 

// Componente que renderiza una lista de materias disponibles con sus detalles y sesiones.
export function ScheduleList() {
  return (
    <div className="p-4 max-w-xl mx-auto">
      {/* Título principal de la sección */}
      <h2 className="text-2xl font-semibold mb-4">Materias Disponibles</h2>
      
      {/* Lista de materias */}
      <ul className="space-y-3">
        {materiasMock.map((materia) => ( // <--- Usa materiasMock aquí
          <li key={materia.id} className="border rounded p-3 shadow hover:shadow-md transition">
            {/* Nombre de la materia y su código, seguido del grupo */}
            <h3 className="font-bold text-lg">{materia.nombre} ({materia.codigo}) - Grupo: {materia.grupo}</h3>

            {/* Información adicional de la materia, como el profesor, el cupo, el semestre y el periodo */}
            {materia.profesor && <p><strong>Profesor:</strong> {materia.profesor}</p>}
            {materia.cupo && <p><strong>Cupo:</strong> {materia.cupo}</p>}
            {materia.semestre && <p><strong>Semestre:</strong> {materia.semestre}</p>}
            {materia.periodo && <p><strong>Periodo:</strong> {materia.periodo}</p>}
            
            {/* Si la materia tiene sesiones programadas, las muestra */}
            {materia.sesiones && materia.sesiones.length > 0 && (
              <>
                {/* Título para la sección de sesiones */}
                <h4 className="font-semibold mt-2">Sesiones:</h4>
                <ul className="list-disc ml-5">
                  {/* Renderiza las sesiones de la materia (día, hora de inicio y fin, y salón) */}
                  {materia.sesiones.map((sesion, idx) => ( 
                    <li key={`${materia.id}-${sesion.dia}-${sesion.horaInicio}-${idx}`}>
                      {sesion.dia}: {sesion.horaInicio} - {sesion.horaFin} en {sesion.salon}
                    </li>
                  ))}
                </ul>
              </>
            )}

            {/* Si no hay sesiones, muestra un mensaje indicando que no hay sesiones programadas */}
            {!materia.sesiones || materia.sesiones.length === 0 && (
                <p className="text-sm text-gray-500 italic mt-2">No hay sesiones programadas para esta materia.</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
