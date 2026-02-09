const Chef = require('../models/chefModel');

const  createChef = async (req,res)=>{
    try{
        const {name, specialty, experience} = req.body;
        const chef = await Chef.create({
            name,specialty,
            experience,
        });
    } catch (error){
        res.status(400).json({message: error.message});
    }
};

const getAllChefs = async (req, res) => {
    try{
        const chefs = await Chef.find();
        
    } catch (error){
        res.status(200).json({ message:error.message});
    }
};
module.exports ={
    createChef,
    getAllChefs
}