import { useTranslation } from 'react-i18next';
import {
  K8sResourceCommon,
  TableColumn,
} from '@openshift-console/dynamic-plugin-sdk';

export const defaultTableColumnInfo = [
  { id: 'name', className: 'pf-m-width-30' },
  { id: 'namespace', className: 'pf-m-width-30' },
  { id: 'created', className: 'pf-m-width-30' },
  { id: 'action', className: 'dropdown-kebab-pf pf-v6-c-table__action' },
];

export const useDefaultColumns = () => {
  const { t } = useTranslation('plugin__pipelines-console-plugin');

  const columns: TableColumn<K8sResourceCommon>[] = [
    {
      id: defaultTableColumnInfo[0].id,
      sort: 'metadata.name',
      title: t('Name'),
      props: { className: defaultTableColumnInfo[0].className },
    },
    {
      id: defaultTableColumnInfo[1].id,
      sort: 'metadata.namespace',
      title: t('Namespace'),
      props: { className: defaultTableColumnInfo[1].className },
    },
    {
      id: defaultTableColumnInfo[2].id,
      sort: 'metadata.creationTimestamp',
      title: t('Created'),
      props: { className: defaultTableColumnInfo[2].className },
    },
    {
      id: defaultTableColumnInfo[3].id,
      props: { className: defaultTableColumnInfo[3].className },
      title: '',
    },
  ];

  return columns;
};
