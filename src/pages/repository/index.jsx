import PageLayout from "../../layouts/PageLayout"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useGetAllQuery } from "../../services/repository";
import { useState } from "react";
import SearchResultCard from "../../components/SearchResultCard"

export default function Repository() {
    const [params, setParams] = useState({
        q: 'calculator'
    })
    const { data: repositoryData, isLoading, error } = useGetAllQuery(params, { skip: !params.q.length > 0 })
    return <PageLayout>
        <label className="relative">
            <span className="sr-only">Search</span>
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <FontAwesomeIcon className="h-5 w-5 fill-slate-300" icon={faSearch} />
            </span>
            <input
                value={params.q}
                onChange={(event) => { setParams({ ...params, q: event.target.value }) }}
                placeholder="Search for anything..." type="text" name="search"
                className="placeholder:italic placeholder:text-slate-400 bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" />
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {isLoading ? <div className="flex justify-center items-center" style={{ width: '100%', border: '2px solid red' }}>
                <svg className="animate-spin h-10 w-10 text-gray-500" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 4.418 3.582 8 8 8v-2.009zM20 12a8 8 0 01-8 8v2.009a7.962 7.962 0 01-4-2.291V12h12z" />
                </svg>
            </div> : (
                error ? <div className="flex flex-col justify-center items-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Oops, something went wrong.</h2>
                    <p className="text-gray-600 text-lg">Please try again later.</p>
                    <img src="/error-image.png" alt="Error" className="max-w-full w-80 h-auto mt-8" />
                </div> : (
                    repositoryData.items.map(repo => <SearchResultCard key={repo.id} repo={repo} />
                    )
                ))}
        </div>

    </PageLayout>
}