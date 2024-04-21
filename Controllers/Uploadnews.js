//importing model
const News = require("../models/News");
const myevent = require("../models/Event");
const Usersadd = require("../models/Users");
const jwt = require("jsonwebtoken");

const addnews = async (req, res) => {
  /* console.log(req.body,req.files.myfile); */

  console.log(req.files);

  const { Title, description } = req.body;
  const { myfile } = req.files;
  //moving the file to upload folder from front end
  if (myfile) {
    await myfile.mv(`./uploads/${myfile.name}`);
  }
  //inserting to db golden
  const newnews = new News({ Title, description, imageUrl: myfile?.name });
  await newnews.save();
};
const addevent = async (req, res) => {
  /* console.log(req.body,req.files.myfile); */

  console.log(req.files);

  const { Title, description } = req.body;
  const { myfile } = req.files;
  //moving the file to upload folder from front end
  if (myfile) {
    await myfile.mv(`./uploads/${myfile.name}`);
  }
  //inserting to db golden
  const newnews = new myevent({ Title, description, imageUrl: myfile?.name });
  await newnews.save();
};

const getnews = async (req, res) => {
  const news = await News.find();
  return res.json(news); //return all news
};

//insert the user email,password,name to db
const Registeruser = async (req, res) => {
  const { name, email, password } = req.body;
  console.table({ name, email, password });
  const user = new Usersadd({ name, email, password });
  await user.save();
  res.send("user added succesfully to db");
};

//find user with email and password from db

const loguser = async (req, res) => {
  const { email, password } = req.body;
  console.table({ email, password });

  const user = await Usersadd.findOne({ email, password });

  //if password is correct then api will send jwt to the front end    so please help me codeium help me
  if (user) {
    //jenerate jwt here
    const payload = {
      id: user._id, //because default id is _id  on mongo database
    };
    jwt.sign(
      payload,
      process.env.jwtsec,
      { expiresIn: 36000 },
      (err, token) => {
        //the jwt expires in 10 hour even if the user is actively using the app
        if (err) throw err;
        res.json({ token });
      }
    );
  } else {
    res.send("user not found");
  }
};

const checktoken = async (req, res) => {
  const { data } = req.body;
  console.log(data);
  jwt.verify(data, process.env.jwtsec, (err, user) => {
    console.log(user, err);
    if (err) return res.status(401).send("invalid token");
    res.status(200).send(user);
  });
};

module.exports = {
  addnews,
  getnews,
  Registeruser,
  loguser,
  checktoken,
  addevent,
};
