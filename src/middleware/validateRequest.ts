import { AnySchema } from 'joi';
import { Request, Response, NextFunction } from 'express';
import log from '../logger';

const validateRequest =
  (schema: AnySchema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.validate({
        body: req.body,
        query: req.query,
        params: req.params
      });
      return next();
    } catch (err: any) {
      log.error(err);
      return res.status(400).send(err.message);
    }
  };
export default validateRequest;
