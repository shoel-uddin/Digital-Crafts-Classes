const http = require('http');
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const bcrypt = require('bcryptjs');

const app = express();
const server = http.createServer(app);

const PORT = 3000;
const HOST = '0.0.0.0';

const logger = morgan('tiny');

const Sequelize = require('sequelize');
const { User } = require('./models');

const db = [];

app.use(logger);
// Disabling for local development
// app.use(helmet());

// Parse any form data from POST requests
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.send(`<h1>Hello!</h1><br><a href="/new">Sign up</a> or <a href="/login">Log in</a>`)
});

app.get('/new', (req, res) => {
    res.send(`
<h1>Sign up</h1>
<form method="POST">
  <label>
    Username:
    <input type="username" type="text" autofocus />
  </label>
  <label>
    Password:
    <input type="password" type="password" />
  </label> 
 <input type="submit" value="do it!" />
</form>
    `);
});

app.post('/new', async (req, res) => {
    const { username, password } = req.body;
    console.log(username, password); // BAD! Don't console.log() plain text passwords!
    if (username === '' || password === '') {
        // Really should give the user a message
        console.log('username or password is blank');
        res.redirect('/new');
    } else {
        // salty hashbrowns!
        // A "salt" is a String that helps bcrypt randomize the scrambled version
        // of your password.

        // ACTIVITY: Create the salt to use with .hashSync() 
        const salt = bcrypt.genSaltSync(10)


        // Use the salt to create the hash
        const hash = bcrypt.hashSync(password, salt);
        try {
            const newUser = await User.create({
                username, // username: username
                hash      // hash: hash
            });
            res.redirect('/login');                        
        } catch (e) {
            // e.name will be "SequelizeUniqueConstraintError"
            // e is a JavaScript Error object.
            // Error objects have a .name
            if (e.name === "SequelizeUniqueConstraintError") {
                // We should tell the user that the username is taken
                // and then redirect them
            }
     
            res.redirect('/new');
        }
    }
});

app.get('/login', (req, res) => {
    res.send(`
<h1>Log in</h1>
<form method="POST">
  <label>
    Username:
    <input name="username" type="text" autofocus />
  </label>
  <label>
    Password:
    <input name="password" type="password" />
  </label> 
 <input type="submit" value="do it!" />
</form>
    `);
});

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    // Get the user by the username

    // ACTIVITY: Find the user in the database
    const user = await User.findOne({
        where: {
            username
        }
    })

    // if not found, then user will be "falsey" if not found
    if (user) {
        console.log('valid user...checking password');
        // Use the bcrypt library to check the password
        // Store hashes, not passwords!!!!!!!!!
        // A hash is a one-way encrypted version of the password.

        // Variables that start with `is` or `has` usually means boolean.
        const isValid = bcrypt.compareSync(password, user.hash)
        console.log('ACTIVITY: compare the password to the user hash');

        // Now, the condition reads like English: "if is valid? then..."
        if (isValid) {
            console.log('password is good!');
            // ACTIVITY: send them to the members-only page
            res.redirect('/members-only')
        } else {
            console.log('but password is wrong');
            res.redirect('/login');
        }
    } else {
        console.log('not a valid user');
        res.redirect('/login');
    }
});

app.get('/members-only', (req, res) => {
    res.send(`

<h1>Only for logged-in users!</h1>
<h2>But not really enforced - see the sessions example</h2>
<a href="/">Start over</a>
    `);
});


server.listen(PORT, HOST, () => {
    console.log(`Listening at http://${HOST}:${PORT}`);
});
