import {
  createBlock,
  createElementBlock,
  defineComponent,
  onUnmounted,
  openBlock,
  ref,
  renderSlot,
  resolveDynamicComponent,
  shallowRef,
  toRefs,
  unref,
  watch,
  watchPostEffect,
  withCtx
} from "./chunk-MIUPHDQH.js";
import "./chunk-OSJZHPF7.js";

// node_modules/overlayscrollbars/overlayscrollbars.mjs
var createCache = (t2, n2) => {
  const { o: o2, i: s2, u: e2 } = t2;
  let c2 = o2;
  let r2;
  const cacheUpdateContextual = (t3, n3) => {
    const o3 = c2;
    const l2 = t3;
    const i2 = n3 || (s2 ? !s2(o3, l2) : o3 !== l2);
    if (i2 || e2) {
      c2 = l2;
      r2 = o3;
    }
    return [c2, i2, r2];
  };
  const cacheUpdateIsolated = (t3) => cacheUpdateContextual(n2(c2, r2), t3);
  const getCurrentCache = (t3) => [c2, !!t3, r2];
  return [n2 ? cacheUpdateIsolated : cacheUpdateContextual, getCurrentCache];
};
var t = typeof window !== "undefined" && typeof document !== "undefined";
var n = t ? window : {};
var o = Math.max;
var s = Math.min;
var e = Math.round;
var c = Math.abs;
var r = Math.sign;
var l = n.cancelAnimationFrame;
var i = n.requestAnimationFrame;
var a = n.setTimeout;
var u = n.clearTimeout;
var getApi = (t2) => typeof n[t2] !== "undefined" ? n[t2] : void 0;
var _ = getApi("MutationObserver");
var d = getApi("IntersectionObserver");
var f = getApi("ResizeObserver");
var p = getApi("ScrollTimeline");
var v = t && Node.ELEMENT_NODE;
var { toString: h, hasOwnProperty: g } = Object.prototype;
var isUndefined = (t2) => t2 === void 0;
var isNull = (t2) => t2 === null;
var isNumber = (t2) => typeof t2 === "number";
var isString = (t2) => typeof t2 === "string";
var isBoolean = (t2) => typeof t2 === "boolean";
var isFunction = (t2) => typeof t2 === "function";
var isArray = (t2) => Array.isArray(t2);
var isObject = (t2) => typeof t2 === "object" && !isArray(t2) && !isNull(t2);
var isArrayLike = (t2) => {
  const n2 = !!t2 && t2.length;
  const o2 = isNumber(n2) && n2 > -1 && n2 % 1 == 0;
  return isArray(t2) || !isFunction(t2) && o2 ? n2 > 0 && isObject(t2) ? n2 - 1 in t2 : true : false;
};
var isPlainObject = (t2) => {
  if (!t2 || !isObject(t2)) {
    return false;
  }
  let n2;
  const o2 = "constructor";
  const s2 = t2[o2];
  const e2 = s2 && s2.prototype;
  const c2 = g.call(t2, o2);
  const r2 = e2 && g.call(e2, "isPrototypeOf");
  if (s2 && !c2 && !r2) {
    return false;
  }
  for (n2 in t2) {
  }
  return isUndefined(n2) || g.call(t2, n2);
};
var isHTMLElement = (t2) => {
  const n2 = HTMLElement;
  return t2 ? n2 ? t2 instanceof n2 : t2.nodeType === v : false;
};
var isElement = (t2) => {
  const n2 = Element;
  return t2 ? n2 ? t2 instanceof n2 : t2.nodeType === v : false;
};
var animationCurrentTime = () => performance.now();
var animateNumber = (t2, n2, s2, e2, c2) => {
  let r2 = 0;
  const a2 = animationCurrentTime();
  const u2 = o(0, s2);
  const frame = (s3) => {
    const l2 = animationCurrentTime();
    const _2 = l2 - a2;
    const d2 = _2 >= u2;
    const f2 = s3 ? 1 : 1 - (o(0, a2 + u2 - l2) / u2 || 0);
    const p2 = (n2 - t2) * (isFunction(c2) ? c2(f2, f2 * u2, 0, 1, u2) : f2) + t2;
    const v2 = d2 || f2 === 1;
    e2 && e2(p2, f2, v2);
    r2 = v2 ? 0 : i(() => frame());
  };
  frame();
  return (t3) => {
    l(r2);
    t3 && frame(t3);
  };
};
function each(t2, n2) {
  if (isArrayLike(t2)) {
    for (let o2 = 0; o2 < t2.length; o2++) {
      if (n2(t2[o2], o2, t2) === false) {
        break;
      }
    }
  } else if (t2) {
    each(Object.keys(t2), (o2) => n2(t2[o2], o2, t2));
  }
  return t2;
}
var inArray = (t2, n2) => t2.indexOf(n2) >= 0;
var concat = (t2, n2) => t2.concat(n2);
var push = (t2, n2, o2) => {
  !o2 && !isString(n2) && isArrayLike(n2) ? Array.prototype.push.apply(t2, n2) : t2.push(n2);
  return t2;
};
var from = (t2) => Array.from(t2 || []);
var createOrKeepArray = (t2) => isArray(t2) ? t2 : [t2];
var isEmptyArray = (t2) => !!t2 && !t2.length;
var deduplicateArray = (t2) => from(new Set(t2));
var runEachAndClear = (t2, n2, o2) => {
  const runFn = (t3) => t3 && t3.apply(void 0, n2 || []);
  each(t2, runFn);
  !o2 && (t2.length = 0);
};
var b = "paddingTop";
var w = "paddingRight";
var y = "paddingLeft";
var m = "paddingBottom";
var S = "marginLeft";
var O = "marginRight";
var $ = "marginBottom";
var C = "overflowX";
var x = "overflowY";
var H = "width";
var E = "height";
var z = "visible";
var I = "hidden";
var A = "scroll";
var capitalizeFirstLetter = (t2) => {
  const n2 = String(t2 || "");
  return n2 ? n2[0].toUpperCase() + n2.slice(1) : "";
};
var equal = (t2, n2, o2, s2) => {
  if (t2 && n2) {
    let e2 = true;
    each(o2, (o3) => {
      const c2 = s2 ? s2(t2[o3]) : t2[o3];
      const r2 = s2 ? s2(n2[o3]) : n2[o3];
      if (c2 !== r2) {
        e2 = false;
      }
    });
    return e2;
  }
  return false;
};
var equalWH = (t2, n2) => equal(t2, n2, ["w", "h"]);
var equalXY = (t2, n2) => equal(t2, n2, ["x", "y"]);
var equalTRBL = (t2, n2) => equal(t2, n2, ["t", "r", "b", "l"]);
var noop = () => {
};
var bind = (t2, ...n2) => t2.bind(0, ...n2);
var selfClearTimeout = (t2) => {
  let n2;
  const o2 = t2 ? a : i;
  const s2 = t2 ? u : l;
  return [(e2) => {
    s2(n2);
    n2 = o2(() => e2(), isFunction(t2) ? t2() : t2);
  }, () => s2(n2)];
};
var debounce = (t2, n2) => {
  const { _: o2, p: s2, v: e2, m: c2 } = n2 || {};
  let r2;
  let _2;
  let d2;
  let f2;
  let p2 = noop;
  const v2 = function invokeFunctionToDebounce(n3) {
    p2();
    u(r2);
    f2 = r2 = _2 = void 0;
    p2 = noop;
    t2.apply(this, n3);
  };
  const mergeParms = (t3) => c2 && _2 ? c2(_2, t3) : t3;
  const flush = () => {
    if (p2 !== noop) {
      v2(mergeParms(d2) || d2);
    }
  };
  const h2 = function debouncedFn() {
    const t3 = from(arguments);
    const n3 = isFunction(o2) ? o2() : o2;
    const c3 = isNumber(n3) && n3 >= 0;
    if (c3) {
      const o3 = isFunction(s2) ? s2() : s2;
      const c4 = isNumber(o3) && o3 >= 0;
      const h3 = n3 > 0 ? a : i;
      const g3 = n3 > 0 ? u : l;
      const b2 = mergeParms(t3);
      const w2 = b2 || t3;
      const y2 = v2.bind(0, w2);
      let m2;
      p2();
      if (e2 && !f2) {
        y2();
        f2 = true;
        m2 = h3(() => f2 = void 0, n3);
      } else {
        m2 = h3(y2, n3);
        if (c4 && !r2) {
          r2 = a(flush, o3);
        }
      }
      p2 = () => g3(m2);
      _2 = d2 = w2;
    } else {
      v2(t3);
    }
  };
  h2.S = flush;
  return h2;
};
var hasOwnProperty = (t2, n2) => Object.prototype.hasOwnProperty.call(t2, n2);
var keys = (t2) => t2 ? Object.keys(t2) : [];
var assignDeep = (t2, n2, o2, s2, e2, c2, r2) => {
  const l2 = [n2, o2, s2, e2, c2, r2];
  if ((typeof t2 !== "object" || isNull(t2)) && !isFunction(t2)) {
    t2 = {};
  }
  each(l2, (n3) => {
    each(n3, (o3, s3) => {
      const e3 = n3[s3];
      if (t2 === e3) {
        return true;
      }
      const c3 = isArray(e3);
      if (e3 && isPlainObject(e3)) {
        const n4 = t2[s3];
        let o4 = n4;
        if (c3 && !isArray(n4)) {
          o4 = [];
        } else if (!c3 && !isPlainObject(n4)) {
          o4 = {};
        }
        t2[s3] = assignDeep(o4, e3);
      } else {
        t2[s3] = c3 ? e3.slice() : e3;
      }
    });
  });
  return t2;
};
var removeUndefinedProperties = (t2, n2) => each(assignDeep({}, t2), (t3, o2, s2) => {
  if (t3 === void 0) {
    delete s2[o2];
  } else if (n2 && t3 && isPlainObject(t3)) {
    s2[o2] = removeUndefinedProperties(t3, n2);
  }
});
var isEmptyObject = (t2) => {
  for (const n2 in t2) {
    return false;
  }
  return true;
};
var capNumber = (t2, n2, e2) => o(t2, s(n2, e2));
var getDomTokensArray = (t2) => from(new Set((isArray(t2) ? t2 : (t2 || "").split(" ")).filter((t3) => t3)));
var getAttr = (t2, n2) => t2 && t2.getAttribute(n2);
var hasAttr = (t2, n2) => t2 && t2.hasAttribute(n2);
var setAttrs = (t2, n2, o2) => {
  each(getDomTokensArray(n2), (n3) => {
    t2 && t2.setAttribute(n3, String(o2 || ""));
  });
};
var removeAttrs = (t2, n2) => {
  each(getDomTokensArray(n2), (n3) => t2 && t2.removeAttribute(n3));
};
var domTokenListAttr = (t2, n2) => {
  const o2 = getDomTokensArray(getAttr(t2, n2));
  const s2 = bind(setAttrs, t2, n2);
  const domTokenListOperation = (t3, n3) => {
    const s3 = new Set(o2);
    each(getDomTokensArray(t3), (t4) => {
      s3[n3](t4);
    });
    return from(s3).join(" ");
  };
  return {
    O: (t3) => s2(domTokenListOperation(t3, "delete")),
    $: (t3) => s2(domTokenListOperation(t3, "add")),
    C: (t3) => {
      const n3 = getDomTokensArray(t3);
      return n3.reduce((t4, n4) => t4 && o2.includes(n4), n3.length > 0);
    }
  };
};
var removeAttrClass = (t2, n2, o2) => {
  domTokenListAttr(t2, n2).O(o2);
  return bind(addAttrClass, t2, n2, o2);
};
var addAttrClass = (t2, n2, o2) => {
  domTokenListAttr(t2, n2).$(o2);
  return bind(removeAttrClass, t2, n2, o2);
};
var addRemoveAttrClass = (t2, n2, o2, s2) => (s2 ? addAttrClass : removeAttrClass)(t2, n2, o2);
var hasAttrClass = (t2, n2, o2) => domTokenListAttr(t2, n2).C(o2);
var createDomTokenListClass = (t2) => domTokenListAttr(t2, "class");
var removeClass = (t2, n2) => {
  createDomTokenListClass(t2).O(n2);
};
var addClass = (t2, n2) => {
  createDomTokenListClass(t2).$(n2);
  return bind(removeClass, t2, n2);
};
var find = (t2, n2) => {
  const o2 = [];
  const s2 = n2 ? isElement(n2) && n2 : document;
  return s2 ? push(o2, s2.querySelectorAll(t2)) : o2;
};
var findFirst = (t2, n2) => {
  const o2 = n2 ? isElement(n2) && n2 : document;
  return o2 ? o2.querySelector(t2) : null;
};
var is = (t2, n2) => {
  if (isElement(t2)) {
    return t2.matches(n2);
  }
  return false;
};
var isBodyElement = (t2) => is(t2, "body");
var contents = (t2) => t2 ? from(t2.childNodes) : [];
var parent = (t2) => t2 && t2.parentElement;
var closest = (t2, n2) => isElement(t2) && t2.closest(n2);
var getFocusedElement = (t2) => (t2 || document).activeElement;
var liesBetween = (t2, n2, o2) => {
  const s2 = closest(t2, n2);
  const e2 = t2 && findFirst(o2, s2);
  const c2 = closest(e2, n2) === s2;
  return s2 && e2 ? s2 === t2 || e2 === t2 || c2 && closest(closest(t2, o2), n2) !== s2 : false;
};
var removeElements = (t2) => {
  if (isArrayLike(t2)) {
    each(from(t2), (t3) => removeElements(t3));
  } else if (t2) {
    const n2 = parent(t2);
    n2 && n2.removeChild(t2);
  }
};
var before = (t2, n2, o2) => {
  if (o2 && t2) {
    let s2 = n2;
    let e2;
    if (isArrayLike(o2)) {
      e2 = document.createDocumentFragment();
      each(o2, (t3) => {
        if (t3 === s2) {
          s2 = t3.previousSibling;
        }
        e2.appendChild(t3);
      });
    } else {
      e2 = o2;
    }
    if (n2) {
      if (!s2) {
        s2 = t2.firstChild;
      } else if (s2 !== n2) {
        s2 = s2.nextSibling;
      }
    }
    t2.insertBefore(e2, s2 || null);
    return () => removeElements(o2);
  }
  return noop;
};
var appendChildren = (t2, n2) => before(t2, null, n2);
var insertAfter = (t2, n2) => before(parent(t2), t2 && t2.nextSibling, n2);
var createDiv = (t2) => {
  const n2 = document.createElement("div");
  setAttrs(n2, "class", t2);
  return n2;
};
var createDOM = (t2) => {
  const n2 = createDiv();
  n2.innerHTML = t2.trim();
  return each(contents(n2), (t3) => removeElements(t3));
};
var T = /^--/;
var getCSSVal = (t2, n2) => t2.getPropertyValue(n2) || t2[n2] || "";
var validFiniteNumber = (t2) => {
  const n2 = t2 || 0;
  return isFinite(n2) ? n2 : 0;
};
var parseToZeroOrNumber = (t2) => validFiniteNumber(parseFloat(t2 || ""));
var ratioToCssPercent = (t2) => `${(validFiniteNumber(t2) * 100).toFixed(3)}%`;
var numberToCssPx = (t2) => `${validFiniteNumber(t2)}px`;
function setStyles(t2, n2) {
  t2 && n2 && each(n2, (n3, o2) => {
    try {
      const s2 = t2.style;
      const e2 = isNumber(n3) ? numberToCssPx(n3) : (n3 || "") + "";
      if (T.test(o2)) {
        s2.setProperty(o2, e2);
      } else {
        s2[o2] = e2;
      }
    } catch (s2) {
    }
  });
}
function getStyles(t2, o2, s2) {
  const e2 = isString(o2);
  let c2 = e2 ? "" : {};
  if (t2) {
    const r2 = n.getComputedStyle(t2, s2) || t2.style;
    c2 = e2 ? getCSSVal(r2, o2) : from(o2).reduce((t3, n2) => {
      t3[n2] = getCSSVal(r2, n2);
      return t3;
    }, c2);
  }
  return c2;
}
var topRightBottomLeft = (t2, n2, o2) => {
  const s2 = n2 ? `${n2}-` : "";
  const e2 = o2 ? `-${o2}` : "";
  const c2 = `${s2}top${e2}`;
  const r2 = `${s2}right${e2}`;
  const l2 = `${s2}bottom${e2}`;
  const i2 = `${s2}left${e2}`;
  const a2 = getStyles(t2, [c2, r2, l2, i2]);
  return {
    t: parseToZeroOrNumber(a2[c2]),
    r: parseToZeroOrNumber(a2[r2]),
    b: parseToZeroOrNumber(a2[l2]),
    l: parseToZeroOrNumber(a2[i2])
  };
};
var getTrasformTranslateValue = (t2, n2) => `translate${isObject(t2) ? `(${t2.x},${t2.y})` : `${n2 ? "X" : "Y"}(${t2})`}`;
var elementHasDimensions = (t2) => !!(t2.offsetWidth || t2.offsetHeight || t2.getClientRects().length);
var D = {
  w: 0,
  h: 0
};
var getElmWidthHeightProperty = (t2, n2) => n2 ? {
  w: n2[`${t2}Width`],
  h: n2[`${t2}Height`]
} : D;
var getWindowSize = (t2) => getElmWidthHeightProperty("inner", t2 || n);
var k = bind(getElmWidthHeightProperty, "offset");
var M = bind(getElmWidthHeightProperty, "client");
var R = bind(getElmWidthHeightProperty, "scroll");
var getFractionalSize = (t2) => {
  const n2 = parseFloat(getStyles(t2, H)) || 0;
  const o2 = parseFloat(getStyles(t2, E)) || 0;
  return {
    w: n2 - e(n2),
    h: o2 - e(o2)
  };
};
var getBoundingClientRect = (t2) => t2.getBoundingClientRect();
var hasDimensions = (t2) => !!t2 && elementHasDimensions(t2);
var domRectHasDimensions = (t2) => !!(t2 && (t2[E] || t2[H]));
var domRectAppeared = (t2, n2) => {
  const o2 = domRectHasDimensions(t2);
  const s2 = domRectHasDimensions(n2);
  return !s2 && o2;
};
var removeEventListener = (t2, n2, o2, s2) => {
  each(getDomTokensArray(n2), (n3) => {
    t2 && t2.removeEventListener(n3, o2, s2);
  });
};
var addEventListener = (t2, n2, o2, s2) => {
  var e2;
  const c2 = (e2 = s2 && s2.H) != null ? e2 : true;
  const r2 = s2 && s2.I || false;
  const l2 = s2 && s2.A || false;
  const i2 = {
    passive: c2,
    capture: r2
  };
  return bind(runEachAndClear, getDomTokensArray(n2).map((n3) => {
    const s3 = l2 ? (e3) => {
      removeEventListener(t2, n3, s3, r2);
      o2 && o2(e3);
    } : o2;
    t2 && t2.addEventListener(n3, s3, i2);
    return bind(removeEventListener, t2, n3, s3, r2);
  }));
};
var stopPropagation = (t2) => t2.stopPropagation();
var preventDefault = (t2) => t2.preventDefault();
var stopAndPrevent = (t2) => stopPropagation(t2) || preventDefault(t2);
var scrollElementTo = (t2, n2) => {
  const { x: o2, y: s2 } = isNumber(n2) ? {
    x: n2,
    y: n2
  } : n2 || {};
  isNumber(o2) && (t2.scrollLeft = o2);
  isNumber(s2) && (t2.scrollTop = s2);
};
var getElementScroll = (t2) => ({
  x: t2.scrollLeft,
  y: t2.scrollTop
});
var getZeroScrollCoordinates = () => ({
  T: {
    x: 0,
    y: 0
  },
  D: {
    x: 0,
    y: 0
  }
});
var sanitizeScrollCoordinates = (t2, n2) => {
  const { T: o2, D: s2 } = t2;
  const { w: e2, h: l2 } = n2;
  const sanitizeAxis = (t3, n3, o3) => {
    let s3 = r(t3) * o3;
    let e3 = r(n3) * o3;
    if (s3 === e3) {
      const o4 = c(t3);
      const r2 = c(n3);
      e3 = o4 > r2 ? 0 : e3;
      s3 = o4 < r2 ? 0 : s3;
    }
    s3 = s3 === e3 ? 0 : s3;
    return [s3 + 0, e3 + 0];
  };
  const [i2, a2] = sanitizeAxis(o2.x, s2.x, e2);
  const [u2, _2] = sanitizeAxis(o2.y, s2.y, l2);
  return {
    T: {
      x: i2,
      y: u2
    },
    D: {
      x: a2,
      y: _2
    }
  };
};
var isDefaultDirectionScrollCoordinates = ({ T: t2, D: n2 }) => {
  const getAxis = (t3, n3) => t3 === 0 && t3 <= n3;
  return {
    x: getAxis(t2.x, n2.x),
    y: getAxis(t2.y, n2.y)
  };
};
var getScrollCoordinatesPercent = ({ T: t2, D: n2 }, o2) => {
  const getAxis = (t3, n3, o3) => capNumber(0, 1, (t3 - o3) / (t3 - n3) || 0);
  return {
    x: getAxis(t2.x, n2.x, o2.x),
    y: getAxis(t2.y, n2.y, o2.y)
  };
};
var focusElement = (t2) => {
  if (t2 && t2.focus) {
    t2.focus({
      preventScroll: true
    });
  }
};
var manageListener = (t2, n2) => {
  each(createOrKeepArray(n2), t2);
};
var createEventListenerHub = (t2) => {
  const n2 = /* @__PURE__ */ new Map();
  const removeEvent = (t3, o2) => {
    if (t3) {
      const s2 = n2.get(t3);
      manageListener((t4) => {
        if (s2) {
          s2[t4 ? "delete" : "clear"](t4);
        }
      }, o2);
    } else {
      n2.forEach((t4) => {
        t4.clear();
      });
      n2.clear();
    }
  };
  const addEvent = (t3, o2) => {
    if (isString(t3)) {
      const s3 = n2.get(t3) || /* @__PURE__ */ new Set();
      n2.set(t3, s3);
      manageListener((t4) => {
        isFunction(t4) && s3.add(t4);
      }, o2);
      return bind(removeEvent, t3, o2);
    }
    if (isBoolean(o2) && o2) {
      removeEvent();
    }
    const s2 = keys(t3);
    const e2 = [];
    each(s2, (n3) => {
      const o3 = t3[n3];
      o3 && push(e2, addEvent(n3, o3));
    });
    return bind(runEachAndClear, e2);
  };
  const triggerEvent = (t3, o2) => {
    each(from(n2.get(t3)), (t4) => {
      if (o2 && !isEmptyArray(o2)) {
        t4.apply(0, o2);
      } else {
        t4();
      }
    });
  };
  addEvent(t2 || {});
  return [addEvent, removeEvent, triggerEvent];
};
var opsStringify = (t2) => JSON.stringify(t2, (t3, n2) => {
  if (isFunction(n2)) {
    throw 0;
  }
  return n2;
});
var getPropByPath = (t2, n2) => t2 ? `${n2}`.split(".").reduce((t3, n3) => t3 && hasOwnProperty(t3, n3) ? t3[n3] : void 0, t2) : void 0;
var V = {
  paddingAbsolute: false,
  showNativeOverlaidScrollbars: false,
  update: {
    elementEvents: [["img", "load"]],
    debounce: [0, 33],
    attributes: null,
    ignoreMutation: null
  },
  overflow: {
    x: "scroll",
    y: "scroll"
  },
  scrollbars: {
    theme: "os-theme-dark",
    visibility: "auto",
    autoHide: "never",
    autoHideDelay: 1300,
    autoHideSuspend: false,
    dragScroll: true,
    clickScroll: false,
    pointers: ["mouse", "touch", "pen"]
  }
};
var getOptionsDiff = (t2, n2) => {
  const o2 = {};
  const s2 = concat(keys(n2), keys(t2));
  each(s2, (s3) => {
    const e2 = t2[s3];
    const c2 = n2[s3];
    if (isObject(e2) && isObject(c2)) {
      assignDeep(o2[s3] = {}, getOptionsDiff(e2, c2));
      if (isEmptyObject(o2[s3])) {
        delete o2[s3];
      }
    } else if (hasOwnProperty(n2, s3) && c2 !== e2) {
      let t3 = true;
      if (isArray(e2) || isArray(c2)) {
        try {
          if (opsStringify(e2) === opsStringify(c2)) {
            t3 = false;
          }
        } catch (r2) {
        }
      }
      if (t3) {
        o2[s3] = c2;
      }
    }
  });
  return o2;
};
var createOptionCheck = (t2, n2, o2) => (s2) => [getPropByPath(t2, s2), o2 || getPropByPath(n2, s2) !== void 0];
var L = `data-overlayscrollbars`;
var P = "os-environment";
var U = `${P}-scrollbar-hidden`;
var N = `${L}-initialize`;
var q = "noClipping";
var B = `${L}-body`;
var F = L;
var j = "host";
var X = `${L}-viewport`;
var Y = C;
var W = x;
var J = "arrange";
var K = "measuring";
var G = "scrollbarHidden";
var Q = "scrollbarPressed";
var Z = "noContent";
var tt = `${L}-padding`;
var nt = `${L}-content`;
var ot = "os-size-observer";
var st = `${ot}-appear`;
var et = `${ot}-listener`;
var ct = `${et}-scroll`;
var rt = `${et}-item`;
var lt = `${rt}-final`;
var it = "os-trinsic-observer";
var at = "os-theme-none";
var ut = "os-scrollbar";
var _t = `${ut}-rtl`;
var dt = `${ut}-horizontal`;
var ft = `${ut}-vertical`;
var pt = `${ut}-track`;
var vt = `${ut}-handle`;
var ht = `${ut}-visible`;
var gt = `${ut}-cornerless`;
var bt = `${ut}-interaction`;
var wt = `${ut}-unusable`;
var yt = `${ut}-auto-hide`;
var mt = `${yt}-hidden`;
var St = `${ut}-wheel`;
var Ot = `${pt}-interactive`;
var $t = `${vt}-interactive`;
var Ct;
var createEnvironment = () => {
  const getNativeScrollbarSize = (t3, n2, o3) => {
    appendChildren(document.body, t3);
    appendChildren(document.body, t3);
    const s3 = M(t3);
    const e3 = k(t3);
    const c3 = getFractionalSize(n2);
    o3 && removeElements(t3);
    return {
      x: e3.h - s3.h + c3.h,
      y: e3.w - s3.w + c3.w
    };
  };
  const getNativeScrollbarsHiding = (t3) => {
    let n2 = false;
    const o3 = addClass(t3, U);
    try {
      n2 = getStyles(t3, "scrollbar-width") === "none" || getStyles(t3, "display", "::-webkit-scrollbar") === "none";
    } catch (s3) {
    }
    o3();
    return n2;
  };
  const t2 = `.${P}{scroll-behavior:auto!important;position:fixed;opacity:0;visibility:hidden;overflow:scroll;height:200px;width:200px;z-index:-1}.${P} div{width:200%;height:200%;margin:10px 0}.${U}{scrollbar-width:none!important}.${U}::-webkit-scrollbar,.${U}::-webkit-scrollbar-corner{appearance:none!important;display:none!important;width:0!important;height:0!important}`;
  const o2 = createDOM(`<div class="${P}"><div></div><style>${t2}</style></div>`);
  const s2 = o2[0];
  const e2 = s2.firstChild;
  const [c2, , r2] = createEventListenerHub();
  const [l2, i2] = createCache({
    o: getNativeScrollbarSize(s2, e2),
    i: equalXY
  }, bind(getNativeScrollbarSize, s2, e2, true));
  const [a2] = i2();
  const u2 = getNativeScrollbarsHiding(s2);
  const _2 = {
    x: a2.x === 0,
    y: a2.y === 0
  };
  const d2 = {
    elements: {
      host: null,
      padding: !u2,
      viewport: (t3) => u2 && isBodyElement(t3) && t3,
      content: false
    },
    scrollbars: {
      slot: true
    },
    cancel: {
      nativeScrollbarsOverlaid: false,
      body: null
    }
  };
  const f2 = assignDeep({}, V);
  const v2 = bind(assignDeep, {}, f2);
  const h2 = bind(assignDeep, {}, d2);
  const g3 = {
    k: a2,
    M: _2,
    R: u2,
    V: !!p,
    L: bind(c2, "r"),
    P: h2,
    U: (t3) => assignDeep(d2, t3) && h2(),
    N: v2,
    q: (t3) => assignDeep(f2, t3) && v2(),
    B: assignDeep({}, d2),
    F: assignDeep({}, f2)
  };
  removeAttrs(s2, "style");
  removeElements(s2);
  addEventListener(n, "resize", () => {
    r2("r", []);
  });
  if (isFunction(n.matchMedia) && !u2 && (!_2.x || !_2.y)) {
    const addZoomListener = (t3) => {
      const o3 = n.matchMedia(`(resolution: ${n.devicePixelRatio}dppx)`);
      addEventListener(o3, "change", () => {
        t3();
        addZoomListener(t3);
      }, {
        A: true
      });
    };
    addZoomListener(() => {
      const [t3, n2] = l2();
      assignDeep(g3.k, t3);
      r2("r", [n2]);
    });
  }
  return g3;
};
var getEnvironment = () => {
  if (!Ct) {
    Ct = createEnvironment();
  }
  return Ct;
};
var resolveInitialization = (t2, n2) => isFunction(n2) ? n2.apply(0, t2) : n2;
var staticInitializationElement = (t2, n2, o2, s2) => {
  const e2 = isUndefined(s2) ? o2 : s2;
  const c2 = resolveInitialization(t2, e2);
  return c2 || n2.apply(0, t2);
};
var dynamicInitializationElement = (t2, n2, o2, s2) => {
  const e2 = isUndefined(s2) ? o2 : s2;
  const c2 = resolveInitialization(t2, e2);
  return !!c2 && (isHTMLElement(c2) ? c2 : n2.apply(0, t2));
};
var cancelInitialization = (t2, n2) => {
  const { nativeScrollbarsOverlaid: o2, body: s2 } = n2 || {};
  const { M: e2, R: c2, P: r2 } = getEnvironment();
  const { nativeScrollbarsOverlaid: l2, body: i2 } = r2().cancel;
  const a2 = o2 != null ? o2 : l2;
  const u2 = isUndefined(s2) ? i2 : s2;
  const _2 = (e2.x || e2.y) && a2;
  const d2 = t2 && (isNull(u2) ? !c2 : u2);
  return !!_2 || !!d2;
};
var xt = /* @__PURE__ */ new WeakMap();
var addInstance = (t2, n2) => {
  xt.set(t2, n2);
};
var removeInstance = (t2) => {
  xt.delete(t2);
};
var getInstance = (t2) => xt.get(t2);
var createEventContentChange = (t2, n2, o2) => {
  let s2 = false;
  const e2 = o2 ? /* @__PURE__ */ new WeakMap() : false;
  const destroy = () => {
    s2 = true;
  };
  const updateElements = (c2) => {
    if (e2 && o2) {
      const r2 = o2.map((n3) => {
        const [o3, s3] = n3 || [];
        const e3 = s3 && o3 ? (c2 || find)(o3, t2) : [];
        return [e3, s3];
      });
      each(r2, (o3) => each(o3[0], (c3) => {
        const r3 = o3[1];
        const l2 = e2.get(c3) || [];
        const i2 = t2.contains(c3);
        if (i2 && r3) {
          const t3 = addEventListener(c3, r3, (o4) => {
            if (s2) {
              t3();
              e2.delete(c3);
            } else {
              n2(o4);
            }
          });
          e2.set(c3, push(l2, t3));
        } else {
          runEachAndClear(l2);
          e2.delete(c3);
        }
      }));
    }
  };
  updateElements();
  return [destroy, updateElements];
};
var createDOMObserver = (t2, n2, o2, s2) => {
  let e2 = false;
  const { j: c2, X: r2, Y: l2, W: i2, J: a2, K: u2 } = s2 || {};
  const d2 = debounce(() => e2 && o2(true), {
    _: 33,
    p: 99
  });
  const [f2, p2] = createEventContentChange(t2, d2, l2);
  const v2 = c2 || [];
  const h2 = r2 || [];
  const g3 = concat(v2, h2);
  const observerCallback = (e3, c3) => {
    if (!isEmptyArray(c3)) {
      const r3 = a2 || noop;
      const l3 = u2 || noop;
      const _2 = [];
      const d3 = [];
      let f3 = false;
      let v3 = false;
      each(c3, (o3) => {
        const { attributeName: e4, target: c4, type: a3, oldValue: u3, addedNodes: p3, removedNodes: g4 } = o3;
        const b3 = a3 === "attributes";
        const w2 = a3 === "childList";
        const y2 = t2 === c4;
        const m2 = b3 && e4;
        const S2 = m2 && getAttr(c4, e4 || "");
        const O2 = isString(S2) ? S2 : null;
        const $2 = m2 && u3 !== O2;
        const C2 = inArray(h2, e4) && $2;
        if (n2 && (w2 || !y2)) {
          const n3 = b3 && $2;
          const a4 = n3 && i2 && is(c4, i2);
          const d4 = a4 ? !r3(c4, e4, u3, O2) : !b3 || n3;
          const f4 = d4 && !l3(o3, !!a4, t2, s2);
          each(p3, (t3) => push(_2, t3));
          each(g4, (t3) => push(_2, t3));
          v3 = v3 || f4;
        }
        if (!n2 && y2 && $2 && !r3(c4, e4, u3, O2)) {
          push(d3, e4);
          f3 = f3 || C2;
        }
      });
      p2((t3) => deduplicateArray(_2).reduce((n3, o3) => {
        push(n3, find(t3, o3));
        return is(o3, t3) ? push(n3, o3) : n3;
      }, []));
      if (n2) {
        !e3 && v3 && o2(false);
        return [false];
      }
      if (!isEmptyArray(d3) || f3) {
        const t3 = [deduplicateArray(d3), f3];
        !e3 && o2.apply(0, t3);
        return t3;
      }
    }
  };
  const b2 = new _(bind(observerCallback, false));
  return [() => {
    b2.observe(t2, {
      attributes: true,
      attributeOldValue: true,
      attributeFilter: g3,
      subtree: n2,
      childList: n2,
      characterData: n2
    });
    e2 = true;
    return () => {
      if (e2) {
        f2();
        b2.disconnect();
        e2 = false;
      }
    };
  }, () => {
    if (e2) {
      d2.S();
      return observerCallback(true, b2.takeRecords());
    }
  }];
};
var Ht = {};
var Et = {};
var addPlugins = (t2) => {
  each(t2, (t3) => each(t3, (n2, o2) => {
    Ht[o2] = t3[o2];
  }));
};
var registerPluginModuleInstances = (t2, n2, o2) => keys(t2).map((s2) => {
  const { static: e2, instance: c2 } = t2[s2];
  const [r2, l2, i2] = o2 || [];
  const a2 = o2 ? c2 : e2;
  if (a2) {
    const t3 = o2 ? a2(r2, l2, n2) : a2(n2);
    return (i2 || Et)[s2] = t3;
  }
});
var getStaticPluginModuleInstance = (t2) => Et[t2];
var zt = "__osOptionsValidationPlugin";
var It = "__osSizeObserverPlugin";
var At = (() => ({
  [It]: {
    static: () => (t2, n2, o2) => {
      const s2 = 3333333;
      const e2 = "scroll";
      const c2 = createDOM(`<div class="${rt}" dir="ltr"><div class="${rt}"><div class="${lt}"></div></div><div class="${rt}"><div class="${lt}" style="width: 200%; height: 200%"></div></div></div>`);
      const r2 = c2[0];
      const a2 = r2.lastChild;
      const u2 = r2.firstChild;
      const _2 = u2 == null ? void 0 : u2.firstChild;
      let d2 = k(r2);
      let f2 = d2;
      let p2 = false;
      let v2;
      const reset = () => {
        scrollElementTo(u2, s2);
        scrollElementTo(a2, s2);
      };
      const onResized = (t3) => {
        v2 = 0;
        if (p2) {
          d2 = f2;
          n2(t3 === true);
        }
      };
      const onScroll = (t3) => {
        f2 = k(r2);
        p2 = !t3 || !equalWH(f2, d2);
        if (t3) {
          stopPropagation(t3);
          if (p2 && !v2) {
            l(v2);
            v2 = i(onResized);
          }
        } else {
          onResized(t3 === false);
        }
        reset();
      };
      const h2 = [appendChildren(t2, c2), addEventListener(u2, e2, onScroll), addEventListener(a2, e2, onScroll)];
      addClass(t2, ct);
      setStyles(_2, {
        [H]: s2,
        [E]: s2
      });
      i(reset);
      return [o2 ? bind(onScroll, false) : reset, h2];
    }
  }
}))();
var getShowNativeOverlaidScrollbars = (t2, n2) => {
  const { M: o2 } = n2;
  const [s2, e2] = t2("showNativeOverlaidScrollbars");
  return [s2 && o2.x && o2.y, e2];
};
var overflowIsVisible = (t2) => t2.indexOf(z) === 0;
var createViewportOverflowState = (t2, n2) => {
  const getAxisOverflowStyle = (t3, n3, o3, s2) => {
    const e2 = t3 === z ? I : t3.replace(`${z}-`, "");
    const c2 = overflowIsVisible(t3);
    const r2 = overflowIsVisible(o3);
    if (!n3 && !s2) {
      return I;
    }
    if (c2 && r2) {
      return z;
    }
    if (c2) {
      const t4 = n3 ? z : I;
      return n3 && s2 ? e2 : t4;
    }
    const l2 = r2 && s2 ? z : I;
    return n3 ? e2 : l2;
  };
  const o2 = {
    x: getAxisOverflowStyle(n2.x, t2.x, n2.y, t2.y),
    y: getAxisOverflowStyle(n2.y, t2.y, n2.x, t2.x)
  };
  return {
    G: o2,
    Z: {
      x: o2.x === A,
      y: o2.y === A
    }
  };
};
var Tt = "__osScrollbarsHidingPlugin";
var Dt = (() => ({
  [Tt]: {
    static: () => ({
      tt: (t2, n2, o2, s2, e2) => {
        const { nt: c2, ot: r2 } = t2;
        const { R: l2, M: i2, k: a2 } = s2;
        const u2 = !c2 && !l2 && (i2.x || i2.y);
        const [_2] = getShowNativeOverlaidScrollbars(e2, s2);
        const readViewportOverflowState = () => {
          const getStatePerAxis = (t4) => {
            const n4 = getStyles(r2, t4);
            const o4 = n4 === A;
            return [n4, o4];
          };
          const [t3, n3] = getStatePerAxis(C);
          const [o3, s3] = getStatePerAxis(x);
          return {
            G: {
              x: t3,
              y: o3
            },
            Z: {
              x: n3,
              y: s3
            }
          };
        };
        const _getViewportOverflowHideOffset = (t3) => {
          const { Z: n3 } = t3;
          const o3 = l2 || _2 ? 0 : 42;
          const getHideOffsetPerAxis = (t4, n4, s4) => {
            const e4 = t4 ? o3 : s4;
            const c4 = n4 && !l2 ? e4 : 0;
            const r4 = t4 && !!o3;
            return [c4, r4];
          };
          const [s3, e3] = getHideOffsetPerAxis(i2.x, n3.x, a2.x);
          const [c3, r3] = getHideOffsetPerAxis(i2.y, n3.y, a2.y);
          return {
            st: {
              x: s3,
              y: c3
            },
            et: {
              x: e3,
              y: r3
            }
          };
        };
        const _hideNativeScrollbars = (t3, { ct: o3 }, s3) => {
          if (!c2) {
            const e3 = assignDeep({}, {
              [O]: 0,
              [$]: 0,
              [S]: 0
            });
            const { st: c3, et: r3 } = _getViewportOverflowHideOffset(t3);
            const { x: l3, y: i3 } = r3;
            const { x: a3, y: u3 } = c3;
            const { rt: _3 } = n2;
            const d2 = o3 ? S : O;
            const f2 = o3 ? y : w;
            const p2 = _3[d2];
            const v2 = _3[$];
            const h2 = _3[f2];
            const g3 = _3[m];
            e3[H] = `calc(100% + ${u3 + p2 * -1}px)`;
            e3[d2] = -u3 + p2;
            e3[$] = -a3 + v2;
            if (s3) {
              e3[f2] = h2 + (i3 ? u3 : 0);
              e3[m] = g3 + (l3 ? a3 : 0);
            }
            return e3;
          }
        };
        const _arrangeViewport = (t3, s3, e3) => {
          if (u2) {
            const { rt: c3 } = n2;
            const { st: l3, et: i3 } = _getViewportOverflowHideOffset(t3);
            const { x: a3, y: u3 } = i3;
            const { x: _3, y: d2 } = l3;
            const { ct: f2 } = o2;
            const p2 = f2 ? w : y;
            const v2 = c3[p2];
            const h2 = c3.paddingTop;
            const g3 = s3.w + e3.w;
            const b2 = s3.h + e3.h;
            const m2 = {
              w: d2 && u3 ? `${d2 + g3 - v2}px` : "",
              h: _3 && a3 ? `${_3 + b2 - h2}px` : ""
            };
            setStyles(r2, {
              "--os-vaw": m2.w,
              "--os-vah": m2.h
            });
          }
          return u2;
        };
        const _undoViewportArrange = (t3) => {
          if (u2) {
            const s3 = t3 || readViewportOverflowState();
            const { rt: e3 } = n2;
            const { et: c3 } = _getViewportOverflowHideOffset(s3);
            const { x: l3, y: i3 } = c3;
            const a3 = {};
            const assignProps = (t4) => each(t4, (t5) => {
              a3[t5] = e3[t5];
            });
            if (l3) {
              assignProps([$, b, m]);
            }
            if (i3) {
              assignProps([S, O, y, w]);
            }
            const _3 = getStyles(r2, keys(a3));
            const d2 = removeAttrClass(r2, X, J);
            setStyles(r2, a3);
            return [() => {
              setStyles(r2, assignDeep({}, _3, _hideNativeScrollbars(s3, o2, u2)));
              d2();
            }, s3];
          }
          return [noop];
        };
        return {
          lt: _getViewportOverflowHideOffset,
          it: _arrangeViewport,
          ut: _undoViewportArrange,
          _t: _hideNativeScrollbars
        };
      }
    })
  }
}))();
var kt = "__osClickScrollPlugin";
var Mt = (() => ({
  [kt]: {
    static: () => (t2, n2, o2, s2, e2) => {
      let c2 = 0;
      let r2 = noop;
      const animateClickScroll = (l2) => {
        r2 = animateNumber(l2, l2 + s2 * Math.sign(o2), 133, (o3, l3, i2) => {
          t2(o3);
          const u2 = n2();
          const _2 = u2 + s2;
          const d2 = e2 >= u2 && e2 <= _2;
          if (i2 && !d2) {
            if (c2) {
              animateClickScroll(o3);
            } else {
              const t3 = a(() => {
                animateClickScroll(o3);
              }, 222);
              r2 = () => {
                clearTimeout(t3);
              };
            }
            c2++;
          }
        });
      };
      animateClickScroll(0);
      return () => r2();
    }
  }
}))();
var createSizeObserver = (t2, n2, o2) => {
  const { dt: s2 } = o2 || {};
  const e2 = getStaticPluginModuleInstance(It);
  const [c2] = createCache({
    o: false,
    u: true
  });
  return () => {
    const o3 = [];
    const r2 = createDOM(`<div class="${ot}"><div class="${et}"></div></div>`);
    const l2 = r2[0];
    const i2 = l2.firstChild;
    const onSizeChangedCallbackProxy = (t3) => {
      const o4 = t3 instanceof ResizeObserverEntry;
      let s3 = false;
      let e3 = false;
      if (o4) {
        const [n3, , o5] = c2(t3.contentRect);
        const r3 = domRectHasDimensions(n3);
        e3 = domRectAppeared(n3, o5);
        s3 = !e3 && !r3;
      } else {
        e3 = t3 === true;
      }
      if (!s3) {
        n2({
          ft: true,
          dt: e3
        });
      }
    };
    if (f) {
      const t3 = new f((t4) => onSizeChangedCallbackProxy(t4.pop()));
      t3.observe(i2);
      push(o3, () => {
        t3.disconnect();
      });
    } else if (e2) {
      const [t3, n3] = e2(i2, onSizeChangedCallbackProxy, s2);
      push(o3, concat([addClass(l2, st), addEventListener(l2, "animationstart", t3)], n3));
    } else {
      return noop;
    }
    return bind(runEachAndClear, push(o3, appendChildren(t2, l2)));
  };
};
var createTrinsicObserver = (t2, n2) => {
  let o2;
  const isHeightIntrinsic = (t3) => t3.h === 0 || t3.isIntersecting || t3.intersectionRatio > 0;
  const s2 = createDiv(it);
  const [e2] = createCache({
    o: false
  });
  const triggerOnTrinsicChangedCallback = (t3, o3) => {
    if (t3) {
      const s3 = e2(isHeightIntrinsic(t3));
      const [, c2] = s3;
      return c2 && !o3 && n2(s3) && [s3];
    }
  };
  const intersectionObserverCallback = (t3, n3) => triggerOnTrinsicChangedCallback(n3.pop(), t3);
  return [() => {
    const n3 = [];
    if (d) {
      o2 = new d(bind(intersectionObserverCallback, false), {
        root: t2
      });
      o2.observe(s2);
      push(n3, () => {
        o2.disconnect();
      });
    } else {
      const onSizeChanged = () => {
        const t3 = k(s2);
        triggerOnTrinsicChangedCallback(t3);
      };
      push(n3, createSizeObserver(s2, onSizeChanged)());
      onSizeChanged();
    }
    return bind(runEachAndClear, push(n3, appendChildren(t2, s2)));
  }, () => o2 && intersectionObserverCallback(true, o2.takeRecords())];
};
var createObserversSetup = (t2, n2, o2, s2) => {
  let e2;
  let c2;
  let r2;
  let l2;
  let i2;
  let a2;
  const u2 = `[${F}]`;
  const _2 = `[${X}]`;
  const d2 = [];
  const p2 = ["wrap", "cols", "rows"];
  const v2 = ["id", "class", "style", "open"];
  const { vt: h2, ht: g3, ot: b2, gt: w2, bt: y2, wt: m2, nt: S2, yt: O2, St: $2, Ot: C2 } = t2;
  const getDirectionIsRTL = (t3) => getStyles(t3, "direction") === "rtl";
  const x3 = {
    $t: false,
    ct: getDirectionIsRTL(h2)
  };
  const H2 = getEnvironment();
  const E2 = getStaticPluginModuleInstance(Tt);
  const [z2] = createCache({
    i: equalWH,
    o: {
      w: 0,
      h: 0
    }
  }, () => {
    const s3 = E2 && E2.tt(t2, n2, x3, H2, o2).ut;
    const e3 = O2 && S2;
    const c3 = !e3 && hasAttrClass(g3, F, q);
    const r3 = !S2 && $2(J);
    const l3 = r3 && getElementScroll(w2);
    const i3 = C2(K, c3);
    const a3 = r3 && s3 && s3()[0];
    const u3 = R(b2);
    const _3 = getFractionalSize(b2);
    a3 && a3();
    scrollElementTo(w2, l3);
    c3 && i3();
    return {
      w: u3.w + _3.w,
      h: u3.h + _3.h
    };
  });
  const I2 = m2 ? p2 : concat(v2, p2);
  const A2 = debounce(s2, {
    _: () => e2,
    p: () => c2,
    m(t3, n3) {
      const [o3] = t3;
      const [s3] = n3;
      return [concat(keys(o3), keys(s3)).reduce((t4, n4) => {
        t4[n4] = o3[n4] || s3[n4];
        return t4;
      }, {})];
    }
  });
  const setDirection = (t3) => {
    const n3 = getDirectionIsRTL(h2);
    assignDeep(t3, {
      Ct: a2 !== n3
    });
    assignDeep(x3, {
      ct: n3
    });
    a2 = n3;
  };
  const onTrinsicChanged = (t3, n3) => {
    const [o3, e3] = t3;
    const c3 = {
      xt: e3
    };
    assignDeep(x3, {
      $t: o3
    });
    !n3 && s2(c3);
    return c3;
  };
  const onSizeChanged = ({ ft: t3, dt: n3 }) => {
    const o3 = t3 && !n3;
    const e3 = !o3 && H2.R ? A2 : s2;
    const c3 = {
      ft: t3 || n3,
      dt: n3
    };
    setDirection(c3);
    e3(c3);
  };
  const onContentMutation = (t3, n3) => {
    const [, o3] = z2();
    const e3 = {
      Ht: o3
    };
    setDirection(e3);
    const c3 = t3 ? s2 : A2;
    o3 && !n3 && c3(e3);
    return e3;
  };
  const onHostMutation = (t3, n3, o3) => {
    const s3 = {
      Et: n3
    };
    setDirection(s3);
    if (n3 && !o3) {
      A2(s3);
    }
    return s3;
  };
  const [T2, D2] = y2 ? createTrinsicObserver(g3, onTrinsicChanged) : [];
  const k2 = !S2 && createSizeObserver(g3, onSizeChanged, {
    dt: true
  });
  const [M2, V2] = createDOMObserver(g3, false, onHostMutation, {
    X: v2,
    j: concat(v2, d2)
  });
  const L2 = S2 && f && new f((t3) => {
    const n3 = t3[t3.length - 1].contentRect;
    onSizeChanged({
      ft: true,
      dt: domRectAppeared(n3, i2)
    });
    i2 = n3;
  });
  const P3 = debounce(() => {
    const [, t3] = z2();
    s2({
      Ht: t3
    });
  }, {
    _: 222,
    v: true
  });
  return [() => {
    L2 && L2.observe(g3);
    const t3 = k2 && k2();
    const n3 = T2 && T2();
    const o3 = M2();
    const s3 = H2.L((t4) => {
      if (t4) {
        A2({
          zt: t4
        });
      } else {
        P3();
      }
    });
    return () => {
      L2 && L2.disconnect();
      t3 && t3();
      n3 && n3();
      l2 && l2();
      o3();
      s3();
    };
  }, ({ It: t3, At: n3, Tt: o3 }) => {
    const s3 = {};
    const [i3] = t3("update.ignoreMutation");
    const [a3, d3] = t3("update.attributes");
    const [f2, p3] = t3("update.elementEvents");
    const [v3, h3] = t3("update.debounce");
    const g4 = p3 || d3;
    const w3 = n3 || o3;
    const ignoreMutationFromOptions = (t4) => isFunction(i3) && i3(t4);
    if (g4) {
      r2 && r2();
      l2 && l2();
      const [t4, n4] = createDOMObserver(y2 || b2, true, onContentMutation, {
        j: concat(I2, a3 || []),
        Y: f2,
        W: u2,
        K: (t5, n5) => {
          const { target: o4, attributeName: s4 } = t5;
          const e3 = !n5 && s4 && !S2 ? liesBetween(o4, u2, _2) : false;
          return e3 || !!closest(o4, `.${ut}`) || !!ignoreMutationFromOptions(t5);
        }
      });
      l2 = t4();
      r2 = n4;
    }
    if (h3) {
      A2.S();
      if (isArray(v3)) {
        const t4 = v3[0];
        const n4 = v3[1];
        e2 = isNumber(t4) && t4;
        c2 = isNumber(n4) && n4;
      } else if (isNumber(v3)) {
        e2 = v3;
        c2 = false;
      } else {
        e2 = false;
        c2 = false;
      }
    }
    if (w3) {
      const t4 = V2();
      const n4 = D2 && D2();
      const o4 = r2 && r2();
      t4 && assignDeep(s3, onHostMutation(t4[0], t4[1], w3));
      n4 && assignDeep(s3, onTrinsicChanged(n4[0], w3));
      o4 && assignDeep(s3, onContentMutation(o4[0], w3));
    }
    setDirection(s3);
    return s3;
  }, x3];
};
var createScrollbarsSetupElements = (t2, n2, o2, s2) => {
  const { P: e2 } = getEnvironment();
  const { scrollbars: c2 } = e2();
  const { slot: r2 } = c2;
  const { vt: l2, ht: i2, ot: a2, Dt: u2, gt: _2, yt: d2, nt: f2 } = n2;
  const { scrollbars: v2 } = u2 ? {} : t2;
  const { slot: h2 } = v2 || {};
  const g3 = /* @__PURE__ */ new Map();
  const initScrollTimeline = (t3) => p && new p({
    source: _2,
    axis: t3
  });
  const b2 = {
    x: initScrollTimeline("x"),
    y: initScrollTimeline("y")
  };
  const w2 = dynamicInitializationElement([l2, i2, a2], () => f2 && d2 ? l2 : i2, r2, h2);
  const getScrollbarHandleLengthRatio = (t3, n3) => {
    if (n3) {
      const o3 = t3 ? H : E;
      const { kt: s4, Mt: e4 } = n3;
      const c4 = getBoundingClientRect(e4)[o3];
      const r4 = getBoundingClientRect(s4)[o3];
      return capNumber(0, 1, c4 / r4 || 0);
    }
    const s3 = t3 ? "x" : "y";
    const { Rt: e3, Vt: c3 } = o2;
    const r3 = c3[s3];
    const l3 = e3[s3];
    return capNumber(0, 1, r3 / (r3 + l3) || 0);
  };
  const getScrollbarHandleOffsetRatio = (t3, n3, o3) => {
    const s3 = getScrollbarHandleLengthRatio(o3, t3);
    return 1 / s3 * (1 - s3) * n3;
  };
  const addDirectionRTLKeyframes = (t3) => assignDeep(t3, {
    clear: ["left"]
  });
  const cancelElementAnimations = (t3) => {
    g3.forEach((n3, o3) => {
      const s3 = t3 ? inArray(createOrKeepArray(t3), o3) : true;
      if (s3) {
        each(n3 || [], (t4) => {
          t4 && t4.cancel();
        });
        g3.delete(o3);
      }
    });
  };
  const setElementAnimation = (t3, n3, o3, s3) => {
    const e3 = g3.get(t3) || [];
    const c3 = e3.find((t4) => t4 && t4.timeline === n3);
    if (c3) {
      c3.effect = new KeyframeEffect(t3, o3, {
        composite: s3
      });
    } else {
      g3.set(t3, concat(e3, [t3.animate(o3, {
        timeline: n3,
        composite: s3
      })]));
    }
  };
  const scrollbarStructureAddRemoveClass = (t3, n3, o3) => {
    const s3 = o3 ? addClass : removeClass;
    each(t3, (t4) => {
      s3(t4.Lt, n3);
    });
  };
  const scrollbarStyle = (t3, n3) => {
    each(t3, (t4) => {
      const [o3, s3] = n3(t4);
      setStyles(o3, s3);
    });
  };
  const scrollbarStructureRefreshHandleLength = (t3, n3) => {
    scrollbarStyle(t3, (t4) => {
      const { Mt: o3 } = t4;
      return [o3, {
        [n3 ? H : E]: ratioToCssPercent(getScrollbarHandleLengthRatio(n3))
      }];
    });
  };
  const scrollbarStructureRefreshHandleOffset = (t3, n3) => {
    const { Pt: s3 } = o2;
    const e3 = n3 ? "x" : "y";
    const c3 = b2[e3];
    const r3 = isDefaultDirectionScrollCoordinates(s3)[e3];
    const getAxisTransformValue = (t4, o3) => getTrasformTranslateValue(ratioToCssPercent(getScrollbarHandleOffsetRatio(t4, r3 ? o3 : 1 - o3, n3)), n3);
    if (c3) {
      each(t3, (t4) => {
        const { Mt: n4 } = t4;
        setElementAnimation(n4, c3, addDirectionRTLKeyframes({
          transform: [0, 1].map((n5) => getAxisTransformValue(t4, n5))
        }));
      });
    } else {
      scrollbarStyle(t3, (t4) => [t4.Mt, {
        transform: getAxisTransformValue(t4, getScrollCoordinatesPercent(s3, getElementScroll(_2))[e3])
      }]);
    }
  };
  const doRefreshScrollbarOffset = (t3) => f2 && !d2 && parent(t3) === a2;
  const y2 = [];
  const m2 = [];
  const S2 = [];
  const scrollbarsAddRemoveClass = (t3, n3, o3) => {
    const s3 = isBoolean(o3);
    const e3 = s3 ? o3 : true;
    const c3 = s3 ? !o3 : true;
    e3 && scrollbarStructureAddRemoveClass(m2, t3, n3);
    c3 && scrollbarStructureAddRemoveClass(S2, t3, n3);
  };
  const refreshScrollbarsHandleLength = () => {
    scrollbarStructureRefreshHandleLength(m2, true);
    scrollbarStructureRefreshHandleLength(S2);
  };
  const refreshScrollbarsHandleOffset = () => {
    scrollbarStructureRefreshHandleOffset(m2, true);
    scrollbarStructureRefreshHandleOffset(S2);
  };
  const refreshScrollbarsScrollbarOffset = () => {
    if (f2) {
      const { Rt: t3, Pt: n3 } = o2;
      const s3 = isDefaultDirectionScrollCoordinates(n3);
      const e3 = 0.5;
      if (b2.x && b2.y) {
        each(concat(S2, m2), ({ Lt: n4 }) => {
          if (doRefreshScrollbarOffset(n4)) {
            const setScrollbarElementAnimation = (o3) => setElementAnimation(n4, b2[o3], addDirectionRTLKeyframes({
              transform: [0, s3[o3] ? 1 : -1].map((n5) => getTrasformTranslateValue(numberToCssPx(n5 * (t3[o3] - e3)), o3 === "x"))
            }), "add");
            setScrollbarElementAnimation("x");
            setScrollbarElementAnimation("y");
          } else {
            cancelElementAnimations(n4);
          }
        });
      } else {
        const o3 = getScrollCoordinatesPercent(n3, getElementScroll(_2));
        const styleScrollbarPosition = (n4) => {
          const { Lt: e4 } = n4;
          const c3 = doRefreshScrollbarOffset(e4) && e4;
          const getTranslateValue = (t4, n5, o4) => {
            const s4 = n5 * t4;
            return numberToCssPx(o4 ? s4 : -s4);
          };
          return [c3, c3 && {
            transform: getTrasformTranslateValue({
              x: getTranslateValue(o3.x, t3.x, s3.x),
              y: getTranslateValue(o3.y, t3.y, s3.y)
            })
          }];
        };
        scrollbarStyle(m2, styleScrollbarPosition);
        scrollbarStyle(S2, styleScrollbarPosition);
      }
    }
  };
  const generateScrollbarDOM = (t3) => {
    const n3 = t3 ? dt : ft;
    const o3 = createDiv(`${ut} ${n3}`);
    const e3 = createDiv(pt);
    const c3 = createDiv(vt);
    const r3 = {
      Lt: o3,
      kt: e3,
      Mt: c3
    };
    push(t3 ? m2 : S2, r3);
    push(y2, [appendChildren(o3, e3), appendChildren(e3, c3), bind(removeElements, o3), cancelElementAnimations, s2(r3, scrollbarsAddRemoveClass, scrollbarStructureRefreshHandleOffset, t3)]);
    return r3;
  };
  const O2 = bind(generateScrollbarDOM, true);
  const $2 = bind(generateScrollbarDOM, false);
  const appendElements = () => {
    appendChildren(w2, m2[0].Lt);
    appendChildren(w2, S2[0].Lt);
    return bind(runEachAndClear, y2);
  };
  O2();
  $2();
  return [{
    Ut: refreshScrollbarsHandleLength,
    Nt: refreshScrollbarsHandleOffset,
    qt: refreshScrollbarsScrollbarOffset,
    Bt: scrollbarsAddRemoveClass,
    Ft: {
      V: b2.x,
      jt: m2,
      Xt: O2,
      Yt: bind(scrollbarStyle, m2)
    },
    Wt: {
      V: b2.y,
      jt: S2,
      Xt: $2,
      Yt: bind(scrollbarStyle, S2)
    }
  }, appendElements];
};
var createScrollbarsSetupEvents = (t2, n2, o2, s2) => (r2, l2, i2, u2) => {
  const { ht: _2, ot: d2, nt: f2, gt: p2, Jt: v2, Ot: h2 } = n2;
  const { Lt: g3, kt: b2, Mt: w2 } = r2;
  const [y2, m2] = selfClearTimeout(333);
  const [S2, O2] = selfClearTimeout(444);
  const [$2, C2] = selfClearTimeout();
  const x3 = bind(i2, [r2], u2);
  const scrollOffsetElementScrollBy = (t3) => {
    isFunction(p2.scrollBy) && p2.scrollBy({
      behavior: "smooth",
      left: t3.x,
      top: t3.y
    });
  };
  const z2 = u2 ? H : E;
  const createInteractiveScrollEvents = () => {
    const n3 = "pointerup pointercancel lostpointercapture";
    const s3 = `client${u2 ? "X" : "Y"}`;
    const r3 = u2 ? "left" : "top";
    const l3 = u2 ? "w" : "h";
    const i3 = u2 ? "x" : "y";
    const createRelativeHandleMove = (t3, n4) => (s4) => {
      const { Rt: e2 } = o2;
      const c2 = k(b2)[l3] - k(w2)[l3];
      const r4 = n4 * s4 / c2;
      const a2 = r4 * e2[i3];
      scrollElementTo(p2, {
        [i3]: t3 + a2
      });
    };
    return addEventListener(b2, "pointerdown", (o3) => {
      const a2 = closest(o3.target, `.${vt}`) === w2;
      const u3 = a2 ? w2 : b2;
      const _3 = t2.scrollbars;
      const { button: d3, isPrimary: f3, pointerType: g4 } = o3;
      const { pointers: y3 } = _3;
      const m3 = d3 === 0 && f3 && _3[a2 ? "dragScroll" : "clickScroll"] && (y3 || []).includes(g4);
      if (m3) {
        O2();
        const t3 = !a2 && o3.shiftKey;
        const _4 = bind(getBoundingClientRect, w2);
        const d4 = bind(getBoundingClientRect, b2);
        const getHandleOffset = (t4, n4) => (t4 || _4())[r3] - (n4 || d4())[r3];
        const f4 = e(getBoundingClientRect(p2)[z2]) / k(p2)[l3] || 1;
        const g5 = createRelativeHandleMove(getElementScroll(p2)[i3], 1 / f4);
        const y4 = o3[s3];
        const m4 = _4();
        const $3 = d4();
        const C3 = m4[z2];
        const x4 = getHandleOffset(m4, $3) + C3 / 2;
        const H2 = y4 - $3[r3];
        const E2 = a2 ? 0 : H2 - x4;
        const releasePointerCapture = (t4) => {
          runEachAndClear(A2);
          u3.releasePointerCapture(t4.pointerId);
        };
        const addScrollbarPressedClass = () => h2(Q, true);
        const I3 = addScrollbarPressedClass();
        const A2 = [() => {
          const t4 = getElementScroll(p2);
          I3();
          const n4 = getElementScroll(p2);
          const o4 = {
            x: n4.x - t4.x,
            y: n4.y - t4.y
          };
          if (c(o4.x) > 3 || c(o4.y) > 3) {
            addScrollbarPressedClass();
            scrollElementTo(p2, t4);
            scrollOffsetElementScrollBy(o4);
            S2(I3);
          }
        }, addEventListener(v2, n3, releasePointerCapture), addEventListener(v2, "selectstart", (t4) => preventDefault(t4), {
          H: false
        }), addEventListener(b2, n3, releasePointerCapture), addEventListener(b2, "pointermove", (n4) => {
          const o4 = n4[s3] - y4;
          if (a2 || t3) {
            g5(E2 + o4);
          }
        })];
        u3.setPointerCapture(o3.pointerId);
        if (t3) {
          g5(E2);
        } else if (!a2) {
          const t4 = getStaticPluginModuleInstance(kt);
          t4 && push(A2, t4(g5, getHandleOffset, E2, C3, H2));
        }
      }
    });
  };
  let I2 = true;
  const isAffectingTransition = (t3) => t3.propertyName.indexOf(z2) > -1;
  return bind(runEachAndClear, [addEventListener(w2, "pointermove pointerleave", s2), addEventListener(g3, "pointerenter", () => {
    l2(bt, true);
  }), addEventListener(g3, "pointerleave pointercancel", () => {
    l2(bt, false);
  }), !f2 && addEventListener(g3, "mousedown", () => {
    const t3 = getFocusedElement();
    if (hasAttr(t3, X) || hasAttr(t3, F) || t3 === document.body) {
      a(bind(focusElement, d2), 25);
    }
  }), addEventListener(g3, "wheel", (t3) => {
    const { deltaX: n3, deltaY: o3, deltaMode: s3 } = t3;
    if (I2 && s3 === 0 && parent(g3) === _2) {
      scrollOffsetElementScrollBy({
        x: n3,
        y: o3
      });
    }
    I2 = false;
    l2(St, true);
    y2(() => {
      I2 = true;
      l2(St);
    });
    preventDefault(t3);
  }, {
    H: false,
    I: true
  }), addEventListener(w2, "transitionstart", (t3) => {
    if (isAffectingTransition(t3)) {
      const animateHandleOffset = () => {
        x3();
        $2(animateHandleOffset);
      };
      animateHandleOffset();
    }
  }), addEventListener(w2, "transitionend transitioncancel", (t3) => {
    if (isAffectingTransition(t3)) {
      C2();
      x3();
    }
  }), addEventListener(g3, "pointerdown", bind(addEventListener, v2, "click", stopAndPrevent, {
    A: true,
    I: true,
    H: false
  }), {
    I: true
  }), createInteractiveScrollEvents(), m2, O2, C2]);
};
var createScrollbarsSetup = (t2, n2, o2, s2, e2, c2) => {
  let r2;
  let l2;
  let i2;
  let a2;
  let u2;
  let _2 = noop;
  let d2 = 0;
  const isHoverablePointerType = (t3) => t3.pointerType === "mouse";
  const [f2, p2] = selfClearTimeout();
  const [v2, h2] = selfClearTimeout(100);
  const [g3, b2] = selfClearTimeout(100);
  const [w2, y2] = selfClearTimeout(() => d2);
  const [m2, S2] = createScrollbarsSetupElements(t2, e2, s2, createScrollbarsSetupEvents(n2, e2, s2, (t3) => isHoverablePointerType(t3) && manageScrollbarsAutoHideInstantInteraction()));
  const { ht: O2, Kt: $2, yt: C2 } = e2;
  const { Bt: x3, Ut: H2, Nt: E2, qt: I2 } = m2;
  const manageScrollbarsAutoHide = (t3, n3) => {
    y2();
    if (t3) {
      x3(mt);
    } else {
      const t4 = bind(x3, mt, true);
      if (d2 > 0 && !n3) {
        w2(t4);
      } else {
        t4();
      }
    }
  };
  const manageScrollbarsAutoHideInstantInteraction = () => {
    if (i2 ? !r2 : !a2) {
      manageScrollbarsAutoHide(true);
      v2(() => {
        manageScrollbarsAutoHide(false);
      });
    }
  };
  const manageAutoHideSuspension = (t3) => {
    x3(yt, t3, true);
    x3(yt, t3, false);
  };
  const onHostMouseEnter = (t3) => {
    if (isHoverablePointerType(t3)) {
      r2 = i2;
      i2 && manageScrollbarsAutoHide(true);
    }
  };
  const T2 = [y2, h2, b2, p2, () => _2(), addEventListener(O2, "pointerover", onHostMouseEnter, {
    A: true
  }), addEventListener(O2, "pointerenter", onHostMouseEnter), addEventListener(O2, "pointerleave", (t3) => {
    if (isHoverablePointerType(t3)) {
      r2 = false;
      i2 && manageScrollbarsAutoHide(false);
    }
  }), addEventListener(O2, "pointermove", (t3) => {
    isHoverablePointerType(t3) && l2 && manageScrollbarsAutoHideInstantInteraction();
  }), addEventListener($2, "scroll", (t3) => {
    f2(() => {
      E2();
      manageScrollbarsAutoHideInstantInteraction();
    });
    c2(t3);
    I2();
  })];
  return [() => bind(runEachAndClear, push(T2, S2())), ({ It: t3, Tt: n3, Gt: e3, Qt: c3 }) => {
    const { Zt: r3, tn: f3, nn: p3, sn: v3 } = c3 || {};
    const { Ct: h3, dt: b3 } = e3 || {};
    const { ct: w3 } = o2;
    const { M: y3 } = getEnvironment();
    const { G: m3, en: S3 } = s2;
    const [O3, T3] = t3("showNativeOverlaidScrollbars");
    const [D2, k2] = t3("scrollbars.theme");
    const [M2, R2] = t3("scrollbars.visibility");
    const [V2, L2] = t3("scrollbars.autoHide");
    const [P3, U2] = t3("scrollbars.autoHideSuspend");
    const [N2] = t3("scrollbars.autoHideDelay");
    const [q2, B2] = t3("scrollbars.dragScroll");
    const [F2, j2] = t3("scrollbars.clickScroll");
    const [X2, Y2] = t3("overflow");
    const W2 = b3 && !n3;
    const J2 = S3.x || S3.y;
    const K2 = r3 || f3 || v3 || h3 || n3;
    const G2 = p3 || R2 || Y2;
    const Q2 = O3 && y3.x && y3.y;
    const setScrollbarVisibility = (t4, n4, o3) => {
      const s3 = t4.includes(A) && (M2 === z || M2 === "auto" && n4 === A);
      x3(ht, s3, o3);
      return s3;
    };
    d2 = N2;
    if (W2) {
      if (P3 && J2) {
        manageAutoHideSuspension(false);
        _2();
        g3(() => {
          _2 = addEventListener($2, "scroll", bind(manageAutoHideSuspension, true), {
            A: true
          });
        });
      } else {
        manageAutoHideSuspension(true);
      }
    }
    if (T3) {
      x3(at, Q2);
    }
    if (k2) {
      x3(u2);
      x3(D2, true);
      u2 = D2;
    }
    if (U2 && !P3) {
      manageAutoHideSuspension(true);
    }
    if (L2) {
      l2 = V2 === "move";
      i2 = V2 === "leave";
      a2 = V2 === "never";
      manageScrollbarsAutoHide(a2, true);
    }
    if (B2) {
      x3($t, q2);
    }
    if (j2) {
      x3(Ot, F2);
    }
    if (G2) {
      const t4 = setScrollbarVisibility(X2.x, m3.x, true);
      const n4 = setScrollbarVisibility(X2.y, m3.y, false);
      const o3 = t4 && n4;
      x3(gt, !o3);
    }
    if (K2) {
      H2();
      E2();
      I2();
      x3(wt, !S3.x, true);
      x3(wt, !S3.y, false);
      x3(_t, w3 && !C2);
    }
  }, {}, m2];
};
var createStructureSetupElements = (t2) => {
  const o2 = getEnvironment();
  const { P: s2, R: e2 } = o2;
  const { elements: c2 } = s2();
  const { host: r2, padding: l2, viewport: i2, content: a2 } = c2;
  const u2 = isHTMLElement(t2);
  const _2 = u2 ? {} : t2;
  const { elements: d2 } = _2;
  const { host: f2, padding: p2, viewport: v2, content: h2 } = d2 || {};
  const g3 = u2 ? t2 : _2.target;
  const b2 = isBodyElement(g3);
  const w2 = is(g3, "textarea");
  const y2 = g3.ownerDocument;
  const m2 = y2.documentElement;
  const getDocumentWindow = () => y2.defaultView || n;
  const S2 = bind(staticInitializationElement, [g3]);
  const O2 = bind(dynamicInitializationElement, [g3]);
  const $2 = bind(createDiv, "");
  const C2 = bind(S2, $2, i2);
  const x3 = bind(O2, $2, a2);
  const H2 = C2(v2);
  const E2 = H2 === g3;
  const z2 = E2 && b2;
  const I2 = !E2 && x3(h2);
  const A2 = !E2 && H2 === I2;
  const T2 = z2 ? m2 : H2;
  const D2 = w2 ? S2($2, r2, f2) : g3;
  const k2 = z2 ? T2 : D2;
  const M2 = !E2 && O2($2, l2, p2);
  const R2 = !A2 && I2;
  const V2 = [R2, T2, M2, k2].map((t3) => isHTMLElement(t3) && !parent(t3) && t3);
  const elementIsGenerated = (t3) => t3 && inArray(V2, t3);
  const L2 = elementIsGenerated(T2) ? g3 : T2;
  const P3 = {
    vt: g3,
    ht: k2,
    ot: T2,
    cn: M2,
    bt: R2,
    gt: z2 ? m2 : T2,
    Kt: z2 ? y2 : T2,
    rn: b2 ? m2 : L2,
    Jt: y2,
    wt: w2,
    yt: b2,
    Dt: u2,
    nt: E2,
    ln: getDocumentWindow,
    St: (t3) => hasAttrClass(T2, X, t3),
    Ot: (t3, n2) => addRemoveAttrClass(T2, X, t3, n2)
  };
  const { vt: U2, ht: q2, cn: Y2, ot: W2, bt: J2 } = P3;
  const K2 = [() => {
    removeAttrs(q2, [F, N]);
    removeAttrs(U2, N);
    if (b2) {
      removeAttrs(m2, [N, F]);
    }
  }];
  const Q2 = w2 && elementIsGenerated(q2);
  let Z2 = w2 ? U2 : contents([J2, W2, Y2, q2, U2].find((t3) => t3 && !elementIsGenerated(t3)));
  const ot2 = z2 ? U2 : J2 || W2;
  const st2 = bind(runEachAndClear, K2);
  const appendElements = () => {
    const t3 = getDocumentWindow();
    const n2 = getFocusedElement();
    const unwrap = (t4) => {
      appendChildren(parent(t4), contents(t4));
      removeElements(t4);
    };
    const prepareWrapUnwrapFocus = (t4) => addEventListener(t4, "focusin focusout focus blur", stopAndPrevent, {
      I: true,
      H: false
    });
    const o3 = "tabindex";
    const s3 = getAttr(W2, o3);
    const c3 = prepareWrapUnwrapFocus(n2);
    setAttrs(q2, F, E2 ? "" : j);
    setAttrs(Y2, tt, "");
    setAttrs(W2, X, "");
    setAttrs(J2, nt, "");
    if (!E2) {
      setAttrs(W2, o3, s3 || "-1");
      b2 && setAttrs(m2, B, "");
    }
    if (Q2) {
      insertAfter(U2, q2);
      push(K2, () => {
        insertAfter(q2, U2);
        removeElements(q2);
      });
    }
    appendChildren(ot2, Z2);
    appendChildren(q2, Y2);
    appendChildren(Y2 || q2, !E2 && W2);
    appendChildren(W2, J2);
    push(K2, [c3, () => {
      const t4 = getFocusedElement();
      const n3 = elementIsGenerated(W2);
      const e3 = n3 && t4 === W2 ? U2 : t4;
      const c4 = prepareWrapUnwrapFocus(e3);
      removeAttrs(Y2, tt);
      removeAttrs(J2, nt);
      removeAttrs(W2, X);
      b2 && removeAttrs(m2, B);
      s3 ? setAttrs(W2, o3, s3) : removeAttrs(W2, o3);
      elementIsGenerated(J2) && unwrap(J2);
      n3 && unwrap(W2);
      elementIsGenerated(Y2) && unwrap(Y2);
      focusElement(e3);
      c4();
    }]);
    if (e2 && !E2) {
      addAttrClass(W2, X, G);
      push(K2, bind(removeAttrs, W2, X));
    }
    focusElement(!E2 && b2 && n2 === U2 && t3.top === t3 ? W2 : n2);
    c3();
    Z2 = 0;
    return st2;
  };
  return [P3, appendElements, st2];
};
var createTrinsicUpdateSegment = ({ bt: t2 }) => ({ Gt: n2, an: o2, Tt: s2 }) => {
  const { xt: e2 } = n2 || {};
  const { $t: c2 } = o2;
  const r2 = t2 && (e2 || s2);
  if (r2) {
    setStyles(t2, {
      [E]: c2 && "100%"
    });
  }
};
var createPaddingUpdateSegment = ({ ht: t2, cn: n2, ot: o2, nt: s2 }, e2) => {
  const [c2, r2] = createCache({
    i: equalTRBL,
    o: topRightBottomLeft()
  }, bind(topRightBottomLeft, t2, "padding", ""));
  return ({ It: t3, Gt: l2, an: i2, Tt: a2 }) => {
    let [u2, _2] = r2(a2);
    const { R: d2 } = getEnvironment();
    const { ft: f2, Ht: p2, Ct: v2 } = l2 || {};
    const { ct: h2 } = i2;
    const [g3, C2] = t3("paddingAbsolute");
    const x3 = a2 || p2;
    if (f2 || _2 || x3) {
      [u2, _2] = c2(a2);
    }
    const E2 = !s2 && (C2 || v2 || _2);
    if (E2) {
      const t4 = !g3 || !n2 && !d2;
      const s3 = u2.r + u2.l;
      const c3 = u2.t + u2.b;
      const r3 = {
        [O]: t4 && !h2 ? -s3 : 0,
        [$]: t4 ? -c3 : 0,
        [S]: t4 && h2 ? -s3 : 0,
        top: t4 ? -u2.t : 0,
        right: t4 ? h2 ? -u2.r : "auto" : 0,
        left: t4 ? h2 ? "auto" : -u2.l : 0,
        [H]: t4 && `calc(100% + ${s3}px)`
      };
      const l3 = {
        [b]: t4 ? u2.t : 0,
        [w]: t4 ? u2.r : 0,
        [m]: t4 ? u2.b : 0,
        [y]: t4 ? u2.l : 0
      };
      setStyles(n2 || o2, r3);
      setStyles(o2, l3);
      assignDeep(e2, {
        cn: u2,
        un: !t4,
        rt: n2 ? l3 : assignDeep({}, r3, l3)
      });
    }
    return {
      _n: E2
    };
  };
};
var createOverflowUpdateSegment = (t2, s2) => {
  const e2 = getEnvironment();
  const { ht: c2, cn: r2, ot: l2, nt: a2, Kt: u2, gt: _2, yt: d2, Ot: f2, ln: p2 } = t2;
  const { R: v2 } = e2;
  const h2 = d2 && a2;
  const g3 = bind(o, 0);
  const b2 = ["display", "direction", "flexDirection", "writingMode"];
  const w2 = {
    i: equalWH,
    o: {
      w: 0,
      h: 0
    }
  };
  const y2 = {
    i: equalXY,
    o: {}
  };
  const setMeasuringMode = (t3) => {
    f2(K, !h2 && t3);
  };
  const getOverflowAmount = (t3, o2) => {
    const s3 = n.devicePixelRatio % 1 !== 0 ? 1 : 0;
    const e3 = {
      w: g3(t3.w - o2.w),
      h: g3(t3.h - o2.h)
    };
    return {
      w: e3.w > s3 ? e3.w : 0,
      h: e3.h > s3 ? e3.h : 0
    };
  };
  const [m2, S2] = createCache(w2, bind(getFractionalSize, l2));
  const [O2, $2] = createCache(w2, bind(R, l2));
  const [C2, x3] = createCache(w2);
  const [H2] = createCache(y2);
  const [E2, T2] = createCache(w2);
  const [D2] = createCache(y2);
  const [k2] = createCache({
    i: (t3, n2) => equal(t3, n2, b2),
    o: {}
  }, () => hasDimensions(l2) ? getStyles(l2, b2) : {});
  const [V2, L2] = createCache({
    i: (t3, n2) => equalXY(t3.T, n2.T) && equalXY(t3.D, n2.D),
    o: getZeroScrollCoordinates()
  }, () => {
    setMeasuringMode(true);
    const t3 = getElementScroll(_2);
    const n2 = f2(Z, true);
    const o2 = addEventListener(u2, A, (n3) => {
      const o3 = getElementScroll(_2);
      if (n3.isTrusted && o3.x === t3.x && o3.y === t3.y) {
        stopPropagation(n3);
      }
    }, {
      I: true,
      A: true
    });
    scrollElementTo(_2, {
      x: 0,
      y: 0
    });
    n2();
    const s3 = getElementScroll(_2);
    const e3 = R(_2);
    scrollElementTo(_2, {
      x: e3.w,
      y: e3.h
    });
    const c3 = getElementScroll(_2);
    scrollElementTo(_2, {
      x: c3.x - s3.x < 1 && -e3.w,
      y: c3.y - s3.y < 1 && -e3.h
    });
    const r3 = getElementScroll(_2);
    scrollElementTo(_2, t3);
    i(() => o2());
    return {
      T: s3,
      D: r3
    };
  });
  const P3 = getStaticPluginModuleInstance(Tt);
  const createViewportOverflowStyleClassName = (t3, n2) => {
    const o2 = n2 ? Y : W;
    return `${o2}${capitalizeFirstLetter(t3)}`;
  };
  const setViewportOverflowStyle = (t3) => {
    const createAllOverflowStyleClassNames = (t4) => [z, I, A].map((n3) => createViewportOverflowStyleClassName(n3, t4));
    const n2 = createAllOverflowStyleClassNames(true).concat(createAllOverflowStyleClassNames()).join(" ");
    f2(n2);
    f2(keys(t3).map((n3) => createViewportOverflowStyleClassName(t3[n3], n3 === "x")).join(" "), true);
  };
  return ({ It: n2, Gt: o2, an: i2, Tt: a3 }, { _n: u3 }) => {
    const { ft: _3, Ht: d3, Ct: b3, dt: w3, zt: y3 } = o2 || {};
    const z2 = P3 && P3.tt(t2, s2, i2, e2, n2);
    const { it: I2, ut: A2, _t: R2 } = z2 || {};
    const [U2, N2] = getShowNativeOverlaidScrollbars(n2, e2);
    const [B2, j2] = n2("overflow");
    const X2 = overflowIsVisible(B2.x);
    const Y2 = overflowIsVisible(B2.y);
    const W2 = _3 || u3 || d3 || b3 || y3 || N2;
    let J2 = S2(a3);
    let K2 = $2(a3);
    let Q2 = x3(a3);
    let Z2 = T2(a3);
    if (N2 && v2) {
      f2(G, !U2);
    }
    if (W2) {
      if (hasAttrClass(c2, F, q)) {
        setMeasuringMode(true);
      }
      const [t3] = A2 ? A2() : [];
      const [n3] = J2 = m2(a3);
      const [o3] = K2 = O2(a3);
      const s3 = M(l2);
      const e3 = h2 && getWindowSize(p2());
      const r3 = {
        w: g3(o3.w + n3.w),
        h: g3(o3.h + n3.h)
      };
      const i3 = {
        w: g3((e3 ? e3.w : s3.w + g3(s3.w - o3.w)) + n3.w),
        h: g3((e3 ? e3.h : s3.h + g3(s3.h - o3.h)) + n3.h)
      };
      t3 && t3();
      Z2 = E2(i3);
      Q2 = C2(getOverflowAmount(r3, i3), a3);
    }
    const [nt2, ot2] = Z2;
    const [st2, et2] = Q2;
    const [ct2, rt2] = K2;
    const [lt2, it2] = J2;
    const [at2, ut2] = H2({
      x: st2.w > 0,
      y: st2.h > 0
    });
    const _t2 = X2 && Y2 && (at2.x || at2.y) || X2 && at2.x && !at2.y || Y2 && at2.y && !at2.x;
    const dt2 = u3 || b3 || y3 || it2 || rt2 || ot2 || et2 || j2 || N2 || W2;
    const ft2 = createViewportOverflowState(at2, B2);
    const [pt2, vt2] = D2(ft2.G);
    const [, ht2] = k2(a3);
    const gt2 = b3 || w3 || ht2 || ut2 || a3;
    const [bt2, wt2] = gt2 ? V2(a3) : L2();
    if (dt2) {
      vt2 && setViewportOverflowStyle(ft2.G);
      if (R2 && I2) {
        setStyles(l2, R2(ft2, i2, I2(ft2, ct2, lt2)));
      }
    }
    setMeasuringMode(false);
    addRemoveAttrClass(c2, F, q, _t2);
    addRemoveAttrClass(r2, tt, q, _t2);
    assignDeep(s2, {
      G: pt2,
      Vt: {
        x: nt2.w,
        y: nt2.h
      },
      Rt: {
        x: st2.w,
        y: st2.h
      },
      en: at2,
      Pt: sanitizeScrollCoordinates(bt2, st2)
    });
    return {
      nn: vt2,
      Zt: ot2,
      tn: et2,
      sn: wt2 || et2,
      dn: gt2
    };
  };
};
var createStructureSetup = (t2) => {
  const [n2, o2, s2] = createStructureSetupElements(t2);
  const e2 = {
    cn: {
      t: 0,
      r: 0,
      b: 0,
      l: 0
    },
    un: false,
    rt: {
      [O]: 0,
      [$]: 0,
      [S]: 0,
      [b]: 0,
      [w]: 0,
      [m]: 0,
      [y]: 0
    },
    Vt: {
      x: 0,
      y: 0
    },
    Rt: {
      x: 0,
      y: 0
    },
    G: {
      x: I,
      y: I
    },
    en: {
      x: false,
      y: false
    },
    Pt: getZeroScrollCoordinates()
  };
  const { vt: c2, gt: r2, nt: l2 } = n2;
  const { R: i2, M: a2 } = getEnvironment();
  const u2 = !i2 && (a2.x || a2.y);
  const _2 = [createTrinsicUpdateSegment(n2), createPaddingUpdateSegment(n2, e2), createOverflowUpdateSegment(n2, e2)];
  return [o2, (t3) => {
    const n3 = {};
    const o3 = u2;
    const s3 = o3 && getElementScroll(r2);
    each(_2, (o4) => {
      assignDeep(n3, o4(t3, n3) || {});
    });
    scrollElementTo(r2, s3);
    !l2 && scrollElementTo(c2, 0);
    return n3;
  }, e2, n2, s2];
};
var createSetups = (t2, n2, o2, s2, e2) => {
  const c2 = createOptionCheck(n2, {});
  const [r2, l2, i2, a2, u2] = createStructureSetup(t2);
  const [_2, d2, f2] = createObserversSetup(a2, i2, c2, (t3) => {
    update({}, t3);
  });
  const [p2, v2, , h2] = createScrollbarsSetup(t2, n2, f2, i2, a2, e2);
  const updateHintsAreTruthy = (t3) => keys(t3).some((n3) => !!t3[n3]);
  const update = (t3, e3) => {
    if (o2()) {
      return false;
    }
    const { fn: c3, Tt: r3, At: i3, pn: a3 } = t3;
    const u3 = c3 || {};
    const _3 = !!r3;
    const p3 = {
      It: createOptionCheck(n2, u3, _3),
      fn: u3,
      Tt: _3
    };
    if (a3) {
      v2(p3);
      return false;
    }
    const h3 = e3 || d2(assignDeep({}, p3, {
      At: i3
    }));
    const g3 = l2(assignDeep({}, p3, {
      an: f2,
      Gt: h3
    }));
    v2(assignDeep({}, p3, {
      Gt: h3,
      Qt: g3
    }));
    const b2 = updateHintsAreTruthy(h3);
    const w2 = updateHintsAreTruthy(g3);
    const y2 = b2 || w2 || !isEmptyObject(u3) || _3;
    y2 && s2(t3, {
      Gt: h3,
      Qt: g3
    });
    return y2;
  };
  return [() => {
    const { rn: t3, gt: n3 } = a2;
    const o3 = getElementScroll(t3);
    const s3 = [_2(), r2(), p2()];
    scrollElementTo(n3, o3);
    return bind(runEachAndClear, s3);
  }, update, () => ({
    vn: f2,
    hn: i2
  }), {
    gn: a2,
    bn: h2
  }, u2];
};
var OverlayScrollbars = (t2, n2, o2) => {
  const { N: s2 } = getEnvironment();
  const e2 = isHTMLElement(t2);
  const c2 = e2 ? t2 : t2.target;
  const r2 = getInstance(c2);
  if (n2 && !r2) {
    let r3 = false;
    const l2 = [];
    const i2 = {};
    const validateOptions = (t3) => {
      const n3 = removeUndefinedProperties(t3, true);
      const o3 = getStaticPluginModuleInstance(zt);
      return o3 ? o3(n3, true) : n3;
    };
    const a2 = assignDeep({}, s2(), validateOptions(n2));
    const [u2, _2, d2] = createEventListenerHub();
    const [f2, p2, v2] = createEventListenerHub(o2);
    const triggerEvent = (t3, n3) => {
      v2(t3, n3);
      d2(t3, n3);
    };
    const [h2, g3, b2, w2, y2] = createSetups(t2, a2, () => r3, ({ fn: t3, Tt: n3 }, { Gt: o3, Qt: s3 }) => {
      const { ft: e3, Ct: c3, xt: r4, Ht: l3, Et: i3, dt: a3 } = o3;
      const { Zt: u3, tn: _3, nn: d3, sn: f3 } = s3;
      triggerEvent("updated", [m2, {
        updateHints: {
          sizeChanged: !!e3,
          directionChanged: !!c3,
          heightIntrinsicChanged: !!r4,
          overflowEdgeChanged: !!u3,
          overflowAmountChanged: !!_3,
          overflowStyleChanged: !!d3,
          scrollCoordinatesChanged: !!f3,
          contentMutation: !!l3,
          hostMutation: !!i3,
          appear: !!a3
        },
        changedOptions: t3 || {},
        force: !!n3
      }]);
    }, (t3) => triggerEvent("scroll", [m2, t3]));
    const destroy = (t3) => {
      removeInstance(c2);
      runEachAndClear(l2);
      r3 = true;
      triggerEvent("destroyed", [m2, t3]);
      _2();
      p2();
    };
    const m2 = {
      options(t3, n3) {
        if (t3) {
          const o3 = n3 ? s2() : {};
          const e3 = getOptionsDiff(a2, assignDeep(o3, validateOptions(t3)));
          if (!isEmptyObject(e3)) {
            assignDeep(a2, e3);
            g3({
              fn: e3
            });
          }
        }
        return assignDeep({}, a2);
      },
      on: f2,
      off: (t3, n3) => {
        t3 && n3 && p2(t3, n3);
      },
      state() {
        const { vn: t3, hn: n3 } = b2();
        const { ct: o3 } = t3;
        const { Vt: s3, Rt: e3, G: c3, en: l3, cn: i3, un: a3, Pt: u3 } = n3;
        return assignDeep({}, {
          overflowEdge: s3,
          overflowAmount: e3,
          overflowStyle: c3,
          hasOverflow: l3,
          scrollCoordinates: {
            start: u3.T,
            end: u3.D
          },
          padding: i3,
          paddingAbsolute: a3,
          directionRTL: o3,
          destroyed: r3
        });
      },
      elements() {
        const { vt: t3, ht: n3, cn: o3, ot: s3, bt: e3, gt: c3, Kt: r4 } = w2.gn;
        const { Ft: l3, Wt: i3 } = w2.bn;
        const translateScrollbarStructure = (t4) => {
          const { Mt: n4, kt: o4, Lt: s4 } = t4;
          return {
            scrollbar: s4,
            track: o4,
            handle: n4
          };
        };
        const translateScrollbarsSetupElement = (t4) => {
          const { jt: n4, Xt: o4 } = t4;
          const s4 = translateScrollbarStructure(n4[0]);
          return assignDeep({}, s4, {
            clone: () => {
              const t5 = translateScrollbarStructure(o4());
              g3({
                pn: true
              });
              return t5;
            }
          });
        };
        return assignDeep({}, {
          target: t3,
          host: n3,
          padding: o3 || s3,
          viewport: s3,
          content: e3 || s3,
          scrollOffsetElement: c3,
          scrollEventElement: r4,
          scrollbarHorizontal: translateScrollbarsSetupElement(l3),
          scrollbarVertical: translateScrollbarsSetupElement(i3)
        });
      },
      update: (t3) => g3({
        Tt: t3,
        At: true
      }),
      destroy: bind(destroy, false),
      plugin: (t3) => i2[keys(t3)[0]]
    };
    push(l2, [y2]);
    addInstance(c2, m2);
    registerPluginModuleInstances(Ht, OverlayScrollbars, [m2, u2, i2]);
    if (cancelInitialization(w2.gn.yt, !e2 && t2.cancel)) {
      destroy(true);
      return m2;
    }
    push(l2, h2());
    triggerEvent("initialized", [m2]);
    m2.update(true);
    return m2;
  }
  return r2;
};
OverlayScrollbars.plugin = (t2) => {
  const n2 = isArray(t2);
  const o2 = n2 ? t2 : [t2];
  const s2 = o2.map((t3) => registerPluginModuleInstances(t3, OverlayScrollbars)[0]);
  addPlugins(o2);
  return n2 ? s2 : s2[0];
};
OverlayScrollbars.valid = (t2) => {
  const n2 = t2 && t2.elements;
  const o2 = isFunction(n2) && n2();
  return isPlainObject(o2) && !!getInstance(o2.target);
};
OverlayScrollbars.env = () => {
  const { k: t2, M: n2, R: o2, V: s2, B: e2, F: c2, P: r2, U: l2, N: i2, q: a2 } = getEnvironment();
  return assignDeep({}, {
    scrollbarsSize: t2,
    scrollbarsOverlaid: n2,
    scrollbarsHiding: o2,
    scrollTimeline: s2,
    staticDefaultInitialization: e2,
    staticDefaultOptions: c2,
    getDefaultInitialization: r2,
    setDefaultInitialization: l2,
    getDefaultOptions: i2,
    setDefaultOptions: a2
  });
};

// node_modules/overlayscrollbars-vue/overlayscrollbars-vue.mjs
var g2 = () => {
  if (typeof window > "u") {
    const o2 = () => {
    };
    return [o2, o2];
  }
  let a2, t2;
  const n2 = window, l2 = typeof n2.requestIdleCallback == "function", s2 = n2.requestAnimationFrame, r2 = n2.cancelAnimationFrame, f2 = l2 ? n2.requestIdleCallback : s2, p2 = l2 ? n2.cancelIdleCallback : r2, e2 = () => {
    p2(a2), r2(t2);
  };
  return [
    (o2, m2) => {
      e2(), a2 = f2(
        l2 ? () => {
          e2(), t2 = s2(o2);
        } : o2,
        typeof m2 == "object" ? m2 : { timeout: 2233 }
      );
    },
    e2
  ];
};
var x2 = (a2) => {
  let t2 = null, n2, l2, s2;
  const r2 = shallowRef(a2 || {}), [f2, p2] = g2();
  return watch(
    () => {
      var e2;
      return unref((e2 = r2.value) == null ? void 0 : e2.defer);
    },
    (e2) => {
      s2 = e2;
    },
    { deep: true, immediate: true }
  ), watch(
    () => {
      var e2;
      return unref((e2 = r2.value) == null ? void 0 : e2.options);
    },
    (e2) => {
      n2 = e2, OverlayScrollbars.valid(t2) && t2.options(n2 || {}, true);
    },
    { deep: true, immediate: true }
  ), watch(
    () => {
      var e2;
      return unref((e2 = r2.value) == null ? void 0 : e2.events);
    },
    (e2) => {
      l2 = e2, OverlayScrollbars.valid(t2) && t2.on(
        /* c8 ignore next */
        l2 || {},
        true
      );
    },
    { deep: true, immediate: true }
  ), onUnmounted(() => {
    p2(), t2 == null || t2.destroy();
  }), [
    (e2) => {
      if (OverlayScrollbars.valid(t2))
        return t2;
      const o2 = () => t2 = OverlayScrollbars(e2, n2 || {}, l2 || {});
      s2 ? f2(o2, s2) : o2();
    },
    () => t2
  ];
};
var P2 = defineComponent({
  __name: "OverlayScrollbarsComponent",
  props: {
    element: {
      type: [String, Object],
      default: "div"
    },
    options: { type: Object },
    events: { type: Object },
    defer: { type: [Boolean, Object] }
  },
  emits: ["osInitialized", "osUpdated", "osDestroyed", "osScroll"],
  setup(a2, { expose: t2, emit: n2 }) {
    const l2 = a2, s2 = {
      initialized: "osInitialized",
      updated: "osUpdated",
      destroyed: "osDestroyed",
      scroll: "osScroll"
    }, { element: r2, options: f2, events: p2, defer: e2 } = toRefs(l2), o2 = shallowRef(null), m2 = shallowRef(null), I2 = ref(), [E2, O2] = x2({ options: f2, events: I2, defer: e2 });
    return t2({
      osInstance: O2,
      getElement: () => o2.value
    }), watchPostEffect((c2) => {
      const { value: i2 } = o2, { value: v2 } = m2;
      i2 && (E2(
        r2.value === "body" ? {
          target: i2,
          cancel: {
            body: null
          }
        } : {
          target: i2,
          elements: {
            viewport: v2,
            content: v2
          }
        }
      ), c2(() => {
        var d2;
        return (d2 = O2()) == null ? void 0 : d2.destroy();
      }));
    }), watch(
      () => unref(p2),
      (c2) => {
        const i2 = c2 || {};
        I2.value = Object.keys(s2).reduce((v2, d2) => {
          const k2 = i2[d2];
          return v2[d2] = [
            (...R2) => n2(
              s2[d2],
              ...R2
            ),
            ...(Array.isArray(k2) ? k2 : [k2]).filter(Boolean)
          ], v2;
        }, {});
      },
      { deep: true, immediate: true }
    ), (c2, i2) => (openBlock(), createBlock(resolveDynamicComponent(unref(r2)), {
      "data-overlayscrollbars-initialize": "",
      ref_key: "elementRef",
      ref: o2
    }, {
      default: withCtx(() => [
        unref(r2) === "body" ? renderSlot(c2.$slots, "default", { key: 0 }) : (openBlock(), createElementBlock("div", {
          key: 1,
          "data-overlayscrollbars-contents": "",
          ref_key: "slotRef",
          ref: m2
        }, [
          renderSlot(c2.$slots, "default")
        ], 512))
      ]),
      _: 3
    }, 512));
  }
});
export {
  P2 as OverlayScrollbarsComponent,
  x2 as useOverlayScrollbars
};
/*! Bundled license information:

overlayscrollbars/overlayscrollbars.mjs:
  (*!
   * OverlayScrollbars
   * Version: 2.8.3
   *
   * Copyright (c) Rene Haas | KingSora.
   * https://github.com/KingSora
   *
   * Released under the MIT license.
   *)
*/
//# sourceMappingURL=overlayscrollbars-vue.js.map
