# GamefaceUI Utility Components
<!-- SOURCE: https://gameface-ui.coherent-labs.com/components/ -->
<!-- EXTRACTED: 2026-06-05 -->
<!-- METHOD: live-fetch - content sourced directly from docs site -->
<!-- STATUS: verified -->
<!-- PAGES FETCHED: https://gameface-ui.coherent-labs.com/components/utility/navigation/ -->
<!-- PAGES FAILED: none -->

---
[TOPIC: gameface-ui-components]
[TYPE: api]
[SEVERITY: high]
[STATUS: verified]
[VERIFIED-BY: live-fetch]
[SOURCE: https://gameface-ui.coherent-labs.com/components/utility/navigation/]

## Navigation: Props and Usage

The `Navigation` component is a comprehensive navigation system designed for game UIs, providing keyboard and gamepad input handling, spatial navigation between UI areas, and a flexible action system for mapping inputs to callbacks.

**Import:**
```typescript
import Navigation from '@components/Navigation/Navigation/Navigation';
import { ActionMap } from '@components/Navigation/Navigation/types';
```

**Named exports:**
```typescript
import Navigation, { NavigationRef } from "@components/Utility/Navigation/Navigation";
import { useNavigation } from "@components/Utility/Navigation/Navigation";
```

> ⚠️ Two import paths appear in the docs: `@components/Navigation/Navigation/Navigation` (used in the main usage example with `ActionMap`) and `@components/Utility/Navigation/Navigation` (used in the Guide section for `useNavigation` and `NavigationRef`). Verify the correct path for your project.

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `gamepad` | `boolean` | `true` | Enables gamepad input handling for navigation and actions. |
| `keyboard` | `boolean` | `true` | Enables keyboard input handling for navigation and actions. |
| `actions` | `ActionMap` | `{}` | Custom action configurations to register in addition to default actions. Each action can define keyboard/gamepad bindings and callbacks. |
| `scope` | `string` | `""` | The initial navigation scope. When a `Navigation.Area` with a matching name is registered, it will be auto-focused. |
| `pollingInterval` | `number` | `200` | Gamepad polling interval in milliseconds. Determines how frequently the system checks for gamepad input. |
| `ref` | `NavigationRef \| ((nav: NavigationRef) => void)` | `undefined` | A reference to the component, providing access to all navigation methods via the NavigationRef interface. |
| `overlap` | `number` | `undefined` | Overlap threshold for spatial navigation. Determines how much elements can overlap before being considered in different navigation paths. |

**Ref API - Action Methods:**
| Method | Parameters | Return | Description |
|--------|------------|--------|-------------|
| `addAction` | `name: ActionName, config: ActionCfg` | `void` | Adds a new `Navigation` action and registers it with the interaction manager. |
| `removeAction` | `name: ActionName` | `void` | Removes a registered `Navigation` action and unregisters it from the interaction manager. |
| `updateAction` | `name: ActionName, config: ActionCfg` | `void` | Updates an existing action's configuration. Default actions can be updated as well. |
| `executeAction` | `name: ActionName` | `void` | Executes a registered action by name, triggering its callback and event emission. |
| `pauseAction` | `action: ActionName, force?: boolean = false` | `void` | Pauses an action, preventing its callback from executing. Actions can be paused only when they don't have subscribers, to bypass that provide `true` as the second argument. |
| `resumeAction` | `action: ActionName, force?: boolean = false` | `void` | Resumes a paused action, allowing its callback to execute again. If an action was force paused, you must resume it by providing `true` as a second argument. |
| `isPaused` | `action: ActionName` | `boolean` | Checks if an action is currently paused. Returns true if paused, false otherwise. |
| `getScope` | None | `string` | Gets the current navigation scope (typically the name of the active navigation area). |
| `getAction` | `name: ActionName` | `ActionCfg \| undefined` | Gets a specific action configuration by name. Returns undefined if the action doesn't exist. |
| `getActions` | None | `ActionMap` | Gets all currently registered actions. |
| `pauseInput` | None | `void` | Snapshots current pause states and forcefully pauses all actions. `resumeInput` must be used to unpause all actions. |
| `resumeInput` | None | `void` | Releases the global pause and restores actions to their state prior to the `pauseInput` call. |

**Ref API - Area Methods:**
| Method | Parameters | Return | Description |
|--------|------------|--------|-------------|
| `registerArea` | `area: string, elements: string[] \| HTMLElement[], focused?: boolean` | `void` | Registers a navigation area with focusable elements. If `focused` is true, automatically focuses the first element in the area. |
| `unregisterArea` | `area: string` | `void` | Unregisters a navigation area and removes it from spatial navigation. |
| `focusFirst` | `area: string` | `void` | Focuses the first focusable element in the specified area and updates the navigation `scope`. |
| `focusLast` | `area: string` | `void` | Focuses the last focusable element in the specified area and updates the navigation `scope`. |
| `switchArea` | `area: string` | `void` | Switches the active navigation to the specified area by focusing the first element in it and updating the navigation `scope`. |
| `clearFocus` | None | `void` | Clears the current focus from all navigation areas. |
| `changeNavigationKeys` | `keys: { up?: string, down?: string, left?: string, right?: string }, clearCurrent?: boolean` | `void` | Changes the navigation keys for spatial navigation. If `clearCurrent` is true, clears current active keys before setting new ones. |
| `resetNavigationKeys` | None | `void` | Resets navigation keys to their default values. |
| `pauseNavigation` | None | `void` | Pauses navigation, preventing spatial navigation actions from executing. |
| `resumeNavigation` | None | `void` | Resumes navigation, allowing spatial navigation actions to execute again. |

**Default Actions:**
| Action Name | Keyboard Binding | Gamepad Binding | Purpose |
|-------------|-----------------|-----------------|---------|
| `move-left` | `ARROW_LEFT` | `pad-left` (D-Pad) | Directional input left (used by components Stepper) |
| `move-right` | `ARROW_RIGHT` | `pad-right` (D-Pad) | Directional input right (used by components Stepper) |
| `move-up` | `ARROW_UP` | `pad-up` (D-Pad) | Directional input up (used by components like Dropdown) |
| `move-down` | `ARROW_DOWN` | `pad-down` (D-Pad) | Directional input down (used by components like Dropdown) |
| `select` | `ENTER` | `face-button-down` | Confirm selection or activate the currently focused element |
| `back` | `ESC` | `face-button-right` | Cancel current operation or navigate back to the previous screen |
| `pan` | `none` | `right.joystick` | Continuous 2D input for manipulating values on two axes simultaneously. Paused by default |

**ActionCfg Reference:**
| Property | Type | Description |
|----------|------|-------------|
| `key` | `{binds: KeyName[], type?: ActionType[]}` | Keyboard configuration. `binds` specifies which keys trigger the action. `type` specifies when to trigger: `'press'` (default), `'hold'`, or `'lift'`. |
| `button` | `{binds: GamepadInput[], type?: Exclude}` | Gamepad configuration. `binds` specifies which buttons trigger the action. `type` specifies when to trigger: `'press'` (default) or `'hold'`. |
| `callback` | `(scope?: string, ...args: any[]) => void` | Function to execute when the action is triggered. Receives the current navigation scope as the first parameter. |
| `global` | `boolean` | When `true`, the action emits globally via the eventBus, allowing any component to listen. |
| `paused` | `boolean` | When set to true the action will be paused by default. |

**Sub-components:**

### Navigation.Area
**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `name` | `string` | required | The unique name identifier for this navigation area. Used to reference the area in methods like `focusFirst`, `switchArea`, and for `scope` tracking. |
| `selector` | `string` | `undefined` | CSS class selector for navigable elements. If provided, only elements matching this selector will be navigable. If omitted, all child elements are considered navigable. |
| `focused` | `boolean` | `false` | When true, this area will automatically receive focus when it mounts, focusing its first navigable element. |

**Minimal example:**
```typescript
import Navigation from '@components/Navigation/Navigation/Navigation';import { ActionMap } from '@components/Navigation/Navigation/types';const App = () => {    const defaultActions: ActionMap = {        'tab-left': {key: {binds: ['Q'], type: ['press']}, button: {binds: ['left-shoulder'], type: 'press'}, callback: menuLeft, global: true},        'tab-right': {key: {binds: ['E'], type: ['press']}, button: {binds: ['right-shoulder'], type: 'press'}, callback: menuRight, global: true},        'select': {key: {binds: ['SPACEBAR'], type: ['press']}, button: {binds: ['face-button-left'], type: 'press'}},        'back': {key: {binds: ['BACKSPACE'], type: ['press']}},    }    return (        <Navigation scope="main-menu" actions={defaultActions} pollingInterval={150} >            <Navigation.Area name="main-menu" focused>                <button>Start Game</button>                <button>Settings</button>                <button>Quit</button>            </Navigation.Area>        </Navigation>    );};export default App;
```

---
