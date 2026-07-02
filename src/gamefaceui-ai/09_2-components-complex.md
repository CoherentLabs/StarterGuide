# GamefaceUI Complex Components
<!-- SOURCE: https://gameface-ui.coherent-labs.com/components/ -->
<!-- EXTRACTED: 2026-06-05 -->
<!-- METHOD: live-fetch - content sourced directly from docs site -->
<!-- STATUS: verified -->
<!-- PAGES FETCHED: https://gameface-ui.coherent-labs.com/components/complex/carousel/, https://gameface-ui.coherent-labs.com/components/complex/color-picker/, https://gameface-ui.coherent-labs.com/components/complex/radial-menu/, https://gameface-ui.coherent-labs.com/components/complex/tutorial/ -->
<!-- PAGES FAILED: none -->

---
[TOPIC: gameface-ui-components]
[TYPE: api]
[SEVERITY: high]
[STATUS: verified]
[VERIFIED-BY: live-fetch]
[SOURCE: https://gameface-ui.coherent-labs.com/components/complex/carousel/]

## Carousel: Props and Usage

The `Carousel` component is a rotating display of items that allows users to scroll through a series of images, cards, or other content.

**Import:**
```typescript
import Carousel from '@components/Complex/Carousel/Carousel';
```

**Named exports:**
```typescript
import Carousel, { CarouselRef } from '@components/Complex/Carousel/Carousel';
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `style` | `JSX.CSSProperties` | `{}` | Inline styles to apply directly to the component's root element. |
| `class` | `string` | `""` | Additional CSS classes to apply to the component. |
| `ref` | `CarouselRef \| undefined` | `undefined` | A reference to the Carousel, providing access to its methods and underlying HTML element. |
| `loop` | `boolean` | `false` | Enables looping through items when navigating past the first or last item. |
| `autoplay` | `boolean` | `false` | When set to `true`, the carousel will automatically navigate to the next item at a set interval. |
| `autoplayInterval` | `number` | `3000` | The interval (in milliseconds) between auto-navigation actions when `autoplay` is enabled. |
| `onChange` | `(index: number) => void` | `undefined` | Callback function triggered whenever the selected item changes, providing the new index. |
| `onAction` | `Record<string, (scope?: string, ...args: any[]) => void>` | `undefined` | Extends or overrides the component's default navigation action handlers. |
| `anchor` | `string \| HTMLElement` | `undefined` | Links navigation to another element. |

**Ref API - Properties:**
| Property | Type | Description |
|----------|------|-------------|
| `element` | `HTMLDivElement` | A reference to the carousel's root HTML element. |
| `currentIndex` | `Accessor<number>` | The current index of the carousel item. |

**Ref API - Methods:**
| Method | Parameters | Return | Description |
|--------|------------|--------|-------------|
| `next` | None | `void` | Navigate to the next item. |
| `prev` | None | `void` | Navigate to the previous item. |
| `goToIndex` | `index: number` | `void` | Navigate to the item at the specified index. |

**Sub-components:**

### Carousel.Items
**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `style` | `JSX.CSSProperties` | `{}` | Inline styles to apply directly to the items wrapper. |
| `class` | `string` | `""` | Additional CSS classes for the items wrapper. |
| `children` | `JSX.Element` | `""` | The content of the `Carousel.Items` should include all the `Carousel.Item` slots. |

### Carousel.Item
**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `style` | `JSX.CSSProperties` | `{}` | Inline styles to apply directly to the item. |
| `class` | `string` | `""` | Additional CSS classes for the item. |
| `children` | `JSX.Element` | `""` | Content to render inside the carousel item. |
| `selected-class` | `string` | `""` | CSS class applied when the item is the currently selected one. |

### Carousel.Pagination
**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `style` | `JSX.CSSProperties` | `{}` | Inline styles to apply directly to the pagination container. |
| `class` | `string` | `""` | Additional CSS classes for the pagination container. |
| `item-class` | `string` | `""` | CSS class applied to each pagination indicator. |
| `selected-class` | `string` | `""` | CSS class applied to the currently active pagination indicator. |

### Carousel.Next
**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `style` | `JSX.CSSProperties` | `{}` | Inline styles for the next navigation control. |
| `class` | `string` | `""` | Additional CSS classes for the next navigation control. |
| `children` | `JSX.Element` | `""` | Custom content to replace the default arrow. |
| `hidden-class` | `string` | `""` | CSS class to apply when the control is hidden. |

### Carousel.Prev
**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `style` | `JSX.CSSProperties` | `{}` | Inline styles for the previous navigation control. |
| `class` | `string` | `""` | Additional CSS classes for the previous navigation control. |
| `children` | `JSX.Element` | `""` | Custom content to replace the default arrow. |
| `hidden-class` | `string` | `""` | CSS class to apply when the control is hidden. |

**Implemented Navigation Actions:**
| Action Name | Behavior |
|-------------|----------|
| `move-left` | Navigates to the previous carousel item |
| `move-right` | Navigates to the next carousel item |

**Minimal example:**
```typescript
import Carousel from '@components/Complex/Carousel/Carousel';const App = () => {    return (        <Carousel loop>            <Carousel.Prev />            <Carousel.Items>                <Carousel.Item>Item 1</Carousel.Item>                <Carousel.Item>Item 2</Carousel.Item>                <Carousel.Item>Item 3</Carousel.Item>            </Carousel.Items>            <Carousel.Next />            <Carousel.Pagination />        </Carousel>    );};export default App;
```

---
[TOPIC: gameface-ui-components]
[TYPE: api]
[SEVERITY: high]
[STATUS: verified]
[VERIFIED-BY: live-fetch]
[SOURCE: https://gameface-ui.coherent-labs.com/components/complex/color-picker/]

## ColorPicker: Props and Usage

The `ColorPicker` component is a UI element that allows users to select a color from a visual spectrum.

**Import:**
```typescript
import ColorPicker from '@components/Complex/ColorPicker/ColorPicker';
```

**Named exports:**
```typescript
import ColorPicker, { ColorPickerRef, ColorData } from '@components/Complex/ColorPicker/ColorPicker';
import { hslToHex, hexToHsl, hslToRgb, rgbToHex, hexToRgb } from '@components/Complex/ColorPicker/colorPickerUtils';
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `style` | `JSX.CSSProperties` | `{}` | Inline styles to apply directly to the component's root element. |
| `class` | `string` | `""` | Additional CSS classes to apply to the component. |
| `ref` | `ColorPickerRef \| undefined` | `undefined` | A reference to the ColorPicker, providing access to its methods and underlying HTML element. |
| `initialColor` | `string` | `"#ff0000"` | The initial color value in hexadecimal format. |
| `onChange` | `(colorData: ColorData) => void` | `undefined` | Callback function called whenever the color changes, with details about the new color in `ColorData` format. |

**Ref API - Properties:**
| Property | Type | Description |
|----------|------|-------------|
| `element` | `HTMLDivElement` | A reference to the ColorPicker's root HTML element. |
| `currentColor` | `Accessor<ColorData>` | The current color selected by the user. |

**Ref API - Methods:**
| Method | Parameters | Return | Description |
|--------|------------|--------|-------------|
| `setColor` | `hex: string` | `void` | Programmatically sets the color using a hexadecimal string. |

**Minimal example:**
```typescript
import ColorPicker from '@components/Complex/ColorPicker/ColorPicker';const App = () => {    return (        <ColorPicker initialColor="#ff0000" onChange={(colorData) => console.log(colorData)} />    );};export default App;
```

---
[TOPIC: gameface-ui-components]
[TYPE: api]
[SEVERITY: high]
[STATUS: verified]
[VERIFIED-BY: live-fetch]
[SOURCE: https://gameface-ui.coherent-labs.com/components/complex/radial-menu/]

## RadialMenu: Props and Usage

The `RadialMenu` component is a circular navigation interface that allows users to select from a set of options arranged radially.

**Import:**
```typescript
import RadialMenu from '@components/Complex/RadialMenu/RadialMenu';
```

**Named exports:**
```typescript
import RadialMenu, { RadialMenuRef } from '@components/Complex/RadialMenu/RadialMenu';
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `style` | `JSX.CSSProperties` | `{}` | Inline styles to apply directly to the component's root element. |
| `class` | `string` | `""` | Additional CSS classes to apply to the component. |
| `ref` | `RadialMenuRef \| undefined` | `undefined` | A reference to the RadialMenu, providing access to its methods and underlying HTML element. |
| `items` | `number` | `undefined` | Number of items to display in the radial menu. |
| `open` | `boolean` | `false` | Controls whether the radial menu is open or closed. |
| `onChange` | `(index: number) => void` | `undefined` | Callback function triggered whenever the selected item changes. |
| `onAction` | `Record<string, (scope?: string, ...args: any[]) => void>` | `undefined` | Extends or overrides the component's default navigation action handlers. |
| `anchor` | `string \| HTMLElement` | `undefined` | Links navigation to another element. |

**Ref API - Properties:**
| Property | Type | Description |
|----------|------|-------------|
| `element` | `HTMLDivElement` | A reference to the RadialMenu's root HTML element. |
| `selectedIndex` | `Accessor<number>` | The index of the currently selected item. |
| `isOpen` | `Accessor<boolean>` | Whether the menu is currently open. |

**Ref API - Methods:**
| Method | Parameters | Return | Description |
|--------|------------|--------|-------------|
| `openMenu` | None | `void` | Programmatically opens the radial menu. |
| `closeMenu` | None | `void` | Programmatically closes the radial menu. |
| `selectItem` | `index: number` | `void` | Programmatically selects an item by index. |

**Sub-components:**

### RadialMenu.Item
**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `style` | `JSX.CSSProperties` | `{}` | Inline styles for the radial menu item. |
| `class` | `string` | `""` | Additional CSS classes for the item. |
| `children` | `JSX.Element` | `""` | Content to render inside the item. |
| `selected-class` | `string` | `""` | CSS class applied to the selected item. |

### RadialMenu.Selector
**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `style` | `JSX.CSSProperties` | `{}` | Inline styles for the selector element. |
| `class` | `string` | `""` | Additional CSS classes for the selector element. |

### RadialMenu.Content
**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `style` | `JSX.CSSProperties` | `{}` | Inline styles for the content element. |
| `class` | `string` | `""` | Additional CSS classes for the content element. |
| `children` | `JSX.Element` | `""` | Content to render inside the central content area. |

### RadialMenu.Indicator
**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `style` | `JSX.CSSProperties` | `{}` | Inline styles for the indicator element. |
| `class` | `string` | `""` | Additional CSS classes for the indicator element. |

### RadialMenu.Icon
**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `style` | `JSX.CSSProperties` | `{}` | Inline styles for the icon element. |
| `class` | `string` | `""` | Additional CSS classes for the icon element. |
| `children` | `JSX.Element` | `""` | Content to render as the item's icon. |

**Implemented Navigation Actions:**
| Action Name | Behavior |
|-------------|----------|
| `pan` | Moves the radial menu selector based on 2D joystick input |

**Minimal example:**
```typescript
import RadialMenu from '@components/Complex/RadialMenu/RadialMenu';const App = () => {    return (        <RadialMenu items={8} open>            <RadialMenu.Item>                <RadialMenu.Icon>🗡️</RadialMenu.Icon>            </RadialMenu.Item>            <RadialMenu.Item>                <RadialMenu.Icon>🛡️</RadialMenu.Icon>            </RadialMenu.Item>            <RadialMenu.Content>            </RadialMenu.Content>            <RadialMenu.Selector />        </RadialMenu>    );};export default App;
```

---
[TOPIC: gameface-ui-components]
[TYPE: api]
[SEVERITY: high]
[STATUS: verified]
[VERIFIED-BY: live-fetch]
[SOURCE: https://gameface-ui.coherent-labs.com/components/complex/tutorial/]

## Tutorial: Props and Usage

The `Tutorial` component enables step-by-step tutorials and tours that guide users through your UI.

**Import:**
```typescript
import Tutorial from '@components/Complex/Tutorial/Tutorial';
```

**Named exports:**
```typescript
import Tutorial, { TutorialRef } from '@components/Complex/Tutorial/Tutorial';
import { TooltipType } from '@components/Complex/Tutorial/TutorialTooltip';
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `style` | `JSX.CSSProperties` | `{}` | Inline styles to apply directly to the component's root element. |
| `class` | `string` | `""` | Additional CSS classes to apply to the component. |
| `ref` | `TutorialRef \| undefined` | `undefined` | A reference to the Tutorial component, providing access to its methods and underlying HTML element. |
| `outset` | `number` | `20` | The offset (in pixels) between the highlighted element and the overlay cutout. |
| `tooltip` | `TooltipType` | `"top"` | The default position of the tooltip relative to the highlighted element. |
| `onStart` | `() => void` | `undefined` | Callback invoked when the tutorial starts. |
| `onEnd` | `() => void` | `undefined` | Callback invoked when the tutorial ends (either by completion or by exit). |

**Ref API - Methods:**
| Method | Parameters | Return | Description |
|--------|------------|--------|-------------|
| `tour` | None | `void` | Starts the tutorial from the first step. |
| `exit` | None | `void` | Exits the tutorial and resets the state. |
| `next` | None | `void` | Advances the tutorial to the next step. |
| `previous` | None | `void` | Returns to the previous step. |
| `pause` | None | `void` | Pauses the tutorial, freezing the current state. |
| `resume` | None | `void` | Resumes the tutorial from the paused state. |
| `changeStep` | `step: number` | `void` | Jumps directly to the specified step (0-based index). |

**Sub-components:**

### Tutorial.Step
**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `target` | `string` | `undefined` | A CSS selector for the element that the step should highlight. |
| `tooltip` | `TooltipType` | `undefined` | The position of the tooltip for this specific step. Overrides the global `tooltip` prop. |
| `children` | `JSX.Element` | `""` | Content to render inside the tooltip for this step. |

**Minimal example:**
```typescript
import Tutorial, { TutorialRef } from '@components/Complex/Tutorial/Tutorial';const App = () => {    let ref: TutorialRef | undefined;    return (        <>            <button id="settings-button">Settings</button>            <button id="play-button">Play</button>            <Tutorial ref={ref} outset={10} onStart={() => console.log('Tutorial started')} onEnd={() => console.log('Tutorial ended')}>                <Tutorial.Step target="#settings-button" tooltip="bottom">                    This is the settings button                </Tutorial.Step>                <Tutorial.Step target="#play-button" tooltip="top">                    Click this to start playing                </Tutorial.Step>            </Tutorial>            <button onClick={() => ref?.tour()}>Start Tutorial</button>        </>    );};export default App;
```

---
