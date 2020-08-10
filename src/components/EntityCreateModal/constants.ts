import { LanguageCode, languageNames } from '../../constants';
import { DataItem } from './types';

export const languagesDataList: DataItem[] = [
  { code: LanguageCode.En, label: languageNames[LanguageCode.En] },
  { code: LanguageCode.Es, label: languageNames[LanguageCode.Es] },
  { code: LanguageCode.Ru, label: languageNames[LanguageCode.Ru] },
];

export const initialEntityForm = {
  description: '',
  lang: null,
}
