
exports.seed = function(knex) {
  // Deletes ALL existing entries and resets primary key
  return knex("compliments").truncate()
    .then(function () {
      // Inserts seed entries
      return knex("compliments").insert([
        {message: "The only thing more contagious than COVID-19 is <name>'s smile 😁"},
        {message: "The world is a better place because <name>'s in it 🌏"},
        {message: "<name> is a smart cookie 🍪"},
        {message: "<name>'s work inspires everyone around them 👩🏽‍💻"},
        {message: "<name>'s mind blows my mind 🤯"},
        {message: "<name>'s look today is on point 💅🏼"},
        {message: "<name> has the best laugh 😂"},
        {message: "<name> is a treasure like no other 💎"},
        {message: "<name> always lights up the room they're in 🌞"},
        {message: "<name> is literal perfection 🦄"}
      ]);
    });
};
