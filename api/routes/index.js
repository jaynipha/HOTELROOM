import express from 'express';
import {
	getRoomType,
	deleteRoomById,
	createRoomType,
	updateRoomById,
	getRoombySearchAndFilter,
} from '../controllers/index.js';

const router = express.Router();

router.post('/rooms-types', createRoomType);

router.get('/rooms-types', getRoomType);

router.get('/rooms', getRoombySearchAndFilter);

router.patch('/rooms/:roomId', updateRoomById);

router.delete('/rooms/:roomId', deleteRoomById);

export default router;
