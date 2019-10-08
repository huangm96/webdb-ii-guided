// changes to make on the db schema
exports.up = function(knex) {
    return knex.schema.createTable('geese', function (tbl) {
         // a Primary Key, named 'id' that is and integer and 
        //auto-increments
        tbl.increments();
        // varchar of 128 characters max of notNull
        tbl.string('name', 128).notNullable()//.unique()
  })
};

// how to undo the changes made to the db schema
// manual undo to the changesS
exports.down = function(knex) {
    return knex.schema.dropTableIfExist('geese');
};
