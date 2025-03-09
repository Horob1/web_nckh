import { JwtPayload } from 'jsonwebtoken';

export interface IATPayload extends JwtPayload {
  _id: string;
}

export interface IRTPayload extends JwtPayload {
  _id: string;
}
