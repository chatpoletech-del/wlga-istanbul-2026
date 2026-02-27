import { useState } from "react";

const VALUE_CHAIN_OPTIONS = [
  "Producer",
  "Trader",
  "Distributor",
  "Equipment Manufacturer",
  "NGO/Development",
  "rLPG/BioLPG",
  "Producer/Distributor",
  "Producer/Trader",
];

const PRIMARY_GOAL_OPTIONS = [
  "Expand into new African markets",
  "Find BioLPG / rLPG supply partners",
  "Secure long-term supply agreements",
  "Scale clean cooking",
  "Digital and IoT for cylinders",
  "Policy alignment and advocacy",
  "100% rLPG roadmap",
  "New supply sources",
  "Finance clean cooking",
  "Global advocacy and standards",
];

export default function AttendeeForm({ onSubmit, loading }) {
  const [form, setForm] = useState({
    full_name: "",
    job_title: "",
    company: "",
    country: "",
    value_chain_position: "",
    primary_goal: "",
    secondary_goal: "Networking and partnerships",
    sessions_of_interest: ["Geopolitics of LPG: Supply Security in 2026"],
    networking_preference: "Open to all",
    open_to_intro: true,
    match_weight: 0.85,
    company_size: "200-1000",
    lpg_segment: "Residential/Commercial",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-wlga-content-muted mb-1">Full Name</label>
          <input
            type="text"
            name="full_name"
            value={form.full_name}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 bg-wlga-content-surface border border-wlga-content-border rounded-lg text-wlga-content-text focus:border-sky-500 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-wlga-content-muted mb-1">Job Title</label>
          <input
            type="text"
            name="job_title"
            value={form.job_title}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 bg-wlga-content-surface border border-wlga-content-border rounded-lg text-wlga-content-text focus:border-sky-500 focus:outline-none"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-wlga-content-muted mb-1">Company</label>
          <input
            type="text"
            name="company"
            value={form.company}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 bg-wlga-content-surface border border-wlga-content-border rounded-lg text-wlga-content-text focus:border-sky-500 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-wlga-content-muted mb-1">Country</label>
          <input
            type="text"
            name="country"
            value={form.country}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 bg-wlga-content-surface border border-wlga-content-border rounded-lg text-wlga-content-text focus:border-sky-500 focus:outline-none"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-wlga-content-muted mb-1">Value Chain Position</label>
        <select
          name="value_chain_position"
          value={form.value_chain_position}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 bg-wlga-content-surface border border-wlga-content-border rounded-lg text-wlga-content-text focus:border-sky-500 focus:outline-none"
        >
          <option value="">Select...</option>
          {VALUE_CHAIN_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-wlga-content-muted mb-1">Primary Goal</label>
        <select
          name="primary_goal"
          value={form.primary_goal}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 bg-wlga-content-surface border border-wlga-content-border rounded-lg text-wlga-content-text focus:border-sky-500 focus:outline-none"
        >
          <option value="">Select...</option>
          {PRIMARY_GOAL_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      </div>
      <button
        type="submit"
        disabled={loading}
        className="px-6 py-2.5 bg-sky-600 text-white font-semibold rounded-lg hover:opacity-90 disabled:opacity-50"
      >
        {loading ? "AI is analysing 50 attendee profiles..." : "Get my matches"}
      </button>
    </form>
  );
}
