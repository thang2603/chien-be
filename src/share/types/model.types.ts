import { Transform } from './transform.types';

export interface Model {
  id: string;
  modelUrl: string;
  modelName: string;
  position: Transform;
  rotaion: Transform;
  scale: Transform;
  color: string;
  description: string;
}
