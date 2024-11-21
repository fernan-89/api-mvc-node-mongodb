const User = require('../model/userModel');

const getAllUsers = async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err)  
   {
      res.status(500).json({ error: err.message });
    }
  };

  const countUsers = async (req, res) => {
    try {
      const countUsers = await User.countDocuments({});
      res.json( countUsers);
    } catch (err)  
   {
      res.status(500).json({ error: err.message });
    }
  };

const newUser = async (req, res ) => {
    const newUser = new User(req.body);
    try {
        const users = await newUser.save();
        res.json(users);
      } catch (err)  
     {
        res.status(500).json({ error: err.message });
      }
};

const getById = async (req, res ) => {
    const {clientId}= req.params;
    try {
        const users = await User.findOne({clientId});
        res.json(users);
      } catch (err)  
     {
        res.status(404).json({ error: 'Usuário não encontrado com esse id' });
      }
};

const getByName = async (req, res ) => {
    const {name} =  req.params;
    try {
        const users = await User.find({ name: { $regex: name, $options: 'i' } });
        res.json(users),{ message: 'Usuário encontrado com sucesso' };
      } catch (err)  
     {
        res.status(404).json({ error: 'Usuário não encontrado com esse nome' });
      }
};

const updateUser = async (req, res) => {
    const { clientId } = req.params;
    const { name, email, address, cellphone } = req.body;

    try {
        const updatedUser = await User.findOneAndUpdate(
            { clientId },
            { $set: { name, email, address, cellphone } },
            { new: true }
        );

        if (!updatedUser) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }

        res.json(updatedUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao atualizar usuário' });
    }
};

const deleteUserById = async (req, res) => {
    const { clientId } = req.params;
    try {
        const result = await User.deleteOne({ clientId });
        if (result.deletedCount === 0) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }
        res.json({ message: 'Usuário deletado com sucesso' });
    } catch (error)  
 {
        console.error(error);
        res.status(500).json({ error: 'Erro ao deletar usuário'  
 });
    }
};

module.exports = {
    getAllUsers,
    newUser,
    countUsers,
    getById,
    getByName,
    updateUser,
    deleteUserById,
};