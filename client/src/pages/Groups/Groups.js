import logo from './logo.svg';
import './Groups.css';
import React,{ useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';


function Main() {
  const [groups, setGroups] = useState([]);
  useEffect(() => {
    // Mock de dados de grupos
    const mockGroups = [
      { id: 1, name: 'Bar de quinta', status: 'Despesas pendentes' },
      { id: 2, name: 'Viagem', status: 'Pago' },
      { id: 3, name: 'Clube', status: 'Pago' },
    ];

    setGroups(mockGroups);
  }, []);


  const [seeExpense, setSeeExpense] = useState(false);

  const [createExpense, setCreateExpense] = useState(false);
  const handleClick = () => {
    // Simular um processo de autenticação
    // Quando o login for bem-sucedido, defina loggedIn como true
    setCreateExpense(true);
  }
  if (createExpense) {
    return <Navigate to="/groups" />;
  }
  const handleClickExpenses = () => {
    // Simular um processo de autenticação
    // Quando o login for bem-sucedido, defina loggedIn como true
    setSeeExpense(true);
  }
  if (createExpense) {
    return <Navigate to="/expenses" />;
  }

  return (
    // <div >
    //   <div className='header'>
    //     <div className="user-info">
    //       <div className="user-name">Luís</div>
    //       <div className="user-avatar"></div>
    //     </div>
    //     <button onClick={handleExpense} type="new-item-button">Despesas</button>
    //   </div>
    //   <div className = "group-list">
    //     <div className="item-list">
    //       <h4>Grupos de despesa</h4>
    //       <ul>
    //         <li>Padaria - Despesas pendentes</li>
    //         <li>Viagem - Pago</li>
    //         <li>Clube - Pago</li>
    //       </ul>
    //     </div>
    //   </div>
    //   <div className="div-button">
    //     <button className="summary-button">Resumo</button>
    //   </div>
    // </div>

    <div>
        <div className="header-background-dashboard group">

          <header className="header-dashboard">
            <h1 className="header-logo-dashboard">Divide aí</h1>
              <div className="header-list-center">
                <ul className="header-list-dashboard">
                  <li className="nav-button-logout" >Log Out</li>
                  <li><div className="profile-pic-header"></div></li>
                  {/* <li>{this.props.currentUser.username}</li> */}
                </ul>
              </div>
          </header>

        </div>
        <div className="dashboard-center-container">

          <div className="dashboard-left">

            {/* <FriendsContainer closeModal={this.closeFriendModal} isModalOpen={this.state.friendModalOpen} openModal ={this.openFriendModal}/> */}

          </div>

          <div className="dashboard-center">

            {/* <SettleFormContainer closeModal={this.closeSettleModal} isModalOpen={this.state.settleModalOpen}/> */}

            <section className="dashboard-top-section">
              <section className="dashboard-top">

                <h1>Lista de grupos</h1>

                <ul className="dashboard-button-list">
                  <li><button >Adicionar pessoa</button></li>
                  <li><button >Criar despesa</button></li>
                  <li><button >Quitar Dívida</button></li>
                </ul>

              </section>

              <section className="dashboard-bottom">
                <div className="dashboard-block">
                  <div className="title">Balanço total</div>
                  <div className={"amount " + (10 > 0 ? "positive" : "negative")}>${36.57.toFixed(2)}</div>

                </div>

                <div className="dashboard-block">
                  <div className="dashboard-block">

                    <div className="title">Minhas despesas</div>
                    <div onClick={handleClick}  className="amount-owe">${24.46.toFixed(2)}</div>
                  </div>

                </div>

              </section>
            </section>

            <section className="payments-section">
        <div className="group-list">
          <h4>Grupos de despesa</h4>
          <ul>
            {groups.map((group) => (
              <li onClick={handleClickExpenses}  key={group.id}>
                {group.name} - {group.status}
              </li>
            ))}
          </ul>
        </div>
      </section>

          </div>

          <div className="dashboard-right">

          </div>




          <div>

            {/* <BillFormContainer closeModal={this.closeBillModal} isModalOpen={this.state.billModalOpen} /> */}
          </div>
        </div>
      </div>
    
  );
}

export default Main;
