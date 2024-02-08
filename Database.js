
const express = require('express');
const bodyParser = require('body-parser');
const { createPool } = require('mysql');
const cors = require('cors')
const multer = require('multer');
const path = require('path');
const nodemailer = require('nodemailer');
const MailMessage = require('nodemailer/lib/mailer/mail-message');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secretKey = process.env.JWT_SECRET_KEY;


const app = express()
const port = process.env.PORT || 5002

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static("public"));
app.use(bodyParser.json())
app.listen(port, () => console.log(`Let's start cooking on Port ${port}`))
app.use("/imageUploads", express.static("./imageUploads"));



//Sign Up Handler
app.post('/register', async (req, res) => {
  const { officer_name, role, mail, username, password } = req.body;

  // Hash the password before storing it
  const hashedPassword = await bcrypt.hash(password, 10);

  // Insert the user into the database
  pool.query(
    'INSERT INTO tbl_requests_officers (officer_name, role, mail, username, password) VALUES (?, ?, ?, ?, ?)',
    [officer_name, role, mail, username, hashedPassword],
    (err, results) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error creating user.');
      } else {
        res.status(200).send('User created successfully.');
      }
    }
  );
});


//Login Handler
// app.post('/api/login', (req, res) => {
//   const { username, password } = req.body;
//   const login = `SELECT role FROM requests.tbl_requests_officers WHERE username = '${username}' AND password = '${password}';`;
//   pool.query(login, (err, results) => {
//     if (err) {
//       console.log(err);
//       res.status(500).send('Error occurred during login.');
//     } else {

//       // Check if any user with the given uname and password is found
//       if (results.length > 0) {
//         const user = results[0];
//         var lg_state =
//         {
//           "state": 0,
//           "role": ""
//         }

//         switch (user.role) {
//           case 'admin':
//             // res.redirect('/dashboard');
//             lg_state.state = 1
//             lg_state['role'] = 'admin'
//             break;
//           case 'DFA':
//             // res.redirect('/dashboard');
//             lg_state.state = 1
//             lg_state['role'] = 'DFA'
//             break;
//           case 'IDU':
//             // res.redirect('/idunit');
//             lg_state.state = 1
//             lg_state['role'] = 'IDU'
//             break;
//           case 'Registrar':
//             lg_state.state = 1
//             lg_state['role'] = 'Registrar'
//             // res.redirect('/registrar');
//             break;
//           default:
//           //
//         }
//         if (lg_state.state == 1) {
//           res.status(200).json(lg_state)
//         } else {
//           res.status(403).json(lg_state)

//         }
//       } else {
//         res.status(403).send('Invalid username or password entered');
//       }
//     }
//   });
// });


// app.post('/api/login', async (req, res) => {
//   const { username, password } = req.body; 


//   pool.query('SELECT * FROM tbl_requests_officers WHERE username = ? AND password = ?', [username, password], (err, user) => {
//     if (err) {
//       console.error(err);
//       return res.status(500).json({ error: 'Internal Server Error' });
//     }

//     if (user) {
//       // Create a JWT token with user information
//       const token = jwt.sign(
//         { username: user.username, role: user.role },
//         secretKey,
//         {
//           expiresIn: '1h', // Token expires in 1 hour
//         }
//       );



//       // Redirect users based on their roles
//       let redirectPage = '/';
//       if (user.role === 'admin') {
//         redirectPage = '/';
//       } else if (user.role === 'IDU') {
//         redirectPage = '/idunit';
//       } else if (user.role==='DFA'){
//         redirectPage = '/dashboard'
//       } else if (user.role='/registrar')

//       res.json({ token, redirectPage });
//       // res.redirect(redirectPage)
//     } else {
//       res.status(401).json({ error: 'Invalid username or password' });
//     }
//   });
// });

//   pool.query('SELECT * FROM tbl_requests_officers WHERE username = ?', [username], async (err, results) => {
//     if (err || results.length === 0) {
//       console.error(err);
//       res.status(401).json({ error: 'Invalid username or password.' });
//     } else {
//       const user = results[0];
//       const passwordMatch = await bcrypt.compare(password, user.password);

//       var lg_state = {
//         state: 0,
//         role: ""
//       };

//       switch (user.role) {
//         case 'admin':
//           lg_state.state = 1;
//           lg_state.role = 'admin';
//           break;
//         case 'DFA':
//           lg_state.state = 1;
//           lg_state.role = 'DFA';
//           break;
//         case 'IDU':
//           lg_state.state = 1;
//           lg_state.role = 'IDU';
//           break;
//         case 'Registrar':
//           lg_state.state = 1;
//           lg_state.role = 'Registrar';
//           break;
//           default:
//             console.error(`Unexpected role: ${user.role}`);
//       }

//       if (passwordMatch && lg_state.state === 1) {
//         req.session.user = user;
//         return res.status(200).json(lg_state);
//       }

//       res.status(401).json({ error: 'Invalid username or password.' });
//     }
//   });
// });



// app.post('/api/login', async (req, res) => {
//   const { username, password } = req.body;

//   console.log('username :', username);
//   console.log('Password :', password);


//     // Retrieve user with the provided username
//     const results = await pool.query('SELECT * FROM tbl_requests_officers WHERE username = ?', [username]);

//     if (results.length === 0) {
//       // User not found
//       res.status(401).send('Invalid username');
//     } else {
//       const user = results[0];

//       // Compare passwords
//       if (user && user.password) {
//         const passwordMatch = await bcrypt.compare(password, user.password);



//         if (passwordMatch) {
//           // Set session user
//           req.session.user = user;

//           // Define the response object
//           const lg_state = {
//             state: 1,
//             role: user.role,
//           };

//           // Implement redirection logic if needed
//           switch (user.role) {
//             case 'admin':
//               // Redirect to '/dashboard' or send a response as needed
//               break;
//             case 'DFA':
//               // Redirect to '/dashboard' or send a response as needed 
//               break;
//             case 'IDU':
//               // Redirect to '/idunit' or send a response as needed
//               break;
//             case 'Registrar':
//               // Redirect to '/registrar' or send a response as needed
//               break;
//             default:
//               // Handle unknown roles if necessary
//               break;
//           }

//           // Respond with the state object
//           res.status(200).json(lg_state);
//         } else {
//           // Password doesn't match
//           res.status(401).send('Invalid username or password.');
//         }
//       }
//       else {
//         // Handle database query or bcrypt error
//         res.status(500).send('Internal server error');
//       }
//     }
//   }
// );


// app.post('/api/login', async (req, res) => {
//   const { username, password } = req.body;

//   console.log('Username:', username);

//   try {
//     // Retrieve user with the provided username
//     const results = await pool.query('SELECT * FROM tbl_requests_officers WHERE username = ?', [username]);

//     if (results.length === 0) {
//       // User not found
//       return res.status(401).json({ error: 'Invalid username' });
//     }

//     const user = results[0];

//     if (user && user.password) {
//       // Compare passwords
//       const passwordMatch = await bcrypt.compare(password, user.password);

//       if (passwordMatch) {
//         // Set session user
//         req.session.user = user;
//         lg_state.redirectUrl = '/dashboard';



//         // Define the response object
//         const lg_state = {
//           state: 1,
//           role: user.role,
//         };

//         // Implement redirection logic if needed
//         switch (user.role) {
//           case 'admin':
//             lg_state.redirectUrl = '/dashboard-admin';

//             break;
//           case 'DFA':
//             lg_state.redirectUrl = '/dashboard';
//             break;
//           case 'IDU':
//             lg_state.redirectUrl = '/idunit';
//             break;
//           case 'Registrar':
//             lg_state.redirectUrl = '/dashboard-registrar';
//             break;
//           default:
//             window.alert("Please check your credentials and try again ")
//             break;
//         }

//         // Respond with the state object
//         res.status(200).json(lg_state);
//       } else {
//         // Password doesn't match
//         res.status(401).json({ error: 'Invalid password' });
//       }
//     } else {
//       // Handle the case where user or user.password is undefined
//       res.status(500).json({ error: 'Internal server error' });
//     }
//   } catch (error) {
//     // Handle database query or bcrypt error
//     console.error(error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });


// app.post('/api/login', async(req,res)=>{
//   const username= req.body.username;
//   const password= req.body.password;

//   const login = `SELECT role FROM requests.tbl_requests_officers WHERE username = '${username}' AND password = '${password}';`;

// } )




// app.post('/api/login', (req, res) => {
//   const { username, password } = req.body;
//   const login = `SELECT role FROM requests.tbl_requests_officers WHERE username = ? AND password = ?`;
//   pool.query(login, [username, password], (err, results) => {
//     if (err) {
//       console.error(err);
//       res.status(500).send('Error occurred during login.');
//     } else {
//       if (results.length > 0) {
//         const user = results[0];
//         res.json({ role: user.role }); // Send only the role in response
//       } else {
//         res.status(403).send('Invalid username or password entered');
//       }
//     }
//   });
// });








// app.post('/api/login', (req, res) => {
//   const { username, password } = req.body;
//   pool.query('SELECT * FROM tbl_requests_officers WHERE username = ?', [username], async (err, results) => {
//     if (err || results.length === 0) {
//       console.error(err);
//       res.status(401).json({ error: 'Invalid username or password.' });
//     } else if (results.length > 0) {
//       username = results[0].role;
//     }

//     else (window.alert("CHeck your password and try again"))

//     // const passwordMatch = await bcrypt.compare(password, user.password);

//     var lg_state = {
//       state: 0,
//       role: ""
//     };

//     switch (user.role) {
//       case 'admin':
//         lg_state.state = 1;
//         lg_state.role = 'admin';
//         break;
//       case 'DFA':
//         lg_state.state = 1;
//         lg_state.role = 'DFA';
//         break;
//       case 'IDU':
//         lg_state.state = 1;
//         lg_state.role = 'IDU';
//         break;
//       case 'Registrar':
//         lg_state.state = 1;
//         lg_state.role = 'Registrar';
//         break;
//       default:
//         console.error(`Unexpected role: ${user.role}`);
//     }

//     if (passwordMatch && lg_state.state === 1) {
//       req.session.user = user;
//       return res.status(200).json(lg_state);
//     }

//     res.status(401).json({ error: 'Invalid username or password.' });
//   })
// });



app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  // Retrieve user with the provided username
  pool.query('SELECT * FROM tbl_requests_officers WHERE username = ?', [username], async (err, results) => {
    if (err || results.length === 0) {
      console.error(err);
      // res.status(401).send('Invalid username or password.');
    } else {
      const user = results[0];
      // Compare passwords
      const passwordMatch = await bcrypt.compare(password, user.password);

      var lg_state =
      {
        "state": 0,
        "role": ""
      }

      switch (user.role) {
        case 'admin':
          // res.redirect('/dashboard');
          lg_state.state = 1
          lg_state['role'] = 'admin'
          break;
        case 'DFA':
          // res.redirect('/dashboard');
          lg_state.state = 1
          lg_state['role'] = 'DFA'
          break;
        case 'IDU':
          // res.redirect('/idunit');
          lg_state.state = 1
          lg_state['role'] = 'IDU'
          break;
        case 'Registrar':
          lg_state.state = 1
          lg_state['role'] = 'Registrar'
          // res.redirect('/registrar');
          break;
        default:
        //
      }
      if (lg_state.state == 1) {
        res.status(200).json(lg_state)
      } else {
        res.status(403).json(lg_state)
      }
      if (passwordMatch) {
        req.session.user = user;
        res.status(200).send('Login successful.');
      } 
    }
  });
});



// app.post('/login', async (req, res) => {
//   const { username, password } = req.body;

//   try {
//     // Retrieve user with the provided username
//     const results = await pool.query('SELECT * FROM tbl_requests_officers WHERE username = ?', [username]);

//     if (results.length === 0) {
//       throw new Error('Invalid username or password.');
//     }

//     const user = results[0];

//     // Compare passwords
//     const passwordMatch = await bcrypt.compare(password, user.password);

//     if (passwordMatch) {
//       req.session.user = user;

//       const lg_state = {
//         state: 1,
//         role: user.role,
//       };

//       res.status(200).json(lg_state);
//     } else {
//       throw new Error('Invalid username or password.');
//     }
//   } catch (err) {
//     console.error(err);
//     res.status(401).send('Invalid username or password.');
//   }
// });






//MYSQL
const pool = createPool({ host: "localhost", user: "root", password: "", database: "requests", connectionLimit: 10 })

//DEFERMENT************************************************************************************************************************************

//application for deferment from web interface
app.post('/api/newdefer', (req, res) => {
  const { rqst_id, stuid, phone,clevel, csem,defsem, defyear, retsem, retyear, reason } = req.body;
  const dateApplied = new Date();



  const sqlInsert = `INSERT INTO tbl_deferments (rqst_id, stuid, phone,clevel, csem, defsem, defyear, retsem, retyear, reason,  created_at, status) VALUES (?,?,?,?,?,?,?,?,?,?,?, 'pending')`;
  const values = [rqst_id, stuid, phone, clevel, csem, defsem, defyear, retsem, retyear, reason, dateApplied];

  pool.query(sqlInsert, values, (err, result) => {
    res.status(201).send(result)
    if (err) {
      console.log(err)
    }
  })


  // Nodemailer Component
  // let mailTransponder = nodemailer.createTransport({
  //   host: 'sandbox.smtp.mailtrap.io',
  //   port: 2525,
  //   auth: {
  //     user: 'a44c4de27ead4a',
  //     pass: '8d4115cf506fe3' //password
  //   },
  // });

  // let message = {
  //   from: "selasiprecious20@gmail.com",
  //   to: Email,
  //   subject: "AIT ID Card Renewal",
  //   text: "Your request for a renewal/replacement has been issued. Here's your request's Tracking ID: " + rqst_id +
  //     "\n Use this tracking ID to track the progress of your request",
  // }

  // mailTransponder.sendMail(message, (error, info) => {
  //   if (error) {
  //     return console.log(error)
  //   } else
  //     console.log('message sent: %s', info.messageId)
  // })
})


// ...Finance
app.get('/api/getdeferment', (req, res) => {
  const sqlGet = "SELECT * FROM tbl_deferments WHERE status = 'Pending' ";
  pool.query(sqlGet, (error, result) => {
    res.send(result);
  })
})


//....Finance Office Approves Request
app.post('/api/deferment/finapprove', (req, res) => {
  const { rqst_id } = req.body;
  const sqlInsert = 'UPDATE tbl_deferments SET status = "verified" WHERE rqst_id = ?';
  pool.query(sqlInsert, [rqst_id], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json({ success: false, message: 'Failed to update status.' });
    } else {
      res.status(200).json({ success: true, message: 'Status updated successfully.' });
    }
  });
});


//...Finance office disapproves request
app.post('/api/deferments/rejects', (req, res) => {
  const { rqst_id } = req.body;

  const sqlInsert = 'UPDATE tbl_deferments SET status = "rejected" WHERE rqst_id = ?';
  const values = [rqst_id];

  pool.query(sqlInsert, values, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json({ success: false, message: 'Failed to update status.' });
    } else {
      res.status(200).json({ success: true, message: 'Status updated successfully.' });
    }
  });
});



//...Registrar Gets Verified Requests
app.get('/api/reggetdeferment', (req, res) => {
  const sqlRegGet = "SELECT * FROM tbl_deferments WHERE status = 'verified'";
  pool.query(sqlRegGet, (error, result) => {
    res.send(result);
  })
})


//...Register Approves Verified Requests
app.post('/api/deferment/regapprove', (req, res) => {
  const { rqst_id } = req.body;
  const sqlInsert = 'UPDATE tbl_deferments SET status = "worked_on" WHERE stuid = ?';
  pool.query(sqlInsert, [rqst_id], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json({ success: false, message: 'Failed to update status.' });
    } else {
      res.status(200).json({ success: true, message: 'Status updated successfully.' });
    }
  });
});

//...Processed Deferment Requests
app.get('/api/RegProcessedDefer', (req, res) => {
  const sqlGet = "SELECT * FROM tbl_deferments WHERE status = 'worked_on' ";
  pool.query(sqlGet, (error, result) => {
    res.send(result);
  })
})



//NEW APPLICATION OF DEFERMENT
// app.post('/api/newdefer', (req, res) => {
//   const { rqst_id, stuid,phone,mail,clevel,program,campus,applied,reason } = req.body
//   const sqlPostComplain = `INSERT INTO tbl_deferments (rqst_id, stuid, phone, clevel, program, campus, receipt_path, status, reason_specify ) VALUES (?,?,?,?,?,?,?,?)`;
//   pool.query(sqlPostComplain, [stuid, rqst_id, phone, clevel, program, campus, receipt_path, reason ], (error, result) => {
//     if (error) {
//       console.log(result)
//     }
//   })
// })




//...Tracking the Deferment request 
app.post('/api/trackDefer', (req, res) => {
  const { stuid, rqst_id } = req.body;
  const sql = 'SELECT status FROM tbl_deferments WHERE stuid = ? AND rqst_id = ?';

  // Execute the SQL query with the provided parameters
  pool.query(sql, [stuid, rqst_id], (err, result) => {
    if (err) {
      console.log(err);
      res.json({ success: false, message: 'An error occurred while querying the database.' });
    } else {
      if (result.length > 0) {
        const status = result[0].status;
        res.json({ success: true, status });
      } else {
        res.json({ success: false, message: 'Please check your entries and try again.' });
      }
    }
  });
});




//TRANSCRIPT************************************************************************************************************************

app.post('/api/newtrans', (req, res) => {
  const { rqst_id, stuid, stuname, phone, email, program, level, purpose, ogname, ogphone, ogemail, postaddress, receipt, delivery } = req.body;
  // const dateApplied = new Date();



  const sqlInsert = `INSERT INTO tbltranscript_requests (rqst_id, stuid, name, phone, email, prog, level, purpose, ogname, ogcontact, ogemail, ogpostal, reciept_path, deliv_mode, status) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?, ?, 'pending')`;
  const values = [rqst_id, stuid, stuname, phone, email, program, level, purpose, ogname, ogphone, ogemail, postaddress, receipt, delivery];

  pool.query(sqlInsert, values, (err, result) => {
    res.status(201).send(result)
    if (err) {
      console.log(err)
    }
  })


  // Nodemailer Component
  let mailTransponder = nodemailer.createTransport({
    host: 'sandbox.smtp.mailtrap.io',
    port: 2525,
    auth: {
      user: 'a44c4de27ead4a',
      pass: '8d4115cf506fe3' //password
    },
  });

  let message = {
    from: "selasiprecious20@gmail.com",
    to: email,
    subject: "AIT Transcript Request",
    text: "Your request for a transcript has been issued. Here's your request's Tracking ID: " + rqst_id +
      "\n Use this tracking ID to track the progress of your request",
  }

  mailTransponder.sendMail(message, (error, info) => {
    if (error) {
      return console.log(error)
    } else
      console.log('message sent: %s', info.messageId)
  })
})

app.get('/api/gettranscript', (req, res) => {
  const sqlGetTrans = "SELECT * FROM tbltranscript_requests WHERE status = 'Pending'";
  const created_at = new Date();
  pool.query(sqlGetTrans, (error, result) => {
    res.send(result);
  })
});


//....Finance Office Approves Request
app.post('/api/transcript/finapprove', (req, res) => {
  const { rqst_id } = req.body;
  const sqlInsert = 'UPDATE tbltranscript_requests SET status = "verified" WHERE rqst_id = ?';
  pool.query(sqlInsert, [rqst_id], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json({ success: false, message: 'Failed to update status.' });
    } else {
      res.status(200).json({ success: true, message: 'Status updated successfully.' });
    }
  });
});

//...Registrar Gets from Finance
app.get('/api/getfinanceapprovedtranscripts', (req, res) => {
  const sqlGet = "SELECT * FROM tbltranscript_requests WHERE status = 'verified' ORDER BY updated_at DESC";
  pool.query(sqlGet, (error, result) => {
    res.send(result);
  })
})


//...Register Approves Verified Requests
app.post('/api/transcripts/regapprove', (req, res) => {
  const { rqst_id } = req.body;
  const sqlInsert = 'UPDATE tbltranscript_requests SET status = "worked on" WHERE rqst_id = ?';
  pool.query(sqlInsert, [rqst_id], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json({ success: false, message: 'Failed to update status.' });
    } else {
      res.status(200).json({ success: true, message: 'Status updated successfully.' });
    }
  });
});

//...Processed Transcripts Requests
app.get('/api/RegProcessedTrans', (req, res) => {
  const sqlGet = "SELECT * FROM tbltranscript_requests WHERE status = 'worked on' ";
  pool.query(sqlGet, (error, result) => {
    res.send(result);
  })
})


//...Tracking the Transcript request 
app.post('/api/trackTrans', (req, res) => {
  const { stuid, rqst_id } = req.body;
  const sql = 'SELECT status FROM tbltranscript_requests WHERE stuid = ? AND rqst_id = ?';

  // Execute the SQL query with the provided parameters
  pool.query(sql, [stuid, rqst_id], (err, result) => {
    if (err) {
      console.log(err);
      res.json({ success: false, message: 'An error occurred while querying the database.' });
    } else {
      if (result.length > 0) {
        const status = result[0].status;
        res.json({ success: true, status });
      } else {
        res.json({ success: false, message: 'Please check your entries and try again.' });
      }
    }
  });
});




//INTRODUCTORY REQUESTS************************************************************************************************************************
app.get('/api/getIntro', (req, res) => {
  const sqlGetIntro = `SELECT * FROM tbl_introductory_requests WHERE status = 'pending'`;
  pool.query(sqlGetIntro, (error, result) => {
    res.send(result);
  })
});

app.delete('/api/delete/:rqst_id', (req, res) => {
  const { rqst_id } = req.params;
  const sqlDeleteIntro = "DELETE FROM tbl_introductory_requests WHERE rqst_id = ?";
  pool.query(sqlDeleteIntro, rqst_id, (error, result) => {
    if (error) {
      console.log(error);
      res.status(500).json({ success: false, message: "Failed to delete entity." });
    } else {
      res.status(200).json({ success: true, message: "Entity deleted successfully." });
    }
  });
});

//...Finance officer Approves Request
app.post('/api/Intro/finapprove', (req, res) => {
  const { rqst_id } = req.body;
  const sqlInsert = 'UPDATE tbl_introductory_requests SET status = "verified" WHERE rqst_id = ?';
  pool.query(sqlInsert, [rqst_id], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json({ success: false, message: 'Failed to update status.' });
    } else {
      res.status(200).json({ success: true, message: 'Status updated successfully.' });
    }
  });
});

//...Registrar Gets from Finance
app.get('/api/Intro/getfinapproved', (req, res) => {
  const sqlGet = "SELECT * FROM tbl_introductory_requests WHERE status = 'verified'";
  pool.query(sqlGet, (error, result) => {
    res.send(result);
  })
})


//...Register Approves Verified Requests
app.post('/api/Intro/regapprove', (req, res) => {
  const { rqst_id } = req.body;
  const sqlInsert = 'UPDATE tbl_introductory_requests SET status = "worked_on" WHERE rqst_id = ?';
  pool.query(sqlInsert, [rqst_id], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json({ success: false, message: 'Failed to update status.' });
    } else {
      res.status(200).json({ success: true, message: 'Status updated successfully.' });
    }
  });
});

//...Register Rejects Verified Requests
app.post('/api/Intro/regrejects', (req, res) => {
  const { rqst_id } = req.body;
  const sqlInsert = 'UPDATE tbl_introductory_requests SET status = "rejected" WHERE rqst_id = ?';
  pool.query(sqlInsert, [rqst_id], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json({ success: false, message: 'Failed to update status.' });
    } else {
      res.status(200).json({ success: true, message: 'Status updated successfully.' });
    }
  });
});

//...Processed Introductory Requests
app.get('/api/Intro/RegProcessed', (req, res) => {
  const sqlGet = "SELECT * FROM tbl_introductory_requests WHERE status = 'worked_on' ";
  pool.query(sqlGet, (error, result) => {
    res.send(result);
  })
})


//...Tracking the Introuctory Letter request s
app.post('/api/Intro/trackIntro', (req, res) => {
  const { stuid, rqst_id } = req.body;
  const sql = 'SELECT status FROM tbl_introductory_requests WHERE stuid = ? AND rqst_id = ?';

  // Execute the SQL query with the provided parameters
  pool.query(sql, [stuid, rqst_id], (err, result) => {
    if (err) {
      console.log(err);
      res.json({ success: false, message: 'An error occurred while querying the database.' });
    } else {
      if (result.length > 0) {
        const status = result[0].status;
        res.json({ success: true, status });
      } else {
        res.json({ success: false, message: 'Please check your entries and try again.' });
      }
    }
  });
});





//My AIT Commerce database**************************************************************************************************************

//Card
//Posting a renewal request
app.post('/api/insert', (req, res) => {
  const { stuid, rqst_id, Campus, Service, Email, imagePath } = req.body;
  const dateApplied = new Date();

  const sqlInsert = `INSERT INTO card_tbl (stuid, rqst_id, campus, service, email, image, DateApplied, status) VALUES (?,?,?,?,?,?,?, 'pending')`;
  const values = [stuid, rqst_id, Campus, Service, Email, imagePath, dateApplied];

  pool.query(sqlInsert, values, (err, result) => {
    res.status(201).send(result)
    if (err) {
      console.log(err)
    }
  })


  // Nodemailer Component
  let mailTransponder = nodemailer.createTransport({
    host: 'sandbox.smtp.mailtrap.io',
    port: 2525,
    auth: {
      user: 'a44c4de27ead4a',
      pass: '8d4115cf506fe3' //password
    },
  });

  let message = {
    from: "selasiprecious20@gmail.com",
    to: Email,
    subject: "AIT ID Card Renewal",
    text: "Your request for a renewal/replacement has been issued. Here's your request's Tracking ID: " + rqst_id +
      "\n Use this tracking ID to track the progress of your request",
  }

  mailTransponder.sendMail(message, (error, info) => {
    if (error) {
      return console.log(error)
    } else
      console.log('message sent: %s', info.messageId)
  })
})

//Fetching Initial state of request
app.get('/api/getCard', (req, res) => {
  const sqlGetCard = `SELECT * FROM card_tbl WHERE status= 'pending'`;
  pool.query(sqlGetCard, (error, result) => {
    res.send(result);
  })
})

//Updating state of Card
app.post('/api/cards/updatecards', (req, res) => {
  const { rqst_id } = req.body;
  const dateApproved = new Date(); // Get the current timestamp

  const sqlInsert = 'UPDATE card_tbl SET status = "verified", DateApproved = ? WHERE rqst_id = ?';
  const values = [dateApproved, rqst_id];

  pool.query(sqlInsert, values, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json({ success: false, message: 'Failed to update status.' });
    } else {
      res.status(200).json({ success: true, message: 'Status updated successfully.' });
    }
  });
});

//Displaying finalized card
app.get('/api/finishedcards', (req, res) => {
  const sqlgetfinishedcards = `SELECT * FROM card_tbl WHERE status = 'verified' ORDER BY DateApproved DESC;
  `;
  pool.query(sqlgetfinishedcards, (error, result) => {
    res.send(result)
  })
})


//Updating state of Card
app.post('/api/cards/approvedcards', (req, res) => {
  const { rqst_id } = req.body;
  const dateApproved = new Date(); // Get the current timestamp

  const sqlInsert = 'UPDATE card_tbl SET status = "worked_on", DateApproved = ? WHERE rqst_id = ?';
  const values = [dateApproved, rqst_id];

  pool.query(sqlInsert, values, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json({ success: false, message: 'Failed to update status.' });
    } else {
      res.status(200).json({ success: true, message: 'Status updated successfully.' });
    }
  });
});

app.post('/api/cards/rejectedcards', (req, res) => {
  const { rqst_id } = req.body;
  const dateApproved = new Date(); // Get the current timestamp

  const sqlInsert = 'UPDATE card_tbl SET status = "rejected", DateApproved = ? WHERE rqst_id = ?';
  const values = [dateApproved, rqst_id];

  pool.query(sqlInsert, values, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json({ success: false, message: 'Failed to update status.' });
    } else {
      res.status(200).json({ success: true, message: 'Status updated successfully.' });
    }
  });
});

app.get('/api/fetchrejectedcards', (req, res) => {
  const sqlgetfinishedcards = `SELECT * FROM card_tbl WHERE status = "rejected" ORDER BY DateApproved DESC`;
  pool.query(sqlgetfinishedcards, (error, result) => {
    res.send(result)
  })
})

app.get('/api/fetchapprovedcards', (req, res) => {
  const sqlgetfinishedcards = `SELECT * FROM card_tbl WHERE status = "worked_on" ORDER BY DateApproved DESC`;
  pool.query(sqlgetfinishedcards, (error, result) => {
    res.send(result)
  })
})



//Posting a complaint
app.post('/api/complain', (req, res) => {
  const { ID, rqst_id, Complaints } = req.body
  const sqlPostComplain = `INSERT INTO card_complaint (ID, rqst_id, complaints, image) VALUES (?,?,?,?)`;
  pool.query(sqlPostComplain, [ID, rqst_id, Complaints], (error, result) => {
    if (error) {
      console.log(result)
    }
  })
})

//Delete a request
app.delete('/api/deleteCard/:ID', (req, res) => {
  const { ID } = req.params;
  const sqlDeleteCard = "DELETE FROM card_tbl WHERE ID = ?";
  pool.query(sqlDeleteCard, ID, (error, result) => {
    if (error) {
      console.log(error);
      res.status(500).json({ success: false, message: "Failed to delete entity." });
    } else {
      res.status(200).json({ success: true, message: "Entity deleted successfully." });
    }
  });
});



app.post('/api/checkTracking', (req, res) => {
  const { id, trackID } = req.body;
  // Assuming you have a table named 'requests' with columns 'id_number' and 'tracking_id'
  const sqlCheck = 'SELECT status FROM card_tbl WHERE ID = ? AND rqst_id = ?';
  pool.query(sqlCheck, [id, trackID], (err, result) => {
    if (err) {
      console.log(err);
      res.json({ success: false, message: 'An error occurred while querying the database.' });
    } else {
      if (result.length > 0) {
        const status = result[0].status;
        res.json({ success: true, status });
      } else {
        res.json({ success: false, message: 'Entry not found.' });
      }
    }
  });
});

// Helper function to map status to step number
function getStepFromStatus(status) {
  if (status === 'Pending') {
    return 0;
  } else if (status === 'Verified') {
    return 1;
  } else if (status === 'Approved') {
    return 2;
  }
  return 0; // Default to step 0 if status is unknown
}






// IMAGE HANDLING
//Configuring multer storage

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'Uploads/Cards');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });


// Handle image upload
app.post('/api/upload', upload.single('image'), (req, res) => {
  if (req.file) {
    // Here, you can store the image in the database
    console.log('Image uploaded:', req.file.path);
    res.sendStatus(200);
  } else {
    res.status(400).send('No image file found');
  }
});




//Searching through Joint Database to fatch Request state

app.post('/api/entries', (req, res) => {
  const { id, rqst_id } = req.body;
  const sql = `SELECT 'card_tbl' AS table_name, \n
  status FROM card_tbl WHERE stuid ='${id}'AND rqst_id = '${rqst_id}' \n
  UNION ALL \n
  SELECT 'tbl_deferments' AS table_name, \n
  status FROM tbl_deferments WHERE stuid = '${id}' AND rqst_id = '${rqst_id}' \n
  UNION ALL \n
  SELECT 'tbl_introductory_requests' AS table_name, \n
  status FROM tbl_introductory_requests WHERE stuid ='${id}' AND rqst_id = '${rqst_id}'\n 
  UNION ALL \n
  SELECT 'tbltranscript_requests' AS table_name, \n
  status FROM tbltranscript_requests WHERE stuid ='${id}' AND rqst_id = '${rqst_id}';`;


  // Execute the SQL query with the provided parameters
  pool.query(sql, [id, rqst_id], (err, result) => {
    if (err) {
      console.log(err);
      res.json({ success: false, message: 'An error occurred while querying the database.' });
    } else {
      if (result.length > 0) {
        const status = result[0].status;
        res.json({ success: true, status });
      } else {
        res.json({ success: false, message: 'Please check your entries and try again.' });
      }
    }
  });
});






// REPORTS FOR CARDS
app.get('/reportscalc', (req, res) => {
  let sqlReportPending = "SELECT COUNT(*) AS count FROM card_tbl WHERE status='pending'";
  let sqlReportVerified = "SELECT COUNT(*) AS count FROM card_tbl WHERE status='verified'";
  let sqlReportApproved = "SELECT COUNT(*) AS count FROM card_tbl WHERE status='worked_on'";

  pool.query(sqlReportPending, (err, pendingResult) => {
    if (err) {
      console.log(err);
      res.json({ success: false, message: "An error occurred" });
      return;
    }

    pool.query(sqlReportVerified, (err, verifiedResult) => {
      if (err) {
        console.log(err);
        res.json({ success: false, message: "An error occurred" });
        return;
      }

      pool.query(sqlReportApproved, (err, approvedResult) => {
        if (err) {
          console.log(err);
          res.json({ success: false, message: "An error occurred" });
          return;
        }

        const data = {
          pending: pendingResult[0].count,
          verified: verifiedResult[0].count,
          approved: approvedResult[0].count
        };

        res.json({ success: true, data });
      });
    });
  });
});


// REPORTS FOR Deferment
app.get('/reportscalcdef', (req, res) => {
  let sqlReportPending = "SELECT COUNT(*) AS count FROM tbl_deferments WHERE status='pending'";
  let sqlReportVerified = "SELECT COUNT(*) AS count FROM tbl_deferments WHERE status='verified'";
  let sqlReportApproved = "SELECT COUNT(*) AS count FROM tbl_deferments WHERE status='worked_on'";

  pool.query(sqlReportPending, (err, pendingResult) => {
    if (err) {
      console.log(err);
      res.json({ success: false, message: "An error occurred" });
      return;
    }

    pool.query(sqlReportVerified, (err, verifiedResult) => {
      if (err) {
        console.log(err);
        res.json({ success: false, message: "An error occurred" });
        return;
      }

      pool.query(sqlReportApproved, (err, approvedResult) => {
        if (err) {
          console.log(err);
          res.json({ success: false, message: "An error occurred" });
          return;
        }

        const data = {
          pending: pendingResult[0].count,
          verified: verifiedResult[0].count,
          approved: approvedResult[0].count
        };

        res.json({ success: true, data });
      });
    });
  });
});


// REPORTS FOR TRANSCRIPTS
app.get('/reportscalcintrod', (req, res) => {
  let sqlReportPending = "SELECT COUNT(*) AS count FROM tbltranscript_requests WHERE status='pending'";
  let sqlReportVerified = "SELECT COUNT(*) AS count FROM tbltranscript_requests WHERE status='verified'";
  let sqlReportApproved = "SELECT COUNT(*) AS count FROM tbltranscript_requests WHERE status='worked on'";

  pool.query(sqlReportPending, (err, pendingResult) => {
    if (err) {
      console.log(err);
      res.json({ success: false, message: "An error occurred" });
      return;
    }

    pool.query(sqlReportVerified, (err, verifiedResult) => {
      if (err) {
        console.log(err);
        res.json({ success: false, message: "An error occurred" });
        return;
      }

      pool.query(sqlReportApproved, (err, approvedResult) => {
        if (err) {
          console.log(err);
          res.json({ success: false, message: "An error occurred" });
          return;
        }

        const data = {
          pending: pendingResult[0].count,
          verified: verifiedResult[0].count,
          approved: approvedResult[0].count
        };

        res.json({ success: true, data });
      });
    });
  });
});


// REPORTS FOR INTRODUCTORY LETTERS
app.get('/reportscalcIntL', (req, res) => {
  let sqlReportPending = "SELECT COUNT(*) AS count FROM tbl_introductory_requests WHERE status='pending'";
  let sqlReportVerified = "SELECT COUNT(*) AS count FROM tbl_introductory_requests WHERE status='verified'";
  let sqlReportApproved = "SELECT COUNT(*) AS count FROM tbl_introductory_requests WHERE status='worked_on'";

  pool.query(sqlReportPending, (err, pendingResult) => {
    if (err) {
      console.log(err);
      res.json({ success: false, message: "An error occurred" });
      return;
    }

    pool.query(sqlReportVerified, (err, verifiedResult) => {
      if (err) {
        console.log(err);
        res.json({ success: false, message: "An error occurred" });
        return;
      }

      pool.query(sqlReportApproved, (err, approvedResult) => {
        if (err) {
          console.log(err);
          res.json({ success: false, message: "An error occurred" });
          return;
        }

        const data = {
          pending: pendingResult[0].count,
          verified: verifiedResult[0].count,
          approved: approvedResult[0].count
        };

        res.json({ success: true, data });
      });
    });
  });
});

// // // API endpoint for fetching request data
// app.get('/api/requests', (req, res) => {
//   const timeRange = req.query.timeRange; // 'months' or 'weeks'

//   let sqlQuery = `
//     SELECT DATE_FORMAT(DateApplied, '%Y-%m-%d') AS date,
//            COUNT(*) AS requestCount
//     FROM card_tbl
//   `;

//   if (timeRange === 'months') {
//     sqlQuery += `
//       WHERE YEAR(DateAppliedDateApplied) = YEAR(CURRENT_DATE())
//       GROUP BY YEAR(DateApplied), MONTH(DateApplied)
//       ORDER BY DateApplied
//     `;
//   } else if (timeRange === 'weeks') {
//     sqlQuery += `
//       WHERE YEAR(DateApplied) = YEAR(CURRENT_DATE())
//       AND WEEK(DateApplied) = WEEK(CURRENT_DATE())
//       GROUP BY YEAR(DateApplied), WEEK(DateApplied)
//       ORDER BY DateApplied
//     `;
//   }

//   pool.query(sqlQuery, (error, results) => {
//     if (error) {
//       console.error('Error fetching data:', error);
//       res.status(500).json({ error: 'Internal server error' });
//     } else {
//       res.json(results);
//     }
//   });
// });


app.get('/api/requests', (req, res) => {
  // Replace this with actual database queries to get request counts
  const counts = {
    Pending: requests.filter(request => request.state === 'Pending').length,
    Verified: requests.filter(request => request.state === 'Verified').length,
    Approved: requests.filter(request => request.state === 'Approved').length,
  };

  res.json(counts);
});