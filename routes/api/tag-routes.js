const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => { ///////////////////////WORKS
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll({include:Product}).then(data=>{
    res.json(data)
  })
});

router.get('/:id', (req, res) => { /////////////////WORKS
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findOne({where:{id:req.params.id},include:Product}).then(data => {
    res.json(data)
  });
});

router.post('/', (req, res) => {///////////////////////WORKS
  // create a new tag
  Tag.create(req.body).then(data=>{
    res.json(data)
  })
});

router.put('/:id', (req, res) => {////////////////WORKS
  // update a tag's name by its `id` value
  Tag.update(req.body,{where:{id:req.params.id}}).then(data=>{
    res.json(data)
  })
});

router.delete('/:id', (req, res) => {/////////////////////WORKS
  // delete on tag by its `id` value
  Tag.destroy({where:{id:req.params.id}}).then(data=>{
    res.json(data)
  })
});

module.exports = router;
