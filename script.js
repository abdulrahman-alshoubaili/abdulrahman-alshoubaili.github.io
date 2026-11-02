// current year in the footer
document.getElementById('year').textContent = new Date().getFullYear();

// mobile navigation
const toggle = document.getElementById('nav-toggle');
const links = document.getElementById('nav-links');
if (toggle && links) {
  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  });
  links.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => {
      links.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open menu');
    })
  );
}

// project cards
const PORTFOLIO = 'https://github.com/abdulrahman-alshoubaili/cybersecurity-portfolio/tree/main/';
const projects = [
  {
    tag: 'Defensive / ML',
    name: 'AI-Powered Intrusion Detection System',
    desc: 'A machine-learning IDS that detects anomalies in live network traffic, trained and tested against simulated attacks.',
    url: PORTFOLIO + encodeURIComponent('AI-Powered IDS'),
  },
  {
    tag: 'Defensive / SOC',
    name: 'Threat Intelligence & Hunting Platform',
    desc: 'A Wazuh SIEM and SOAR pipeline with custom detection rules and log correlation for threat hunting across a simulated enterprise.',
    url: PORTFOLIO + encodeURIComponent('Threat Intel & Hunting (Wazuh)'),
  },
  {
    tag: 'Networking',
    name: 'Defense-in-Depth Network Topology',
    desc: 'A segmented multi-zone network in EVE-NG with perimeter firewalls and a DMZ, validated with Nmap.',
    url: PORTFOLIO + encodeURIComponent('Defense-in-Depth Network (EVE-NG)'),
  },
  {
    tag: 'Offensive',
    name: 'Ethical Hacking Assessment',
    desc: 'A full penetration test from reconnaissance to post-exploitation, with a severity-rated findings and remediation report.',
    url: PORTFOLIO + encodeURIComponent('Ethical Hacking Assessment'),
  },
  {
    tag: 'Governance',
    name: 'GRC Framework for the Aviation Sector',
    desc: 'An auditable GRC framework built in Eramba, covering control mapping, policy review cycles and risk tracking.',
    url: PORTFOLIO + encodeURIComponent('GRC Framework (Eramba)'),
  },
  {
    tag: 'Networking',
    name: 'Enterprise Network Design',
    desc: 'An enterprise network designed and implemented in Cisco Packet Tracer.',
    url: PORTFOLIO + encodeURIComponent('Networking and communication project'),
  },
  {
    tag: 'Offensive / Python',
    name: 'Reconnaissance Tooling',
    desc: 'A TCP port scanner and a service banner grabber written in Python with raw sockets during the InLighnX internship.',
    url: PORTFOLIO + encodeURIComponent('InLighnX projects'),
  },
  {
    tag: 'Offensive / DFIR',
    name: 'Pentesting & Forensics Tasks',
    desc: 'Weekly penetration testing, digital forensics and SOC tasks against public practice targets and sample datasets.',
    url: PORTFOLIO + encodeURIComponent('MKCC projects'),
  },
  {
    tag: 'Software',
    name: 'LAN File Transfer',
    desc: 'A password-protected LAN file server with resumable uploads, media previews, QR connect, HTTPS and safety-first UX.',
    url: 'https://github.com/abdulrahman-alshoubaili/LAN-File-Transfer',
  },
  {
    tag: 'Software',
    name: 'WinPadBridge',
    desc: 'Turns a Windows handheld into a wireless gamepad for another Windows PC over the network.',
    url: 'https://github.com/abdulrahman-alshoubaili/WinPadBridge',
  },
];

const wrap = document.getElementById('project-cards');
if (wrap) {
  const frag = document.createDocumentFragment();
  projects.forEach(p => {
    const a = document.createElement('a');
    a.className = 'card';
    a.href = p.url;
    a.target = '_blank';
    a.rel = 'noopener';

    const tag = document.createElement('span');
    tag.className = 'tag';
    tag.textContent = p.tag;

    const h3 = document.createElement('h3');
    h3.textContent = p.name;

    const desc = document.createElement('p');
    desc.textContent = p.desc;

    const link = document.createElement('span');
    link.className = 'link';
    link.textContent = 'View on GitHub →';

    a.append(tag, h3, desc, link);
    frag.appendChild(a);
  });
  wrap.appendChild(frag);
}

// highlight the section currently in view
const sections = Array.from(document.querySelectorAll('main section[id], section[id="about"]'));
const navMap = new Map();
document.querySelectorAll('.nav-links a').forEach(a => {
  const id = a.getAttribute('href').slice(1);
  if (id) navMap.set(id, a);
});
if (sections.length && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const link = navMap.get(entry.target.id);
      if (!link) return;
      if (entry.isIntersecting) {
        navMap.forEach(a => a.classList.remove('active'));
        link.classList.add('active');
      }
    });
  }, { rootMargin: '-72px 0px -65% 0px', threshold: 0 });
  sections.forEach(s => observer.observe(s));
}
