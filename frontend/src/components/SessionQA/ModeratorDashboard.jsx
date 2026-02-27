import { useState } from "react";
import QuestionCluster from "./QuestionCluster";
import LiveFeed from "./LiveFeed";

export default function ModeratorDashboard({
  sessionId,
  sessions,
  questions,
  clusters,
  moderatorNote,
  onRunClustering,
  onModerate,
  onSessionChange,
  liveQuestions,
  clusteringLoading,
}) {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-4 items-center">
        <label className="text-sm text-wlga-content-muted">Session:</label>
        <select
          value={sessionId}
          onChange={(e) => onSessionChange?.(e.target.value)}
          className="px-3 py-2 bg-wlga-content-surface border border-wlga-content-border rounded-lg text-wlga-content-text"
        >
          {sessions?.map((s) => (
            <option key={s.id} value={s.id}>
              {s.title}
            </option>
          ))}
        </select>
        <button
          type="button"
          onClick={() => onRunClustering?.(sessionId)}
          disabled={clusteringLoading}
          className="px-4 py-2 bg-sky-600 text-white font-semibold rounded-lg hover:opacity-90 disabled:opacity-50"
        >
          {clusteringLoading ? "Clustering..." : "Run AI Clustering"}
        </button>
      </div>

      {moderatorNote && (
        <div className="p-4 bg-sky-50 border border-sky-200 rounded-lg">
          <h4 className="text-sm font-semibold text-sky-700 mb-1">AI Moderator Note</h4>
          <p className="text-sm text-wlga-content-text">{moderatorNote}</p>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <h4 className="text-sm font-semibold text-wlga-content-text mb-2">Clusters</h4>
          <div className="space-y-3">
            {clusters?.map((c, i) => (
              <QuestionCluster
                key={c.cluster_id || i}
                cluster={c}
                onSelect={() => onModerate?.(c, "select")}
                onDecline={() => onModerate?.(c, "decline")}
              />
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-wlga-content-text mb-2">Live questions</h4>
          <LiveFeed questions={liveQuestions ?? questions} />
        </div>
      </div>
    </div>
  );
}
