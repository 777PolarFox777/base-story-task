import * as React from 'react';
import * as L from 'leda';
import { EntityListItem } from '../EntityList/types';
import { EntityCreateForm } from './types';
import { initialEntityForm, languagesDataList } from './constants';
import styles from './EntityCreateModal.module.css';

export interface EntityCreateModalProps {
  isOpen: boolean,
  isLoading: boolean,
  onClose: () => void,
  onCreate: (entity: Omit<EntityListItem, 'id'>) => void,
}

export const EntityCreateModal = (props: EntityCreateModalProps): React.ReactElement => {
  const { isOpen, isLoading, onClose, onCreate } = props;

  const [entity, setEntity] = React.useState<EntityCreateForm>(initialEntityForm);

  const handleChange = React.useCallback((ev: L.InputTypes.ChangeEvent | L.DropDownSelectTypes.ChangeEvent) => {
    const { name, value } = ev.component;

    if (!name) {
      return;
    }

    setEntity((prevState) => ({
        ...prevState,
        [name]: value,
    }))
  }, []);

  const handleSubmit = React.useCallback(() => {
    // just for ts check
    if (!entity.lang?.code) {
      return;
    }

    onCreate({
      description: entity.description,
      langCode: entity.lang?.code,
    });
    setEntity(initialEntityForm);
  }, [entity.description, entity.lang, onCreate]);

  const form = 'entity-modal';

  return (
    <L.Modal isOpen={isOpen} onClose={onClose}>
      <L.ModalHeader>
        Add new Entity
      </L.ModalHeader>
      <L.ModalBody>
        <L.Div className={styles.content}>
          <L.Dl _list _form _w40>
            <L.Dt>
              Description
            </L.Dt>
            <L.Dd>
              <L.Input
                form={form}
                name="description"
                value={entity.description}
                onChange={handleChange}
                isRequired
              />
            </L.Dd>
            <L.Dt>
              Language
            </L.Dt>
            <L.Dd>
              <L.DropDownSelect
                data={languagesDataList}
                form={form}
                name="lang"
                value={entity.lang}
                onChange={handleChange}
                textField="label"
                placeholder="Select a language"
                isRequired
              />
            </L.Dd>
          </L.Dl>
        </L.Div>
      </L.ModalBody>
      <L.ModalFooter>
        <L.Div _flexRow>
          <L.Button _marginRight onClick={onClose}>
            Cancel
          </L.Button>
          <L.Button
            form={form}
            onClick={handleSubmit}
            isLoading={isLoading}
            _success
          >
            Create
          </L.Button>
        </L.Div>
      </L.ModalFooter>
    </L.Modal>
  )
};

EntityCreateModal.displayName = 'EntityCreateModal';
