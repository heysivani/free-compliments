exports.up = function(knex) {
    return knex.schema.createTable("compliments", function (table) {
        table.increments();
        table.string("message");
        table.string("type");
        table.string("intensity");
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable("compliments");
};