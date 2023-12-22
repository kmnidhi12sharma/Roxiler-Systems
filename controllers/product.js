const getAllProducts =async(req,res)=>{
    res.status(200).json({msg:' getAllProduct function response successfully'})
}


const getAllProductTesting =async(req,res)=>{
    res.status(200).json({msg:' getAllProductTesting function response successfully'})
}


module.exports  = {getAllProducts,getAllProductTesting}


