import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
    projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
    dataset: 'production',
    apiVersion: '2024-01-17',
    useCdn: true,
    token: import.meta.env.VITE_SANITY_TOKEN,
})

const builder = imageUrlBuilder(client);

// eslint-disable-next-line no-unused-vars
function urlFor(source) {
    return builder.image(source)
}

export default client