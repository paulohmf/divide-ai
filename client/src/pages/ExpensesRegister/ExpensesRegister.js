import React, { useEffect, useState } from 'react';


function Expenses() {

      //get expenses
  const [expenses, setExpenses] = useState([]);
  const [newExpense, setNewExpense] = useState({
    name: '',
    teamName: '',
    price: '',
    // Add other fields as necessary
});
const [showForm, setShowForm] = useState(false);


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

   const handleInputChange = (event) => {
    setNewExpense({
        ...newExpense,
        [event.target.name]: event.target.value
    });
};

   const handleNewExpense = () => {

    fetch('/api/expenses', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newExpense),
    })
    .then((response) => response.json())
    .then((data) => {
        setExpenses([...expenses, data]);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
};
    return (
        <div>
            <h1>Despesas</h1>
            {!showForm && (<button onClick={() => setShowForm(!showForm)}>Criar nova despesa</button>)}
            {showForm && (
                <form onSubmit={handleNewExpense}>
                    <input type="text" name="name" value={newExpense.name} onChange={handleInputChange} placeholder="Name" />
                    <input type="text" name="teamName" value={newExpense.teamName} onChange={handleInputChange} placeholder="Team Name" />
                    <input type="number" name="price" value={newExpense.price} onChange={handleInputChange} placeholder="Price" />
                    {/* Add other fields as necessary */}
                    <button type="submit">Submit</button>
                </form>
            )}
            <ul>
                {expenses.map((expense, index) => (
                    <li key={index}>
                        {/* Replace 'expenseField' with actual expense object fields */}
                        <h2>{expense.name} </h2>
                        <h3>Grupo da despesa: {expense.Team.name} </h3>
                        <h3>Valor: R$ {expense.price}</h3>

                        <h3>Pessoas:</h3>
                        {expense.People.map( (person, personIndex) => (
                            <li key={personIndex}>
                                <span>{person.name}: R$ {person.ExpensePerson.share}</span>
                            </li>

                        ))}
                    </li>

                    
                ))}
            </ul>
        </div>
    );
}

export default Expenses;