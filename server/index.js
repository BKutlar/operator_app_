// const express = require('express'); //
// const app = express();
// const mongoose = require('mongoose')
// const dotenv = require('dotenv');
// const routesUrls = require('./routes/routes');
// const auth = require('./routes/auth');
// const cors = require('cors')

// dotenv.config()

// mongoose.connect(process.env.DATABASE_ACCESS, () => console.log('Database connected'))

// app.use(express.json())
// app.use(cors())
// app.use('/app', routesUrls)
// app.use('/app', auth)
// app.listen(5000, ()=> {
//     console.log("Server started on 5000")
// })

const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const User = require('./models/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
// const { schema } = require('./models/user.model')
// const schema = new schema({name: String})

app.use(cors())
app.use(express.json())


// schema.path('email').validate(async (email) => {
//     const emailCount = await mongoose.models.User.countDocuments({email})
//     return !emailCount
// }, "Email already exists")

mongoose.connect('mongodb+srv://Brayan:Brayan_0401@cluster0.8jjav.mongodb.net/users_table?retryWrites=true&w=majority', ()=>console.log('Database Connected'));

app.post('/api/register', async (req, res) => {
    console.log(req.body)
    try{
        const newPassword = await bcrypt.hash(req.body.password, 10)
        
        await User.create({
            name: req.body.name,
            email: req.body.email,
            password: newPassword,
        })
        res.json({status:'ok'})
    } catch (err) {
        res.json({status: 'error', error:'Duplicate email'})
        console.log(err)
    }

})




app.post('/api/login', async (req, res) => {
    const user = await User.findOne({
        email: req.body.email,
    })
    if(!user) {
        return {status: 'error', error: 'Invalid login'}
    }

    const isPasswordValid = await bcrypt.compare(
        req.body.password,
        user.password
    )

    if(isPasswordValid) {
        const token = jwt.sign(
            {
                name: user.name,
                email: user.email
            }, 
            'secret123'
        )

        return res.json({status:'ok', user: token})
    } else {
        return res.json({status:'error', user:false})
    }
})

app.get('/api/quote', async (req, res) => {
    const token = req.headers['x-access-token']

    try {
        const decoded = jwt.verify(token, 'secret123')
        const email = decoded.email
        const user  = await User.findOne({email: email})

        return res.json({status:'ok', quote: user.quote})
    } catch (error) {
            console.log(error)
            res.json({status:'error', error: 'invalid token'})
    }
})

app.post('/api/quote', async (req, res)=>{
    const token = req.headers['x-access-token'];

    try {
        const decoded = jwt.verify(token, 'secret123')
        const email = decoded.email
        await User.updateOne(
            {email: email},
            {$set: {quote: req.body.quote}},
        )    

        return res.json({status:'ok'})
    } catch(error) {
        console.log(error)
        res.json({status: "error", error: 'invalid token'})
    }
})

app.listen(5000, ()=>{
    console.log('listening on port 5000')
})