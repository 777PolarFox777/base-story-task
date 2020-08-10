import { LanguageCode } from '../../constants';

export interface DataItem {
  code: LanguageCode,
  label: string,
}

export interface EntityCreateForm {
  description: string,
  lang: DataItem | null,
}
