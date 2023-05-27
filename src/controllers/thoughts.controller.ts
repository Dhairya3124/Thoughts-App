import {
  createThoughts,
  deleteThoughts,
  getThoughts
} from '../service/thoughts.service';
import { Request, Response } from 'express';
import { omit } from 'lodash';
import log from '../logger';

export async function createThoughtsHandler(req: Request, res: Response) {
  try {
    const thoughts = await createThoughts(req.body);
    return res.send(omit(thoughts.toJSON(), 'password'));
  } catch (error: any) {
    log.error(error);
    return res.status(409).send(error.message);
  }
}

export async function getThoughtsHandler(req: Request, res: Response) {
  try {
    const thoughts = await getThoughts(req.body);
    for (let i = 0; i < thoughts.length; i++) {
      if (thoughts[i].isAnonymous) {
        thoughts[i].user = 'Anonymous';
      }
    }
    return res.send(thoughts);
  } catch (error: any) {
    log.error(error);
    return res.status(409).send(error.message);
  }
}

export async function deleteThoughtsHandler(req: Request, res: Response) {
  try {
    const thoughts = await deleteThoughts(req.body);
    return res.send(thoughts);
  } catch (error: any) {
    log.error(error);
  }
}
