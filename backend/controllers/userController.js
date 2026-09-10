// import User from "../models/User.js";

// export const getUsers = async (req, res) => {
//     try {

//         const page = Number(req.query.page) || 1;
//         const limit = Number(req.query.limit) || 5;

//         const skip = (page - 1) * limit;

//         const users = await User.find()
//             .sort({ _id: 1 })
//             .skip(skip)
//             .limit(limit);

//         const totalUsers = await User.countDocuments();

//         const totalPages = Math.ceil(totalUsers / limit);

//         res.status(200).json({
//             users,
//             pagination: {
//                 currentPage: page,
//                 limit,
//                 totalPages,
//                 totalUsers,

//                 hasNextPage: page < totalPages,
//                 hasPreviousPage: page > 1
//             }
//         });
//     } catch (error) {
//         res.status(500).json({
//             message: error.message
//         });
//     }
// };







import User from "../models/User.js";

export const getUsers = async (req, res) => {

    try {

        const page = Number(req.query.page) || 1;

        const limit = Number(req.query.limit) || 5;

        const skip = (page - 1) * limit;

        const users = await User.find()
            .sort({ _id: 1 })
            .skip(skip)
            .limit(limit);

        const totalUsers = await User.countDocuments();

        const totalPages = Math.ceil(
            totalUsers / limit
        );

        res.status(200).json({

            users,

            pagination: {
                currentPage: page,
                limit: limit,
                totalUsers: totalUsers,
                totalPages: totalPages,
                hasNextPage: page < totalPages,
                hasPreviousPage: page > 1
            }

        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};


export const createUser = async (req, res) => {

    try {

        const user = await User.create({
            name: req.body.name,
            email: req.body.email,
            age: req.body.age
        });

        res.status(201).json(user);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};
