!(function (e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define("team-member", [], t)
    : "object" == typeof exports
    ? (exports["team-member"] = t())
    : (e["team-member"] = t());
})(this, () =>
  (() => {
    document.querySelectorAll(".team-card-teampage");
    const e = document.getElementById("team-positions"),
      t = document.getElementById("positions-container"),
      o = e.textContent.split(",");
    return (
      o.forEach((e, n) => {
        const m = document.createElement("div");
        m.classList.add("teamrole"),
          (m.textContent = e),
          n < o.length - 1 && o.length > 1 && (m.textContent = `${e},`),
          t.appendChild(m);
      }),
      (e.style.display = "none"),
      (t.style.opacity = 1),
      {}
    );
  })()
);
