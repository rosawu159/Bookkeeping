// import connection
import db from "../config/database.js";
 
// Get User
export const getuser = (username, result) => {
    db.query("SELECT * FROM users WHERE username = ?", [username], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Insert User
export const insertuser = (data, result) => {
    db.query("INSERT INTO users SET username = ?, password = ?", [data.username, data.password], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Update User Login Time
export const updateusertime = (username, result) => {
    db.query("UPDATE users SET last_login = now() WHERE username = ?", [username], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}