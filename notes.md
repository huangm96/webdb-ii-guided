# every table should have primary key!!!


- npm i knex
- knex init
- knex migrate:make add_geese_table 

# every database change should be done through a migration 
- knex migrate:down //undo one step