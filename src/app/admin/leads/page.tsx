'use client';

import React, { useState, useEffect } from 'react';
import AtmosphericWash from '@/components/AtmosphericWash';
import { 
  Inbox, 
  Search, 
  Trash2, 
  RefreshCw, 
  Download, 
  Mail, 
  Building2, 
  Calendar, 
  User, 
  DollarSign, 
  Clock, 
  CheckCircle2,
  FileText
} from 'lucide-react';

interface Lead {
  id: string;
  receivedAt: string;
  name: string;
  email: string;
  company: string;
  role: string;
  serviceInterest: string;
  budgetRange: string;
  timeline: string;
  message: string;
  status: string;
}

export default function AdminLeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);

  const fetchLeads = async () => {
    setIsLoading(true);
    try {
      const res = await fetch('/api/contact');
      const data = await res.json();
      if (data.success) {
        setLeads(data.leads || []);
      }
    } catch (err) {
      console.error('Failed to fetch leads:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  const handleDelete = async (id?: string) => {
    if (!confirm(id ? 'Delete this lead entry?' : 'Clear ALL received leads?')) return;
    try {
      const url = id ? `/api/contact?id=${id}` : '/api/contact';
      await fetch(url, { method: 'DELETE' });
      if (selectedLead && (selectedLead.id === id || !id)) {
        setSelectedLead(null);
      }
      fetchLeads();
    } catch (err) {
      console.error('Delete error:', err);
    }
  };

  const exportCSV = () => {
    if (leads.length === 0) return;
    const headers = ['ID', 'Date', 'Name', 'Email', 'Company', 'Role', 'Service', 'Budget', 'Timeline', 'Message'];
    const rows = leads.map(l => [
      l.id,
      new Date(l.receivedAt).toLocaleString(),
      `"${l.name}"`,
      `"${l.email}"`,
      `"${l.company}"`,
      `"${l.role}"`,
      `"${l.serviceInterest}"`,
      `"${l.budgetRange}"`,
      `"${l.timeline}"`,
      `"${(l.message || '').replace(/"/g, '""')}"`
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `vamtech_form_messages_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredLeads = leads.filter(l => 
    l.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    l.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    l.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
    l.serviceInterest.toLowerCase().includes(searchTerm.toLowerCase()) ||
    l.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ padding: '40px 0 100px', position: 'relative', minHeight: '85vh' }}>
      <AtmosphericWash variant="coral-sky" size={600} top="-100px" left="-100px" opacity={0.35} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header Bar */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '32px', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
              <Inbox size={24} color="var(--color-lake-blue)" />
              <h1 style={{ fontFamily: 'var(--font-untitled-serif)', fontSize: '32px', fontWeight: 400 }}>
                Form Submissions Inbox
              </h1>
            </div>
            <p style={{ fontFamily: 'var(--font-abc-diatype-mono)', fontSize: '14px', color: 'var(--color-graphite)' }}>
              All client intake messages submitted directly via the website contact form.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <button onClick={fetchLeads} className="btn-ghost" style={{ fontSize: '13px', padding: '10px 16px' }}>
              <RefreshCw size={14} className={isLoading ? 'animate-spin' : ''} />
              <span>Refresh</span>
            </button>
            <button onClick={exportCSV} disabled={leads.length === 0} className="btn-secondary" style={{ fontSize: '13px', padding: '10px 18px' }}>
              <Download size={14} />
              <span>Export CSV</span>
            </button>
            <button onClick={() => handleDelete()} disabled={leads.length === 0} className="btn-ghost" style={{ fontSize: '13px', padding: '10px 16px', color: 'var(--color-crimson)' }}>
              <Trash2 size={14} />
              <span>Clear All</span>
            </button>
          </div>
        </div>

        {/* Search & Counter Filter */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px', flexWrap: 'wrap', gap: '16px' }}>
          <div style={{ position: 'relative', width: '100%', maxWidth: '400px' }}>
            <Search size={16} color="var(--color-smoke)" style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }} />
            <input
              type="text"
              placeholder="Search by name, email, company, or scope ID..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="monad-input"
              style={{ paddingLeft: '40px', fontSize: '13px' }}
            />
          </div>

          <div style={{ fontFamily: 'var(--font-abc-diatype-mono)', fontSize: '13px', color: 'var(--color-smoke)' }}>
            Showing <strong>{filteredLeads.length}</strong> of <strong>{leads.length}</strong> total submitted messages
          </div>
        </div>

        {/* Grid Layout: Submissions List + Detail Viewer */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '24px', alignItems: 'start' }}>
          {/* Left Column: Form Submissions List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {isLoading ? (
              <div className="monad-card" style={{ padding: '40px', textAlign: 'center', backgroundColor: '#ffffff' }}>
                <p style={{ fontFamily: 'var(--font-abc-diatype-mono)', color: 'var(--color-graphite)' }}>Loading form submissions...</p>
              </div>
            ) : filteredLeads.length === 0 ? (
              <div className="monad-card" style={{ padding: '40px', textAlign: 'center', backgroundColor: '#ffffff' }}>
                <Inbox size={36} color="var(--color-ash)" style={{ margin: '0 auto 12px' }} />
                <h3 style={{ fontFamily: 'var(--font-untitled-serif)', fontSize: '20px', fontWeight: 400, marginBottom: '6px' }}>No Messages Found</h3>
                <p style={{ fontFamily: 'var(--font-abc-diatype-mono)', fontSize: '13px', color: 'var(--color-smoke)' }}>
                  {searchTerm ? 'No form messages match your search filter.' : 'When visitors submit the contact form, their messages will appear here.'}
                </p>
              </div>
            ) : (
              filteredLeads.map((lead) => (
                <div
                  key={lead.id}
                  onClick={() => setSelectedLead(lead)}
                  className="monad-card"
                  style={{
                    padding: '20px 24px',
                    backgroundColor: selectedLead?.id === lead.id ? 'var(--color-parchment)' : '#ffffff',
                    borderColor: selectedLead?.id === lead.id ? 'var(--color-lake-blue)' : 'var(--color-ash)',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <span style={{ fontSize: '11px', fontFamily: 'var(--font-abc-diatype-mono)', padding: '2px 8px', borderRadius: '4px', backgroundColor: 'var(--color-ash)', color: 'var(--color-off-black)' }}>
                      {lead.id}
                    </span>
                    <span style={{ fontSize: '11px', fontFamily: 'var(--font-abc-diatype-mono)', color: 'var(--color-smoke)' }}>
                      {new Date(lead.receivedAt).toLocaleDateString()} • {new Date(lead.receivedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>

                  <h3 style={{ fontFamily: 'var(--font-untitled-serif)', fontSize: '18px', fontWeight: 400, color: 'var(--color-off-black)', marginBottom: '4px' }}>
                    {lead.name}
                  </h3>
                  <div style={{ fontSize: '12.5px', fontFamily: 'var(--font-abc-diatype-mono)', color: 'var(--color-lake-blue)', marginBottom: '8px' }}>
                    {lead.email} {lead.company ? `• ${lead.company}` : ''}
                  </div>

                  <p style={{ fontSize: '13px', fontFamily: 'var(--font-abc-diatype-mono)', color: 'var(--color-graphite)', margin: 0, overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', lineHeight: 1.4 }}>
                    {lead.message}
                  </p>

                  <div style={{ display: 'flex', gap: '8px', marginTop: '12px', flexWrap: 'wrap' }}>
                    <span style={{ fontSize: '11px', padding: '2px 8px', borderRadius: '9999px', backgroundColor: 'var(--color-periwinkle-mist)', color: 'var(--color-lake-blue)' }}>
                      {lead.serviceInterest}
                    </span>
                    <span style={{ fontSize: '11px', padding: '2px 8px', borderRadius: '9999px', backgroundColor: 'rgba(167, 252, 205, 0.3)', color: '#0b5930' }}>
                      {lead.budgetRange}
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Right Column: Selected Message Detail View */}
          <div style={{ position: 'sticky', top: '100px' }}>
            {selectedLead ? (
              <div className="monad-card" style={{ backgroundColor: '#ffffff', padding: '32px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                  <span style={{ fontSize: '12px', fontFamily: 'var(--font-abc-diatype-mono)', fontWeight: 500, color: 'var(--color-lake-blue)' }}>
                    Ref: {selectedLead.id}
                  </span>
                  <button
                    onClick={() => handleDelete(selectedLead.id)}
                    style={{ background: 'none', border: 'none', color: 'var(--color-crimson)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '12px', fontFamily: 'var(--font-abc-diatype-mono)' }}
                  >
                    <Trash2 size={14} /> Delete
                  </button>
                </div>

                <h2 style={{ fontFamily: 'var(--font-untitled-serif)', fontSize: '26px', fontWeight: 400, marginBottom: '6px' }}>
                  {selectedLead.name}
                </h2>
                <div style={{ fontFamily: 'var(--font-abc-diatype-mono)', fontSize: '14px', color: 'var(--color-lake-blue)', marginBottom: '20px' }}>
                  <a href={`mailto:${selectedLead.email}`} style={{ textDecoration: 'underline', color: 'inherit' }}>
                    {selectedLead.email}
                  </a>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', padding: '16px', borderRadius: '12px', backgroundColor: 'var(--color-parchment)', marginBottom: '24px', fontSize: '13px', fontFamily: 'var(--font-abc-diatype-mono)' }}>
                  <div><strong>Company:</strong> {selectedLead.company || 'N/A'}</div>
                  <div><strong>Role:</strong> {selectedLead.role || 'N/A'}</div>
                  <div><strong>Service Required:</strong> {selectedLead.serviceInterest}</div>
                  <div><strong>Estimated Budget:</strong> {selectedLead.budgetRange}</div>
                  <div><strong>Target Timeline:</strong> {selectedLead.timeline}</div>
                  <div><strong>Submitted At:</strong> {new Date(selectedLead.receivedAt).toLocaleString()}</div>
                </div>

                <h4 style={{ fontFamily: 'var(--font-untitled-serif)', fontSize: '18px', fontWeight: 400, marginBottom: '10px' }}>
                  Message & Scope Description:
                </h4>
                <div style={{ padding: '16px', borderRadius: '12px', border: '1px solid var(--color-ash)', backgroundColor: '#fafafa', fontSize: '14px', lineHeight: 1.6, whiteSpace: 'pre-wrap', fontFamily: 'var(--font-abc-diatype-mono)', color: 'var(--color-off-black)' }}>
                  {selectedLead.message}
                </div>

                <div style={{ marginTop: '24px', display: 'flex', gap: '12px' }}>
                  <a
                    href={`mailto:${selectedLead.email}?subject=Re: Vamtech Architectural Consultation [${selectedLead.id}]`}
                    className="btn-primary"
                    style={{ flex: 1, fontSize: '13px', textAlign: 'center', textDecoration: 'none' }}
                  >
                    <span>Reply via Email</span>
                  </a>
                </div>
              </div>
            ) : (
              <div className="monad-card" style={{ backgroundColor: '#ffffff', padding: '48px 32px', textAlign: 'center' }}>
                <FileText size={32} color="var(--color-smoke)" style={{ margin: '0 auto 16px' }} />
                <h3 style={{ fontFamily: 'var(--font-untitled-serif)', fontSize: '20px', fontWeight: 400, marginBottom: '8px' }}>
                  Select a Submission
                </h3>
                <p style={{ fontFamily: 'var(--font-abc-diatype-mono)', fontSize: '13px', color: 'var(--color-graphite)' }}>
                  Click any submitted message from the left column to view full details and contact options.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
