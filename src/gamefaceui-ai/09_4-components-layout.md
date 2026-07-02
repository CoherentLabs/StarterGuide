# GamefaceUI Layout Components
<!-- SOURCE: https://gameface-ui.coherent-labs.com/components/ -->
<!-- EXTRACTED: 2026-06-05 -->
<!-- METHOD: live-fetch - content sourced directly from docs site -->
<!-- STATUS: verified -->
<!-- PAGES FETCHED: https://gameface-ui.coherent-labs.com/components/layout/absolute/, https://gameface-ui.coherent-labs.com/components/layout/block/, https://gameface-ui.coherent-labs.com/components/layout/bottom/, https://gameface-ui.coherent-labs.com/components/layout/column/, https://gameface-ui.coherent-labs.com/components/layout/content/, https://gameface-ui.coherent-labs.com/components/layout/flex/, https://gameface-ui.coherent-labs.com/components/layout/grid/, https://gameface-ui.coherent-labs.com/components/layout/grid-tile/, https://gameface-ui.coherent-labs.com/components/layout/layout/, https://gameface-ui.coherent-labs.com/components/layout/layout-3d/, https://gameface-ui.coherent-labs.com/components/layout/list/, https://gameface-ui.coherent-labs.com/components/layout/relative/, https://gameface-ui.coherent-labs.com/components/layout/row/, https://gameface-ui.coherent-labs.com/components/layout/scroll/, https://gameface-ui.coherent-labs.com/components/layout/tab/, https://gameface-ui.coherent-labs.com/components/layout/tab-link/, https://gameface-ui.coherent-labs.com/components/layout/tabs/, https://gameface-ui.coherent-labs.com/components/layout/top/, https://gameface-ui.coherent-labs.com/components/layout/transform/ -->
<!-- PAGES FAILED: none -->

---
[TOPIC: gameface-ui-components]
[TYPE: api]
[SEVERITY: high]
[STATUS: verified]
[VERIFIED-BY: live-fetch]
[SOURCE: https://gameface-ui.coherent-labs.com/components/layout/absolute/]

## Absolute: Props and Usage

The `Absolute` component positions its children using absolute positioning, rendering an HTML `div` element with `position: absolute`.

**Import:**
```typescript
import Absolute from '@components/Layout/Absolute/Absolute';
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `style` | `JSX.CSSProperties` | `{}` | Inline styles to apply directly to the component's root element. |
| `class` | `string` | `""` | Additional CSS classes to apply to the component. |
| `ref` | `HTMLDivElement \| undefined` | `undefined` | Retrieves the component's DOM element. |
| `top` | `string` | `undefined` | Distance from the top edge. |
| `left` | `string` | `undefined` | Distance from the left edge. |
| `right` | `string` | `undefined` | Distance from the right edge. |
| `bottom` | `string` | `undefined` | Distance from the bottom edge. |
| `center` | `boolean` | `false` | When `true`, centers the element both horizontally and vertically using transform. |

**Minimal example:**
```typescript
import Absolute from '@components/Layout/Absolute/Absolute';const App = () => {    return (        <Absolute top="10px" left="20px">            Absolutely positioned content        </Absolute>    );};export default App;
```

---
[TOPIC: gameface-ui-components]
[TYPE: api]
[SEVERITY: high]
[STATUS: verified]
[VERIFIED-BY: live-fetch]
[SOURCE: https://gameface-ui.coherent-labs.com/components/layout/block/]

## Block: Props and Usage

The `Block` component renders an HTML `div` element with `display: block`, used to create block-level containers.

**Import:**
```typescript
import Block from '@components/Layout/Block/Block';
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `style` | `JSX.CSSProperties` | `{}` | Inline styles to apply directly to the component's root element. |
| `class` | `string` | `""` | Additional CSS classes to apply to the component. |
| `ref` | `HTMLDivElement \| undefined` | `undefined` | Retrieves the component's DOM element. |

**Minimal example:**
```typescript
import Block from '@components/Layout/Block/Block';const App = () => {    return (        <Block>            Block content        </Block>    );};export default App;
```

---
[TOPIC: gameface-ui-components]
[TYPE: api]
[SEVERITY: high]
[STATUS: verified]
[VERIFIED-BY: live-fetch]
[SOURCE: https://gameface-ui.coherent-labs.com/components/layout/bottom/]

## Bottom: Props and Usage

The `Bottom` component positions its children at the bottom of a relatively positioned container, rendering an HTML `div` element with `position: absolute; bottom: 0`.

**Import:**
```typescript
import Bottom from '@components/Layout/Bottom/Bottom';
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `style` | `JSX.CSSProperties` | `{}` | Inline styles to apply directly to the component's root element. |
| `class` | `string` | `""` | Additional CSS classes to apply to the component. |
| `ref` | `HTMLDivElement \| undefined` | `undefined` | Retrieves the component's DOM element. |

**Minimal example:**
```typescript
import Bottom from '@components/Layout/Bottom/Bottom';const App = () => {    return (        <Relative>            <Bottom>Bottom content</Bottom>        </Relative>    );};export default App;
```

---
[TOPIC: gameface-ui-components]
[TYPE: api]
[SEVERITY: high]
[STATUS: verified]
[VERIFIED-BY: live-fetch]
[SOURCE: https://gameface-ui.coherent-labs.com/components/layout/column/]

## Column: Props and Usage

The `Column` component provides a set of column-width utilities based on a 12-column grid system, rendering an HTML `div` with the appropriate width class.

**Import:**
```typescript
import Column from "@components/Layout/Column/Column";
```

**Named exports:**
```typescript
import { Column1, Column2, Column3, Column4, Column5, Column6, Column7, Column8, Column9, Column10, Column11, Column12 } from '@components/Layout/Column/Column';
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `style` | `JSX.CSSProperties` | `{}` | Inline styles to apply directly to the component's root element. |
| `class` | `string` | `""` | Additional CSS classes to apply to the component. |
| `ref` | `HTMLDivElement \| undefined` | `undefined` | Retrieves the component's DOM element. |

**Minimal example:**
```typescript
import { Column2, Column10 } from '@components/Layout/Column/Column';const App = () => {    return (        <Row>            <Column2>Sidebar</Column2>            <Column10>Main Content</Column10>        </Row>    );};export default App;
```

---
[TOPIC: gameface-ui-components]
[TYPE: api]
[SEVERITY: high]
[STATUS: verified]
[VERIFIED-BY: live-fetch]
[SOURCE: https://gameface-ui.coherent-labs.com/components/layout/content/]

## Content: Props and Usage

The `Content` component renders an HTML `div` element designed to be used as a general-purpose content container.

**Import:**
```typescript
import Content from '@components/Layout/Content/Content';
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `style` | `JSX.CSSProperties` | `{}` | Inline styles to apply directly to the component's root element. |
| `class` | `string` | `""` | Additional CSS classes to apply to the component. |
| `ref` | `HTMLDivElement \| undefined` | `undefined` | Retrieves the component's DOM element. |

**Minimal example:**
```typescript
import Content from '@components/Layout/Content/Content';const App = () => {    return (        <Content>            Page content here        </Content>    );};export default App;
```

---
[TOPIC: gameface-ui-components]
[TYPE: api]
[SEVERITY: high]
[STATUS: verified]
[VERIFIED-BY: live-fetch]
[SOURCE: https://gameface-ui.coherent-labs.com/components/layout/flex/]

## Flex: Props and Usage

The `Flex` component renders an HTML `div` with `display: flex`, providing flexbox layout capabilities with configurable props.

**Import:**
```typescript
import Flex from '@components/Layout/Flex/Flex';
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `style` | `JSX.CSSProperties` | `{}` | Inline styles to apply directly to the component's root element. |
| `class` | `string` | `""` | Additional CSS classes to apply to the component. |
| `ref` | `HTMLDivElement \| undefined` | `undefined` | Retrieves the component's DOM element. |
| `direction` | `'row' \| 'column' \| 'row-reverse' \| 'column-reverse'` | `'row'` | Sets the flex-direction CSS property. |
| `wrap` | `'nowrap' \| 'wrap' \| 'wrap-reverse'` | `'nowrap'` | Sets the flex-wrap CSS property. |
| `justify-content` | `'flex-start' \| 'flex-end' \| 'center' \| 'space-between' \| 'space-around' \| 'space-evenly'` | `'flex-start'` | Sets the justify-content CSS property. |
| `align-items` | `'stretch' \| 'flex-start' \| 'flex-end' \| 'center' \| 'baseline'` | `'stretch'` | Sets the align-items CSS property. |
| `align-content` | `'flex-start' \| 'flex-end' \| 'center' \| 'space-between' \| 'space-around' \| 'stretch'` | `'stretch'` | Sets the align-content CSS property. |
| `gap` | `string` | `undefined` | Sets the gap between flex items (shorthand for row-gap and column-gap). |
| `row-gap` | `string` | `undefined` | Sets the gap between rows in the flex container. |
| `column-gap` | `string` | `undefined` | Sets the gap between columns in the flex container. |

**Minimal example:**
```typescript
import Flex from '@components/Layout/Flex/Flex';const App = () => {    return (        <Flex direction="row" justify-content="space-between" align-items="center" gap="10px">            <div>Item 1</div>            <div>Item 2</div>            <div>Item 3</div>        </Flex>    );};export default App;
```

---
[TOPIC: gameface-ui-components]
[TYPE: api]
[SEVERITY: high]
[STATUS: verified]
[VERIFIED-BY: live-fetch]
[SOURCE: https://gameface-ui.coherent-labs.com/components/layout/grid/]

## Grid: Props and Usage

The `Grid` component renders an HTML `div` with a CSS grid layout, allowing structured, multi-column and multi-row arrangements.

**Import:**
```typescript
import Grid from '@components/Layout/Grid/Grid';
```

**Named exports:**
```typescript
import Grid, { GridRef } from '@components/Layout/Grid/Grid';
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `style` | `JSX.CSSProperties` | `{}` | Inline styles to apply directly to the component's root element. |
| `class` | `string` | `""` | Additional CSS classes to apply to the component. |
| `ref` | `GridRef \| undefined` | `undefined` | Retrieves the component's DOM element. |
| `rows` | `string` | `undefined` | Defines the grid row sizes (maps to `grid-template-rows`). |
| `cols` | `string` | `undefined` | Defines the grid column sizes (maps to `grid-template-columns`). |
| `gap` | `string` | `undefined` | Sets the gap between grid cells (shorthand for row-gap and column-gap). |
| `row-gap` | `string` | `undefined` | Sets the gap between grid rows. |
| `column-gap` | `string` | `undefined` | Sets the gap between grid columns. |

**Sub-components:**

### Grid.Tile
**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `style` | `JSX.CSSProperties` | `{}` | Inline styles to apply directly to the grid tile element. |
| `class` | `string` | `""` | Additional CSS classes for the grid tile. |
| `col` | `string` | `undefined` | Defines the column span or position (maps to `grid-column`). |
| `row` | `string` | `undefined` | Defines the row span or position (maps to `grid-row`). |

**Minimal example:**
```typescript
import Grid from '@components/Layout/Grid/Grid';const App = () => {    return (        <Grid cols="1fr 1fr 1fr" rows="100px 100px" gap="10px">            <Grid.Tile col="1 / 3">Wide tile</Grid.Tile>            <Grid.Tile>Tile 2</Grid.Tile>            <Grid.Tile>Tile 3</Grid.Tile>            <Grid.Tile>Tile 4</Grid.Tile>        </Grid>    );};export default App;
```

---
[TOPIC: gameface-ui-components]
[TYPE: api]
[SEVERITY: high]
[STATUS: verified]
[VERIFIED-BY: live-fetch]
[SOURCE: https://gameface-ui.coherent-labs.com/components/layout/grid-tile/]

## GridTile: Props and Usage

The `GridTile` component is a standalone version of the `Grid.Tile` slot for placing content within a CSS grid container.

**Import:**
```typescript
import GridTile from '@components/Layout/GridTile/GridTile';
```

**Named exports:**
```typescript
import GridTile, { GridTileRef } from '@components/Layout/GridTile/GridTile';
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `style` | `JSX.CSSProperties` | `{}` | Inline styles to apply directly to the component's root element. |
| `class` | `string` | `""` | Additional CSS classes to apply to the component. |
| `ref` | `GridTileRef \| undefined` | `undefined` | Retrieves the component's DOM element. |
| `col` | `string` | `undefined` | Defines the column span or position (maps to `grid-column`). |
| `row` | `string` | `undefined` | Defines the row span or position (maps to `grid-row`). |

**Minimal example:**
```typescript
import Grid from '@components/Layout/Grid/Grid';import GridTile from '@components/Layout/GridTile/GridTile';const App = () => {    return (        <Grid cols="1fr 1fr 1fr" rows="100px" gap="10px">            <GridTile col="1 / 3">Wide tile</GridTile>            <GridTile>Normal tile</GridTile>        </Grid>    );};export default App;
```

---
[TOPIC: gameface-ui-components]
[TYPE: api]
[SEVERITY: high]
[STATUS: verified]
[VERIFIED-BY: live-fetch]
[SOURCE: https://gameface-ui.coherent-labs.com/components/layout/layout/]

## Layout: Props and Usage

The `Layout` component is a top-level container that provides structure for your UI, rendering an HTML `div` element designed to encompass the entire application layout.

**Import:**
```typescript
import Layout from '@components/Layout/Layout/Layout';
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `style` | `JSX.CSSProperties` | `{}` | Inline styles to apply directly to the component's root element. |
| `class` | `string` | `""` | Additional CSS classes to apply to the component. |
| `ref` | `HTMLDivElement \| undefined` | `undefined` | Retrieves the component's DOM element. |

**Minimal example:**
```typescript
import Layout from '@components/Layout/Layout/Layout';const App = () => {    return (        <Layout>            <Top>Header</Top>            <Content>Main content</Content>            <Bottom>Footer</Bottom>        </Layout>    );};export default App;
```

---
[TOPIC: gameface-ui-components]
[TYPE: api]
[SEVERITY: high]
[STATUS: verified]
[VERIFIED-BY: live-fetch]
[SOURCE: https://gameface-ui.coherent-labs.com/components/layout/layout-3d/]

## Layout3D: Props and Usage

The `Layout3D` component enables 3D transformations for its children by setting up a perspective context on a container element.

**Import:**
```typescript
import Layout3D from '@components/Layout/Layout3D/Layout3D';
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `style` | `JSX.CSSProperties` | `{}` | Inline styles to apply directly to the component's root element. |
| `class` | `string` | `""` | Additional CSS classes to apply to the component. |
| `ref` | `HTMLDivElement \| undefined` | `undefined` | Retrieves the component's DOM element. |
| `distance` | `string` | `undefined` | Sets the `perspective` CSS property on the container, which controls the depth of the 3D effect. |

**Minimal example:**
```typescript
import Layout3D from '@components/Layout/Layout3D/Layout3D';import Transform from '@components/Layout/Transform/Transform';const App = () => {    return (        <Layout3D distance="800px">            <Transform rotate="0deg 30deg 0deg">                <div>3D content</div>            </Transform>        </Layout3D>    );};export default App;
```

---
[TOPIC: gameface-ui-components]
[TYPE: api]
[SEVERITY: high]
[STATUS: verified]
[VERIFIED-BY: live-fetch]
[SOURCE: https://gameface-ui.coherent-labs.com/components/layout/list/]

## List: Props and Usage

The `List` component renders an HTML `ul` element, serving as a container for `List.Item` elements.

**Import:**
```typescript
import List from '@components/Layout/List/List';
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `style` | `JSX.CSSProperties` | `{}` | Inline styles to apply directly to the component's root element. |
| `class` | `string` | `""` | Additional CSS classes to apply to the component. |
| `ref` | `HTMLUListElement \| undefined` | `undefined` | Retrieves the component's DOM element. |

**Sub-components:**

### List.Item
**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `style` | `JSX.CSSProperties` | `{}` | Inline styles to apply directly to the list item element. |
| `class` | `string` | `""` | Additional CSS classes for the list item element. |
| `children` | `JSX.Element` | `""` | Content to render inside the list item. |

### List.Icon
**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `style` | `JSX.CSSProperties` | `{}` | Inline styles to apply directly to the list icon element. |
| `class` | `string` | `""` | Additional CSS classes for the list icon element. |
| `children` | `JSX.Element` | `""` | Content to render inside the icon slot. |

**Minimal example:**
```typescript
import List from '@components/Layout/List/List';const App = () => {    return (        <List>            <List.Item>Item 1</List.Item>            <List.Item>Item 2</List.Item>            <List.Item>Item 3</List.Item>        </List>    );};export default App;
```

---
[TOPIC: gameface-ui-components]
[TYPE: api]
[SEVERITY: high]
[STATUS: verified]
[VERIFIED-BY: live-fetch]
[SOURCE: https://gameface-ui.coherent-labs.com/components/layout/relative/]

## Relative: Props and Usage

The `Relative` component renders an HTML `div` element with `position: relative`, acting as a positioning context for absolutely positioned children.

**Import:**
```typescript
import Relative from '@components/Layout/Relative/Relative';
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `style` | `JSX.CSSProperties` | `{}` | Inline styles to apply directly to the component's root element. |
| `class` | `string` | `""` | Additional CSS classes to apply to the component. |
| `ref` | `HTMLDivElement \| undefined` | `undefined` | Retrieves the component's DOM element. |

**Minimal example:**
```typescript
import Relative from '@components/Layout/Relative/Relative';import Absolute from '@components/Layout/Absolute/Absolute';const App = () => {    return (        <Relative>            <Absolute top="10px" left="10px">            </Absolute>        </Relative>    );};export default App;
```

---
[TOPIC: gameface-ui-components]
[TYPE: api]
[SEVERITY: high]
[STATUS: verified]
[VERIFIED-BY: live-fetch]
[SOURCE: https://gameface-ui.coherent-labs.com/components/layout/row/]

## Row: Props and Usage

The `Row` component renders an HTML `div` with a flexbox row layout, providing a horizontal container for column-based grids.

**Import:**
```typescript
import Row from '@components/Layout/Row/Row';
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `style` | `JSX.CSSProperties` | `{}` | Inline styles to apply directly to the component's root element. |
| `class` | `string` | `""` | Additional CSS classes to apply to the component. |
| `ref` | `HTMLDivElement \| undefined` | `undefined` | Retrieves the component's DOM element. |

**Minimal example:**
```typescript
import Row from '@components/Layout/Row/Row';const App = () => {    return (        <Row>            <div>Column 1</div>            <div>Column 2</div>        </Row>    );};export default App;
```

---
[TOPIC: gameface-ui-components]
[TYPE: api]
[SEVERITY: high]
[STATUS: verified]
[VERIFIED-BY: live-fetch]
[SOURCE: https://gameface-ui.coherent-labs.com/components/layout/scroll/]

## Scroll: Props and Usage

The `Scroll` component provides a scrollable container with a customizable scrollbar, enabling overflow content to be navigated.

**Import:**
```typescript
import Scroll from '@components/Layout/Scroll/Scroll';
```

**Named exports:**
```typescript
import Scroll, { ScrollComponentRef } from '@components/Layout/Scroll/Scroll';
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `style` | `JSX.CSSProperties` | `{}` | Inline styles to apply directly to the component's root element. |
| `class` | `string` | `""` | Additional CSS classes to apply to the component. |
| `ref` | `ScrollComponentRef \| undefined` | `undefined` | A reference to the Scroll component, providing access to its methods. |
| `direction` | `'horizontal' \| 'vertical'` | `'vertical'` | The scroll direction of the component. |

**Ref API - Methods:**
| Method | Parameters | Return | Description |
|--------|------------|--------|-------------|
| `scrollTo` | `position: number` | `void` | Scrolls to the specified position in pixels. |
| `scrollBy` | `amount: number` | `void` | Scrolls by the specified amount in pixels relative to the current scroll position. |
| `scrollToTop` | None | `void` | Scrolls to the top (or start) of the content. |
| `scrollToBottom` | None | `void` | Scrolls to the bottom (or end) of the content. |

**Sub-components:**

### Scroll.Content
**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `style` | `JSX.CSSProperties` | `{}` | Inline styles to apply directly to the scroll content wrapper. |
| `class` | `string` | `""` | Additional CSS classes for the scroll content wrapper. |
| `children` | `JSX.Element` | `""` | Content to be rendered inside the scrollable area. |

### Scroll.Bar
**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `style` | `JSX.CSSProperties` | `{}` | Inline styles to apply directly to the scrollbar track. |
| `class` | `string` | `""` | Additional CSS classes for the scrollbar track. |

### Scroll.Handle
**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `style` | `JSX.CSSProperties` | `{}` | Inline styles to apply directly to the scrollbar handle (thumb). |
| `class` | `string` | `""` | Additional CSS classes for the scrollbar handle. |

**Minimal example:**
```typescript
import Scroll from '@components/Layout/Scroll/Scroll';const App = () => {    return (        <Scroll style={{ height: '200px' }}>            <Scroll.Content>                <div style={{ height: '500px' }}>Scrollable content</div>            </Scroll.Content>            <Scroll.Bar>                <Scroll.Handle />            </Scroll.Bar>        </Scroll>    );};export default App;
```

---
[TOPIC: gameface-ui-components]
[TYPE: api]
[SEVERITY: high]
[STATUS: verified]
[VERIFIED-BY: live-fetch]
[SOURCE: https://gameface-ui.coherent-labs.com/components/layout/tab/]

## Tab: Props and Usage

The `Tab` component represents a single tab panel within a `Tabs` container, rendering its content when its associated tab link is active.

**Import:**
```typescript
import Tab from '@components/Layout/Tab/Tab';
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `style` | `JSX.CSSProperties` | `{}` | Inline styles to apply directly to the component's root element. |
| `class` | `string` | `""` | Additional CSS classes to apply to the component. |
| `ref` | `HTMLDivElement \| undefined` | `undefined` | Retrieves the component's DOM element. |
| `name` | `string` | `undefined` | A unique name that links this tab panel to a `TabLink` with the same name. |
| `selected` | `boolean` | `false` | Specifies if this tab panel is the default selected tab. |

**Minimal example:**
```typescript
import Tabs from '@components/Layout/Tabs/Tabs';import Tab from '@components/Layout/Tab/Tab';import TabLink from '@components/Layout/TabLink/TabLink';const App = () => {    return (        <Tabs>            <TabLink name="tab1" selected>Tab 1</TabLink>            <TabLink name="tab2">Tab 2</TabLink>            <Tab name="tab1" selected>Content for Tab 1</Tab>            <Tab name="tab2">Content for Tab 2</Tab>        </Tabs>    );};export default App;
```

---
[TOPIC: gameface-ui-components]
[TYPE: api]
[SEVERITY: high]
[STATUS: verified]
[VERIFIED-BY: live-fetch]
[SOURCE: https://gameface-ui.coherent-labs.com/components/layout/tab-link/]

## TabLink: Props and Usage

The `TabLink` component represents a clickable tab header that activates its associated `Tab` panel when clicked.

**Import:**
```typescript
import TabLink from '@components/Layout/TabLink/TabLink';
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `style` | `JSX.CSSProperties` | `{}` | Inline styles to apply directly to the component's root element. |
| `class` | `string` | `""` | Additional CSS classes to apply to the component. |
| `ref` | `HTMLDivElement \| undefined` | `undefined` | Retrieves the component's DOM element. |
| `name` | `string` | `undefined` | A unique name that links this tab link to a `Tab` panel with the same name. |
| `selected` | `boolean` | `false` | Specifies if this is the default selected tab link. |
| `class-selected` | `string` | `""` | Additional CSS classes to apply when the tab link is selected. |

**Minimal example:**
```typescript
import Tabs from '@components/Layout/Tabs/Tabs';import Tab from '@components/Layout/Tab/Tab';import TabLink from '@components/Layout/TabLink/TabLink';const App = () => {    return (        <Tabs>            <TabLink name="tab1" selected>Tab 1</TabLink>            <TabLink name="tab2">Tab 2</TabLink>            <Tab name="tab1" selected>Content for Tab 1</Tab>            <Tab name="tab2">Content for Tab 2</Tab>        </Tabs>    );};export default App;
```

---
[TOPIC: gameface-ui-components]
[TYPE: api]
[SEVERITY: high]
[STATUS: verified]
[VERIFIED-BY: live-fetch]
[SOURCE: https://gameface-ui.coherent-labs.com/components/layout/tabs/]

## Tabs: Props and Usage

The `Tabs` component serves as the outer container for a tabbed interface, managing the state of active tabs and rendering the appropriate `Tab` panels when `TabLink` components are clicked.

**Import:**
```typescript
import Tabs from '@components/Layout/Tabs/Tabs';
```

**Named exports:**
```typescript
import Tabs, { TabsComponentRef } from '@components/Layout/Tabs/Tabs';
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `style` | `JSX.CSSProperties` | `{}` | Inline styles to apply directly to the component's root element. |
| `class` | `string` | `""` | Additional CSS classes to apply to the component. |
| `ref` | `TabsComponentRef \| undefined` | `undefined` | A reference to the Tabs component, providing access to its methods. |
| `onChange` | `(name: string) => void` | `undefined` | Callback invoked when the active tab changes, providing the name of the new active tab. |

**Ref API - Methods:**
| Method | Parameters | Return | Description |
|--------|------------|--------|-------------|
| `selectTab` | `name: string` | `void` | Programmatically selects the tab with the specified name. |

**Minimal example:**
```typescript
import Tabs from '@components/Layout/Tabs/Tabs';import Tab from '@components/Layout/Tab/Tab';import TabLink from '@components/Layout/TabLink/TabLink';const App = () => {    return (        <Tabs>            <TabLink name="tab1" selected>Tab 1</TabLink>            <TabLink name="tab2">Tab 2</TabLink>            <Tab name="tab1" selected>Content for Tab 1</Tab>            <Tab name="tab2">Content for Tab 2</Tab>        </Tabs>    );};export default App;
```

---
[TOPIC: gameface-ui-components]
[TYPE: api]
[SEVERITY: high]
[STATUS: verified]
[VERIFIED-BY: live-fetch]
[SOURCE: https://gameface-ui.coherent-labs.com/components/layout/top/]

## Top: Props and Usage

The `Top` component positions its children at the top of a relatively positioned container, rendering an HTML `div` element with `position: absolute; top: 0`.

**Import:**
```typescript
import Top from '@components/Layout/Top/Top';
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `style` | `JSX.CSSProperties` | `{}` | Inline styles to apply directly to the component's root element. |
| `class` | `string` | `""` | Additional CSS classes to apply to the component. |
| `ref` | `HTMLDivElement \| undefined` | `undefined` | Retrieves the component's DOM element. |

**Minimal example:**
```typescript
import Top from '@components/Layout/Top/Top';const App = () => {    return (        <Relative>            <Top>Top content</Top>        </Relative>    );};export default App;
```

---
[TOPIC: gameface-ui-components]
[TYPE: api]
[SEVERITY: high]
[STATUS: verified]
[VERIFIED-BY: live-fetch]
[SOURCE: https://gameface-ui.coherent-labs.com/components/layout/transform/]

## Transform: Props and Usage

The `Transform` component applies 3D CSS transformations to its children, enabling rotation, translation, scaling, and skewing.

**Import:**
```typescript
import Transform from '@components/Layout/Transform/Transform';
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `style` | `JSX.CSSProperties` | `{}` | Inline styles to apply directly to the component's root element. |
| `class` | `string` | `""` | Additional CSS classes to apply to the component. |
| `ref` | `HTMLDivElement \| undefined` | `undefined` | Retrieves the component's DOM element. |
| `translate` | `string` | `undefined` | Sets the CSS `translate` transform (e.g., `"10px 20px 0px"`). |
| `rotate` | `string` | `undefined` | Sets the CSS `rotate` transform (e.g., `"0deg 30deg 0deg"`). |
| `scale` | `string` | `undefined` | Sets the CSS `scale` transform (e.g., `"1 1 1"`). |
| `skew` | `string` | `undefined` | Sets the CSS `skew` transform (e.g., `"10deg 0deg"`). |
| `matrix` | `string` | `undefined` | Sets the CSS `matrix3d` transform as a raw string. |
| `origin` | `string` | `undefined` | Sets the CSS `transform-origin` property. |

**Minimal example:**
```typescript
import Layout3D from '@components/Layout/Layout3D/Layout3D';import Transform from '@components/Layout/Transform/Transform';const App = () => {    return (        <Layout3D distance="800px">            <Transform rotate="0deg 30deg 0deg" translate="0px 0px -100px">                <div>3D transformed content</div>            </Transform>        </Layout3D>    );};export default App;
```

---
