# GamefaceUI Media Components
<!-- SOURCE: https://gameface-ui.coherent-labs.com/components/ -->
<!-- EXTRACTED: 2026-06-05 -->
<!-- METHOD: live-fetch - content sourced directly from docs site -->
<!-- STATUS: partial -->
<!-- PAGES FETCHED: https://gameface-ui.coherent-labs.com/components/media/background-image/, https://gameface-ui.coherent-labs.com/components/media/icon/, https://gameface-ui.coherent-labs.com/components/media/image/, https://gameface-ui.coherent-labs.com/components/media/live-view/, https://gameface-ui.coherent-labs.com/components/media/mask-image/ -->
<!-- PAGES FAILED: none -->

---
[TOPIC: gameface-ui-components]
[TYPE: api]
[SEVERITY: high]
[STATUS: verified]
[VERIFIED-BY: live-fetch]
[SOURCE: https://gameface-ui.coherent-labs.com/components/media/background-image/]

## BackgroundImage: Props and Usage

The `BackgroundImage` component renders a `div` element with a CSS background-image, providing control over background properties such as size and position.

**Import:**
```typescript
import BackgroundImage from '@components/Media/BackgroundImage/BackgroundImage';
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `style` | `JSX.CSSProperties` | `{}` | Inline styles to apply directly to the component's root element. |
| `class` | `string` | `""` | Additional CSS classes to apply to the component. |
| `ref` | `HTMLDivElement \| undefined` | `undefined` | Retrieves the component's DOM element. |
| `src` | `string` | `undefined` | The URL or path to the background image. |
| `fill` | `boolean` | `false` | When `true`, the image will cover the entire container (`background-size: cover`). |

**Minimal example:**
```typescript
import BackgroundImage from '@components/Media/BackgroundImage/BackgroundImage';const App = () => {    return (        <BackgroundImage src="./assets/background.png" fill style={{ width: '100%', height: '300px' }} />    );};export default App;
```

---
[TOPIC: gameface-ui-components]
[TYPE: api]
[SEVERITY: high]
[STATUS: verified]
[VERIFIED-BY: live-fetch]
[SOURCE: https://gameface-ui.coherent-labs.com/components/media/icon/]

## Icon: Props and Usage

The `Icon` component renders SVG icons from your project's icon directory, providing a type-safe way to use icons throughout the UI.

**Import:**
```typescript
import Icon from '@components/Media/Icon/Icon';
```

> ⚠️ The `Icon` component is auto-generated based on the contents of `src/assets/icons`. Each `.svg` file in that directory becomes a named property accessible as `Icon.{Name}`. The component must be regenerated when new icons are added.

**Props (Icon.{Name}):**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `style` | `JSX.CSSProperties` | `{}` | Inline styles to apply directly to the SVG element. |
| `class` | `string` | `""` | Additional CSS classes to apply to the SVG element. |
| `ref` | `SVGElement \| undefined` | `undefined` | Retrieves the SVG DOM element. |

**Minimal example:**
```typescript
import Icon from '@components/Media/Icon/Icon';const App = () => {    return (        <Icon.Settings />    );};export default App;
```

---
[TOPIC: gameface-ui-components]
[TYPE: api]
[SEVERITY: high]
[STATUS: verified]
[VERIFIED-BY: live-fetch]
[SOURCE: https://gameface-ui.coherent-labs.com/components/media/image/]

## Image: Props and Usage

The `Image` component renders an HTML `img` element for displaying raster images.

**Import:**
```typescript
import Image from '@components/Media/Image/Image';
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `style` | `JSX.CSSProperties` | `{}` | Inline styles to apply directly to the component's root element. |
| `class` | `string` | `""` | Additional CSS classes to apply to the component. |
| `ref` | `HTMLImageElement \| undefined` | `undefined` | Retrieves the component's DOM element. |
| `src` | `string` | `undefined` | The URL or path to the image. |
| `fill` | `boolean` | `false` | When `true`, the image will fill its container (`width: 100%; height: 100%; object-fit: cover`). |

**Minimal example:**
```typescript
import Image from '@components/Media/Image/Image';const App = () => {    return (        <Image src="./assets/hero.png" style={{ width: '200px', height: '150px' }} />    );};export default App;
```

---
[TOPIC: gameface-ui-components]
[TYPE: api]
[SEVERITY: high]
[STATUS: NEEDS-VERIFICATION]
[MISSING: props table]
[VERIFIED-BY: live-fetch]
[SOURCE: https://gameface-ui.coherent-labs.com/components/media/live-view/]

## LiveView: Props and Usage

The `LiveView` component renders an engine-provided texture (a live view) in the UI using the `<live-view>` custom element.

**Import:**
```typescript
import LiveView from '@components/Media/LiveView/LiveView';
```

> 🚫 PARTIAL - The following were not found on the docs page and have been omitted:
> - Formal Props table (no API table was rendered on the fetched page)
> Do NOT fill these from training data. Leave for human verification.

**Minimal example:**
```typescript
import LiveView from '@components/Media/LiveView/LiveView';const App = () => {    return (        <LiveView src="engine://my-view" style={{ width: '400px', height: '300px' }} />    );};export default App;
```

---
[TOPIC: gameface-ui-components]
[TYPE: api]
[SEVERITY: high]
[STATUS: verified]
[VERIFIED-BY: live-fetch]
[SOURCE: https://gameface-ui.coherent-labs.com/components/media/mask-image/]

## MaskImage: Props and Usage

The `MaskImage` component renders a `div` element with a CSS mask-image applied, allowing shapes or images to be used as masks over content.

**Import:**
```typescript
import MaskImage from '@components/Media/MaskImage/MaskImage';
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `style` | `JSX.CSSProperties` | `{}` | Inline styles to apply directly to the component's root element. |
| `class` | `string` | `""` | Additional CSS classes to apply to the component. |
| `ref` | `HTMLDivElement \| undefined` | `undefined` | Retrieves the component's DOM element. |
| `src` | `string` | `undefined` | The URL or path to the mask image. |
| `fill` | `boolean` | `false` | When `true`, the mask image will cover the entire container. |

**Minimal example:**
```typescript
import MaskImage from '@components/Media/MaskImage/MaskImage';const App = () => {    return (        <MaskImage src="./assets/mask.png" fill style={{ width: '200px', height: '200px' }}>            <div style={{ background: 'red', width: '100%', height: '100%' }} />        </MaskImage>    );};export default App;
```

---
