import React from 'react'

export default {
  title: 'Horizontal Rule',
  name: 'hr',
  type: 'object',
  fields: [
    {
      title: 'mandatory field',
      name: 'hr',
      type: 'datetime',
      hidden: true
    }
  ],
  preview: {
    component: () => <hr />
  }
}
