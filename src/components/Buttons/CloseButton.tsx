import React from 'react'
import _ from 'lodash/fp'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import RoundedButton from './RoundedButton'

type Props = {
  onClick?: () => void
  title?: string
}

const CloseButton: React.FunctionComponent<Props> = ({ onClick=_.noop, title }: Props) => {
  return (
    <RoundedButton
      onClick={onClick}
      title={title}
      className='text-gray-700 bg-white hover:bg-gray-200'
    >
      <FontAwesomeIcon icon={faTimes} />
    </RoundedButton>
  )
}

export default CloseButton
