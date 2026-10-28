import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
    projectId: '0jx5sfr9', // Replace with your actual Sanity project ID
    dataset: 'production',
    useCdn: true,
    apiVersion: '2026-01-01',
})

const builder = imageUrlBuilder(client)

export const urlFor = (source) => {
    if (!source || !source.asset) return null
    return builder.image(source)
}