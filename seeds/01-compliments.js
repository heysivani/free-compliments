
exports.seed = function(knex) {
  // Deletes ALL existing entries and resets primary key
  return knex("compliments").truncate()
    .then(function () {
      // Inserts seed entries
      return knex("compliments").insert([
        {message: "<name>'s outfit is on point."},
        {message: "The world is a better place because <name>'s in it :)"},
        {message: "<name> is so smart!"}
      ]);
    });
};
