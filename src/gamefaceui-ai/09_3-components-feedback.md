# GamefaceUI Feedback Components
<!-- SOURCE: https://gameface-ui.coherent-labs.com/components/ -->
<!-- EXTRACTED: 2026-06-05 -->
<!-- METHOD: live-fetch - content sourced directly from docs site -->
<!-- STATUS: verified -->
<!-- PAGES FETCHED: https://gameface-ui.coherent-labs.com/components/feedback/modal/, https://gameface-ui.coherent-labs.com/components/feedback/progress-bar/, https://gameface-ui.coherent-labs.com/components/feedback/progress-circle/, https://gameface-ui.coherent-labs.com/components/feedback/toast/, https://gameface-ui.coherent-labs.com/components/feedback/tooltip/ -->
<!-- PAGES FAILED: none -->

---
[TOPIC: gameface-ui-components]
[TYPE: api]
[SEVERITY: high]
[STATUS: verified]
[VERIFIED-BY: live-fetch]
[SOURCE: https://gameface-ui.coherent-labs.com/components/feedback/modal/]

## Modal: Props and Usage

The `Modal` component is used to create modal windows that temporarily interrupt the user's interaction with the app.

**Import:**
```typescript
import Modal from '@components/Feedback/Modal/Modal';
```

**Named exports:**
```typescript
import Modal, { ModalRef } from '@components/Feedback/Modal/Modal';
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `style` | `JSX.CSSProperties` | `{}` | Inline styles to apply directly to the component's root element. |
| `class` | `string` | `""` | Additional CSS classes to apply to the component. |
| `ref` | `ModalRef \| undefined` | `undefined` | A reference to the Modal component, providing access to its methods and underlying HTML element. |
| `open` | `boolean` | `false` | Controls whether the modal is visible. |
| `onClose` | `() => void` | `undefined` | Callback invoked when the modal is closed. |
| `onOpen` | `() => void` | `undefined` | Callback invoked when the modal is opened. |

**Ref API - Methods:**
| Method | Parameters | Return | Description |
|--------|------------|--------|-------------|
| `isOpen` | None | `boolean` | Returns whether the modal is currently open. |

**Sub-components:**

### Modal.Overlay
**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `style` | `JSX.CSSProperties` | `{}` | Inline styles to apply directly to the overlay element. |
| `class` | `string` | `""` | Additional CSS classes to apply to the overlay element. |
| `closeOnClick` | `boolean` | `false` | When set to `true`, clicking the overlay will close the modal. |

### Modal.Window
**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `style` | `JSX.CSSProperties` | `{}` | Inline styles to apply directly to the window element. |
| `class` | `string` | `""` | Additional CSS classes to apply to the window element. |
| `children` | `JSX.Element` | `""` | Content to render inside the modal window. |

### Modal.Close
**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `style` | `JSX.CSSProperties` | `{}` | Inline styles to apply directly to the close button element. |
| `class` | `string` | `""` | Additional CSS classes to apply to the close button element. |
| `children` | `JSX.Element` | `""` | Custom content to render inside the close button. |

**Minimal example:**
```typescript
import Modal from '@components/Feedback/Modal/Modal';import { createSignal } from 'solid-js';const App = () => {    const [open, setOpen] = createSignal(false);    return (        <>            <button onClick={() => setOpen(true)}>Open Modal</button>            <Modal open={open()} onClose={() => setOpen(false)}>                <Modal.Overlay closeOnClick />                <Modal.Window>                    <h2>Modal Title</h2>                    <p>Modal Content</p>                    <Modal.Close>X</Modal.Close>                </Modal.Window>            </Modal>        </>    );};export default App;
```

---
[TOPIC: gameface-ui-components]
[TYPE: api]
[SEVERITY: high]
[STATUS: verified]
[VERIFIED-BY: live-fetch]
[SOURCE: https://gameface-ui.coherent-labs.com/components/feedback/progress-bar/]

## Progress.Bar: Props and Usage

The `Progress.Bar` component provides a linear progress indicator, representing completion status as a horizontal bar.

> ⚠️ The import is `Progress` (not `ProgressBar`). Use it as `<Progress.Bar ... />`.

**Import:**
```typescript
import Progress from '@components/Feedback/Progress/Progress';
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `style` | `JSX.CSSProperties` | `{}` | Inline styles to apply directly to the component's root element. |
| `class` | `string` | `""` | Additional CSS classes to apply to the component. |
| `ref` | `HTMLDivElement \| undefined` | `undefined` | Retrieves the component's DOM element and assigns it to a variable. |
| `progress` | `number` | `0` | The current progress value, between 0 and 100. |
| `animated` | `boolean` | `false` | When set to `true`, the bar will animate between progress updates. |

**Sub-components:**

### Progress.Bar.Fill
**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `style` | `JSX.CSSProperties` | `{}` | Inline styles to apply directly to the fill element. |
| `class` | `string` | `""` | Additional CSS classes to apply to the fill element. |
| `children` | `JSX.Element` | `""` | Content to render inside the fill element. |

**Minimal example:**
```typescript
import Progress from '@components/Feedback/Progress/Progress';const App = () => {    return (        <Progress.Bar progress={75} />    );};export default App;
```

---
[TOPIC: gameface-ui-components]
[TYPE: api]
[SEVERITY: high]
[STATUS: verified]
[VERIFIED-BY: live-fetch]
[SOURCE: https://gameface-ui.coherent-labs.com/components/feedback/progress-circle/]

## Progress.Circle: Props and Usage

The `Progress.Circle` component provides a circular progress indicator, representing completion status as a circle that fills progressively.

> ⚠️ The import is `Progress` (not `ProgressCircle`). Use it as `<Progress.Circle ... />`.

**Import:**
```typescript
import Progress from '@components/Feedback/Progress/Progress';
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `style` | `JSX.CSSProperties` | `{}` | Inline styles to apply directly to the component's root element. |
| `class` | `string` | `""` | Additional CSS classes to apply to the component. |
| `ref` | `HTMLDivElement \| undefined` | `undefined` | Retrieves the component's DOM element and assigns it to a variable. |
| `progress` | `number` | `0` | The current progress value, between 0 and 100. |
| `animated` | `boolean` | `false` | When set to `true`, the circle will animate between progress updates. |
| `thickness` | `number` | `10` | The thickness of the progress ring in pixels. |

**Minimal example:**
```typescript
import Progress from '@components/Feedback/Progress/Progress';const App = () => {    return (        <Progress.Circle progress={75} thickness={8} />    );};export default App;
```

---
[TOPIC: gameface-ui-components]
[TYPE: api]
[SEVERITY: high]
[STATUS: verified]
[VERIFIED-BY: live-fetch]
[SOURCE: https://gameface-ui.coherent-labs.com/components/feedback/toast/]

## Toast: Props and Usage

The `Toast` component provides temporary notification messages that appear and automatically disappear after a set duration.

**Import:**
```typescript
import { useToast } from '@components/Feedback/Toast/toast';
```

**Named exports:**
```typescript
import { useToast, ToastOptions } from '@components/Feedback/Toast/toast';
```

**Usage pattern:**

The `Toast` system uses a hook-based API. `useToast()` returns a tuple of `[Toaster, createToast]`.

- `Toaster` - A component that renders the toast container. Mount it once in your app.
- `createToast(options: ToastOptions, body?: (helpers: { close: () => void, progress: number, dismiss: () => void }) => JSX.Element)` - A function to trigger a new toast.

**ToastOptions properties:**
| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `duration` | `number` | `3000` | Duration in milliseconds before the toast automatically closes. |
| `position` | `'top-left' \| 'top-right' \| 'bottom-left' \| 'bottom-right' \| 'top-center' \| 'bottom-center'` | `'bottom-right'` | Position of the toast on the screen. |
| `type` | `'success' \| 'error' \| 'warning' \| 'info'` | `undefined` | Type of toast for semantic styling. |
| `dismissible` | `boolean` | `true` | Whether the toast can be dismissed by the user. |

**Minimal example:**
```typescript
import { useToast } from '@components/Feedback/Toast/toast';const [Toaster, createToast] = useToast();const App = () => {    const showToast = () => {        createToast({ duration: 3000, position: 'top-right', type: 'success' }, ({ close, progress }) => (            <div>                <p>Operation successful!</p>                <button onClick={close}>Close</button>            </div>        ));    };    return (        <>            <Toaster />            <button onClick={showToast}>Show Toast</button>        </>    );};export default App;
```

---
[TOPIC: gameface-ui-components]
[TYPE: api]
[SEVERITY: high]
[STATUS: verified]
[VERIFIED-BY: live-fetch]
[SOURCE: https://gameface-ui.coherent-labs.com/components/feedback/tooltip/]

## Tooltip: Props and Usage

The `Tooltip` component displays contextual information when a user hovers over or focuses an element.

**Import:**
```typescript
import { createTooltip } from '@components/Feedback/Tooltip/tooltip';
```

**Named exports:**
```typescript
import { createTooltip, TooltipRef, TooltipOptions } from '@components/Feedback/Tooltip/tooltip';
```

**Usage pattern:**

The `Tooltip` system uses a factory function. `createTooltip(options: TooltipOptions)` returns `[TooltipComponent, tooltipRef]`.

- `TooltipComponent` - The JSX element to render the tooltip trigger and content.
- `tooltipRef` - Provides programmatic access to `show()` and `hide()`.

**TooltipOptions properties:**
| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `position` | `'top' \| 'bottom' \| 'left' \| 'right'` | `'top'` | Position of the tooltip relative to its target element. |
| `showDelay` | `number` | `0` | Delay in milliseconds before the tooltip appears. |
| `hideDelay` | `number` | `0` | Delay in milliseconds before the tooltip disappears. |
| `trigger` | `'hover' \| 'focus' \| 'click'` | `'hover'` | The user interaction that shows the tooltip. |

**Ref API - Methods (TooltipRef):**
| Method | Parameters | Return | Description |
|--------|------------|--------|-------------|
| `show` | None | `void` | Programmatically shows the tooltip. |
| `hide` | None | `void` | Programmatically hides the tooltip. |

**Minimal example:**
```typescript
import { createTooltip } from '@components/Feedback/Tooltip/tooltip';const [Tooltip, tooltipRef] = createTooltip({ position: 'top' });const App = () => {    return (        <Tooltip>            <button>Hover me</button>            <Tooltip.Content>This is a tooltip</Tooltip.Content>        </Tooltip>    );};export default App;
```

---
