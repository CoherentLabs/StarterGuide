# Gameface UI
<!-- SOURCE FILES: recommended-tech-stack-overview.mdx, setting-up-the-gameface-stack.mdx -->
<!-- SOURCE URLS: https://gameface-ui.coherent-labs.com/getting-started/, https://gameface-ui.coherent-labs.com/getting-started/how-to-use/, https://gameface-ui.coherent-labs.com/getting-started/build-and-run/, https://gameface-ui.coherent-labs.com/concepts/template/, https://gameface-ui.coherent-labs.com/concepts/routing/, https://gameface-ui.coherent-labs.com/concepts/working-with-state/, https://gameface-ui.coherent-labs.com/concepts/slots/, https://gameface-ui.coherent-labs.com/concepts/setting-attributes/, https://gameface-ui.coherent-labs.com/components/ -->
<!-- STATUS: complete -->
<!-- LAST EXTRACTED: -->

---

---
[TOPIC: gameface-ui] [TYPE: concept] [SEVERITY: high] [SOURCE: recommended-tech-stack-overview.mdx]
## What is GamefaceUI?

GamefaceUI (v3.0.1) is Coherent Labs' official component library and project boilerplate for building Gameface UIs. It is built on **SolidJS** with **TypeScript** and **Vite**, and ships a curated set of pre-built, game-ready UI components organized into five categories: Basic, Feedback, Complex, Layout, and Media. It is the recommended starting point for any new Gameface UI project.

Source: [gameface-ui.coherent-labs.com](https://gameface-ui.coherent-labs.com/getting-started/)

---

---
[TOPIC: gameface-ui] [TYPE: concept] [SEVERITY: high] [SOURCE: recommended-tech-stack-overview.mdx]
## Recommended Tech Stack: SolidJS + Vite + SCSS + TypeScript

The Gameface-recommended production stack consists of:

- **SolidJS** - no Virtual DOM (direct fine-grained DOM updates), small bundle. No VDOM reconciliation means every engine-driven 60+ FPS state update costs only what changes.
- **Vite** - fast dev server with Hot Module Replacement (HMR); HMR reflects UI changes in the Gameface Player without a full reload.
- **SCSS + BEM** - CSS preprocessed at build time (zero runtime overhead), flat selectors via BEM naming.
- **TypeScript** - type safety for binding model contracts and component props.

---

---
[TOPIC: gameface-ui] [TYPE: pattern] [SEVERITY: high] [SOURCE: how-to-use]
## Bootstrapping a GamefaceUI Project

Two ways to start:

**Option 1 - Full boilerplate** (recommended for new projects):
```bash
npx degit CoherentLabs/Gameface-UI my-game-ui
cd my-game-ui
npm install
```

This downloads the complete boilerplate pre-configured with Vite, SolidJS, TypeScript, Vite plugins for Gameface, and all pre-built components.

**Option 2 - Components only** (for integrating into an existing SolidJS project):
```bash
mkdir components && cd components
npx degit CoherentLabs/Gameface-UI/src/components
```

---

---
[TOPIC: gameface-ui] [TYPE: pattern] [SEVERITY: high] [SOURCE: build-and-run]
## Build and Run: Dev Mode and Production

**Development (HMR enabled):**
```bash
npm run dev
# Starts server at http://localhost:3000
```
Load a specific view in the Player:
```
Player.exe --url=http://localhost:3000/hud/
```

**Production build:**
```bash
npm run build
# Output: dist/${viewName}/index.html
```
Each view in `src/views/` becomes a separate `dist/${viewName}/` directory with its own `index.html`. Load with:
```
Player.exe --url=coui://uiresources/hud/index.html
```

---

---
[TOPIC: gameface-ui] [TYPE: concept] [SEVERITY: high] [SOURCE: template]
## Project Directory Structure

The boilerplate organizes files as follows:

```
src/
  assets/                   ← fonts, images, SVGs
  components/
    Basic/                  ← Button, Checkbox, Dropdown, Slider, etc.
    Layout/                 ← Row, Column, Flex, Scroll, Tabs, etc.
    Media/                  ← Image, Icon, LiveView, MaskImage, etc.
    custom-components/      ← your own components
  views/
    hud/
      index.html
      index.css
      index.tsx
      Hud.tsx
      Hud.module.css
    menu/
      index.html
      index.css
      index.tsx
      Menu.tsx
      Menu.module.css
vite.config.mts
tsconfig.json
package.json
```

Each **View** in `src/views/` is a standalone Gameface HTML page with its own JS context. They are built independently into `dist/${viewName}/`.

---

---
[TOPIC: gameface-ui] [TYPE: pattern] [SEVERITY: high] [SOURCE: template]
## Creating a New View

To add a new Gameface View (e.g., an inventory screen), mirror the structure of the existing `hud` or `menu` views:

1. Create `src/views/inventory/`
2. Add `index.html`, `index.css`, `index.tsx`, and `Inventory.tsx`

The Vite config picks up all `src/views/*/index.html` files as entry points automatically. After `npm run build`, the view appears at `dist/inventory/index.html`.

---

---
[TOPIC: gameface-ui] [TYPE: concept] [SEVERITY: high] [SOURCE: components]
## Component Categories

GamefaceUI ships five component categories:

| Category | Components (selection) |
|---|---|
| **Basic** | Button, Checkbox, Dropdown, Slider, TextInput, ToggleButton, NumberInput, Pagination, Radio, Stepper |
| **Feedback** | Modal, Toast, Tooltip, ProgressBar, ProgressCircle |
| **Complex** | Carousel, ColorPicker, RadialMenu, Tutorial |
| **Layout** | Row, Column, Flex, Grid, Scroll, Tabs, Tab, TabLink, Absolute, Relative, Block, Layout, Layout3D |
| **Media** | Image, BackgroundImage, Icon, LiveView, MaskImage |
| **Utility** | Navigation |

Import components from `@components/<Category>/<Name>/<Name>`:
```typescript
import Button from '@components/Basic/Button/Button';
import Slider from '@components/Basic/Slider/Slider';
import Modal from '@components/Feedback/Modal/Modal';
import LiveView from '@components/Media/LiveView/LiveView';
```

---

---
[TOPIC: gameface-ui] [TYPE: example] [SEVERITY: medium] [SOURCE: components/basic/button]
## Button Component: Usage and Props

The `Button` component wraps a `<button>` element with Gameface-aware sizing and text fitting. Key props:

| Prop | Type | Default | Description |
|---|---|---|---|
| `size` | `'large' \| 'middle' \| 'small' \| ''` | `''` | Preset sizes. Empty string = size via `style`/`class` |
| `disabled` | `boolean` | `false` | Disables the button |
| `textFit` | `boolean` | `true` | Auto-fits text via `coh-font-fit-mode`. Set `false` to use custom `font-size` |
| `ref` | `HTMLButtonElement` | - | Access to the underlying DOM element |

```typescript
import Button from '@components/Basic/Button/Button';

const App = () => {
    let btnRef!: HTMLButtonElement;
    return (
        <>
            <Button size="large" disabled>Large disabled</Button>
            <Button size="middle">Normal button</Button>
            <Button textFit={false} style={{ 'font-size': '10px' }}>Custom font</Button>
            <Button ref={btnRef!} size="small">With ref</Button>
        </>
    );
};
```

---

---
[TOPIC: gameface-ui] [TYPE: concept] [SEVERITY: high] [SOURCE: concepts/working-with-state]
## SolidJS Reactivity: Working with Component State

GamefaceUI components expose state via two mechanisms:

**`ref` prop** - gives direct DOM/component access, but is `undefined` on first render and is not reactive. Use for imperative actions (e.g., calling a method on keypress), not for reactive conditions.

**`onChange` prop** - the correct pattern for reactive UI. Pass a `createSignal` setter; the component calls it whenever its value changes.

```typescript
import { createSignal, Show } from 'solid-js';
import ToggleButton from '@components/Basic/ToggleButton/ToggleButton';

const App = () => {
    const [isOn, setIsOn] = createSignal(false);
    return (
        <>
            <ToggleButton onChange={setIsOn} />
            <Show when={isOn()}>
                <div class="settings-expanded">...</div>
            </Show>
        </>
    );
};
```

**Rule:** Never read a `ref` inside a reactive condition (`<Show>`, `createMemo`). Refs are not signals - the condition will not re-evaluate when the ref becomes available.

---

---
[TOPIC: gameface-ui] [TYPE: concept] [SEVERITY: high] [SOURCE: concepts/routing]
## SPA Navigation: Routing Without SolidJS Router

Gameface does not support SolidJS's built-in router. GamefaceUI provides two alternatives:

**`State` component** - manual SPA navigation. You define all tab links and track the active state yourself. Use when you need full control over navigation logic and animations.

**`Tabs` / `Tab` / `TabLink` components** - higher-level solution that emulates router-like navigation. Simpler to set up and maintain; less customizable.

```typescript
import Tabs from '@components/Layout/Tabs/Tabs';
import Tab from '@components/Layout/Tab/Tab';
import TabLink from '@components/Layout/TabLink/TabLink';

const Menu = () => (
    <Tabs>
        <TabLink for="play">Play</TabLink>
        <TabLink for="settings">Settings</TabLink>
        <Tab id="play"><PlayScreen /></Tab>
        <Tab id="settings"><SettingsScreen /></Tab>
    </Tabs>
);
```

---

---
[TOPIC: gameface-ui] [TYPE: pattern] [SEVERITY: medium] [SOURCE: concepts/slots]
## Slot System: Customizing Component Internals

GamefaceUI components use a **slot pattern** built on `createTokenComponent` to allow content injection into specific positions within a component. Slots are accessed as sub-properties of the component (e.g., `Button.Icon`).

```typescript
import Button from '@components/Basic/Button/Button';

// Insert an SVG icon before the button label
const EquipButton = () => (
    <Button size="middle">
        <Button.Icon before>
            <svg width="16" height="16" viewBox="0 0 16 16">
                <path d="M4 8H12M12 8L8 4M12 8L8 12"
                      stroke="#fff" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </Button.Icon>
        Equip
    </Button>
);
```

Slots support conditional rendering via `createSignal`:
```typescript
const [showIcon, setShowIcon] = createSignal(true);
<Button>
    <Button.Icon before={showIcon()} />
    Confirm
</Button>
```

---

---
[TOPIC: gameface-ui] [TYPE: pattern] [SEVERITY: high] [SOURCE: concepts/setting-attributes]
## Passing Gameface data-bind-* Attributes to Components

GamefaceUI components do not forward arbitrary HTML attributes by default. To set non-prop attributes - including Gameface's `data-bind-*` binding attributes - use the `attr:*` prefix (SolidJS's attribute spread syntax):

```typescript
import Block from '@components/Layout/Block/Block';
import Button from '@components/Basic/Button/Button';

const App = () => (
    <>
        {/* Bind text content via engine model */}
        <Block attr:data-bind-value="{{PlayerModel.health}}">100</Block>

        {/* Bind a CSS class toggle */}
        <Button attr:data-bind-class-toggle="is-disabled: {{PlayerModel.isDead}}">
            Respawn
        </Button>
    </>
);
```

This is the bridge between GamefaceUI's SolidJS component system and Gameface's data-binding engine.

---

---

---
[TOPIC: gameface-ui] [TYPE: concept] [SEVERITY: info] [SOURCE: components index]
## GamefaceUI Component Index

Full API documentation for each component is in the referenced RAG files below. Format: **Component** - short description - source file.

### Basic Components (`09_1-components-basic.md`)

| Component | Description | RAG File |
|-----------|-------------|----------|
| `Accordion` | Collapsible section with toggleable heading and body | `09_1-components-basic.md` |
| `Button` | Standard button with preset sizes and text fitting | `09_1-components-basic.md` |
| `Checkbox` | Toggleable checkbox control | `09_1-components-basic.md` |
| `Dropdown` | Collapsible selector with keyboard/gamepad navigation | `09_1-components-basic.md` |
| `Dropdown.Options` | Individual option item within a Dropdown | `09_1-components-basic.md` |
| `InlineTextBlock` | Paragraph with cohinline for mixed inline content (icons, emoji) | `09_1-components-basic.md` |
| `Keybinds` | Container displaying a list of key binding entries | `09_1-components-basic.md` |
| `Keybind` | Single key binding entry showing label and key icon(s) | `09_1-components-basic.md` |
| `NumberInput` | Numeric input field with increment/decrement controls | `09_1-components-basic.md` |
| `Pagination` | Page navigation controls with previous/next and page indicators | `09_1-components-basic.md` |
| `PasswordInput` | Password text field with show/hide visibility toggle | `09_1-components-basic.md` |
| `Radio` | Mutually exclusive radio group container | `09_1-components-basic.md` |
| `Radio.Button` | Individual selectable option within a Radio group | `09_1-components-basic.md` |
| `RoundedButton` | Button variant with rounded/pill-shaped corners | `09_1-components-basic.md` |
| `Segment` | Mutually exclusive options with animated sliding selection indicator | `09_1-components-basic.md` |
| `Segment.Button` | Individual option within a Segment control | `09_1-components-basic.md` |
| `Slider` | Horizontal range slider for numeric values with min/max/step | `09_1-components-basic.md` |
| `State` | State-machine conditional renderer; SPA routing alternative | `09_1-components-basic.md` |
| `State.Match` | Single conditional branch rendered when `when` matches parent `State` value | `09_1-components-basic.md` |
| `Stepper` | Sequential option navigator with previous/next controls | `09_1-components-basic.md` |
| `Stepper.Items` | Container holding `Stepper.Item` option elements | `09_1-components-basic.md` |
| `TextBlock` | Simple paragraph wrapper for plain text content | `09_1-components-basic.md` |
| `TextInput` | Text input field with placeholder, disabled state, and change callback | `09_1-components-basic.md` |
| `TextSlider` | Slider cycling through a list of discrete string values | `09_1-components-basic.md` |
| `ToggleButton` | On/off toggle button for binary settings | `09_1-components-basic.md` |
| `XYSlider` | 2D coordinate input pad for X and Y axis values simultaneously | `09_1-components-basic.md` |

### Complex Components (`09_2-components-complex.md`)

| Component | Description | RAG File |
|-----------|-------------|----------|
| `Carousel` | Horizontally scrollable slides with navigation controls, pagination, and auto-play | `09_2-components-complex.md` |
| `ColorPicker` | Full color selection UI with hue, saturation, brightness, and optional alpha slider | `09_2-components-complex.md` |
| `RadialMenu` | Circular context menu optimized for gamepad thumbstick radial selection | `09_2-components-complex.md` |
| `Tutorial` | Guided step-by-step walkthrough with element highlighting and instructional overlays | `09_2-components-complex.md` |

### Feedback Components (`09_3-components-feedback.md`)

| Component | Description | RAG File |
|-----------|-------------|----------|
| `Modal` | Dialog overlay with header/body/footer structure; blocks background interaction | `09_3-components-feedback.md` |
| `ProgressBar` | Horizontal progress/fill indicator for loading, health, XP bars | `09_3-components-feedback.md` |
| `ProgressCircle` | Circular radial progress ring for cooldowns and circular indicators | `09_3-components-feedback.md` |
| `Toast` / `createToast` | Auto-dismissing notification messages rendered by a `<Toaster />` host | `09_3-components-feedback.md` |
| `Tooltip` / `createTooltip` | Contextual informational overlay triggered on hover, click, or focus | `09_3-components-feedback.md` |

### Layout Components (`09_4-components-layout.md`)

| Component | Description | RAG File |
|-----------|-------------|----------|
| `Absolute` | Absolutely positioned container wrapper | `09_4-components-layout.md` |
| `Block` | Generic block-level `div` container | `09_4-components-layout.md` |
| `Bottom` | Bottom section wrapper for `Layout`; height controlled via `flex-basis` percentage | `09_4-components-layout.md` |
| `Column` | Column in the 12-column grid system with `span` and `offset` | `09_4-components-layout.md` |
| `Content` | Main content area that fills remaining space between `Top` and `Bottom` | `09_4-components-layout.md` |
| `Flex` | Flexbox container with convenience props for direction, justify, align, gap | `09_4-components-layout.md` |
| `Grid` | 12-column flexbox-based grid container (uses flexbox internally, not CSS grid) | `09_4-components-layout.md` |
| `GridTile` | Grid child element with `span` and `offset` column placement | `09_4-components-layout.md` |
| `Layout` | Top-level full-page flex column container; root wrapper for a view | `09_4-components-layout.md` |
| `Layout3D` | 3D perspective context container enabling `preserve-3d` and CSS 3D transforms | `09_4-components-layout.md` |
| `List` | Structured `ul`/`ol` list container | `09_4-components-layout.md` |
| `List.Item` | Single `li` entry within a `List` | `09_4-components-layout.md` |
| `Relative` | Relatively positioned container providing a positioning context for absolute children | `09_4-components-layout.md` |
| `Row` | Horizontal flex row container for `Column` grid children | `09_4-components-layout.md` |
| `Scroll` | Scrollable overflow container with custom-styled scrollbar | `09_4-components-layout.md` |
| `Tab` | Content panel that renders when its `location` matches the active `Tabs` state | `09_4-components-layout.md` |
| `TabLink` | Clickable trigger that activates a `Tab` by matching `location` | `09_4-components-layout.md` |
| `Tabs` | Tab state manager container; manages active tab and provides context to `Tab`/`TabLink` | `09_4-components-layout.md` |
| `Top` | Top section wrapper for `Layout`; height controlled via `flex-basis` percentage | `09_4-components-layout.md` |
| `Transform` | CSS transform wrapper for translate, rotate, scale, skew with `transform-origin` | `09_4-components-layout.md` |

### Media Components (`09_5-components-media.md`)

| Component | Description | RAG File |
|-----------|-------------|----------|
| `BackgroundImage` | Container with CSS background-image supporting size, repeat, and position options | `09_5-components-media.md` |
| `Icon` | Auto-generated dot-notation icon component tree mirroring the `src/assets/icons/` folder | `09_5-components-media.md` |
| `Image` | `<img>` element wrapper for imported asset files with optional fill mode | `09_5-components-media.md` |
| `LiveView` | Embeds an engine-rendered texture (minimap, camera feed, 3D scene) into the HTML UI | `09_5-components-media.md` |
| `MaskImage` | Container with CSS mask-image applied over children; content visible through opaque mask regions | `09_5-components-media.md` |

### Utility Components (`09_6-components-utility.md`)

| Component | Description | RAG File |
|-----------|-------------|----------|
| `Navigation` | Full keyboard/gamepad input handling and spatial navigation system with action mapping | `09_6-components-utility.md` |
| `Navigation.Area` | Defines a spatially navigable UI region; auto-registers with the spatial nav system on mount | `09_6-components-utility.md` |

---

---
[TOPIC: gameface-ui] [TYPE: concept] [SEVERITY: medium] [SOURCE: setting-up-the-gameface-stack.mdx]
## SolidJS Fine-Grained Reactivity: Why It Fits Game UIs

SolidJS uses **signals** - reactive primitives that update only the exact DOM node that reads them. When `playerHealth()` changes, only the single `<div>` bound to that signal re-renders. React/Vue VDOM reconcilers diff the entire component subtree on every state change.

For game HUDs with 60+ FPS data updates (health, ammo, minimap coordinates), the absence of VDOM diffing is a concrete frame-time saving:

```typescript
import { createSignal } from 'solid-js';

const [health, setHealth] = createSignal(100);
engine.on('HealthChanged', (v: number) => setHealth(v));

// Only this element updates when health changes - nothing else re-renders
const HealthBar = () => (
    <div class="health-fill" style={{ width: `${health()}%` }} />
);
```

---
