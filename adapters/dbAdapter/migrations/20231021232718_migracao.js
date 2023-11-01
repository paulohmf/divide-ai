/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    knex.schema
    .createTable('usuario', function (table) {
        table.increments('id').primary();
        table.string('nome');
        table.string('email').unique();
        table.string('phone').unique();
        table.timestamps(true, true);
      })
      .createTable('despesa', function (table) {
        table.increments('id').primary();
        table.string('nome');
        table.string('valor');
        table.string('status');
        table.timestamps(true, true);
      })
      .createTable('despesa_usuario', function (table) {
        table.increments('id').primary();
        table.integer('despesa_id').unsigned().references('despesa.id');
        table.integer('usuario_id').unsigned().references('usuario.id');
      });
      return knex.seed.run();
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema
      .dropTable('despesa_usuario')
      .dropTable('despesa')
      .dropTable('usuario');
  };
