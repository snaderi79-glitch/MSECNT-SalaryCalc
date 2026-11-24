"use strict";
(() => {
  // src/data.ts
  var CON = [[48554010, "شرکت فولاد مبارکه", "ارائه خدمات نظارتي مورد نياز واحد خريد مواد اوليه و امور معادن (واحد اکتشاف)", 0], [48550820, "شرکت فولاد مبارکه", "خدمات مشاوره (شامل نظارت عالیه، نظارت کارگاهی، بازرسی و مهندسی) پروژه نورد گرم 2", 6.9], [48574350, "شرکت فولاد مبارکه", "ارائه خدمات مشاور، تجزیه و تحلیل داده و گزارشات تخصصی در حوزه مهندسی صنایع در شرکت فولاد مبارکه", 0], [48557764, "شرکت فولاد مبارکه", "نظارت کارگاهی و عالیه پروژه‌های شرکت فولاد مبارکه", 6.9], [48563889, "شرکت فولاد مبارکه", "قرارداد مدیریت برنامه ریزی جامع و سرمایه گذاری", 5], [48566753, "شرکت فولاد مبارکه", "استفاده از خدمات مشاور جهت تهیه نقشه های ASBUILT", 6.9], [48573499, "شرکت فولاد مبارکه", "استفاده از خدمات مشاور جهت ارائه خدمات طراحی و مهندسی در ارتباط با پروژه های خارج از فنس فولاد مبارکه", 5], [48601872, "شرکت فولاد مبارکه", "ارائه خدمات مشاوره در ارتباط با طراحی و مهندسی پروژه های فولاد مبارکه (مشاور مادر)", 6.9], [48619612, "شرکت فولاد مبارکه", "استفاده از خدمات انتقال دانش فنی و مشاوره‌ای تکنیکال اسیستنس در شرکت فولاد مبارکه", 6.9], [48615337, "شرکت فولاد مبارکه", "استفاده از خدمات مشاوره جهت بررسی و تعیین تکلیف قطعات یدکی فاقد گردش شرکت فولاد مبارکه", 0], [139732, "شرکت فولاد هرمزگان", "ارائه خدمات پیمانکاری در زمینه اداری و پشتیبانی", 0], [151988, "شرکت فولاد هرمزگان", "ارائه مشاوره جامع شامل خدمات طراحي و مهندسي، نظارت كارگاهي و نظارت عاليه، كنترل پروژه، مركز اسناد، نقشه‌برداري صنعتي و عمومي، بازرسي داخل كشور، مهندسي معكوس، انتقال دانش و مطالعه و تدوين استراتژي", 11.935], [106518, "شرکت فولاد سفیددشت چهارمحال و بختیاری", "استفاده از خدمات مهندس مشاور جهت انتقال دانش و تجربیات فنی و مدیریتی به شرکت فولاد سفید دشت", 0], [111709, "شرکت فولاد سفیددشت چهارمحال و بختیاری", "استفاده از خدمات مهندس مشاور جهت ارائه خدمات مهندسی (نیازسنجی، امکان سنجی، مهندسی پایه و تفضیلی)، تهیه اسناد پیمان، نظارت کارگاهی و نظارت عالیه بر عملیات اجرای", 0], [114395, "شرکت فولاد سفیددشت چهارمحال و بختیاری", "ارائه خدمات مشاوره فنی، نظارت بر راهبری، اپراتوری و تعمیرات نواحی شرکت فولاد سفید دشت", 0], [109259, "شرکت صنایع معدنی فولاد سنگان خراسان", "ارائه خدمات مطالعات اولیه، طراحی و مهندسی، خدمات مشاوره، نظارت عالیه و کارگاهی، کنترل پروژه و بازرسی فنی در کلیه مراحل، تهیه و تکمیل مدارک طرح های توسعه و انجام خدمات مشاوره افزایش ظرفیت تولید از 5 به حداقل 7/5 میلیون تن گندله", 0], [114700, "شرکت صنایع معدنی فولاد سنگان خراسان", "استفاده از خدمات مهندسی مشاور جهت انتقال دانش و تجربیات فنی و مدیریتی", 0], ["2285/ ق/ 25/ 1402", "شرکت ورق خودرو چهارمحال و بختیاری", "ارائه خدمات مديريت پروژه شامل طراحي و مهندسي، برنامه ريزي و كنترل پروژه، خدمات مهندسي خريد، بازرسي فني و نظارت عاليه و كارگاهي در شركت ورق خودرو چهارمحال بختياري (مشاور مادر)", 0], ["1914/ ق/ 25/ 1404", "شرکت ورق خودرو چهارمحال و بختیاری", "استفاده از خدمات مشاور جهت انتقال دانش، تجربيات فني و مديريتي به شركت ورق خودرو چهارمحال و بختياري", 0], [98.3515, "شرکت معدنی و صنعتی گل گهر", "ارائه خدمات مدیریت طرح، خدمات مشاوره، طراحی، نظارت عالیه و کارگاهی، مرور مهندسی،کنترل پروژه و بازرسی طرح توسعه گندله سازی های شماره 1 و 2 گلگهر مطابق طرح پیشنهادی شرکت نیوفر", 0], ["05/1109ق", "شرکت توسعه آهن و فولاد گل گهر", "استفاده از خدمات مشاور جهت انتقال دانش بهره برداری، استقرار سیستم‌های عملیاتی، آموزش کارکنان و ارائه کمک‌های فنی (Technical Assistance) در واحدهای فولادسازی، ریخته گری و نورد گرم شرکت توسعه آهن و فولاد گل‌گهر", 0], ["13760-99/14", "شرکت فولاد سنگ اصفهان", "استفاده از خدمات مهندس مشاور جهت نظارت عالیه، کارگاهی، خدمات کنترل پروژه و بازنگری نقشه ها و مدارک مهندسی پروزه های شرکت معدنی و صنعتی فولاد سنگ", 7.6], [122582, "شرکت فولاد تاراز چهارمحال", "استفاده از خدمات مهندس مشاور جهت انتقال دانش و تجربیات فنی و مدیریتی", 0], [1401.146, "شرکت فولاد کاوان حامی ایرانیان", "ارائه خدمات مهندسي، برنامه ريزي و كنترل پروژه، مهندسي تداركات (تسريع و پيگيري ساخت و حمل)، نظارت و بازرسي فني ساخت تجهيزات داخل و خارج از كشور پروژه احداث كارخانه گندله سازي با ظرفيت 800 هزار تن در سال شركت فولاد كاوان حامي ايرانيان به صورت مديريت طرح در محل شهرستان بيجار، بخش ياسوكند، شهرك صنعتي ياسوكند", 0], [310049, "شرکت صنایع فولاد توان آور آسیا", "استفاده از خدمات مهندس مشاور جهت انتقال دانش، تجربیات فنی و مدیریتی به شرکت صنایع فولاد توان آور آسیا", 0], ["512/8/ب/1402", "شرکت امین طب سپانو", "مدیریت طرح و نظارت مستمر در مراحل ساخت، تکمیل، پیش راه اندازی و راه اندازی پروژه عملیات تکمیلی بیمارستان 250 تخته خوابی اسپادانا", 0], ["14012691624/ق/1402/001", "شرکت ورق‌های آلیاژی", "استفاده از خدمات مشاور جهت مطالعات نيازسنجي، امكان سنجي، مطالعات بازار، مطالعات فني و اقتصادي، مشاوره و اخذ مجوزات لازم نظير محيط زيست، منابع طبيعي، موافقت اصولي و..، مشاوره تكنولوژيك، مشاوره فني و قراردادي، تهيه اسناد مناقصه و طراحي و خدمات مهندسي و ساير خدمات مورد نياز كارفرما مرتبط با موضوع قرارداد", 0], [302118, "شرکت تامین و تولید مواد معدنی مهام پارسیان (تامکو)", "ارائه خدمات مشاوره، طراحی و مهندسی و نظارت عالیه و کارگاهی بر احداث کارخانه کنسانتره 2/5 میلیون تنی و نظارت بر اکتشاف و بهره برداری معادن کارفرما در استان یزد", 0], ["S03-07", "شرکت صنعتی و معدنی سرب و روی ساری گل", "استفاده از خدمات مهندس مشاور جهت انتقال دانش، تجربیات فنی و مدیریتی به شرکت صنعتی و معدنی سرب و روی ساری گل", 0], [4040631, "شركت بين المللي مهندسي سيستم‌ها و اتوماسيون", "استفاده از خدمات مهندس مشاور جهت انتقال دانش، تجربيات فني و مديريتي به شركت بين المللي مهندسي سيستم‌ها و اتوماسيون", 0], [69104679, "شرکت فولاد و نورد گرم سبا اصفهان", "انجام خدمات مشاوره، نظارت کارگاهی و عالیه پروژه های مجتمع فولاد و نورد سبا", 5.6], [69102823, "شرکت فولاد و نورد گرم سبا اصفهان", "استفاده از خدمات مشاور جهت انتقال دانش و تجربيات فني و مديريتي به شركت فولاد و نورد سبا", 4.5], [69104678, "شرکت فولاد و نورد گرم سبا اصفهان", "انجام خدمات مشاوره جهت طراحي و مهندسي پروژه‌هاي شركت فولاد و نورد سبا", 5], ["SI04105-00", "شرکت فولاد سيرجان ايرانيان", "خدمات مهندسي، پژوهشي و تحقيق و توسعه شركت فولاد سيرجان ايرانيان", 0], ["C405014", "شرکت فولاد جهان آرا اروند", "انجام خدمات مهندسي، نظارت عاليه و كارگاهي، آموزش و مشاوره در حوزه طراحي، توسعه و بهينه سازي توليد، زيرساخت هاي فني و عملياتي، انتقال دانش فني و مديريتي به شركت فولاد جهان آرا اروند", 0]];
  var FEE = { "سرناظر": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 265402, 267718, 269894, 271976, 274425, 277377, 280465, 283674, 287042, 290267, 295157, 300549, 305591, 311116, 316785, 322462], "مهندس ناظر": [0, 0, 0, 228833, 230252, 231928, 233465, 235387, 237052, 239001, 241181, 243493, 245950, 248398, 250851, 253935, 257156, 260380, 263862, 267212, 271715, 276109, 280597, 285370, 290134, 295157], "کمک ناظر": [212601, 213376, 214511, 215424, 216328, 217743, 218913, 220453, 221732, 223038, 225214, 227402, 229211, 231390, 233465, 235785, 237968, 240280, 242363, 244675, 246983, 249568, 251884, 254465, 257027, 259600], "کاردان فنی": [201334, 202330, 203340, 204350, 205255, 206163, 207575, 208752, 210031, 211060, 212971, 214928, 216589, 218516, 220586, 222641, 224438, 226384, 228439, 230747, 232825, 235009, 237052, 239271, 241587, 243778] };
  var DEF = { "method": "بر اساس قرارداد", "manual": 11e7, "contract": 151988, "role": "سرناظر", "exp": 25, "netexp": 78083816, "ins": 1, "days": 31, "married": 0, "kids": 0, "supp": 315e4, "bonus": 22e5, "cloth": 833e3, "food": 55e4, "lodge": 3e5, "transp": 1e7, "over": 10, "target": 4.8, "risk": 0, "delay": 1 };
  var ADMIN_HASH = "c7ef098fd9e2ff3c3cb036863f30b63f1857a0df9b54d8ad182c8eae606abb65";

  // src/main.ts
  var CON2 = CON;
  try {
    const o = JSON.parse(localStorage.getItem("msecnt_con") || "null");
    if (Array.isArray(o) && o.length) CON2 = o;
  } catch (e) {
  }
  var TAX = [[4e7, 0.1], [8e7, 0.05], [1e8, 0.05], [12e7, 0.05], [14e7, 0.05]];
  var $ = (i) => document.getElementById(i);
  var qa = (q) => Array.from(document.querySelectorAll(q));
  var nf = (v) => isFinite(v) ? Math.round(v).toLocaleString("en-US") : String(v);
  var pf = (v) => (v * 100).toFixed(2) + "%";
  var num = (i) => {
    const s = String($(i).value).replace(/[,٬\s]/g, "").replace(/[۰-۹]/g, (c) => String("۰۱۲۳۴۵۶۷۸۹".indexOf(c))).replace(/[٠-٩]/g, (c) => String("٠١٢٣٤٥٦٧٨٩".indexOf(c)));
    const v = parseFloat(s);
    return isNaN(v) ? 0 : v;
  };
  var tax = (a) => TAX.reduce((s, [f, g]) => s + (a > f ? (a - f) * g : 0), 0);
  function fillStatic() {
    $("contract").innerHTML = CON2.map((c) => `<option>${c[0]}</option>`).join("");
    $("role").innerHTML = Object.keys(FEE).map((k) => `<option>${k}</option>`).join("");
  }
  function setDefaults() {
    const d = DEF;
    $("method").value = d.method;
    $("manual").value = d.manual;
    $("mmode").value = "ماهانه";
    $("hrate").value = "";
    $("hours").value = "176";
    $("contract").value = d.contract;
    $("role").value = d.role;
    $("exp").value = d.exp;
    for (const k of ["ename", "eid", "site"]) $(k).value = d.blank || "";
    for (const k of ["netexp", "ins", "days", "married", "kids", "supp", "bonus", "cloth", "food", "lodge", "transp", "over", "target", "risk", "delay"]) $(k).value = d[k];
  }
  function params() {
    const c = CON2.find((c2) => String(c2[0]) === String($("contract").value)) || ["", "-", "-", 0];
    const exp = num("exp"), idx = Math.min(Math.floor(exp), 25);
    const feeK = (FEE[$("role").value] || [])[idx] || 0;
    const method = $("method").value;
    const B = method === "دستی" ? $("mmode").value === "ساعتی" ? num("hrate") * num("hours") : num("manual") : c[3] * feeK * 100;
    let st = method === "دستی" ? "حالت دستی فعال است" : feeK === 0 ? "برای این رده و سابقه نرخی تعریف نشده است" : c[3] === 0 ? "ضریب این قرارداد هنوز وارد نشده" : "محاسبه بر اساس قرارداد";
    return {
      c,
      feeK,
      B,
      st,
      ins: +$("ins").value,
      days: +$("days").value,
      mar: +$("married").value,
      kids: num("kids"),
      supp: num("supp"),
      bonus: num("bonus"),
      cloth: num("cloth"),
      food: num("food"),
      lodge: num("lodge"),
      transp: num("transp"),
      over: num("over") / 100,
      target: num("target") / 100,
      risk: num("risk") / 100,
      delay: num("delay"),
      netexp: num("netexp"),
      base: 0
    };
  }
  function consts(p) {
    const f = p.ins;
    const wel = 3e6 * f + 22e5 * f + 1662554 * f * p.kids * f + 5e5 * p.mar * f;
    const kidsPay = 1662554 * f * p.kids * f;
    const B26 = 16625550 * p.days / 30 * f;
    const hh = (1 + p.kids + p.mar) * f;
    const other = p.food * p.days + p.lodge * p.days + p.transp + hh * p.supp + p.bonus + p.cloth;
    return { f, wel, kidsPay, cap: B26 * p.days / 30 * 7, B26, other, eid: 3 * B26 / 12 * f, emp: 0.23 * f, wk: 0.07 * f, riskT: p.risk * p.delay };
  }
  function model(p, k, base) {
    const hk = base + k.wel, raw = hk - k.kidsPay, ib = Math.min(raw, k.cap), w = k.wk * ib, t = tax(hk - w);
    const ins = k.emp * ib + w;
    const C = ins + k.eid + base / 12 * k.f + hk / 12 * k.f + k.other + hk;
    const over = p.over * p.B, risk = k.riskT * p.B, ceil = 0.1667 * p.B;
    const short = Math.max(0, ceil - 0.3 * ib), pre = p.B - C - over - short - risk, taxc = Math.max(0, 0.25 * pre);
    return { hk, ib, w, t, ins, C, over, risk, short, pre, taxc, net: pre - taxc, empNet: hk - w - t, ceil };
  }
  function baseFromNet(p, k, net) {
    let lo = 0, hi = 1e11;
    for (let i = 0; i < 100; i++) {
      const b = (lo + hi) / 2, m = model(p, k, b);
      if (m.empNet < net) lo = b;
      else hi = b;
    }
    return (lo + hi) / 2;
  }
  function solveX(p, k, tg) {
    let lo = 0, hi = p.B, D, M;
    for (let i = 0; i < 50; i++) {
      D = (lo + hi) / 2;
      M = model(p, k, D).net - tg;
      if (i < 49) {
        if (M >= 0) lo = D;
        else hi = D;
      }
    }
    const ans = M >= 0 ? D : lo;
    const ctl = model(p, k, 0).net - tg;
    return { base: ans, m: model(p, k, ans), ok: ctl >= 0 };
  }
  function row(a, b, cls) {
    return `<tr><td>${a}</td><td class="n ${cls || ""}">${b}</td></tr>`;
  }
  var COL = ["#0b5ed7", "#f08c00", "#e03131", "#9c36b5", "#868e96", "#12a150"];
  function pie(p, m) {
    const it = [["هزینه مستقیم (C)", m.C], ["سربار", m.over], ["ریسک تأخیر", m.risk], ["کسری ماده ۳۸", m.short], ["مالیات عملکرد", m.taxc], ["سود خالص", Math.max(0, m.net)]].map((x) => [x[0], Math.max(0, x[1])]);
    const tot = it.reduce((s, x) => s + x[1], 0) || 1;
    let h = "";
    const ring = (cy, col, d, off2) => `<circle cx="21" cy="${cy}" r="15.9" fill="none" stroke="${col}" stroke-width="6" stroke-dasharray="${d} ${100 - d}" stroke-dashoffset="${off2}"/>`;
    for (let L = 4; L >= 1; L--) {
      let off2 = 25;
      it.forEach((x, i) => {
        const d = x[1] / tot * 100;
        if (d > 0) {
          h += ring(21 + L * 0.5, "#000", d, off2).replace('stroke="#000"', 'stroke="' + COL[i] + '" style="filter:brightness(.6)"');
          off2 -= d;
        }
      });
    }
    let off = 25;
    it.forEach((x, i) => {
      const d = x[1] / tot * 100;
      if (d > 0) {
        h += ring(21, COL[i], d, off);
        off -= d;
      }
    });
    $("svg").innerHTML = h;
    $("lg").innerHTML = it.map((x, i) => `<div><i style="background:${COL[i]}"></i>${x[0]}: <b>${(x[1] / tot * 100).toFixed(1)}٪</b></div>`).join("");
  }
  function calc() {
    const p = params(), k = consts(p);
    p.base = baseFromNet(p, k, p.netexp);
    $("site").value = p.c[1];
    $("employer").value = p.c[1];
    $("ph").innerHTML = `<b>محاسبه حقوق حکمی (ناخالص) بر اساس قرارداد کارفرما</b><br>نام و نام خانوادگی: <b>${$("ename").value || "-"}</b> &nbsp; شماره پرسنلی: <b>${$("eid").value || "-"}</b> &nbsp; محل خدمت: <b>${$("site").value || "-"}</b><br>شماره قرارداد: <b>${$("contract").value}</b> &nbsp; کارفرما: <b>${p.c[1]}</b> &nbsp; رده: <b>${$("role").value}</b>`;
    $("subject").value = p.c[2];
    $("coef").value = p.c[3];
    $("feebase").value = nf(p.feeK * 100);
    $("B").value = nf(p.B);
    $("status").value = p.st;
    {
      const dm = $("method").value === "دستی", hr = $("mmode").value === "ساعتی";
      $("mmode").closest("div").style.opacity = dm ? 1 : 0.5;
      for (const i of ["manual", "hrate", "hours"]) $(i).closest("div").style.opacity = dm ? 1 : 0.5;
      $("manual").closest("div").style.display = hr ? "none" : "";
      $("hrate").closest("div").style.display = hr ? "" : "none";
      $("hours").closest("div").style.display = hr ? "" : "none";
      $("mmode").closest("div").style.display = dm ? "" : "none";
    }
    const m = model(p, k, p.base);
    p.target = p.B > 0 ? m.net / p.B : 0;
    $("target").value = (p.target * 100).toFixed(2);
    $("hkro").value = nf(m.hk);
    $("basero").value = nf(p.base);
    const tg = p.target * p.B;
    $("kpis").innerHTML = `<div class="kpi k1"><span>دریافتی ماهانه (B)</span><b>${nf(p.B)}</b></div><div class="kpi k2"><span>هزینه کل شرکت (C)</span><b>${nf(m.C)}</b></div><div class="kpi k3 ${m.net > 0 ? "" : "neg"}"><span>سود خالص</span><b>${nf(m.net)}</b></div><div class="kpi k4"><span>حاشیه سود / نسبت B÷C</span><b>${pf(p.B ? m.net / p.B : 0)} · ${(p.B / m.C).toFixed(2)}</b></div>`;
    pie(p, m);
    window._sum = [["دریافتی از کارفرما (B)", nf(p.B)], ["حقوق پایه", nf(p.base)], ["حقوق حکمی (ناخالص)", nf(m.hk)], ["حقوق خالص کارمند (A)", nf(m.empNet)]];
    const hmanual = $("method").value === "دستی" && $("mmode").value === "ساعتی";
    window._hr = hmanual ? { rate: num("hrate"), hours: num("hours"), src: "ورودی کاربر" } : { rate: m.hk / 176, hours: 176, src: "حقوق حکمی ÷ ۱۷۶" };
    const H = (t) => `<tr class="sh"><td colspan="2">${t}</td></tr>`, R = (a, b, c) => `<tr class="${c || ""}"><td>${a}</td><td class="n">${b}</td></tr>`;
    const food = p.food * p.days, lodge = p.lodge * p.days, hh = (1 + p.kids + p.mar) * k.f, supp = hh * p.supp;
    const st = m.net > 0 ? "سودده ✔" : m.net === 0 ? "سر به سر" : "زیان‌ده ✘";
    $("res").innerHTML = H("خلاصه نتایج") + R("دریافتی از کارفرما (B)", nf(p.B), "b") + R("حقوق پایه", nf(p.base), "b") + R("حقوق حکمی (ناخالص)", nf(m.hk), "b") + R("حقوق خالص کارمند (A)", nf(m.empNet), "b") + H("ورودی‌ها") + R("دریافتی ماهانه از کارفرما (B)", nf(p.B), "b") + R("حقوق پایه (مبنا، ناخالص)", nf(p.base), "b") + R("وضعیت بیمه‌پذیری", k.f ? "بیمه‌پذیر" : "بازنشسته") + R("تعداد روزهای ماه", p.days) + R("متاهل", p.mar ? "بله" : "خیر") + R("تعداد فرزندان", p.kids) + R("بیمه تکمیلی هر نفر", nf(p.supp)) + R("پاداش مناسبتی (ماهانه)", nf(p.bonus)) + R("لباس و تجهیزات ایمنی", nf(p.cloth)) + R("غذای روزانه", nf(p.food)) + R("اسکان روزانه", nf(p.lodge)) + R("ایاب و ذهاب ماهانه", nf(p.transp)) + R("نرخ سربار (از B)", pf(p.over)) + R("نرخ سود هدف", pf(p.target)) + R("نرخ مالیات عملکرد شرکت", "25%") + R("نرخ بیمه قرارداد (ماده ۳۸)", "16.67%") + H("ب) نحوه محاسبه حقوق و دستمزد") + R("مجموع حق اولاد", nf(k.kidsPay)) + R("مجموع رفاهیات (مسکن+بن+تاهل+حق اولاد)", nf(k.wel)) + R("حقوق حکمی (ناخالص)", nf(m.hk), "b") + R("مبنای بیمه خام", nf(m.hk - k.kidsPay)) + R("سقف بیمه تعدیل‌شده ماه", nf(k.cap)) + R("مبنای بیمه سقف‌خورده", nf(m.ib)) + R("بیمه سهم کارگر (۷٪)", nf(m.w)) + R("بیمه سهم کارفرما (۲۳٪)", nf(k.emp * m.ib)) + R("مجموع بیمه ماهانه (۳۰٪)", nf(m.ins)) + R("مالیات ماهانه پلکانی ۱۴۰۵", nf(m.t)) + R("خالص پرداختی کارمند (A)", nf(m.empNet), "b g") + H("ج) هزینه کل شرکت برای کارمند (C)") + R("مجموع بیمه‌های ماهانه (کارگر+کارفرما)", nf(m.ins)) + R("عیدی ماهانه (۳×سقف بیمه ÷ ۱۲)", nf(k.eid)) + R("سنوات ماهانه (حقوق پایه ÷ ۱۲)", nf(p.base / 12 * k.f)) + R("ذخیره مرخصی ماهانه", nf(m.hk / 12 * k.f)) + R("هزینه‌ها (غذا+اسکان+ایاب‌وذهاب+بیمه تکمیلی+پاداش+لباس)", nf(k.other), "b") + R("&nbsp;&nbsp;↳ غذا", nf(food)) + R("&nbsp;&nbsp;↳ اسکان", nf(lodge)) + R("&nbsp;&nbsp;↳ ایاب و ذهاب", nf(p.transp)) + R("&nbsp;&nbsp;↳ بیمه تکمیلی", nf(supp)) + R("&nbsp;&nbsp;↳ پاداش", nf(p.bonus)) + R("&nbsp;&nbsp;↳ لباس", nf(p.cloth)) + R("حقوق حکمی", nf(m.hk)) + R("هزینه کل شرکت (C)", nf(m.C), "b y") + H("د) تحلیل سودآوری قرارداد بر مبنای B ثابت") + R("هزینه سربار", nf(m.over)) + R("هزینه ریسک تأخیر پرداخت", nf(m.risk)) + R("بیمه قرارداد (ماده ۳۸)", nf(m.ceil)) + R("کسری بیمه", nf(m.short)) + R("سود قبل از مالیات", nf(m.pre)) + R("مالیات عملکرد شرکت", nf(m.taxc)) + R("سود خالص پس از مالیات", nf(m.net), "b g " + (m.net > 0 ? "ok" : "bad")) + R("حاشیه سود خالص بر B", pf(p.B ? m.net / p.B : 0)) + R("سود هدف (نرخ × B)", nf(tg)) + R("فاصله از سود هدف", nf(m.net - tg), m.net >= tg ? "ok" : "bad") + R("وضعیت سودآوری", st, "b y") + H("نسبت‌های کلیدی") + R("نسبت B/C", (p.B / m.C).toFixed(3), "b y") + R("نسبت B/A", (p.B / m.empNet).toFixed(3), "b") + R("نسبت C/A", (m.C / m.empNet).toFixed(3), "b") + R("سود ناخالص (B − C)", nf(p.B - m.C)) + R("حاشیه سود ناخالص بر B", pf(p.B ? (p.B - m.C) / p.B : 0));
    const tgp = num("tgin") / 100, s1 = solveX(p, k, tgp * p.B);
    const tgRows = [["سود خالص هدف", nf(tgp * p.B)], ["حقوق (خالص) کارمند (A)", nf(s1.m.empNet)], ["حقوق حکمی (ناخالص)", nf(s1.m.hk)], ["حقوق پایه (ناخالص)", nf(s1.base)], ["بیمه سهم کارگر", nf(s1.m.w)], ["مالیات حقوق", nf(s1.m.t)], ["هزینه کل شرکت (C)", nf(s1.m.C)], ["سود خالص حاصل", nf(s1.m.net)], ["وضعیت", s1.ok ? "قابل دستیابی ✔" : "غیرقابل دستیابی"]];
    $("tg").innerHTML = tgRows.map((r) => row(r[0], r[1])).join("");
    const T = [p.target, 0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3].map((r, i) => ({ r, cur: i == 0, s: i == 0 ? { base: p.base, m, ok: true } : solveX(p, k, r * p.B) }));
    const cur = m.hk;
    const CL = [
      ["نرخ سود هدف", (t) => pf(t.r)],
      ["سود خالص هدف", (t) => nf(t.r * p.B)],
      ["حداکثر حقوق پایه", (t) => nf(t.s.base)],
      ["حداکثر حقوق حکمی", (t) => nf(t.s.m.hk)],
      ["بیمه سهم کارگر", (t) => nf(t.s.m.w)],
      ["مالیات حقوق", (t) => nf(t.s.m.t)],
      ["خالص کارمند (A)", (t) => nf(t.s.m.empNet)],
      ["هزینه کل شرکت (C)", (t) => nf(t.s.m.C)],
      ["سربار + ریسک", (t) => nf(t.s.m.over + t.s.m.risk)],
      ["کسری ماده ۳۸", (t) => nf(t.s.m.short)],
      ["سود قبل از مالیات", (t) => nf(t.s.m.pre)],
      ["مالیات عملکرد", (t) => nf(t.s.m.taxc)],
      ["سود خالص", (t) => nf(t.s.m.net)],
      ["نسبت B÷حکمی", (t) => t.s.m.hk > 0 ? (p.B / t.s.m.hk).toFixed(3) : "-"],
      ["نسبت B/C", (t) => (p.B / t.s.m.C).toFixed(3)],
      ["اختلاف با حکمی فعلی", (t) => nf(t.s.m.hk - cur)],
      ["وضعیت", (t) => t.cur ? "وضع فعلی" : t.s.ok ? "قابل دستیابی ✔" : "غیرقابل دستیابی"]
    ];
    $("ceo").innerHTML = CL.map((l) => `<tr><th>${l[0]}</th>${T.map((t) => `<td class="n ${t.cur ? "hl" : ""}">${l[1](t)}</td>`).join("")}</tr>`).join("");
    window._s1 = s1;
    qa(".seg").forEach((x) => x._s && x._s());
    save();
  }
  var KEYS = ["ename", "eid", "method", "manual", "mmode", "hrate", "hours", "contract", "role", "exp", "netexp", "ins", "days", "married", "kids", "supp", "bonus", "cloth", "food", "lodge", "transp", "over", "target", "risk", "delay"];
  function save() {
    try {
      const o = {};
      KEYS.forEach((k) => o[k] = $(k).value);
      localStorage.setItem("msecnt2", JSON.stringify(o));
    } catch (e) {
    }
  }
  function load() {
    try {
      const o = JSON.parse(localStorage.getItem("msecnt2") || "null");
      if (o) KEYS.forEach((k) => {
        if (o[k] != null) $(k).value = o[k];
      });
    } catch (e) {
    }
  }
  function fmtMoney(e) {
    const v = num(e.id);
    e.value = v ? Math.round(v).toLocaleString("en-US") : e.value === "" ? "" : "0";
  }
  function segs() {
    qa(".seg").forEach((sg) => {
      const sel = $(sg.dataset.for);
      const L = sg.dataset.l ? sg.dataset.l.split("|") : [...sel.options].map((o) => o.text);
      const V = sg.dataset.v ? sg.dataset.v.split("|") : [...sel.options].map((o) => o.value || o.text);
      sg.innerHTML = V.map((v, i) => `<button data-v="${v}">${L[i]}</button>`).join("");
      sg.onclick = (e) => {
        const b = e.target.closest("button");
        if (b) {
          sel.value = b.dataset.v;
          calc();
        }
      };
      sg._s = () => sg.querySelectorAll("button").forEach((b) => b.classList.toggle("on", b.dataset.v === sel.value));
    });
  }
  function sync() {
    qa(".seg").forEach((s) => s._s && s._s());
    qa(".money").forEach(fmtMoneyIfBlur);
  }
  function fmtMoneyIfBlur(e) {
    if (document.activeElement !== e) fmtMoney(e);
  }
  function tab(id) {
    qa(".tab").forEach((t) => t.classList.toggle("on", t.id === id));
    qa("nav button").forEach((b) => b.classList.toggle("on", b.dataset.tab === id));
    scrollTo(0, 0);
  }
  qa("input:not([readonly]),select").forEach((e) => {
    e.addEventListener("input", () => {
      calc();
      sync();
    });
    e.addEventListener("change", () => {
      calc();
      sync();
    });
  });
  qa(".money").forEach((e) => {
    e.addEventListener("focus", () => {
      const v = num(e.id);
      e.value = v || "";
      setTimeout(() => e.select && e.select(), 0);
    });
    e.addEventListener("blur", () => fmtMoney(e));
  });
  qa("[data-st]").forEach((b) => b.onclick = () => {
    const e = $(b.dataset.st);
    e.value = Math.max(0, num(b.dataset.st) + +b.dataset.d);
    calc();
    sync();
  });
  qa("nav button").forEach((b) => b.onclick = () => b.dataset.tab === "t5" ? openAdmin() : tab(b.dataset.tab));
  var adminOK = false;
  async function sha(t) {
    const b = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(t));
    return [...new Uint8Array(b)].map((x) => x.toString(16).padStart(2, "0")).join("");
  }
  async function openAdmin() {
    if (!adminOK) {
      const p = prompt("رمز مدیر را وارد کنید");
      if (p === null) return;
      try {
        adminOK = await sha(p) === ADMIN_HASH;
      } catch (e) {
        alert("این بخش فقط روی https یا localhost کار می‌کند");
        return;
      }
      if (!adminOK) {
        alert("رمز نادرست است");
        return;
      }
    }
    renderAdmin();
    tab("t5");
  }
  function renderAdmin() {
    $("adm").innerHTML = '<table class="ceo"><tr><th>ردیف</th><th>شماره قرارداد</th><th>کارفرما</th><th>موضوع قرارداد</th><th>ضریب</th><th></th></tr>' + CON2.map((c, i) => `<tr><td>${i + 1}</td><td><input data-i="${i}" data-k="0" value="${c[0]}"></td><td><input data-i="${i}" data-k="1" value="${c[1]}"></td><td><input data-i="${i}" data-k="2" value="${c[2]}"></td><td><input data-i="${i}" data-k="3" value="${c[3]}"></td><td><button data-del="${i}">حذف</button></td></tr>`).join("") + "</table>";
  }
  $("adm").oninput = (e) => {
    const i = +e.target.dataset.i, k = +e.target.dataset.k;
    if (isNaN(i) || !CON2[i]) return;
    CON2[i][k] = k === 3 ? parseFloat(String(e.target.value).replace(",", ".")) || 0 : e.target.value;
  };
  $("adm").onclick = (e) => {
    const d = e.target.dataset.del;
    if (d != null) {
      CON2.splice(+d, 1);
      renderAdmin();
    }
  };
  $("addc").onclick = () => {
    CON2.push(["", "", "", 0]);
    renderAdmin();
  };
  $("savec").onclick = () => {
    try {
      localStorage.setItem("msecnt_con", JSON.stringify(CON2));
      const v = $("contract").value;
      fillStatic();
      $("contract").value = v;
      calc();
      $("admst").textContent = "ذخیره شد (" + CON2.length + " قرارداد) در این مرورگر.";
    } catch (e) {
      $("admst").textContent = "ذخیره نشد.";
    }
  };
  $("expc").onclick = () => {
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([JSON.stringify(CON2, null, 1)], { type: "application/json" }));
    a.download = "contracts.json";
    a.click();
  };
  $("resc").onclick = () => {
    if (confirm("قراردادهای ذخیره‌شده در این مرورگر حذف شود؟")) {
      localStorage.removeItem("msecnt_con");
      location.reload();
    }
  };
  $("go").onclick = () => tab("t2");
  $("setmax").onclick = () => {
    $("netexp").value = Math.floor(window._s1.m.empNet);
    calc();
    sync();
  };
  $("pr").onclick = () => {
    calc();
    const h = '<!doctype html><html lang="fa" dir="rtl"><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>گزارش</title><style>body{font-family:Tahoma,sans-serif;margin:12px;font-size:13px}table{width:100%;border-collapse:collapse}td{border:1px solid #ccc;padding:5px}td.n{direction:ltr;text-align:left}tr.sh td{background:#2E75B6;color:#fff;font-weight:700}tr.b td{font-weight:700}tr.g td{background:#E2EFDA}tr.y td{background:#FFD966}.ph{margin-bottom:10px}.no{display:none}@media print{.no{display:none}}button{padding:10px;margin-bottom:8px}</style><body><button class="no" style="display:block" onclick="print()">چاپ / ذخیره PDF</button><div class="ph">' + $("ph").innerHTML + "<br>نرخ حق‌الزحمه ساعتی: <b>" + nf(Math.round(window._hr.rate)) + " تومان</b> &nbsp; ساعات کار در ماه: <b>" + nf(window._hr.hours) + "</b> &nbsp; <span>(" + window._hr.src + ")</span></div><table>" + $("res").innerHTML + "</table></body></html>";
    try {
      const w = window.open("", "_blank");
      if (w) {
        w.document.open();
        w.document.write(h);
        w.document.close();
        setTimeout(() => {
          try {
            w.focus();
            w.print();
          } catch (e) {
          }
        }, 400);
        return;
      }
    } catch (e) {
    }
    try {
      window.print();
    } catch (e) {
      alert("چاپ پشتیبانی نمی‌شود؛ از منوی مرورگر «Share/Print» استفاده کنید.");
    }
  };
  $("dm").onclick = () => {
    document.body.classList.toggle("dark");
    try {
      localStorage.setItem("msecnt_dark", document.body.classList.contains("dark") ? "1" : "0");
    } catch (e) {
    }
  };
  try {
    if (localStorage.getItem("msecnt_dark") == "1") document.body.classList.add("dark");
  } catch (e) {
  }
  fillStatic();
  setDefaults();
  load();
  segs();
  calc();
  sync();
})();
