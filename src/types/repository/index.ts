export interface Repository {
    [key: string]: string | boolean | object
}

export interface RepositorySearchType {
    incomplete_results: boolean
    items: Array<Repository>
    total_count: number
}
