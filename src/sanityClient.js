import sanityClient from "@sanity/client";

const client = sanityClient({
     projectId: "nrx0t8ko",
     dataset: "production",
     useCdn: true,
     apiVersion: "2021-10-21",
})

export default client; 
