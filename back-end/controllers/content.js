import contentModel from "../models/contentModel.js"

export const addContent = async (req, res) => {
    const { userId, title, description } = req.body
    try {
        const content = new contentModel({
            userId,
            title,
            description,
        })
        await content.save()
        return res.status(201).json({ status: true, response: 'Content added successfully.' });
    } catch (err) {
        return res.status(500).json({ status: false, response: 'Somthing went wrong', msg: err.message });
    }
}

export const getContent = async (req, res) => {
    try {
        // const orders = await orderModel.find({ userId: req.body.userId })
        // const orders = await orderModel.aggregate([
        //     {
        //         $match: {
        //             userId: req.body.userId,  // Filter by userId
        //         }
        //     },
        //     {
        //         $group: {
        //             _id: req.body.userId,  // Group by userId
        //             sub_total: { $sum: "$total" },  // Calculate total amount for each userId
        //             orders: { $push: "$$ROOT" },  // Include details of individual orders
        //         }
        //     }
        // ]);
        return res.status(200).json({ status: true, orders });
    } catch (err) {
        return res.status(500).json({ status: false, response: 'Order not found', msg: err.message });
    }
}