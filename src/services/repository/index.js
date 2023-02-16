import { baseAPI } from "../index.js";

const repositoryApi = baseAPI.injectEndpoints({
    endpoints: (build) => ({
        getAll: build.query({
            query: (params = {}) => ({
                url: `search/repositories`,
                params
            }),
        })
    })
})

export const { useGetAllQuery } = repositoryApi