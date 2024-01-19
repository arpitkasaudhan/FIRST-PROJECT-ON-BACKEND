import mongoose,{Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";


const videoSchema=new Schema(
    {
        videoFile:{
            trpe:String,
            reduired:true,
        },
        thumbnail:{
            trpe:String,
            reduired:true,
        },
        title:{
            trpe:String,
            reduired:true,
        },
        description:{
            trpe:String,
            reduired:true,
        },
        duration:{
            type:Number,
            reduired:true
        },
        views:{
            type:Number,
            default:0
        },
        isPublished:{
            type:Boolean,
            default:true
        },
        owner:{
            typr:Schema.Types.ObjectId,
            ref:"User"
        }
    },
    {
        timestamps:true
    }
)


videoSchema.plugin(mongooseAggregatePaginate)
export const Video=mongoose.model("Video",videoSchema)


