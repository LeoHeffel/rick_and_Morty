const { Character } = require('../DB_connection');

module.exports = getAllChars = async (req, res) => {
    
        try{
            const chars = await Character.findAll({})
          
                    res.status(200).send(chars)
                
              
        }
        catch(error){
            res.status(500).send(error.message)
        }
    
}
