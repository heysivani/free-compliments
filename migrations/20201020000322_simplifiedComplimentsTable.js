exports.up = function(knex) {
    return knex.schema.createTable("compliments", function (table) {
        table.increments("id");
        table.string("message");
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable("compliments");
};