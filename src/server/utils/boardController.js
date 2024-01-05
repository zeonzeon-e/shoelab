// const Board = require('../model/Board');

// exports.getAll = async function(req, res, next){
//     try{
//         const allBoards = await Board.find({
//             userId: res.locals.userId
//         });
//         res.json({ boards: allBoards });
//     }catch(err){
//         next(err);
//     }
// }