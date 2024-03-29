import jwt from "jsonwebtoken";
import { compare, hash } from "bcrypt";


export const comparePassword = (password, hash) => {
    return compare(password, hash)
}

export const hashPassword = (password) => {
    return hash(password, 5)
}

export const createJWT = (user) => {
    const token = jwt.sign({id: user.id, username: user.username},  process.env.JWT_SECRET)
    return token
}

export const protect = (req, res, next) => {
    const bearer = req.headers.authorization

    if(!bearer) {
        res.status(401),
        res.json({message : "You're not authorized"})
        return
    }

    const [, token] = bearer.split(" ")
    
    if(!token) {
        res.status(401)
        res.json({message : "Not valid token"})
        return
    }

    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET)
        req.user = payload
        console.log(payload)
        next()
    } catch (e) {
        console.error(e)
        res.status(401)
        res.json({message : "Not valid token"})
        return
    }
}