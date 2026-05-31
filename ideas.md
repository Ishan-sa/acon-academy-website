# ACON Academy — Design Ideas

## Context
ACON Academy is Canada's premier French language learning institution with campuses in Surrey and Kelowna, BC. The goal is a premium university-style website inspired by UBC and SFU, with rich SEO-optimized navigation, multiple pages, and a sophisticated academic feel.

---

<response>
<idea>

**Design Movement:** Neo-Institutional Modernism — where the gravitas of academic tradition meets the clarity of Swiss graphic design.

**Core Principles:**
1. Structural authority through asymmetric column grids — never centered, always purposeful
2. Typography as architecture — headings that command space, body text that breathes
3. Deep navy as the institutional anchor, with warm gold as the signal of excellence
4. Every section earns its place through information density, not decoration

**Color Philosophy:**
- Primary: Deep Institutional Navy `#0D2240` — authority, trust, permanence
- Accent: Warm Academic Gold `#C9A84C` — achievement, distinction, French heritage
- Surface: Warm White `#FAF8F5` — parchment-like, scholarly
- Text: Charcoal `#1A1A2E` — readable, serious
- Muted: Slate `#6B7280` — supporting information
Emotional intent: The palette evokes the reading room of a great library — serious but welcoming, prestigious but accessible.

**Layout Paradigm:**
Asymmetric editorial grid. The header uses a split-level architecture (utility bar + main nav). Hero sections use full-bleed photography with left-anchored text blocks. Content sections alternate between wide-column text and tighter image-text pairings. The footer is a dense information architecture with 4-column link grids.

**Signature Elements:**
1. A thin gold rule (2px) that appears as a separator between the utility bar and main nav — a subtle but consistent brand mark
2. "Stamp" badges on program cards — circular gold stamps reading "CLB-5", "CLB-7" etc., evoking official certification
3. Diagonal section dividers using CSS clip-path to create momentum between page sections

**Interaction Philosophy:**
Interactions are deliberate and measured — like turning pages in a reference book. Dropdown menus slide down with a 200ms ease-out. Cards lift with a 4px shadow on hover. The hero carousel advances with a slow cross-fade. Nothing bounces or spins.

**Animation:**
- Page entrance: sections fade up with `translateY(20px)` → `translateY(0)` over 600ms
- Nav dropdowns: `scaleY(0)` → `scaleY(1)` from top, 200ms ease-out
- Hero: 6-second auto-advance with 800ms cross-fade
- Stat counters: count up animation on scroll-into-view
- Card hover: `translateY(-4px)` + shadow deepening, 200ms

**Typography System:**
- Display/Headings: `Playfair Display` — serif, authoritative, French-heritage feel
- Body/UI: `Source Sans 3` — clean, readable, professional
- Accent/Labels: `Source Sans 3` semibold, letter-spaced uppercase
- Scale: 48px hero → 36px section → 24px subsection → 18px body → 14px caption

</idea>
<probability>0.08</probability>
</response>

<response>
<idea>

**Design Movement:** Contemporary Academic Minimalism — the language of elite modern institutions like Sciences Po or McGill's new digital identity.

**Core Principles:**
1. Radical whitespace — sections breathe with 120px vertical rhythm
2. Monochromatic base with single accent color for maximum sophistication
3. Photography does the emotional work; typography does the structural work
4. Information hierarchy through scale alone, not color or decoration

**Color Philosophy:**
- Primary: Near-Black `#111827` — absolute authority
- Accent: Cerulean Blue `#1B4F8A` — institutional blue, trust, sky
- Surface: Pure White `#FFFFFF` with `#F9FAFB` for alternating sections
- Gold: `#B8962E` — used sparingly for CTAs and highlights only
Emotional intent: The restraint of the palette communicates confidence — institutions that are truly excellent don't need to shout.

**Layout Paradigm:**
Full-width sections with centered max-width containers (1200px). Hero uses a split 60/40 layout — text left, photography right. Navigation is a single-level mega-menu that reveals a full-width panel with organized columns. Mobile uses a slide-in drawer.

**Signature Elements:**
1. Large typographic numbers (01, 02, 03) as section markers in light gray
2. A persistent thin top bar in deep navy with utility links
3. Program cards with a left-border accent in gold

**Interaction Philosophy:**
Hover states use color transitions rather than movement. The mega-menu reveals with a smooth height animation. Scroll-triggered animations are subtle fade-ins only.

**Animation:**
- Entrance: opacity 0→1 over 400ms, staggered by 100ms per element
- Mega-menu: max-height animation, 250ms ease
- Button hover: background color transition 150ms

**Typography System:**
- Headings: `Cormorant Garamond` — elegant, French-influenced serif
- Body: `DM Sans` — geometric, modern, highly readable
- Labels: `DM Sans` medium, uppercase, 0.1em letter-spacing

</idea>
<probability>0.07</probability>
</response>

<response>
<idea>

**Design Movement:** Bold Institutional Expressionism — the visual language of a new-generation Canadian institution that honors tradition while embracing ambition.

**Core Principles:**
1. Color as identity — the navy-gold palette is used boldly, not timidly
2. Editorial rhythm — alternating full-bleed and contained sections create visual music
3. Depth through layering — overlapping elements, cards that break grid lines
4. Bilingual pride — French phrases and typographic moments celebrate the language

**Color Philosophy:**
- Primary: Royal Navy `#0A1F44` — depth, prestige, Canadian institutional heritage
- Accent: Champagne Gold `#D4A843` — warmth, achievement, French joie de vivre
- Secondary: Forest Green `#1B5E3B` — Canada, nature, growth (used as tertiary accent)
- Surface: Warm Ivory `#FDF8F0` — welcoming, warm, non-clinical
Emotional intent: This palette feels like a Canadian institution that is proud of both its French heritage and its place in the multicultural landscape of BC.

**Layout Paradigm:**
Asymmetric editorial with intentional "breaks" — hero text overlaps the image boundary, stat blocks float over section transitions, program cards have staggered heights. The navigation uses a two-tier system with the top tier for audience segments and the bottom for content categories.

**Signature Elements:**
1. A "fleur-de-lis" inspired geometric motif used as a decorative element in section headers
2. Gold horizontal rules that span 40% of the container width — not full-width, creating tension
3. Program cards with a corner-fold effect in gold, evoking official documents

**Interaction Philosophy:**
Interactions feel like handling premium printed materials — deliberate, satisfying, tactile. Buttons have a subtle press effect. Cards have a paper-lift hover. The hero has a parallax scroll effect.

**Animation:**
- Hero: Parallax scroll on background image (20% speed differential)
- Cards: `perspective(1000px) rotateX(2deg)` on hover for a subtle 3D lift
- Section entrances: slide-in from left for text, fade-in for images, 500ms stagger
- Counter animations on stats section

**Typography System:**
- Display: `Libre Baskerville` — classic, authoritative, widely used in Canadian academia
- Body: `Nunito Sans` — friendly, readable, accessible
- Accent: `Libre Baskerville` italic for pull quotes and French phrases
- Hierarchy: 56px → 40px → 28px → 20px → 16px → 13px

</idea>
<probability>0.09</probability>
</response>

---

## Selected Design: Neo-Institutional Modernism (Response 1)

**Rationale:** This approach best mirrors the UBC/SFU reference aesthetic — deep navy authority, gold accents, Playfair Display headings, and an editorial grid that communicates institutional prestige. The asymmetric layout avoids the "AI slop" of centered purple-gradient designs, while the Swiss-influenced structure ensures the information architecture is clear and SEO-friendly.
