import { Link } from 'react-router-dom';
import { topics } from '../data/topics';

const DoodleCard = ({ topic }) => {
    const linkPath = topic.link || `/topic/${topic.slug}`;

    return (
        <Link to={linkPath} className={`doodle-box ${topic.color} ${topic.rot}`}>
            <span className="text-4xl mb-2">{topic.icon}</span>
            <h2 className="handwritten-title text-xl font-bold">{topic.id}️⃣ {topic.title}</h2>
            <p className="text-sm text-gray-600 mt-2">{topic.desc}</p>
        </Link>
    );
};

export default function Home() {
    return (
        <div className="w-full max-w-[98%] xl:max-w-[1800px] mx-auto paper-sheet px-8 md:px-16 pb-12">
            {/* Header */}
            <div className="mb-12 pl-6 relative pt-4 text-center">
                <h1 className="handwritten-title text-4xl md:text-6xl mb-4">Islamic Handbook</h1>
                <p className="text-xl text-gray-600">Your simple, sunnah-based guide to Deen.</p>
            </div>

            {/* Grid */}
            <div className="pl-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {topics.map((topic) => (
                    <DoodleCard key={topic.id} topic={topic} />
                ))}
            </div>

            <div className="mt-16 text-center text-gray-400 text-sm">
                <p>Select a topic above to begin learning.</p>
            </div>
        </div>
    );
}
