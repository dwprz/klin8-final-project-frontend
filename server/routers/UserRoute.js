import express from 'express'
import { UnFollowUser, deleteUser, followUser, getUser, updateUser } from '../controllers/UserController.js';
// import { deleteUser, followUser, getAllUsers, getUser, unfollowUser, updateUser } from '../controllers/UserController.js'
// import authMiddleWare from '../middleware/AuthMiddleware.js';

const router = express.Router()

// router.get('/', async(req, res)=>{
//     res.send("user route")
// })

router.get('/:id', getUser);
// router.get('/',getAllUsers)
router.put('/:id',updateUser)
router.delete('/:id',deleteUser)
router.put('/:id/follow',followUser)
router.put('/:id/unfollow',UnFollowUser)

export default router