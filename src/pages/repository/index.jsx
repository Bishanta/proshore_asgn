import PageLayout from "../../layouts/PageLayout"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useGetAllQuery } from "../../services/repository";
import { useState } from "react";

export default function Repository() {
    const [params, setParams] = useState({
        q: ''
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

        <div>

        </div>
    </PageLayout>
}