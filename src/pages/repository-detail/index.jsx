import { useGetQuery } from "../../services/repository";
import { useParams } from "react-router-dom";
export default function RepositoryDetail() {
    const params = useParams()
    const { data: repo, isLoading, error } = useGetQuery(params)

    return (
        repo && <div className="container mx-auto p-4">
            <div className="flex items-center mb-4">
                <h1 className="text-3xl font-bold mr-4">{repo.name}</h1>
                <a href={repo.html_url} target="_blank" rel="noreferrer" className="text-lg text-blue-500 hover:underline">View on Github</a>
            </div>
            <div className="flex items-center mb-4">
                <h2 className="text-xl font-semibold mr-4">{repo.full_name}</h2>
                <a href={repo.owner.html_url} target="_blank" rel="noreferrer" className="text-lg text-blue-500 hover:underline">{repo.owner.login}</a>
            </div>
            <p className="text-lg mb-4">{repo.description}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-gray-100 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2">Open Issues</h3>
                    <p className="text-3xl font-bold">{repo.open_issues_count}</p>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2">Default Branch</h3>
                    <p className="text-3xl font-bold">{repo.default_branch}</p>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2">Watchers</h3>
                    <p className="text-3xl font-bold">{repo.watchers_count}</p>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2">Stars</h3>
                    <p className="text-3xl font-bold">{repo.stargazers_count}</p>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2">Forks</h3>
                    <p className="text-3xl font-bold">{repo.forks_count}</p>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2">License</h3>
                    <p className="text-lg">{repo.license ? repo.license.name : 'N/A'}</p>
                </div>
            </div>
        </div>
    );
}