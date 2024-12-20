import { createClient } from '@sanity/client';

// Use environment variables and set up the client
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '', // Project ID
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || '',     // Dataset
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-01-01', // API Version
  useCdn: true, // Use CDN for faster cache reads
});

export default client;
