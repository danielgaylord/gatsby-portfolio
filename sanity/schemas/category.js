import React from 'react'
import { MdFolderSpecial as icon } from 'react-icons/md'

export default {
  name: 'category',
  title: 'Category',
  type: 'document',
  icon,
  fields: [
    {
      name: 'emoji',
      title: 'Emoji',
      type: 'string',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
  ],

  preview: {
    select: {
      title: 'title',
      emoji: 'emoji',
    },
    prepare(selection) {
      const {title, emoji} = selection
      return {
        title: title,
        media: <span style={{fontSize: '1.5rem'}}>{emoji}</span>,
      }
    },
  },
}
