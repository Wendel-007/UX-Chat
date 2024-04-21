const userModel = require('../models/userModel')
const bcrypt = require('bcrypt')
const validator = require('validator')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
    const jwtkey = process.env.JWT_SECRET_KEY

    return jwt.sign({_id}, jwtkey)
}

const registerUser =  async (req,res) => {

    try {
    const {name, email, password} = req.body

    let user = await userModel.findOne({email})

    if(user) return res.status(400).json("Usuario do email inserido já existe...")

    if(!name || !email || !password) return res.status(400).json("Preencha todas as informações necessarias...")

    if(!validator.isEmail(email)) return res.status(400).json("Email inválido...")

    if(!validator.isStrongPassword(password)) return res.status(400).json("A senha fornecida é fraca...")

    user = new userModel({name, email, password})

    const salt = await bcrypt.genSalt(10)
    user.password = await bcrypt.hash(user.password, salt)

    await user.save()

    const token = createToken(user._id)

    res.status(200).json({_id:user._id, name, email, token})
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
}

const loginUser = async(req,res) => {
    const {email, password} = req.body

    try {
        let user = await userModel.findOne({email})

        if(!user) return res.status(400).json("Email ou Senha inválidos...")

        const isvalidPassword = await bcrypt.compare(password, user.password)

        if(!isvalidPassword) return res.status(400).json("Email ou Senha inválidos...")

        const token = createToken(user._id)

        res.status(200).json({_id:user._id, name: user.name, email, token})
    } catch (error) {
        
    }
}

const findUser = async (req,res) => {
    const userId = req.params.userId

    try {
        const user = await userModel.findById(userId)

        res.status(200).json(user)
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
}

const findAllUsers = async (req,res) => {
    try {
        const users = await userModel.find()

        res.status(200).json(users)
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
}

const updateUser = async (req, res) => {
    const userId = req.params.userId;
    const { name, email, password } = req.body;

    try {
        let user = await userModel.findById(userId);

        if (!user) return res.status(404).json("Usuário não encontrado...");

        if (name) user.name = name;
        if (email) user.email = email;
        if (password) {
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(password, salt);
        }

        await user.save();
        res.status(200).json(user);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
};

const deleteUser = async (req, res) => {
    const userId = req.params.userId;

    try {
        const user = await userModel.findByIdAndDelete(userId);
        if (!user) return res.status(404).json("Usuário não encontrado...");
        res.status(200).json({ message: "Usuário excluído com sucesso!" });
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
};

module.exports = { registerUser, loginUser, findUser, findAllUsers, updateUser, deleteUser };