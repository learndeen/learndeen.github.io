import { Link } from 'react-router-dom';

const SubTopicCard = ({ to, title, icon, desc, color, rot }) => (
    <Link to={to} className={`doodle-box ${color} ${rot}`}>
        <span className="text-4xl mb-2">{icon}</span>
        <h2 className="handwritten-title text-2xl">{title}</h2>
        <p className="text-sm text-gray-600 mt-2">{desc}</p>
    </Link>
);

export default function HajjUmrah() {
    return (
        <div className="w-full max-w-[98%] xl:max-w-[1800px] mx-auto paper-sheet px-8 md:px-16 pb-12">
            <div className="mb-12 pl-6 relative pt-4 text-center">
                <Link to="/" className="inline-block mb-4 text-gray-600 hover:text-blue-600 font-bold decoration-none">← Back to Home</Link>
                <h1 className="handwritten-title text-4xl md:text-6xl mb-4">7️⃣ Hajj & Umrah</h1>
                <p className="text-xl text-gray-600">Complete guide to the Pilgrimage.</p>
            </div>

            <div className="pl-6 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                <SubTopicCard
                    to="/hajj-umrah/description"
                    title="Step-by-step Hajj"
                    icon="🕋"
                    desc="Description of Hajj from Ihram to Farewell."
                    color="bg-yellow-50 hover:bg-yellow-100"
                    rot="-rotate-1"
                />
                <SubTopicCard
                    to="/hajj-umrah/virtues"
                    title="Virtues of Hajj"
                    icon="✨"
                    desc="Rewards and spiritual benefits."
                    color="bg-pink-50 hover:bg-pink-100"
                    rot="-rotate-1"
                />
                <SubTopicCard
                    to="/hajj-umrah/blessing"
                    title="Blessing of Hajj"
                    icon="🤲"
                    desc="Special blessings for pilgrims."
                    color="bg-indigo-50 hover:bg-indigo-100"
                    rot="rotate-1"
                />
                <SubTopicCard
                    to="/hajj-umrah/fiqh"
                    title="Fiqh (Rules)"
                    icon="📜"
                    desc="Rules, pillars, and obligations."
                    color="bg-green-50 hover:bg-green-100"
                    rot="rotate-1"
                />

                {/* Placeholders */}
                <SubTopicCard
                    to="#"
                    title="Hajj vs Umrah"
                    icon="🔄"
                    desc="Key differences."
                    color="bg-gray-50 hover:bg-gray-100"
                    rot="rotate-1"
                />
                <SubTopicCard
                    to="#"
                    title="Step-by-step Umrah"
                    icon="🦶"
                    desc="Guide to performing Umrah."
                    color="bg-red-50 hover:bg-red-100"
                    rot="-rotate-1"
                />
            </div>
        </div>
    );
}
