# Change Log

## [6.11.0](https://www.github.com/appfolio/react-gears/compare/v6.10.0...v6.11.0) (2021-12-03)


### Features

* support innerRef for CurrencyInput ([14fd823](https://www.github.com/appfolio/react-gears/commit/14fd8233d6bb8a8ce56185bb4a5f5670a4340fc2))

## [6.10.0](https://www.github.com/appfolio/react-gears/compare/v6.9.4...v6.10.0) (2021-12-01)


### Features

* add generic to FormRow props so that inner component's props are strongly typed ([23ad41d](https://www.github.com/appfolio/react-gears/commit/23ad41db2674ca36ffde9901b88d245184166a5b))


### Bug Fixes

* make RadioInput's value prop optional ([be7dab2](https://www.github.com/appfolio/react-gears/commit/be7dab2fccf9868ede99df9ddb50e2c22a6d8301))

### [6.9.4](https://www.github.com/appfolio/react-gears/compare/v6.9.3...v6.9.4) (2021-11-13)


### Bug Fixes

* sync DateInput types with PropTypes ([0804977](https://www.github.com/appfolio/react-gears/commit/0804977a80b1735c291ee05877adb9c5ad75c052))

### [6.9.3](https://www.github.com/appfolio/react-gears/compare/v6.9.2...v6.9.3) (2021-11-02)


### Bug Fixes

* **Combobox:** fix menu closing when vertical scrollbar is clicked ([112c498](https://www.github.com/appfolio/react-gears/commit/112c4981a6a153e30fc6e44e6bef4e2f95db2f47))

### [6.9.2](https://www.github.com/appfolio/react-gears/compare/v6.9.1...v6.9.2) (2021-10-28)


### Bug Fixes

* **CurrencyInput:** conditionally exclude `value` key from props before passing it to `IMaskInput` ([de4bfe5](https://www.github.com/appfolio/react-gears/commit/de4bfe5126b723b6b8ce19d2a3630e4a77c645f2))


### Miscellaneous

* bump imask packages to latest ([247cbe6](https://www.github.com/appfolio/react-gears/commit/247cbe6039d99676ceb10e5e5b71940a72f309ce))
* move `[@types](https://www.github.com/types)` packages to dev dependencies ([815e780](https://www.github.com/appfolio/react-gears/commit/815e7800213f38d64ff86e69df3033823cd83bb6))

### [6.9.1](https://www.github.com/appfolio/react-gears/compare/v6.9.0...v6.9.1) (2021-10-26)


### Bug Fixes

* add correct param type for AddressInput component's onChange prop ([d7d8db4](https://www.github.com/appfolio/react-gears/commit/d7d8db4b437ecfadf7b081bb2593b745f160588d))

## [6.9.0](https://www.github.com/appfolio/react-gears/compare/v6.8.1...v6.9.0) (2021-10-19)


### Features

* **List:** add a conditional prop that controls if a row is selectable ([500368d](https://www.github.com/appfolio/react-gears/commit/500368d2016f04472dc3032325adba576a42b083))


### Miscellaneous

* add commitlint github action ([750cf01](https://www.github.com/appfolio/react-gears/commit/750cf0184ac58f32c0f6863bea9452cb2539f572))

### [6.8.1](https://www.github.com/appfolio/react-gears/compare/v6.8.0...v6.8.1) (2021-10-18)


### Bug Fixes

* remove .col-form-label from RadioGroup and CheckboxGroup to prevent gray labels ([75419e8](https://www.github.com/appfolio/react-gears/commit/75419e8b95f41da3a02bd6638a7bdb6e620f4747))


### Miscellaneous

* update docs for 6.8.0 ([c5c1d51](https://www.github.com/appfolio/react-gears/commit/c5c1d517dba7e896b5194fb418b3f8f8390ab0a7))

## [6.8.0](https://www.github.com/appfolio/react-gears/compare/v6.7.8...v6.8.0) (2021-10-18)


### Features

* Add react-gears-list ([f74bf6b](https://www.github.com/appfolio/react-gears/commit/f74bf6ba8651a13a099b7051f5b4007a35c89b1a))


### Bug Fixes

* **List:** fix select behavior and add better tests ([b07cf48](https://www.github.com/appfolio/react-gears/commit/b07cf48bf4933347d854644c3d5d6cba982b450b))
* **List:** prevent Item type from being a weak type ([c66642f](https://www.github.com/appfolio/react-gears/commit/c66642f659ed7eede8c54047e00a3e462a9ae534))


### Miscellaneous

* **List:** convert List and SortableList to ts ([1423980](https://www.github.com/appfolio/react-gears/commit/1423980a4ff70ed4c28b214186b62cda778f22d3))
* **storybook:** update story for status component to have 'none' option instead of '' ([c553356](https://www.github.com/appfolio/react-gears/commit/c553356aa303473a1a458076d8f89760d4181981))
* update eslint to use @typescript-eslint/no-unused-vars ([1249773](https://www.github.com/appfolio/react-gears/commit/12497736ce58c4d72ae737364011f48e62cbd8c4))
* update use-deep-compare-effect, react-use, and add @types/lodash.uniqueid ([1fa4265](https://www.github.com/appfolio/react-gears/commit/1fa4265c78d4ad2fb8d1e0d5744d5b03c2cb8fe0))

## [v4.9.0](https://github.com/appfolio/react-gears/tree/v4.9.0) (2018-10-18)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v4.8.3...v4.9.0)

**Merged pull requests:**

- gt - Fix reactstrap version at 6.3.x [\#483](https://github.com/appfolio/react-gears/pull/483) ([gthomas-appfolio](https://github.com/gthomas-appfolio))
- gt - Add positionFixed prop [\#482](https://github.com/appfolio/react-gears/pull/482) ([gthomas-appfolio](https://github.com/gthomas-appfolio))
- Add support for table cell truncate/ellipsis [\#480](https://github.com/appfolio/react-gears/pull/480) ([gthomas-appfolio](https://github.com/gthomas-appfolio))

## [v4.8.3](https://github.com/appfolio/react-gears/tree/v4.8.3) (2018-10-11)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v4.8.2...v4.8.3)

**Merged pull requests:**

- Correct CheckBoxBooleanInput [\#479](https://github.com/appfolio/react-gears/pull/479) ([gthomas-appfolio](https://github.com/gthomas-appfolio))

## [v4.8.2](https://github.com/appfolio/react-gears/tree/v4.8.2) (2018-10-10)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v4.8.1...v4.8.2)

**Merged pull requests:**

- Add minified displayNames [\#478](https://github.com/appfolio/react-gears/pull/478) ([gthomas-appfolio](https://github.com/gthomas-appfolio))

## [v4.8.1](https://github.com/appfolio/react-gears/tree/v4.8.1) (2018-10-09)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v4.8.0...v4.8.1)

**Merged pull requests:**

- Deprecate and correct ValidatedFormGroup [\#477](https://github.com/appfolio/react-gears/pull/477) ([gthomas-appfolio](https://github.com/gthomas-appfolio))
- Remove string refs [\#476](https://github.com/appfolio/react-gears/pull/476) ([wpliao1989](https://github.com/wpliao1989))

## [v4.8.0](https://github.com/appfolio/react-gears/tree/v4.8.0) (2018-10-05)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v4.7.2...v4.8.0)

**Merged pull requests:**

- Add missing components [\#475](https://github.com/appfolio/react-gears/pull/475) ([gthomas-appfolio](https://github.com/gthomas-appfolio))
- allow header of BlockPanel to have flexible class [\#474](https://github.com/appfolio/react-gears/pull/474) ([mqchau](https://github.com/mqchau))
- set flexbox to no wrap in title of BlockPanel [\#473](https://github.com/appfolio/react-gears/pull/473) ([mqchau](https://github.com/mqchau))
- Fix tests that are pending [\#472](https://github.com/appfolio/react-gears/pull/472) ([wpliao1989](https://github.com/wpliao1989))
- ml - remove nonexistent methods from method calls [\#471](https://github.com/appfolio/react-gears/pull/471) ([mosessliu](https://github.com/mosessliu))
- gt - Correct lint error [\#470](https://github.com/appfolio/react-gears/pull/470) ([gthomas-appfolio](https://github.com/gthomas-appfolio))

## [v4.7.2](https://github.com/appfolio/react-gears/tree/v4.7.2) (2018-09-27)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v4.7.1...v4.7.2)

**Implemented enhancements:**

- Fix linting errors in test folder [\#468](https://github.com/appfolio/react-gears/pull/468) ([wpliao1989](https://github.com/wpliao1989))

**Merged pull requests:**

- gt - Export Carousel components [\#469](https://github.com/appfolio/react-gears/pull/469) ([gthomas-appfolio](https://github.com/gthomas-appfolio))
- mb - fix uncontrolled table to update selected when new props provided [\#467](https://github.com/appfolio/react-gears/pull/467) ([mathewbaltes](https://github.com/mathewbaltes))
- gt - Fit images in ImageCarousel [\#466](https://github.com/appfolio/react-gears/pull/466) ([gthomas-appfolio](https://github.com/gthomas-appfolio))

## [v4.7.1](https://github.com/appfolio/react-gears/tree/v4.7.1) (2018-09-25)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v4.7.0...v4.7.1)

**Merged pull requests:**

- Fix weird parsing behavior in Time input [\#465](https://github.com/appfolio/react-gears/pull/465) ([darreneng](https://github.com/darreneng))
- gt - Correct eslint [\#464](https://github.com/appfolio/react-gears/pull/464) ([gthomas-appfolio](https://github.com/gthomas-appfolio))

## [v4.7.0](https://github.com/appfolio/react-gears/tree/v4.7.0) (2018-09-25)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v4.6.0...v4.7.0)

**Implemented enhancements:**

- Fix linting errors [\#462](https://github.com/appfolio/react-gears/pull/462) ([wpliao1989](https://github.com/wpliao1989))

**Closed issues:**

- Typescript type definitions [\#456](https://github.com/appfolio/react-gears/issues/456)
- Popover, Tooltip, HelpBubble should auto-position [\#291](https://github.com/appfolio/react-gears/issues/291)
- Bootstrap 4 Beta changes [\#283](https://github.com/appfolio/react-gears/issues/283)
- Tooltip + enzyme `mount` causes errors in tests [\#269](https://github.com/appfolio/react-gears/issues/269)
- CSS in React Gears [\#172](https://github.com/appfolio/react-gears/issues/172)

**Merged pull requests:**

- Add new time input [\#463](https://github.com/appfolio/react-gears/pull/463) ([darreneng](https://github.com/darreneng))

## [v4.6.0](https://github.com/appfolio/react-gears/tree/v4.6.0) (2018-09-14)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v4.5.0...v4.6.0)

**Merged pull requests:**

- new component TextCollapseByLength [\#460](https://github.com/appfolio/react-gears/pull/460) ([mqchau](https://github.com/mqchau))

## [v4.5.0](https://github.com/appfolio/react-gears/tree/v4.5.0) (2018-09-13)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v4.4.1...v4.5.0)

**Merged pull requests:**

- Update storybook config [\#458](https://github.com/appfolio/react-gears/pull/458) ([gthomas-appfolio](https://github.com/gthomas-appfolio))
- Add ImageCarousel [\#457](https://github.com/appfolio/react-gears/pull/457) ([gthomas-appfolio](https://github.com/gthomas-appfolio))
- Update TypeScript definition files [\#455](https://github.com/appfolio/react-gears/pull/455) ([steveklebanoff](https://github.com/steveklebanoff))

## [v4.4.1](https://github.com/appfolio/react-gears/tree/v4.4.1) (2018-09-12)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v4.4.0...v4.4.1)

**Merged pull requests:**

- gt - Correct Table props [\#453](https://github.com/appfolio/react-gears/pull/453) ([gthomas-appfolio](https://github.com/gthomas-appfolio))

## [v4.4.0](https://github.com/appfolio/react-gears/tree/v4.4.0) (2018-08-31)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v4.3.2...v4.4.0)

**Merged pull requests:**

- gt - WIP UncontrolledTable [\#440](https://github.com/appfolio/react-gears/pull/440) ([gthomas-appfolio](https://github.com/gthomas-appfolio))

## [v4.3.2](https://github.com/appfolio/react-gears/tree/v4.3.2) (2018-08-23)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v4.3.1...v4.3.2)

**Merged pull requests:**

- gt - Move classNames to inner pagination component [\#452](https://github.com/appfolio/react-gears/pull/452) ([gthomas-appfolio](https://github.com/gthomas-appfolio))

## [v4.3.1](https://github.com/appfolio/react-gears/tree/v4.3.1) (2018-08-23)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v3.1.1...v4.3.1)

**Merged pull requests:**

- gt - Add missing onClose type for DateInput [\#451](https://github.com/appfolio/react-gears/pull/451) ([gthomas-appfolio](https://github.com/gthomas-appfolio))

## [v3.1.1](https://github.com/appfolio/react-gears/tree/v3.1.1) (2018-08-22)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v4.3.0...v3.1.1)

**Merged pull requests:**

- td - add typescript definition for dateinput [\#450](https://github.com/appfolio/react-gears/pull/450) ([nonobitata](https://github.com/nonobitata))
- gt - Explicitly set Paginator classes to avoid APM conflict [\#449](https://github.com/appfolio/react-gears/pull/449) ([gthomas-appfolio](https://github.com/gthomas-appfolio))

## [v4.3.0](https://github.com/appfolio/react-gears/tree/v4.3.0) (2018-08-17)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v3.1.0...v4.3.0)

## [v3.1.0](https://github.com/appfolio/react-gears/tree/v3.1.0) (2018-08-17)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v4.2.0...v3.1.0)

**Merged pull requests:**

- Add date input on close [\#447](https://github.com/appfolio/react-gears/pull/447) ([gthomas-appfolio](https://github.com/gthomas-appfolio))
- gt - Add onClose event when closing DateInput [\#445](https://github.com/appfolio/react-gears/pull/445) ([gthomas-appfolio](https://github.com/gthomas-appfolio))

## [v4.2.0](https://github.com/appfolio/react-gears/tree/v4.2.0) (2018-08-17)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v4.1.0...v4.2.0)

**Merged pull requests:**

- gt - Add support for CustomInputs [\#444](https://github.com/appfolio/react-gears/pull/444) ([gthomas-appfolio](https://github.com/gthomas-appfolio))
- Fix incorrect prop type [\#443](https://github.com/appfolio/react-gears/pull/443) ([choruk](https://github.com/choruk))

## [v4.1.0](https://github.com/appfolio/react-gears/tree/v4.1.0) (2018-08-14)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v4.0.0...v4.1.0)

**Merged pull requests:**

- Update Paginator [\#442](https://github.com/appfolio/react-gears/pull/442) ([gthomas-appfolio](https://github.com/gthomas-appfolio))
- mj - hide delete and add buttons based on minimumRows and maximumRows… [\#441](https://github.com/appfolio/react-gears/pull/441) ([mjewell](https://github.com/mjewell))

## [v4.0.0](https://github.com/appfolio/react-gears/tree/v4.0.0) (2018-08-06)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v4.0.0-beta.1...v4.0.0)

**Merged pull requests:**

- gt/mb - Update app to React 16 [\#433](https://github.com/appfolio/react-gears/pull/433) ([mathewbaltes](https://github.com/mathewbaltes))

## [v4.0.0-beta.1](https://github.com/appfolio/react-gears/tree/v4.0.0-beta.1) (2018-08-06)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v4.0.0-beta...v4.0.0-beta.1)

**Merged pull requests:**

- gt - Correct FormLabelGroup/Row centering [\#439](https://github.com/appfolio/react-gears/pull/439) ([gthomas-appfolio](https://github.com/gthomas-appfolio))
- gt - Update FormChoice to support Bootstrap 4 [\#438](https://github.com/appfolio/react-gears/pull/438) ([gthomas-appfolio](https://github.com/gthomas-appfolio))

## [v4.0.0-beta](https://github.com/appfolio/react-gears/tree/v4.0.0-beta) (2018-08-01)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v3.0.2...v4.0.0-beta)

**Merged pull requests:**

- gt - Add Dropdown stories, UncontrolledDropdown [\#437](https://github.com/appfolio/react-gears/pull/437) ([gthomas-appfolio](https://github.com/gthomas-appfolio))
- gt - Update ExpandableSection with Collapse [\#436](https://github.com/appfolio/react-gears/pull/436) ([gthomas-appfolio](https://github.com/gthomas-appfolio))
- gt - Update BlockPanel dropdown [\#435](https://github.com/appfolio/react-gears/pull/435) ([gthomas-appfolio](https://github.com/gthomas-appfolio))

## [v3.0.2](https://github.com/appfolio/react-gears/tree/v3.0.2) (2018-07-19)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v3.0.1...v3.0.2)

**Merged pull requests:**

- Hex add classes to data pair and address input [\#434](https://github.com/appfolio/react-gears/pull/434) ([swangs](https://github.com/swangs))
- Update Typescript & types [\#432](https://github.com/appfolio/react-gears/pull/432) ([steveklebanoff](https://github.com/steveklebanoff))

## [v3.0.1](https://github.com/appfolio/react-gears/tree/v3.0.1) (2018-07-11)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v3.0.0...v3.0.1)

**Closed issues:**

- FormRow should support non-Input children [\#310](https://github.com/appfolio/react-gears/issues/310)

**Merged pull requests:**

- gt - Remove unused CSS transform [\#431](https://github.com/appfolio/react-gears/pull/431) ([gthomas-appfolio](https://github.com/gthomas-appfolio))
- gt -Update package-lock [\#430](https://github.com/appfolio/react-gears/pull/430) ([gthomas-appfolio](https://github.com/gthomas-appfolio))
- gt - Update FormRow, FormLabelGroup for React 16 [\#429](https://github.com/appfolio/react-gears/pull/429) ([gthomas-appfolio](https://github.com/gthomas-appfolio))

## [v3.0.0](https://github.com/appfolio/react-gears/tree/v3.0.0) (2018-07-03)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v2.26.0...v3.0.0)

**Closed issues:**

- Datapair style is inconsistent with FormLabelGroup [\#425](https://github.com/appfolio/react-gears/issues/425)

**Merged pull requests:**

- gt - Fix key error [\#428](https://github.com/appfolio/react-gears/pull/428) ([gthomas-appfolio](https://github.com/gthomas-appfolio))
- Update notes components [\#419](https://github.com/appfolio/react-gears/pull/419) ([joshuasbates](https://github.com/joshuasbates))

## [v2.26.0](https://github.com/appfolio/react-gears/tree/v2.26.0) (2018-06-25)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v2.25.1...v2.26.0)

**Closed issues:**

- SummaryBox should always have white background [\#413](https://github.com/appfolio/react-gears/issues/413)
- Add Typescript definitions [\#361](https://github.com/appfolio/react-gears/issues/361)

**Merged pull requests:**

- gt - Make AddressInput responsive [\#427](https://github.com/appfolio/react-gears/pull/427) ([gthomas-appfolio](https://github.com/gthomas-appfolio))
- Update data pair [\#426](https://github.com/appfolio/react-gears/pull/426) ([joshuasbates](https://github.com/joshuasbates))
- gt - Update nyc dep [\#424](https://github.com/appfolio/react-gears/pull/424) ([gthomas-appfolio](https://github.com/gthomas-appfolio))

## [v2.25.1](https://github.com/appfolio/react-gears/tree/v2.25.1) (2018-06-19)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v2.25.0...v2.25.1)

**Merged pull requests:**

- gt - Update SummaryBox to be BS4 friendly [\#423](https://github.com/appfolio/react-gears/pull/423) ([gthomas-appfolio](https://github.com/gthomas-appfolio))

## [v2.25.0](https://github.com/appfolio/react-gears/tree/v2.25.0) (2018-06-19)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v2.24.5...v2.25.0)

**Merged pull requests:**

- Correct FormRow and FormLabelGroup width [\#422](https://github.com/appfolio/react-gears/pull/422) ([gthomas-appfolio](https://github.com/gthomas-appfolio))
- mj - support className on sortable table column [\#421](https://github.com/appfolio/react-gears/pull/421) ([mjewell](https://github.com/mjewell))

## [v2.24.5](https://github.com/appfolio/react-gears/tree/v2.24.5) (2018-06-12)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v2.24.4...v2.24.5)

**Merged pull requests:**

- Style cleanup [\#417](https://github.com/appfolio/react-gears/pull/417) ([gthomas-appfolio](https://github.com/gthomas-appfolio))
- gt - Add oportal theme to docs [\#415](https://github.com/appfolio/react-gears/pull/415) ([gthomas-appfolio](https://github.com/gthomas-appfolio))

## [v2.24.4](https://github.com/appfolio/react-gears/tree/v2.24.4) (2018-05-31)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v2.24.3...v2.24.4)

**Merged pull requests:**

- gt - Correct BoundForm [\#412](https://github.com/appfolio/react-gears/pull/412) ([gthomas-appfolio](https://github.com/gthomas-appfolio))

## [v2.24.3](https://github.com/appfolio/react-gears/tree/v2.24.3) (2018-05-30)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v2.24.2...v2.24.3)

**Merged pull requests:**

- gt -  Add className to HMFRow [\#411](https://github.com/appfolio/react-gears/pull/411) ([gthomas-appfolio](https://github.com/gthomas-appfolio))

## [v2.24.2](https://github.com/appfolio/react-gears/tree/v2.24.2) (2018-05-29)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v2.24.1...v2.24.2)

**Merged pull requests:**

- gt - Correct prop error on Select multi [\#410](https://github.com/appfolio/react-gears/pull/410) ([gthomas-appfolio](https://github.com/gthomas-appfolio))

## [v2.24.1](https://github.com/appfolio/react-gears/tree/v2.24.1) (2018-05-24)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v2.24.0...v2.24.1)

**Merged pull requests:**

- gt - Update HMF Tooltip [\#409](https://github.com/appfolio/react-gears/pull/409) ([gthomas-appfolio](https://github.com/gthomas-appfolio))
- st - make HasManyFieldsRow disabled tooltip placement customizable [\#407](https://github.com/appfolio/react-gears/pull/407) ([sveinn](https://github.com/sveinn))

## [v2.24.0](https://github.com/appfolio/react-gears/tree/v2.24.0) (2018-05-21)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v2.23.1...v2.24.0)

**Merged pull requests:**

- Update nvmrc to 8.11.2 [\#406](https://github.com/appfolio/react-gears/pull/406) ([steveklebanoff](https://github.com/steveklebanoff))
- First pass at TypeSafety [\#368](https://github.com/appfolio/react-gears/pull/368) ([steveklebanoff](https://github.com/steveklebanoff))

## [v2.23.1](https://github.com/appfolio/react-gears/tree/v2.23.1) (2018-05-14)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v2.23.0...v2.23.1)

**Merged pull requests:**

- gt - Correct open prop [\#405](https://github.com/appfolio/react-gears/pull/405) ([gthomas-appfolio](https://github.com/gthomas-appfolio))

## [v2.23.0](https://github.com/appfolio/react-gears/tree/v2.23.0) (2018-05-10)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v2.22.1...v2.23.0)

**Merged pull requests:**

- gt - Add tooltip and disabledReason to HMFRow [\#396](https://github.com/appfolio/react-gears/pull/396) ([gthomas-appfolio](https://github.com/gthomas-appfolio))

## [v2.22.1](https://github.com/appfolio/react-gears/tree/v2.22.1) (2018-05-10)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v2.22.0...v2.22.1)

**Closed issues:**

- BoundForm should support reset, update of object [\#391](https://github.com/appfolio/react-gears/issues/391)

## [v2.22.0](https://github.com/appfolio/react-gears/tree/v2.22.0) (2018-05-04)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v2.21.4...v2.22.0)

**Merged pull requests:**

- Update BoundForm to allow update of object through new props [\#403](https://github.com/appfolio/react-gears/pull/403) ([joshuasbates](https://github.com/joshuasbates))

## [v2.21.4](https://github.com/appfolio/react-gears/tree/v2.21.4) (2018-05-04)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v2.21.3...v2.21.4)

**Merged pull requests:**

- Bootstrap v4 prep [\#402](https://github.com/appfolio/react-gears/pull/402) ([gthomas-appfolio](https://github.com/gthomas-appfolio))

## [v2.21.3](https://github.com/appfolio/react-gears/tree/v2.21.3) (2018-05-03)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v2.21.2...v2.21.3)

**Closed issues:**

- Extra padding on AddressInput without a country makes HMF delete button too big [\#400](https://github.com/appfolio/react-gears/issues/400)

**Merged pull requests:**

- mj/st - remove bottom margin of last row if there is no country [\#401](https://github.com/appfolio/react-gears/pull/401) ([mjewell](https://github.com/mjewell))

## [v2.21.2](https://github.com/appfolio/react-gears/tree/v2.21.2) (2018-04-26)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v2.21.1...v2.21.2)

**Merged pull requests:**

- gt - Make Select input full width [\#395](https://github.com/appfolio/react-gears/pull/395) ([gthomas-appfolio](https://github.com/gthomas-appfolio))

## [v2.21.1](https://github.com/appfolio/react-gears/tree/v2.21.1) (2018-04-24)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v2.21.0...v2.21.1)

**Merged pull requests:**

- Exclude state prop from openProps for DateInput component [\#394](https://github.com/appfolio/react-gears/pull/394) ([ozhe](https://github.com/ozhe))
- Use CircleCI 2.0 [\#392](https://github.com/appfolio/react-gears/pull/392) ([aaronpanch](https://github.com/aaronpanch))

## [v2.21.0](https://github.com/appfolio/react-gears/tree/v2.21.0) (2018-04-18)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v2.20.0...v2.21.0)

**Merged pull requests:**

- gt - Add delete confirmation for HMF [\#390](https://github.com/appfolio/react-gears/pull/390) ([gthomas-appfolio](https://github.com/gthomas-appfolio))
- gt - Update Progress docs [\#389](https://github.com/appfolio/react-gears/pull/389) ([gthomas-appfolio](https://github.com/gthomas-appfolio))

## [v2.20.0](https://github.com/appfolio/react-gears/tree/v2.20.0) (2018-04-17)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v2.19.0...v2.20.0)

**Merged pull requests:**

- mj - make has many fields buttons less colorful [\#388](https://github.com/appfolio/react-gears/pull/388) ([mjewell](https://github.com/mjewell))

## [v2.19.0](https://github.com/appfolio/react-gears/tree/v2.19.0) (2018-04-17)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v2.18.1...v2.19.0)

**Merged pull requests:**

- Force bump react select plus [\#387](https://github.com/appfolio/react-gears/pull/387) ([natalieschauser](https://github.com/natalieschauser))
- gt - Add new URL for latest APM styles [\#384](https://github.com/appfolio/react-gears/pull/384) ([gthomas-appfolio](https://github.com/gthomas-appfolio))

## [v2.18.1](https://github.com/appfolio/react-gears/tree/v2.18.1) (2018-04-06)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v2.18.0...v2.18.1)

**Merged pull requests:**

- gt - Correct required indicator [\#383](https://github.com/appfolio/react-gears/pull/383) ([gthomas-appfolio](https://github.com/gthomas-appfolio))

## [v2.18.0](https://github.com/appfolio/react-gears/tree/v2.18.0) (2018-04-06)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v2.17.0...v2.18.0)

**Merged pull requests:**

- gt - Update to new npm repo [\#382](https://github.com/appfolio/react-gears/pull/382) ([gthomas-appfolio](https://github.com/gthomas-appfolio))
- Make required asterix align after text [\#381](https://github.com/appfolio/react-gears/pull/381) ([gthomas-appfolio](https://github.com/gthomas-appfolio))
- Add form label group [\#380](https://github.com/appfolio/react-gears/pull/380) ([gthomas-appfolio](https://github.com/gthomas-appfolio))
- gt - Form label group additions [\#378](https://github.com/appfolio/react-gears/pull/378) ([gthomas-appfolio](https://github.com/gthomas-appfolio))
- Add support for passing errors to HasManyFields component [\#377](https://github.com/appfolio/react-gears/pull/377) ([choruk](https://github.com/choruk))
- gt - Update Steps li to give equal widths [\#376](https://github.com/appfolio/react-gears/pull/376) ([gthomas-appfolio](https://github.com/gthomas-appfolio))

## [v2.17.0](https://github.com/appfolio/react-gears/tree/v2.17.0) (2018-03-26)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v2.16.0...v2.17.0)

**Merged pull requests:**

- Update DataPair color to match APM [\#374](https://github.com/appfolio/react-gears/pull/374) ([gthomas-appfolio](https://github.com/gthomas-appfolio))
- gt - Add color prop to BlockPanel [\#373](https://github.com/appfolio/react-gears/pull/373) ([gthomas-appfolio](https://github.com/gthomas-appfolio))

## [v2.16.0](https://github.com/appfolio/react-gears/tree/v2.16.0) (2018-03-20)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v2.15.0...v2.16.0)

**Closed issues:**

- BlockPanel renders empty body if no children [\#371](https://github.com/appfolio/react-gears/issues/371)

**Merged pull requests:**

- Add support for row onClick to SortableTable [\#366](https://github.com/appfolio/react-gears/pull/366) ([zldavis](https://github.com/zldavis))

## [v2.15.0](https://github.com/appfolio/react-gears/tree/v2.15.0) (2018-03-14)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v2.14.1...v2.15.0)

**Merged pull requests:**

- gt - Updates to BlockPanel [\#372](https://github.com/appfolio/react-gears/pull/372) ([gthomas-appfolio](https://github.com/gthomas-appfolio))
- gt - Add creatable and multiple support to Select [\#370](https://github.com/appfolio/react-gears/pull/370) ([gthomas-appfolio](https://github.com/gthomas-appfolio))

## [v2.14.1](https://github.com/appfolio/react-gears/tree/v2.14.1) (2018-02-28)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v2.14.0...v2.14.1)

**Closed issues:**

- DateInput should allow ...props passed to input [\#364](https://github.com/appfolio/react-gears/issues/364)

**Merged pull requests:**

- Export Collapse from reactstrap [\#367](https://github.com/appfolio/react-gears/pull/367) ([zldavis](https://github.com/zldavis))

## [v2.14.0](https://github.com/appfolio/react-gears/tree/v2.14.0) (2018-02-23)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v2.13.1...v2.14.0)

**Merged pull requests:**

- gt - Support open props for DateInput [\#365](https://github.com/appfolio/react-gears/pull/365) ([gthomas-appfolio](https://github.com/gthomas-appfolio))

## [v2.13.1](https://github.com/appfolio/react-gears/tree/v2.13.1) (2018-02-07)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v2.13.0...v2.13.1)

**Merged pull requests:**

- zd - Allow passing state to BlockPanel open prop [\#362](https://github.com/appfolio/react-gears/pull/362) ([zldavis](https://github.com/zldavis))

## [v2.13.0](https://github.com/appfolio/react-gears/tree/v2.13.0) (2018-01-29)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v2.12.1...v2.13.0)

**Merged pull requests:**

- Time Picker Component [\#355](https://github.com/appfolio/react-gears/pull/355) ([malively](https://github.com/malively))

## [v2.12.1](https://github.com/appfolio/react-gears/tree/v2.12.1) (2018-01-23)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v2.12.0...v2.12.1)

**Merged pull requests:**

- gt - Add onBlur to AddressInput [\#358](https://github.com/appfolio/react-gears/pull/358) ([gthomas-appfolio](https://github.com/gthomas-appfolio))

## [v2.12.0](https://github.com/appfolio/react-gears/tree/v2.12.0) (2018-01-11)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v2.11.0...v2.12.0)

**Merged pull requests:**

- mj - add tabindex to select close link so we dont tab to it [\#356](https://github.com/appfolio/react-gears/pull/356) ([mjewell](https://github.com/mjewell))

## [v2.11.0](https://github.com/appfolio/react-gears/tree/v2.11.0) (2017-12-26)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v2.10.0...v2.11.0)

**Merged pull requests:**

- ap - create bound HOC to enroll components with BoundForms [\#354](https://github.com/appfolio/react-gears/pull/354) ([aaronpanch](https://github.com/aaronpanch))

## [v2.10.0](https://github.com/appfolio/react-gears/tree/v2.10.0) (2017-12-18)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v2.9.1...v2.10.0)

**Merged pull requests:**

- gt - Default Modal fade to false [\#353](https://github.com/appfolio/react-gears/pull/353) ([gthomas-appfolio](https://github.com/gthomas-appfolio))
- Add column align to SortableTable [\#352](https://github.com/appfolio/react-gears/pull/352) ([gthomas-appfolio](https://github.com/gthomas-appfolio))

## [v2.9.1](https://github.com/appfolio/react-gears/tree/v2.9.1) (2017-12-16)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v2.9.0...v2.9.1)

**Merged pull requests:**

- gt - Add className support to SummaryBox [\#351](https://github.com/appfolio/react-gears/pull/351) ([gthomas-appfolio](https://github.com/gthomas-appfolio))

## [v2.9.0](https://github.com/appfolio/react-gears/tree/v2.9.0) (2017-12-14)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v2.8.1...v2.9.0)

**Merged pull requests:**

- gt - Add option to disable country in AddressInput [\#350](https://github.com/appfolio/react-gears/pull/350) ([gthomas-appfolio](https://github.com/gthomas-appfolio))

## [v2.8.1](https://github.com/appfolio/react-gears/tree/v2.8.1) (2017-12-14)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v2.8.0...v2.8.1)

**Merged pull requests:**

- gt - Fix react-select version [\#349](https://github.com/appfolio/react-gears/pull/349) ([gthomas-appfolio](https://github.com/gthomas-appfolio))
- Update sortable table story [\#348](https://github.com/appfolio/react-gears/pull/348) ([gthomas-appfolio](https://github.com/gthomas-appfolio))
- Add e.stopPropagation\(\) in the onToggle in the HelpBubble component [\#347](https://github.com/appfolio/react-gears/pull/347) ([shiboying](https://github.com/shiboying))

## [v2.8.0](https://github.com/appfolio/react-gears/tree/v2.8.0) (2017-12-13)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v2.7.4...v2.8.0)

**Merged pull requests:**

- gt - Add expandable row to SortableTable [\#346](https://github.com/appfolio/react-gears/pull/346) ([gthomas-appfolio](https://github.com/gthomas-appfolio))

## [v2.7.4](https://github.com/appfolio/react-gears/tree/v2.7.4) (2017-12-11)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v2.7.3...v2.7.4)

**Closed issues:**

- Date Picker should close the picker when user presses enter [\#342](https://github.com/appfolio/react-gears/issues/342)
- Aaron is too cool [\#338](https://github.com/appfolio/react-gears/issues/338)

**Merged pull requests:**

- Update DateInput.js [\#345](https://github.com/appfolio/react-gears/pull/345) ([balloob](https://github.com/balloob))
- Prevent default action for Enter/Esc when Date Input picker is open. [\#344](https://github.com/appfolio/react-gears/pull/344) ([balloob](https://github.com/balloob))
- Add class to Select component when in Async mode for testing [\#343](https://github.com/appfolio/react-gears/pull/343) ([zldavis](https://github.com/zldavis))
- gt - Update docs build [\#341](https://github.com/appfolio/react-gears/pull/341) ([gthomas-appfolio](https://github.com/gthomas-appfolio))
- gt - Update Icon story [\#340](https://github.com/appfolio/react-gears/pull/340) ([gthomas-appfolio](https://github.com/gthomas-appfolio))
- Fix deprecated mocha option [\#339](https://github.com/appfolio/react-gears/pull/339) ([balloob](https://github.com/balloob))

## [v2.7.3](https://github.com/appfolio/react-gears/tree/v2.7.3) (2017-11-22)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v2.7.2...v2.7.3)

**Closed issues:**

- Add attachments block [\#118](https://github.com/appfolio/react-gears/issues/118)

**Merged pull requests:**

- Update disabled Select style [\#337](https://github.com/appfolio/react-gears/pull/337) ([almgong](https://github.com/almgong))

## [v2.7.2](https://github.com/appfolio/react-gears/tree/v2.7.2) (2017-11-18)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v2.7.1...v2.7.2)

**Closed issues:**

- CreditCardNumber shows type PropType error used with FormRow [\#330](https://github.com/appfolio/react-gears/issues/330)

**Merged pull requests:**

- gt - Correct import/export of ListGroupItem [\#335](https://github.com/appfolio/react-gears/pull/335) ([gthomas-appfolio](https://github.com/gthomas-appfolio))

## [v2.7.1](https://github.com/appfolio/react-gears/tree/v2.7.1) (2017-11-14)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v2.7.0...v2.7.1)

**Merged pull requests:**

- ap - remove props that are provided as context in BoundForm [\#334](https://github.com/appfolio/react-gears/pull/334) ([aaronpanch](https://github.com/aaronpanch))

## [v2.7.0](https://github.com/appfolio/react-gears/tree/v2.7.0) (2017-11-13)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v2.6.2...v2.7.0)

**Merged pull requests:**

- BoundForm Props [\#333](https://github.com/appfolio/react-gears/pull/333) ([aaronpanch](https://github.com/aaronpanch))

## [v2.6.2](https://github.com/appfolio/react-gears/tree/v2.6.2) (2017-11-06)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v2.6.1...v2.6.2)

**Merged pull requests:**

- gt - Disable non APPF themes [\#332](https://github.com/appfolio/react-gears/pull/332) ([gthomas-appfolio](https://github.com/gthomas-appfolio))
- CreditCardNumber disallow setting type [\#331](https://github.com/appfolio/react-gears/pull/331) ([gthomas-appfolio](https://github.com/gthomas-appfolio))

## [v2.6.1](https://github.com/appfolio/react-gears/tree/v2.6.1) (2017-11-03)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v2.6.0...v2.6.1)

**Merged pull requests:**

- Fix help bubble not closing [\#329](https://github.com/appfolio/react-gears/pull/329) ([mjewell](https://github.com/mjewell))
- gt - Update APM CDN urls to https [\#328](https://github.com/appfolio/react-gears/pull/328) ([gthomas-appfolio](https://github.com/gthomas-appfolio))

## [v2.6.0](https://github.com/appfolio/react-gears/tree/v2.6.0) (2017-11-02)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v2.5.0...v2.6.0)

**Merged pull requests:**

- gt - Update storybook [\#327](https://github.com/appfolio/react-gears/pull/327) ([gthomas-appfolio](https://github.com/gthomas-appfolio))
- JB-activity log [\#308](https://github.com/appfolio/react-gears/pull/308) ([joelbandi](https://github.com/joelbandi))

## [v2.5.0](https://github.com/appfolio/react-gears/tree/v2.5.0) (2017-10-28)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v2.4.0...v2.5.0)

**Merged pull requests:**

- Update nyc [\#323](https://github.com/appfolio/react-gears/pull/323) ([gthomas-appfolio](https://github.com/gthomas-appfolio))
- Replace AddressInput Selects [\#321](https://github.com/appfolio/react-gears/pull/321) ([gthomas-appfolio](https://github.com/gthomas-appfolio))

## [v2.4.0](https://github.com/appfolio/react-gears/tree/v2.4.0) (2017-10-27)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v2.3.2...v2.4.0)

**Merged pull requests:**

- Hex - change label type to node for form row and data pair [\#322](https://github.com/appfolio/react-gears/pull/322) ([ipmsteven](https://github.com/ipmsteven))
- gt - Update eslint [\#318](https://github.com/appfolio/react-gears/pull/318) ([gthomas-appfolio](https://github.com/gthomas-appfolio))

## [v2.3.2](https://github.com/appfolio/react-gears/tree/v2.3.2) (2017-10-26)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v2.3.1...v2.3.2)

**Closed issues:**

- Options for transpiled vs source-based package distribution? [\#85](https://github.com/appfolio/react-gears/issues/85)

**Merged pull requests:**

- kg: hide safari autofill icon in react select [\#320](https://github.com/appfolio/react-gears/pull/320) ([buronnie](https://github.com/buronnie))

## [v2.3.1](https://github.com/appfolio/react-gears/tree/v2.3.1) (2017-10-20)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v2.3.0...v2.3.1)

**Merged pull requests:**

- update the id prop in date input [\#317](https://github.com/appfolio/react-gears/pull/317) ([buronnie](https://github.com/buronnie))
- kg: add id prop to date input [\#316](https://github.com/appfolio/react-gears/pull/316) ([buronnie](https://github.com/buronnie))

## [v2.3.0](https://github.com/appfolio/react-gears/tree/v2.3.0) (2017-10-20)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v2.2.0...v2.3.0)

**Merged pull requests:**

- kg: add focus to AddressInput component [\#313](https://github.com/appfolio/react-gears/pull/313) ([buronnie](https://github.com/buronnie))

## [v2.2.0](https://github.com/appfolio/react-gears/tree/v2.2.0) (2017-10-19)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v2.1.1...v2.2.0)

**Merged pull requests:**

- gt - Add ID prop to AddressInput [\#314](https://github.com/appfolio/react-gears/pull/314) ([gthomas-appfolio](https://github.com/gthomas-appfolio))

## [v2.1.1](https://github.com/appfolio/react-gears/tree/v2.1.1) (2017-10-13)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v2.1.0...v2.1.1)

**Merged pull requests:**

- kg: add focus functionality to DateInput [\#312](https://github.com/appfolio/react-gears/pull/312) ([buronnie](https://github.com/buronnie))

## [v2.1.0](https://github.com/appfolio/react-gears/tree/v2.1.0) (2017-10-10)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v2.0.0...v2.1.0)

**Merged pull requests:**

- gt - Add SortableTable [\#307](https://github.com/appfolio/react-gears/pull/307) ([gthomas-appfolio](https://github.com/gthomas-appfolio))
- mj - allow other props to be passed through to checkbox, such as `disabled` [\#304](https://github.com/appfolio/react-gears/pull/304) ([mjewell](https://github.com/mjewell))

## [v2.0.0](https://github.com/appfolio/react-gears/tree/v2.0.0) (2017-09-23)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v1.29.1...v2.0.0)

**Closed issues:**

- \<DateInput /\> Don't real-time format the value when onChange [\#292](https://github.com/appfolio/react-gears/issues/292)
- Select highlight uses hard-coded Saffron color [\#195](https://github.com/appfolio/react-gears/issues/195)
- Use peerDependencies [\#81](https://github.com/appfolio/react-gears/issues/81)

**Merged pull requests:**

- Update DateMonth [\#303](https://github.com/appfolio/react-gears/pull/303) ([gthomas-appfolio](https://github.com/gthomas-appfolio))
- gt - Correct `undefined` showing up in classNames [\#302](https://github.com/appfolio/react-gears/pull/302) ([gthomas-appfolio](https://github.com/gthomas-appfolio))
- Update Steps [\#301](https://github.com/appfolio/react-gears/pull/301) ([gthomas-appfolio](https://github.com/gthomas-appfolio))
- gt - Update Spinner to use SVG vs CSS for shapes [\#300](https://github.com/appfolio/react-gears/pull/300) ([gthomas-appfolio](https://github.com/gthomas-appfolio))
- UpdateDepsAndStories [\#299](https://github.com/appfolio/react-gears/pull/299) ([gthomas-appfolio](https://github.com/gthomas-appfolio))
- gt - Correct AddressInput warnings [\#298](https://github.com/appfolio/react-gears/pull/298) ([gthomas-appfolio](https://github.com/gthomas-appfolio))
- gt - Add labels to AddressInput [\#297](https://github.com/appfolio/react-gears/pull/297) ([gthomas-appfolio](https://github.com/gthomas-appfolio))
- gt - Refactor Credit Cards components [\#296](https://github.com/appfolio/react-gears/pull/296) ([gthomas-appfolio](https://github.com/gthomas-appfolio))

## [v1.29.1](https://github.com/appfolio/react-gears/tree/v1.29.1) (2017-09-09)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v1.29.0...v1.29.1)

**Merged pull requests:**

- Make lib export do commonjs2 [\#295](https://github.com/appfolio/react-gears/pull/295) ([balloob](https://github.com/balloob))

## [v1.29.0](https://github.com/appfolio/react-gears/tree/v1.29.0) (2017-09-08)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v1.28.0...v1.29.0)

**Merged pull requests:**

- ps - improve the bundle [\#290](https://github.com/appfolio/react-gears/pull/290) ([balloob](https://github.com/balloob))
- Add webpack config to generate a lib folder with individual files [\#286](https://github.com/appfolio/react-gears/pull/286) ([balloob](https://github.com/balloob))

## [v1.28.0](https://github.com/appfolio/react-gears/tree/v1.28.0) (2017-09-08)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v1.27.0...v1.28.0)

**Closed issues:**

- DateInput - disable arrow keys when picker closed [\#289](https://github.com/appfolio/react-gears/issues/289)
- Export remaining reactstrap components to lib [\#287](https://github.com/appfolio/react-gears/issues/287)

**Merged pull requests:**

- gt/ps - Do not format input value if typing date [\#293](https://github.com/appfolio/react-gears/pull/293) ([gthomas-appfolio](https://github.com/gthomas-appfolio))
- Create individual files for reactstrap re-exports [\#288](https://github.com/appfolio/react-gears/pull/288) ([balloob](https://github.com/balloob))
- ps - Do not import from index [\#285](https://github.com/appfolio/react-gears/pull/285) ([balloob](https://github.com/balloob))

## [v1.27.0](https://github.com/appfolio/react-gears/tree/v1.27.0) (2017-08-22)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v1.26.1...v1.27.0)

**Closed issues:**

- Select - use a BS4 color var for highlight color vs fixed APM color [\#279](https://github.com/appfolio/react-gears/issues/279)

**Merged pull requests:**

- gt - Add className to FormRow [\#284](https://github.com/appfolio/react-gears/pull/284) ([gthomas-appfolio](https://github.com/gthomas-appfolio))

## [v1.26.1](https://github.com/appfolio/react-gears/tree/v1.26.1) (2017-08-14)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v1.26.0...v1.26.1)

**Merged pull requests:**

- mj - remove deep clone simple and lodash set [\#282](https://github.com/appfolio/react-gears/pull/282) ([mjewell](https://github.com/mjewell))
- Fix react warnings [\#281](https://github.com/appfolio/react-gears/pull/281) ([mjewell](https://github.com/mjewell))

## [v1.26.0](https://github.com/appfolio/react-gears/tree/v1.26.0) (2017-08-14)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v1.25.2...v1.26.0)

**Merged pull requests:**

- Update Select [\#278](https://github.com/appfolio/react-gears/pull/278) ([gthomas-appfolio](https://github.com/gthomas-appfolio))

## [v1.25.2](https://github.com/appfolio/react-gears/tree/v1.25.2) (2017-08-10)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v1.25.1...v1.25.2)

**Merged pull requests:**

- gt - Correct Note short date format [\#280](https://github.com/appfolio/react-gears/pull/280) ([gthomas-appfolio](https://github.com/gthomas-appfolio))
- React has no named imports [\#276](https://github.com/appfolio/react-gears/pull/276) ([balloob](https://github.com/balloob))

## [v1.25.1](https://github.com/appfolio/react-gears/tree/v1.25.1) (2017-08-09)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v1.25.0...v1.25.1)

**Merged pull requests:**

- Change Note component fecha date format string to use day of the month instead of day of the week [\#277](https://github.com/appfolio/react-gears/pull/277) ([ragurney](https://github.com/ragurney))
- Convert prop types to package [\#273](https://github.com/appfolio/react-gears/pull/273) ([balloob](https://github.com/balloob))

## [v1.25.0](https://github.com/appfolio/react-gears/tree/v1.25.0) (2017-08-04)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v1.24.1...v1.25.0)

**Merged pull requests:**

- Move react deps to dev-deps [\#275](https://github.com/appfolio/react-gears/pull/275) ([gthomas-appfolio](https://github.com/gthomas-appfolio))
- Convert FontAwesomeAPM to use ES2015 classes [\#274](https://github.com/appfolio/react-gears/pull/274) ([balloob](https://github.com/balloob))

## [v1.24.1](https://github.com/appfolio/react-gears/tree/v1.24.1) (2017-08-04)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v1.24.0...v1.24.1)

**Merged pull requests:**

- gt - Remove unused bg color from HMFAdd [\#272](https://github.com/appfolio/react-gears/pull/272) ([gthomas-appfolio](https://github.com/gthomas-appfolio))
- gt - Update storybook docs [\#271](https://github.com/appfolio/react-gears/pull/271) ([gthomas-appfolio](https://github.com/gthomas-appfolio))
- mj - change currencyInput className proptype from number to string [\#270](https://github.com/appfolio/react-gears/pull/270) ([mjewell](https://github.com/mjewell))

## [v1.24.0](https://github.com/appfolio/react-gears/tree/v1.24.0) (2017-07-31)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v1.23.0...v1.24.0)

**Merged pull requests:**

- mj - remove deep clone, replace with immutable updates [\#267](https://github.com/appfolio/react-gears/pull/267) ([mjewell](https://github.com/mjewell))
- Tweak tests pt2 [\#252](https://github.com/appfolio/react-gears/pull/252) ([balloob](https://github.com/balloob))

## [v1.23.0](https://github.com/appfolio/react-gears/tree/v1.23.0) (2017-07-24)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v1.22.0...v1.23.0)

**Merged pull requests:**

- mj - dont tab to button on date input [\#266](https://github.com/appfolio/react-gears/pull/266) ([mjewell](https://github.com/mjewell))

## [v1.22.0](https://github.com/appfolio/react-gears/tree/v1.22.0) (2017-07-19)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v1.21.0...v1.22.0)

**Merged pull requests:**

- gt - Update DateInput [\#265](https://github.com/appfolio/react-gears/pull/265) ([gthomas-appfolio](https://github.com/gthomas-appfolio))

## [v1.21.0](https://github.com/appfolio/react-gears/tree/v1.21.0) (2017-07-18)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v1.20.2...v1.21.0)

**Closed issues:**

- Select border is using rem vs px [\#261](https://github.com/appfolio/react-gears/issues/261)

**Merged pull requests:**

- Auto focus has many fields [\#264](https://github.com/appfolio/react-gears/pull/264) ([mjewell](https://github.com/mjewell))

## [v1.20.2](https://github.com/appfolio/react-gears/tree/v1.20.2) (2017-07-12)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v1.20.1...v1.20.2)

**Merged pull requests:**

- gt - Update Select styles [\#263](https://github.com/appfolio/react-gears/pull/263) ([gthomas-appfolio](https://github.com/gthomas-appfolio))

## [v1.20.1](https://github.com/appfolio/react-gears/tree/v1.20.1) (2017-07-12)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v1.20.0...v1.20.1)

## [v1.20.0](https://github.com/appfolio/react-gears/tree/v1.20.0) (2017-07-12)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v1.19.4...v1.20.0)

**Merged pull requests:**

- gt - Add story for FormRow props [\#262](https://github.com/appfolio/react-gears/pull/262) ([gthomas-appfolio](https://github.com/gthomas-appfolio))
- Allow form row labels to be optional [\#260](https://github.com/appfolio/react-gears/pull/260) ([tlconnor](https://github.com/tlconnor))

## [v1.19.4](https://github.com/appfolio/react-gears/tree/v1.19.4) (2017-07-07)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v1.19.3...v1.19.4)

**Merged pull requests:**

- gt - Add onBlur prop to DateInput [\#258](https://github.com/appfolio/react-gears/pull/258) ([gthomas-appfolio](https://github.com/gthomas-appfolio))

## [v1.19.3](https://github.com/appfolio/react-gears/tree/v1.19.3) (2017-07-03)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v1.19.2...v1.19.3)

**Merged pull requests:**

- gt - Replace lodash deep clone with smaller deep-clone-simple [\#257](https://github.com/appfolio/react-gears/pull/257) ([gthomas-appfolio](https://github.com/gthomas-appfolio))

## [v1.19.2](https://github.com/appfolio/react-gears/tree/v1.19.2) (2017-06-30)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v1.19.1...v1.19.2)

**Merged pull requests:**

- bugfix - disabled dateinput [\#256](https://github.com/appfolio/react-gears/pull/256) ([elsapeng](https://github.com/elsapeng))

## [v1.19.1](https://github.com/appfolio/react-gears/tree/v1.19.1) (2017-06-30)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v1.19.0...v1.19.1)

**Merged pull requests:**

- Feature - add disabled attribute to DateInput [\#255](https://github.com/appfolio/react-gears/pull/255) ([elsapeng](https://github.com/elsapeng))
- Replace lodash.clonedeep [\#253](https://github.com/appfolio/react-gears/pull/253) ([balloob](https://github.com/balloob))

## [v1.19.0](https://github.com/appfolio/react-gears/tree/v1.19.0) (2017-06-30)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v1.18.1...v1.19.0)

**Closed issues:**

- Some components in docs don't show correct names [\#228](https://github.com/appfolio/react-gears/issues/228)
- Add a form component [\#84](https://github.com/appfolio/react-gears/issues/84)
- Add Datepicker [\#83](https://github.com/appfolio/react-gears/issues/83)
- Clean up dependencies vs devDependencies [\#76](https://github.com/appfolio/react-gears/issues/76)

**Merged pull requests:**

- gt - Add Popover to docs [\#251](https://github.com/appfolio/react-gears/pull/251) ([gthomas-appfolio](https://github.com/gthomas-appfolio))
- Tweak test imports [\#250](https://github.com/appfolio/react-gears/pull/250) ([balloob](https://github.com/balloob))

## [v1.18.1](https://github.com/appfolio/react-gears/tree/v1.18.1) (2017-06-29)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v1.18.0...v1.18.1)

**Merged pull requests:**

- gt - Remove unneeded async parsing from DateInput [\#248](https://github.com/appfolio/react-gears/pull/248) ([gthomas-appfolio](https://github.com/gthomas-appfolio))
- Update MyCase CSS [\#247](https://github.com/appfolio/react-gears/pull/247) ([balloob](https://github.com/balloob))
- ap - use lodash cloneDeep in BoundForm [\#246](https://github.com/appfolio/react-gears/pull/246) ([aaronpanch](https://github.com/aaronpanch))

## [v1.18.0](https://github.com/appfolio/react-gears/tree/v1.18.0) (2017-06-28)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v1.17.2...v1.18.0)

**Merged pull requests:**

- Dependency cleanup [\#245](https://github.com/appfolio/react-gears/pull/245) ([balloob](https://github.com/balloob))

## [v1.17.2](https://github.com/appfolio/react-gears/tree/v1.17.2) (2017-06-27)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v1.17.1...v1.17.2)

**Merged pull requests:**

- gt - Add `type="button"` to add-on buttons to avoid submit [\#244](https://github.com/appfolio/react-gears/pull/244) ([gthomas-appfolio](https://github.com/gthomas-appfolio))
- Generate a source map on build [\#243](https://github.com/appfolio/react-gears/pull/243) ([balloob](https://github.com/balloob))

## [v1.17.1](https://github.com/appfolio/react-gears/tree/v1.17.1) (2017-06-27)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v1.17.0...v1.17.1)

**Closed issues:**

- \[Datepicker\]\(https://qa.qa.appfolio.com/gears/datepicker\) [\#239](https://github.com/appfolio/react-gears/issues/239)

**Merged pull requests:**

- gt/ps - Initial controlled DateInput work [\#242](https://github.com/appfolio/react-gears/pull/242) ([gthomas-appfolio](https://github.com/gthomas-appfolio))
- Update Storybook Docs [\#241](https://github.com/appfolio/react-gears/pull/241) ([gthomas-appfolio](https://github.com/gthomas-appfolio))
- gt - Add docs for spacing utils [\#240](https://github.com/appfolio/react-gears/pull/240) ([gthomas-appfolio](https://github.com/gthomas-appfolio))

## [v1.17.0](https://github.com/appfolio/react-gears/tree/v1.17.0) (2017-06-23)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v1.16.3...v1.17.0)

**Merged pull requests:**

- AddDatePicker [\#238](https://github.com/appfolio/react-gears/pull/238) ([gthomas-appfolio](https://github.com/gthomas-appfolio))

## [v1.16.3](https://github.com/appfolio/react-gears/tree/v1.16.3) (2017-06-16)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v1.16.2...v1.16.3)

**Merged pull requests:**

- gt - Update DateMonth with Dropdown, DropdownMenu [\#237](https://github.com/appfolio/react-gears/pull/237) ([gthomas-appfolio](https://github.com/gthomas-appfolio))
- ap - make template required prop in HasManyFields [\#236](https://github.com/appfolio/react-gears/pull/236) ([aaronpanch](https://github.com/aaronpanch))
- Lint cleanup [\#235](https://github.com/appfolio/react-gears/pull/235) ([aaronpanch](https://github.com/aaronpanch))

## [v1.16.2](https://github.com/appfolio/react-gears/tree/v1.16.2) (2017-06-09)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v1.16.1...v1.16.2)

**Merged pull requests:**

- ap - fix height of HasManyFieldsRemove delete button on Safari [\#234](https://github.com/appfolio/react-gears/pull/234) ([aaronpanch](https://github.com/aaronpanch))

## [v1.16.1](https://github.com/appfolio/react-gears/tree/v1.16.1) (2017-06-09)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v1.16.0...v1.16.1)

**Merged pull requests:**

- gt - Update BlockPanel [\#233](https://github.com/appfolio/react-gears/pull/233) ([gthomas-appfolio](https://github.com/gthomas-appfolio))

## [v1.16.0](https://github.com/appfolio/react-gears/tree/v1.16.0) (2017-06-08)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v1.15.1...v1.16.0)

**Closed issues:**

- HasManyFields [\#124](https://github.com/appfolio/react-gears/issues/124)

**Merged pull requests:**

- Has many fields [\#232](https://github.com/appfolio/react-gears/pull/232) ([aaronpanch](https://github.com/aaronpanch))

## [v1.15.1](https://github.com/appfolio/react-gears/tree/v1.15.1) (2017-06-07)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v1.15.0...v1.15.1)

**Merged pull requests:**

- gt - Update BlockPanel header [\#231](https://github.com/appfolio/react-gears/pull/231) ([gthomas-appfolio](https://github.com/gthomas-appfolio))

## [v1.15.0](https://github.com/appfolio/react-gears/tree/v1.15.0) (2017-06-06)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v1.14.1...v1.15.0)

**Merged pull requests:**

- Add optional label to CheckboxBooleanInput [\#230](https://github.com/appfolio/react-gears/pull/230) ([gthomas-appfolio](https://github.com/gthomas-appfolio))

## [v1.14.1](https://github.com/appfolio/react-gears/tree/v1.14.1) (2017-06-05)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v1.15.0-0...v1.14.1)

**Merged pull requests:**

- Fix currency decimal bug [\#229](https://github.com/appfolio/react-gears/pull/229) ([tlconnor](https://github.com/tlconnor))

## [v1.15.0-0](https://github.com/appfolio/react-gears/tree/v1.15.0-0) (2017-06-02)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v1.14.0...v1.15.0-0)

**Closed issues:**

- Update storybook to 3.x [\#222](https://github.com/appfolio/react-gears/issues/222)

## [v1.14.0](https://github.com/appfolio/react-gears/tree/v1.14.0) (2017-06-01)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v1.13.1...v1.14.0)

**Merged pull requests:**

- Storybook 3 Upgrade [\#227](https://github.com/appfolio/react-gears/pull/227) ([gthomas-appfolio](https://github.com/gthomas-appfolio))
- gt - Update dev deps to latest versions [\#226](https://github.com/appfolio/react-gears/pull/226) ([gthomas-appfolio](https://github.com/gthomas-appfolio))
- gt - Update test dependencies [\#225](https://github.com/appfolio/react-gears/pull/225) ([gthomas-appfolio](https://github.com/gthomas-appfolio))

## [v1.13.1](https://github.com/appfolio/react-gears/tree/v1.13.1) (2017-05-25)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v1.13.0...v1.13.1)

**Merged pull requests:**

- Remove modal patch [\#224](https://github.com/appfolio/react-gears/pull/224) ([tlconnor](https://github.com/tlconnor))
- Remove empty ValidatedFormGroup label [\#223](https://github.com/appfolio/react-gears/pull/223) ([gthomas-appfolio](https://github.com/gthomas-appfolio))

## [v1.13.0](https://github.com/appfolio/react-gears/tree/v1.13.0) (2017-05-22)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v1.12.0...v1.13.0)

**Merged pull requests:**

- Update reactstrap [\#221](https://github.com/appfolio/react-gears/pull/221) ([gthomas-appfolio](https://github.com/gthomas-appfolio))

## [v1.12.0](https://github.com/appfolio/react-gears/tree/v1.12.0) (2017-05-22)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v1.11.1...v1.12.0)

**Merged pull requests:**

- Add boolean inputs [\#220](https://github.com/appfolio/react-gears/pull/220) ([aaronpanch](https://github.com/aaronpanch))

## [v1.11.1](https://github.com/appfolio/react-gears/tree/v1.11.1) (2017-05-18)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v1.11.0...v1.11.1)

**Merged pull requests:**

- gt - Add onToggle to BlockPanel [\#219](https://github.com/appfolio/react-gears/pull/219) ([gthomas-appfolio](https://github.com/gthomas-appfolio))

## [v1.11.0](https://github.com/appfolio/react-gears/tree/v1.11.0) (2017-05-17)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v1.10.0...v1.11.0)

**Merged pull requests:**

- Add Callout [\#218](https://github.com/appfolio/react-gears/pull/218) ([gthomas-appfolio](https://github.com/gthomas-appfolio))
- gt - Center FeatureBanner alertText [\#217](https://github.com/appfolio/react-gears/pull/217) ([gthomas-appfolio](https://github.com/gthomas-appfolio))

## [v1.10.0](https://github.com/appfolio/react-gears/tree/v1.10.0) (2017-05-15)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v1.9.7...v1.10.0)

**Merged pull requests:**

- Upgrade react-select and remove monkey patch [\#215](https://github.com/appfolio/react-gears/pull/215) ([tlconnor](https://github.com/tlconnor))

## [v1.9.7](https://github.com/appfolio/react-gears/tree/v1.9.7) (2017-05-15)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v1.9.6...v1.9.7)

**Merged pull requests:**

- Change feature banner children proptype to be node [\#214](https://github.com/appfolio/react-gears/pull/214) ([JingyuZ](https://github.com/JingyuZ))

## [v1.9.6](https://github.com/appfolio/react-gears/tree/v1.9.6) (2017-05-15)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v1.9.5...v1.9.6)

**Merged pull requests:**

- gt - Update BlockPanel flexbox classes to correct IE11 [\#216](https://github.com/appfolio/react-gears/pull/216) ([gthomas-appfolio](https://github.com/gthomas-appfolio))

## [v1.9.5](https://github.com/appfolio/react-gears/tree/v1.9.5) (2017-05-13)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v1.9.4...v1.9.5)

**Closed issues:**

- Responsive tables are missing the drop shadow [\#212](https://github.com/appfolio/react-gears/issues/212)

**Merged pull requests:**

- Remove lodash.over [\#213](https://github.com/appfolio/react-gears/pull/213) ([tlconnor](https://github.com/tlconnor))

## [v1.9.4](https://github.com/appfolio/react-gears/tree/v1.9.4) (2017-05-11)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v1.9.3...v1.9.4)

**Merged pull requests:**

- gt - Update FeatureBanner to use reactstrap Alert [\#211](https://github.com/appfolio/react-gears/pull/211) ([gthomas-appfolio](https://github.com/gthomas-appfolio))

## [v1.9.3](https://github.com/appfolio/react-gears/tree/v1.9.3) (2017-05-10)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v1.9.2...v1.9.3)

**Merged pull requests:**

- Add Tabs [\#209](https://github.com/appfolio/react-gears/pull/209) ([gthomas-appfolio](https://github.com/gthomas-appfolio))

## [v1.9.2](https://github.com/appfolio/react-gears/tree/v1.9.2) (2017-05-09)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v1.9.1...v1.9.2)

## [v1.9.1](https://github.com/appfolio/react-gears/tree/v1.9.1) (2017-05-09)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v1.9.0...v1.9.1)

**Merged pull requests:**

- gt - Update Alert children [\#208](https://github.com/appfolio/react-gears/pull/208) ([gthomas-appfolio](https://github.com/gthomas-appfolio))
- gt - Update HelpBubble [\#207](https://github.com/appfolio/react-gears/pull/207) ([gthomas-appfolio](https://github.com/gthomas-appfolio))
- gt - Update Alert icon size & margins [\#206](https://github.com/appfolio/react-gears/pull/206) ([gthomas-appfolio](https://github.com/gthomas-appfolio))

## [v1.9.0](https://github.com/appfolio/react-gears/tree/v1.9.0) (2017-05-08)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v1.8.1...v1.9.0)

**Closed issues:**

- InfoBox border color does not update in some cases [\#204](https://github.com/appfolio/react-gears/issues/204)
- Add Waiting Component [\#198](https://github.com/appfolio/react-gears/issues/198)

**Merged pull requests:**

- Update InfoBox base styles [\#205](https://github.com/appfolio/react-gears/pull/205) ([gthomas-appfolio](https://github.com/gthomas-appfolio))
- Add expandable card container \[Deliver: \#143170825\] [\#200](https://github.com/appfolio/react-gears/pull/200) ([shiboying](https://github.com/shiboying))

## [v1.8.1](https://github.com/appfolio/react-gears/tree/v1.8.1) (2017-04-27)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v1.8.0...v1.8.1)

**Merged pull requests:**

- gt - Remove only [\#203](https://github.com/appfolio/react-gears/pull/203) ([gthomas-appfolio](https://github.com/gthomas-appfolio))
- Allow content within modals to autofocus [\#202](https://github.com/appfolio/react-gears/pull/202) ([tlconnor](https://github.com/tlconnor))
- gt - Reduce some eslint errors, fix tests [\#201](https://github.com/appfolio/react-gears/pull/201) ([gthomas-appfolio](https://github.com/gthomas-appfolio))

## [v1.8.0](https://github.com/appfolio/react-gears/tree/v1.8.0) (2017-04-27)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v1.7.0...v1.8.0)

**Merged pull requests:**

- Add waiting [\#199](https://github.com/appfolio/react-gears/pull/199) ([tlconnor](https://github.com/tlconnor))

## [v1.7.0](https://github.com/appfolio/react-gears/tree/v1.7.0) (2017-04-25)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v1.6.1...v1.7.0)

**Merged pull requests:**

- gt - Add InfoBox [\#196](https://github.com/appfolio/react-gears/pull/196) ([gthomas-appfolio](https://github.com/gthomas-appfolio))

## [v1.6.1](https://github.com/appfolio/react-gears/tree/v1.6.1) (2017-04-24)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v1.6.0...v1.6.1)

**Closed issues:**

- Support FeatureBanner \(https://qa.qa.appfolio.com/saffron/patterns/feature\_banner\) [\#130](https://github.com/appfolio/react-gears/issues/130)
- Add Notes Block [\#119](https://github.com/appfolio/react-gears/issues/119)

**Merged pull requests:**

- StoryUpdates [\#194](https://github.com/appfolio/react-gears/pull/194) ([gthomas-appfolio](https://github.com/gthomas-appfolio))

## [v1.6.0](https://github.com/appfolio/react-gears/tree/v1.6.0) (2017-04-22)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v1.5.0...v1.6.0)

**Merged pull requests:**

- gt - Update FeatureBanner [\#193](https://github.com/appfolio/react-gears/pull/193) ([gthomas-appfolio](https://github.com/gthomas-appfolio))
- Add feature banner to react-gears [\#192](https://github.com/appfolio/react-gears/pull/192) ([JingyuZ](https://github.com/JingyuZ))

## [v1.5.0](https://github.com/appfolio/react-gears/tree/v1.5.0) (2017-04-21)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v1.4.0...v1.5.0)

**Merged pull requests:**

- Card Updates [\#191](https://github.com/appfolio/react-gears/pull/191) ([gthomas-appfolio](https://github.com/gthomas-appfolio))

## [v1.4.0](https://github.com/appfolio/react-gears/tree/v1.4.0) (2017-04-20)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v1.3.2...v1.4.0)

**Merged pull requests:**

- Add Note, Notes [\#190](https://github.com/appfolio/react-gears/pull/190) ([gthomas-appfolio](https://github.com/gthomas-appfolio))

## [v1.3.2](https://github.com/appfolio/react-gears/tree/v1.3.2) (2017-04-19)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v1.3.1...v1.3.2)

**Merged pull requests:**

- CreditCardNumber field should report cardType [\#189](https://github.com/appfolio/react-gears/pull/189) ([TroyAlford](https://github.com/TroyAlford))

## [v1.3.1](https://github.com/appfolio/react-gears/tree/v1.3.1) (2017-04-17)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v1.3.0...v1.3.1)

**Merged pull requests:**

- rm: restyle react-select internals for better cursor position [\#187](https://github.com/appfolio/react-gears/pull/187) ([robertmaloney](https://github.com/robertmaloney))

## [v1.3.0](https://github.com/appfolio/react-gears/tree/v1.3.0) (2017-04-13)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v1.2.3...v1.3.0)

**Merged pull requests:**

- gt - Refactor CreditCard components [\#186](https://github.com/appfolio/react-gears/pull/186) ([gthomas-appfolio](https://github.com/gthomas-appfolio))
- Credit Card Validation Components [\#181](https://github.com/appfolio/react-gears/pull/181) ([TroyAlford](https://github.com/TroyAlford))

## [v1.2.3](https://github.com/appfolio/react-gears/tree/v1.2.3) (2017-04-12)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v1.2.2...v1.2.3)

**Merged pull requests:**

- Pf add disabled prop to address [\#185](https://github.com/appfolio/react-gears/pull/185) ([mjewell](https://github.com/mjewell))
- gt - Remove .only from unit tests [\#184](https://github.com/appfolio/react-gears/pull/184) ([gthomas-appfolio](https://github.com/gthomas-appfolio))

## [v1.2.2](https://github.com/appfolio/react-gears/tree/v1.2.2) (2017-04-07)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v1.2.1...v1.2.2)

**Merged pull requests:**

- gt - Update SummaryBox docs [\#183](https://github.com/appfolio/react-gears/pull/183) ([gthomas-appfolio](https://github.com/gthomas-appfolio))

## [v1.2.1](https://github.com/appfolio/react-gears/tree/v1.2.1) (2017-04-07)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v1.2.0...v1.2.1)

**Merged pull requests:**

- gt - Remove custom SCSS [\#182](https://github.com/appfolio/react-gears/pull/182) ([gthomas-appfolio](https://github.com/gthomas-appfolio))

## [v1.2.0](https://github.com/appfolio/react-gears/tree/v1.2.0) (2017-04-03)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v1.1.0...v1.2.0)

**Closed issues:**

- Add optional "X" button on modals [\#178](https://github.com/appfolio/react-gears/issues/178)

**Merged pull requests:**

- Adding CreditCardNumber field [\#180](https://github.com/appfolio/react-gears/pull/180) ([TroyAlford](https://github.com/TroyAlford))

## [v1.1.0](https://github.com/appfolio/react-gears/tree/v1.1.0) (2017-03-31)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v1.0.2...v1.1.0)

**Merged pull requests:**

- gt - Export correct Modal and default props [\#179](https://github.com/appfolio/react-gears/pull/179) ([gthomas-appfolio](https://github.com/gthomas-appfolio))

## [v1.0.2](https://github.com/appfolio/react-gears/tree/v1.0.2) (2017-03-23)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v1.0.1...v1.0.2)

**Merged pull requests:**

- Add Card stories [\#177](https://github.com/appfolio/react-gears/pull/177) ([gthomas-appfolio](https://github.com/gthomas-appfolio))
- ap - fix handling of falsy values in BoundFormRow [\#176](https://github.com/appfolio/react-gears/pull/176) ([aaronpanch](https://github.com/aaronpanch))

## [v1.0.1](https://github.com/appfolio/react-gears/tree/v1.0.1) (2017-03-17)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v1.0.0...v1.0.1)

**Merged pull requests:**

- Fix react-select focus issue [\#175](https://github.com/appfolio/react-gears/pull/175) ([tlconnor](https://github.com/tlconnor))

## [v1.0.0](https://github.com/appfolio/react-gears/tree/v1.0.0) (2017-03-10)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v0.3.11...v1.0.0)

**Implemented enhancements:**

- Add 'stacked' prop to FormRow [\#147](https://github.com/appfolio/react-gears/issues/147)

**Closed issues:**

- Remove lodash.includes dependency [\#80](https://github.com/appfolio/react-gears/issues/80)
- Remove lodash.range dependency [\#79](https://github.com/appfolio/react-gears/issues/79)
- Do not use experimental JavaScript [\#78](https://github.com/appfolio/react-gears/issues/78)
- Consolidate babel configs [\#77](https://github.com/appfolio/react-gears/issues/77)

**Merged pull requests:**

- Convert steps to use Bootstrap colors [\#174](https://github.com/appfolio/react-gears/pull/174) ([balloob](https://github.com/balloob))
- ps - random cleanup [\#173](https://github.com/appfolio/react-gears/pull/173) ([balloob](https://github.com/balloob))
- ps - datemonth bg [\#171](https://github.com/appfolio/react-gears/pull/171) ([balloob](https://github.com/balloob))
- Add a demo of multiple styles [\#170](https://github.com/appfolio/react-gears/pull/170) ([balloob](https://github.com/balloob))
- UpdateMyCaseTheme [\#169](https://github.com/appfolio/react-gears/pull/169) ([gthomas-appfolio](https://github.com/gthomas-appfolio))
- ps - allow persisting theme between refresh [\#168](https://github.com/appfolio/react-gears/pull/168) ([balloob](https://github.com/balloob))
- Update progress bar example to use default color by default [\#167](https://github.com/appfolio/react-gears/pull/167) ([balloob](https://github.com/balloob))
- Set BABEL\_ENV for storybook [\#166](https://github.com/appfolio/react-gears/pull/166) ([balloob](https://github.com/balloob))
- ps - Add .nvmrc [\#165](https://github.com/appfolio/react-gears/pull/165) ([balloob](https://github.com/balloob))
- ps - swap out stage-2 with plugin that we need [\#164](https://github.com/appfolio/react-gears/pull/164) ([balloob](https://github.com/balloob))
- ps - clean up babelrc usage [\#163](https://github.com/appfolio/react-gears/pull/163) ([balloob](https://github.com/balloob))
-  gt - Add MyCase to themes [\#161](https://github.com/appfolio/react-gears/pull/161) ([gthomas-appfolio](https://github.com/gthomas-appfolio))
- ps - remove lodash.includes and fix datemonth click outside [\#160](https://github.com/appfolio/react-gears/pull/160) ([balloob](https://github.com/balloob))
- ps - remove lodash.range dependency [\#159](https://github.com/appfolio/react-gears/pull/159) ([balloob](https://github.com/balloob))
- ps - fix margin on some alert examples [\#158](https://github.com/appfolio/react-gears/pull/158) ([balloob](https://github.com/balloob))
- ap - update form story [\#157](https://github.com/appfolio/react-gears/pull/157) ([aaronpanch](https://github.com/aaronpanch))

## [v0.3.11](https://github.com/appfolio/react-gears/tree/v0.3.11) (2017-03-07)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v0.3.10...v0.3.11)

**Merged pull requests:**

- Form row style [\#156](https://github.com/appfolio/react-gears/pull/156) ([aaronpanch](https://github.com/aaronpanch))

## [v0.3.10](https://github.com/appfolio/react-gears/tree/v0.3.10) (2017-03-06)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v0.3.9...v0.3.10)

**Fixed bugs:**

- BoundFormRow onChange handler [\#143](https://github.com/appfolio/react-gears/issues/143)

**Merged pull requests:**

- Fix currency input bugs [\#154](https://github.com/appfolio/react-gears/pull/154) ([tlconnor](https://github.com/tlconnor))
- Add support for negative numbers to currency input [\#153](https://github.com/appfolio/react-gears/pull/153) ([tlconnor](https://github.com/tlconnor))
- Add repository field to package.json [\#152](https://github.com/appfolio/react-gears/pull/152) ([aaronpanch](https://github.com/aaronpanch))
- Add missing lodash deps [\#150](https://github.com/appfolio/react-gears/pull/150) ([aaronpanch](https://github.com/aaronpanch))
- Update Github Project URL [\#149](https://github.com/appfolio/react-gears/pull/149) ([aaronpanch](https://github.com/aaronpanch))
- Fix bug with onChange in BoundFormRow [\#146](https://github.com/appfolio/react-gears/pull/146) ([aaronpanch](https://github.com/aaronpanch))
- Fix naming of Select component [\#142](https://github.com/appfolio/react-gears/pull/142) ([tlconnor](https://github.com/tlconnor))

## [v0.3.9](https://github.com/appfolio/react-gears/tree/v0.3.9) (2017-03-02)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v0.3.8...v0.3.9)

**Merged pull requests:**

- Clean up FileInput tests [\#148](https://github.com/appfolio/react-gears/pull/148) ([aaronpanch](https://github.com/aaronpanch))
- zw - adding FileInput for use in a BoundForm [\#144](https://github.com/appfolio/react-gears/pull/144) ([zwalker](https://github.com/zwalker))

## [v0.3.8](https://github.com/appfolio/react-gears/tree/v0.3.8) (2017-03-01)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v0.3.7...v0.3.8)

**Merged pull requests:**

- Dont use card in LabelBadge [\#145](https://github.com/appfolio/react-gears/pull/145) ([JingyuZ](https://github.com/JingyuZ))

## [v0.3.7](https://github.com/appfolio/react-gears/tree/v0.3.7) (2017-02-24)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v0.3.6...v0.3.7)

**Merged pull requests:**

- Add filter list [\#141](https://github.com/appfolio/react-gears/pull/141) ([JingyuZ](https://github.com/JingyuZ))

## [v0.3.6](https://github.com/appfolio/react-gears/tree/v0.3.6) (2017-02-23)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v0.3.5...v0.3.6)

**Merged pull requests:**

- Add LabelBadge to react-gears [\#140](https://github.com/appfolio/react-gears/pull/140) ([JingyuZ](https://github.com/JingyuZ))

## [v0.3.5](https://github.com/appfolio/react-gears/tree/v0.3.5) (2017-02-22)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v0.3.4...v0.3.5)

**Closed issues:**

- Input Addon is not aligned well with the input field [\#136](https://github.com/appfolio/react-gears/issues/136)

**Merged pull requests:**

- gt - Update Progress with default props,  story, tests [\#139](https://github.com/appfolio/react-gears/pull/139) ([gthomas-appfolio](https://github.com/gthomas-appfolio))

## [v0.3.4](https://github.com/appfolio/react-gears/tree/v0.3.4) (2017-02-15)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v0.3.3...v0.3.4)

**Merged pull requests:**

- gt - Update Alert warning to use Saffron icon [\#137](https://github.com/appfolio/react-gears/pull/137) ([gthomas-appfolio](https://github.com/gthomas-appfolio))

## [v0.3.3](https://github.com/appfolio/react-gears/tree/v0.3.3) (2017-02-14)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v0.3.2...v0.3.3)

**Fixed bugs:**

- Add Tooltip Component [\#134](https://github.com/appfolio/react-gears/issues/134)

**Merged pull requests:**

- Add Tooltip Component [\#135](https://github.com/appfolio/react-gears/pull/135) ([aaronpanch](https://github.com/aaronpanch))
- Lint and Test Cleanup [\#133](https://github.com/appfolio/react-gears/pull/133) ([aaronpanch](https://github.com/aaronpanch))
- ap - update start command for dev [\#132](https://github.com/appfolio/react-gears/pull/132) ([aaronpanch](https://github.com/aaronpanch))
- Lint issues [\#131](https://github.com/appfolio/react-gears/pull/131) ([aaronpanch](https://github.com/aaronpanch))

## [v0.3.2](https://github.com/appfolio/react-gears/tree/v0.3.2) (2017-02-13)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v0.3.1...v0.3.2)

**Implemented enhancements:**

- Support errors prop on forms [\#123](https://github.com/appfolio/react-gears/issues/123)

**Closed issues:**

- Only allow X digits after period for Currency Input [\#122](https://github.com/appfolio/react-gears/issues/122)

**Merged pull requests:**

- Improve errors [\#129](https://github.com/appfolio/react-gears/pull/129) ([aaronpanch](https://github.com/aaronpanch))

## [v0.3.1](https://github.com/appfolio/react-gears/tree/v0.3.1) (2017-02-10)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v0.3.0...v0.3.1)

**Merged pull requests:**

- Update CurrencyInput [\#127](https://github.com/appfolio/react-gears/pull/127) ([gthomas-appfolio](https://github.com/gthomas-appfolio))
- Fix typo with AddressInput rename [\#126](https://github.com/appfolio/react-gears/pull/126) ([aaronpanch](https://github.com/aaronpanch))
- Address improvements [\#125](https://github.com/appfolio/react-gears/pull/125) ([aaronpanch](https://github.com/aaronpanch))

## [v0.3.0](https://github.com/appfolio/react-gears/tree/v0.3.0) (2017-02-02)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v0.2.3...v0.3.0)

**Merged pull requests:**

- Update latest bootstrap/react-strap [\#116](https://github.com/appfolio/react-gears/pull/116) ([gthomas-appfolio](https://github.com/gthomas-appfolio))

## [v0.2.3](https://github.com/appfolio/react-gears/tree/v0.2.3) (2017-02-01)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v0.2.2...v0.2.3)

**Merged pull requests:**

- ap - only pass props to FormRow children in BoundForms [\#121](https://github.com/appfolio/react-gears/pull/121) ([aaronpanch](https://github.com/aaronpanch))

## [v0.2.2](https://github.com/appfolio/react-gears/tree/v0.2.2) (2017-01-31)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v0.2.1...v0.2.2)

**Closed issues:**

- Remove mobx dependency [\#75](https://github.com/appfolio/react-gears/issues/75)

**Merged pull requests:**

- Bound form updates [\#120](https://github.com/appfolio/react-gears/pull/120) ([aaronpanch](https://github.com/aaronpanch))

## [v0.2.1](https://github.com/appfolio/react-gears/tree/v0.2.1) (2017-01-26)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v0.2.0...v0.2.1)

**Merged pull requests:**

- ap - add errors to bound form [\#117](https://github.com/appfolio/react-gears/pull/117) ([aaronpanch](https://github.com/aaronpanch))

## [v0.2.0](https://github.com/appfolio/react-gears/tree/v0.2.0) (2017-01-24)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v0.1.22...v0.2.0)

**Merged pull requests:**

- Address updates [\#115](https://github.com/appfolio/react-gears/pull/115) ([aaronpanch](https://github.com/aaronpanch))

## [v0.1.22](https://github.com/appfolio/react-gears/tree/v0.1.22) (2017-01-23)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v0.1.21...v0.1.22)

**Merged pull requests:**

- ap - call additional onChange handler in Selects [\#114](https://github.com/appfolio/react-gears/pull/114) ([aaronpanch](https://github.com/aaronpanch))
- Select fixes [\#113](https://github.com/appfolio/react-gears/pull/113) ([tlconnor](https://github.com/tlconnor))
- ap - fix clear button on Selects [\#112](https://github.com/appfolio/react-gears/pull/112) ([aaronpanch](https://github.com/aaronpanch))
- Fix select text overlap [\#111](https://github.com/appfolio/react-gears/pull/111) ([tlconnor](https://github.com/tlconnor))
- gt - Remove mobx from ExpandableSection [\#110](https://github.com/appfolio/react-gears/pull/110) ([gthomas-appfolio](https://github.com/gthomas-appfolio))
- ap - remove mobx from Select, add tests, add defaultValue [\#109](https://github.com/appfolio/react-gears/pull/109) ([aaronpanch](https://github.com/aaronpanch))
- Scale spinner with font size [\#108](https://github.com/appfolio/react-gears/pull/108) ([tlconnor](https://github.com/tlconnor))
- Lint cleanup [\#106](https://github.com/appfolio/react-gears/pull/106) ([aaronpanch](https://github.com/aaronpanch))

## [v0.1.21](https://github.com/appfolio/react-gears/tree/v0.1.21) (2017-01-19)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v0.1.20...v0.1.21)

**Merged pull requests:**

- gt - Fix reactstrap version [\#107](https://github.com/appfolio/react-gears/pull/107) ([gthomas-appfolio](https://github.com/gthomas-appfolio))

## [v0.1.20](https://github.com/appfolio/react-gears/tree/v0.1.20) (2017-01-19)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v0.1.19...v0.1.20)

**Merged pull requests:**

- gt -  Export async option for Select [\#105](https://github.com/appfolio/react-gears/pull/105) ([gthomas-appfolio](https://github.com/gthomas-appfolio))

## [v0.1.19](https://github.com/appfolio/react-gears/tree/v0.1.19) (2017-01-18)
[Full Changelog](https://github.com/appfolio/react-gears/compare/v0.1.16...v0.1.19)

**Merged pull requests:**

- Add contribution guidelines and releasing scripts [\#104](https://github.com/appfolio/react-gears/pull/104) ([aaronpanch](https://github.com/aaronpanch))
- gt - Update spinner direction [\#103](https://github.com/appfolio/react-gears/pull/103) ([gthomas-appfolio](https://github.com/gthomas-appfolio))
- gt - Update version and docs [\#102](https://github.com/appfolio/react-gears/pull/102) ([gthomas-appfolio](https://github.com/gthomas-appfolio))
- Add a Spinner component [\#101](https://github.com/appfolio/react-gears/pull/101) ([tlconnor](https://github.com/tlconnor))
- gt - Update docs [\#100](https://github.com/appfolio/react-gears/pull/100) ([gthomas-appfolio](https://github.com/gthomas-appfolio))
- Bound Forms [\#98](https://github.com/appfolio/react-gears/pull/98) ([aaronpanch](https://github.com/aaronpanch))

## [v0.1.16](https://github.com/appfolio/react-gears/tree/v0.1.16) (2017-01-18)
**Merged pull requests:**

- ap - fix help bubble icon [\#99](https://github.com/appfolio/react-gears/pull/99) ([aaronpanch](https://github.com/aaronpanch))
- gt - Update docs [\#97](https://github.com/appfolio/react-gears/pull/97) ([gthomas-appfolio](https://github.com/gthomas-appfolio))
- gt - Remove global style [\#96](https://github.com/appfolio/react-gears/pull/96) ([gthomas-appfolio](https://github.com/gthomas-appfolio))
- DocumentationUpdates [\#95](https://github.com/appfolio/react-gears/pull/95) ([gthomas-appfolio](https://github.com/gthomas-appfolio))
- gt - Update version [\#94](https://github.com/appfolio/react-gears/pull/94) ([gthomas-appfolio](https://github.com/gthomas-appfolio))
- gt - Initial Steps work [\#93](https://github.com/appfolio/react-gears/pull/93) ([gthomas-appfolio](https://github.com/gthomas-appfolio))
- gt - Update Paginator [\#92](https://github.com/appfolio/react-gears/pull/92) ([gthomas-appfolio](https://github.com/gthomas-appfolio))
- gt - Fix typo [\#91](https://github.com/appfolio/react-gears/pull/91) ([gthomas-appfolio](https://github.com/gthomas-appfolio))
- gt - Minor code cleanup [\#90](https://github.com/appfolio/react-gears/pull/90) ([gthomas-appfolio](https://github.com/gthomas-appfolio))
- gt - Fix docs [\#89](https://github.com/appfolio/react-gears/pull/89) ([gthomas-appfolio](https://github.com/gthomas-appfolio))
- gt - Add docs for github pages [\#88](https://github.com/appfolio/react-gears/pull/88) ([gthomas-appfolio](https://github.com/gthomas-appfolio))
- gt - Tweak Alert and Paginator [\#87](https://github.com/appfolio/react-gears/pull/87) ([gthomas-appfolio](https://github.com/gthomas-appfolio))
- gt - Add knobs add-on and stories [\#86](https://github.com/appfolio/react-gears/pull/86) ([gthomas-appfolio](https://github.com/gthomas-appfolio))
- Add Theme picker [\#73](https://github.com/appfolio/react-gears/pull/73) ([gthomas-appfolio](https://github.com/gthomas-appfolio))
- Update Storybook Doc Header [\#72](https://github.com/appfolio/react-gears/pull/72) ([aaronpanch](https://github.com/aaronpanch))
- gt - Switch icons to use FA4 compatible names in APM [\#71](https://github.com/appfolio/react-gears/pull/71) ([gthomas-appfolio](https://github.com/gthomas-appfolio))
- gt - Add size prop and default to Paginator [\#70](https://github.com/appfolio/react-gears/pull/70) ([gthomas-appfolio](https://github.com/gthomas-appfolio))
- gt - Add Table [\#69](https://github.com/appfolio/react-gears/pull/69) ([gthomas-appfolio](https://github.com/gthomas-appfolio))
- Remove Dist and add prepublish script [\#68](https://github.com/appfolio/react-gears/pull/68) ([aaronpanch](https://github.com/aaronpanch))
- Make expand caret bigger [\#67](https://github.com/appfolio/react-gears/pull/67) ([aaronpanch](https://github.com/aaronpanch))
- Rename icon-fixed-width to icon-fw [\#66](https://github.com/appfolio/react-gears/pull/66) ([aaronpanch](https://github.com/aaronpanch))
- Revise styles for ExpandableSection [\#65](https://github.com/appfolio/react-gears/pull/65) ([aaronpanch](https://github.com/aaronpanch))
- Update Deps [\#64](https://github.com/appfolio/react-gears/pull/64) ([gthomas-appfolio](https://github.com/gthomas-appfolio))
- gt - Remove unused code [\#63](https://github.com/appfolio/react-gears/pull/63) ([gthomas-appfolio](https://github.com/gthomas-appfolio))
- Add refactored Paginator [\#62](https://github.com/appfolio/react-gears/pull/62) ([gthomas-appfolio](https://github.com/gthomas-appfolio))
- Fix CI [\#61](https://github.com/appfolio/react-gears/pull/61) ([gthomas-appfolio](https://github.com/gthomas-appfolio))
- Add paginator component [\#60](https://github.com/appfolio/react-gears/pull/60) ([tlconnor](https://github.com/tlconnor))
- gt - Update version and deps [\#59](https://github.com/appfolio/react-gears/pull/59) ([gthomas-appfolio](https://github.com/gthomas-appfolio))
- Fix refresh bug in Alert component [\#58](https://github.com/appfolio/react-gears/pull/58) ([tlconnor](https://github.com/tlconnor))
- gt - Update version and bundle [\#57](https://github.com/appfolio/react-gears/pull/57) ([gthomas-appfolio](https://github.com/gthomas-appfolio))
- Update Icons [\#56](https://github.com/appfolio/react-gears/pull/56) ([gthomas-appfolio](https://github.com/gthomas-appfolio))
- gt - Reduce bundle size [\#55](https://github.com/appfolio/react-gears/pull/55) ([gthomas-appfolio](https://github.com/gthomas-appfolio))
- gt - Component fixes [\#54](https://github.com/appfolio/react-gears/pull/54) ([gthomas-appfolio](https://github.com/gthomas-appfolio))
- gt - Add babel-eslint for @decorator support [\#53](https://github.com/appfolio/react-gears/pull/53) ([gthomas-appfolio](https://github.com/gthomas-appfolio))
- gt - Update Alert [\#52](https://github.com/appfolio/react-gears/pull/52) ([gthomas-appfolio](https://github.com/gthomas-appfolio))
- gt - Bump version [\#51](https://github.com/appfolio/react-gears/pull/51) ([gthomas-appfolio](https://github.com/gthomas-appfolio))
- gt - Update Address to publish onChange [\#50](https://github.com/appfolio/react-gears/pull/50) ([gthomas-appfolio](https://github.com/gthomas-appfolio))
- gt - Add InputGroup example [\#49](https://github.com/appfolio/react-gears/pull/49) ([gthomas-appfolio](https://github.com/gthomas-appfolio))
- Modify Select classes [\#48](https://github.com/appfolio/react-gears/pull/48) ([gthomas-appfolio](https://github.com/gthomas-appfolio))
- gt - Update bundle and version [\#47](https://github.com/appfolio/react-gears/pull/47) ([gthomas-appfolio](https://github.com/gthomas-appfolio))
- gt - Add Select2 equivalent [\#46](https://github.com/appfolio/react-gears/pull/46) ([gthomas-appfolio](https://github.com/gthomas-appfolio))
- UpdateFlag [\#45](https://github.com/appfolio/react-gears/pull/45) ([gthomas-appfolio](https://github.com/gthomas-appfolio))
- gt - Fix Flag component [\#44](https://github.com/appfolio/react-gears/pull/44) ([gthomas-appfolio](https://github.com/gthomas-appfolio))
- gt - Update npm deps [\#43](https://github.com/appfolio/react-gears/pull/43) ([gthomas-appfolio](https://github.com/gthomas-appfolio))
- gt - Minimize bundle size [\#42](https://github.com/appfolio/react-gears/pull/42) ([gthomas-appfolio](https://github.com/gthomas-appfolio))
- Correct ExpandableSection proptypes [\#41](https://github.com/appfolio/react-gears/pull/41) ([gthomas-appfolio](https://github.com/gthomas-appfolio))
- gt - Add ExpandableSection [\#40](https://github.com/appfolio/react-gears/pull/40) ([gthomas-appfolio](https://github.com/gthomas-appfolio))
- Update Readme and correct tests [\#39](https://github.com/appfolio/react-gears/pull/39) ([gthomas-appfolio](https://github.com/gthomas-appfolio))
- Remove temp stories [\#38](https://github.com/appfolio/react-gears/pull/38) ([gthomas-appfolio](https://github.com/gthomas-appfolio))
- Add SummaryBox [\#37](https://github.com/appfolio/react-gears/pull/37) ([gthomas-appfolio](https://github.com/gthomas-appfolio))
- Begin Address [\#36](https://github.com/appfolio/react-gears/pull/36) ([gthomas-appfolio](https://github.com/gthomas-appfolio))
- gt - Correct bundle export as umd [\#35](https://github.com/appfolio/react-gears/pull/35) ([gthomas-appfolio](https://github.com/gthomas-appfolio))
- gt - Export bundle [\#34](https://github.com/appfolio/react-gears/pull/34) ([gthomas-appfolio](https://github.com/gthomas-appfolio))
- Use new spacing util class names [\#33](https://github.com/appfolio/react-gears/pull/33) ([gthomas-appfolio](https://github.com/gthomas-appfolio))
- Use custom BS4 build [\#32](https://github.com/appfolio/react-gears/pull/32) ([gthomas-appfolio](https://github.com/gthomas-appfolio))
- Update stories [\#31](https://github.com/appfolio/react-gears/pull/31) ([gthomas-appfolio](https://github.com/gthomas-appfolio))
- gt - Readd Icon and Flag wrapper components [\#30](https://github.com/appfolio/react-gears/pull/30) ([gthomas-appfolio](https://github.com/gthomas-appfolio))
- gt - Update decorator to add type title and story header [\#29](https://github.com/appfolio/react-gears/pull/29) ([gthomas-appfolio](https://github.com/gthomas-appfolio))
- Correct aliases [\#28](https://github.com/appfolio/react-gears/pull/28) ([gthomas-appfolio](https://github.com/gthomas-appfolio))
- gt - Correct prototypes case [\#27](https://github.com/appfolio/react-gears/pull/27) ([gthomas-appfolio](https://github.com/gthomas-appfolio))
- Add components [\#26](https://github.com/appfolio/react-gears/pull/26) ([gthomas-appfolio](https://github.com/gthomas-appfolio))
- AddInfoWrapper [\#25](https://github.com/appfolio/react-gears/pull/25) ([gthomas-appfolio](https://github.com/gthomas-appfolio))
- gt - Add add-on info, decorator in config [\#24](https://github.com/appfolio/react-gears/pull/24) ([gthomas-appfolio](https://github.com/gthomas-appfolio))
- ap - add test for Pattern Input [\#23](https://github.com/appfolio/react-gears/pull/23) ([aaronpanch](https://github.com/aaronpanch))
- ap - add type back to destructure to not forward to Input [\#22](https://github.com/appfolio/react-gears/pull/22) ([aaronpanch](https://github.com/aaronpanch))
- gt - Update eslint [\#21](https://github.com/appfolio/react-gears/pull/21) ([gthomas-appfolio](https://github.com/gthomas-appfolio))
- ap - fix some lint errors [\#20](https://github.com/appfolio/react-gears/pull/20) ([aaronpanch](https://github.com/aaronpanch))
- ap - add pattern input for fun [\#19](https://github.com/appfolio/react-gears/pull/19) ([aaronpanch](https://github.com/aaronpanch))
- ap - add static form input type [\#18](https://github.com/appfolio/react-gears/pull/18) ([aaronpanch](https://github.com/aaronpanch))
- Add forms [\#17](https://github.com/appfolio/react-gears/pull/17) ([aaronpanch](https://github.com/aaronpanch))
- Update alerts [\#16](https://github.com/appfolio/react-gears/pull/16) ([aaronpanch](https://github.com/aaronpanch))
- Bump reactstrap to 3.4.0 for alerts. [\#15](https://github.com/appfolio/react-gears/pull/15) ([aaronpanch](https://github.com/aaronpanch))
- ap - add help bubble component [\#14](https://github.com/appfolio/react-gears/pull/14) ([aaronpanch](https://github.com/aaronpanch))
- Add Bootstrap Alert Component [\#12](https://github.com/appfolio/react-gears/pull/12) ([aaronpanch](https://github.com/aaronpanch))
- Update datapair [\#11](https://github.com/appfolio/react-gears/pull/11) ([aaronpanch](https://github.com/aaronpanch))
- gt - Add Buttons story [\#9](https://github.com/appfolio/react-gears/pull/9) ([gthomas-appfolio](https://github.com/gthomas-appfolio))
- Update Config, add DateMonth [\#8](https://github.com/appfolio/react-gears/pull/8) ([gthomas-appfolio](https://github.com/gthomas-appfolio))
- gt - Remove unused nightmare [\#7](https://github.com/appfolio/react-gears/pull/7) ([gthomas-appfolio](https://github.com/gthomas-appfolio))
- Add storybook and a basic datapair component [\#6](https://github.com/appfolio/react-gears/pull/6) ([aaronpanch](https://github.com/aaronpanch))
- gt - Remove unused headless test [\#5](https://github.com/appfolio/react-gears/pull/5) ([gthomas-appfolio](https://github.com/gthomas-appfolio))
- gt - Fix test [\#4](https://github.com/appfolio/react-gears/pull/4) ([gthomas-appfolio](https://github.com/gthomas-appfolio))
- gt - Move tests [\#3](https://github.com/appfolio/react-gears/pull/3) ([gthomas-appfolio](https://github.com/gthomas-appfolio))
- gt - Initial commit for DateMonth [\#2](https://github.com/appfolio/react-gears/pull/2) ([gthomas-appfolio](https://github.com/gthomas-appfolio))
- gt - Add Reactstrap, Bootstrap, Font Awesome deps [\#1](https://github.com/appfolio/react-gears/pull/1) ([gthomas-appfolio](https://github.com/gthomas-appfolio))



\* *This Change Log was automatically generated by [github_changelog_generator](https://github.com/skywinder/Github-Changelog-Generator)*
