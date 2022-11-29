var multer = require('multer');
const multerStorage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './images');
    },
    filename: (req, file, cb) => {

     cb(null, `image-${Date.now()}` + path.extname(file.originalname))
        //path.extname get the uploaded file extension
    }
  });
  const multerFilter = (req, file, cb) => {

          if (!file.originalname.match(/\.(png|jpg)$/)) {
               // upload only png and jpg format
             return cb(new Error('Please upload a Image'))
           }
         cb(null, true)

  };
  exports.upload = multer({
    storage: multerStorage,
    fileFilter: multerFilter
  });

  exports.uploadSingleImage=async(req,res)=>{

    const allquery =await client.query(`INSERT INTO users(name, icon, date)  VALUES ('${req.body.name}', '${req.file.filename}', '${req.body.date}')`);

    res.status(200).json({'statusCode':200, 'status':true, message: 'Image added','data':[]});

   }
   exports.uploadMultipleImage=async(req,res)=>{

      for(var i=0;i<req.files.length;i++){
        const allquery =await client.query(`INSERT INTO users(name, icon, date) VALUES ('${req.body.name}','${req.files[i].filename}', '${req.body.date}')`);
         }
     res.status(200).json({'statusCode':200, 'status':true,
    message: 'All Image added','data':[]});
   }