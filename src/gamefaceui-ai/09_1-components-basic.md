# GamefaceUI Basic Components
<!-- SOURCE: https://gameface-ui.coherent-labs.com/components/ -->
<!-- EXTRACTED: 2026-06-05 -->
<!-- METHOD: live-fetch - content sourced directly from docs site -->
<!-- STATUS: verified -->
<!-- PAGES FETCHED: https://gameface-ui.coherent-labs.com/components/basic/accordion/, https://gameface-ui.coherent-labs.com/components/basic/button/, https://gameface-ui.coherent-labs.com/components/basic/checkbox/, https://gameface-ui.coherent-labs.com/components/basic/dropdown/, https://gameface-ui.coherent-labs.com/components/basic/dropdown-options/, https://gameface-ui.coherent-labs.com/components/basic/inline-text-block/, https://gameface-ui.coherent-labs.com/components/basic/keybinds/, https://gameface-ui.coherent-labs.com/components/basic/number-input/, https://gameface-ui.coherent-labs.com/components/basic/pagination/, https://gameface-ui.coherent-labs.com/components/basic/password-input/, https://gameface-ui.coherent-labs.com/components/basic/radio/, https://gameface-ui.coherent-labs.com/components/basic/radio-button/, https://gameface-ui.coherent-labs.com/components/basic/rounded-button/, https://gameface-ui.coherent-labs.com/components/basic/segment/, https://gameface-ui.coherent-labs.com/components/basic/segment-button/, https://gameface-ui.coherent-labs.com/components/basic/slider/, https://gameface-ui.coherent-labs.com/components/basic/state/, https://gameface-ui.coherent-labs.com/components/basic/stepper/, https://gameface-ui.coherent-labs.com/components/basic/stepper-items/, https://gameface-ui.coherent-labs.com/components/basic/text-block/, https://gameface-ui.coherent-labs.com/components/basic/text-input/, https://gameface-ui.coherent-labs.com/components/basic/text-slider/, https://gameface-ui.coherent-labs.com/components/basic/toggle-button/, https://gameface-ui.coherent-labs.com/components/basic/xy-slider/ -->
<!-- PAGES FAILED: none -->

---
[TOPIC: gameface-ui-components]
[TYPE: api]
[SEVERITY: high]
[STATUS: verified]
[VERIFIED-BY: live-fetch]
[SOURCE: https://gameface-ui.coherent-labs.com/components/basic/accordion/]

## Accordion: Props and Usage

The `Accordion` component is a vertically stacked set of interactive headings that each reveal an associated section of content.

**Import:**
```typescript
import Accordion from '@components/Basic/Accordion/Accordion';
```

**Named exports:**
```typescript
import Accordion, { accordionRef } from '@components/Basic/Accordion/Accordion';
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `style` | `JSX.CSSProperties` | `{}` | Inline styles to apply directly to the Accordion's root element. |
| `class` | `string` | `""` | Additional CSS classes to apply to the Accordion. |
| `ref` | `AccordionRef \| undefined` | `undefined` | Reference to the Accordion instance, providing access to its methods for programmatic control. |
| `multiple` | `boolean` | `false` | If `true`, allows multiple panels to be expanded at the same time. |
| `disabled` | `boolean` | `false` | Disables the Accordion when set to `true`. |
| `class-disabled` | `string` | `""` | Additional CSS classes to apply when the Accordion is disabled. |
| `onChange` | `(title: string) => void` | `undefined` | Callback triggered whenever the expanded panels change. |

**Ref API - Properties:**
| Property | Type | Description |
|----------|------|-------------|
| `element` | `HTMLDivElement` | A reference to the Accordion's root HTML element, useful for DOM access or styling. |

**Ref API - Methods:**
| Method | Parameters | Return | Description |
|--------|------------|--------|-------------|
| `expand` | `title: string` | `void` | Expands the panel with the given title. |
| `collapse` | `title: string` | `void` | Collapses the panel with the given title. |
| `expandAll` | none | `void` | Expands all panels. Only works if the Accordion has the `multiple` prop enabled. |
| `collapseAll` | none | `void` | Collapses all panels. |

**Sub-components:**

### Accordion.Panel
**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `expanded` | `boolean` | `false` | If `true`, the panel is expanded by default. |
| `title` | `string` | `""` | The title or label for the panel. It is used for programmatic manipulation. |
| `disabled` | `boolean` | `false` | Disables the panel, preventing user interaction. |
| `class-disabled` | `string` | `""` | Additional CSS classes applied when the panel is disabled. |
| `class-expanded` | `string` | `""` | Additional CSS classes applied when the panel is expanded. |
| `style` | `JSX.CSSProperties` | `{}` | Inline styles to apply to the panel container. |
| `class` | `string` | `""` | Additional CSS classes for the panel container. |

### Accordion.Heading
**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `style` | `JSX.CSSProperties` | `{}` | Inline styles to apply to the heading element. |
| `class` | `string` | `""` | Additional CSS classes for the heading element. |
| `children` | `JSX.Element` | `""` | Content of the heading. |
| `onAction` | `Record<string, (scope?: string, ...args: any[]) => void>` | `undefined` | Extends or overrides the heading's default navigation action handlers. |
| `anchor` | `string \| HTMLElement` | `undefined` | Links navigation to another element. |

### Accordion.Icon
**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `style` | `JSX.CSSProperties` | `{}` | Inline styles to apply to the heading element. |
| `class` | `string` | `""` | Additional CSS classes for the heading element. |
| `children` | `JSX.Element` | `""` | Custom content to render as the accordion icon. |

### Accordion.Body
**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `style` | `JSX.CSSProperties` | `{}` | Inline styles to apply to the body element. |
| `class` | `string` | `""` | Additional CSS classes for the body element. |
| `children` | `JSX.Element` | `""` | Content of the body. |

**Implemented Navigation Actions:**
| Action Name | Behavior |
|-------------|----------|
| `select` | Toggles the accordion panel (expands if collapsed, collapses if expanded) |

**Minimal example:**
```typescript
import Accordion from '@components/Basic/Accordion/Accordion';const App = () => {    return (        <Accordion>            <Accordion.Panel>                <Accordion.Heading>Heading 1</Accordion.Heading>                <Accordion.Body>Accordion content</Accordion.Body>            </Accordion.Panel>            <Accordion.Panel>                <Accordion.Heading>Heading 2</Accordion.Heading>                <Accordion.Body>Accordion content</Accordion.Body>            </Accordion.Panel>        </Accordion>    );};export default App;
```

---
[TOPIC: gameface-ui-components]
[TYPE: api]
[SEVERITY: high]
[STATUS: verified]
[VERIFIED-BY: live-fetch]
[SOURCE: https://gameface-ui.coherent-labs.com/components/basic/button/]

## Button: Props and Usage

The `Button` component is used to create button elements in the UI.

**Import:**
```typescript
import Button from '@components/Basic/Button/Button';
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `style` | `JSX.CSSProperties` | `{}` | Inline styles to apply directly to the component's root element. |
| `class` | `string` | `""` | Additional CSS classes to apply to the component |
| `ref` | `HTMLButtonElement \| undefined` | `undefined` | Retrieves the component's DOM element and assigns it to a variable. |
| `disabled` | `boolean` | `false` | Specify if the button is disabled |
| `size` | `'large' \| 'middle' \| 'small'` | `''` | Specify the size of the button. If an empty string is passed, the button won't have any size. |
| `textFit` | `boolean` | `true` | Specify if the text inside the button should be fitted. By default, this option is enabled. |
| `onAction` | `Record<string, (scope?: string, ...args: any[]) => void>` | `undefined` | Allows you to add custom navigation action handlers to the button. |
| `anchor` | `string \| HTMLElement` | `undefined` | Links navigation to another element. |

**Minimal example:**
```typescript
import Button from '@components/Basic/Button/Button';const App = () => {    return (        <>            <Button disabled size='large'>Large button</Button>            <Button size='middle'>Rounded button with middle size</Button>            <Button size='small'>Small size button</Button>            <Button textFit={false} size='small'>Small size button with no fitting the text</Button>        </>    );};export default App;
```

---
[TOPIC: gameface-ui-components]
[TYPE: api]
[SEVERITY: high]
[STATUS: verified]
[VERIFIED-BY: live-fetch]
[SOURCE: https://gameface-ui.coherent-labs.com/components/basic/checkbox/]

## Checkbox: Props and Usage

The `Checkbox` component is used to create a checkbox element in the UI.

**Import:**
```typescript
import Checkbox from '@components/Basic/Checkbox/Checkbox';
```

**Named exports:**
```typescript
import Checkbox, { CheckboxRef } from '@components/Basic/Checkbox/Checkbox';
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `style` | `JSX.CSSProperties` | `{}` | Inline styles to apply directly to the component's root element. |
| `class` | `string` | `""` | Additional CSS classes to apply to the component |
| `ref` | `CheckboxRef \| undefined` | `undefined` | A reference to the component that gives you access to its methods and the underlying HTML element. |
| `disabled` | `boolean` | `false` | Specify if the checkbox is disabled |
| `value` | `any` | `''` | The value associated with the checkbox component. |
| `checked` | `boolean` | `false` | Specify if the checkbox is checked initially. |
| `onChange` | `(checked: boolean) => void` | `undefined` | A function that is called every time the checkbox is toggled. |
| `onAction` | `Record<string, (scope?: string, ...args: any[]) => void>` | `undefined` | Extends or overrides the component's default navigation action handlers. |
| `anchor` | `string \| HTMLElement` | `undefined` | Links navigation to another element. |

**Ref API - Properties:**
| Property | Type | Description |
|----------|------|-------------|
| `checked` | `Accessor<boolean>` | Read the current checked state: `ref.checked()` returns `true/false`. |
| `value` | `any` | The value associated with the checkbox. |
| `element` | `HTMLDivElement` | A reference to the checkbox's root HTML element. |

**Ref API - Methods:**
| Method | Parameters | Return | Description |
|--------|------------|--------|-------------|
| `setChecked` | `Setter<boolean>` | `void` | Programmatically sets the checked state of the checkbox. |

**Sub-components:**

### Checkbox.Label
**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `before` | `boolean` | `false` | Specify if the label should be put before the checkbox control |
| `children` | `JSX.Element` | `undefined` | Content to render inside the label. |

### Checkbox.Control
**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `style` | `JSX.CSSProperties` | `{}` | Inline styles to apply directly to the checkbox control. |
| `class` | `string` | `""` | Additional CSS classes to style the checkbox control. |
| `children` | `JSX.Element` | `undefined` | Content to render inside the checkbox control. |

### Checkbox.Indicator
**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `style` | `JSX.CSSProperties` | `{}` | Inline styles to apply directly to the checkbox indicator. |
| `class` | `string` | `""` | Additional CSS classes to style the checkbox indicator. |
| `children` | `JSX.Element` | `undefined` | Content to render inside the checkbox indicator. |

**Implemented Navigation Actions:**
| Action Name | Behavior |
|-------------|----------|
| `select` | Toggles the checkbox on/off |

**Minimal example:**
```typescript
import Checkbox from '@components/Basic/Checkbox/Checkbox';const App = () => {    return (        <>            <Checkbox value="v-sync">V-Sync</Checkbox>            <Checkbox value="fullscreen" checked>Fullscreen Mode</Checkbox>            <Checkbox value="motion blur" checked>Motion Blur</Checkbox>            <Checkbox value="anti-aliasing">Anti-Aliasing</Checkbox>        </>    );};export default App;
```

---
[TOPIC: gameface-ui-components]
[TYPE: api]
[SEVERITY: high]
[STATUS: verified]
[VERIFIED-BY: live-fetch]
[SOURCE: https://gameface-ui.coherent-labs.com/components/basic/dropdown/]

## Dropdown: Props and Usage

The `Dropdown` component allows you to create a dropdown menu with selectable options.

**Import:**
```typescript
import Dropdown from '@components/Basic/Dropdown/Dropdown';
```

**Named exports:**
```typescript
import Dropdown, { DropdownRef } from '@components/Basic/Dropdown/Dropdown';
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `style` | `JSX.CSSProperties` | `{}` | Inline styles to apply directly to the component's root element. |
| `class` | `string` | `""` | Additional CSS classes to apply to the component. |
| `ref` | `DropdownRef \| undefined` | `undefined` | A reference to the component, providing access to its methods and underlying HTML element. |
| `disabled` | `boolean` | `false` | Disables the dropdown when set to `true`. |
| `class-disabled` | `string` | `""` | Additional CSS classes to apply when the dropdown is disabled. |
| `onChange` | `(value: string) => void` | `undefined` | Callback function triggered whenever the selected option changes. |
| `onAction` | `Record<string, (scope?: string, ...args: any[]) => void>` | `undefined` | Extends or overrides the component's default navigation action handlers. |
| `anchor` | `string \| HTMLElement` | `undefined` | Links navigation to another element. |

**Ref API - Properties:**
| Property | Type | Description |
|----------|------|-------------|
| `selected` | `Accessor<string>` | Read the currently selected option: `ref.selected()` returns the value. |
| `element` | `HTMLDivElement` | A reference to the dropdown's root HTML element. |

**Ref API - Methods:**
| Method | Parameters | Return | Description |
|--------|------------|--------|-------------|
| `selectOption` | `value: string` | `void` | Sets a new selected option programmatically. |

**Sub-components:**

### Dropdown.Trigger
**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `style` | `JSX.CSSProperties` | `{}` | Inline styles to apply directly to the trigger element. |
| `class` | `string` | `""` | Additional CSS classes to apply to the trigger element. |

### Dropdown.Placeholder
**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `style` | `JSX.CSSProperties` | `{}` | Inline styles to apply directly to the placeholder element. |
| `class` | `string` | `""` | Additional CSS classes to apply to the placeholder element. |
| `children` | `JSX.Element` | `""` | Content to display when no option is selected. |

### Dropdown.Icon
**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `style` | `JSX.CSSProperties` | `{}` | Inline styles to apply directly to the dropdown trigger's icon element. |
| `class` | `string` | `""` | Additional CSS classes to apply to the dropdown trigger's icon element. |
| `children` | `JSX.Element` | `""` | Custom content to render as the dropdown icon. |

### Dropdown.Track
**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `style` | `JSX.CSSProperties` | `{}` | Inline styles to apply directly to the dropdown's track element. |
| `class` | `string` | `""` | Additional CSS classes to apply to the dropdown's track element. |
| `children` | `JSX.Element` | `""` | Custom content to render inside the track. |

### Dropdown.Handle
**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `style` | `JSX.CSSProperties` | `{}` | Inline styles to apply directly to the handle element. |
| `class` | `string` | `""` | Additional CSS classes to apply to the handle element. |
| `children` | `JSX.Element` | `""` | Custom content to render inside the handle. |

**Implemented Navigation Actions:**
| Action Name | Behavior |
|-------------|----------|
| `select` | Opens the dropdown when closed. When open, collapses the dropdown. |
| `back` | Closes the dropdown and returns focus to the trigger or anchor element. |

**Minimal example:**
```typescript
import Dropdown from '@components/Basic/Dropdown/Dropdown';const App = () => {    return (        <Dropdown>            <Dropdown.Options>                <Dropdown.Option selected value="red">red</Dropdown.Option>                <Dropdown.Option value="green">green</Dropdown.Option>                <Dropdown.Option value="blue">blue</Dropdown.Option>            </Dropdown.Options>        </Dropdown>    );};export default App;
```

---
[TOPIC: gameface-ui-components]
[TYPE: api]
[SEVERITY: high]
[STATUS: verified]
[VERIFIED-BY: live-fetch]
[SOURCE: https://gameface-ui.coherent-labs.com/components/basic/dropdown-options/]

## Dropdown.Options: Props and Usage

The `Dropdown.Options` slot serves as the container for all the options within the `Dropdown` component.

**Import:**
```typescript
import Dropdown from '@components/Basic/Dropdown/Dropdown';
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `style` | `JSX.CSSProperties` | `{}` | Inline styles to apply directly to the dropdown options container element. |
| `class` | `string` | `""` | Additional CSS classes to apply to the dropdown options container element. |
| `children` | `JSX.Element` | `""` | The children of `Dropdown.Options` should include all the `Dropdown.Option` slots. |
| `inverted-class` | `string` | `""` | CSS class to apply when the dropdown options are in an inverted position (opening upwards). |

**Sub-components:**

### Dropdown.Option
**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `style` | `JSX.CSSProperties` | `{}` | Inline styles applied directly to the dropdown option element. |
| `class` | `string` | `""` | Additional CSS classes for the dropdown option element. |
| `value` | `string` | `undefined` | The value associated with the dropdown option. |
| `selected` | `boolean` | `false` | Indicates if the dropdown option is selected. |
| `disabled` | `boolean` | `false` | Indicates if the dropdown option is disabled. |
| `class-selected` | `string` | `""` | Additional CSS classes applied when the dropdown option is selected. |
| `class-disabled` | `string` | `""` | Additional CSS classes applied when the dropdown option is disabled. |
| `children` | `JSX.Element` | `""` | Content of the option. |

**Minimal example:**
```typescript
import Dropdown from '@components/Basic/Dropdown/Dropdown';const App = () => {    return (        <Dropdown>            <Dropdown.Options>                <Dropdown.Option selected value="red">red</Dropdown.Option>                <Dropdown.Option value="green">green</Dropdown.Option>                <Dropdown.Option value="blue">blue</Dropdown.Option>            </Dropdown.Options>        </Dropdown>    );};export default App;
```

---
[TOPIC: gameface-ui-components]
[TYPE: api]
[SEVERITY: high]
[STATUS: verified]
[VERIFIED-BY: live-fetch]
[SOURCE: https://gameface-ui.coherent-labs.com/components/basic/inline-text-block/]

## InlineTextBlock: Props and Usage

The `InlineTextBlock` component is used to create a text block element that can display all its children inline, rendering a `p` element with the `cohinline` attribute.

**Import:**
```typescript
import InlineTextBlock from '@components/Basic/InlineTextBlock/InlineTextBlock';
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `style` | `JSX.CSSProperties` | `{}` | Styles applied directly to the root element of the component. |
| `class` | `string` | `""` | Additional CSS classes to apply to the component. |
| `ref` | `HTMLButtonElement \| undefined` | `undefined` | Obtains the component's DOM element and assigns it to a variable. |
| `onAction` | `Record<string, (scope?: string, ...args: any[]) => void>` | `undefined` | Allows you to add custom navigation action handlers to the component. |
| `anchor` | `string \| HTMLElement` | `undefined` | Links navigation to another element. |

**Minimal example:**
```typescript
import InlineTextBlock from '@components/Basic/InlineTextBlock/InlineTextBlock';const App = () => {    return (        <>            <InlineTextBlock>                Text with <img src="url"/> image.            </InlineTextBlock>        </>    );};export default App;
```

---
[TOPIC: gameface-ui-components]
[TYPE: api]
[SEVERITY: high]
[STATUS: verified]
[VERIFIED-BY: live-fetch]
[SOURCE: https://gameface-ui.coherent-labs.com/components/basic/keybinds/]

## Keybinds: Props and Usage

The `Keybinds` component is an easy way to set up keyboard + mouse binding logic in your UI, working together with the `Keybind` component which represents a single action slot.

**Import:**
```typescript
import Keybinds from '@components/Basic/Keybinds/Keybinds';
import Keybind from '@components/Basic/Keybinds/Keybind';
```

**Named exports:**
```typescript
import Keybinds, { KeybindsRef } from '@components/Basic/Keybinds/Keybinds';
```

**Props (Keybinds):**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `defaults` | `Record<string, string \| null>` | `undefined` | Initial bindings map: `{ action: label }`. If omitted, children can seed themselves via their `value`. |
| `placeholder` | `string` | `undefined` | Text shown in each `Keybind` when no key is bound. |
| `listeningText` | `string` | `Press any key...` | Text to show while waiting for input. |
| `overrides` | `Partial<Record<string, string>>` | `{}` | Object of custom key overrides. Include only the codes you want to change. |
| `conflictPolicy` | `'block' \| 'replace-existing' \| 'swap' \| 'allow-duplicates'` | `'allow-duplicates'` | How to resolve when a new binding collides with an existing one. |
| `ref` | `(ref: KeybindsRef) => void` | `undefined` | Exposes programmatic methods and the current bindings. |
| `onConflict` | `(action: string, key: string \| null, conflictAction: string) => void` | `undefined` | Called when a conflict happens under any policy. |
| `onChange` | `(prev: string \| null, next: string \| null, action: string) => void` | `undefined` | Called when a bind or unbind operation succeeds. |
| `mode` | `gamepad \| keyboard` | `keyboard` | Sets the mode for the input. Use `gamepad` in order to accept and display gamepad buttons. |
| `glyphOverrides` | `Partial<Record<string \| number, Component \| JSX.Element>>` | `{}` | Object of custom display glyph overrides. |

**Ref API - Properties (KeybindsRef):**
| Property | Type | Description |
|----------|------|-------------|
| `bindings` | `Record<string, string \| null>` | The current state of the bindings map. |

**Ref API - Methods (KeybindsRef):**
| Method | Parameters | Return | Description |
|--------|------------|--------|-------------|
| `bind` | `(action: string, newKey: string \| null)` | `void` | Programmatically bind an action. Applies the current `conflictPolicy`. |
| `unbindKey` | `(key: string \| null)` | `void` | Unbinds all actions that currently use this key. |
| `mapBindings` | `(bindings: Record<string, string \| null>)` | `void` | Bulk-apply bindings (clears existing, then binds each). |
| `clearAll` | `()` | `void` | Clears all keys by setting every action's value to `null`. |
| `reset` | `()` | `void` | Restores to the original baseline captured on mount. |

**Sub-components:**

### Keybind
**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `action` | `string` | `undefined` | The action that will have a key bound to it. |
| `value` | `string \| undefined` | `undefined` | The value associated with the keybind by default. |
| `onAction` | `Record<string, (scope?: string, ...args: any[]) => void>` | `undefined` | Allows you to add custom navigation action handlers to the keybind. |
| `anchor` | `string \| HTMLElement` | `undefined` | Links navigation to another element. |

**Implemented Navigation Actions (Keybind):**
| Action Name | Behavior |
|-------------|----------|
| `select` | Begin listening for gamepad input |

**Minimal example:**
```typescript
import Keybinds from '@components/Basic/Keybinds/Keybinds';import Keybind from '@components/Basic/Keybinds/Keybind';const App = () => {    return (        <Keybinds>            <Keybind action="forward" value="W" />            <Keybind action="backward" value="S" />            <Keybind action="left" value="A" />            <Keybind action="right" value="D" />            <Keybind action="jump" />        </Keybinds>    );};export default App;
```

---
[TOPIC: gameface-ui-components]
[TYPE: api]
[SEVERITY: high]
[STATUS: verified]
[VERIFIED-BY: live-fetch]
[SOURCE: https://gameface-ui.coherent-labs.com/components/basic/number-input/]

## NumberInput: Props and Usage

The `NumberInput` component is similar to TextInput but is specifically designed for numeric input, ensuring only valid numbers can be entered and including optional increment and decrement controls.

**Import:**
```typescript
import NumberInput from '@components/Basic/NumberInput/NumberInput';
```

**Named exports:**
```typescript
import NumberInput, { NumberInputRef } from '@components/Basic/NumberInput/NumberInput';
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `style` | `JSX.CSSProperties` | `{}` | Inline styles to apply directly to the component's root element. |
| `class` | `string` | `""` | Additional CSS classes to apply to the component. |
| `ref` | `NumberInputRef \| undefined` | `undefined` | A reference to the component that gives you access to its methods and the underlying HTML element. |
| `value` | `string \| number` | `""` | The initial value of the input. |
| `min` | `number` | `undefined` | Minimum value that can be entered or selected. |
| `max` | `number` | `undefined` | Maximum value that can be entered or selected. |
| `step` | `number` | `1` | Increment/decrement step for buttons. |
| `disabled` | `boolean` | `false` | Disables the input if set to true. |
| `class-disabled` | `string` | `undefined` | Optional class to apply when the input is disabled. |
| `readonly` | `boolean` | `false` | Specifies if the input is only able to be read. |
| `onChange` | `(value: string \| number) => void` | `undefined` | A function that is called every time the input's value has changed. |
| `onAction` | `Record<string, (scope?: string, ...args: any[]) => void>` | `undefined` | Extends or overrides the component's default navigation action handlers. |
| `anchor` | `string \| HTMLElement` | `undefined` | Links navigation to another element. |

**Ref API - Properties:**
| Property | Type | Description |
|----------|------|-------------|
| `element` | `HTMLDivElement` | A reference to the input's root HTML element. |
| `input` | `HTMLInputElement` | A reference to the internal input element. |
| `value` | `Accessor<string \| number>` | Returns the current value of the input reactively. |

**Ref API - Methods:**
| Method | Parameters | Return | Description |
|--------|------------|--------|-------------|
| `changeValue` | `newValue: number` | `void` | Programmatically sets a new value in the input field. |
| `clear` | None | `void` | Clears the current value of the input. |
| `increaseValue` | None | `void` | Increases value by the specified step (default is 1). |
| `decreaseValue` | None | `void` | Decreases value by the specified step (default is 1). |

**Sub-components:**

### NumberInput.IncreaseControl
**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `position` | `before \| after` | `"after"` | Determines whether the button appears before or after the input field. |
| `style` | `JSX.CSSProperties` | `{}` | Inline styles applied directly to the visibility button container. |
| `class` | `string` | `""` | Additional CSS classes for styling the button. |
| `children` | `JSX.Element` | `""` | Custom content to override the default icons. |

### NumberInput.DecreaseControl
**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `position` | `before \| after` | `"after"` | Determines whether the button appears before or after the input field. |
| `style` | `JSX.CSSProperties` | `{}` | Inline styles applied directly to the visibility button container. |
| `class` | `string` | `""` | Additional CSS classes for styling the button. |
| `children` | `JSX.Element` | `""` | Custom content to override the default icons. |

### NumberInput.Input
**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `style` | `JSX.CSSProperties` | `{}` | Inline styles to apply directly to the input element. |
| `class` | `string` | `""` | Additional CSS classes to style the input element. |

### TextInput.Placeholder (used in NumberInput context)
**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `style` | `JSX.CSSProperties` | `{}` | Inline styles to apply directly to the input element. |
| `class` | `string` | `""` | Additional CSS classes to style the input element. |
| `children` | `JSX.Element` | `""` | Content to be rendered inside the placeholder slot. |

**Implemented Navigation Actions:**
| Action Name | Behavior |
|-------------|----------|
| `select` | Focuses the input element, making it ready for typing |
| `back` | Blurs the input element, exiting typing mode |
| `move-up` | Increases the value of the input by the `step` prop's value |
| `move-down` | Increases the value of the input by the `step` prop's value |

**Minimal example:**
```typescript
import NumberInput from '@components/Basic/NumberInput/NumberInput';const App = () => {    return (        <NumberInput />    );};export default App;
```

---
[TOPIC: gameface-ui-components]
[TYPE: api]
[SEVERITY: high]
[STATUS: verified]
[VERIFIED-BY: live-fetch]
[SOURCE: https://gameface-ui.coherent-labs.com/components/basic/pagination/]

## Pagination: Props and Usage

The `Pagination` component provides a UI control for navigating between multiple pages, supporting optional numbered indicators, looping behavior, and customizable navigation controls.

**Import:**
```typescript
import Pagination from '@components/Basic/Pagination/Pagination';
```

**Named exports:**
```typescript
import Pagination, { PaginationRef } from '@components/Basic/Pagination/Pagination';
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `style` | `JSX.CSSProperties` | `{}` | Inline styles to apply directly to the component's root element. |
| `class` | `string` | `""` | Additional CSS classes to apply to the component. |
| `pageSize` | `number` | required | Total number of pages. |
| `pageIndex` | `number` | required | The currently selected page index (1-based). |
| `loop` | `boolean` | `false` | Enables wrap-around navigation from last to first page and vice versa. |
| `hasNumbers` | `boolean` | `false` | If true, displays page numbers inside each page indicator. |
| `ref` | `PaginationRef \| undefined` | `undefined` | Provides access to the pagination element and control methods. |
| `onChange` | `(index: number) => void` | `undefined` | Called whenever the selected page changes, providing the new index. |
| `onAction` | `Record<string, (scope?: string, ...args: any[]) => void>` | `undefined` | Allows you to add custom navigation action handlers to the component. |
| `anchor` | `string \| HTMLElement` | `undefined` | Links navigation to another element. |

**Ref API - Properties:**
| Property | Type | Description |
|----------|------|-------------|
| `element` | `HTMLDivElement` | The root DOM element of the pagination component. |
| `pageIndex` | `Accessor<number>` | The current page index. |
| `pageSize` | `Accessor<number>` | The total number of pages. |

**Ref API - Methods:**
| Method | Parameters | Return | Description |
|--------|------------|--------|-------------|
| `changeIndex` | `index: number` | `void` | Programmatically change to a specific page. |
| `nextPage` | None | `void` | Navigate to the next page. |
| `previousPage` | None | `void` | Navigate to the previous page. |

**Sub-components:**

### Pagination.Control
**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `style` | `JSX.CSSProperties` | `{}` | Inline styles to apply to the default arrow elements. |
| `class` | `string` | `""` | Additional CSS classes for the default arrow elements. |
| `children` | `JSX.Element` | `""` | Custom content to replace the default arrow controls. |
| `hidden-class` | `string` | `""` | CSS class to override the default behavior when the control is hidden. |

### Pagination.Item
**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `style` | `JSX.CSSProperties` | `{}` | Inline styles applied to every item. |
| `class` | `string` | `""` | Additional CSS classes for styling the pagination items. |
| `selected-class` | `string` | `""` | CSS class to override the default styles of the selected item. |

**Minimal example:**
```typescript
import Pagination from '@components/Basic/Pagination/Pagination';const App = () => {    return (        <Pagination pageSize={10} pageIndex={3} />    )};export default App;
```

---
[TOPIC: gameface-ui-components]
[TYPE: api]
[SEVERITY: high]
[STATUS: verified]
[VERIFIED-BY: live-fetch]
[SOURCE: https://gameface-ui.coherent-labs.com/components/basic/password-input/]

## PasswordInput: Props and Usage

The `PasswordInput` component is an input field designed specifically for handling password values, extending base TextInput behavior with a dedicated slot for a visibility toggle button.

**Import:**
```typescript
import PasswordInput from '@components/Basic/PasswordInput/PasswordInput';
```

**Named exports:**
```typescript
import PasswordInput, { PasswordInputRef } from '@components/Basic/PasswordInput/PasswordInput';
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `style` | `JSX.CSSProperties` | `{}` | Inline styles to apply directly to the component's root element. |
| `class` | `string` | `""` | Additional CSS classes to apply to the component. |
| `ref` | `PasswordInputRef \| undefined` | `undefined` | A reference to the component that gives you access to its methods and the underlying HTML element. |
| `value` | `string` | `""` | The initial value of the input. |
| `disabled` | `boolean` | `false` | Disables the input if set to true. |
| `readonly` | `boolean` | `false` | Specifies if the input is only able to be read. |
| `max-symbols` | `number` | `undefined` | Maximum number of symbols the input can accept. |
| `class-disabled` | `string` | `undefined` | Optional class to apply when the input is disabled. |
| `onChange` | `(value: string) => void` | `undefined` | A function that is called every time the input's value has changed. |
| `onAction` | `Record<string, (scope?: string, ...args: any[]) => void>` | `undefined` | Extends or overrides the component's default navigation action handlers. |
| `anchor` | `string \| HTMLElement` | `undefined` | Links navigation to another element. |

**Ref API - Properties:**
| Property | Type | Description |
|----------|------|-------------|
| `element` | `HTMLDivElement` | A reference to the input's root HTML element. |
| `input` | `HTMLInputElement` | A reference to the internal input element. |
| `value` | `Accessor<string>` | The current value of the input. |
| `visible` | `Accessor<boolean>` | Indicates whether the password is currently visible. |

**Ref API - Methods:**
| Method | Parameters | Return | Description |
|--------|------------|--------|-------------|
| `changeValue` | `newValue: string` | `void` | Programmatically sets a new value in the input field. |
| `clear` | None | `void` | Clears the current value of the input. |
| `show` | None | `void` | Programmatically shows the value of the password input. |
| `hide` | None | `void` | Programmatically hides the value of the password input. |

**Sub-components:**

### PasswordInput.Before
**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `style` | `JSX.CSSProperties` | `{}` | Inline styles to apply directly to the before slot container. |
| `class` | `string` | `""` | Additional CSS classes to style the before slot container. |
| `children` | `JSX.Element` | `""` | Content to be rendered inside the before slot. |

### PasswordInput.After
**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `style` | `JSX.CSSProperties` | `{}` | Inline styles to apply directly to the after slot container. |
| `class` | `string` | `""` | Additional CSS classes to style the after slot container. |
| `children` | `JSX.Element` | `""` | Content to be rendered inside the after slot. |

### PasswordInput.Input
**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `style` | `JSX.CSSProperties` | `{}` | Inline styles to apply directly to the input element. |
| `class` | `string` | `""` | Additional CSS classes to style the input element. |

### PasswordInput.VisibilityButton
**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `position` | `before \| after` | `"after"` | Determines whether the button appears before or after the input field. |
| `style` | `JSX.CSSProperties` | `{}` | Inline styles applied directly to the visibility button container. |
| `class` | `string` | `""` | Additional CSS classes for styling the button. |
| `children` | `JSX.Element` | `""` | Custom content to override the default visibility toggle icons. |

**Implemented Navigation Actions:**
| Action Name | Behavior |
|-------------|----------|
| `select` | Focuses the input element, making it ready for typing |
| `back` | Blurs the input element, exiting typing mode |

**Minimal example:**
```typescript
import PasswordInput from '@components/Basic/PasswordInput/PasswordInput';const App = () => {    return (        <PasswordInput />    );};export default App;
```

---
[TOPIC: gameface-ui-components]
[TYPE: api]
[SEVERITY: high]
[STATUS: verified]
[VERIFIED-BY: live-fetch]
[SOURCE: https://gameface-ui.coherent-labs.com/components/basic/radio/]

## Radio: Props and Usage

The `Radio` component lets you render a set of mutually-exclusive options in your UI, where only one choice can be selected at a time, working in conjunction with the `Radio.Button` slot.

**Import:**
```typescript
import Radio from '@components/Basic/RadioGroup/Radio';
```

**Named exports:**
```typescript
import Radio, { RadioRef } from '@components/Basic/RadioGroup/Radio';
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `style` | `JSX.CSSProperties` | `{}` | Inline styles to apply directly to the component's root element. |
| `class` | `string` | `""` | Additional CSS classes to apply to the component. |
| `ref` | `RadioRef \| undefined` | `undefined` | A reference to the component that gives you access to its methods and the underlying HTML element. |
| `disabled` | `boolean` | `false` | Specify if the radio is disabled. |
| `class-disabled` | `string` | `""` | Additional CSS classes to apply to the component when disabled. |
| `onChange` | `(selected: string) => void` | `undefined` | A function that is called every time the selected option changes. |
| `onAction` | `Record<string, (scope?: string, ...args: any[]) => void>` | `undefined` | Extends or overrides the component's default navigation action handlers. |
| `anchor` | `string \| HTMLElement` | `undefined` | Links navigation to another element. |

**Ref API - Properties:**
| Property | Type | Description |
|----------|------|-------------|
| `element` | `HTMLDivElement` | A reference to the radio's root HTML element. |
| `selected` | `Accessor<string>` | The currently selected option. Use `selected()` to get the value. |

**Ref API - Methods:**
| Method | Parameters | Return | Description |
|--------|------------|--------|-------------|
| `changeOption` | `newOption: string` | `void` | Programmatically change the selected option. |
| `changeSelected` | `direction: 'prev' \| 'next'` | `void` | Programmatically change the selected option to the previous or next one. |

**Implemented Navigation Actions:**
| Action Name | Behavior |
|-------------|----------|
| `move-left` | Moves the selected option to the previous one |
| `move-right` | Moves the selected option to the next one |

**Minimal example:**
```typescript
import Radio from '@components/Basic/RadioGroup/Radio';const App = () => {    return (        <>            <Radio>                <Radio.Button selected value="red">red</Radio.Button>                <Radio.Button value="green">green</Radio.Button>                <Radio.Button value="blue">blue</Radio.Button>            </Radio>        </>    );};export default App;
```

---
[TOPIC: gameface-ui-components]
[TYPE: api]
[SEVERITY: high]
[STATUS: verified]
[VERIFIED-BY: live-fetch]
[SOURCE: https://gameface-ui.coherent-labs.com/components/basic/radio-button/]

## Radio.Button: Props and Usage

The `Radio.Button` slot represents a single option within a `Radio`, rendering a clickable control with a label.

**Import:**
```typescript
import Radio from '@components/Basic/RadioGroup/Radio';
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `style` | `JSX.CSSProperties` | `{}` | Inline styles to apply directly to the component's root element. |
| `class` | `string` | `""` | Additional CSS classes to apply to the component. |
| `value` | `string` | `undefined` | The string value the radio button is associated with. |
| `selected` | `boolean` | `false` | Specify if the radio button is selected. |
| `disabled` | `boolean` | `false` | Specify if the radio button is disabled. |
| `class-selected` | `string` | `""` | Additional CSS classes to apply to the button when selected. |
| `class-disabled` | `string` | `""` | Additional CSS classes to apply to the button when disabled. |

**Sub-components:**

### Radio.ButtonLabel
**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `before` | `boolean` | `false` | Specify if the label should be put before the radio button control |
| `children` | `JSX.Element` | `undefined` | Content to render inside the label. |

### Radio.ButtonControl
**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `style` | `JSX.CSSProperties` | `{}` | Inline styles to apply directly to the radio button control. |
| `class` | `string` | `""` | Additional CSS classes to style the radio button control. |
| `children` | `JSX.Element` | `undefined` | Content to render inside the radio button control. |

### Radio.ButtonIndicator
**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `style` | `JSX.CSSProperties` | `{}` | Inline styles to apply directly to the radio button indicator. |
| `class` | `string` | `""` | Additional CSS classes to style the radio button indicator. |
| `children` | `JSX.Element` | `undefined` | Content to render inside the radio button indicator. |

**Minimal example:**
```typescript
import Radio from '@components/Basic/RadioGroup/Radio';const App = () => {    return (        <>            <Radio>                <Radio.Button selected value="red">red</Radio.Button>                <Radio.Button value="green">green</Radio.Button>                <Radio.Button value="blue">blue</Radio.Button>            </Radio>        </>    );};export default App;
```

---
[TOPIC: gameface-ui-components]
[TYPE: api]
[SEVERITY: high]
[STATUS: verified]
[VERIFIED-BY: live-fetch]
[SOURCE: https://gameface-ui.coherent-labs.com/components/basic/rounded-button/]

## RoundedButton: Props and Usage

The `RoundedButton` component is used to create rounded button elements in the UI with the help of the `Button` component.

**Import:**
```typescript
import RoundedButton from '@components/Basic/RoundedButton/RoundedButton';
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `style` | `JSX.CSSProperties` | `{}` | Inline styles to apply directly to the component's root element. |
| `class` | `string` | `""` | Additional CSS classes to apply to the component |
| `ref` | `HTMLButtonElement \| undefined` | `undefined` | Retrieves the component's DOM element and assigns it to a variable. |
| `disabled` | `boolean` | `false` | Specify if the button is disabled |
| `size` | `'large' \| 'middle' \| 'small'` | `''` | Specify the size of the button. If an empty string is passed, the button won't have any size. |
| `textFit` | `boolean` | `true` | Specify if the text inside the button should be fitted. By default, this option is enabled. |
| `onAction` | `Record<string, (scope?: string, ...args: any[]) => void>` | `undefined` | Allows you to add custom navigation action handlers to the button. |
| `anchor` | `string \| HTMLElement` | `undefined` | Links navigation to another element. |

**Minimal example:**
```typescript
import RoundedButton from '@components/Basic/RoundedButton/RoundedButton';const App = () => {    return (        <>            <RoundedButton disabled size='large'>Large button</RoundedButton>            <RoundedButton size='middle'>Button with middle size</RoundedButton>            <RoundedButton size='small'>Small size button</RoundedButton>            <RoundedButton textFit={false} size='small'>Small size button with no fitting the text</RoundedButton>        </>    );};export default App;
```

---
[TOPIC: gameface-ui-components]
[TYPE: api]
[SEVERITY: high]
[STATUS: verified]
[VERIFIED-BY: live-fetch]
[SOURCE: https://gameface-ui.coherent-labs.com/components/basic/segment/]

## Segment: Props and Usage

The `Segment` component lets you render a set of mutually-exclusive options in your UI, functioning the same way as the Radio component, working in conjunction with the `Segment.Button` slot.

**Import:**
```typescript
import Segment from '@components/Basic/Segment';
```

**Named exports:**
```typescript
import Segment, { SegmentRef } from '@components/Basic/Segment';
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `style` | `JSX.CSSProperties` | `{}` | Inline styles to apply directly to the component's root element. |
| `class` | `string` | `""` | Additional CSS classes to apply to the component. |
| `ref` | `SegmentRef \| undefined` | `undefined` | A reference to the component that gives you access to its methods and the underlying HTML element. |
| `disabled` | `boolean` | `false` | Specify if the Segment is disabled. |
| `class-selected` | `string` | `""` | Additional CSS classes applied when the button option is selected. |
| `class-disabled` | `string` | `""` | Additional CSS classes to apply to the component when disabled. |
| `onChange` | `(selected: string) => void` | `undefined` | A function that is called every time the selected option changes. |
| `onAction` | `Record<string, (scope?: string, ...args: any[]) => void>` | `undefined` | Extends or overrides the component's default navigation action handlers. |
| `anchor` | `string \| HTMLElement` | `undefined` | Links navigation to another element. |

**Ref API - Properties:**
| Property | Type | Description |
|----------|------|-------------|
| `element` | `HTMLDivElement` | A reference to the segment's root HTML element. |
| `selected` | `Accessor<string>` | The currently selected option. Use `selected()` to get the value. |

**Ref API - Methods:**
| Method | Parameters | Return | Description |
|--------|------------|--------|-------------|
| `selectOption` | `newOption: string` | `void` | Programmatically change the selected option. |
| `changeSelected` | `direction: 'prev' \| 'next'` | `void` | Programmatically change the selected option to the previous or next one. |

**Sub-components:**

### Segment.Indicator
**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `style` | `JSX.CSSProperties` | `{}` | Inline styles to apply directly to the segment indicator. |
| `class` | `string` | `""` | Additional CSS classes to style the segment indicator. |

**Implemented Navigation Actions:**
| Action Name | Behavior |
|-------------|----------|
| `move-left` | Moves the selected option to the previous one |
| `move-right` | Moves the selected option to the next one |

**Minimal example:**
```typescript
import Segment from '@components/Basic/Segment';const App = () => {    return (        <>            <Segment>                <Segment.Button selected value="red">red</Segment.Button>                <Segment.Button value="green">green</Segment.Button>                <Segment.Button value="blue">blue</Segment.Button>            </Segment>        </>    );};export default App;
```

---
[TOPIC: gameface-ui-components]
[TYPE: api]
[SEVERITY: high]
[STATUS: verified]
[VERIFIED-BY: live-fetch]
[SOURCE: https://gameface-ui.coherent-labs.com/components/basic/segment-button/]

## Segment.Button: Props and Usage

The `Segment.Button` slot represents a single option within a `Segment`, rendering a clickable button with a transition.

**Import:**
```typescript
import Segment from '@components/Basic/Segment';
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `style` | `JSX.CSSProperties` | `{}` | Inline styles to apply directly to the component's root element. |
| `class` | `string` | `""` | Additional CSS classes to apply to the component. |
| `value` | `string` | `undefined` | The string value the Segment button is associated with. |
| `selected` | `boolean` | `false` | Specify if the Segment button is selected. |
| `disabled` | `boolean` | `false` | Specify if the Segment button is disabled. |
| `class-disabled` | `string` | `""` | Additional CSS classes to apply to the button when disabled. |

**Minimal example:**
```typescript
import Segment from '@components/Basic/Segment';const App = () => {    return (        <>            <Segment>                <Segment.Button selected value="red">red</Segment.Button>                <Segment.Button value="green">green</Segment.Button>                <Segment.Button value="blue">blue</Segment.Button>            </Segment>        </>    );};export default App;
```

---
[TOPIC: gameface-ui-components]
[TYPE: api]
[SEVERITY: high]
[STATUS: verified]
[VERIFIED-BY: live-fetch]
[SOURCE: https://gameface-ui.coherent-labs.com/components/basic/slider/]

## Slider: Props and Usage

The `Slider` component allows users to select a numeric value from a specified range by dragging a handle along a track.

**Import:**
```typescript
import Slider from '@components/Basic/Slider/Slider';
```

**Named exports:**
```typescript
import Slider, { SliderRef } from '@components/Basic/Slider/Slider';
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `style` | `JSX.CSSProperties` | `{}` | Inline styles to apply directly to the component's root element. |
| `class` | `string` | `""` | Additional CSS classes to apply to the component |
| `ref` | `SliderRef \| undefined` | `undefined` | A reference to the component that gives you access to its methods and the underlying HTML element. |
| `value` | `number` | `undefined` | The current value of the slider. |
| `min` | `number` | `undefined` | The minimum value that the slider can select. |
| `max` | `number` | `undefined` | The maximum value that the slider can select. |
| `step` | `number` | `undefined` | The amount by which the slider value changes when the handle is moved. |
| `onChange` | `(value: number) => void` | `undefined` | A function that is called every time the slider's value has changed. |
| `onAction` | `Record<string, (scope?: string, ...args: any[]) => void>` | `undefined` | Extends or overrides the component's default navigation action handlers. |
| `anchor` | `string \| HTMLElement` | `undefined` | Links navigation to another element. |

**Ref API - Properties:**
| Property | Type | Description |
|----------|------|-------------|
| `element` | `HTMLDivElement` | A reference to the slider's root HTML element. |
| `value` | `Accessor<number>` | The current value of the slider. |

**Ref API - Methods:**
| Method | Parameters | Return | Description |
|--------|------------|--------|-------------|
| `changeValue` | `newValue: number` | `void` | Programmatically sets a new value for the slider. |

**Sub-components:**

### Slider.Track
**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `style` | `JSX.CSSProperties` | `{}` | Inline styles to apply directly to the slider track. |
| `class` | `string` | `""` | Additional CSS classes to style the slider track. |

### Slider.Fill
**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `style` | `JSX.CSSProperties` | `{}` | Inline styles to apply directly to the slider fill. |
| `class` | `string` | `""` | Additional CSS classes to style the slider fill. |

### Slider.Handle
**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `style` | `JSX.CSSProperties` | `{}` | Inline styles to apply directly to the slider handle. |
| `class` | `string` | `""` | Additional CSS classes to style the slider handle. |

### Slider.Thumb
**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `style` | `JSX.CSSProperties` | `{}` | Inline styles to apply directly to the slider thumb (value indicator). |
| `class` | `string` | `""` | Additional CSS classes to style the slider thumb. |

### Slider.Grid
**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `style` | `JSX.CSSProperties` | `{}` | Inline styles to apply directly to the grid container. |
| `class` | `string` | `""` | Additional CSS classes to style the grid container. |
| `pols` | `number` | `5` | Number of main pols (segments with value labels) to display along the slider track. |
| `pols-without-text` | `number` | `5` | If prop is present, it renders smaller unlabeled pols between main pols. |
| `pol-style` | `JSX.CSSProperties` | `{}` | Inline styles to apply directly to each pol (segment marker). |
| `pol-class` | `string` | `""` | Additional CSS classes to style each pol (segment marker). |
| `pol-value-style` | `JSX.CSSProperties` | `{}` | Inline styles for poles displaying the slider's current value. |
| `pol-value-class` | `string` | `""` | Additional CSS classes for poles displaying the slider's current value. |

**Implemented Navigation Actions:**
| Action Name | Behavior |
|-------------|----------|
| `move-left` | Decreases the slider value by the `step` amount |
| `move-right` | Increases the slider value by the `step` amount |

**Minimal example:**
```typescript
import Slider from '@components/Basic/Slider/Slider';const App = () => {    return (        <>            <Slider min={0} max={100} value={35} step={1} />        </>    );};export default App;
```

---
[TOPIC: gameface-ui-components]
[TYPE: api]
[SEVERITY: high]
[STATUS: verified]
[VERIFIED-BY: live-fetch]
[SOURCE: https://gameface-ui.coherent-labs.com/components/basic/state/]

## State: Props and Usage

The `State` component allows you to define multiple UI states, with only one being rendered at a time based on the active state.

**Import:**
```typescript
import State, { Match } from '@components/Basic/State/State';
```

**Named exports:**
```typescript
import State, { Match, StateComponentRef, states } from '@components/Basic/State/State';
```

**Props (State):**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `style` | `JSX.CSSProperties` | `{}` | Inline styles to apply directly to the component's root element. |
| `class` | `string` | `""` | Additional CSS classes to apply to the component. |
| `ref` | `StateComponentRef` | `undefined` | Retrieves the state's properties and methods, assigning them to a local variable. |
| `name` | `string` | `undefined` | The identifier for the state component. Used to access the state component's methods through the `states` object. |
| `default` | `string` | `undefined` | The default state to be rendered initially. |
| `onBeforeStateChange` | `(currentState?: string, nextState?: string, currentStateElement?: JSX.Element) => {}` | `undefined` | Callback invoked right before the state changes. |
| `onStateChanged` | `(currentState?: string, prevState?: string, currentStateElement?: JSX.Element) => {}` | `undefined` | Callback invoked after the state changes. |

**Props (Match):**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `name` | `string` | `Required` | Specifies the name of the state to be matched. |

**State Methods (via ref or `states` object):**
| Method | Parameters | Return | Description |
|--------|------------|--------|-------------|
| `changeState` | `value: string \| ((prevState: string) => string)` | `void` | Changes the state of the `State` component. |
| `currentState` | None | `string` | Returns the current state as a string. |

**Minimal example:**
```typescript
import State, { Match } from '@components/Basic/State/State';const App = () => {    return (        <State default='state-1'>            <Match name=''>                Fallback            </Match>            <Match name='state-1'>                State 1            </Match>            <Match name='state-2'>                State 2            </Match>        </State>    );};export default App;
```

---
[TOPIC: gameface-ui-components]
[TYPE: api]
[SEVERITY: high]
[STATUS: verified]
[VERIFIED-BY: live-fetch]
[SOURCE: https://gameface-ui.coherent-labs.com/components/basic/stepper/]

## Stepper: Props and Usage

The `Stepper` component enables users to navigate through a set of options, integrating with the `Stepper.Items` and `Stepper.Item` slots.

**Import:**
```typescript
import Stepper from '@components/Basic/Stepper/Stepper';
```

**Named exports:**
```typescript
import Stepper, { StepperRef } from '@components/Basic/Stepper/Stepper';
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `style` | `JSX.CSSProperties` | `{}` | Inline styles to apply directly to the component's root element. |
| `class` | `string` | `""` | Additional CSS classes to apply to the component. |
| `ref` | `StepperRef \| undefined` | `undefined` | A reference to the component, providing access to its methods and underlying HTML element. |
| `disabled` | `boolean` | `false` | Disables the stepper when set to `true`. |
| `class-disabled` | `string` | `""` | Additional CSS classes to apply when the stepper is disabled. |
| `controls-position` | `'before' \| 'after'` | `''` | Determines the position of the control arrows. |
| `loop` | `boolean` | `false` | Enables looping through options when navigating past the first or last option. |
| `onChange` | `(value: string) => void` | `undefined` | Callback function triggered whenever the selected option changes. |
| `onAction` | `Record<string, (scope?: string, ...args: any[]) => void>` | `undefined` | Extends or overrides the component's default navigation action handlers. |
| `anchor` | `string \| HTMLElement` | `undefined` | Links navigation to another element. |

**Ref API - Properties:**
| Property | Type | Description |
|----------|------|-------------|
| `element` | `HTMLDivElement` | A reference to the stepper's root HTML element. |
| `selected` | `Accessor<string>` | The currently selected option. |
| `options` | `string[]` | The available options for the stepper. |

**Ref API - Methods:**
| Method | Parameters | Return | Description |
|--------|------------|--------|-------------|
| `setOption` | `newOption: string` | `void` | Programmatically change the selected option. |

**Sub-components:**

### Stepper.Control
**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `style` | `JSX.CSSProperties` | `{}` | Inline styles to apply to the default arrow elements. |
| `class` | `string` | `""` | Additional CSS classes for the default arrow elements. |
| `children` | `JSX.Element` | `""` | Custom content to replace the default arrow controls. |
| `hidden-class` | `string` | `""` | CSS class to override the default behavior when the control is hidden. |

**Implemented Navigation Actions:**
| Action Name | Behavior |
|-------------|----------|
| `move-left` | Moves to the previous option in the stepper |
| `move-right` | Moves to the next option in the stepper |

**Minimal example:**
```typescript
import Stepper from '@components/Basic/Stepper/Stepper';const App = () => {    return (        <Stepper>            <Stepper.Items>                <Stepper.Item selected value="red">red</Stepper.Item>                <Stepper.Item value="green">green</Stepper.Item>                <Stepper.Item value="blue">blue</Stepper.Item>            </Stepper.Items>        </Stepper>    );};export default App;
```

---
[TOPIC: gameface-ui-components]
[TYPE: api]
[SEVERITY: high]
[STATUS: verified]
[VERIFIED-BY: live-fetch]
[SOURCE: https://gameface-ui.coherent-labs.com/components/basic/stepper-items/]

## Stepper.Items: Props and Usage

The `Stepper.Items` slot acts as a container for all the `Stepper.Item` components within the `Stepper`.

**Import:**
```typescript
import Stepper from '@components/Basic/Stepper/Stepper';
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `style` | `JSX.CSSProperties` | `{}` | Inline styles applied directly to the container element of the stepper items. |
| `class` | `string` | `""` | Additional CSS classes for the container element of the stepper items. |
| `children` | `JSX.Element` | `""` | The children of `Stepper.Items` should include all `Stepper.Item` components. |

**Sub-components:**

### Stepper.Item
**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `style` | `JSX.CSSProperties` | `{}` | Inline styles applied directly to the stepper item element. |
| `class` | `string` | `""` | Additional CSS classes for the stepper item element. |
| `value` | `string` | `undefined` | The value associated with the stepper item. |
| `selected` | `boolean` | `false` | Specifies whether the stepper item is selected. |
| `children` | `JSX.Element` | `""` | Content of the item. |

**Minimal example:**
```typescript
import Stepper from '@components/Basic/Stepper/Stepper';const App = () => {    return (        <Stepper>            <Stepper.Items>                <Stepper.Item selected value="red">red</Stepper.Item>                <Stepper.Item value="green">green</Stepper.Item>                <Stepper.Item value="blue">blue</Stepper.Item>            </Stepper.Items>        </Stepper>    );};export default App;
```

---
[TOPIC: gameface-ui-components]
[TYPE: api]
[SEVERITY: high]
[STATUS: verified]
[VERIFIED-BY: live-fetch]
[SOURCE: https://gameface-ui.coherent-labs.com/components/basic/text-block/]

## TextBlock: Props and Usage

The `TextBlock` component is used to render text, outputting an HTML `p` element containing the text.

**Import:**
```typescript
import TextBlock from '@components/Basic/TextBlock/TextBlock';
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `style` | `JSX.CSSProperties` | `{}` | Styles applied directly to the root element of the component. |
| `class` | `string` | `""` | Additional CSS classes to apply to the component. |
| `ref` | `HTMLButtonElement \| undefined` | `undefined` | Obtains the component's DOM element and assigns it to a variable. |
| `onAction` | `Record<string, (scope?: string, ...args: any[]) => void>` | `undefined` | Allows you to add custom navigation action handlers to the component. |
| `anchor` | `string \| HTMLElement` | `undefined` | Links navigation to another element. |

**Minimal example:**
```typescript
import TextBlock from '@components/Basic/TextBlock/TextBlock';const App = () => {    return (        <>            <TextBlock>                Text content.            </TextBlock>        </>    );};export default App;
```

---
[TOPIC: gameface-ui-components]
[TYPE: api]
[SEVERITY: high]
[STATUS: verified]
[VERIFIED-BY: live-fetch]
[SOURCE: https://gameface-ui.coherent-labs.com/components/basic/text-input/]

## TextInput: Props and Usage

The `TextInput` component provides a highly customizable input field for handling text data.

**Import:**
```typescript
import TextInput from '@components/Basic/TextInput/TextInput';
```

**Named exports:**
```typescript
import TextInput, { TextInputRef } from '@components/Basic/TextInput/TextInput';
// Also: import { TextInputRef } from '@components/Basic/Input/shared/types';
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `style` | `JSX.CSSProperties` | `{}` | Inline styles to apply directly to the component's root element. |
| `class` | `string` | `""` | Additional CSS classes to apply to the component. |
| `ref` | `TextInputRef \| undefined` | `undefined` | A reference to the component that gives you access to its methods and the underlying HTML element. |
| `value` | `string` | `""` | The initial value of the input. |
| `disabled` | `boolean` | `false` | Disables the input if set to true. |
| `readonly` | `boolean` | `false` | Specifies if the input is only able to be read. |
| `max-symbols` | `number` | `undefined` | Maximum number of symbols the input can accept. |
| `class-disabled` | `string` | `undefined` | Optional class to apply when the input is disabled. |
| `onChange` | `(value: string) => void` | `undefined` | A function that is called every time the input's value has changed. |
| `onAction` | `Record<string, (scope?: string, ...args: any[]) => void>` | `undefined` | Extends or overrides the component's default navigation action handlers. |
| `anchor` | `string \| HTMLElement` | `undefined` | Links navigation to another element. |

**Ref API - Properties:**
| Property | Type | Description |
|----------|------|-------------|
| `element` | `HTMLDivElement` | A reference to the input's root HTML element. |
| `input` | `HTMLInputElement` | A reference to the internal input element. |
| `value` | `Accessor<string>` | The current value of the input. |

**Ref API - Methods:**
| Method | Parameters | Return | Description |
|--------|------------|--------|-------------|
| `changeValue` | `newValue: string` | `void` | Programmatically sets a new value in the input field. |
| `clear` | None | `void` | Clears the current value of the input. |

**Sub-components:**

### TextInput.Before
**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `style` | `JSX.CSSProperties` | `{}` | Inline styles to apply directly to the before slot container. |
| `class` | `string` | `""` | Additional CSS classes to style the before slot container. |
| `children` | `JSX.Element` | `""` | Content to be rendered inside the before slot. |

### TextInput.After
**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `style` | `JSX.CSSProperties` | `{}` | Inline styles to apply directly to the after slot container. |
| `class` | `string` | `""` | Additional CSS classes to style the after slot container. |
| `children` | `JSX.Element` | `""` | Content to be rendered inside the after slot. |

### TextInput.Input
**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `style` | `JSX.CSSProperties` | `{}` | Inline styles to apply directly to the input element. |
| `class` | `string` | `""` | Additional CSS classes to style the input element. |

### TextInput.Placeholder
**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `style` | `JSX.CSSProperties` | `{}` | Inline styles to apply directly to the input element. |
| `class` | `string` | `""` | Additional CSS classes to style the input element. |
| `children` | `JSX.Element` | `""` | Content to be rendered inside the placeholder slot. |

**Implemented Navigation Actions:**
| Action Name | Behavior |
|-------------|----------|
| `select` | Focuses the input element, making it ready for typing |
| `back` | Blurs the input element, exiting typing mode |

**Minimal example:**
```typescript
import TextInput from '@components/Basic/TextInput/TextInput';const App = () => {    return (        <TextInput />    );};export default App;
```

---
[TOPIC: gameface-ui-components]
[TYPE: api]
[SEVERITY: high]
[STATUS: verified]
[VERIFIED-BY: live-fetch]
[SOURCE: https://gameface-ui.coherent-labs.com/components/basic/text-slider/]

## TextSlider: Props and Usage

The `TextSlider` component enables users to select a string value from a predefined set of options by dragging a handle along a track.

**Import:**
```typescript
import TextSlider from '@components/Basic/TextSlider/TextSlider';
```

**Named exports:**
```typescript
import TextSlider, { TextSliderRef } from '@components/Basic/TextSlider/TextSlider';
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `style` | `JSX.CSSProperties` | `{}` | Inline styles to apply directly to the component's root element. |
| `class` | `string` | `""` | Additional CSS classes to apply to the component. |
| `ref` | `TextSliderRef \| undefined` | `undefined` | A reference to the component, providing access to its methods and the underlying HTML element. |
| `value` | `string` | `undefined` | The current value of the slider. |
| `values` | `string[]` | `undefined` | An array of options that can be selected by dragging the slider's handle. |
| `onChange` | `(value: string) => void` | `undefined` | A callback function triggered whenever the slider's value changes. |
| `onAction` | `Record<string, (scope?: string, ...args: any[]) => void>` | `undefined` | Extends or overrides the component's default navigation action handlers. |
| `anchor` | `string \| HTMLElement` | `undefined` | Links navigation to another element. |

**Ref API - Properties:**
| Property | Type | Description |
|----------|------|-------------|
| `element` | `HTMLDivElement` | A reference to the text slider's root HTML element. |
| `value` | `Accessor<string>` | The current value of the slider. |
| `values` | `Accessor<string[]>` | The available options for the text slider. |

**Ref API - Methods:**
| Method | Parameters | Return | Description |
|--------|------------|--------|-------------|
| `changeValue` | `newValue: string` | `void` | Programmatically sets a new value for the text slider. |
| `stepValue` | `direction: 1 \| -1` | `string` | Steps to the next (`1`) or previous (`-1`) value in the values array. |

**Sub-components:**

### TextSlider.Track
**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `style` | `JSX.CSSProperties` | `{}` | Inline styles for the slider track. |
| `class` | `string` | `""` | Additional CSS classes for the slider track. |

### TextSlider.Fill
**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `style` | `JSX.CSSProperties` | `{}` | Inline styles for the slider fill. |
| `class` | `string` | `""` | Additional CSS classes for the slider fill. |

### TextSlider.Handle
**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `style` | `JSX.CSSProperties` | `{}` | Inline styles for the slider handle. |
| `class` | `string` | `""` | Additional CSS classes for the slider handle. |

### TextSlider.Thumb
**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `style` | `JSX.CSSProperties` | `{}` | Inline styles to apply to the slider thumb. |
| `class` | `string` | `""` | Additional CSS classes for styling the slider thumb. |

### TextSlider.Pol
**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `style` | `JSX.CSSProperties` | `{}` | Inline styles for the poles. |
| `class` | `string` | `""` | Additional CSS classes for the poles. |
| `text-style` | `JSX.CSSProperties` | `{}` | Inline styles for the text displayed on the poles. |
| `text-class` | `string` | `""` | Additional CSS classes for the text displayed on the poles. |

**Implemented Navigation Actions:**
| Action Name | Behavior |
|-------------|----------|
| `move-left` | Moves to the previous value in the values array |
| `move-right` | Moves to the next value in the values array |

**Minimal example:**
```typescript
import TextSlider from '@components/Basic/TextSlider/TextSlider';const App = () => {    return (        <TextSlider values={['Easy', 'Medium', 'Hard']} />    );};export default App;
```

---
[TOPIC: gameface-ui-components]
[TYPE: api]
[SEVERITY: high]
[STATUS: verified]
[VERIFIED-BY: live-fetch]
[SOURCE: https://gameface-ui.coherent-labs.com/components/basic/toggle-button/]

## ToggleButton: Props and Usage

The `ToggleButton` component is a versatile UI element that allows users to toggle between two states, such as "on" and "off."

**Import:**
```typescript
import ToggleButton from '@components/Basic/ToggleButton/ToggleButton';
```

**Named exports:**
```typescript
import ToggleButton, { ToggleButtonRef } from '@components/Basic/ToggleButton/ToggleButton';
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `style` | `JSX.CSSProperties` | `{}` | Inline styles to apply directly to the root element of the component. |
| `class` | `string` | `""` | Additional CSS classes to apply to the component. |
| `ref` | `ToggleButtonRef \| undefined` | `undefined` | A reference to the component, providing access to its methods and underlying HTML element. |
| `disabled` | `boolean` | `false` | Disables the toggle button, preventing user interaction. |
| `class-checked` | `string` | `""` | Additional CSS classes applied when the toggle button is checked. |
| `class-disabled` | `string` | `""` | Additional CSS classes applied when the toggle button is disabled. |
| `checked` | `boolean` | `false` | Specifies the initial checked state of the toggle button. |
| `onChange` | `(checked: boolean) => void` | `undefined` | Callback function triggered whenever the toggle button is toggled. |
| `onAction` | `Record<string, (scope?: string, ...args: any[]) => void>` | `undefined` | Extends or overrides the component's default navigation action handlers. |
| `anchor` | `string \| HTMLElement` | `undefined` | Links navigation to another element. |

**Ref API - Properties:**
| Property | Type | Description |
|----------|------|-------------|
| `checked` | `Accessor<boolean>` | Read the current state: `ref.checked()` returns `true/false`. |
| `element` | `HTMLDivElement` | A reference to the button's underlying HTML element. |

**Ref API - Methods:**
| Method | Parameters | Return | Description |
|--------|------------|--------|-------------|
| `setChecked` | `Setter<boolean>` | `void` | Programmatically sets the checked state of the toggle button based on the provided boolean value. |

**Sub-components:**

### ToggleButton.LabelLeft
**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `JSX.Element` | `undefined` | The content to display inside the left label. |

### ToggleButton.LabelRight
**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `JSX.Element` | `undefined` | The content to display inside the right label. |

### ToggleButton.Control
**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `style` | `JSX.CSSProperties` | `{}` | Inline styles to apply directly to the control element. |
| `class` | `string` | `""` | Additional CSS classes to style the control element. |
| `children` | `JSX.Element` | `undefined` | Content to render inside the control. |

### ToggleButton.Indicator
**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `style` | `JSX.CSSProperties` | `{}` | Inline styles to apply directly to the indicator element. |
| `class` | `string` | `""` | Additional CSS classes to style the indicator element. |
| `children` | `JSX.Element` | `undefined` | Content to render inside the indicator. |

### ToggleButton.Handle
**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `style` | `JSX.CSSProperties` | `{}` | Inline styles to apply directly to the handle element. |
| `style-checked` | `JSX.CSSProperties` | `{}` | Inline styles to apply when the toggle button is in the checked state. |
| `class` | `string` | `""` | Additional CSS classes to style the handle element. |
| `class-checked` | `string` | `""` | Additional CSS classes to style the handle when the toggle button is checked. |
| `children` | `JSX.Element` | `undefined` | Content to render inside the handle. |

**Implemented Navigation Actions:**
| Action Name | Behavior |
|-------------|----------|
| `select` | Toggles the button on/off |

**Minimal example:**
```typescript
import ToggleButton from '@components/Basic/ToggleButton/ToggleButton';const App = () => {    return (        <ToggleButton>            <ToggleButton.LabelLeft>Off</ToggleButton.LabelLeft>            <ToggleButton.LabelRight>On</ToggleButton.LabelRight>        </ToggleButton>    );};export default App;
```

---
[TOPIC: gameface-ui-components]
[TYPE: api]
[SEVERITY: high]
[STATUS: verified]
[VERIFIED-BY: live-fetch]
[SOURCE: https://gameface-ui.coherent-labs.com/components/basic/xy-slider/]

## XYSlider: Props and Usage

The `XYSlider` component allows users to select a value in a two-dimensional space, providing a more intuitive way to select values that require both horizontal and vertical input.

**Import:**
```typescript
import XYSlider from '@components/Basic/XYSlider/XYSlider';
```

**Named exports:**
```typescript
import XYSlider, { XYSliderRef } from '@components/Basic/XYSlider/XYSlider';
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `style` | `JSX.CSSProperties` | `{}` | Inline styles to apply directly to the component's root element. |
| `class` | `string` | `""` | Additional CSS classes to apply to the component. |
| `ref` | `XYSliderRef \| undefined` | `undefined` | A reference to the component that gives you access to its methods and the underlying HTML element. |
| `value` | `{x:number, y: number}` | `{ x: 50, y: 50 }` | The current value of the slider. |
| `minX` | `number` | `0` | The minimum value that the slider can select on the X-axis. |
| `minY` | `number` | `0` | The minimum value that the slider can select on the Y-axis. |
| `maxX` | `number` | `100` | The maximum value that the slider can select on the X-axis. |
| `maxY` | `number` | `100` | The maximum value that the slider can select on the Y-axis. |
| `step` | `number` | `1` | The base unit for value changes. Used primarily for gamepad inputs. |
| `onChange` | `(value: {x:number, y: number}) => void` | `undefined` | A function that is called every time the slider's value has changed. |
| `onAction` | `Record<string, (scope?: string, ...args: any[]) => void>` | `undefined` | Extends or overrides the component's default navigation action handlers. |
| `anchor` | `string \| HTMLElement` | `undefined` | Links navigation to another element. |

**Ref API - Properties:**
| Property | Type | Description |
|----------|------|-------------|
| `element` | `HTMLDivElement` | A reference to the XYSlider's root HTML element. |
| `value` | `Accessor<{x: number, y: number}>` | The current value of the slider. |

**Ref API - Methods:**
| Method | Parameters | Return | Description |
|--------|------------|--------|-------------|
| `changeValue` | `newValue: {x: number, y: number}` | `void` | Programmatically sets a new value for the XYSlider. |

**Sub-components:**

### XYSlider.Background
**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `style` | `JSX.CSSProperties` | `{}` | Inline styles to apply directly to the slider's background. |
| `class` | `string` | `""` | Additional CSS classes to style the slider's background. |
| `children` | `JSX.Element` | `""` | Content to be rendered inside the background slot. |

### XYSlider.Handle
**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `style` | `JSX.CSSProperties` | `{}` | Inline styles to apply directly to the slider's handle. |
| `class` | `string` | `""` | Additional CSS classes to style the slider's handle. |

**Implemented Navigation Actions:**
| Action Name | Behavior |
|-------------|----------|
| `pan` | Moves the slider handle based on 2D axis input. Includes acceleration and smoothing logic. |

**Minimal example:**
```typescript
import XYSlider from '@components/Basic/XYSlider/XYSlider';const App = () => {    return (        <XYSlider maxX={150} maxY={150} value={{x: 50, y: 50}} />    );};export default App;
```

---
