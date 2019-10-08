exports.seed = function(knex) {
  // Deletes ALL existing entries
  return (
    knex("geese")
      //.del() - id will keep increasing 
      .truncate() // will reset the id too
      .then(function() {
        // Inserts seed entries
        return knex("geese").insert([
          { name: "geese-1", color: "white" },
          { name: "geese-2", color: "white" },
          { name: "geese-3", color: "white" }
        ]);
      })
  );
};
