const express = require('express');
const server = express();
// const dbUser = require('./data/helpers/userDb.js');
// const dbPost = require('./data/helpers/postDb.js');
const userRoutes = require('./users/userRoutes.js');
const postRoutes = require('./posts/postRoutes.js');

server.use('/api/users', userRoutes);
server.use('/api/posts', postRoutes);

// custom middleware
// function uppercased(req, res, next) {
//     req.body.upper = req.body.name.toUpperCase();
//     // console.log(req.body);
//     next();
// };

// function validUserId(req, res, next) {
//     const { userId } = req.body;
//     dbUser.get(userId)
//     .then(user => {
//         console.log(user);
//         if (!user) {
//             res.status(404).json({ message: 'The user with the specified ID does not exist. Please enter a valid userId and try again.' });
//             return;
//         } else {
//             next();
//         }
//     })
// };

// configure middleware
server.use(express.json());

// User routing
server.get('/', (req, res) => {
    res.send('Welcome to Node-Blog, an express middleware production');
} );

// server.get('/api/users', (req, res) => {
//     dbUser.get()
//     .then(users => {
//         res.status(200).json(users);
//     })
//     .catch(err => {
//         console.error('error', err);

//         res.status(500).json({ error: 'The users information could not be retrieved.' });
//     })
// })

// server.get('/api/users/:id', (req, res) => {
//     dbUser.get(req.params.id)
//     .then(user => {
//         // console.log(user);
//         if (!user) {
//             res.status(404).json({ message: 'The user with the specified ID does not exist.' });
//             return;
//         }
//         res.status(200).json(user);
//     })
//     .catch(err => {
//         console.error('error', err);
//         res.status(500).json({ error: 'The user information could not be retrieved.'})
//     })
// });

// server.post('/api/users', uppercased, (req, res) => {
//     const { name, upper } = req.body;
//     const upperCaser = req.body.upper;
//     if (!name) {
//         res.status(400).json({ errorMessage: 'Please provide a username.' });
//         return;
//     }
//     dbUser.insert({
//         name: upperCaser
//     })
//     .then(response => {
//         res.status(201).json(req.body.upper);
//     })
//     .catch(error => {
//         console.error('error', err);
//         res.status(500).json({ error: 'There was an error while saving the username to the database' });
//         return;
//     })
// })

// server.delete('/api/users/:id', (req, res) => {
//     const { id } = req.params;
//     dbUser.remove(id)
//         .then(count => {
//             // console.log(count);
//             if (count) {
//                 res.status(204).json({ message: 'User has been deleted'}).end();
//             } else {
//                 res.status(404).json({ message: 'The user with the specified ID does not exist.' })
//             }
//         })
//         .catch(error => res.status(500).json({ error: 'The user could not be removed' }));
// });

// server.put('/api/users/:id', uppercased, (req, res) => {
//     const { name } = req.body;
//     const upperCaser = req.body.upper;
//     if (!name) {
//         res.status(400).json({ errorMessage: 'Please provide the new username.' });
//         return;
//     }
//     dbUser.update(req.params.id, {name: upperCaser})
//         .then(user => {
//             if (user) {
//                 res.status(200).json(req.body.upper)
//                 // console.log(req.body);
//             } else {
//                 res.status(404).json({ message: 'The user with the specified ID does not exist.' })
//             }
            
//         })
//         .catch(err => res.status(500).json({ message: 'The user information could not be modified.' }));
// });

// server.get('/api/users/:id/posts', (req, res) => {
//     dbUser.getUserPosts(req.params.id)
//     .then(userPosts => {
//         // console.log(userPosts);
//         if (!userPosts) {
//             res.status(404).json({ message: 'The user with the specified ID does not have any posts.' });
//             return;
//         }
//         res.status(200).json(userPosts);
//     })
//     .catch(err => {
//         console.error('error', err);
//         res.status(500).json({ error: 'The user information could not be retrieved.'})
//     })
// });

// // Posts routing ---------------------------------------------
// server.get('/api/posts', (req, res) => {
//     dbPost.get()
//     .then(posts => {
//         res.status(200).json(posts);
//     })
//     .catch(err => {
//         console.error('error', err);

//         res.status(500).json({ error: 'The posts information could not be retrieved.' });
//     })
// })

// server.get('/api/posts/:id', (req, res) => {
//     dbPost.get(req.params.id)
//     .then(post => {
//         // console.log(user);
//         if (!post) {
//             res.status(404).json({ message: 'The post with the specified ID does not exist.' });
//             return;
//         }
//         res.status(200).json(post);
//     })
//     .catch(err => {
//         console.error('error', err);
//         res.status(500).json({ error: 'The post information could not be retrieved.'})
//     })
// });

// server.post('/api/posts', validUserId, (req, res) => {
//     const { userId, text } = req.body;
//     if (!userId || !text) {
//         res.status(400).json({ errorMessage: 'Please provide a valid userId and post text.' });
//         return;
//     }
//     dbPost.insert({
//         text,
//         userId
//     })
//     .then(response => {
//         res.status(201).json(req.body);
//     })
//     .catch(error => {
//         console.error('error', err);
//         res.status(500).json({ error: 'There was an error while saving the post to the database' });
//         return;
//     })
// });

// server.delete('/api/posts/:id', (req, res) => {
//     const { id } = req.params;
//     dbPost.remove(id)
//         .then(count => {
//             console.log(count);
//             if (count) {
//                 console.log('this ran');
//                 res.status(200).json({ message: 'Post has been deleted'});
//             } else {
//                 res.status(404).json({ message: 'The post with the specified ID does not exist.' })
//             }
//         })
//         .catch(error => res.status(500).json({ error: 'The post could not be removed' }));
// });

// server.put('/api/posts/:id', (req, res) => {
//     const { text } = req.body;
//     if (!text) {
//         res.status(400).json({ errorMessage: 'Please provide the new post content.' });
//         return;
//     }
//     dbPost.update(req.params.id, req.body)
//         .then(post => {
//             // console.log(post);
//             if (post) {
//                 res.status(200).json(req.body)
//                 // console.log(req.body);
//             } else {
//                 res.status(404).json({ message: 'The post with the specified ID does not exist.' })
//             }
            
//         })
//         .catch(err => res.status(500).json({ message: 'The post information could not be modified.' }));
// });

server.listen(8000, () => console.log('/n== API on port 8k ==/n') );