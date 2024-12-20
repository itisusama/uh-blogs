import sanityClient from '@sanity/client';

// Use environment variables
const client = sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // Project ID
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,     // Dataset
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION, // API Version
  useCdn: true, // Use CDN for faster cache reads
});

export default client;
