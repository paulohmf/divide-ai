-- Create Person table
CREATE TABLE Person (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

-- Create Team table
CREATE TABLE Team (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

-- Create Expense table
CREATE TABLE Expense (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    split FLOAT[] DEFAULT ARRAY[]::FLOAT[],
    category VARCHAR(50),
    status VARCHAR(20),
    description TEXT,
    teamId INTEGER REFERENCES Team(id) ON DELETE CASCADE
);

-- Create join table for Person and Team
CREATE TABLE PersonTeam (
    personId INTEGER REFERENCES Person(id) ON DELETE CASCADE,
    teamId INTEGER REFERENCES Team(id) ON DELETE CASCADE,
    PRIMARY KEY (personId, teamId)
);

-- Create join table for Expense and Person
CREATE TABLE ExpensePerson (
    expenseId INTEGER REFERENCES Expense(id) ON DELETE CASCADE,
    personId INTEGER REFERENCES Person(id) ON DELETE CASCADE,
    PRIMARY KEY (expenseId, personId)
);