import PageLayout from "../../layouts/PageLayout"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useGetAllQuery } from "../../services/repository";
import { useState, useEffect } from "react";
import SearchResultCard from "../../components/SearchResultCard"
import Pagination from "../../components/Pagination";
import Select from 'react-select'
import { useDebounce } from 'use-debounce';
import SearchImage from '../../assets/Curious-rafiki.png'
import ErrorImage from '../../assets/error.png'
import LoadingGif from '../../assets/loading.gif'

export default function Repository() {
    const [params, setParams] = useState({
        q: '',
        per_page: 10,
        page: 1
    })

    useEffect(() => {
        setParams(pevParams => ({
            ...pevParams,
            page: 1
        }))
    }, [params.q])

    const [debouncedParams] = useDebounce(params, 300);

    const PAGE_SIZE_OPTIONS = [
        { value: 10, label: '10' },
        { value: 25, label: '25' },
        { value: 50, label: '50' }
    ]

    const { data: repositoryData, isLoading, isFetching, error } = useGetAllQuery(debouncedParams, { skip: !debouncedParams.q.length > 0 })
    return <PageLayout>
        <div className="relative flex items-center">
            <label className="relative flex-1">
                <span className="sr-only">Search</span>
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <FontAwesomeIcon className="h-5 w-5 fill-slate-300" icon={faSearch} />
                </span>
                <input
                    value={params.q}
                    onChange={(event) => { setParams({ ...params, q: event.target.value }) }}
                    placeholder="Search for repos..."
                    type="text"
                    name="search"
                    className="placeholder:italic placeholder:text-slate-400 bg-white w-full border border-slate-300 rounded-md my-5 py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                />
            </label>
            <div className="ml-4">
                <Select
                    options={PAGE_SIZE_OPTIONS}
                    value={PAGE_SIZE_OPTIONS.find(option => option.value === params.per_page)}
                    onChange={(event) => {
                        setParams({ ...params, per_page: event.value })
                    }}
                    className="w-30"
                />
            </div>
        </div>

        {error ? (<div className="flex flex-col justify-center items-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Oops, something went wrong.</h2>
            <p className="text-gray-600 text-lg">Please try again later.</p>
            <img src={ErrorImage} alt="Error" className="max-w-full w-80 h-auto mt-8" />
        </div>) :
            isLoading || isFetching ? (
                <div className="flex justify-center items-center h-[80vh]" >
                    <img src={LoadingGif} alt="loading spinner" className="w-20 h-auto" />
                </div>
            ) :
                repositoryData ? (
                    <>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {repositoryData.items.map(repo => <SearchResultCard key={repo.id} repo={repo} />)}
                        </div>
                        <Pagination params={params} setParams={setParams} total={repositoryData.total_count} />
                    </>) : (
                    <div className="flex flex-col justify-center items-center h-[80vh]">
                        <img src={SearchImage} alt="No data" className="max-w-full w-80 h-auto mt-8" />
                    </div>
                )}


    </PageLayout >
}