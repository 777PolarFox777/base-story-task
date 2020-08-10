import * as React from 'react';
import * as L from 'leda';
import { EntityListItem } from './types';
import { languageNames } from '../../constants';
import styles from './EntityList.module.scss';

export interface EntityListProps {
  data: EntityListItem[];
  onModalOpen: () => void,
}

export const EntityList = (props: EntityListProps): React.ReactElement => {
  const { data, onModalOpen } = props;

  return (
    <L.Div className={styles.table}>
      <L.Div _flexRow>
        <L.Button _marginLeftAuto onClick={onModalOpen} _success>
          Add new Entity
        </L.Button>
      </L.Div>
      <L.Table>
        <L.THead>
          <L.Tr>
            <L.Th>Id</L.Th>
            <L.Th>Description</L.Th>
            <L.Th>Language</L.Th>
          </L.Tr>
        </L.THead>
        <L.TBody>
          {data.map((entity) => (
            <L.Tr key={entity.id}>
              <L.Td>{entity.id}</L.Td>
              <L.Td>{entity.description}</L.Td>
              <L.Td>{languageNames[entity.langCode]}</L.Td>
            </L.Tr>
          ))}
        </L.TBody>
      </L.Table>
    </L.Div>
  )
};

EntityList.displayName = 'EntityList';
