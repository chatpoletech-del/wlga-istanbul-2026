import { useState } from "react";
import EngagementScoreCard from "./EngagementScoreCard";
import EngagementBreakdown from "./EngagementBreakdown";
import ImpactMetrics from "./ImpactMetrics";
import QuarterlyReport from "./QuarterlyReport";
import BenchmarkPanel from "./BenchmarkPanel";
import OpportunitiesFeed from "./OpportunitiesFeed";
import ActivityTimeline from "./ActivityTimeline";
import { getOpportunitiesForPartner } from "../../data/leadershipData";

const TABS = ["Overview", "Engagement Score", "Quarterly Report", "Benchmarks", "Opportunities"];

export default function PartnerDashboard({ partner, onBack }) {
  const [activeTab, setActiveTab] = useState("Overview");
  const topOpportunities = getOpportunitiesForPartner(partner).slice(0, 3);

  return (
    <div className="min-h-screen bg-[#0A0E14]">
      <div className="max-w-5xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
          <button onClick={onBack} className="text-[#E8A020] hover:underline flex items-center gap-2">
            ← All Partners
          </button>
          <div className="flex items-center gap-3 flex-wrap">
            <h1 className="text-2xl font-bold text-white">
              {partner.company} {partner.flag}
            </h1>
            <span
              className="px-2 py-1 rounded text-xs font-medium"
              style={{ background: "#1E2A3A", color: "#E8A020" }}
            >
              {partner.categoryName}
            </span>
            <span className="text-slate-500 text-sm">Q1 2026 Dashboard</span>
          </div>
        </div>
        <p className="text-slate-500 text-xs mb-6">Last updated: 1 April 2026</p>

        <div className="flex border-b border-[#1E2A3A] gap-1 mb-8 overflow-x-auto">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2.5 text-sm font-medium whitespace-nowrap ${
                activeTab === tab ? "text-[#E8A020] border-b-2 border-[#E8A020]" : "text-slate-400 hover:text-slate-300"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {activeTab === "Overview" && (
          <div className="space-y-8">
            <EngagementScoreCard partner={partner} />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-[#131C28] border border-[#1E2A3A] rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-[#E8A020]" style={{ fontFamily: "Bebas Neue, sans-serif" }}>{partner.engagement.eventsAttended?.length ?? 0}</div>
                <div className="text-slate-400 text-sm">Events Attended</div>
              </div>
              <div className="bg-[#131C28] border border-[#1E2A3A] rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-[#E8A020]" style={{ fontFamily: "Bebas Neue, sans-serif" }}>{partner.engagement.thoughtLeadership?.length ?? 0}</div>
                <div className="text-slate-400 text-sm">Publications</div>
              </div>
              <div className="bg-[#131C28] border border-[#1E2A3A] rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-[#E8A020]" style={{ fontFamily: "Bebas Neue, sans-serif" }}>{partner.engagement.workingGroups?.length ?? 0}</div>
                <div className="text-slate-400 text-sm">Working Groups</div>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Recent Activity</h3>
                <ActivityTimeline partner={partner} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Top Opportunities</h3>
                {topOpportunities.length ? (
                  <div className="space-y-3">
                    {topOpportunities.map((opp) => (
                      <div key={opp.id} className="bg-[#131C28] border border-[#1E2A3A] rounded-lg p-4">
                        <div className="font-medium text-white text-sm">{opp.title}</div>
                        <p className="text-slate-500 text-xs mt-1">{opp.deadline} · +{opp.pointsValue} pts</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-slate-500 text-sm">No opportunities this quarter.</p>
                )}
              </div>
            </div>
          </div>
        )}

        {activeTab === "Engagement Score" && (
          <div className="space-y-8">
            <EngagementScoreCard partner={partner} />
            <EngagementBreakdown partner={partner} />
            <ImpactMetrics partner={partner} />
          </div>
        )}

        {activeTab === "Quarterly Report" && (
          <QuarterlyReport partnerId={partner.id} partnerName={partner.company} />
        )}

        {activeTab === "Benchmarks" && <BenchmarkPanel partner={partner} />}

        {activeTab === "Opportunities" && <OpportunitiesFeed partner={partner} />}
      </div>
    </div>
  );
}
