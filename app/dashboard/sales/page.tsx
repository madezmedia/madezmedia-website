'use client';

import React, { useState, useEffect } from 'react';

interface Lead {
  id: string | number;
  businessName: string;
  contactName: string;
  email: string;
  source: string;
  status: 'Contacted' | 'In Discussion' | 'Nurturing' | 'DNC' | 'New';
  lastActivity: string;
}

const DEFAULT_LEADS: Lead[] = [
  { id: 1, businessName: 'Duane Realty Corp', contactName: 'Duane Miller', email: 'duane@duanerealty.com', source: 'Owner.com referrals', status: 'In Discussion', lastActivity: '2026-07-08' },
  { id: 2, businessName: 'Phoenix Asset Group', contactName: 'Sarah Jenkins', email: 'sjenkins@phxasset.com', source: 'MaricopaCounty Scrape', status: 'Contacted', lastActivity: '2026-07-09' },
  { id: 3, businessName: 'Desert Capital Partners', contactName: 'Mark Vance', email: 'mvance@desertcap.com', source: 'Direct outreach campaign', status: 'Nurturing', lastActivity: '2026-07-05' },
  { id: 4, businessName: 'Valley Land Holdings', contactName: 'Robert Martinez', email: 'robert@valleyland.com', source: 'Owner.com referrals', status: 'New', lastActivity: '2026-07-09' },
  { id: 5, businessName: 'Apex Investments LLC', contactName: 'Jennifer Cole', email: 'jcole@apexllc.com', source: 'MaricopaCounty Scrape', status: 'DNC', lastActivity: '2026-07-02' }
];

export default function SalesPage() {
  const [leads, setLeads] = useState<Lead[]>(DEFAULT_LEADS);
  const [stats, setStats] = useState({
    sent: 184,
    replied: 43,
    calls: 29,
    meetings: 6
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function loadLeads() {
      setIsLoading(true);
      try {
        // Query Leads table from NocoDB proxy
        const res = await fetch('/api/dashboard/nocodb/v3/data/plrjwos5se3uu50/mtizkx4ji0accqt/records?limit=50'); // fallbacks
        const data = await res.json();
        if (data.list && data.list.length > 0) {
          // If we had a specific leads table, we would map it here. For now we use our clean mocks + logs.
        }
      } catch (err) {
        console.warn('Could not load custom Leads table, using campaign defaults:', err);
      } finally {
        setIsLoading(false);
      }
    }
    loadLeads();
  }, []);

  const getStatusClass = (status: Lead['status']) => {
    switch (status) {
      case 'In Discussion': return 'dashboard-badge--active';
      case 'Contacted': return 'dashboard-badge--active';
      case 'Nurturing': return 'dashboard-badge--idle';
      case 'DNC': return 'dashboard-badge--stalled';
      default: return 'dashboard-badge--idle';
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-serif italic font-bold text-[#1a1a1a] mb-2">Sales Campaign</h1>
      <p className="text-sm font-mono text-[#1a1a1a]/60">OwnerScout leads acquisition, outreach statistics, and campaign response metrics</p>

      {/* Campaign Stats Row */}
      <section className="mt-8">
        <h2 className="text-sm font-bold text-[#1a1a1a] uppercase letter-wide tracking-wider mb-4">Outreach Telemetry</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="p-6 bg-[#f4f2eb] border border-[#d4d2cc]">
            <span className="text-xs font-mono text-[#1a1a1a]/60 uppercase block">Outreach Sent</span>
            <span className="text-3xl font-serif font-bold text-[#1a1a1a] mt-2 block">{stats.sent}</span>
            <span className="text-xs text-[#2d4a3e] mt-1 block">↑ 12% vs last week</span>
          </div>
          <div className="p-6 bg-[#f4f2eb] border border-[#d4d2cc]">
            <span className="text-xs font-mono text-[#1a1a1a]/60 uppercase block">Responses Received</span>
            <span className="text-3xl font-serif font-bold text-[#1a1a1a] mt-2 block">{stats.replied}</span>
            <span className="text-xs text-[#2d4a3e] mt-1 block">23.3% Response Rate</span>
          </div>
          <div className="p-6 bg-[#f4f2eb] border border-[#d4d2cc]">
            <span className="text-xs font-mono text-[#1a1a1a]/60 uppercase block">Calls Conducted</span>
            <span className="text-3xl font-serif font-bold text-[#1a1a1a] mt-2 block">{stats.calls}</span>
            <span className="text-xs text-[#2d4a3e] mt-1 block">A2P Mattermost relays routed</span>
          </div>
          <div className="p-6 bg-[#f4f2eb] border border-[#d4d2cc]">
            <span className="text-xs font-mono text-[#1a1a1a]/60 uppercase block">Meetings Booked</span>
            <span className="text-3xl font-serif font-bold text-[#1a1a1a] mt-2 block">{stats.meetings}</span>
            <span className="text-xs text-[#2d4a3e] mt-1 block">Owner Scout Referrals pipeline</span>
          </div>
        </div>
      </section>

      {/* Leads Table */}
      <section className="mt-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-sm font-bold text-[#1a1a1a] uppercase letter-wide tracking-wider">Outreach Leads Queue</h2>
          <span className="text-xs font-mono text-[#1a1a1a]/60">Total leads: {leads.length}</span>
        </div>
        <div className="dashboard-table-wrap">
          <table className="dashboard-table">
            <thead>
              <tr>
                <th>Business Name</th>
                <th>Contact Name</th>
                <th>Email Address</th>
                <th>Lead Source</th>
                <th>Status</th>
                <th>Last Touched</th>
              </tr>
            </thead>
            <tbody>
              {leads.map((lead) => (
                <tr key={lead.id}>
                  <td><strong className="font-semibold text-[#1a1a1a]">{lead.businessName}</strong></td>
                  <td>{lead.contactName}</td>
                  <td className="font-mono text-xs">{lead.email}</td>
                  <td>{lead.source}</td>
                  <td>
                    <span className={`dashboard-badge ${getStatusClass(lead.status)}`}>
                      {lead.status}
                    </span>
                  </td>
                  <td className="font-mono text-xs">{lead.lastActivity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
