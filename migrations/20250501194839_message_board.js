/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("message_board", function (table) {
    table.increments("id").primary();
    table.text("text").notNullable();
    table.string("user").notNullable();
    table.timestamp("date").defaultTo(knex.fn.now());
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("message_board");
};
