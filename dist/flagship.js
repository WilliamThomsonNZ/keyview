!(function (e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define("flagship", [], t)
    : "object" == typeof exports
    ? (exports.flagship = t())
    : (e.flagship = t());
})(this, () =>
  (() => {
    "use strict";
    var e = {};
    return (
      ((e) => {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      })(e),
      [...document.querySelectorAll(".accordioncontainer")].forEach((e, t) => {
        const o = e.querySelector(".faqheader");
        !(function ({
          button: e,
          header: t,
          container: o,
          open: r,
          initialHeight: n,
          headerPadding: i,
        }) {
          r
            ? ((o.style.height = n + "px"),
              (e.querySelector(".linelower").style.transform =
                "rotate(0deg) translateY(-1px)"))
            : ((o.style.height = t.clientHeight + i + "px"),
              (e.querySelector(".linelower").style.transform =
                "rotate(90deg) translateY(0px)")),
            e.addEventListener("click", () => {
              r
                ? ((o.style.height = t.clientHeight + i + "px"),
                  (e.querySelector(".linelower").style.transform =
                    "rotate(90deg) translateY(0px)"),
                  (r = !1))
                : ((o.style.height = n + "px"),
                  (e.querySelector(".linelower").style.transform =
                    "rotate(0deg) translateY(-1px)"),
                  (r = !0));
            });
        })({
          button: e.querySelector(".accordionbutton"),
          header: o,
          container: e,
          open: 0 == t,
          initialHeight: e.clientHeight,
          headerPadding: 0,
        });
      }),
      e
    );
  })()
);
