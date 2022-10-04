import React from 'react'
import Select from 'react-select'
import { schemaTypes } from '../../utils/constants'
import * as helpers from '../../utils/helpers'
import { SchemaType } from '../../utils/types'
import { Label } from '../Label'
import { useTranslation } from 'react-i18next'
import _ from 'lodash/fp'

type Props = {
  type: SchemaType
  onChange: (type: SchemaType) => void
}

const SchemaTypesSelect: React.FunctionComponent<Props> = ({
  type,
  onChange
}: Props) => {
  const { t } = useTranslation()
  const options = React.useMemo(() => helpers.translateLabels(t, schemaTypes), [
    schemaTypes,
    t
  ])
  return (
    <div>
      <Label>{t('type')}</Label>
      <Select
        className='mt-2 min-w-32 max-w-md w-full rounded bg-white focus:outline-none focus:shadow-outline-blue focus:ring-blue-500  focus:border-blue-500'
        options={options}
        value={helpers.findOption(type)(options)}
        onChange={(option: any) => onChange(option.value)}
        placeholder={t('type')}
      />
    </div>
  )
}

export default SchemaTypesSelect
