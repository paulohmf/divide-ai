/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries

  await knex('despesa_usuario').del()
  await knex('despesa').del()
  await knex('usuario').del()
  await knex('usuario').insert([
    {id: 1, nome: 'Luis', email: 'luis@gmail.com', phone: '31993917666'},
    {id: 2, nome: 'Paulo', email: 'paulo@gmail.com', phone: '31993917667'},
    {id: 3, nome: 'Gabriela', email: 'gabriela@gmail.com', phone: '31993917668'},
    {id: 4, nome: 'Rafael', email: 'rafael@gmail.com', phone: '31993917669'}
  ]);
  await knex('despesa').insert([
    {id: 1, nome: 'cerveja', valor: '34,56', status: 'pendente'},
    {id: 2, nome: 'padaria', valor: '50,00', status: 'pago'},
    {id: 3, nome: 'gasolina', valor: '20,00', status: 'pago'}
  ]);
  await knex('despesa_usuario').insert([
    {id: 1, despesa_id: 1, usuario_id: 1},
    {id: 2, despesa_id: 1, usuario_id: 2},
    {id: 3, despesa_id: 2, usuario_id: 4},
    {id: 4, despesa_id: 3, usuario_id: 3}
  ]);
};
