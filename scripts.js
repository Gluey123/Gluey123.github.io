document.querySelectorAll('.copy-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    const code = btn.getAttribute('data-code');
    navigator.clipboard.writeText(code);
    const tip = btn.querySelector('.copy-tip');
    tip.textContent = 'Copied!';
    setTimeout(() => { tip.textContent = 'Copy Code'; }, 1200);
  });
});

const words = [
  "Cybersec Portfolio",
  "Security Research",
  "CTF Logs",
  "Labs",
  "Pentesting Projects"
];


document.getElementById('img-modal-close').onclick = function() {
  document.getElementById('img-modal').style.display = 'none';
};
document.getElementById('img-modal').onclick = function(e) {
  if (e.target === this) this.style.display = 'none';
};

// IDS/IPS Fun Fact of the Day (with sources)
const idsFacts = [
  { text: "Social engineering is used in almost every cyberattack — up to 98% of them", url: "https://sprinto.com/blog/social-engineering-statistics/" },
  { text: "In 2024, ransomware attackers received $813.6 million in total payments", url: "https://www.chainalysis.com/blog/ransomware-2024-preview/" },
  { text: "The median ransom payment reached $1.5M by mid-2024", url: "https://www.chainalysis.com/blog/ransomware-2024-preview/" },
  { text: "Average ransomware payment in 2024 was $2.73M", url: "https://www.chainalysis.com/blog/ransomware-2024-preview/" },
  { text: "Zeek (formerly Bro) isn’t just an IDS — it’s a network analysis framework", url: "https://zeek.org/" },
  { text: "Snort was originally released in 1998 as a lightweight packet sniffer", url: "https://www.snort.org/" },
  { text: "You can write custom Snort rules to detect specific words in traffic", url: "https://docs.snort.org/rules" },
  { text: "IDSs can’t decrypt HTTPS unless paired with SSL inspection tools", url: "https://www.varonis.com/blog/ssl-deep-packet-inspection" },
  { text: "Home routers almost never include true IDS or IPS functionality", url: "https://www.cisa.gov/sites/default/files/publications/2023-cybersecurity-best-practices-home-networking_508.pdf" },
  { text: "85% of organizations reported phishing or social engineering attempts in recent years", url: "https://sprinto.com/blog/social-engineering-statistics/" },
  { text: "IDS logs can reveal rogue devices, unusual protocols, or covert channels", url: "https://www.sans.org/white-papers/328/" },
  { text: "Signature-based IDSs can't detect zero-day attacks alone", url: "https://www.varonis.com/blog/intrusion-detection-systems" },
  { text: "IDS alerts often get fed into SIEM systems for correlation", url: "https://www.ibm.com/topics/siem" },
  { text: "Even well-configured IDSs can be fooled by fragmented packets", url: "https://www.sans.org/white-papers/328/" },
  { text: "Zeek uses scripts to generate logs — not signatures", url: "https://docs.zeek.org/en/current/" },
  { text: "Suricata supports multi-threaded packet inspection at 10Gbps+", url: "https://docs.suricata.io/en/suricata-6.0.0/performance/intro.html" },
  { text: "IDSs are passive and alert-only; IPSs actively block traffic", url: "https://www.cloudflare.com/learning/ddos/glossary/intrusion-prevention-system-ips/" },
  { text: "You can run a full IDS setup on a Raspberry Pi", url: "https://pimylifeup.com/raspberry-pi-snort/" },
  { text: "Some enterprise firewalls include built-in IDS/IPS capabilities", url: "https://www.cisco.com/c/en/us/products/security/firewalls/what-is-a-next-generation-firewall-ngfw.html" },
  { text: "False positives are the top reason IDSs get ignored or disabled", url: "https://www.crowdstrike.com/cybersecurity-101/intrusion-detection-system-ids/" }
];

// Shuffle helper
function shuffle(array) {
  let arr = array.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

let factOrder = shuffle([...Array(idsFacts.length).keys()]);
let factPointer = 0;

function showRandomFact() {
  const factBox = document.getElementById('fact-of-the-day');
  if (!factBox) return;

  // If we've shown all, reshuffle
  if (factPointer >= factOrder.length) {
    factOrder = shuffle([...Array(idsFacts.length).keys()]);
    factPointer = 0;
  }

  const idx = factOrder[factPointer++];
  const fact = idsFacts[idx];

  // Render fact and button
  factBox.innerHTML = `
    <div>${fact.text}</div>
    <button id="fact-source-btn" class="source-btn" style="font-size:0.85rem;padding:0.2rem 0.7rem;margin-top:0.5rem;border-radius:12px;background:#00e1ff;color:#181818;border:none;cursor:pointer;">Don't believe it?</button>
  `;

  // Add click event to the button
  const sourceBtn = document.getElementById('fact-source-btn');
  if (sourceBtn) {
    sourceBtn.onclick = () => window.open(fact.url, '_blank', 'noopener');
  }
}

document.addEventListener('DOMContentLoaded', function() {
  showRandomFact(); // Show first fact
  const btn = document.getElementById('new-fact-btn');
  if (btn) btn.addEventListener('click', showRandomFact);
});
