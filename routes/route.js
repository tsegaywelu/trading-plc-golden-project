const router=require('express').Router();
const Newsadder = require('../Controllers/Uploadnews');
const userauthentication=require('../Controllers/auth')

router.post('/addnews',userauthentication,Newsadder.addnews);
router.get('/getnews',Newsadder.getnews);
router.post('/registeruser',Newsadder.Registeruser);
router.post('/loginuser',Newsadder.loguser);
router.post('/checktoken',Newsadder.checktoken);

module.exports=router;