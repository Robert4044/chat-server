const messages = [];

// let id = messages[messages.length - 1].id + 1;
let id = 0;

module.exports = {
    create: (req, res) => {
        const { text, time } = req.body;
        const newMessage = {
            id,
            text,
            time,
        };
        messages.push(newMessage);
        id++;
        res.status(200).send(messages);
    },
    read: (req, res) => {
        res.status(200).send(messages);
    },
    update: (req, res) => {
        const { message_id } = req.params;
        const { text, time } = req.body;
        const index = messages.findIndex(element => element.id === +message_id);
        if (index === -1) {
            return res.status(404).send('Message does not exist');
        }
        const existingMessage = messages[index];
        messages[index] = {
            id: existingMessage.id,
            text: text || existingMessage.text,
            time: time || existingMessage.time,
        };
        res.status(200).send(messages);
    },
    delete: (req, res) => {
        const { message_id } = req.params;
        const index = messages.findIndex(element => element.id === +message_id);
        if (index === -1) {
            res.status(404).send('Message does not exist');
        }
        messages.splice(index, 1);
        res.status(200).send(messages);
    },
};
