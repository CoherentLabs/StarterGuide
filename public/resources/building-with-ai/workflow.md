# Migrating a XAML UI to Gameface

How to move a XAML or NoesisGUI screen to Gameface with nothing lost. "You" is whoever does the migration, usually an agent. "The owner" is the person you're doing it for.

The first half is the process. The [Reference](#reference) at the end holds the mappings, engine traps and tool notes, so look things up there as you need them.

## Priorities

Treat this as a real product migration: developers who never saw the XAML will own and extend your code. In order:

1. **Nothing is lost.** Every screen, state, animation, interaction and piece of data has a home in the new code, or a written reason why not.
2. **Developers can read it.** Someone can open the code, see what a button does when focused, and change it in a minute.
3. **It is idiomatic Gameface.** The XAML is the spec for look and behaviour, not for structure. Improve weak behaviour where you can, and say so.

Close enough, agreed up front, beats pixel-perfect. Your time and tokens are the owner's money.

## Before you start

Find out, from the request or by asking:

- **What you've been given.** XAML, resource dictionaries, ViewModel and code-behind, images and fonts, sample data, designs, video, a running build. See [What each source tells you](#what-each-source-tells-you).
- **Which source wins** when they disagree. Without an answer, designs win on look and XAML wins on behaviour.
- **The stack.** The suggested default is **Gameface UI with SolidJS**: ready-made components, frequent updates, and keyboard and gamepad handling through the Interaction Manager. If the owner asks for another stack, such as plain JS, use it and adapt what follows. Never switch stack on your own. For the default, see [Default stack setup](#default-stack-setup).
- **Scope, target resolution and tolerance.** If nobody sets a tolerance, use ±2px at the target resolution, and only for layout you can measure.

## Learn Gameface first

Gameface isn't a browser, and it ships a subset of web standards, so general web knowledge will mislead you. Before writing any code, learn how to author UI for it from the Gameface MCP, which is where this knowledge is kept up to date.

**Do**
- Read the engine rules: `get_code_instructions`.
- Read the docs index, the resource `gameface://rag/index`, then the topics your screen needs: layout, scalability, fonts and text, interactions, animations and performance.
- On the default stack, also read the Gameface UI overview and the docs for each component you plan to use, either from the `gameface://rag/` resources or with `search_gameface_docs`.
- Search again whenever you reach something new.

**Don't**
- Rely on what you remember about Gameface or its components. They change often.
- Treat this guide's Reference as more current than the MCP on engine and component facts. If they disagree there, the MCP wins. The project setup command and data flow in [Default stack setup](#default-stack-setup) are the exceptions.

**If the docs are wrong:** software changes, so test it on a small page. If what you see contradicts the docs, go with what you tested, and tell the owner: which doc, what it says, and what you saw.

## The process

### 1. Understand

Read everything before writing code, then write a short survey: screens, components, states and transitions, animations and what triggers them, data and commands, input, assets.

**Do**
- Read the whole source, including styles, templates, triggers and code-behind. Behaviour often hides there.
- Mark where each item came from: XAML, design, or the owner's notes.
- Show the owner the survey and your questions before building, if they're available.
- List anything the sources don't answer as a question.

**Don't**
- Guess at behaviour the sources don't show.
- Assume a running build exists. If one does, it's a check, not the spec.
- Port dead code. If a storyboard is never triggered, skip it and log that.

### 2. Build

Structure, layout, data, then input. Test each part in the Player as you go.

**Do**
- Use relative units, so the UI holds one look at every resolution.
- Try the stack's ready-made component first. If it doesn't fit, write a custom one and note why.
- Keep the game's data behind a clear boundary, so the real game can replace your mock.
- Keep the XAML's part names, so people can trace code back to the source.
- Open each file with a few lines on what it owns. Comment why, not what, and note where values came from.
- Carry over hit-testing. See [Hit-testing](#hit-testing).

**Don't**
- Scale text with `transform: scale`. It blurs.
- Copy XAML's structure element by element. Rebuild it as idiomatic layout.
- Ship generated code. Generated output is at most a spec.
- Write a tool for something MCP can do. If MCP fails and won't reconnect, stop and tell the owner.

### 3. Animate

JS decides which state an element is in, and CSS decides what that looks like.

**Do**
- Hand-write animations from the XAML's storyboards, following the [animation rules](#animation-rules).
- Keep animation CSS apart from layout CSS, grouped by component.
- Say in a comment what the viewer sees and how long it takes.

**Don't**
- Hold values with running animations.
- Animate layout properties when `opacity` or `transform` can do it.

### 4. Verify

Test after each part, not only at the end. When it works, show the owner, before spending more.

**Do**
- Compare MCP `take_screenshot` with the design at the same resolution.
- Check layout with MCP `assert_text_fits`, `assert_no_overlap` and `assert_within_parent`, and read `get_console_logs`.
- Run every interaction, state and input, including keyboard, and states that overlap, such as focused and hovered at once.
- Check animations and feel against the XAML's timings.
- Say how each thing was tested. Simulated input isn't a real mouse.
- Limit comparison rounds. Fix what's outside the tolerance, then move on. Two or three rounds is normal.

**Don't**
- Chase differences inside the tolerance, or rendering differences you can't control, such as text weight. Note them instead.
- Blame the engine or a tool without checking. Test the theory on a small page first.
- Build a heavier fix after a theory fails. Re-check the theory.

### 5. Report

Keep a migration log as you go, and finish with a short summary for the owner.

**Include**
- What's built and how to open it.
- Issues you hit, and what caused them.
- Every feature that doesn't map 1 to 1, with options and a recommendation.
- What's missing, what you changed on purpose, and what you couldn't verify.
- What you assumed in place of an answer.
- Anything in the docs that testing showed to be wrong.

**Don't**
- Report anything as working unless you ran it.
- Hide your own mistakes.
- Commit or publish anything unless asked.

Measure performance only when the owner asks. See [Performance](#performance).

## Stop and tell the owner

Some XAML features have no direct equivalent, and matching them exactly can cost more than they're worth. That choice belongs to the owner.

**Before building a workaround that would:**
- Replace something the engine should do with JS, such as text layout
- Add many extra elements, or layout work per frame
- Become a large part of the screen's code
- Need a second attempt, because the first failed

**Say, in a few lines:** what doesn't map, what Gameface does instead, two or three options with their cost including the simplest, and your recommendation.

**If the owner can't answer right now,** build the simplest option, such as left-aligned text in place of justified, and carry on. Don't build the expensive one in the meantime.

**Keep a list of every feature that doesn't map 1 to 1,** even ones you solved easily, and include it whenever you report:

| Feature | What Gameface does | Options and cost | Recommendation | Owner's decision |
|---|---|---|---|---|

## Done means

- Every survey item is migrated, or logged with a reason.
- No generated code ships.
- Every animation has a plain-language comment, and no more run at idle than visibly move.
- The console is clean, and every flow has been run.
- The list of features that don't map 1 to 1 has been reported.
- The owner has the summary, and knows they still need to click through it with a real mouse.

---

# Reference

## What each source tells you

| Source | Gives you | Doesn't give you |
|---|---|---|
| **XAML, resources** | Layout, styles, states, animations, triggers, bindings | Real values and game rules. It may not load on its own |
| **ViewModel, code-behind** | Data shape, commands, logic, custom behaviour | Look |
| **Sample data** | Realistic content and lengths | Live behaviour |
| **Designs, screenshots** | Intended look at one size | Motion, in-between states, edge cases |
| **Video** | Motion and flow | Exact values |
| **Running build** | Real look, states and timing | Intent: its bugs look like spec |

**How Noesis projects work:** programmers expose a `DataContext` from game code, and designers bind to it in Noesis Studio, or in Blend on older projects. The output is `.xaml` text files plus images and fonts in a folder the engine reads, so ask for the source files. A Studio project also has a `.noesis` XML file at its root, naming the startup document and design sizes.

## Default stack setup

**New project:** run `create-gameface-app <name> --template gameface-ui --default`, then remove the demo views. `gameface-cli` only adds and updates components. This is a hard rule: always start with this command, whatever else you read.

Project layout, building, running and styling are in the MCP docs (`gameface://rag/08-gameface-ui.md`). Where they differ from what the command scaffolds, follow the scaffolded project.

### Data flow: the game is the database

This is a hard rule for this stack: `engine.on` events feed Solid signals and stores. Don't use engine data binding, even where other docs show it.


The game owns the state. The Solid store is a mirror of it, plus UI-only state such as an open dropdown. Don't use engine data binding with Solid, because it fights Solid's reactivity.

```
game state --engine event--> store --> UI
UI --engine event--> game --patch event--> store
```

1. **On load:** the UI signals it's ready, and the game replies with a full snapshot event.
2. **On change:** the game sends a patch event with only what changed, such as `Screen.Patch { players: { 7: { kills: 44 } } }`.
3. **On user action:** the UI sends an event, such as `engine.trigger('Screen.Sort', 'kills')`. For data the game owns, the UI waits for the patch and doesn't change that data itself.
4. **In the store:** apply patches with `createStore` and `produce`. Pass ids between functions, not store objects, since `produce` hands out temporary wrappers. Compute derived values with memos.

**In the Player,** a small mock game module holds the state and uses the same events, so only that module changes in a real game. `engine.trigger` reaches `engine.on` handlers in the Player, synchronously, with object payloads intact (tested on Player 3.2.0.64).

### Components

Components change often, so check them in the MCP docs (`search_gameface_docs`, topic `gameface-ui-components`) and in your project's `src/components/`. Read a component's source before trusting it for anything unusual.

## XAML to Gameface

| XAML | Gameface | Watch out for |
|---|---|---|
| Star `Grid` rows and columns | Flex with `flex-grow` = star weight, `flex-basis: 0` | No CSS Grid |
| `Viewbox` | Wrapper `font-size` = the scale, with content in `em` | Fixed at design size, not re-fitted per aspect |
| Design size | `html` font-size from `vh`/`vw`, so 1rem = 1 design pixel | No `min()`/`clamp()`. Switch with an aspect-ratio `@media` |
| `Canvas` | `position: absolute` in rem or em | |
| Simple `Path` | `clip-path: polygon()` | |
| `Path` art | `.svg` | `Path` data is close to SVG `d`. See [Vector art](#helpers-you-may-need-to-write) |
| Gradients | CSS or SVG gradients | No `gradientTransform` or focal point in SVG. An alpha of exactly 0 can misbehave |
| `UniformToFill` / `Uniform` image | `background-size: cover` / `contain` | |
| `ImageBrush` atlas | `background-size` plus `background-position` in % | |
| `OpacityMask` | `mask-image: linear-gradient()` | Animated stops: `mask-size: 300%` and animate `mask-position` |
| Static `RenderTransform` | `transform` on an inner wrapper | An animated `transform` replaces the whole transform |
| `CompositeTransform3D` RotationY | `perspective` on the parent, `rotateY()` on the child | CSS turns the other way: `RotationY="-5"` is `rotateY(5deg)` |
| Nested 3D rotations | Siblings under one `perspective`, with worked-out `translate3d()` and `rotateY()` | Gameface flattens a rotation inside a rotation |
| `DropShadowEffect` | `filter: drop-shadow` or `text-shadow` | Creates a stacking context |
| `{Binding}`, ViewModel | Store fed by engine events. Plain JS stack: `createJSModel`, `data-bind-*` | Keep per-frame values small and separate |
| `ControlTemplate` | A component with `<prefix>__<Part>` classes | |
| `DataTemplate`, `ItemsControl`, `ListBox` | `<For>` with a component per item. Plain JS: `data-bind-for` | `data-bind-for`'s repeated element can't use its own iterator |
| `DataTrigger`, `EventTrigger` | Reactive classes, or event listeners that set classes | |
| `StringFormat`, converters | Small formatting functions | Check rounding against the design |
| `ComboBox` | `Dropdown`, restyled | Check which way it opens |
| `ScrollViewer` with custom `ScrollBar` | `Scroll`. Plain JS: `overflow: hidden`, `translateY`, wheel and thumb in JS | Compute positions from design numbers under tilt |
| Focus → `BringIntoView` | Scroll the focused control into view | WPF does this on focus, including focus from hover |
| `Popup` | `<Show>` with an absolute element | Inside a tilted panel, it tilts too |
| `KeyBinding`, `KeyTrigger` | `Navigation` actions | |
| `DragDrop.DoDragDrop` | `mousedown`, `mousemove`, `mouseup` on the document | No HTML5 drag and drop. Add Esc-to-cancel |
| `SetFocusAction`, `KeyboardNavigation` | JS focus tracking, or `Navigation` | No native focus visuals |
| `PlaySoundAction` | `engine.trigger(...)` in a game | No JS audio. `engine.call('runningInGame')` tells you where you are |
| `RichText`, inline formatting | `cohinline` on a `p` | See [Text](#engine-traps) |
| `{Loc}`, localized strings | Strings behind one `t(key)`, mocked in the Player | Real string tables are engine-side and need C++ |

### Hit-testing

WPF only hits painted pixels, and CSS hits an element's whole box. So `IsHitTestVisible="False"` and panels with no `Background` become `pointer-events: none`, with `auto` on the painted part. Otherwise a control's invisible decorations steal hover from its neighbour.

## Animation rules

1. **Held values are plain rules, never animations.** `animation: x 0.001s both` keeps an animation running forever.
2. **List only what changes.** Parts rest in the layout stylesheet, hidden ones at `opacity: 0`.
3. **Rest in the final look.** An intro then only names its delay, with `backwards` holding its first key.
4. **Animate `opacity` and `transform`.** Use a solid colour plus `opacity` rather than animating `rgba()` alpha.
5. **Share one keyframe list per behaviour,** named for it (`btn-focus-corner`), not by state and part.
6. **Flickers use `step-end`,** so each value holds until the next key.
7. **Give each part its own duration,** rather than stretching everything over the whole transition.
8. **Leave out 0% or 100% to use the resting value,** so parts with different rests can share keyframes.
9. **Use `transition` for one-key storyboards.** It starts from the current value and can be interrupted, like XAML.
10. **Later rules win:** put transitions after the state they lead to, and Pressed after Focused.

You may merge near-identical tracks when the difference can't be seen. Log what you merged.

## Engine traps

**Animation and CSS**

| Trap | What to do |
|---|---|
| Swapping animation classes in one tick can leave old values in place | Leave a two-frame gap, or remount with `<Show keyed>` |
| Transform transitions interpolate in the start value's units, and `none` doesn't interpolate | Same function list and units at both ends. Route through a custom property if the minifier strips units |
| `Animation` objects can't be seeked or paused from JS | `animation-play-state` |
| `var()` in shorthands is dropped, and custom properties don't interpolate in keyframes | Longhands only, literal values in keyframes |
| `calc()` can't mix percentages with other units | Use margins or a wrapper |
| No CSS Grid, `clamp`/`min`/`max`, `:has`, `:checked`, logical properties, `direction` and more | Follow `get_code_instructions` |
| `*/` inside a CSS comment kills the next rule | Reword the comment |
| `getComputedStyle` is empty for `transform`, `filter`, `background-image` | Check with screenshots |
| An absolute child's `100%` can be sized from the parent's content box | Put padding on an inner wrapper |
| Padding on a `flex-basis: 0` row adds to its share | Move it to a wrapper |

**Text**

| Trap | What to do |
|---|---|
| `<p>` has a default `margin: 1em` | Reset it |
| `cohinline` works on `p`, not `div` | Use `p` for inline text |
| `text-align: justify` is ignored inside `cohinline` | Ask before faking it in JS. It cost many extra elements and bugs when tried |
| `<br>` has no effect | Separate blocks |
| The space after an inline span can be lost, and a space alone in a span collapses | Keep spaces inside the text, or use `&nbsp;` |
| `top` is ignored on spans inside `cohinline` | Accept the offset, or restructure |
| `+{value}` in JSX makes two text nodes on separate lines | Use one expression |
| A font with no bold face gets faked bold | Use a real bold, or normal weight |
| Text renders heavier than Noesis | Don't chase it |

**DOM and data**

| Trap | What to do |
|---|---|
| `querySelectorAll('.a, .b')` can return all of `.a` then all of `.b`, not document order | Don't rely on the order |
| Layout rects can read 0 for a few frames after mount | Wait until they're non-zero |
| No `scroll` event for a `scrollTop` write of 0 or out of range, and the write reads back unclamped | Clamp and dispatch `scroll` yourself |
| Images are cached by URL until the Player restarts | Restart after changing an image |
| A view's `#root` has no height | Give it one, or `height: 100%` children collapse |
| `data-bind-class-toggle="a: {{x}};b: {{y}}"` | No space after `;` |

**Testing**

| Trap | What to do |
|---|---|
| A page reload kills a running eval, and calls queued behind it can hang | One call, wait, then the next |
| Synthetic `MouseEvent`s report `clientX/Y` 0, and `WheelEvent` can't be constructed | Use real input. See below |
| Typing through `interact_element` doesn't reach inputs | `press_key` per character |
| Screenshots are too slow for short intros | Remount, pause with `animation-play-state`, then shoot |
| `connect_browser` fails while the page hasn't loaded, or its file is missing | Check that the file exists, and retry |

## Tools

### MCP does most of it

| Need | MCP tool |
|---|---|
| Engine rules, docs | `get_code_instructions`, `search_gameface_docs`, resources under `gameface://rag/` |
| Connect | `connect_browser`. It attaches to one Player at a time, and has no disconnect: close the attached Player before connecting elsewhere |
| See the page | `take_screenshot`, `get_dom_tree`, `get_computed_styles`, `get_console_logs` |
| Run code | `eval_js`, including `document.elementFromPoint` scans for hit-testing |
| Input | `interact_element` (clicks, hover), `press_key`, `gamepad_input` |
| Layout checks | `assert_text_fits`, `assert_no_overlap`, `assert_within_parent` |
| Performance | `perf_profile`, `perf_trace`, `perf_lint`, `check_memory`, `get_image_cache_stats` |

**Start your own Player** on a free debug port, so you can't collide with one the owner has open:

```
Player.exe --remote-debugging-port=<port> --no-first-run --no-default-browser-check --enable-gui=false --width=<w> --height=<h> "file:///<path>/index.html"
```

Close only the Player you started, by its PID, when you finish.

### Helpers you may need to write

No scripts ship with this guide. Write a small helper only for what MCP can't do, keep it out of the shipped code, and mention it in your report.

**Real mouse input** (drags, wheel, scrollbars)
- PowerShell with `PostMessage`: `WM_MOUSEMOVE`, `WM_LBUTTONDOWN`/`UP`, `WM_MOUSEWHEEL`, and the button state in `wParam` on moves.
- Send it only to the window of a Player you started.
- Calibrate first, by logging `clientX`, as coordinates can arrive scaled.
- It doesn't update `:hover`. Test hover with `interact_element`.
- **Never use `SetCursorPos`, `mouse_event` or `SendInput`.** They move the owner's real cursor, and clicks can land in other windows.

**Vector art**
- Few shapes: move `Path` data into an SVG by hand, converting `Stretch` and margins into a `viewBox`.
- Many shapes: a small WPF script can load the XAML and export each shape with its final geometry. Only worth it on art-heavy screens.

**Layout numbers**
- Usually you can work them out from star sizes and margins, then check against a screenshot.
- If nested grids make that unreliable, a small WPF script can lay out the XAML and print each named element's box. It may not load if the XAML depends on custom types.

**Large storyboards**
- Read them directly. Only with hundreds of tracks is it worth scripting a draft timeline, as a spec that never ships.

**Image comparison**
- Viewing screenshots is usually enough. If you need numbers, a short script can blend or diff two PNGs of the same size.

### If you're given a running build

- **Capture only that app's window,** with `PrintWindow`. **Never capture the desktop:** `CopyFromScreen` can expose private content on the owner's screen.
- A WPF `Popup` is a separate window, so capture it separately and paint it over.
- **Don't move the real cursor** without the owner's OK. Noesis apps accept posted window messages.
- Plain WPF builds ignore posted mouse input. UI Automation can open dropdowns, select items and scroll, but not hover or press.
- WPF builds don't render Noesis-only features such as `Transform3D` and shaders.

## Performance

Only when the owner asks. They set the budget, and you may suggest one.

| Target frame rate | UI over a running game | Full-screen UI, game paused or light |
|---|---|---|
| 120 fps | 1 ms | 2 ms |
| 60 fps | 2 ms | 4 ms |
| 30 fps | 4 ms | 8 ms |

The owner saves it in `gameface-perf-budget.json`. Don't write that file yourself:

```json
{ "uiFrameBudgetMs": 2.0, "targetFps": 60, "note": "HUD over a running game" }
```

**Do**
- Agree the scenarios first: idle, common input, whatever updates many elements, scrolling, intros.
- Drive scenarios with a script in the page while `perf_profile` measures. Count what actually happened, such as drag starts.
- Compare engine ms per frame, not FPS. Remote desktop sessions can cap the frame rate.
- Re-measure your baseline in the same sitting. Conditions move every number, including window size and session state.
- Treat a difference smaller than `repeatabilityPct` as noise.
- Stop when within budget.

**Don't**
- Trust numbers recorded earlier under other conditions.
- Make idle captures shorter than the longest loop.
- Capture for much more than 8 seconds at high frame rates.
