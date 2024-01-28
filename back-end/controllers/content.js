import contentModel from "../models/contentModel.js"
import { uploadFile } from "../utils/fileUploadHandler.js"

export const addContent = async (req, res) => {

    if (!req.files) {
        return res.status(401).json({ status: false, response: 'Content not added successfully.' });
    }

    try {
    const file = await uploadFile(req.files);
    const content = new contentModel(req.body);
    console.log(content)
    content.contentUrl = file;
    await content.save();
   return res.status(201).json({
        message: 'Content added successfully!',
        success: true,
        content,
    });

    } catch (err) {
        return res.status(500).json({ status: false, response: 'Somthing went wrong', msg: err.message });
    }
}

export const getContent = async (req, res) => {


    try{
        const contents = await contentModel.find({ userId: req.body.userId })
        
        return res.status(200).json({ status: true, contents });
    } catch (err) {
        return res.status(500).json({ status: false, response: 'Order not found', msg: err.message });
    }
}