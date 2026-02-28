// ---------- SITE CONFIG ----------
const SITE = {
  metrics: {
    rgb:     { map50: 95.7, map5095: 65.5 },
    thermal: { map50: 96.6, map5095: 80.6 },
    fused:   { acc: 67.0 },
    best: {
      method: "Weighted Late Fusion",
      alpha: 0.6,
      details:
        "α tuned on validation; weighted fusion achieved highest overall reliability."
    }
  }
};
// --------------------------------


// Mobile menu toggle
const btn = document.getElementById("menuBtn");
const mob = document.getElementById("mobileNav");

if (btn && mob) {
  btn.addEventListener("click", () => {
    const show = mob.style.display !== "block";
    mob.style.display = show ? "block" : "none";
    btn.textContent = show ? "Close" : "Menu";
  });
}


// format percentage
function fmtPct(x){
  if (x === null || x === undefined) return "__%";
  const v = (x > 1) ? x : (x * 100);
  return `${v.toFixed(1)}%`;
}


// safely set text
function setText(id, val){
  const el = document.getElementById(id);
  if (el) el.textContent = val;
}


// apply values to page
function apply(){

  const rgbLine =
    `${fmtPct(SITE.metrics.rgb.map50)} / ${fmtPct(SITE.metrics.rgb.map5095)}`;

  const thLine =
    `${fmtPct(SITE.metrics.thermal.map50)} / ${fmtPct(SITE.metrics.thermal.map5095)}`;

  const fusedLine =
    `${SITE.metrics.best.method} • Acc ${fmtPct(SITE.metrics.fused.acc)} • α≈${SITE.metrics.best.alpha}`;

  setText("rgbMetricValue", rgbLine);
  setText("thMetricValue", thLine);
  setText("fusedMetricValue", fusedLine);

  setText(
    "bestFusionLine",
    `Best fusion: ${SITE.metrics.best.method} (α≈${SITE.metrics.best.alpha}). ${SITE.metrics.best.details}`
  );
}


// run on load
apply();
