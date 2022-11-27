const jwt =  require('jsonwebtoken')
const SECRET  = 'ef3c5302'

module.exports={
    verifyJWT: (req,res,next)=>{
      const token = req.headers['x-access-token']
    if (!token){ console.log('Token não foi passado') 
    return res.status(401).json({ auth: false, message: 'No token provided.' });
    }
    jwt.verify(token,SECRET,(err,decoded)=>{  
      if (err){
        console.log('Token invalido')
          return res.status(401).json({ auth: false, message: 'Failed to authenticate token.' });
      } 
      req.userId = decoded.userId
            console.log('Token, verificado')
        next()
    })
    }
}     