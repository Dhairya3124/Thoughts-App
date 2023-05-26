import config from '../../config/default'
import log from '../logger';
import mongoose, { ConnectOptions } from 'mongoose';

const dbUri = config.dbUri as string;

const connect = () => {
  return mongoose.connect(dbUri,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as ConnectOptions)
  .then(() => {
    log.info('Database connected');
  })
  .catch((error) => {
    log.error('db error', error);
    process.exit(1);
    
  })
}

export default connect;