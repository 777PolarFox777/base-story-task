import Dexie from 'dexie';
import { DbTable } from './constants';

let db: Dexie | null = null;

export const setupDb = () => {
  if (!!db) {
    return;
  }

  db = new Dexie(DbTable.Entities);

  // Declare tables, IDs and indexes
  db.version(1).stores({
    entities: '++id, description, langCode'
  });
}

export const getTable = (tableName: string) => {
  return db?.table(tableName);
};
