import { Injectable } from '@nestjs/common';
import Service from './service';
import StoreRepository from '../repositories/store.repository';
import { StoreOptions, StoreType } from '../types/store';

@Injectable()
export default class StoreService extends Service {
  constructor(private readonly storeRepository: StoreRepository) {
    super();
  }

  async getStores(options?: StoreOptions): Promise<StoreType[]> {
    const queryBuilder = this.storeRepository.createQueryBuilder('store');

    if (options?.ids) {
      queryBuilder.andWhere('id IN (:ids)', { ids: [...options.ids] });
    }

    queryBuilder.skip((options && options.offset) || 0);
    queryBuilder.take((options && options.limit) || 100);
    return queryBuilder.getMany();
  }
}
