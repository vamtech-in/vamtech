export interface SecurityStandard {
  id: string;
  category: string;
  title: string;
  description: string;
  statusBadge: string;
  protocols: string[];
}

export const securityStandards: SecurityStandard[] = [
  {
    id: 'data-encryption',
    category: 'Data Protection',
    title: 'End-to-End Encryption & Key Management',
    description: 'All customer data is encrypted in transit using TLS 1.3 and at rest using AES-256 with AWS/GCP KMS key rotation.',
    statusBadge: 'Active Standard',
    protocols: ['TLS 1.3 Transport Encryption', 'AES-256-GCM Storage Encryption', 'Automated KMS Key Rotation', 'Zero Plaintext Storage']
  },
  {
    id: 'compliance-readiness',
    category: 'Compliance & Audits',
    title: 'SOC 2 Type II & GDPR Alignment',
    description: 'Our software delivery pipelines enforce continuous compliance scanning, access logging, and strict data residency controls.',
    statusBadge: 'Audit Compliant',
    protocols: ['SOC 2 Trust Principles (Security, Availability)', 'GDPR Right-to-be-Forgotten Implementation', 'ISO/IEC 27001 Controls', 'HIPAA BAA Readiness']
  },
  {
    id: 'app-security',
    category: 'Application Security',
    title: 'Secure SDLC & Automated Threat Modeling',
    description: 'Every pull request undergoes automated Static Application Security Testing (SAST), Software Composition Analysis (SCA), and container vulnerability scans.',
    statusBadge: 'Automated CI/CD',
    protocols: ['Dependabot / Snyk Vulnerability Audits', 'OWASP Top 10 Mitigation', 'Strict Role-Based Access Controls (RBAC)', 'Mandatory Multi-Factor Authentication']
  },
  {
    id: 'infrastructure-resilience',
    category: 'Infrastructure & SLA',
    title: 'High Availability & Disaster Recovery',
    description: 'Multi-AZ cloud deployments with automated health checks, blue/green deployments, and cross-region backups.',
    statusBadge: '99.99% Uptime SLA',
    protocols: ['Multi-AZ Cluster Failover', 'Point-in-time Database Recovery', 'Proactive PagerDuty Telemetry', 'Sub-15 Min Incident Response']
  }
];
