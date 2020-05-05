import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Listagem from './components/Listagem'
import Routes from './routes'
import './App.css'


function App() {
    const valorInicial = {
      nome: '',
      usuario: '',
      email: ''
    }
    const [aluno, setAluno] = useState(valorInicial);
    const [alunos, setAlunos] = useState([]);

    useEffect(() => {
      //populaAluno();

      function populaAluno() {
        setAluno({
          nome: 'Daniele',
          usuario: 'daniele',
          email: 'dani.leao89@gmail.com'
        })
      }
    }, []);
/*
    const alunos = [
      {id: 1, nome: 'Jose'},
      {id: 2, nome: 'manuel'},
    ];

    alunos.map(aluno => {
      //return "O aluno " + aluno.id +" tem o nome " + aluno.nome
      return `O aluno ${aluno.id} tem o nome ${aluno.nome}`
    })
*/

/*
filter

    const alunosMap = [
      {id: 1, nome: 'Jose'},
      {id: 2, nome: 'manuel'},
    ];

    alunosMap.filter(aluno => aluno.id === 1)
*/


    function handleCadastrar(e) {
      e.preventDefault();
      //console.log(aluno);
      const alunosMap = [...alunos, aluno];
        setAlunos(alunosMap);
        
        // Limpar formulário
        setAluno(valorInicial);
        //handleReadOnly(false);
    }

    function handleChange(event) {
        setAluno({
          ...aluno,
          [event.target.name]: event.target.value,
        });
    }
    
    function editarAluno(aluno) {

      setAluno({
        ...aluno,
        isEdit: true
      });
      //handleReadOnly(true);
    }

    function editarNovoAluno() {
      //console.log(aluno);
      const indexAluno = alunos.findIndex(a => a.email === aluno.email);

      alunos[indexAluno] = aluno;
      setAlunos([...alunos]);

      // Limpar formulário
      setAluno(valorInicial);
      //handleReadOnly(false);
    }

    function handleReadOnly(newValue) {
      document.getElementById("cadButton").disabled = newValue;
      document.getElementsByName("email")[0].readOnly = newValue;
    }

    return (
      <BrowserRouter>
        <form className="formulario" onSubmit={handleCadastrar}>
          <h3>Cadastro de Aluno</h3>
          <div className="row">
            <span>Nome</span>
            <input 
              type="text"
              value={aluno.nome}
              name="nome"
              onChange={handleChange}/>
          </div>

          <div className="row">
            <span>Usuário</span>
            <input
              type="text"
              value={aluno.usuario}
              name="usuario"
              onChange={handleChange}/>
          </div>

          <div className="row">
            <span>E-mail</span>
            <input
              type="text"
              value={aluno.email}
              name="email"
              //readOnly={aluno.email !== '' ? true : false}
              readOnly={aluno.isEdit}
              onChange={handleChange}/>
          </div>

          {aluno.isEdit &&
          <h3>Esse aluno está sendo editado</h3>
          }
          <div className="row">
            {!aluno.isEdit === true ? (
              <button id="cadButton">Cadastrar</button>
            ) : (
              <button type="button" onClick={editarNovoAluno}>
                Editar
              </button>
            )}
          </div>
        </form>

        <hr />
        <h2>Listagem de alunos</h2>

        <ul>
          {alunos.map((aluno) => (
            <div key={aluno.email}>
            <Listagem item={aluno} />
            <button onClick={() => editarAluno(aluno)}>Editar Aluno</button>
            </div>
          ))}
        </ul>
        <Routes />
        </BrowserRouter>
    )
}

export default App;
