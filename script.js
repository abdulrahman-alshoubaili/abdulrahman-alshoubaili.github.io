// year
document.getElementById('year').textContent = new Date().getFullYear();

// mobile nav
const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');
if (toggle) toggle.addEventListener('click', () => links.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a =>
  a.addEventListener('click', () => links.classList.remove('open'))
);

// projects
const REPO = 'https://github.com/abdulrahman-alshoubaili/cybersecurity-portfolio/tree/main/';
const projects = [
  { tag: 'Defensive / ML', name: 'AI-Powered IDS', folder: 'AI-Powered IDS',
    desc: 'Machine-learning intrusion detection on live network traffic, trained and tested against simulated attacks in VMs.' },
  { tag: 'Defensive / SOC', name: 'Threat Intel & Hunting (Wazuh)', folder: 'Threat Intel & Hunting (Wazuh)',
    desc: 'A Wazuh SIEM + SOAR detection pipeline with custom rules, log correlation, and threat hunts.' },
  { tag: 'Networking', name: 'Defense-in-Depth Network (EVE-NG)', folder: 'Defense-in-Depth Network (EVE-NG)',
    desc: 'A segmented multi-zone enterprise network with perimeter firewalls and a DMZ, verified with Nmap.' },
  { tag: 'Offensive', name: 'Ethical Hacking Assessment', folder: 'Ethical Hacking Assessment',
    desc: 'A full penetration test from reconnaissance to post-exploitation, with a severity-rated findings report.' },
  { tag: 'Governance', name: 'GRC Framework (Eramba)', folder: 'GRC Framework (Eramba)',
    desc: 'A governance, risk, and compliance framework for an aviation organization built in Eramba.' },
  { tag: 'Networking', name: 'Networking & Communication', folder: 'Networking and communication project',
    desc: 'An enterprise network designed and implemented in Cisco Packet Tracer.' },
  { tag: 'Offensive / Python', name: 'InLighnX Tools', folder: 'InLighnX projects',
    desc: 'A TCP port scanner and a service banner grabber built in Python during my InLighnX internship.' },
  { tag: 'Offensive / DFIR', name: 'MKCC Internship Tasks', folder: 'MKCC projects',
    desc: 'Weekly pentesting, forensics, and SOC tasks against public practice targets and sample datasets.' },
  { tag: 'Software', name: 'Web Development', folder: 'Web development project',
    desc: 'A multi-page website built with HTML, CSS, and JavaScript.' },
  { tag: 'Foundations', name: 'Computer System Project', folder: 'Computer System project',
    desc: 'University computer systems coursework.' },
];

const wrap = document.getElementById('project-cards');
if (wrap) {
  projects.forEach(p => {
    const a = document.createElement('a');
    a.className = 'card';
    a.href = REPO + encodeURIComponent(p.folder).replace(/%2F/g, '/');
    a.target = '_blank';
    a.rel = 'noopener';
    a.innerHTML = `<span class="tag">${p.tag}</span><h3>${p.name}</h3><p>${p.desc}</p><span class="link">View on GitHub &rarr;</span>`;
    wrap.appendChild(a);
  });
}
