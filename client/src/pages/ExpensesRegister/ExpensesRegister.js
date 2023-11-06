import React, { useEffect, useState } from 'react';


function Expenses() {

      //get expenses
  const [expenses, setExpenses] = useState([]);

   useEffect(() => {
      fetch('/api/expenses')
         .then((res) => res.json())
         .then((data) => {
            console.log(data); 
            setExpenses(data);
         })
         .catch((err) => {
            console.log(err);
            console.log(err.message);
         });
   }, []);
   
   const handleNewExpense = () => {
    // Handle new expense creation here
};
    return (
        <div>
            <h1>Expenses</h1>
            <button onClick={handleNewExpense}>Create New Expense</button>
            <ul>
                {expenses.map((expense, index) => (
                    <li key={index}>
                        {/* Replace 'expenseField' with actual expense object fields */}
                        <h2>{expense.name} </h2>
                        <h3>Grupo da despesa: {expense.Team.name} </h3>
                        <h3>Valor: R$ {expense.price}</h3>

                        {expense.People.map( (person, personIndex) => (
                            <li key={personIndex}>
                                <h4>{person.name}: R$ {person.ExpensePerson.share}</h4>
                            </li>

                        ))}
                    </li>

                    
                ))}
            </ul>
        </div>
    );
}

export default Expenses;