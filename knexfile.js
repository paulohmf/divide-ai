module.exports = {
    development: {
      client: 'pg', // PostgreSQL
      connection: {
        host: 'localhost',
        user: 'postgres',
        password: 'postgres',
        database: "divide_ai",
        port: 5433
      },
      migrations: {
        directory: './adapters/dbAdapter/migrations', // Crie um diretório 'migrations' para armazenar suas migrações
      },
      seeds: {
        directory: './adapters/dbAdapter/seeds', // Opcional: crie um diretório 'seeds' para dados iniciais
      },
    },
  };
