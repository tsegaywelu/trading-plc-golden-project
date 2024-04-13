const router=require('express').Router();
const Newsadder = require('../Controllers/Uploadnews');

router.post('/addnews',Newsadder.addnews);
router.get('/getnews',Newsadder.getnews);

module.exports=router;