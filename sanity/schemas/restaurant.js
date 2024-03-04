// import { Rule } from 'postcss'
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Restaurant name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'short_description',
      title: 'Short Description',
      type: 'string',
      validation: (Rule) => Rule.max(200),
    }),
    defineField({
      name: 'image',
      title: 'Image of Restaurant',
      type: 'image',
    }),
    defineField({
      name: 'latitude',
      title: 'Latitude',
      type: 'number',
    }),
    defineField({
      name: 'longitude',
      title: 'Longitude',
      type: 'number',
    }),
    defineField({
      name: 'address',
      title: 'Restaurant Address',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'rating',
      type: 'number',
      title: 'Enter a Rating from (1-5) stars',
      validation: (Rule) =>
        Rule.required().min(1).max(5).error('Please enter a value between 1 and 5'),
    }),
    defineField({
      name: 'type',
      title: 'Category',
      validation: (Rule) => Rule.required(),
      type: 'reference',
      to: [{type: 'category'}],
    }),
    defineField({
      name: 'dishes',
      type: 'array',
      title: 'Dishes',
      of: [{type: 'reference', to: [{type: 'dish'}]}],
    }),
  ],
})
