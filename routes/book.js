const router=require("express").Router();
const Book=require("../models/model")

router.route("/").get((req,res)=>{
    Book.find()
    .then((books)=>res.json(books))
    .catch((err)=>res.status(400).json("error"+err))
})

router.route("/").post((req,res)=>{
    const title=req.body.title;
    const author=req.body.author;
    const descripion=req.body.descripion;

    const newBook=new Book({title,author,descripion})

    newBook.save()
    .then(()=>res.json("data added"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req,res)=>{
    Book.findById(req.params.id)
    .then((books) => res.json(books))
    .catch((err) => res.status(400).json("Error: " + err));
})

router.route("/:id").delete((req,res)=>{
    Book.findByIdAndDelete(req.params.id)
    .then(() => res.json("book deleted."))
 .catch((err) => res.status(400).json("Error: " + err));
})

router.route("/:id").post((req,res)=>{
    Book.findById(req.params.id)
    .then
    ((book)=>{
       book.title=req.body.title,
       book.author=req.body.author,
       book.descripion=req.body.descripion;

       book.save()
       .then(() => res.json("Todo updated!"))
 .catch((err) => res.status(400).json("Error: " + err));

    })
    .catch((err) => res.status(400).json("Error: " + err));
})

module.exports=router;

