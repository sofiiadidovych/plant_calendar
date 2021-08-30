const express = require("express");
const router = express.Router();
const knex = require("../database");

router.get("/", async (request, response) => {
  try {
    let plants = await knex.select("id", "plant_name", "description").from("plants");
    response.send(plants)
  } catch (error) {
    throw error;
  }
});

router.get("/:id", async (request, response) => {
  try {
    const plantWithId = await knex.select("id", "plant_name", "description").from("plants").where({
      id: parseInt(request.params.id),
    });
    response.send(plantWithId);
  } catch (error) {
    throw error;
  }
});

router.post("/", async (request, response) => {
  console.log(request.body);
  try {
    // await knex("plants")
    //   .insert({plant_name : "marusja", description : "desc"})
    //   .then((selected) => {
    //     response.status(201).json(selected[0]);
    //   });
  } catch (error) {
    throw error;
  }
});

// router.put("/:id", async (request, response) => {
//   try {
//     await knex("plants")
//       .where({ id: parseInt(request.params.id) })
//       .update(request.body);
//     response.status(202).json("Success");
//   } catch (error) {
//     throw error;
//   }
// });

// router.delete("/:id", async (request, response) => {
//   try {
//     await knex("plants")
//       .where({ id: parseInt(request.params.id) })
//       .delete();
//     response.status(202).json("Deleted");
//   } catch (error) {
//     throw error;
//   }
// });

module.exports = router;
