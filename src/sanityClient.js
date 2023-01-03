import sanityClient from "@sanity/client";

const client = sanityClient({
    projectId: process.env.SANITY_PROJECT_ID,
    dataset: process.env.SANITY_DATA_SET,
    useCdn: true,
})

export default client; 
