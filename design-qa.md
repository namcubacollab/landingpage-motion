# Roadster — Design QA

final result: passed

This result covers the local editorial prototype, its design and observable interaction flow. It is not publication approval, independent validation of Tesla specifications, or a subjective approval on the user's behalf.

## Source visual truth and scope

- Visual truth: `design/hero-reference.png`, generated for the user-selected anatomical editorial direction.
- Source pixels: **1505 × 1045**. Normalized to **1440 × 1000** for comparison; aspect-ratio discrepancy is below 0.1%.
- Implementation: `docs/qa/hero-desktop-final.png`, **1440 × 1000** pixels at **1440 × 1000 CSS px**.
- State: opening screen, top of article, closed menu, fonts loaded. Static reference vs static hero; motion toggle state does not change the hero composition.
- Full-view, same-input comparison: `docs/qa/hero-comparison.png`.
- Focused comparisons: `docs/qa/title-comparison.png`, `header-comparison.png`, `vehicle-comparison.png`.
- The reference specifies the opening composition. The five lower chapters follow the selected written scenario and shared visual language; no 1:1 image-fidelity claim is made for screens without a reference mock.

## Required fidelity surfaces

| Surface | Assessment |
|---|---|
| Typography | Local Barlow Condensed 700 for the hero and Be Vietnam Pro for reading/UI. Vietnamese accents remain readable; headline fits at 320, 390, 834, 1280 and 1440 px without truncation. Font weight was increased after comparison. The reference's generated font is approximated with a real Vietnamese-capable font, not rasterized text. |
| Spacing and layout | Large title, right-column deck, front-view car and lower reading cue preserve reference hierarchy. Short laptop hero and mobile composition were adjusted to retain the full car and start-reading cue. Chapters use consistent margins, rhythm and dividers. |
| Colors and tokens | Graphite/ivory, warm orange emphasis, cyan for airflow/control signals. Contrast is deliberately stronger on reading text. The small difference from the generated reference's orange is accepted art direction. |
| Image quality | Official Tesla front/cockpit/closing images are local, credited and sharp. Registered before/after renders share 1536×1024 dimensions. AI illustrations are labeled. A misleading mechanical steering connection in the first cutaway was removed. No car or material image is replaced by CSS/HTML art. |
| Copy and content | Complete five-system reading path, explicit conceptual-vs-measured distinction, no fabricated mass/pressure/performance telemetry. Trim boundaries and Rocket road-use note remain visible. The decorative quote was replaced with an icon so authored editorial copy is not mistaken for a sourced quotation. |

Expected differences: the implementation retains the source logo's small slogan and adds a playback control. Phosphor icons replace generated icon shapes. These improve authenticity and accessibility without changing the visual hierarchy.

## Findings resolved

1. **[P2] Reveal drag could become a browser image drag.** Initial mobile drag stopped early (about 31% rather than reaching the intended position). Disabled native image dragging, kept pointer capture and a keyboard range fallback. Re-tested drag from x=100 to x=280: **73%**, matching `(280−8)/374`. Evidence: `docs/qa/anatomy-mobile-after-drag-fix.png` and recorded browser result.
2. **[P2] Small reading text and touch targets.** Increased primary body copy to 14–15 px and hotspot hit areas to 44×44 while retaining compact visual markers. Evidence: `hero-mobile-320.png`, `steering-mobile-320.png`, and live mobile walkthrough.
3. **[P2] Short laptop viewport cut the car/start cue.** Added a height-aware layout at 801–1400 px widths with viewport height ≤800 px. Evidence: `docs/qa/hero-laptop-1280.png`; car and reading cue fit at 1280×720.
4. **[P2] Hero title weight and disconnected leaders.** Increased the local display font to 700 and corrected leader origins/endpoints. Compared the revised render to source in the full-view and title/header comparisons.
5. **[P2] Chapter state after a jump past tracked sections.** Replaced intersection-only state with the last chapter passed in scroll order. Added horizontal-only centering of the active mobile chapter. Fresh-load jump from the opening to sources now marks **05 / Bộ đẩy**, and returning to the atlas marks 00.
6. **[P2] Fan-off still looked active.** Desaturated and dimmed the static cutaway when the fan is off; animated airflow and force arrows are removed. State and explanation update together.

No actionable P0/P1/P2 issue remains in the observed local flow.

## Browser verification

Browser: Codex in-app browser. Real UI actions, not only build or HTTP checks.

| Flow | Evidence / result |
|---|---|
| Initial reading route | Header, first-screen cue, chapter links, atlas and closing/source route function. |
| Reveal | Home → 0%, End → 100%, PageUp → 10%; direct touch/click and continuous drag update the same state. Five hotspots update the description and chapter link. |
| Suction | Fan off/on and sealed/leaking states produce the corresponding explanation and schematic changes. |
| Active aero | Straight/corner states switch priority labels/indicators; trade-off explanation expands/collapses. |
| Steering | Slow/fast modes differ; a −60° illustrative input yields −7.5° in fast mode; reset centers both. |
| Materials | Carbon / magnesium / titanium each update image, symbol and explanation. |
| Trims | Performance has no depicted thruster; Thrust shows forward assistance; Rocket shows one seat and its public-road restriction. |
| Menu and sources | Open/close, Escape, focus return and body scroll unlock checked. Source links point to the original article and official Tesla page. |
| Motion | Actual moving frames compared in the same visible canvas area: **12,770 changed pixels** while playing; **0** between paused frames. See `docs/qa/motion-frame-check.json` and four frame captures. |
| Structure | One h1, Vietnamese lang, no duplicate ids, no missing internal anchor target, no failed loaded image in the final check. |
| Console | Fresh-load smoke after **2026-10-19T11:10:07Z**: no new errors or warnings. `docs/qa/fresh-load-console.json` is empty. A historical development hot-reload dependency-array warning remains in the tool buffer; it did not recur on a fresh page. |

## Viewports and density

`docs/qa/viewport-checks.json` records these actual CSS viewport widths and document widths:

| CSS viewport | Document width | Horizontal overflow |
|---|---:|---|
| 320×740 | 320 | none |
| 390×844 | 390 | none |
| 834×1112 | 834 | none |
| 1280×720 | 1280 | none |
| 1440×1000 | 1440 | none |

The chapter strip intentionally scrolls inside its own container on small screens. Headline child scroll widths equal their available client widths. Screenshot output is normalized to CSS pixels; source and implementation comparison images use matching dimensions.

## Tests and packaging

- `npm run build`: passed.
- `npm test`: **9 passed, 0 failed** (5 editorial/model invariants + 4 hosting-contract tests).
- Required client, worker and hosting metadata emitted. Original template hosting contract retained.
- Runtime media/fonts are local, approximately 2.5 MB in total; the two car illustrations are optimized WebP.

## Residual test gaps / follow-up polish

- The operating-system reduced-motion setting was not changed/emulated. The media-query listener and CSS fallback were inspected; manual pause/play was verified in the browser, including static frame equality while paused.
- Offscreen/tab-hidden suspension is implemented; a full performance/device battery profile was not measured.
- Technical micro-labels are smaller than reading copy. Their function is supplemental; a dedicated screen-reader audit and arbitrary text-zoom pass remain future validation.
- Source licensing/publication permission and independent technical review remain outside this local prototype's completed scope.

## Implementation checklist

- [x] Opening design compared against its source, including focused typography/brand/image surfaces.
- [x] Five chapters and primary interactions complete.
- [x] Mobile/keyboard/navigation defects corrected and re-tested.
- [x] Fresh-load smoke and console check passed.
- [x] Build and nine tests passed.
- [x] Sources, prompts, editable originals and QA evidence saved.
- [x] Local preview left running for user inspection.
