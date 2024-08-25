const express  = require('express');
const app = express();
const cors = require('cors');
const PORT  = process.env.PORT || 3000;
const { Sequelize, Model, DataTypes } = require('sequelize');
// Create Sequelize instance
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite'
});

// Define User model
class User extends Model {}
User.init({
  name: DataTypes.STRING,
  email: DataTypes.STRING,
  password: DataTypes.STRING
}, { sequelize, modelName: 'user' });

// Sync models with database
sequelize.sync();

app.use(express.json());
app.use(cors())

app.get('/users', async (req, res) => {
    const users = await User.findAll();
    res.json(users);
  });
  
  app.get('/users/:id', async (req, res) => {
    const user = await User.findByPk(req.params.id);
    res.json(user);
  });
  
  app.post('/users', async (req, res) => {
    const user = await User.create(req.body);
    res.json(user);
  });
  
  app.put('/users/:id', async (req, res) => {
    console.log(req)
    const user = await User.findByPk(req.params.id);
    if (user) {
      await user.update(req.body);
      res.json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  });
  
  app.delete('/users/:id', async (req, res) => {
    const user = await User.findByPk(req.params.id);
    if (user) {
      await user.destroy();
      res.json({ message: 'User deleted' });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  });

app.listen(PORT,()=>{
    console.log(`🔥 Listen Server PORT: \x1b[33m ${PORT} \x1b[0m 🔥`)
})