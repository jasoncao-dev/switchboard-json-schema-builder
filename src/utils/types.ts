export type Schema = Record<string, unknown>

export type SchemaType =
  | 'string'
  | 'number'
  | 'integer'
  | 'object'
  | 'array'
  | 'boolean'

export type SensitiveType =
  | 'acct'
  | 'id'

export type SchemaTypeOption = { value: SchemaType; label: string }

export type SensitiveOption = { value: SensitiveType; label: string | SensitiveType }

export type CommonSchemaField = 'description' | 'title'

export type StringSchemaField =
  | CommonSchemaField
  | 'sensitive'
  | 'enum'
  | 'minLength'
  | 'maxLength'
  | 'pattern'
  | 'format'
export type NumberSchemaField =
  | CommonSchemaField
  | 'minimum'
  | 'maximum'
  | 'multipleOf'
export type IntegerSchemaField =
  | CommonSchemaField
  | 'minimum'
  | 'maximum'
  | 'multipleOf'
export type BoolSchemaField = CommonSchemaField
export type ObjectSchemaField = CommonSchemaField | 'required'
export type ArraySchemaField =
  | CommonSchemaField
  | 'uniqueItems'
  | 'minItems'
  | 'maxItems'
  | 'flatten'

export type SchemaFieldOptionType =
  | 'string'
  | 'number'
  | 'boolean'
  | 'multi_creatable'
  | 'select'
  | 'required'

export type CommonValidSchemaField = CommonSchemaField | 'title' | 'type'
export type StringValidSchemaField = StringSchemaField | CommonValidSchemaField
export type NumberValidSchemaField = NumberSchemaField | CommonValidSchemaField
export type IntegerValidSchemaField =
  | IntegerSchemaField
  | CommonValidSchemaField
export type BoolValidSchemaField = BoolSchemaField | CommonValidSchemaField
export type ArrayValidSchemaField = ArraySchemaField | CommonValidSchemaField | 'items'
export type ObjectValidSchemaField = ObjectSchemaField | CommonValidSchemaField | 'properties'

export type SchemaFieldOption = {
  label: string
  type: SchemaFieldOptionType
  optionList?: any
}

export type CommonSchemaFieldOption = SchemaFieldOption & {
  value: CommonSchemaField
}

export type StringSchemaFieldOption = SchemaFieldOption & {
  value: StringSchemaField
}
export type NumberSchemaFieldOption = SchemaFieldOption & {
  value: NumberSchemaField
}
export type IntegerSchemaFieldOption = SchemaFieldOption & {
  value: IntegerSchemaField
}
export type BoolSchemaFieldOption = SchemaFieldOption & {
  value: BoolSchemaField
}
export type ObjectSchemaFieldOption = SchemaFieldOption & {
  value: ObjectSchemaField
}
export type ArraySchemaFieldOption = SchemaFieldOption & {
  value: ArraySchemaField
}

export type SchemaMenuOption =
  | StringSchemaFieldOption
  | NumberSchemaFieldOption
  | IntegerSchemaFieldOption
  | BoolSchemaFieldOption
  | ObjectSchemaFieldOption
  | ArraySchemaFieldOption
