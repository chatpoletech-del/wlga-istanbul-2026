import MatchCard from "./MatchCard";

export default function MatchList({ matches, attendee }) {
  if (!matches?.length) return null;

  return (
    <div className="space-y-3">
      <h3 className="text-lg font-semibold text-wlga-content-text">
        Top {matches.length} matches
      </h3>
      <div className="grid gap-3">
        {matches.map((match, i) => (
          <MatchCard key={match.match_id || i} match={match} rank={i + 1} />
        ))}
      </div>
    </div>
  );
}
