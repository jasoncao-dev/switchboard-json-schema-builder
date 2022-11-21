import React from 'react'
import Select from 'react-select'
import { sensitiveOptions } from "../../utils/constants";
import * as helpers from '../../utils/helpers'
import { SensitiveType } from "../../utils/types";
import { Label } from '../Label'
import { useTranslation } from 'react-i18next'
import _ from 'lodash/fp'

type Props = {
  type: SensitiveType
  onChange: (type: SensitiveType) => void
}

const SchemaSensitiveSelect: React.FunctionComponent<Props> = ({
  type,
  onChange
}: Props) => {
  const { t } = useTranslation()
  const options = React.useMemo(() => helpers.translateLabels(t, sensitiveOptions), [
    sensitiveOptions,
    t
  ])
  return (
    <div>
      <Label>{t('sensitive')}</Label>
      <Select
        className='mt-2 min-w-32 max-w-md w-full rounded bg-white focus:outline-none focus:shadow-outline-blue focus:ring-blue-500  focus:border-blue-500'
        options={options}
        value={helpers.findOption(type)(options)}
        onChange={(option: any) => onChange(option.value)}
        placeholder={t('sensitive')}
      />
    </div>
  )
}

export default SchemaSensitiveSelect
