import jwt from 'jsonwebtoken'; 
import  config  from '../../config/default';

const privatekey = config.privatekey as string;

export function sign(object: Object, options?: jwt.SignOptions | undefined): string {
  return jwt.sign(object, privatekey, options);
}
export function decode(token: string) {
  try {
    const decoded = jwt.verify(token, privatekey);

    return { valid: true, expired: false, decoded };
  } catch (error:any) {
    return {
      valid: false,
      expired: error.message === "jwt expired",
      decoded: null,
    };
  }
}