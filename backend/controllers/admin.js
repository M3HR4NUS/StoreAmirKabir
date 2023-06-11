
const Cat=require('../model/cat');


exports.setCat=async(req,res,next)=>{

  try {
    const {titel}=req.body;

    await Cat.catValidation(req.body);

    if(!titel){
      const error = new Error(
        "فیلد عنوان الزامی میباشد"
    );
    error.statusCode = 422;
    throw error;
    }else{
    await Cat.create({titel});
    res.status(201).json({ message: " دسته بندی با موفقیت اضافه شد" })
    }
    
  } catch (err) {
    next(err);
  }
}

exports.getCat=async(req,res,next)=>{
    try {

      const cat=await Cat.find({}).sort('asc');
      console.log(cat);
      if(!cat){
        const error = new Error(
          "دسته بندی موجود نمی باشد"
      );
      error.statusCode = 422;
      throw error;
      }else{
        res.status(201).json({cat,message:"موفقیت آمیز بود"})
      }
      
    } catch (err) {
      next(err);
    }
}
