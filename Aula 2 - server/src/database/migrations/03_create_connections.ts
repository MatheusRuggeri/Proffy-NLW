import Knex from 'knex'

// Faz alterações
export async function up(knex: Knex) {
    return knex.schema.createTable('connections', table => {
        table.increments('id').primary();

        table.integer('user_id').notNullable().references('id').inTable('users').onUpdate('CASCADE').onDelete('CASCADE');

        table.timestamp('create_at').defaultTo(knex.raw('CURRENT_TIMESTAMP')).notNullable();
    })
}

// Desfaz alterações
export async function down(knex: Knex) {
    return knex.schema.dropTable('connections')
}