const db = require("../models");
const User = db.user;
const { Op } = require('sequelize')
  exports.allAccess = (req, res) => {
    res.status(200).send("Public Content.");
  };
  exports.userBoard = (req, res) => {
    res.status(200).send("User Content.");
  };
  exports.adminBoard = (req, res) => {
    // res.status(200).send("Admin Content.");
    User.findAll()
    .then(data => {
    if (!data) {
        return res.status(404).send("User Not found");
    }
    else{
        return res.status(200).send(data);
    }
    })
    .catch(err => {
        res.status(500).send(err);
    });
  };
  exports.moderatorBoard = (req, res) => {
    res.status(200).send("Moderator Content.");
  };
  exports.userFindAge = async (req,res)=>{
    console.log(req.params.name);
      User.findAll({
        where : {
          [Op.or]: [{username: `${req.params.name}`}, {email: `${req.params.name}`},{age : req.params.name}]
    }
      })
      // User.findAll({attributes: [`${req.params.name}`]})
      .then(async (result) =>{
        console.log(result);
          if(result.length!=0){
              res.status(200).json(result);
          }
          else{
              res.status(404).json('Not Found');
          }
      })
      .catch(err=>{
        console.log(err);
          res.status(500).json(err);
      })     
  }