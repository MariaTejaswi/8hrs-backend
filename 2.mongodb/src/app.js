const express = require("express");
const noteModel = require("./models/note.model");

const app = express();

app.use(express.json());

// POST /notes => Create a note
// GET /notes => Get all notes
// DELETE /notes/:id => Delete a note
// PATCH /notes/:id => Update a note

app.post("/notes", async (req, res) => {
  const data = req.body;
  await noteModel.create({
    title: data.title,
    description: data.description,
  });

  res.status(201).json({
    message: "Note created",
  });
});

app.get("/notes", async (req, res) => {
    const notes = await noteModel.find() // returns array

    /* 
    findOne({
      title: "test_title_1"
    });


    find => [{},{}] or []
    findOne => {} or null
    
    */

    res.status(200).json({
      message: "notes fetched successfully",
      notes: notes
    })

});

app.delete("/notes/:id", async(req,res)=>{
  const id = req.params.id

  await noteModel.findOneAndDelete({
    _id: id
  })

  res.status(200).json({
    message: "deleted successfully"
  })
});

app.patch("/notes/:id", async(req,res)=>{
  const id = req.params.id
  const description = req.body.description

  await noteModel.findOneAndUpdate({_id: id}, {description: description})

  res.status(200).json({
    message: "Note updated successfully"
  })
})

module.exports = app;
