export class TransformDto {
  x: number;
  y: number;
  z: number;
}

export class ModelDto {
  id: string;
  modelUrl: string;
  modelName: string;
  position: TransformDto;
  rotaion: TransformDto;
  scale: TransformDto;
  color: string;
  description: string;
  title: string;
}

export class CreateLayoutDto {
  id: string;
  name: string;
  models?: ModelDto[];
}

export class UpdateLayoutDto {
  name?: string;
  models?: ModelDto[];
}
