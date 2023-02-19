import { baseAPI } from "../index.js";

const repositoryApi = baseAPI.injectEndpoints({
    endpoints: (build) => ({
        getAll: build.query({
            query: (params = {}) => ({
                url: `search/repositories`,
                params
            }),
        }),
        get: build.query({
            query: ({ owner, repo }) => ({
                url: `repos/${owner}/${repo}`
            }),
        })
    })
})

export const { useGetAllQuery, useGetQuery } = repositoryApi