export const notFound = (req,res,next)=>{
    const error = new Error(`Not found ${req.originalUrl}`)
    res.status(400)
    next(error)
}
export const errorHandler = (err,req,res,next)=>{
    const statusCode=res.statusCode ==200?500:res.statusCode//если статус код 200 меняем
    res.status(statusCode)
    res.json({
        message:err.message,
        stack:process.env.NODE_ENV==='production' ? null : err.stack
    })
}