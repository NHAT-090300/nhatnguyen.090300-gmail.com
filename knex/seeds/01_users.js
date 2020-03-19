
exports.seed = function(knex) {
  return knex('table_name').del()
    .then(function () {
      return knex('table_name').insert([
        {
          id: 1,
          fullname: 'nguyen phuoc nhat',
          username: 'nhat',
          email: 'nigel@email.com',
          password: 'dorwssap'
        },
        {
          id: 2,
          fullname: 'nguyen van nhat',
          username: 'vannhat',
          email: 'nakaz@email.com',
          password: 'password1'
        }
      ]);
    });
};
