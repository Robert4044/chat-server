const express = require('express');
const msgCtrl = require('./controllers/messages_controller');

const app = express();

app.use(express.json());
app.use(express.static(__dirname + '/../public/build'));

const PORT = 3001;

app.get('/api/messages', msgCtrl.read);
app.post('/api/messages', msgCtrl.create);
app.put('/api/messages/:message_id', msgCtrl.update);
app.delete('/api/messages/:message_id', msgCtrl.delete);

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
