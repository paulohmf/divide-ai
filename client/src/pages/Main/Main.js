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

                <h1>Dashboard</h1>

                <ul className="dashboard-button-list">
                  <li><button >Adicionar amigo</button></li>
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
                  <div className="dashboard-block-border">

                    <div className="title">Você deve</div>
                    <div className="amount-owe">${24.46.toFixed(2)}</div>
                  </div>

                </div>

                <div className="dashboard-block">
                  <div className="title">Te devem</div>
                  <div className="amount-owed">${20.00.toFixed(2)}</div>

                </div>
              </section>
            </section>

            <section className="payments-section">
              <div className="owe-titles">
                <div>Você Deve</div>
                <div>Te devem</div>
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
