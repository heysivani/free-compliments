
exports.up = function(knex) {
    return knex.schema.createTable("tinyTable", function (table) {
        table.increments();
        table.string("message");
        table.string("type");
        table.string("intensity");
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable("tinyTable");
};
