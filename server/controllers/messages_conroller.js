let messages = [];
let id = 0;

module.exports = {
  create: (req,res) => {
    console.log(req.body)
    let text = req.body.text
    let time = req.body.time
    let name = req.body.name
    let newMessage = {
      id: id,
      text: text,
      time: time,
      name: name
    }
    messages.push(newMessage);
    id++;
    res.status(200).json(messages);
  },
  read: (req,res) => {
    res.status(200).json(messages);
  },
  update: (req,res) => {
    let text = req.body.text
    let idToCheck = req.params.id;
    let indexToChange = messages.findIndex((message) => {return message.id == idToCheck});
    // console.log(indexToChange);
    messages[indexToChange] = {
      id: messages[indexToChange].id,
      text: text || messages[indexToChange].text,
      time: messages[indexToChange].time,
      name: messages[indexToChange].name
    }
    res.status(200).json(messages)
  },
  delete: (req,res) => {
    let idToDelete = req.params.id;
    let indexToDelete = messages.findIndex((message) => {message.id == idToDelete})
    console.log(indexToDelete)
    messages.splice(indexToDelete,1)
    res.status(200).json(messages)
  }
}
