#!/usr/bin/env python3
"""Self-contained, print-ready A4 brochure for Inveenta 'Orchestrate'
(Enterprise Project & Portfolio Platform), prepared for Philipp / IPPN.

Original copy + original mockup data, authored for the 7-department / central-
oversight scenario. Styled to Inveenta CI: navy #16243B + lime #B7DA4C
(electric #DBFC52 for numerals on dark), Montserrat, brand eyebrow/KPI/motif
patterns. Uses the official Inveenta wordmark artwork. Green is the single spark,
never green text on white. Font embedded as base64 → one portable HTML file.

Run:  python3 brochures/_build_orchestrate.py   ->  brochures/orchestrate.html
"""
import base64
import pathlib

ROOT = pathlib.Path(__file__).resolve().parents[1]
FONT = base64.b64encode((ROOT / "public/fonts/montserrat-latin.woff2").read_bytes()).decode()
EMAIL = "santiago.garciaruiz@inveenta.com"

def wm(name, cls):
    s = (ROOT / f"public/brand/{name}").read_text(encoding="utf-8").strip()
    return s.replace("<svg ", f'<svg class="{cls}" ', 1)
MARK_LIGHT = wm("mark-light.svg", "wm")   # white "inveenta" + green tittle  (dark bg)
MARK_DARK  = wm("mark-dark.svg",  "wm")   # navy "inveenta" + green tittle   (light bg)

# ----------------------------------------------------------------------------- icons
def svg(paths, sw="1.7"):
    return (f'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="{sw}" '
            f'stroke-linecap="round" stroke-linejoin="round">{paths}</svg>')
IC = {
    "spaces": svg('<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/>'
                  '<rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>'),
    "command": svg('<circle cx="12" cy="12" r="9"/><path d="M21 12a9 9 0 1 0-9 9"/><circle cx="12" cy="12" r="3.3"/><path d="m21 5-4 4"/>'),
    "flag":   svg('<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1Z"/><path d="M4 22v-7"/>'),
    "flask":  svg('<path d="M9 3h6"/><path d="M10 3v6.6L4.7 18.2A2 2 0 0 0 6.5 21h11a2 2 0 0 0 1.8-2.8L14 9.6V3"/><path d="M7 15h10"/>'),
    "bell":   svg('<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>'),
    "globe":  svg('<circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z"/>'),
    "send":   svg('<path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>', sw="2"),
    "spark":  svg('<path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1"/><circle cx="12" cy="12" r="3.2"/>'),
}

# ----------------------------------------------------------------------------- ORIGINAL COPY
FEATURES = [
    ("spaces", "Governed department spaces",
     "Every department gets its own secure workspace for projects, owners and timelines — running independently, never colliding with another unit's work."),
    ("command", "Live portfolio command view",
     "One real-time roll-up of all seven departments — status, momentum and at-risk work — that you slice by unit, region or initiative in a click."),
    ("flag", "Milestones &amp; stage-gates",
     "Work advances through defined gates with named owners and dates. Progress you measure against checkpoints, instead of inferring it from an inbox."),
    ("flask", "Built-in R&amp;D pipeline",
     "Purpose-built for research: move concepts through phases and review gates, with the maturity of every initiative readable at a glance."),
    ("bell", "Alerts &amp; governance",
     "The platform flags a slipping milestone or a due gate the moment it happens — while role-based access keeps each unit's data firmly in its own lane."),
    ("globe", "Borderless by design",
     "Multiple languages, regions and time zones in one consistent system — built for operations that don't pause at a national border."),
]
WITHOUT = [
    "Status scattered across spreadsheets, slides and personal trackers",
    "The central office requests updates instead of simply reading them",
    "A slipping milestone only surfaces weeks after it slipped",
    "R&amp;D stays dark between formal gate reviews",
    "No single figure leadership can confidently stand behind",
]
WITHO = [
    "Each department works inside its own governed space",
    "Every project and gate rolls up to one live portfolio view",
    "Milestones and stage-gates carry automatic, owner-routed alerts",
    "R&amp;D pipelines are visible from first concept to release",
    "One governed source of truth, shared by every level",
]
OUTCOME = [
    ("Less manual effort", "Retire status-chasing and tool sprawl for one system your teams keep current because it's worth keeping current."),
    ("Scales with you", "Add departments, regions and projects without re-engineering how the portfolio works underneath."),
    ("Decisions on live data", "Catch a drifting milestone or a stalled R&amp;D gate while there is still time to act on it."),
]
STEPS = [
    ("01", "Discover", "We map how your seven departments actually work today, and where the central office is losing line of sight."),
    ("02", "Design", "A tailored blueprint — workspaces, gate model, R&amp;D pipeline and the command view — shaped to your reality, not a template."),
    ("03", "Build", "Delivery in focused increments, so you are steering working software within weeks rather than reviewing slideware."),
    ("04", "Scale", "Roll out department by department and region by region, with governance and support that grow alongside you."),
]
ASKS = [
    "What's slipping this week?",
    "Summarise R&amp;D for the board.",
    "Which gates are overdue?",
]

# ----------------------------------------------------------------------------- ORIGINAL mockup data
KPIS = [   # value, unit, delta, dir, amber-value?
    ("142", "", "+8 this month", "up", False),
    ("88", "%", "+4 pts", "up", False),
    ("11", "", "−3 vs last month", "down", True),
    ("27", "", "6 in review", "flat", False),
]
KPI_LABELS = ["Active projects", "On track", "At risk", "R&amp;D in pipeline"]
DEPT_STATUS = [
    ("Engineering", 91), ("Operations", 76), ("R&amp;D", 64),
    ("Quality", 88), ("Supply Chain", 73), ("Commercial", 82),
]
NEEDS = [
    ("R&amp;D — Stage-gate 3 review", "R&amp;D", "overdue 3d", "red"),
    ("Operations rollout — UAT sign-off", "Ops", "due Thu", "amber"),
]
BOARD = [  # column, count, [ (kind,title,done,total,who,date,overdue) ]
    ("Planning", 2, [
        ("project", "Line automation upgrade", 1, 5, "JL", "12 May", False),
        ("rd", "Composite housing trial", 0, 4, "MR", "20 May", False),
    ]),
    ("In progress", 2, [
        ("rd", "Thermal model v2", 3, 5, "SG", "06 May", False),
        ("project", "Plant rollout — Iberia", 2, 4, "RB", "09 May", False),
    ]),
    ("Review", 1, [
        ("rd", "Stage-gate 3 — Alpha unit", 4, 5, "SG", "overdue", True),
    ]),
]
AGENT_RISKS = [
    ("Stage-gate 3 — Alpha unit", "R&amp;D · overdue 3d", "red"),
    ("Operations rollout — UAT", "Ops · due Thu", "amber"),
    ("Quality audit — Plant 2", "QA · due Fri", "amber"),
]

# ----------------------------------------------------------------------------- diagrams
def constellation():
    nodes=[(648,64,4),(462,188,3.4),(728,188,5),(556,346,4),(872,360,3.6),(836,520,4.4),(652,300,3)]
    lines=[(0,1),(1,2),(2,3),(3,6),(2,4),(4,5),(3,2)]
    ln="".join(f'<line x1="{nodes[a][0]}" y1="{nodes[a][1]}" x2="{nodes[b][0]}" y2="{nodes[b][1]}"/>' for a,b in lines)
    nd="".join(f'<circle cx="{x}" cy="{y}" r="{r}"/>' for x,y,r in nodes)
    return (f'<svg class="constel" viewBox="0 0 960 600" fill="none" aria-hidden="true">'
            f'<g stroke="#e7eaef" stroke-width="1" opacity="0.28">{ln}</g>'
            f'<g fill="#b7da4c" opacity="0.9">{nd}</g></svg>')

def hub_spoke():
    cx,cy=270,150
    pos=[(70,58),(46,150),(86,242),(270,40),(454,58),(494,150),(454,242)]
    labels=["Eng","Ops","R&amp;D","Qual","Sply","Comm","Dgtl"]
    lines="".join(f'<line x1="{cx}" y1="{cy}" x2="{x}" y2="{y}"/>' for x,y in pos)
    dots="".join(f'<g><circle cx="{x}" cy="{y}" r="16" fill="#fff" stroke="#d6dbe3" stroke-width="1.3"/>'
                 f'<text x="{x}" y="{y+3.5}" class="hs-d">{lb}</text></g>' for (x,y),lb in zip(pos,labels))
    return (f'<svg class="hubspoke" viewBox="0 0 540 300" fill="none" aria-hidden="true">'
            f'<g stroke="#b7da4c" stroke-width="1.6" opacity="0.6">{lines}</g>{dots}'
            f'<circle cx="{cx}" cy="{cy}" r="36" fill="#16243b"/>'
            f'<circle cx="{cx}" cy="{cy}" r="42" fill="none" stroke="#b7da4c" stroke-width="1.6"/>'
            f'<text x="{cx}" y="{cy-2}" class="hs-c">CENTRAL</text>'
            f'<text x="{cx}" y="{cy+11}" class="hs-c">OFFICE</text></svg>')

def rings():
    return ('<svg class="rings" viewBox="0 0 240 240" fill="none" aria-hidden="true">'
            '<circle cx="170" cy="70" r="50" stroke="#b7da4c" stroke-width="1.2" opacity="0.30"/>'
            '<circle cx="170" cy="70" r="78" stroke="#b7da4c" stroke-width="1.2" opacity="0.18"/>'
            '<circle cx="170" cy="70" r="106" stroke="#b7da4c" stroke-width="1.2" opacity="0.10"/></svg>')

def linechart():
    pts=[(8,84),(56,78),(104,88),(152,66),(200,58),(252,44),(312,30)]
    poly=" ".join(f"{x},{y}" for x,y in pts)
    area="8,104 "+poly+" 312,104"
    dots="".join(f'<circle cx="{x}" cy="{y}" r="3" fill="#fff" stroke="#16243b" stroke-width="2"/>' for x,y in [pts[3],pts[5]])
    led=f'<circle cx="{pts[6][0]}" cy="{pts[6][1]}" r="3.6" fill="#a4c93c"/>'
    return (f'<svg class="lc" viewBox="0 0 320 112" fill="none" preserveAspectRatio="none">'
            f'<polygon points="{area}" fill="#b7da4c" opacity="0.12"/>'
            f'<polyline points="{poly}" fill="none" stroke="#16243b" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>'
            f'{dots}{led}</svg>')

# ----------------------------------------------------------------------------- builders
feat_cards="\n".join(
    f'''      <article class="feat"><span class="feat__ic">{IC[ic]}</span>
        <h3>{t}</h3><p>{b}</p></article>''' for ic,t,b in FEATURES)
without_li="\n".join(f'          <li>{x}</li>' for x in WITHOUT)
with_li="\n".join(f'          <li>{x}</li>' for x in WITHO)
outcome_cols="\n".join(f'''      <div class="oc"><h3>{t}</h3><p>{b}</p></div>''' for t,b in OUTCOME)
step_cols="\n".join(f'''        <div class="step"><span class="step__num">{n}</span><h3>{t}</h3><p>{b}</p></div>''' for n,t,b in STEPS)
ask_bubbles="\n".join(f'        <div class="ask">{a}</div>' for a in ASKS)

def kpi_cards():
    out=[]
    for (val,unit,delta,dirn,amber),lab in zip(KPIS,KPI_LABELS):
        vcls="k__v k__v--amber" if amber else "k__v"
        dcls={"up":"k__d k__d--up","down":"k__d k__d--down","flat":"k__d"}[dirn]
        out.append(f'<div class="k"><div class="k__lab">{lab}</div>'
                   f'<div class="{vcls}">{val}<span class="k__u">{unit}</span></div>'
                   f'<div class="{dcls}">{delta}</div></div>')
    return "\n        ".join(out)

def status_rows():
    return "\n          ".join(
        f'<div class="sr"><span class="sr__l">{lab}</span>'
        f'<span class="sr__bar"><i style="width:{pct}%"></i></span>'
        f'<span class="sr__p">{pct}%</span></div>' for lab,pct in DEPT_STATUS)

def needs_rows():
    return "\n          ".join(
        f'<div class="na"><span class="na__dot na__dot--{c}"></span>'
        f'<span class="na__t">{t}</span><span class="na__d">{d}</span>'
        f'<span class="na__when na__when--{c}">{w}</span></div>' for t,d,w,c in NEEDS)

def board_cols():
    cols=[]
    for name,count,cards in BOARD:
        cc=""
        for kind,title,done,total,who,date,overdue in cards:
            tag="Project" if kind=="project" else "R&amp;D"
            fill=int(done/total*100)
            datecls="bc__date bc__date--od" if overdue else "bc__date"
            cc+=(f'<div class="bc"><span class="bc__tag bc__tag--{kind}">{tag}</span>'
                 f'<div class="bc__title">{title}</div>'
                 f'<div class="bc__bar"><i style="width:{fill}%"></i></div>'
                 f'<div class="bc__meta"><span class="bc__prog">{done}/{total}</span>'
                 f'<span class="bc__who">{who}</span><span class="{datecls}">{date}</span></div></div>')
        cols.append(f'<div class="bcol"><div class="bcol__h">{name}<span class="bcol__n">{count}</span></div>{cc}</div>')
    return "\n        ".join(cols)

def agent_risks():
    return "".join(f'<div class="ar"><span class="ar__dot ar__dot--{c}"></span>'
                   f'<span class="ar__t">{t}</span><span class="ar__d">{d}</span></div>' for t,d,c in AGENT_RISKS)

# ----------------------------------------------------------------------------- HTML
HTML = f'''<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Inveenta — Orchestrate · Enterprise Project &amp; Portfolio Platform</title>
<style>
@font-face {{
  font-family:"Montserrat"; font-style:normal; font-weight:100 900; font-display:swap;
  src:url("data:font/woff2;base64,{FONT}") format("woff2");
}}
:root{{
  --navy:#16243b; --ink:#26344b; --grey:#5e5f64; --mute:#8a90a0;
  --green:#b7da4c; --green-screen:#dbfc52; --green-deep:#a4c93c; --green-wash:#f1f6e1;
  --amber:#d8932f; --red:#cf5340;
  --white:#fff; --mist:#e7eaef; --line:#e4e7ec; --line-soft:#eef0f3; --alt:#f6f7f9;
  --gradient-dark:linear-gradient(165deg,#424b5b 0%,#2d3444 52%,#1c2438 100%);
  --font:"Montserrat","Segoe UI",system-ui,-apple-system,sans-serif;
}}
*{{margin:0;box-sizing:border-box;}}
html{{background:#d9dde4;}}
body{{font-family:var(--font);color:var(--navy);line-height:1.62;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;}}
h1,h2,h3{{font-weight:700;line-height:1.1;letter-spacing:-0.018em;color:var(--navy);}}
p{{color:var(--grey);}}
a{{color:inherit;text-decoration:none;}}

.page{{position:relative;width:210mm;height:297mm;margin:8mm auto;background:#fff;overflow:hidden;
  display:flex;flex-direction:column;box-shadow:0 10px 40px -12px rgba(22,36,59,.4);
  -webkit-print-color-adjust:exact;print-color-adjust:exact;}}
.pad{{padding:18mm 18mm 0;}}

/* brand eyebrow: grey label + green dash (mist on dark). never green text on white */
.eyebrow{{display:inline-flex;align-items:center;gap:11px;font-size:8.5pt;font-weight:700;
  letter-spacing:0.2em;text-transform:uppercase;color:var(--grey);}}
.eyebrow::before{{content:"";width:22px;height:2px;background:var(--green);}}
.on-dark .eyebrow{{color:var(--mist);}}
.on-dark .ac{{color:var(--green-screen);}}

/* official wordmark artwork */
.wm{{height:6.4mm;width:auto;display:block;}}

.motif{{display:inline-flex;align-items:center;gap:7px;}}
.motif span{{width:9px;height:9px;border-radius:50%;}}
.motif span:nth-child(1){{background:var(--green);}}
.motif span:nth-child(2){{background:rgba(255,255,255,.5);}}
.motif span:nth-child(3){{background:#fff;}}

.foot{{margin-top:auto;display:flex;align-items:center;justify-content:space-between;
  padding:8mm 18mm;border-top:1px solid var(--line-soft);
  font-size:7.5pt;letter-spacing:0.14em;text-transform:uppercase;color:var(--mute);}}
.foot strong{{color:var(--navy);font-weight:700;}}

/* ===================== PAGE 1 — COVER ===================== */
.cover{{color:#fff;background:var(--navy);background-image:var(--gradient-dark);
  display:flex;flex-direction:column;padding:0;overflow:hidden;}}
.cover__grid{{position:absolute;inset:0;pointer-events:none;
  background-image:linear-gradient(rgba(255,255,255,.045) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.045) 1px,transparent 1px);
  background-size:13mm 13mm;-webkit-mask-image:radial-gradient(125% 110% at 50% 0%,#000 24%,transparent 72%);
  mask-image:radial-gradient(125% 110% at 50% 0%,#000 24%,transparent 72%);}}
.cover__top{{padding:16mm 18mm 0;position:relative;z-index:2;}}
.lockup{{display:inline-flex;align-items:center;gap:14px;}}
.lockup .wm{{height:7mm;}}
.lockup__rule{{width:1px;height:18px;background:rgba(255,255,255,.32);}}
.lockup__tag{{font-size:7.5pt;font-weight:600;letter-spacing:0.2em;text-transform:uppercase;color:var(--mist);}}
.cover__mid{{position:relative;flex:1;}}
.constel{{position:absolute;top:-2mm;right:6mm;width:118mm;height:auto;}}
.cover__body{{padding:0 18mm;position:relative;z-index:2;}}
.cover__eyebrow{{display:inline-flex;align-items:center;gap:11px;color:var(--mist);font-size:9pt;font-weight:700;letter-spacing:0.24em;text-transform:uppercase;}}
.cover__eyebrow::before{{content:"";width:22px;height:2px;background:var(--green);}}
.cover h1{{color:#fff;font-size:43pt;line-height:1.03;letter-spacing:-0.028em;margin-top:7mm;max-width:16ch;}}
.cover h1 .ac{{color:var(--green-screen);}}
.cover__product{{margin-top:6mm;display:inline-flex;align-items:center;gap:10px;font-size:14pt;font-weight:600;color:#fff;}}
.cover__product::before{{content:"";width:18px;height:3px;border-radius:2px;background:var(--green);}}
.cover__lead{{margin-top:5mm;max-width:60ch;font-size:11.5pt;line-height:1.66;color:#c6cdd9;}}
.cover__foot{{display:flex;align-items:center;justify-content:space-between;
  margin:9mm 18mm 12mm;padding-top:7mm;border-top:1px solid rgba(231,234,239,.16);font-size:8.5pt;}}
.cover__foot .l{{color:#fff;font-weight:600;}}
.cover__foot .r{{color:#9aa6b6;letter-spacing:0.16em;text-transform:uppercase;font-size:7.5pt;}}

/* ===================== PAGE 2 ===================== */
.h-block h2{{font-size:22pt;margin-top:4mm;max-width:21ch;}}
.h-block p.intro{{margin-top:4mm;font-size:11pt;line-height:1.66;max-width:64ch;}}
.compare{{margin-top:6mm;display:grid;grid-template-columns:1fr 1fr;gap:6mm;}}
.cmp{{border-radius:16px;padding:6mm 6.5mm;}}
.cmp--off{{background:var(--alt);border:1px solid var(--line);}}
.cmp--on{{color:#fff;background:var(--navy);background-image:var(--gradient-dark);}}
.cmp__lab{{font-size:8pt;font-weight:700;letter-spacing:0.16em;text-transform:uppercase;color:var(--mute);}}
.cmp--on .cmp__lab{{color:var(--green);}}
.cmp h3{{font-size:13pt;margin:2mm 0 4mm;}}
.cmp--on h3{{color:#fff;}}
.cmp ul{{list-style:none;display:flex;flex-direction:column;gap:2.6mm;}}
.cmp li{{position:relative;padding-left:8mm;font-size:9pt;line-height:1.38;color:var(--grey);}}
.cmp--on li{{color:#cdd4df;}}
.cmp li::before{{content:"";position:absolute;left:0;top:2px;width:12px;height:12px;border-radius:50%;}}
.cmp--off li::before{{border:1.6px solid #c4cad4;}}
.cmp--on li::before{{background:var(--green);}}
.outcome{{margin-top:5mm;}}
.outcome__cols{{margin-top:4mm;display:grid;grid-template-columns:repeat(3,1fr);gap:8mm;}}
.oc{{border-top:2px solid var(--navy);padding-top:4mm;}}
.oc h3{{font-size:13pt;}}
.oc h3::after{{content:"";display:block;width:30px;height:3px;border-radius:2px;background:var(--green);margin:3.5mm 0 0;}}
.oc p{{margin-top:3.5mm;font-size:9.5pt;line-height:1.45;}}
.diagram{{margin-top:5mm;background:var(--alt);border:1px solid var(--line);border-radius:18px;
  padding:4mm 6mm;display:grid;grid-template-columns:1.12fr 0.88fr;gap:6mm;align-items:center;}}
.diagram h3{{font-size:14pt;line-height:1.2;}}
.diagram p{{margin-top:3mm;font-size:9.5pt;line-height:1.45;}}
.hubspoke{{width:100%;max-width:52mm;height:auto;margin:0 auto;display:block;}}
.hs-d{{fill:var(--navy);font-size:8.5px;font-weight:700;text-anchor:middle;font-family:var(--font);}}
.hs-c{{fill:#fff;font-size:8px;font-weight:700;letter-spacing:0.06em;text-anchor:middle;font-family:var(--font);}}

/* ===================== PAGE 3 ===================== */
.feat-grid{{margin-top:5mm;display:grid;grid-template-columns:1fr 1fr;gap:4mm;}}
.feat{{border:1px solid var(--line);border-radius:16px;padding:4.5mm 5mm;}}
.feat__ic{{display:grid;place-items:center;width:9mm;height:9mm;border-radius:9px;
  background:var(--green-wash);color:var(--navy);margin-bottom:3mm;}}
.feat__ic svg{{width:5mm;height:5mm;}}
.feat h3{{font-size:11.5pt;margin-bottom:1.5mm;}}
.feat p{{font-size:8.8pt;line-height:1.4;}}
.ai{{margin-top:5mm;color:#fff;border-radius:18px;overflow:hidden;position:relative;
  background:var(--navy);background-image:var(--gradient-dark);
  padding:6.5mm 8mm;display:grid;grid-template-columns:1.05fr 1fr;gap:8mm;align-items:center;}}
.ai h3{{color:#fff;font-size:15pt;line-height:1.16;}}
.ai p{{margin-top:3.5mm;font-size:9.5pt;line-height:1.45;color:#cdd4df;max-width:46ch;}}
.ai__tags{{margin-top:4mm;display:flex;flex-wrap:wrap;gap:6px;}}
.ai__tag{{font-size:7.5pt;font-weight:600;color:#e7eaef;border:1px solid rgba(183,218,76,.5);border-radius:999px;padding:4px 10px;}}
.ai__asklab{{display:inline-flex;align-items:center;gap:10px;font-size:8pt;font-weight:700;letter-spacing:0.18em;text-transform:uppercase;color:var(--mist);margin-bottom:5mm;}}
.ai__asklab::before{{content:"";width:18px;height:2px;background:var(--green);}}
.ask{{background:rgba(255,255,255,.06);border:1px solid rgba(231,234,239,.18);border-radius:12px;padding:3mm 4mm;font-size:9.5pt;color:#eef1f5;margin-bottom:3mm;}}
.ask:last-child{{margin-bottom:0;}}

/* ===================== PAGE 4 — A LOOK INSIDE ===================== */
.p4 .pad{{padding:7mm 13mm 0;}}
.p4 .h-block h2{{font-size:18pt;}}
.p4 .h-block p.intro{{margin-top:2.4mm;font-size:9.5pt;max-width:78ch;}}
.p4 .shots{{margin-top:2.6mm;gap:2.2mm;}}
.p4 .app__main{{padding:3.4mm;}}
.p4 .dash__top h4{{font-size:11.5pt;}}
.p4 .kpis{{gap:2.4mm;margin-top:2.6mm;}}
.p4 .k{{padding:2.1mm 2.5mm;}}
.p4 .k__lab{{font-size:6.8pt;}}
.p4 .k__v{{font-size:13.5pt;}}
.p4 .k__d{{margin-top:0.9mm;font-size:6.8pt;}}
.p4 .panels{{margin-top:2.2mm;gap:2.6mm;}}
.p4 .panel{{padding:2.5mm;}}
.p4 .panel__h{{margin-bottom:1.8mm;}}
.p4 .lc{{height:8mm;}}
.p4 .sr{{margin-bottom:0.8mm;}}
.p4 .needs{{margin-top:2.2mm;padding:2.5mm;}}
.p4 .needs__h{{margin-bottom:2mm;}}
.p4 .na{{padding:0.8mm 0;}}
.p4 .shots-2{{margin-top:3mm;}}
.p4 .cap{{margin-top:1.6mm;}}
.p4 .cap b{{font-size:9.5pt;}}
.p4 .cap span{{font-size:7.5pt;}}
.p4 .board{{margin-top:3mm;}}
.p4 .bcol__h{{margin-bottom:2mm;}}
.p4 .bc{{padding:2mm;margin-bottom:1.8mm;}}
.p4 .bc__title{{line-height:1.25;}}
.p4 .bc__bar{{margin:1.8mm 0 1.6mm;}}
.p4 .agent__head{{padding-bottom:2mm;margin-bottom:2mm;}}
.p4 .bubble-u{{margin-bottom:1.6mm;padding:2.2mm 3.2mm;}}
.p4 .bubble-a{{margin-bottom:1.6mm;padding:2.6mm;}}
.p4 .bubble-a__t{{margin-bottom:1.6mm;}}
.p4 .bubble-typing{{margin-bottom:1.6mm;}}
.p4 .ar{{padding:0.6mm 0;}}
.p4 .agent__input{{padding:2mm 2mm 2mm 3.4mm;}}

.shots{{display:flex;flex-direction:column;}}
.cap b{{display:block;font-size:10pt;color:var(--navy);font-weight:700;}}
.cap span{{display:block;font-size:8.5pt;color:var(--grey);margin-top:1mm;line-height:1.45;}}
.shots-2{{display:grid;grid-template-columns:1fr 1fr;gap:7mm;}}
.win{{border:1px solid #e2e6ec;border-radius:12px;overflow:hidden;background:#fff;box-shadow:0 6px 22px -14px rgba(22,36,59,.4);}}
.win__bar{{display:flex;align-items:center;gap:9px;padding:6px 11px;background:#f1f3f6;border-bottom:1px solid #e6e9ee;}}
.win__bar i{{width:8px;height:8px;border-radius:50%;display:inline-block;background:#cfd4dc;}}
.win__url{{margin-left:6px;font-size:7.5pt;color:#9aa3b0;background:#fff;border:1px solid #e6e9ee;border-radius:6px;padding:2px 10px;}}
.app{{display:flex;}}
.app__rail{{width:11mm;background:var(--navy);display:flex;flex-direction:column;align-items:center;gap:7px;padding:9px 0;}}
.app__rail i{{width:13px;height:13px;border-radius:4px;background:rgba(255,255,255,.14);}}
.app__rail i.on{{background:var(--green);}}
.app__main{{flex:1;padding:6mm;min-width:0;}}
.dash__top{{display:flex;align-items:flex-start;justify-content:space-between;gap:8px;}}
.dash__top h4{{font-size:13pt;}}
.dash__sub{{font-size:8pt;color:var(--mute);margin-top:1.5mm;}}
.pills{{display:flex;gap:5px;flex-shrink:0;}}
.pill{{font-size:7.5pt;font-weight:600;border:1px solid var(--line);border-radius:999px;padding:3px 9px;color:var(--grey);background:#fff;}}
.pill--on{{background:var(--navy);border-color:var(--navy);color:#fff;}}
.kpis{{margin-top:5mm;display:grid;grid-template-columns:repeat(4,1fr);gap:4mm;}}
.k{{border:1px solid var(--line);border-radius:10px;padding:4mm;}}
.k__lab{{font-size:7.5pt;color:var(--mute);}}
.k__v{{font-size:19pt;font-weight:700;letter-spacing:-0.02em;color:var(--navy);line-height:1;margin-top:2mm;}}
.k__v--amber{{color:var(--amber);}}
.k__u{{font-size:10pt;font-weight:600;}}
.k__d{{font-size:7.5pt;color:var(--mute);margin-top:2mm;}}
.k__d--up{{color:var(--green-deep);}} .k__d--down{{color:var(--amber);}}
.panels{{margin-top:4mm;display:grid;grid-template-columns:1.25fr 1fr;gap:4mm;}}
.panel{{border:1px solid var(--line);border-radius:10px;padding:4mm;}}
.panel__h{{font-size:8pt;font-weight:700;color:var(--ink);margin-bottom:3mm;}}
.lc{{width:100%;height:24mm;display:block;}}
.sr{{display:grid;grid-template-columns:auto 1fr auto;align-items:center;gap:6px;margin-bottom:2.6mm;}}
.sr:last-child{{margin-bottom:0;}}
.sr__l{{font-size:7.5pt;color:var(--grey);white-space:nowrap;}}
.sr__bar{{height:5px;border-radius:3px;background:#edeff2;overflow:hidden;}}
.sr__bar i{{display:block;height:100%;background:var(--green-deep);border-radius:3px;}}
.sr__p{{font-size:7.5pt;color:var(--mute);font-weight:600;}}
.needs{{margin-top:4mm;border:1px solid var(--line);border-radius:10px;padding:4mm;}}
.needs__h{{font-size:8pt;font-weight:700;color:var(--ink);margin-bottom:3mm;}}
.na{{display:flex;align-items:center;gap:8px;font-size:8pt;padding:1.6mm 0;}}
.na+.na{{border-top:1px solid var(--line-soft);}}
.na__dot{{width:7px;height:7px;border-radius:50%;flex-shrink:0;}}
.na__dot--red{{background:var(--red);}} .na__dot--amber{{background:var(--amber);}}
.na__t{{color:var(--ink);}}
.na__d{{margin-left:auto;font-size:7pt;font-weight:700;color:var(--grey);background:var(--alt);border:1px solid var(--line);border-radius:5px;padding:1px 7px;}}
.na__when{{font-size:7.5pt;font-weight:700;}}
.na__when--red{{color:var(--red);}} .na__when--amber{{color:var(--amber);}}
.board__h{{display:flex;align-items:center;justify-content:space-between;}}
.board__h h4{{font-size:11pt;}}
.board__chip{{font-size:7pt;font-weight:700;background:var(--navy);color:#fff;border-radius:6px;padding:3px 9px;}}
.board{{margin-top:4mm;display:grid;grid-template-columns:repeat(3,1fr);gap:3mm;}}
.bcol__h{{display:flex;align-items:center;gap:5px;font-size:7.5pt;font-weight:700;color:var(--grey);margin-bottom:3mm;}}
.bcol__n{{font-size:6.5pt;background:#edeff2;color:var(--mute);border-radius:5px;padding:1px 5px;}}
.bc{{background:#fff;border:1px solid var(--line);border-radius:8px;padding:3mm;margin-bottom:3mm;}}
.bc__tag{{display:inline-block;font-size:6pt;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;border-radius:4px;padding:1.5px 6px;margin-bottom:2.5mm;}}
.bc__tag--project{{background:#eef0f3;color:var(--ink);}}
.bc__tag--rd{{background:var(--green-wash);color:var(--navy);box-shadow:inset 2px 0 0 var(--green);}}
.bc__title{{font-size:8pt;font-weight:600;color:var(--navy);line-height:1.3;}}
.bc__bar{{height:3.5px;border-radius:2px;background:#edeff2;overflow:hidden;margin:3mm 0 2.5mm;}}
.bc__bar i{{display:block;height:100%;background:var(--green-deep);}}
.bc__meta{{display:flex;align-items:center;gap:5px;font-size:6.5pt;color:var(--mute);}}
.bc__prog{{font-weight:700;color:var(--grey);}}
.bc__who{{margin-left:auto;width:13px;height:13px;border-radius:50%;background:var(--green-wash);color:var(--navy);display:grid;place-items:center;font-size:5.5pt;font-weight:700;}}
.bc__date--od{{color:var(--red);font-weight:700;}}
.agent__head{{display:flex;align-items:center;gap:8px;padding-bottom:3mm;border-bottom:1px solid var(--line-soft);margin-bottom:3mm;}}
.agent__av{{width:9mm;height:9mm;border-radius:9px;background:var(--navy);color:var(--green);display:grid;place-items:center;}}
.agent__av svg{{width:5mm;height:5mm;}}
.agent__name{{font-size:9.5pt;font-weight:700;}}
.agent__meta{{font-size:7pt;color:var(--mute);}}
.bubble-u{{max-width:80%;margin-left:auto;background:var(--navy);color:#fff;font-size:8pt;border-radius:11px 11px 3px 11px;padding:3mm 4mm;margin-bottom:3mm;}}
.bubble-a{{max-width:90%;background:var(--alt);border:1px solid var(--line);border-radius:11px 11px 11px 3px;padding:3.5mm 4mm;margin-bottom:3mm;}}
.bubble-a__t{{font-size:8pt;color:var(--ink);font-weight:600;margin-bottom:2.5mm;}}
.ar{{display:flex;align-items:center;gap:7px;font-size:7.5pt;padding:1mm 0;}}
.ar__dot{{width:6px;height:6px;border-radius:50%;flex-shrink:0;}}
.ar__dot--red{{background:var(--red);}} .ar__dot--amber{{background:var(--amber);}}
.ar__t{{color:var(--ink);}} .ar__d{{margin-left:auto;color:var(--mute);}}
.bubble-typing{{font-size:8pt;color:var(--mute);font-style:italic;margin-bottom:3mm;}}
.agent__input{{display:flex;align-items:center;gap:7px;border:1px solid var(--line);border-radius:999px;padding:2.5mm 2.5mm 2.5mm 4mm;}}
.agent__input > span:first-child{{flex:1;font-size:7.5pt;color:var(--mute);}}
.agent__send{{flex:0 0 auto;width:8mm;height:8mm;border-radius:50%;background:var(--green);color:var(--navy);display:grid;place-items:center;}}
.agent__send svg{{width:4mm;height:4mm;}}

/* ===================== PAGE 5 ===================== */
.steps{{margin-top:9mm;display:grid;grid-template-columns:repeat(4,1fr);gap:8mm;}}
.step{{border-top:2px solid var(--line);padding-top:6mm;}}
.step__num{{display:grid;place-items:center;width:9mm;height:9mm;border-radius:10px;background:var(--navy);color:#fff;font-weight:700;font-size:11pt;margin-bottom:4mm;}}
.step h3{{font-size:13pt;margin-bottom:3mm;}}
.step h3::after{{content:"";display:block;width:26px;height:3px;border-radius:2px;background:var(--green);margin-top:4mm;}}
.step p{{font-size:9pt;line-height:1.5;margin-top:4mm;}}
.engineered{{margin-top:9mm;border:1px solid var(--line);border-radius:16px;padding:7mm 9mm;display:grid;grid-template-columns:auto 1fr;gap:9mm;align-items:center;}}
.engineered__lab{{display:inline-flex;align-items:center;gap:9px;font-size:8pt;font-weight:700;letter-spacing:0.16em;text-transform:uppercase;color:var(--grey);white-space:nowrap;}}
.engineered__lab::before{{content:"";width:18px;height:2px;background:var(--green);}}
.engineered p{{font-size:9.5pt;line-height:1.65;}}
.engineered strong{{color:var(--navy);font-weight:700;}}
.cta{{margin-top:9mm;position:relative;overflow:hidden;color:#fff;border-radius:18px;background:var(--navy);background-image:var(--gradient-dark);padding:10mm 12mm;}}
.rings{{position:absolute;top:-6mm;right:-4mm;width:78mm;height:auto;}}
.cta h2{{position:relative;color:#fff;font-size:22pt;max-width:18ch;}}
.cta h2 .ac{{color:var(--green-screen);}}
.cta p{{position:relative;margin-top:5mm;font-size:10.5pt;line-height:1.65;color:#cdd4df;max-width:58ch;}}
.cta__contacts{{position:relative;margin-top:7mm;padding-top:6mm;border-top:1px solid rgba(231,234,239,.16);display:grid;grid-template-columns:repeat(3,auto);gap:14mm;}}
.cta__contacts h4{{display:inline-flex;align-items:center;gap:8px;font-size:7.5pt;font-weight:700;letter-spacing:0.16em;text-transform:uppercase;color:var(--mist);margin-bottom:3mm;}}
.cta__contacts h4::before{{content:"";width:14px;height:2px;background:var(--green);}}
.cta__contacts .v{{font-size:11pt;font-weight:600;color:#fff;}}
.cta__foot{{position:relative;margin-top:10mm;display:flex;align-items:center;gap:14px;}}
.cta__foot .lockup__tag{{color:#9aa6b6;}}

@media print{{
  html{{background:#fff;}}
  .page{{margin:0;box-shadow:none;page-break-after:always;}}
  .page:last-child{{page-break-after:auto;}}
}}
@page{{size:A4;margin:0;}}
</style>
</head>
<body>

<!-- ===================== PAGE 1 — COVER ===================== -->
<section class="page cover on-dark">
  <div class="cover__grid"></div>
  <div class="cover__top">
    <span class="lockup">{MARK_LIGHT}<span class="lockup__rule"></span><span class="lockup__tag">Engineering Intelligent Business</span></span>
  </div>
  <div class="cover__mid">{constellation()}</div>
  <div class="cover__body">
    <span class="cover__eyebrow">Enterprise Project &amp; Portfolio Platform</span>
    <h1>Seven departments.<br/><span class="ac">One line of sight.</span></h1>
    <div class="cover__product">Orchestrate</div>
    <p class="cover__lead">Your departments run their own projects and research their own way. Orchestrate brings every milestone, gate and R&amp;D initiative into a single governed view — so your central office steers in real time instead of chasing status across borders.</p>
  </div>
  <div class="cover__foot"><span class="l">inveenta.com</span><span class="r">Prepared for Philipp · IPPN</span></div>
</section>

<!-- ===================== PAGE 2 — CHALLENGE / OUTCOME ===================== -->
<section class="page">
  <div class="pad">
    <div class="h-block">
      <span class="eyebrow">The Challenge</span>
      <h2>Growth multiplies projects.<br/>It shouldn't multiply blind spots.</h2>
      <p class="intro">Across borders, every department adopts its own tools, trackers and rhythms. By the time status reaches your central office it has been stitched together from exports and inboxes — partial, late, and hard to trust. Oversight gets harder at exactly the moment the stakes get higher.</p>
    </div>
    <div class="compare">
      <div class="cmp cmp--off">
        <div class="cmp__lab">Today — without Orchestrate</div>
        <h3>Seven departments, seven islands</h3>
        <ul>
{without_li}
        </ul>
      </div>
      <div class="cmp cmp--on">
        <div class="cmp__lab">With Orchestrate</div>
        <h3>One platform, full oversight</h3>
        <ul>
{with_li}
        </ul>
      </div>
    </div>
    <div class="outcome">
      <span class="eyebrow">The Outcome</span>
      <div class="outcome__cols">
{outcome_cols}
      </div>
    </div>
    <div class="diagram">
      <div>
        <h3>Seven departments.<br/>One central office.</h3>
        <p>Each unit runs independently. Orchestrate rolls every project and R&amp;D effort up into one live command view for your office.</p>
      </div>
      {hub_spoke()}
    </div>
  </div>
  <div class="foot"><span><strong>Inveenta</strong> · Orchestrate</span><span>02</span></div>
</section>

<!-- ===================== PAGE 3 — FEATURES / AI ===================== -->
<section class="page">
  <div class="pad">
    <div class="h-block">
      <span class="eyebrow">Inside Orchestrate</span>
      <h2>Built for milestones and R&amp;D — not transactions.</h2>
    </div>
    <div class="feat-grid">
{feat_cards}
    </div>
    <div class="ai on-dark">
      <div>
        <span class="ai__asklab">AI agent · built in</span>
        <h3>Your portfolio, answerable in <span class="ac">plain language.</span></h3>
        <p>An agent that reads across all seven departments. Ask it anything — it surfaces risks, drafts board summaries, and flags drift well before the next review.</p>
        <div class="ai__tags">
          <span class="ai__tag">Risk radar</span>
          <span class="ai__tag">Instant summaries</span>
          <span class="ai__tag">Any language</span>
        </div>
      </div>
      <div>
        <div class="ai__asklab">Ask Orchestrate</div>
{ask_bubbles}
      </div>
    </div>
  </div>
  <div class="foot"><span><strong>Inveenta</strong> · Orchestrate</span><span>03</span></div>
</section>

<!-- ===================== PAGE 4 — A LOOK INSIDE ===================== -->
<section class="page p4">
  <div class="pad">
    <div class="h-block">
      <span class="eyebrow">A look inside</span>
      <h2>Software your teams<br/>actually want to open.</h2>
      <p class="intro">Clear interfaces your people read on day one — and a single command view your office trusts at a glance.</p>
    </div>
    <div class="shots">
      <div>
        <div class="win">
          <div class="win__bar"><i></i><i></i><i></i><span class="win__url">orchestrate · portfolio</span></div>
          <div class="app">
            <div class="app__rail"><i class="on"></i><i></i><i></i><i></i><i></i></div>
            <div class="app__main">
              <div class="dash__top">
                <div><h4>Portfolio Overview</h4><div class="dash__sub">All departments · Q2 2026</div></div>
                <div class="pills"><span class="pill pill--on">All departments</span><span class="pill">Region</span><span class="pill">This quarter</span></div>
              </div>
              <div class="kpis">
        {kpi_cards()}
              </div>
              <div class="panels">
                <div class="panel"><div class="panel__h">Milestone completion · weekly</div>{linechart()}</div>
                <div class="panel"><div class="panel__h">Progress by department</div>
          {status_rows()}
                </div>
              </div>
              <div class="needs"><div class="needs__h">Needs attention</div>
          {needs_rows()}
              </div>
            </div>
          </div>
        </div>
        <div class="cap"><b>Central command dashboard</b><span>Every department's projects, milestones and R&amp;D rolled up live — filterable by unit, region or initiative.</span></div>
      </div>
      <div class="shots-2">
        <div>
          <div class="win">
            <div class="win__bar"><i></i><i></i><i></i><span class="win__url">orchestrate · workspace</span></div>
            <div class="app">
              <div class="app__rail"><i></i><i class="on"></i><i></i><i></i></div>
              <div class="app__main">
                <div class="board__h"><h4>Engineering · Projects</h4><span class="board__chip">Board</span></div>
                <div class="board">
        {board_cols()}
                </div>
              </div>
            </div>
          </div>
          <div class="cap"><b>Department workspace</b><span>Projects on a board — milestones, owners and stage, with nothing to wade through.</span></div>
        </div>
        <div>
          <div class="win">
            <div class="win__bar"><i></i><i></i><i></i><span class="win__url">orchestrate · agent</span></div>
            <div class="app__main">
              <div class="agent__head">
                <span class="agent__av">{IC["spark"]}</span>
                <div><div class="agent__name">Orchestrate Agent</div><div class="agent__meta">Across 7 departments · 142 projects</div></div>
              </div>
              <div class="bubble-u">What's slipping this week?</div>
              <div class="bubble-a"><div class="bubble-a__t">Three items need attention:</div>
                {agent_risks()}
              </div>
              <div class="bubble-u">Draft a summary for the board.</div>
              <div class="bubble-typing">Summarising across 7 departments…</div>
              <div class="agent__input"><span>Ask in any language…</span><span class="agent__send">{IC["send"]}</span></div>
            </div>
          </div>
          <div class="cap"><b>Orchestrate Agent</b><span>Ask in plain language; get answers and summaries across every department at once.</span></div>
        </div>
      </div>
    </div>
  </div>
  <div class="foot"><span><strong>Inveenta</strong> · Orchestrate</span><span>04</span></div>
</section>

<!-- ===================== PAGE 5 — DELIVERY / CTA ===================== -->
<section class="page">
  <div class="pad">
    <div class="h-block">
      <span class="eyebrow">How we build it</span>
      <h2>Shaped around your operations,<br/>not a template.</h2>
      <p class="intro">Orchestrate isn't shrink-wrapped software. We model it on your departments, your gates and your R&amp;D process — built on enterprise-grade Microsoft foundations so it is governed, secure and ready to scale from the first release.</p>
    </div>
    <div class="steps">
{step_cols}
    </div>
    <div class="engineered">
      <span class="engineered__lab">Engineered on</span>
      <p>Enterprise-grade <strong>Microsoft Power Platform</strong> &amp; <strong>Copilot Studio</strong> — governed access per department, the <strong>AI agent layer</strong> built in, and clean integration with the systems you already run.</p>
    </div>
    <div class="cta on-dark">
      {rings()}
      <h2>Let's map Orchestrate to how <span class="ac">IPPN actually runs.</span></h2>
      <p>Give us 30 minutes on how your departments work and what oversight needs to mean for your central office. We come back with a concrete, tailored concept — not a demo script.</p>
      <div class="cta__contacts">
        <div><h4>Contact</h4><div class="v">Santiago García Ruiz</div></div>
        <div><h4>Online</h4><div class="v">inveenta.com</div></div>
        <div><h4>Direct</h4><div class="v">{EMAIL}</div></div>
      </div>
    </div>
  </div>
  <div class="foot"><span><strong>Inveenta</strong> · Engineering Intelligent Business</span><span>05</span></div>
</section>

</body>
</html>
'''

out = ROOT / "brochures/orchestrate.html"
out.write_text(HTML, encoding="utf-8")
print(f"Wrote {out} ({len(HTML)/1024:.0f} KB)")
