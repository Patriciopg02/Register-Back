import User from '../models/user.js';

export const getUsers = async(req,res) => {

    const options = {
        page:1,
        limit:6
    }

    try {
        const {page} = req.query;
        if (page) options.page = page;
        User.paginate({}, options, (err,users) => {
            if (users.docs.length) {
                users.docs.map(u => {
                    u.password = '***';
                });
                return res.send(
                    users
                );
            }
            else {
                return res.status(200).send('No users');
            }
        });
    }
    catch(err) {
        return res.status(400).send(err);
    }
}

export const postUsers = async(req,res) => {
    try {
        const {username,email,password} = req.body;
        let checkUserExists = await User.find({email:email});
        
        if(checkUserExists.length) {
            return res.status(400).send('User already exists!')
        } 
        else {
            let date = new Date();
            let user = new User({username,email,password,date});
            await user.save();
            return res.status(200).json(user);
        }

    }
    catch(err) {
        return res.status(400).send(err);
    }
    
}