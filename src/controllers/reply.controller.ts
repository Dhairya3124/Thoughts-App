import { Request, Response } from 'express';
import { createReply, deleteReply, getReply } from "../service/reply.service";
import log from '../logger';


export async function createRepliesHandler(req: Request, res: Response) {
  try {
    const reply = await createReply(req.body);
    return res.send(reply);
  } catch (error:any) {
    log.error(error);
    return res.status(409).send("Error creating reply");
  }
}

export async function getRepliesHandler(req: Request, res: Response) {
  try {
    const reply = await getReply(req.body);
    for(let i = 0; i < reply.length; i++) {
      if(reply[i].isAnonymous) {
        reply[i].user = "Anonymous";
      }
    }

    return res.send(reply);
  } catch (error:any) {
    log.error(error);
    return res.status(409).send(error.message);
  }
}

export async function deleteRepliesHandler(req: Request, res: Response) {
  try {
    const reply = await deleteReply(req.body);
    return res.send(reply);
  } catch (error:any) {
    log.error(error);
  }
}
