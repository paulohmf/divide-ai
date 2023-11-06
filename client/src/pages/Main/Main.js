import logo from './logo.svg';
import './Main.css';
import React,{ useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';


function Main() {

//post request to create person
//   const [person, setPerson] = useState([]);

//   useEffect(() => {
//     // POST request using fetch inside useEffect React hook
//     const requestOptions = {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ name: 'Luis' })
//     };
//     fetch('/api/people/', requestOptions)
//         .then(response => response.json())
//         .then(data => setPerson(data));

// // empty dependency array means this effect will only run once (like componentDidMount in classNamees)
// }, []);

  //get all persons
  // const [persons, setPersons] = useState([]);

  //  useEffect(() => {
  //     fetch('/api/people')
  //        .then((res) => res.json())
  //        .then((data) => {
  //           console.log(data); 
  //           setPersons(data);
  //        })
  //        .catch((err) => {
  //           console.log(err);
  //           console.log(err.message);
  //        });
  //  }, []);

  const [createExpense, setCreateExpense] = useState(false);
  const handleExpense = () => {
    // Simular um processo de autenticação
    // Quando o login for bem-sucedido, defina loggedIn como true
    setCreateExpense(true);
  }
  if (createExpense) {
    return <Navigate to="/expensesRegister" />;
  }

  return (
    <div >
      <div className='header'>
        <div className="user-info">
          <div className="user-name">Nome do Usuário</div>
          <div className="user-avatar"></div>
        </div>
        <button onClick={handleExpense} type="new-item-button">Despesas</button>
      </div>
      <div className = "group-list">
        <div className="item-list">
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        </div>
      </div>
      <div className="div-button">
        <button className="summary-button">Resumo</button>
      </div>
    </div>
  );
}

export default Main;
