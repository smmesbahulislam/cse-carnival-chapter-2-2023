import express from 'express';
import {
    accessChatController,
    fetchChatController,
    createGroupChatController,
    renameGroupChatController
} from '../controllers/chatController.js';

const router = express.Router();

//routing
// access chat || Method post
router.post('/access-chat', accessChatController);
// fetch chat || Method GET
router.get('/fetch-chat/:id', fetchChatController);

// create group chat || Method POST
router.post('/create-group-chat', createGroupChatController);

// rename group chat || Method PUT
router.put('/rename-group-chat', renameGroupChatController);
//remove from group chat || Method PUT

// add to group chat || Method PUT


export default router;