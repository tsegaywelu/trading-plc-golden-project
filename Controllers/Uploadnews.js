
//importing model
const News=require('../models/News');
const Usersadd=require('../models/Users');

const addnews=async (req,res)=>{
   /* console.log(req.body,req.files.myfile); */

   const {Title,description}=req.body;
   const {myfile}=req.files;
  //moving the file to upload folder from front end 
   if(myfile){
       await myfile.mv(`./uploads/${myfile.name}`);
   }
    //inserting to db golden
   const newnews=new News({Title,description,imageUrl:myfile?.name});
   await newnews.save();
}

const getnews=async (req,res)=>{
    const news=await News.find();
    return res.json(news); //return all news
    
}

//insert the user email,password,name to db
const Registeruser=async (req,res)=>{
    const {name,email,password}=req.body;
    console.table({name,email,password})
    const user=new Usersadd({name,email,password});
    await user.save();
    res.send('user added succesfully to db');
}

//find user with email and password from db

const loguser=async (req,res)=>{
    const {email,password}=req.body;
    console.table({email,password})
    const user=await Usersadd.findOne({email,password});
    res.send(user);
}


module.exports={addnews,getnews,Registeruser,loguser}