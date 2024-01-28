import jwt from "jsonwebtoken"

const authorization = (req, res, next) => {
    // console.log(req?.headers["Authorization"])
    try {
        const token = req?.header("Authorization")?.split(" ")[1]
        // const token = req.headers['Authorization'];
        console.log(token)
        if (!token) return res.status(401).json({ status: false, response: 'Access denied 1.' });

        jwt.verify(token, process.env.JWTKEY, (err, user) => {
            if (err) return res.status(403).json({ status: false, response: 'Access denied.' });
            req.body.userId = user.userId
            next()
        });
    } catch (error) {

        console.log("err in authoriz", error)

    }
}


export default authorization