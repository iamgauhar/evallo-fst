import contentModel from "../models/contentModel.js"
import { uploadFile } from "../utils/fileUploadHandler.js"

// Uploading content Controllers
export const addContent = async (req, res) => {

    if (!req.file) {
        return res.status(401).json({ status: false, response: 'Content not added successfully.' });
    }

    try {
    const file = await uploadFile(req.file);
    const content = new contentModel(req.body);
    console.log(content)
    content.contentUrl = file;
    await content.save();
   return res.status(201).json({
        response: 'Content added successfully!',
        status: true,
        content,
    });

    } catch (err) {
        return res.status(500).json({ status: false, response: 'Somthing went wrong', msg: err.message });
    }
}


// fetching all content Controllers
export const getContent = async (req, res) => {

    try{
        const contents = await contentModel.find({ userId: req.body.userId })
        
        return res.status(200).json({ status: true, contents });
    } catch (err) {
        return res.status(500).json({ status: false, response: 'Order not found', msg: err.message });
    }
}