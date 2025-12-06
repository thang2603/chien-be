import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Layout, LayoutDocument } from './schemas/layout.schema';
import { Model } from 'mongoose';
import { CreateLayoutDto, UpdateLayoutDto } from './dto/layout.dto';

@Injectable()
export class LayoutsService {
  constructor(
    @InjectModel(Layout.name) private layoutModel: Model<LayoutDocument>,
  ) {}
  async create(dto: CreateLayoutDto): Promise<Layout> {
    const created = new this.layoutModel(dto);
    return created.save();
  }

  async findAll(): Promise<Layout[]> {
    return this.layoutModel.find({}, { _id: 0, id: 1, name: 1 }).lean();
  }

  async findOne(id: string): Promise<Layout> {
    const layout = await this.layoutModel.findOne({ id }).exec();
    if (!layout) throw new NotFoundException('Không tìm thấy thiết kế');
    return layout;
  }

  async update(id: string, dto: UpdateLayoutDto): Promise<Layout> {
    const updated = await this.layoutModel
      .findOneAndUpdate({ id }, dto, { new: true })
      .exec();

    if (!updated) throw new NotFoundException('Không tìm thấy thiết kế');
    return updated;
  }

  async delete(id: string): Promise<{ message: string }> {
    const result = await this.layoutModel.deleteOne({ id }).exec();
    if (result.deletedCount === 0)
      throw new NotFoundException('Không tìm thấy thiết kế');
    return { message: 'Xóa thành công' };
  }
}
