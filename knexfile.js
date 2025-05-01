// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./dev.sqlite3", // SQLite database file for development
    },
    useNullAsDefault: true, // SQLite-specific option to avoid warnings
  },

  staging: {
    client: "postgresql",
    connection: {
      database: "message_board", // Use the database you created (e.g., message_board)
      user: "douglasmnegri", // Replace with your PostgreSQL username
      password: "pwd", // Replace with your PostgreSQL password
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },

  production: {
    client: "postgresql",
    connection: {
      database: "message_board", 
      user: "douglasmnegri", 
      password: "pwd", 
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
