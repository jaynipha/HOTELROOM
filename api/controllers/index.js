import { RoomModel } from '../models/room.js';
import mongoose from 'mongoose';
//import { RoomTypeModel } from '../models/room-type.js';

/** GET HTTPS */
/**
 *  Get all rooms
 */
export const getRoombySearchAndFilter = async (req, res) => {
	try {
		const filteredData = await RoomModel.find({
			$or: [
				{ type: req.body.type },

				{ name: req.body.name },

				{ price: { $gt: req.body.minimum, $lt: req.body.maximum } },
			],
		});

		//console.log(filteredData);
		return res.status(200).send({ status: true, data: filteredData });
	} catch (error) {
		return res.status(404).json(error.message);
	}
};

/** */
//GET ROOM TYPE
export const getRoomType = async (req, res) => {
	const { page, pageSize } = req.query;

	//Pagination
	if (page <= 0 || pageSize <= 0) {
		return res.status(400).json({
			status: false,
			message: 'Invalid page number, should start with 1',
		});
	}
	const skipEqn = pageSize * (page - 1);

	//all room types
	try {
		const allRoomTypes = await RoomModel.find().skip(skipEqn).limit(+pageSize);

		return res.status(200).send({ status: true, data: allRoomTypes });
	} catch (error) {
		return res.status(404).json(error.message);
	}
};

//-----------------------------------------------------

/** POST HTTPS */

/**
 *  Creating room-type
 */

export const createRoomType = async (req, res) => {
	const { name, type, price } = req.body;

	try {
		const newRoomType = new RoomModel({ name, type, price });
		await newRoomType.save();
		return res.status(201).send({ status: true, data: newRoomType });
	} catch (error) {
		return res.status(404).json(error.message);
	}
};

/**
 *  Creating room ENDS HERE
 */

//----------------------------------
/** PUT HTTPS */

/**
 *  Updating room
 */

export const updateRoomById = async (req, res) => {
	const data = req.body;
	const { roomId } = req.params;

	try {
		const updatedRoom = await RoomModel.findByIdAndUpdate(roomId, data, {
			new: true,
		});
		if (!updatedRoom) {
			return res.status(404).json({
				message: 'Room not found',
			});
		}

		return res.status(200).json({
			success: true,
			message: 'Room updated successfully',
			data: updatedRoom,
		});
	} catch (error) {
		return res.status(200).json({
			success: false,
			message: error.message,
		});
	}
};

//------------------------------------------------------
/** DELETE HTTPS */

/**
 *  Delete RoomModel by id
 */
export const deleteRoomById = async (req, res) => {
	const { roomId } = req.params;
	try {
		if (!mongoose.Types.ObjectId.isValid(roomId)) {
			return res.status(404).json({
				message: 'room details not found',
			});
		}

		await RoomModel.findByIdAndDelete(roomId);

		return res.status(200).send({
			status: true,
			message: `Room with ${roomId} successfully deleted !!`,
		});
	} catch (error) {
		return res.status(404).json(error.message);
	}
};
