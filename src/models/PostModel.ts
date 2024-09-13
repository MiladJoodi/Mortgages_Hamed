import mongoose from "mongoose";

const PostSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            default: "No Title",
            min: 2,
            max: 100,
            // required: true
        },
        content: {
            type: String,
            default: "No content",
            min: 2,
            max: 100,
        },
        imageUrl: {
            type: String,
            default: "No content",
            min: 2,
            max: 100,
        },
    },
    { timestamps: true }
);

const Post = mongoose.models.Post || mongoose.model("Post", PostSchema);
export default Post;
