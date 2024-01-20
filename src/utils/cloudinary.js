import {v2 as cloudinary} from 'cloudinary';
import exp from 'constants';
import fs from "fs"


cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret:process.env.CLOUDINARY_API_SECRET
  });

  const uploadOnCloudinary= async (localFilePath)=>{
    try {
        if(!localFilePath) return null
        // upload the fle on CLOUDINARY
       const response= await cloudinary.uploader.upload(localFilePath,{
            resource_type:"auto"
        })
        ///file upload ho gyi
        console.log("file is upload on coldiianary",response.url);
        return response
    } catch (error) {
        fs.unlinkSync(localFilePath)// remove the loacaly saved temproary fle as the operotion got faled
        return null
    }
  }


  export {uploadOnCloudinary}