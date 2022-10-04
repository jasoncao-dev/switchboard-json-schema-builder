import React from 'react'

const SchemaBox: React.FunctionComponent = ({children}) => {
  return(
    <div className="w-full border-dashed border-l border-b pl-6 pb-4 pt-4 rounded-bl space-x-4">
      {children}
    </div>
  )
}

export default SchemaBox