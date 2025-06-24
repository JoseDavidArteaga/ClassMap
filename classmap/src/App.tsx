import { useState } from 'react'
import { ScheduleList } from './components/ScheduleList';
import { ScheduleGrid } from './components/ScheduleGrid';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div>
      <header className="text-center p-8 bg-blue-100">
        <h1 className="text-4xl font-bold text-blue-700">ClassMap</h1>
        <p className="mt-2 text-blue-600">Visualiza tus horarios universitarios fácilmente</p>
      </header>

      <main className="p-4">
        <ScheduleGrid />
      </main>
    </div>
  );
}

export default App
