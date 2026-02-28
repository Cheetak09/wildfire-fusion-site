// Mobile menu toggle
const menuBtn = document.getElementById("menuBtn");
const mobileNav = document.getElementById("mobileNav");

if (menuBtn && mobileNav) {
  menuBtn.addEventListener("click", () => {
    const isOpen = mobileNav.style.display === "block";
    mobileNav.style.display = isOpen ? "none" : "block";
    menuBtn.textContent = isOpen ? "Menu" : "Close";
  });

  // Close menu when clicking a link
  mobileNav.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      mobileNav.style.display = "none";
      menuBtn.textContent = "Menu";
    });
  });
}

// Metrics placeholders (edit here anytime)
const metrics = {
  rgb: { acc: "95.7%", f1: "0.82" },
  th:  { acc: "96.6%", f1: "0.88" },
  fused: { best: "Weighted (α≈0.60)", acc: "67%" }
};

// Write values to page
const rgbMetric = document.getElementById("rgbMetric");
const thMetric  = document.getElementById("thMetric");
const fusedMetric = document.getElementById("fusedMetric");
const fusedAcc = document.getElementById("fusedAcc");

if (rgbMetric) rgbMetric.textContent = `${metrics.rgb.acc} / ${metrics.rgb.f1}`;
if (thMetric) thMetric.textContent = `${metrics.th.acc} / ${metrics.th.f1}`;
if (fusedMetric) fusedMetric.textContent = `${metrics.fused.best}`;
if (fusedAcc) fusedAcc.textContent = `${metrics.fused.acc}`;


// run on load
apply();
