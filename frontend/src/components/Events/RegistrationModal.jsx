import { useState } from "react";
import { REGISTRATION_COUNTRIES, HEAR_ABOUT_OPTIONS } from "../../utils/eventHelpers";

export default function RegistrationModal({ event, registrationType, onClose }) {
  const [form, setForm] = useState({ fullName: "", jobTitle: "", company: "", country: "", email: "", regType: registrationType?.name ?? "", hearAbout: "", message: "", agreed: false });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [refCode, setRefCode] = useState("");
  const handleChange = (e) => { const n = e.target.name; const v = e.target.type === "checkbox" ? e.target.checked : e.target.value; setForm((p) => ({ ...p, [n]: v })); };
  const valid = form.fullName && form.jobTitle && form.company && form.country && form.email && form.agreed;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!valid) return;
    setLoading(true);
    setTimeout(() => { setRefCode(String(Math.floor(100000 + Math.random() * 900000))); setLoading(false); setSuccess(true); }, 1500);
  };
  const types = event?.registration?.types ?? [];
  if (!event) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60" onClick={onClose}>
      <div className="bg-[#131C28] border border-[#1E2A3A] rounded-xl max-w-lg w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <div className="p-6 border-b border-[#1E2A3A] flex justify-between">
          <h2 className="text-xl font-bold text-white">Register for {event.shortTitle || event.title}</h2>
          <button onClick={onClose} className="text-slate-400 hover:text-white text-2xl">×</button>
        </div>
        <div className="p-6">
          {success ? (
            <div className="bg-emerald-500/15 border border-emerald-500/40 rounded-lg p-6 text-center">
              <p className="text-4xl mb-2">✅</p>
              <p className="text-white font-semibold mb-2">Registration Request Received!</p>
              <p className="text-slate-300 text-sm mb-2">We will send confirmation to {form.email} within 2 business days.</p>
              <p className="text-[#E8A020] font-mono text-lg">Your reference: REG-{refCode}</p>
              <p className="text-slate-500 text-xs mt-4">This is a demo registration. In production, this connects to the WLGA event management system.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div><label className="block text-slate-400 text-sm mb-1">Full Name *</label><input name="fullName" value={form.fullName} onChange={handleChange} required className="w-full px-3 py-2 bg-[#0A0E14] border border-[#1E2A3A] rounded text-white" /></div>
              <div><label className="block text-slate-400 text-sm mb-1">Job Title *</label><input name="jobTitle" value={form.jobTitle} onChange={handleChange} required className="w-full px-3 py-2 bg-[#0A0E14] border border-[#1E2A3A] rounded text-white" /></div>
              <div><label className="block text-slate-400 text-sm mb-1">Company Name *</label><input name="company" value={form.company} onChange={handleChange} required className="w-full px-3 py-2 bg-[#0A0E14] border border-[#1E2A3A] rounded text-white" /></div>
              <div><label className="block text-slate-400 text-sm mb-1">Country *</label><select name="country" value={form.country} onChange={handleChange} required className="w-full px-3 py-2 bg-[#0A0E14] border border-[#1E2A3A] rounded text-white"><option value="">Select</option>{REGISTRATION_COUNTRIES.map((c) => <option key={c} value={c}>{c}</option>)}</select></div>
              <div><label className="block text-slate-400 text-sm mb-1">Email *</label><input name="email" type="email" value={form.email} onChange={handleChange} required className="w-full px-3 py-2 bg-[#0A0E14] border border-[#1E2A3A] rounded text-white" /></div>
              {types.length > 0 && <div><label className="block text-slate-400 text-sm mb-1">Registration Type</label><select name="regType" value={form.regType} onChange={handleChange} className="w-full px-3 py-2 bg-[#0A0E14] border border-[#1E2A3A] rounded text-white">{types.map((t) => <option key={t.name} value={t.name}>{t.name} - {t.price}</option>)}</select></div>}
              <div><label className="block text-slate-400 text-sm mb-1">How did you hear about this event?</label><select name="hearAbout" value={form.hearAbout} onChange={handleChange} className="w-full px-3 py-2 bg-[#0A0E14] border border-[#1E2A3A] rounded text-white"><option value="">Select</option>{HEAR_ABOUT_OPTIONS.map((o) => <option key={o} value={o}>{o}</option>)}</select></div>
              <div><label className="block text-slate-400 text-sm mb-1">Message (optional)</label><textarea name="message" value={form.message} onChange={handleChange} rows={3} className="w-full px-3 py-2 bg-[#0A0E14] border border-[#1E2A3A] rounded text-white" /></div>
              <label className="flex items-start gap-2"><input name="agreed" type="checkbox" checked={form.agreed} onChange={handleChange} /><span className="text-slate-400 text-sm">I agree to WLGA Terms and Privacy Policy *</span></label>
              <div className="flex gap-3"><button type="submit" disabled={!valid || loading} className="px-4 py-2.5 bg-[#E8A020] text-[#0A0E14] font-semibold rounded-lg disabled:opacity-50">{loading ? "Submitting..." : "Submit"}</button><button type="button" onClick={onClose} className="px-4 py-2.5 border border-[#1E2A3A] text-slate-300 rounded-lg">Cancel</button></div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
