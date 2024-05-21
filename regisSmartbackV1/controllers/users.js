const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const axios = require( "axios");
const multer = require('multer');
const path = require('path');
const Jimp = require('jimp');
const nodemailer = require('nodemailer');
const CryptoJS = require('crypto-js');
const sharp = require('sharp');
const fs = require('fs');


const app = express();




app.use(cors({
    origin: ["https://regismart.site/", "https://www.regismart.site/"],
    methods: ["POST", "GET", "DELETE", "PUT"],
    credentials: true
    }));


// app.use(cors({
//     origin : ["http://localhost:3000"],
//     methods: ["POST", "GET","DELETE","PUT"],
//     credentials: true
// }));


app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.set('trust proxy', 1);


axios.default.withCredentials = true;


// app.use(session({
//     secret: 'secret',
//     resave: false,
//     saveUninitialized: false,
//     cookie: {
//     secure: true,
//     maxAge: 1000 * 60 * 60 * 24,
//     sameSite: 'none' // Add this option if you're using cross-site requests
//     }
// }));



app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
    cookie: {
    secure: false,
    maxAge: 1000 * 60 * 60 * 24,
    }
}));


//connection to database


// const con = mysql.createConnection({
// user: 'root',
// host: 'localhost',
// password: '',
// database: 'regismart',
// });



const con = mysql.createConnection({
    user: 'regidyit_regismart',
    host: 'localhost',
    password: 'regismart1973***',
    database: 'regidyit_regismart',
    });



con.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL database: ' + err.stack);
        return;
    }
    console.log('Connected to MySQL database as id ' + con.threadId);
});




const storage = multer.diskStorage({
    destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '..', '../public_html/uploads/'));
    },
    filename: function (req, file, cb) {
    const timestamp = Date.now();
    const fileExt = file.originalname.split('.').pop();
    const fileName = timestamp + '.' + fileExt;
    cb(null, fileName);
    },
});



const upload = multer({
    dest: path.join(__dirname, '..', '../public_html/uploads/'),
    storage: storage,
    fileFilter: function (req, file, cb) {
        const fileTypes = /jpeg|jpg|png|gif|mp3|wav|mpeg|audio|xlsx|xls|webp|pdf|docx/; // Added 'webp' here
        const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
        const mimetype = fileTypes.test(file.mimetype);

        if (mimetype && extname) {
            return cb(null, true);
        } else {
            return cb('Error: Only Images, Audio, Excel, and WebP files are allowed!');
        }
    },
});



const videoStorage = multer.diskStorage({
    destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '..', '../public_html/uploads/videos/'));
    },
    filename: function (req, file, cb) {
    const timestamp = Date.now();
    const fileExt = file.originalname.split('.').pop();
    const fileName = timestamp + '.' + fileExt;
    cb(null, fileName);
    },
});


const videoUpload = multer({
    storage: videoStorage,
    fileFilter: function (req, file, cb) {
        const fileTypes = /mp4|avi|mov|wmv/; // Allowed video file types
        const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
        const mimetype = fileTypes.test(file.mimetype);

        if (mimetype && extname) {
            return cb(null, true);
        } else {
            return cb('Error: Only MP4, AVI, MOV, and WMV video files are allowed!');
        }
    },
}).single('video');



function cropImage(imagePath, cb) {
    const outputPath = imagePath.replace(/(\.[\w\d_-]+)$/i, '-thumbnail$1');
    const maxWidth = 700; // Maximum width value

    sharp(imagePath)
        .resize({ width: maxWidth }) // Sharp automatically maintains aspect ratio
        .toFile(outputPath, (err, info) => {
            if (err) {
                return cb(err);
            }
            return cb(null, outputPath);
        });
}






app.delete('/delete-item/:id', (req, res) => {
    const itemId = req.params.id;
    const table = req.body.table;
    
    // execute the query to delete the item
    con.query(`SELECT * FROM ${table} WHERE id = ?`, [itemId], (err, result) => {
    if (err) {
        console.error('Error deleting item:', err);
        return res.send({ message: 'Error deleting item' });
    }
    if (result.length === 0) {
        return res.send({ message: 'Item not found' });
    }

    con.query(`DELETE FROM ${table} WHERE id = ?`, [itemId], (err, result) => {
        if (err) {
        console.error('Error deleting the item:', err);
        return res.send({ message: 'Error deleting the item' });
        }
        console.log('Item deleted successfully');
        return res.send({ message: 'Item deleted successfully' });
    });
    });




});




app.delete('/delete-student/:id', (req, res) => {
    const itemId = req.params.id;
    const table = req.body.table;
    
    // execute the query to delete the item
    con.query(`SELECT * FROM ${table} WHERE student_reg_no = ?`, [itemId], (err, result) => {
    if (err) {
        console.error('Error deleting item:', err);
        return res.send({ message: 'Error deleting item' });
    }
    if (result.length === 0) {
        return res.send({ message: 'Item not found' });
    }

    con.query(`DELETE FROM ${table} WHERE student_reg_no = ?`, [itemId], (err, result) => {
        if (err) {
        console.error('Error deleting the item:', err);
        return res.send({ message: 'Error deleting the item' });
        }
        console.log('Item deleted successfully');
        return res.send({ message: 'Item deleted successfully' });
    });
    });




});

app.get('/session-student', (req, res) => {
    if(req.session.studentRegNo) {
        return res.json({valid: true, studentRegNo: req.session.studentRegNo,studentName : req.session.studentName,type : req.session.type})
    } else {
        return res.json({valid: false})
    }
});



app.get('/session-admin', (req, res) => {
    if(req.session.username) {
        return res.json({valid: true, username: req.session.email,userId : req.session.userId,type : req.session.type})
    } else {
        return res.json({valid: false})
    }
});




app.post('/user', (req, res) => {
    const userId = req.body.id;

    con.query("SELECT * FROM admins WHERE id = ?", [userId], (err, result) => {
    if (err) {
        console.error(err);
        res.send({ message: 'Error getting user' });

    } else {
        if (result.length > 0) {
        res.send(result[0]);
        } else {
        res.send({ message: 'User not found' });

        }
    }
    });
});



app.post('/get-item', (req, res) => {
    const itemId = req.body.itemId;
    const table = req.body.table;

    con.query(`SELECT * FROM ${table} WHERE id = ?`, [itemId], (err, result) => {
    if (err) {
        console.error(err);
        res.send({ message: 'Error getting item' });

    } else {
        if (result.length > 0) {
        res.send(result[0]);
        }
        else {
        res.send({ message: 'item not found' });

        }
    }
    });
});




app.post('/get-student', (req, res) => {
    const itemId = req.body.itemId;

    const table = "student";

    con.query(`SELECT * FROM ${table} WHERE student_reg_no = ?`, [itemId], (err, result) => {
    if (err) {
        console.error(err);
        res.send({ message: 'Error getting item' });

    } else {
        if (result.length > 0) {
        res.send(result[0]);
        }
        else {
        res.send({ message: 'item not found' });

        }
    }
    });
});





app.get('/logoutStudent', (req, res) => {
    if (req.session.studentRegNo) {
        res.header('Cache-control', 'no-cashe');
        req.session.destroy((err) => {
            if (err) {
                return console.log(err);
            } else {
                return res.send({logout: true});
            }
        });
    }
});



app.get('/logoutAdmin', (req, res) => {
    if (req.session.username) {
        res.header('Cache-control', 'no-cashe');
        req.session.destroy((err) => {
            if (err) {
                return console.log(err);
            } else {
                return res.send({logout: true});
            }
        });
    }
});





    app.post('/get-item-count', (req, res) => {
        const table = req.body.table;

            con.query(`SELECT COUNT(*) AS totalCount FROM ${table}`,
                (err, result) => {
                    if (result) {
                        const totalCount = result[0].totalCount;
                        res.status(200).json({ totalCount });
                        res.send(totalCount);
                    } else {
                        res.send({ err, message: "Enter Correct asked details" });
                    }
                }
            )
                
                
    });



    
    app.post('/AllItems', (req, res) => {
        const table = req.body.table;
    
        con.query(`SELECT * FROM ${table} ORDER BY id DESC`, (err, result) => {
            if (err) {
                res.send({ message: 'Error getting Items' });
            } else {
                if (result.length > 0) {
                    res.send(result);
                } else {
                    res.send({ message: 'Items Are Empty' });
                }
            }
        });
    });



    

    
    app.post('/AllUserEnrolls', (req, res) => {
        const table = req.body.table;
        const studentId = req.body.studentId;

    
        con.query(`SELECT * FROM ${table} WHERE student_reg_no = ${studentId} ORDER BY id DESC`, (err, result) => {
            if (err) {
                res.send({ message: 'Error getting Items' });
            } else {
                if (result.length > 0) {
                    res.send(result);
                } else {
                    res.send({ message: 'Items Are Empty' });
                }
            }
        });
    });




    app.post('/AllStudents', (req, res) => {
        const table = req.body.table;
    
        con.query(`SELECT * FROM ${table} ORDER BY student_reg_no DESC`, (err, result) => {
            if (err) {
                res.send({ message: 'Error getting Items' });
            } else {
                if (result.length > 0) {
                    res.send(result);
                } else {
                    res.send({ message: 'Items Are Empty' });
                }
            }
        });
    });





    // Start Student Login Function V1


    app.post('/login', async (req, res) => {
        const { reg_number, password, pincode } = req.body; // Extract pincode from the request body
        const userIp = req.ip; // Assuming you're getting the IP address directly from req.ip


        // Check for user existence and account status
        con.query('SELECT * FROM student WHERE student_reg_no = ?', [reg_number], async (err, users) => {
            if (err) {
                console.error('Database error:', err);
                return res.status(500).send({ message: 'An error occurred. Please try again later.' });
            }
    
            if (users.length === 0) {
                logUserLoginAttempt(reg_number, userIp, 0); // Log failed login attempt due to user not found
                return res.status(404).send({ message: 'User not found.' });
            }
    
            const user = users[0];
    
            // Verify password
            const LoginPassword = CryptoJS.SHA1(password).toString(CryptoJS.enc.Hex);    
            const passwordMatch = LoginPassword ===  user.password;


            if (!passwordMatch) {
                logUserLoginAttempt(reg_number, userIp, 0); // Log failed login due to incorrect password
                return res.status(401).send({ message: 'Password is incorrect.' });
            }
            
            if (user.pincode !== pincode) {
                logUserLoginAttempt(reg_number, userIp, 0); // Log failed login due to incorrect pincode
                return res.status(401).send({ message: 'Pincode is incorrect.' });
            }
    
            // If both password and pincode are correct, setup session details and log success
            req.session.studentRegNo = user.student_reg_no;
            req.session.studentName = user.student_name;
            req.session.type = 'student';
    
            logUserLoginAttempt(reg_number, userIp, 1); // Log successful login attempt
            
            res.send({ message: 'Login successful' });
        });
    });
    
    // Helper function to log login attempts
    function logUserLoginAttempt(studentRegNo, userIp, status) {
        const insertLogQuery = "INSERT INTO userlog (student_reg_no, user_ip, login_time, status) VALUES (?, ?, NOW(), ?)";
        con.query(insertLogQuery, [studentRegNo, userIp, status], (err, result) => {
            if (err) {
                console.error('Error logging user login attempt:', err);
                // Note: You might not want to send an error to the client in this case as it pertains to logging, not the primary function of the endpoint.
            }
        });
    }


    // End Student Login Function V1







    // Start Course enroll for the student Function V2

    app.post("/add-course-enroll-student", upload.none(), (req, res) => {
        const { student_reg_no, pincode, session, department, level, semester, course } = req.body;

    
        if (!student_reg_no || !pincode || !session || !department || !level || !semester || !course) {
            return res.status(400).send({ message: "All fields are required" });
        }
    
        // First, check the course availability
        const courseQuery = "SELECT no_of_seats FROM course WHERE id = ?";
        con.query(courseQuery, [course], (err, courseResult) => {
            if (err) {
                console.error(err);
                return res.status(500).send({ message: "Server error" });
            }
    
            if (courseResult.length === 0) {
                return res.status(404).send({ message: "Course not found" });
            }
    
            const availableSeats = courseResult[0].no_of_seats;
            if (availableSeats <= 0) {
                return res.status(400).send({ message: "Limits of seats exceeded, please choose another course" });
            }
    
            // If no_of_seats are available, decrement the number of no_of_seats by one and increment no_of_student
            const updateSeatsQuery = "UPDATE course SET no_of_seats = no_of_seats - 1, no_of_student = no_of_student + 1 WHERE id = ?";
            con.query(updateSeatsQuery, [course], (err, updateResult) => {
                if (err) {
                    console.error(err);
                    return res.status(500).send({ message: "Error updating course details" });
                }
    
                // Now, add the enrollment with creation_date
                const insertQuery = "INSERT INTO course_enrolls (student_reg_no, pincode, session, department, level, semester, course, enroll_date) VALUES (?, ?, ?, ?, ?, ?, ?, NOW())";
                const values = [student_reg_no, pincode, session, department, level, semester, course];
    
                con.query(insertQuery, values, (err, enrollResult) => {
                    if (err) {
                        console.error(err);
                        // If inserting enrollment fails, roll back the seat decrement and no_of_student increment
                        const rollbackQuery = "UPDATE course SET no_of_seats = no_of_seats + 1, no_of_student = no_of_student - 1 WHERE id = ?";
                        con.query(rollbackQuery, [course], (rollbackErr, rollbackResult) => {
                            if (rollbackErr) {
                                console.error(rollbackErr);
                            }
                            return res.status(500).send({ message: "Server error, could not enroll and course update rollback attempted" });
                        });
                    } else {
                        return res.status(200).send({ message: "Enrolled successfully" });
                    }
                });
            });
        });
    });


    // End Course enroll for the student Function V1







    // Start Update Student info function V1






    app.post("/update-student-info", upload.single("img"), (req, res) => {
        const { student_reg_no, student_name } = req.body;
        console.log(req.body)
        const file = req.file;
    
        if (!student_name) {
            return res.status(400).send({ message: "All fields are required" });
        }
    
        if (student_reg_no) {
            const updateFields = [];
            const values = [];
    
            if (student_name) {
                updateFields.push("student_name = ?");
                values.push(student_name);
            }
    
            // Add updation_date to the fields to be updated
            updateFields.push("updation_date = NOW()");
    
            if (file) {
                const imagePath = file.path;
    
                cropImage(imagePath, function (err, imagePathThumbnail) {
                    if (err) {
                        console.log(err);
                        return res.send({ message: "Error uploading image" });
                    } else {
                        updateFields.push("student_photo = ?");
                        values.push(imagePathThumbnail.replace(/^.*[\\\/]/, ""));
    
                        const updateQuery = `UPDATE student SET ${updateFields.join(', ')} WHERE student_reg_no = ?`;
                        values.push(student_reg_no);
    
                        con.query(updateQuery, values, (err, result) => {
                            if (err) {
                                console.error(err);
                                return res.status(500).send({ message: "Server error" });
                            }
    
                            return res.status(200).send({ message: "Student information updated successfully" });
                        });
                    }
                });
            } else {
                // Proceed with the update if no image file is present
                const updateQuery = `UPDATE student SET ${updateFields.join(', ')} WHERE student_reg_no = ?`;
                values.push(student_reg_no);
    
                con.query(updateQuery, values, (err, result) => {
                    if (err) {
                        console.error(err);
                        return res.status(500).send({ message: "Server error" });
                    }
    
                    return res.status(200).send({ message: "Student information updated successfully" });
                });
            }
        } 
    });



    // End Update Student info function V1





    // Start Update Student Password Function V1



    app.post("/update-student-password", upload.none(), (req, res) => {
        const { student_reg_no, current_password, new_password } = req.body; // Added new_password and current_password to the body extraction
    
        if (!student_reg_no || !current_password || !new_password) {
            return res.status(400).send({ message: "All fields are required" });
        }
    
        // First, fetch the current password from the database to compare
        const fetchPasswordQuery = "SELECT password FROM student WHERE student_reg_no = ?";
        con.query(fetchPasswordQuery, [student_reg_no], (err, result) => {
            if (err) {
                console.error(err);
                return res.status(500).send({ message: "Server error" });
            }
    
            if (result.length === 0) {
                return res.status(404).send({ message: "Student not found" });
            }
    
            // Hash the current_password provided by the user to compare with the stored hash

            const currentPasswordHash = CryptoJS.SHA1(current_password).toString(CryptoJS.enc.Hex);    

    
            if (result[0].password !== currentPasswordHash) {
                return res.status(401).send({ message: "Current password is incorrect" });
            }
    
            // If the current password is correct, hash the new_password and update it in the database
            const newPasswordHash = CryptoJS.SHA1(new_password).toString(CryptoJS.enc.Hex);    

            const updatePasswordQuery = "UPDATE student SET password = ?, updation_date = NOW() WHERE student_reg_no = ?";
            con.query(updatePasswordQuery, [newPasswordHash, student_reg_no], (updateErr, updateResult) => {
                if (updateErr) {
                    console.error(updateErr);
                    return res.status(500).send({ message: "Error updating password" });
                }
    
                return res.status(200).send({ message: "Password updated successfully" });
            });
        });
    });










    // End Update Student Password Function V1





    // Start Admin Login Function V1


    app.post('/admin-login', async (req, res) => {
        const { username, password} = req.body; 
    
        // Check for user existence and account status
        con.query('SELECT * FROM admin WHERE username = ?', [username], async (err, users) => {
            if (err) {
                console.error('Database error:', err);
                return res.status(500).send({ message: 'An error occurred. Please try again later.' });
            }
    
            if (users.length === 0) {
                return res.status(404).send({ message: 'User not found.' });
            }
    
            const user = users[0];
    
            // Verify password

            const LoginPassword = CryptoJS.SHA1(password).toString(CryptoJS.enc.Hex);    
            const passwordMatch = LoginPassword ===  user.password;
            
            if (!passwordMatch) {
                return res.status(401).send({ message: 'Password is incorrect.' });
            }

    
            // If both password and pincode are correct, setup session details
            req.session.userId = user.id;
            req.session.username = user.username;
            req.session.type = 'admin'; // Assuming this is a static value for demonstration
    
            res.send({ message: 'Login successful' });
        });
    });
    
    // End Admin Login Function V1




    // Start Session Addition Function V1


    app.post("/add-course-session", upload.none(), (req, res) => {
        const {  session } = req.body;
    
        const file = req.file;
    
        if (!session) {
            return res.status(400).send({ message: "All fields are required" });
        }
    
    
        const insertQuery = "INSERT INTO session ( session,creation_date) VALUES (?,NOW())";
        const values = [ session];
    
        con.query(insertQuery, values, (err, result) => {
            if (err) {
                console.error(err);
                return res.status(500).send({ message: "Server error" });
            }
    
                return res.status(200).send({ message: "Session added successfully" });
            
        });
    });


    // End Session Addition Function V1





    
    // Start Semester Addition Function V1


    app.post("/add-semester", upload.none(), (req, res) => {
        const {  semester } = req.body;
    
        const file = req.file;
    
        if (!semester) {
            return res.status(400).send({ message: "All fields are required" });
        }
    
    
        const insertQuery = "INSERT INTO semester ( semester,creation_date) VALUES (?,NOW())";
        const values = [ semester];
    
        con.query(insertQuery, values, (err, result) => {
            if (err) {
                console.error(err);
                return res.status(500).send({ message: "Server error" });
            }
    
                return res.status(200).send({ message: "Semester added successfully" });
            
        });
    });


    // End Semester Addition Function V1




    
    // Start Department Addition Function V1


    app.post("/add-department", upload.none(), (req, res) => {
        const {  department } = req.body;
    
        const file = req.file;
    
        if (!department) {
            return res.status(400).send({ message: "All fields are required" });
        }
    
    
        const insertQuery = "INSERT INTO department ( department,creation_date) VALUES (?,NOW())";
        const values = [ department];
    
        con.query(insertQuery, values, (err, result) => {
            if (err) {
                console.error(err);
                return res.status(500).send({ message: "Server error" });
            }
    
                return res.status(200).send({ message: "Semester added successfully" });
            
        });
    });


    // End Department Addition Function V1




    
    // Start Course Addition Function V1

    app.post("/add-course", upload.none(), (req, res) => {
        const {  course_code, course_name, course_unit, no_of_seats } = req.body;
    
        const file = req.file;
    
        if (!course_code || !course_name || !course_unit || !no_of_seats) {
            return res.status(400).send({ message: "All fields are required" });
        }
    
    
        const insertQuery = "INSERT INTO course ( course_code,course_name,course_unit,no_of_seats,creation_date) VALUES (?,?,?,?,NOW())";
        const values = [ course_code, course_name, course_unit, no_of_seats];
    
        con.query(insertQuery, values, (err, result) => {
            if (err) {
                console.error(err);
                return res.status(500).send({ message: "Server error" });
            }
    
                return res.status(200).send({ message: "Course added successfully" });
            
        });
    });


    // End Course Addition Function V1





    // Start Course Update Function V1


    app.post("/update-course", upload.none(), (req, res) => {
        const { id, course_code, course_name, course_unit, no_of_seats } = req.body;
    
        if (!id || !course_code || !course_name || !course_unit || !no_of_seats) {
            return res.status(400).send({ message: "All fields are required" });
        }
    
        const updateFields = [];
        const values = [];
    
        if (course_code) {
            updateFields.push("course_code = ?");
            values.push(course_code);
        }
    
        if (course_name) {
            updateFields.push("course_name = ?");
            values.push(course_name);
        }
    
        if (course_unit) {
            updateFields.push("course_unit = ?");
            values.push(course_unit);
        }
    
        if (no_of_seats) {
            updateFields.push("no_of_seats = ?");
            values.push(no_of_seats);
        }
    
        // Add updation_date to the fields to be updated with the current date and time
        updateFields.push("updation_date = NOW()");
    
        const updateQuery = `UPDATE course SET ${updateFields.join(', ')} WHERE id = ?`;
        values.push(id);
    
        con.query(updateQuery, values, (err, result) => {
            if (err) {
                console.error(err);
                return res.status(500).send({ message: "Server error" });
            }
    
            return res.status(200).send({ message: "Course updated successfully" });
        });
    });



    // End Course Update Function V1




    
    // Start Student Addition Function V1


    app.post("/add-student", upload.none(), async (req, res) => {
        const { student_name, student_reg_no, password } = req.body;
    
        if (!student_name || !student_reg_no || !password) {
            return res.status(400).send({ message: "All fields are required" });
        }
    
        // Hash the password using SHA1
        const hashedPassword = CryptoJS.SHA1(password).toString(CryptoJS.enc.Hex);    
        // Function to generate a unique 5-digit pincode
        const generateUniquePincode = async () => {
            let unique = false;
            let pincode;
            while (!unique) {
                pincode = Math.floor(10000 + Math.random() * 90000).toString(); // Generate a 5-digit random number
                const pincodeCheckQuery = "SELECT COUNT(*) AS count FROM student WHERE pincode = ?";
        
                try {
                    // Wrap the query in a new Promise
                    const pincodeCheckResult = await new Promise((resolve, reject) => {
                        con.query(pincodeCheckQuery, [pincode], (err, result) => {
                            if (err) {
                                reject(err);
                            } else {
                                resolve(result);
                            }
                        });
                    });
        
                    // Check if the generated pincode is unique
                    unique = pincodeCheckResult[0].count === 0;
                } catch (err) {
                    console.error('Error querying the database:', err);
                    throw err; // Rethrow or handle the error appropriately
                }
            }
            return pincode;
        };



        // Ensure pincode is unique before proceeding
        generateUniquePincode().then(uniquePincode => {
            const insertQuery = "INSERT INTO student (student_name, student_reg_no, password, pincode, creation_date) VALUES (?, ?, ?, ?, NOW())";
            const values = [student_name, student_reg_no, hashedPassword, uniquePincode];
    
            con.query(insertQuery, values, (err, result) => {
                if (err) {
                    console.error(err);
                    return res.status(500).send({ message: "Server error" });
                }
                return res.status(200).send({ message: "Student added successfully" });
            });
        }).catch(err => {
            console.error(err);
            return res.status(500).send({ message: "Error generating unique pincode" });
        });
    });



    // End Student Addition Function V1








        // Start User Update Function V1


        app.post("/update-user", upload.none(), (req, res) => {
            const { student_reg_no, student_name, password } = req.body;

        
            if (!student_reg_no || !student_name) {
                return res.status(400).send({ message: "All fields are required" });
            }
        
            const updateFields = [];
            const values = [];
        
            if (student_name) {
                updateFields.push("student_name = ?");
                values.push(student_name);
            }
            // Hash the password using SHA1 before updating
            if (password) {
                        const hashedPassword = CryptoJS.SHA1(password).toString(CryptoJS.enc.Hex);
                        updateFields.push("password = ?");
                values.push(hashedPassword); // Use the hashed password
            }
        
            // Add updation_date to the fields to be updated with the current date and time
            updateFields.push("updation_date = NOW()");
        
            const updateQuery = `UPDATE student SET ${updateFields.join(', ')} WHERE student_reg_no = ?`;
            values.push(student_reg_no);
        
            con.query(updateQuery, values, (err, result) => {
                if (err) {
                    console.error(err);
                    return res.status(500).send({ message: "Server error" });
                }
        
                return res.status(200).send({ message: "Student updated successfully" });
            });
        });
    
    
        // End User Update Function V1






    
    // Start Update Admin Password Function V1



    app.post("/update-admin-password", upload.none(), (req, res) => {
        const { id, current_password, new_password } = req.body; // Added new_password and current_password to the body extraction
    
        if (!id || !current_password || !new_password) {
            return res.status(400).send({ message: "All fields are required" });
        }
    
        // First, fetch the current password from the database to compare
        const fetchPasswordQuery = "SELECT password FROM admin WHERE id = ?";
        con.query(fetchPasswordQuery, [id], (err, result) => {
            if (err) {
                console.error(err);
                return res.status(500).send({ message: "Server error" });
            }
    
            if (result.length === 0) {
                return res.status(404).send({ message: "Student not found" });
            }
    
            // Hash the current_password provided by the user to compare with the stored hash
            const currentPasswordHash = CryptoJS.SHA1(current_password).toString(CryptoJS.enc.Hex);    

            if (result[0].password !== currentPasswordHash) {
                return res.status(401).send({ message: "Current password is incorrect" });
            }
    
            // If the current password is correct, hash the new_password and update it in the database

            const newPasswordHash = CryptoJS.SHA1(new_password).toString(CryptoJS.enc.Hex);    


            const updatePasswordQuery = "UPDATE admin SET password = ?, updation_date = NOW() WHERE id = ?";
            con.query(updatePasswordQuery, [newPasswordHash, id], (updateErr, updateResult) => {
                if (updateErr) {
                    console.error(updateErr);
                    return res.status(500).send({ message: "Error updating password" });
                }
    
                return res.status(200).send({ message: "Password updated successfully" });
            });
        });
    });




    // End Update Admin Password Function V1





    // Start Add News Function V1


    app.post("/add-news", upload.none(), (req, res) => {
        const {  news_title, news_description } = req.body;
    
        const file = req.file;
    
        if (!news_title || !news_description) {
            return res.status(400).send({ message: "All fields are required" });
        }
    
    
        const insertQuery = "INSERT INTO news (  news_title, news_description , posting_date ) VALUES (?,?,NOW())";
        const values = [ news_title, news_description];
    
        con.query(insertQuery, values, (err, result) => {
            if (err) {
                console.error(err);
                return res.status(500).send({ message: "Server error" });
            }
    
                return res.status(200).send({ message: "News added successfully" });
            
        });
    });



    // End Add News Function V1



module.exports = app;
