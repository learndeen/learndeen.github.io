import { useTheme } from '../context/ThemeContext';

export default function ThemeSwitcher() {
    const { theme, setTheme } = useTheme();

    const themes = [
        { id: 'light', icon: '☀️', label: 'Light' },
        { id: 'sepia', icon: '📜', label: 'Sepia' },
        { id: 'dark', icon: '🌙', label: 'Dark' },
    ];

    return (
        <div className="fixed top-4 right-4 z-50 flex gap-2 bg-white/80 p-2 rounded-full shadow-lg backdrop-blur-sm border border-gray-200">
            {themes.map((t) => (
                <button
                    key={t.id}
                    onClick={() => setTheme(t.id)}
                    className={`
            w-8 h-8 flex items-center justify-center rounded-full transition-all
            ${theme === t.id ? 'bg-blue-100 scale-110 shadow-sm' : 'hover:bg-gray-100'}
          `}
                    title={t.label}
                >
                    <span className="text-lg">{t.icon}</span>
                </button>
            ))}
        </div>
    );
}
