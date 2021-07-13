// Import function from invoice Model
import { getuser, insertuser, updateusertime } from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Signup User
export const signupinvoice = (req, res) => {
    getuser(req.params.username, (err, results) => {
        if (result.length) {
            res.status(409).send({
                msg: 'This username is already in use!'
            });
        } else {
            // username is available
            bcrypt.hash(req.body.password, 10, (err, hash) => {
                if (err) {
                    res.send(err);
                } else {
                    const data = req.body;
                    insertuser(data, (err, results) => {
                        if (err){
                            res.send(err);
                        }else{
                            res.status(201).send({
                                msg: 'Registered!'
                            });
                        }
                    });
                }
            });
        }
    });
}
 
// Create New User
export const logininvoice = (req, res) => {
    const data = req.body;
    insertuser(data, (err, results) => {
        // user does not exists
        if (err){
            res.status(409).send({
                msg: 'This username is already in use!'
            });
        } else if (!result.length) {
            res.status(401).send({
                msg: 'Username or password is incorrect!'
            });
        } else {

            // check password
            bcrypt.compare(
                req.body.password,
                result[0]['password'],
                (bErr, bResult) => {
                    // wrong password
                    if (bErr) {
                        res.status(401).send({
                            msg: 'Username or password is incorrect!'
                        });
                    } else {
                        if (bResult) {
                            const token = jwt.sign({
                                username: result[0].username,
                                userId: result[0].id
                            },
                            'SECRETKEY', {
                                expiresIn: '7d'
                            }
                            );
                            updateusertime(req.params.username);
                            res.status(200).send({
                                msg: 'Logged in!',
                                token,
                                user: result[0]
                            });
                        } else {
                            return res.status(401).send({
                                msg: 'Username or password is incorrect!'
                            });
                        }
                    }
                }
            );
        }

    });
}
 

// Signup User
export const loggedtime = (req, res) => {
    console.log(req.userData);
    res.send('This is the secret content. Only logged in users can see that!');
}