
//importing model
const News=require('../models/News');

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


module.exports={addnews,getnews}