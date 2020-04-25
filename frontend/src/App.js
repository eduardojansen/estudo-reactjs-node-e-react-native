import React, { useState, useEffect } from 'react';
import api from './services/api';

import './App.css';

import Header from './components/Header';

function App() {

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('projects').then( response => {
      setProjects(response.data);
    });
  }, []);

  // useState retorna um array com duas posições
  //
  // 1. Variável com o seu valor inicial
  // 1. Funcção para atualizarmos esse valor

  async function handleAddProject() {
    // projects.push(`Novo Projeto ${Date.now()}`); // Não devemos usar dessa forma no React por conta do conceito de imutabilidade
    // Copiando cada valor do array projetcs e adicionado nova informação
    // setProjects([...projects, `Novo Projeto ${Date.now()}`]);

    const response = await api.post('projects', {
      title: `Novo Projeto ${Date.now()}`,
      owner: "Eduardo Jansen"
    });

    const project = response.data;

    setProjects([...projects, project]);

  }

  return (
    <>
      <Header title="Projects" />

      <ul>
        {projects.map(project => <li key={project.id}>{project.title}</li>)}
      </ul>

      <button type="button" onClick={handleAddProject}>Add projeto</button>
    </>
  );
}

export default App;