import React from 'react'
import CreatableSelect from 'react-select/creatable'
import Select from 'react-select'
import _ from 'lodash/fp'

import { Schema, SchemaMenuOption } from '../../utils/types'
import * as helpers from '../../utils/helpers'
import { Input } from '../Input'
import { DeleteButton } from '../Buttons'
import { Checkbox } from '../Checkbox'
import { Label } from '../Label'
import { useTranslation } from 'react-i18next'

type ItemProps = {
  onDelete: () => void
  children: React.ReactNode
}

const Item: React.FunctionComponent<ItemProps> = ({
  children,
  onDelete
}: ItemProps) => {
  debugger
  return (
    <div className='flex items-end justify-between'>
      {children}
      <div className='ml-2'>
        <DeleteButton onClick={onDelete} />
      </div>
    </div>
  )
}

type Props = {
  field: SchemaMenuOption
  schema: Schema
  onChange: (schema: Schema) => void
}

export const TextItem: React.FunctionComponent<Props> = ({
  field,
  schema,
  onChange
}: Props) => {
  const { t } = useTranslation()

  return (
    <Item
      onDelete={() => onChange(helpers.deleteSchemaField(field.value, schema))}
    >
      <Input
        label={t(field.label)}
        value={helpers.getSchemaField(field.value, schema) as string}
        onChange={(text) =>
          onChange(helpers.setSchemaField(field.value, text, schema))
        }
      />
    </Item>
  )
}

export const NumberItem: React.FunctionComponent<Props> = ({
  field,
  schema,
  onChange
}: Props) => {
  const { t } = useTranslation()
  const parseValue = (number: string) => {
    let str = '0.'
    for (let i = 0; i < parseInt(number) - 1; i++) {
      str += '0'
    }
    str += '1'
    return str
  }

  return (
    <Item
      onDelete={() => onChange(helpers.deleteSchemaField(field.value, schema))}
    >
      <Input
        label={t(field.label)}
        type={'number'}
        value={helpers.getSchemaField(field.value, schema) as string}
        onChange={(text) =>
          onChange(
            helpers.setSchemaField(field.value, parseValue(text), schema)
          )
        }
      />
    </Item>
  )
}

export const BoolItem: React.FunctionComponent<Props> = ({
  field,
  schema,
  onChange
}: Props) => {
  const { t } = useTranslation()
  return (
    <Item
      onDelete={() => onChange(helpers.deleteSchemaField(field.value, schema))}
    >
      <Checkbox
        label={t(field.label)}
        value={helpers.getSchemaField(field.value, schema) as boolean}
        onChange={(text) =>
          onChange(helpers.setSchemaField(field.value, text, schema))
        }
      />
    </Item>
  )
}

export const CreatableMultiSelectItem: React.FunctionComponent<Props> = ({
  field,
  schema,
  onChange
}: Props) => {
  const { t } = useTranslation()
  const selected = helpers.getSchemaField(field.value, schema)

  const allOptions = React.useMemo(
    () => helpers.stringsToOptions(selected as string[]),
    [selected]
  )

  return (
    <Item
      onDelete={() => onChange(helpers.deleteSchemaField(field.value, schema))}
    >
      <div className='w-full'>
        <Label>{t(field.label)}</Label>
        <CreatableSelect
          isMulti
          className='min-w-48 max-w-lg w-full shadow rounded border-gray-300 bg-white focus:outline-none focus:shadow-outline-blue focus:border-blue-300'
          options={allOptions}
          value={allOptions}
          noOptionsMessage={() => t('noOptions')}
          onChange={(options: any) => {
            onChange(
              helpers.setSchemaField(
                field.value,
                helpers.optionsToStrings(options),
                schema
              )
            )
          }}
          placeholder={t('options')}
        />
      </div>
    </Item>
  )
}

export const SelectItem: React.FunctionComponent<Props> = ({
  field,
  schema,
  onChange
}: Props) => {
  const { t } = useTranslation()
  const options = React.useMemo(
    () => helpers.translateLabels(t, field.optionList),
    [field.optionList, t]
  )
  const option = helpers.getSchemaField(field.value, schema)
  const selected = React.useMemo(
    () => helpers.findOption(option as string)(options),
    [options, option]
  )

  return (
    <Item
      onDelete={() => onChange(helpers.deleteSchemaField(field.value, schema))}
    >
      <div className='w-full'>
        <Label>{t(field.label)}</Label>
        <Select
          className='min-w-48 max-w-lg w-full shadow rounded border-gray-300 bg-white focus:outline-none focus:shadow-outline-blue focus:border-blue-300'
          options={options}
          noOptionsMessage={() => t('noOptions')}
          value={selected}
          onChange={(option: any) => {
            onChange(helpers.setSchemaField(field.value, option.value, schema))
          }}
          placeholder={t('options')}
        />
      </div>
    </Item>
  )
}

export const RequiredMultiSelectItem: React.FunctionComponent<Props> = ({
  field,
  schema,
  onChange
}: Props) => {
  if (!helpers.isSchemaObject(schema) || !helpers.hasSchemaProperties(schema))
    return null

  const { t } = useTranslation()
  const allOptions = helpers.schemaPropertiesAsOptions(schema)
  const requiredOptions = helpers.schemaRequiredPropertiesAsOptions(schema)

  return (
    <Item
      onDelete={() => onChange(helpers.deleteSchemaField(field.value, schema))}
    >
      <div className='w-full'>
        <Label>{t(field.label)}</Label>
        <Select
          isMulti
          className='min-w-48 max-w-lg w-full shadow rounded border-gray-300 bg-white focus:outline-none focus:shadow-outline-blue focus:border-blue-300'
          options={allOptions}
          noOptionsMessage={() => t('noOptions')}
          value={requiredOptions}
          onChange={(options: any) => {
            onChange(
              helpers.setSchemaField(
                field.value,
                helpers.optionsToStrings(options),
                schema
              )
            )
          }}
          placeholder={t('options')}
        />
      </div>
    </Item>
  )
}
