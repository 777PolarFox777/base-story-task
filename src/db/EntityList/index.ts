import { getTable } from '../setup';
import { EntityListItem } from '../../components/EntityList/types';
import { DbTable } from '../constants';

export const getEntityList = async (): Promise<EntityListItem[]> => {
  const table = getTable(DbTable.Entities);

  if (!table) {
    throw new Error('Database table is unavailable');
  }

  return table.toArray();
}

export const putEntity = async (item: Omit<EntityListItem, 'id'>): Promise<number> => {
  const table = getTable(DbTable.Entities);

  if (!table) {
    throw new Error('Database table is unavailable');
  }

  return table.put(item) as Promise<number>;
}
