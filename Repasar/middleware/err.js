function handlerCustomErrors(error,req,res,next){
    if(error.statusCode){
        res.status(error.statusCode).send({
            message:error.message
        });
    }else{
        res.status(500).send('Ha ocurrido un error en el servidor');
        console.log(error);
    }
}

module.exports = {handlerCustomErrors};