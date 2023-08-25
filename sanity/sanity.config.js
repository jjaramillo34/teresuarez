import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Blog',

  projectId: 'ba19waqj',
  dataset: 'blog',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
