import { NextApiRequest, NextApiResponse } from "next";

export default async function(req: NextApiRequest, res: NextApiResponse){
    if(req.method==="POST"){
        const { title, content,imageUrl } = req.body
        console.log(title, content,imageUrl)
    }
}