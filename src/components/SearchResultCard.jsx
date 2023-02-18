import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar, faEye, faCodeBranch } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom";

export default function SearchResultCard({ repo }) {
    const navigate = useNavigate()
    const MAX_DESCRIPTION_LENGTH = 100;

    const description = repo.description !== null ? (repo.description.length > MAX_DESCRIPTION_LENGTH
        ? repo.description.substring(0, MAX_DESCRIPTION_LENGTH) + "..."
        : repo.description) : ''

    return (
        <div className="cursor-pointer bg-white p-6 rounded-md shadow-md min-w-min" onClick={() => { navigate(`/repo/${repo.full_name}`) }}>
            <div className="text-lg font-medium text-gray-900">{repo.name}</div>
            <div className="text-sm font-medium text-gray-500">
                <span className="mr-4">
                    <FontAwesomeIcon icon={faStar} className="mr-1 text-yellow-500" />
                    {repo.stargazers_count}
                </span>
                <span className="mr-4">
                    <FontAwesomeIcon icon={faEye} className="mr-1 text-green-500" />
                    {repo.watchers_count}
                </span>
                <span>
                    <FontAwesomeIcon icon={faCodeBranch} className="mr-1 text-blue-500" />
                    {repo.forks_count}
                </span>
            </div>
            <div className="text-sm font-medium text-gray-500 mt-2">
                {repo.owner.login}
            </div>
            <div className="text-sm font-medium text-gray-500 mt-1">
                {description}
            </div>
            <div className="text-sm font-medium text-gray-500 mt-2">
                Updated on {new Date(repo.updated_at).toLocaleDateString()}
            </div>
        </div>
    );
}