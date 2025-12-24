import { Link, useParams } from 'react-router-dom';
import { topics } from '../data/topics';

export default function TopicPage() {
    const { slug } = useParams();
    const topic = topics.find(t => t.slug === slug);

    if (!topic) return <div className="text-center mt-20">Topic not found</div>;

    return (
        <div className="max-w-4xl mx-auto paper-sheet px-8 md:px-16 pb-12">
            <div className="mb-12 pl-6 relative pt-4 text-center">
                <Link to="/" className="inline-block mb-4 text-gray-600 hover:text-blue-600 font-bold decoration-none">← Back to Home</Link>
                <h1 className="handwritten-title text-4xl md:text-6xl mb-4">{topic.icon} {topic.title}</h1>
                <p className="text-xl text-gray-600">Sub-topics and details coming soon.</p>
            </div>

            <div className="pl-6">
                <div className="border-2 dashed border-gray-300 rounded-xl p-12 text-center text-gray-400 mt-8">
                    <span className="text-6xl block mb-4">🚧</span>
                    <p className="text-2xl handwritten-title">Content Under Construction</p>
                    <p className="mt-2">This section is currently being written. Please check back later!</p>
                </div>
            </div>
        </div>
    );
}
