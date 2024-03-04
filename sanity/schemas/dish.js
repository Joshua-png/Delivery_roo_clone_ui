import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'dish',
  title: 'Dish',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name of Dish',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'short_discription',
      type: 'string',
      title: 'Short Description',
      validation: (Rule) => Rule.max(200),
    }),
    defineField({
      name: 'price',
      type: 'number',
      title: 'Price of the dish',
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image of Dish',
    }),
  ],
})
