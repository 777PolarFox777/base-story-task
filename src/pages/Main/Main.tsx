import * as React from 'react';
import * as L from 'leda';
import * as db from '../../db';
import { EntityListItem } from '../../components/EntityList/types';
import { EntityList } from '../../components/EntityList';
import { EntityCreateModal } from '../../components/EntityCreateModal';

export const Main = (): React.ReactElement => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [isButtonLoading, setIsButtonLoading] = React.useState(false);
  const [list, setList] = React.useState<EntityListItem[]>([]);

  const handleCreateEntity = React.useCallback(async (entity: Omit<EntityListItem, 'id'>) => {
    setIsButtonLoading(true);

    await db.EntityList.putEntity(entity);

    const updatedList = await db.EntityList.getEntityList();

    setList(updatedList);
    setIsModalOpen(false);
    setIsButtonLoading(false);
  }, []);

  React.useEffect(() => {
    // fetch data
    const getList = async () => {
      const currentList = await db.EntityList.getEntityList();

      setList(currentList);
    }

    getList();
  }, []);

  return (
    <L.Div>
      <EntityList
        data={list}
        onModalOpen={() => setIsModalOpen(true)}
      />
      <EntityCreateModal
        isLoading={isButtonLoading}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onCreate={handleCreateEntity}
      />
    </L.Div>
  )
};

Main.displayName = 'Main';
