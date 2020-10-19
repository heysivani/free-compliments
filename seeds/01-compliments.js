
exports.seed = function(knex) {
  // Deletes ALL existing entries and resets primary key
  return knex("compliments").truncate()
    .then(function () {
      // Inserts seed entries
      return knex("compliments").insert([
        {message: "it worked!!"},
        {message: "yay!!"},
      ]);
    });
};
