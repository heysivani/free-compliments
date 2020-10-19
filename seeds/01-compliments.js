
exports.seed = function(knex) {
  // Deletes ALL existing entries and resets primary key
  return knex('compliments').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('compliments').insert([
        {id: 1, colName: 'rowValue1'},
        {id: 2, colName: 'rowValue2'},
        {id: 3, colName: 'rowValue3'}
      ]);
    });
};
