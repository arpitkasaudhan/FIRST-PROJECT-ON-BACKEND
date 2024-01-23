import {asyncHandler} from "../utils/asyncHandler.js";

const registereUser= asyncHandler(async (req,res)=>{
   res.status(500).json({message:"chai aur cofde"})
} )

export {registereUser,}