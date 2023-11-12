import logo from './logo.svg';
import './Expenses.css';
import React,{ useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';


function Main() {
  const [groups, setGroups] = useState([]);
  useEffect(() => {
    // Mock de dados de grupos
    const mockGroups = [
      { id: 1, name: 'Cervejas', status: 'pago', value: 'R$ 12.00', group: 'Bar de quinta' },
      { id: 2, name: 'Tira gosto', status: 'pendente', value: 'R$ 12.00', group: 'Bar de quinta' },
      { id: 3, name: 'Refrigerante', status: 'pendente', value: 'R$ 12.00', group: 'Bar de quinta' },
    ];

    setGroups(mockGroups);
  }, []);


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

                <h1>Minhas despesas</h1>

                <ul className="dashboard-button-list">
                  <li><button >Criar despesa</button></li>
                </ul>

              </section>

              <section className="dashboard-bottom">
                <div className="dashboard-block">
                  <div className="title">Balanço total</div>
                  <div className={"amount " + (10 > 0 ? "positive" : "negative")}>${36.57.toFixed(2)}</div>

                </div>

                <div className="dashboard-block">
                  <div className="dashboard-block-border">

                    <div className="title">Pendentes</div>
                    <div className="amount-owe">${24.46.toFixed(2)}</div>
                  </div>

                </div>

                
              </section>
            </section>

            <section className="payments-section">
            <div className="group-list">
          <h4>Detalhes de despesas</h4>
          <ul>
            {groups.map((group) => (
              <li key={group.id}>
                {group.name} - {group.status} - {group.value} - {group.group}
              </li>
            ))}
          </ul>
        </div>
              <div className="you-owe-half">

                {/* {isEmpty(this.props.bills.you_owe) ? (

                  <div>You do not owe anything</div>
                ) : (
                  <ul>
                    {youOweUsers}

                  </ul>
                )} */}

              </div>

              <div className="you-are-owed-half">

                {/* {isEmpty(this.props.bills.you_are_owed) ? (

                  <div>You are not owed anything</div>
                ) : (
                  <ul>
                    {youAreOwedUsers}

                  </ul>
                )} */}

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
