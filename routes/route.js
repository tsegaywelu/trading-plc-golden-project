const router=require('express').Router();
const Newsadder = require('../Controllers/Uploadnews');

router.post('/addnews',Newsadder.addnews);
router.get('/getnews',Newsadder.getnews);
router.post('/registeruser',Newsadder.Registeruser);
router.post('/loginuser',Newsadder.loguser);

module.exports=router;