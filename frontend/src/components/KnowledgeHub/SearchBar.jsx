export default function SearchBar({ value, onChange, onSearch, loading }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSearch?.(value);
      }}
      className="w-full max-w-2xl mx-auto"
    >
      <div className="flex gap-2">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          placeholder="Ask anything about Liquid Gas Week Istanbul 2026..."
          className="flex-1 px-4 py-3 bg-wlga-content-surface border border-wlga-content-border rounded-lg text-wlga-content-text placeholder-wlga-content-muted focus:border-sky-500 focus:outline-none"
        />
        <button
          type="submit"
          disabled={loading}
          className="px-6 py-3 bg-sky-600 text-white font-semibold rounded-lg hover:opacity-90 disabled:opacity-50"
        >
          Search
        </button>
      </div>
    </form>
  );
}
