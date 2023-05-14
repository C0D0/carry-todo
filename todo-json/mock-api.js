import express from 'express';
import { readFile, writeFile } from 'fs';
 
const app = express();
const filePath = 'db.json'; // Path to your JSON file

// Enable CORS middleware to avoid CORS Errors
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use(express.json());


function saveTodoList(todoList) {
  if (!todoList.todoList) {
    todoList = { "todoList": todoList };
  }
  let toSave = JSON.stringify(todoList);
  writeFile(filePath, toSave, 'utf8', (err) => {
    if (err) {
      throw new Error('Error writing file:'+ err)
    }
  });
}

app.post('/save-item', (req, res) => {

  const todoItem = req.body;

  readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      return res.status(500).json({ message: 'Internal server error' });
    }

    try {

      app.jsonData = JSON.parse(data);

      if(app.jsonData.todoList[todoItem.id]) { // The item just has been modified
        app.jsonData.todoList[todoItem.id] = todoItem;
      } else { // The item is new
        todoItem.id = app.jsonData.todoList.length;
        app.jsonData.todoList.push(todoItem);
      }

      saveTodoList(app.jsonData)

    } catch (err) {
      console.error('Error:', err);
      return res.status(500).json({ message: 'Internal server error' });
    }
    res.status(200).json({ message: 'Todo list saved successfully!' });
  });
});

app.get('/todos', (req, res) => {
  readFile('db.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      return res.status(500).json({ message: 'Internal server error' });
    }
    try {
      const jsonData = JSON.parse(data);
      return res.status(200).json(jsonData);
    } catch (err) {
      console.error('Parse error:', err);
      return res.status(500).json({ message: 'Internal server error' });
    }
  })
});

app.listen(3000, () => {
  console.log('Mock API server is running on http://localhost:3000');
});
