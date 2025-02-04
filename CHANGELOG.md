# Change Log

## [8.14.2](https://github.com/appfolio/react-gears/compare/v8.14.1...v8.14.2) (2025-02-04)


### Bug Fixes

* **Tooltip:** add offset on Tooltip popover content ([86a2d9f](https://github.com/appfolio/react-gears/commit/86a2d9f6f29cc0809610773f93a4e23f83864ce7))


### Miscellaneous

* patch ip with neoip to fix cve ([1546852](https://github.com/appfolio/react-gears/commit/15468529ae83786257e71ab9b8e41cca9a8e41c4))
* resolve path-to-regexp cve ([25803bc](https://github.com/appfolio/react-gears/commit/25803bcdb7616fc87c4b0ce64fa0a0085c4b3edc))
* upgrade to new cross-spawn patch with cve fix ([ddafa04](https://github.com/appfolio/react-gears/commit/ddafa0437a210adbf37a343a3652bbf777d89331))

## [8.14.1](https://github.com/appfolio/react-gears/compare/v8.14.0...v8.14.1) (2024-09-04)


### Bug Fixes

* Fix label type on SummaryBoxItem ([7251bcc](https://github.com/appfolio/react-gears/commit/7251bcc136da28d131e9d9c76f3c9a0f42b6fed7))


### Miscellaneous

* Fix missing yarn entry in .tool-versions ([a17f022](https://github.com/appfolio/react-gears/commit/a17f022514fac5373df55540252ed2453364968e))

## [8.14.0](https://github.com/appfolio/react-gears/compare/v8.13.2...v8.14.0) (2024-08-29)


### Features

* **FeedbackButton:** Re-throw error from doSubmit instead of swallowing it. ([55f371d](https://github.com/appfolio/react-gears/commit/55f371d58c49ce1898f5166c27855f5c229ed5a0))


### Bug Fixes

* fixup ([99e82e7](https://github.com/appfolio/react-gears/commit/99e82e703a7c5a0ffc86c141c67a32d9758f0af2))

## [8.13.2](https://github.com/appfolio/react-gears/compare/v8.13.1...v8.13.2) (2024-08-23)


### Bug Fixes

* **HasManyFieldsRow:** adds minWidth: 0 to HasManyFieldsRow to allow it to be smaller then it's content ([7754150](https://github.com/appfolio/react-gears/commit/77541506cc00f0df049cec07f38547e803da00b2))
* **ScrollContainer:** replace broken sample image ([45c7e2d](https://github.com/appfolio/react-gears/commit/45c7e2df2439c0141b0f144bd7a5ee61eddc9e6c))


### Miscellaneous

* update uuid from v8 to v9 ([6790e2f](https://github.com/appfolio/react-gears/commit/6790e2fd322c2de7005a516919a8258ff8f7656d))

## [8.13.1](https://github.com/appfolio/react-gears/compare/v8.13.0...v8.13.1) (2024-07-19)


### Bug Fixes

* add subtle suffix to bg-info and bg-secondary classes ([adc3280](https://github.com/appfolio/react-gears/commit/adc3280b0f40f91c625c13ec769267f3de751310))
* adjust blackpanel header color to use subtle variation ([10962b5](https://github.com/appfolio/react-gears/commit/10962b5b605c73bf296c19538efb039e8d474071))

## [8.13.0](https://github.com/appfolio/react-gears/compare/v8.12.0...v8.13.0) (2024-07-08)


### Features

* **CollapsableText:** add alignToggleButton prop to CollapsableText ([f6e8938](https://github.com/appfolio/react-gears/commit/f6e8938c603ab090277f4f7b7fbdb0168dac86e6))


### Bug Fixes

* fix storybook control definitions ([66df6ec](https://github.com/appfolio/react-gears/commit/66df6ec4fbfd7266b6c442f926dd7dcbecbac192))


### Miscellaneous

* add args to all stories to enable "show code" ([b9ef202](https://github.com/appfolio/react-gears/commit/b9ef2025804ee8cdb9898d1a4f78b5c5bc31ec59))
* bump node to v20 in github actions ([2cf2953](https://github.com/appfolio/react-gears/commit/2cf2953d0d6455ece451a51f27c5b10ee075a517))
* migrate @storybook/addon-knobs to @storybook/addon-controls ([c399754](https://github.com/appfolio/react-gears/commit/c39975414b8eec77aa187e2a9e4062fe5b7a10b4))
* move storybook-source-link to devDependencies ([cd146d0](https://github.com/appfolio/react-gears/commit/cd146d0e08cdaa2af22d9e40161c12b240e37f84))
* remove @storybook/addon-storysource, add 'autodocs' ([6690995](https://github.com/appfolio/react-gears/commit/66909952a3fcb67ee8d0e445a947d743d48f8d6f))
* remove direct jsdom and jsdom-global ([59929b8](https://github.com/appfolio/react-gears/commit/59929b8aa9d1f2ccab6184ade5965bf6cad4175a))
* udpate tar transitive deps ([979f148](https://github.com/appfolio/react-gears/commit/979f148a165bd9b5a96c043e12c982f2bb7d0b09))
* update .tool-versions ([5630652](https://github.com/appfolio/react-gears/commit/56306521fe74cb097c8c66377921032584cd8c8a))
* update braces transitive deps to secure version ([04826b6](https://github.com/appfolio/react-gears/commit/04826b6848b4d8fc0aa5f38f6f1a6323927567f7))
* update ip transitive deps ([2fec1c0](https://github.com/appfolio/react-gears/commit/2fec1c0bd020ba82ec0d756477135fd5621304f0))
* update json5 transitive deps ([16c9a93](https://github.com/appfolio/react-gears/commit/16c9a93e9a141e90b58faff5a4b07cd83c6766dc))
* update semver transtive deps ([78414ad](https://github.com/appfolio/react-gears/commit/78414ad88036067f22afbe002ef2246c29cd631c))
* update to storybook dependencies to v8 ([c57ec46](https://github.com/appfolio/react-gears/commit/c57ec468084c7897e6cb124d727aaf9a16396829))
* update word-wrap transitive deps ([ac6a535](https://github.com/appfolio/react-gears/commit/ac6a535e22da597f530f3bfdc4e9ad487b618f68))
* update ws transitive deps ([f38b4f4](https://github.com/appfolio/react-gears/commit/f38b4f4a2f13d4b521e287143206af273cc49f80))
* upgrade deps that use @babel/traverse ([834aeae](https://github.com/appfolio/react-gears/commit/834aeaec6036b8b3ccecdb7f6b502ebe4fe1bc61))
* upgrade jest to v28 ([5f07cdc](https://github.com/appfolio/react-gears/commit/5f07cdc6dc016965014c3eb5fafd4bfb82bc1969))
* upgrade jest to v29 ([ab4f232](https://github.com/appfolio/react-gears/commit/ab4f232037beb1e6e6c4af048ed61c9fabe26205))

## [8.12.0](https://github.com/appfolio/react-gears/compare/v8.11.2...v8.12.0) (2024-04-23)


### Features

* **APT-1610:** add portalEl prop to Combobox ([ebdacbc](https://github.com/appfolio/react-gears/commit/ebdacbccfd98d44b51bb9e061f0198e125f34b15))


### Bug Fixes

* make the Modal cancel buttons `btn-link` ([d2cb166](https://github.com/appfolio/react-gears/commit/d2cb1667e8c0c75a1eca5a6c1105c6780937e8cd))

## [8.11.2](https://github.com/appfolio/react-gears/compare/v8.11.1...v8.11.2) (2024-04-01)


### Bug Fixes

* change summarybox title from h3 to display-4 ([0a0235f](https://github.com/appfolio/react-gears/commit/0a0235ffa53f5b06915e24205bfc9b28a18f3174))
* correct tests ([612f88f](https://github.com/appfolio/react-gears/commit/612f88f28c74cc8485d8150e135edff02f2e0652))
* re-write Badge to use badge-{color} classes ([c920062](https://github.com/appfolio/react-gears/commit/c920062add5c518b9afc2bb552dddcadbd4cae02))


### Miscellaneous

* convert left/right to start/end ([1130d7d](https://github.com/appfolio/react-gears/commit/1130d7d03b79a3746a046c188d6414e5c8dd6da4))

## [8.11.1](https://github.com/appfolio/react-gears/compare/v8.11.0...v8.11.1) (2024-03-25)


### Bug Fixes

* allow className on CheckboxGroup ([cada747](https://github.com/appfolio/react-gears/commit/cada747d0ad3e8183572f274cfb428b39cd483ed))

## [8.11.0](https://github.com/appfolio/react-gears/compare/v8.10.3...v8.11.0) (2024-03-08)


### Features

* **CreditCardNumber:** Add unionpay as an accepted card type ([0b890ce](https://github.com/appfolio/react-gears/commit/0b890ceb1a45482e8962325fcf22f263355fd0b0))


### Miscellaneous

* add software catalog metadata file(s) ([cbd2b65](https://github.com/appfolio/react-gears/commit/cbd2b658b089a209fe35b5c6c0d5fc6b6be91095))

## [8.10.3](https://github.com/appfolio/react-gears/compare/v8.10.2...v8.10.3) (2024-01-26)


### Bug Fixes

* don't capture non-left mouse clicks on combobox ([8c50b2a](https://github.com/appfolio/react-gears/commit/8c50b2a07275f1ac56cd3462ec22c22a9e7c6df8))


### Miscellaneous

* update reactstrap to 9.2.2 ([cda36ee](https://github.com/appfolio/react-gears/commit/cda36ee7d29388e9573ac9931a44fb49bf5b323c))

## [8.10.2](https://github.com/appfolio/react-gears/compare/v8.10.1...v8.10.2) (2024-01-09)


### Bug Fixes

* replace table striped with bordered ([a931458](https://github.com/appfolio/react-gears/commit/a931458d28299723440dce9508c1396736248352))

## [8.10.1](https://github.com/appfolio/react-gears/compare/v8.10.0...v8.10.1) (2024-01-08)


### Bug Fixes

* add data-testid to tree components ([26251ec](https://github.com/appfolio/react-gears/commit/26251ec6b3969a469e73f42649656947eee467cd))
* add groupid and index to checkboxes and radio buttons ([2a1379b](https://github.com/appfolio/react-gears/commit/2a1379b6d0e0bd0680e1956da5c0854d8e0a761c))
* add passthrough testid ([ec737a5](https://github.com/appfolio/react-gears/commit/ec737a584d174766a483d97a9252373338f3e1b9))
* add testids ([57b3ee2](https://github.com/appfolio/react-gears/commit/57b3ee2fe912d79640635f71a95ac4d83b9165ce))
* correct data-testid format ([c3ae66a](https://github.com/appfolio/react-gears/commit/c3ae66a318ed50eec83cdff8cf36e527df562547))
* correct date test ([ec3156f](https://github.com/appfolio/react-gears/commit/ec3156f35f0b73919e724a2f24fea0e9ce7dad37))
* further react-gears update ([36e80bf](https://github.com/appfolio/react-gears/commit/36e80bf6ee0eb2615676d53c07c121c9e797be76))
* reword import and make prop optional ([ee3f261](https://github.com/appfolio/react-gears/commit/ee3f261dc5ccfdb0c961cecce2071555aa927114))

## [8.10.0](https://github.com/appfolio/react-gears/compare/v8.9.0...v8.10.0) (2023-11-28)


### Features

* add aria attributes ([3e4a5ec](https://github.com/appfolio/react-gears/commit/3e4a5ececbc17480409bedf7e45848467b230dc5))
* add notification warning to editable note mentions ([d46a736](https://github.com/appfolio/react-gears/commit/d46a736993771e8235b78cb2b81101aba2f58b21))
* adjust types ([10c3826](https://github.com/appfolio/react-gears/commit/10c38266d2b9ed4ec3e3d2f1b32f51e8f71cf325))
* final button component with displayName ([8ce182f](https://github.com/appfolio/react-gears/commit/8ce182fbf6e9f75e19d061999659a5062c7071c7))
* refactor component ([23a50bd](https://github.com/appfolio/react-gears/commit/23a50bd65e5c33b8b2ddfe635c03e6f87c80986a))
* remove displayname ([6be86c9](https://github.com/appfolio/react-gears/commit/6be86c923f6044199a752d8889ce1d06a91e3b97))
* remove the role prop ([ccc2040](https://github.com/appfolio/react-gears/commit/ccc2040bd428df4c8f4f9d11b73483d6e272c6c0))
* replace prop with hyphenated attribute ([9e2a5f1](https://github.com/appfolio/react-gears/commit/9e2a5f1ce2972379542f1149271ad4fcfeaab77a))
* revert condition to be handled on future release ([e44ae86](https://github.com/appfolio/react-gears/commit/e44ae86bdf70a13fbdf0a06bc6c074fc4ee46954))
* test rename component for enzyme compatibility ([0329c5e](https://github.com/appfolio/react-gears/commit/0329c5ef3e57ad841ea5c207d6d37cbfab937846))
* test without displayName ([5138b91](https://github.com/appfolio/react-gears/commit/5138b912929a0f467933f69fa8cd3d13c1c9aaf9))


### Bug Fixes

* use set for mentions comparison ([bf2fc2f](https://github.com/appfolio/react-gears/commit/bf2fc2fadf37c0112914527c727bb387ac86d2a4))

## [8.9.0](https://github.com/appfolio/react-gears/compare/v8.8.3...v8.9.0) (2023-11-08)


### Features

* **UncontrolledTable:** allow disabled attribute to be passed in with rows ([02c6951](https://github.com/appfolio/react-gears/commit/02c695175ab19c4f3b234bdb07cfea67c2cf5176))

## [8.8.3](https://github.com/appfolio/react-gears/compare/v8.8.2...v8.8.3) (2023-10-25)


### Miscellaneous

* update storbook CSS to new coastline URL ([2e621c8](https://github.com/appfolio/react-gears/commit/2e621c86494f5cdfaaea190d83300d83888422d6))
* update storbook CSS to new coastline URL (in themes) ([314f3d3](https://github.com/appfolio/react-gears/commit/314f3d33c050e7b1353e47ab83fee01ad1309a18))

## [8.8.2](https://github.com/appfolio/react-gears/compare/v8.8.1...v8.8.2) (2023-10-24)


### Bug Fixes

* fix UncontrolledTable column sorting for keys that use dot notation ([40872d2](https://github.com/appfolio/react-gears/commit/40872d214ef0768ebd78944fdd72a5f1c94a42d8))

## [8.8.1](https://github.com/appfolio/react-gears/compare/v8.8.0...v8.8.1) (2023-10-20)


### Bug Fixes

* update UncontrolledTable to use case insensitive sorting ([f599fd2](https://github.com/appfolio/react-gears/commit/f599fd25fa57272e166a42b15de4895687a50ad7))

## [8.8.0](https://github.com/appfolio/react-gears/compare/v8.7.0...v8.8.0) (2023-10-19)


### Features

* update uncontrolled table behavior to only update page if user is out of bounds ([060a3fb](https://github.com/appfolio/react-gears/commit/060a3fbd6779f8bba0c8c466e7cf26ba0cebbabb))

## [8.7.0](https://github.com/appfolio/react-gears/compare/v8.6.2...v8.7.0) (2023-10-18)


### Features

* add resetPageOnRowChange prop to UncontrolledTable ([f6bb91e](https://github.com/appfolio/react-gears/commit/f6bb91ee0f4fc83adc3683fce7271d53eb61a5c3))


### Bug Fixes

* add aria label to component ([f156117](https://github.com/appfolio/react-gears/commit/f1561174e519138d55957aca32a3b276d30fa7ad))

## [8.6.2](https://github.com/appfolio/react-gears/compare/v8.6.1...v8.6.2) (2023-09-19)


### Bug Fixes

* correct placeholder color ([5aebc9c](https://github.com/appfolio/react-gears/commit/5aebc9c57e4feb870762f88bede8302cd9994ac4))

## [8.6.1](https://github.com/appfolio/react-gears/compare/v8.6.0...v8.6.1) (2023-08-30)


### Bug Fixes

* correct selected fields font style ([29f902f](https://github.com/appfolio/react-gears/commit/29f902f1113b72e8d637d7991d9f5b9461c0e8ff))

## [8.6.0](https://github.com/appfolio/react-gears/compare/v8.5.1...v8.6.0) (2023-08-29)


### Features

* allow labelClassName to be overridden ([5f79809](https://github.com/appfolio/react-gears/commit/5f798099989ef418a20cff98ab1309892ae0b19b))

## [8.5.1](https://github.com/appfolio/react-gears/compare/v8.5.0...v8.5.1) (2023-08-08)


### Bug Fixes

* adjust placeholder color and style ([2c32eec](https://github.com/appfolio/react-gears/commit/2c32eec71335aa5fe31e2c8d6420f9e14ffd3899))
* eliminate race condition for test ([ba37b8f](https://github.com/appfolio/react-gears/commit/ba37b8fabeedb4754cd41f2ddf00854284c2fbac))
* pass display name for element naming ([ed26e7f](https://github.com/appfolio/react-gears/commit/ed26e7f53f568c9fb1036edec1e7f029ff5f39dd))

## [8.5.0](https://github.com/appfolio/react-gears/compare/v8.4.2...v8.5.0) (2023-06-17)


### Features

* bump reactstrap for aria-modal ([972b3e4](https://github.com/appfolio/react-gears/commit/972b3e48219c7a9c081e83d2564cdaa9775306c4))


### Bug Fixes

* no more using reactstrap defaultProps ([675f9e2](https://github.com/appfolio/react-gears/commit/675f9e2cdcaae49a8a624411cc2f0dd19fbc0da4))

## [8.4.2](https://github.com/appfolio/react-gears/compare/v8.4.1...v8.4.2) (2023-06-15)


### Bug Fixes

* update README ([2008938](https://github.com/appfolio/react-gears/commit/2008938d50767b264901d7e6c45ba6122adff21b))

## [8.4.1](https://github.com/appfolio/react-gears/compare/v8.4.0...v8.4.1) (2023-06-14)


### Miscellaneous

* Makes passed style props additive rather than replacing in tooltipbutton ([6ceb54d](https://github.com/appfolio/react-gears/commit/6ceb54d2e4243bb77e17b564596edc1a469a7f7c))

## [8.4.0](https://github.com/appfolio/react-gears/compare/v8.3.0...v8.4.0) (2023-06-06)


### Features

* change Element to ReactNode type for title on InfoBox ([fdba880](https://github.com/appfolio/react-gears/commit/fdba880b1ce8ddb7dde2269f4f6969bec8bda82d))

## [8.3.0](https://github.com/appfolio/react-gears/compare/v8.2.0...v8.3.0) (2023-06-06)


### Features

* add Element as a type for title on InfoBox ([0e2d634](https://github.com/appfolio/react-gears/commit/0e2d6342dce8286d823ef547273a198e7006545d))

## [8.2.0](https://github.com/appfolio/react-gears/compare/v8.1.0...v8.2.0) (2023-05-25)


### Features

* add `storybook-source-link` ([b349196](https://github.com/appfolio/react-gears/commit/b349196bbec41721fe55c519981a444fc77bf436))
* define `sourceLink` for each component ([397c494](https://github.com/appfolio/react-gears/commit/397c4946b62af1c2eeee6be7d96bc115fd7a47de))


### Bug Fixes

* storybook source links ([16786b4](https://github.com/appfolio/react-gears/commit/16786b4c0a68619fb866e54ba0cf0e5f89779704))

## [8.1.0](https://github.com/appfolio/react-gears/compare/v8.0.3...v8.1.0) (2023-05-09)


### Features

* add aria-label to spinner by default ([bfd278a](https://github.com/appfolio/react-gears/commit/bfd278a269346d18cc38165f38052bb7c84a9590))
* **CollapsableText:** Change maxLength prop to maxHeight, allow any children, move show more button to bottom ([ef444a3](https://github.com/appfolio/react-gears/commit/ef444a37b48843573b68fa0ee47fb4b6bd536012))


### Miscellaneous

* remove unused postcss config ([a174bef](https://github.com/appfolio/react-gears/commit/a174bef79d9154f58fe5ace5f532bc84fb496654))
* remove unused storybook-static ([89da8c9](https://github.com/appfolio/react-gears/commit/89da8c9ebcf0dbb47f12d7ff499ae42fa51e6038))

## [8.0.3](https://github.com/appfolio/react-gears/compare/v8.0.2...v8.0.3) (2023-04-27)


### Bug Fixes

* remove font awesome v4 shims ([658c17c](https://github.com/appfolio/react-gears/commit/658c17cbf73e39e2c8368d081bd477fb0376642a))

## [8.0.2](https://github.com/appfolio/react-gears/compare/v8.0.0...v8.0.2) (2023-04-07)


### Bug Fixes

* **Alert:** use coastline predefined class for Alert components ([9c42c99](https://github.com/appfolio/react-gears/commit/9c42c99c34b23d77b4127e36da57434337aee22d))
* onSelect should not be called when the List selected property is updated ([4aec9fc](https://github.com/appfolio/react-gears/commit/4aec9fc140b4b6adc4651ed1d503902a0fffaaf8))


### Miscellaneous
* **useMap:** replace state with ref to persist obj reference ([ed1a42f](https://github.com/appfolio/react-gears/commit/ed1a42f5e6a11f4a19fb165a4803b5c7a5191800))


### build

* pin node version for release-pr action ([21b8f64](https://github.com/appfolio/react-gears/commit/21b8f64b30114519cf7e0ccf7dbd812f4c2e8d70))

## [8.0.1](https://github.com/appfolio/react-gears/compare/v8.0.0...v8.0.1) (2023-02-27)


### Bug Fixes

* add icon style to include cc brands ([25ab541](https://github.com/appfolio/react-gears/commit/25ab54179ce805f027ac9320f744cacef3300fab))
* dont use select props value when falsy ([3e7362d](https://github.com/appfolio/react-gears/commit/3e7362d1d1563195b8a946d96b6a76725d78e7ce))
* run prettier ([b0ad9ed](https://github.com/appfolio/react-gears/commit/b0ad9ed8bf74be43823210d9196600004257f638))

## [8.0.0](https://github.com/appfolio/react-gears/compare/v7.13.2...v8.0.0) (2023-02-02)


### ⚠ BREAKING CHANGES

* replace link to coastline
* update icon list
* add spacing
* correct formatting

### Bug Fixes

* add spacing ([f94ca34](https://github.com/appfolio/react-gears/commit/f94ca343285c9a3e0b1f9ca7bab63027bb055144))
* correct formatting ([0c48f1b](https://github.com/appfolio/react-gears/commit/0c48f1b1e70f6abfc6175d665c45e6e633970753))
* replace icon ([2da576c](https://github.com/appfolio/react-gears/commit/2da576c13f183b2b3df75548ffeedc4665d2c8b4))
* replace link to coastline ([dbb646e](https://github.com/appfolio/react-gears/commit/dbb646ec455bed9c0fd1309a3bdab167e24d7a8c))
* update icon list ([5f34ebb](https://github.com/appfolio/react-gears/commit/5f34ebb6f2d6533c3d03f09ce18e6b8c8d01044e))

## [7.13.2](https://github.com/appfolio/react-gears/compare/v7.13.1...v7.13.2) (2023-01-26)


### Bug Fixes

* **EditableNoteMentions:** make tributejs import a dynamic import ([a048293](https://github.com/appfolio/react-gears/commit/a04829350c181f9182ca91d5ea40c8609bba2cb1))

## [7.13.1](https://github.com/appfolio/react-gears/compare/v7.13.0...v7.13.1) (2023-01-25)


### Bug Fixes

* dont useeffect to sync props with state ([c03d3d0](https://github.com/appfolio/react-gears/commit/c03d3d0943178e1bc49bdea60a8608c87eb66273))
* reduce manual passing of props ([a56ae2a](https://github.com/appfolio/react-gears/commit/a56ae2a067e8718823c54ab17e3ab034bb9ae0e3))

## [7.13.0](https://github.com/appfolio/react-gears/compare/v7.12.1...v7.13.0) (2023-01-24)


### Features

* update syled jsx to v5 for security ([e028f43](https://github.com/appfolio/react-gears/commit/e028f437391495d318fd37eed0070f72c3d416e0))

## [7.12.1](https://github.com/appfolio/react-gears/compare/v7.12.0...v7.12.1) (2023-01-09)


### Bug Fixes

* block panel header with optional parts ([df8a8d8](https://github.com/appfolio/react-gears/commit/df8a8d8216a36c2cff7858bb094389251db258c7))

## [7.12.0](https://github.com/appfolio/react-gears/compare/v7.11.0...v7.12.0) (2023-01-06)


### Features

* render BlockPanel header when title provided ([b21f138](https://github.com/appfolio/react-gears/commit/b21f1387647fa840000373298560aa0faf04431e))


### Miscellaneous

* run prettier ([c93eff6](https://github.com/appfolio/react-gears/commit/c93eff65d47dd7d8f7a4d308a90a4c70d686b432))

## [7.11.0](https://github.com/appfolio/react-gears/compare/v7.10.0...v7.11.0) (2023-01-05)


### Features

* add NoteMentions ([21cc225](https://github.com/appfolio/react-gears/commit/21cc2250e453ce655468666e22efa243b37cf5d2))


### Bug Fixes

* add `text-break` classname to break long strings ([f557534](https://github.com/appfolio/react-gears/commit/f5575342f63103a0405f4b58d5911ea4481f4850))
* auto-complete bug ([68db766](https://github.com/appfolio/react-gears/commit/68db766c6fd0924b7ecedf7e4fa2eae4a7be308a))
* empty mention string bug ([de89b5d](https://github.com/appfolio/react-gears/commit/de89b5d183756f24dae06e9154fecb8201f0dd3b))
* export EditableNoteMentions ([bfec9c1](https://github.com/appfolio/react-gears/commit/bfec9c1fd4aea6301bce2fe322f0dfebf1c98376))
* spec timebomb caused by New Year ([7d95ef8](https://github.com/appfolio/react-gears/commit/7d95ef873542a84287f71a037217f8950e38145e))

## [7.10.0](https://github.com/appfolio/react-gears/compare/v7.9.1...v7.10.0) (2022-12-08)


### Features

* export combobox sub components ([5ff519e](https://github.com/appfolio/react-gears/commit/5ff519e96d468133741f09232e1a5d56963aecf4))


### Bug Fixes

* format prettier ([a597bce](https://github.com/appfolio/react-gears/commit/a597bcea5188f3f688159365be5b59ecb4aced23))
* remove fa6 from links and add param ([f0315d2](https://github.com/appfolio/react-gears/commit/f0315d207b7fff87d893dfc8228f7883c7685f03))
* revert icons, props and dependencies to fa v5 ([ad64437](https://github.com/appfolio/react-gears/commit/ad64437beb3185bff98bf5bd511594457e30ff28))

## [7.9.1](https://github.com/appfolio/react-gears/compare/v7.9.0...v7.9.1) (2022-11-30)


### Bug Fixes

* rating key centering ([be645ef](https://github.com/appfolio/react-gears/commit/be645efd0113c201113a975b22b62ecac5fca365))
* run prettier ([04d7394](https://github.com/appfolio/react-gears/commit/04d739453e81b88a8507a4603281b5af8a19777c))
* update credit card and calendar icons to font awesome v6.2.1 ([5f10449](https://github.com/appfolio/react-gears/commit/5f10449f5679fb0744e01bd8011de75d21acacaf))
* update ellipsis and times icons to font awesome v6.2.1 ([7775e7e](https://github.com/appfolio/react-gears/commit/7775e7e1b93f7577b8913d5b347cc42765b75df2))

## [7.9.0](https://github.com/appfolio/react-gears/compare/v7.8.18...v7.9.0) (2022-10-31)


### Features

* add EditableNoteMentions ([d02a59f](https://github.com/appfolio/react-gears/commit/d02a59f2dd8416006a3a1d067c15b4753da19ddb))

## [7.8.18](https://github.com/appfolio/react-gears/compare/v7.8.17...v7.8.18) (2022-10-28)


### Bug Fixes

* add a comment ([641e3d7](https://github.com/appfolio/react-gears/commit/641e3d74b054da1fe13732428f484963ba85b9a9))
* add icon style as a parameter to icon component ([8be45dc](https://github.com/appfolio/react-gears/commit/8be45dc406c2d1e4bf3393e9c20e5af47b9bacc3))
* add prop isSolid ([f0d9dc5](https://github.com/appfolio/react-gears/commit/f0d9dc50aed448054b720fa12d6b145ce1c9f174))
* add yarn lock file ([cfb4891](https://github.com/appfolio/react-gears/commit/cfb4891d0b706abd5bc716a2f2d1e6f3e6b0e719))
* format files ([8688c39](https://github.com/appfolio/react-gears/commit/8688c3942058bc9a23f73444ea7f7f47db838221))
* update coastline to 5.3.1-pre ([7b74052](https://github.com/appfolio/react-gears/commit/7b7405279d432d49022caab9a1570306e70afd2b))
* update font awesome icons to v6 ([d6b310c](https://github.com/appfolio/react-gears/commit/d6b310c8b7f4da7ca6d58ac749e93bdf6f94ce30))
* update font awesome icons to v6 in alert and status test files ([305bf2f](https://github.com/appfolio/react-gears/commit/305bf2f33547830b650a9a0b1732d9635c06d9f9))
* update fontawesome cdn link to v6.2.0 ([d6452bb](https://github.com/appfolio/react-gears/commit/d6452bb19cf3fe594c49e64a7bf4ac94eb1d90c6))

## [7.8.17](https://github.com/appfolio/react-gears/compare/v7.8.16...v7.8.17) (2022-10-27)


### Miscellaneous

* bump reactstrap ([4903ec5](https://github.com/appfolio/react-gears/commit/4903ec511c47940471dbfd0a8109ac5125b16afd))

## [7.8.16](https://github.com/appfolio/react-gears/compare/v7.8.15...v7.8.16) (2022-10-06)


### Bug Fixes

* remove h5 class from blockpanel card title ([560e8ee](https://github.com/appfolio/react-gears/commit/560e8eeba1ae6d8a498bf57f3cdd64decfc429f2))

## [7.8.15](https://github.com/appfolio/react-gears/compare/v7.8.14...v7.8.15) (2022-09-28)


### Bug Fixes

* prevent list item content from overflowing ([2a548a2](https://github.com/appfolio/react-gears/commit/2a548a249c80fe0db448584ee08bc5ce0c0cad81))

## [7.8.14](https://github.com/appfolio/react-gears/compare/v7.8.13...v7.8.14) (2022-09-26)


### Bug Fixes

* add prop initiallyHiddenTimes and support clearing values ([18dc6ab](https://github.com/appfolio/react-gears/commit/18dc6ab1634a037a30a0fc87ac2784436a8215b5))

## [7.8.13](https://github.com/appfolio/react-gears/compare/v7.8.12...v7.8.13) (2022-09-23)


### Bug Fixes

* **UncontrolledTable:** persist selected rows even after change ([84b2715](https://github.com/appfolio/react-gears/commit/84b27150b777d67825761c8ad4521b26da77cf68))

## [7.8.12](https://github.com/appfolio/react-gears/compare/v7.8.11...v7.8.12) (2022-09-01)


### Bug Fixes

* form row input losing focus ([3d05854](https://github.com/appfolio/react-gears/commit/3d05854df6cd9e3d89e825b0f3ec98d71cdb6412))

## [7.8.11](https://github.com/appfolio/react-gears/compare/v7.8.10...v7.8.11) (2022-09-01)


### Bug Fixes

* add classname prop for backwards compatibility ([03ad4c7](https://github.com/appfolio/react-gears/commit/03ad4c70129fd2c75798bca8d70f3a8c65fb3c37))

## [7.8.10](https://github.com/appfolio/react-gears/compare/v7.8.9...v7.8.10) (2022-08-26)


### Bug Fixes

* formatting ([cceca12](https://github.com/appfolio/react-gears/commit/cceca129af9412ea603fb097841a04050d568706))


### Miscellaneous

* fix recipient usage for FeedbackButton ([d3108fd](https://github.com/appfolio/react-gears/commit/d3108fd09b040c4fd142128240aac473fe31e410))

## [7.8.9](https://github.com/appfolio/react-gears/compare/v7.8.8...v7.8.9) (2022-08-26)


### Bug Fixes

* use npm_token for npm publish ([3f1c1d0](https://github.com/appfolio/react-gears/commit/3f1c1d0ca312f726aab858d0b15a3cf91affd6aa))

## [7.8.8](https://github.com/appfolio/react-gears/compare/v7.8.7...v7.8.8) (2022-08-26)


### Bug Fixes

* fix npm publish ([5bf6eaf](https://github.com/appfolio/react-gears/commit/5bf6eaf304f2def5fbdfa5b24c79994ff4ff643a))

## [7.8.7](https://github.com/appfolio/react-gears/compare/v7.8.6...v7.8.7) (2022-08-26)


### Bug Fixes

* set auth token for publish ([a7a0a80](https://github.com/appfolio/react-gears/commit/a7a0a80deeea8c16665dd119a6bed159cced9f50))

## [7.8.6](https://github.com/appfolio/react-gears/compare/v7.8.5...v7.8.6) (2022-08-26)


### Bug Fixes

* release set config ([e7f0d40](https://github.com/appfolio/react-gears/commit/e7f0d40fff56fd3ec6c78c2832727c065a293742))

## [7.8.5](https://github.com/appfolio/react-gears/compare/v7.8.4...v7.8.5) (2022-08-26)


### Bug Fixes

* set registry to npmjs before publishing to npm ([1407b5b](https://github.com/appfolio/react-gears/commit/1407b5b4035dc0fd7fdf95faad1123b87cc2fd17))

## [7.8.4](https://github.com/appfolio/react-gears/compare/v7.8.3...v7.8.4) (2022-08-26)


### Miscellaneous

* move auth token env ([b89fff3](https://github.com/appfolio/react-gears/commit/b89fff3368b847545631ef518e1b6a80cb3892ff))

## [7.8.3](https://github.com/appfolio/react-gears/compare/v7.8.2...v7.8.3) (2022-08-25)


### Bug Fixes

* remove yarn publish ([f47d2a7](https://github.com/appfolio/react-gears/commit/f47d2a7254e706acb8a22b82e32fc93cad82436e))
* use otp for auth token ([b3104ad](https://github.com/appfolio/react-gears/commit/b3104ad238769783897bafc41ff4286f6ae39691))


### Miscellaneous

* only use node 16 for tests ([67eace4](https://github.com/appfolio/react-gears/commit/67eace4f8e5680acf68e32e684df8b8fdc166477))

## [7.8.2](https://github.com/appfolio/react-gears/compare/v7.8.1...v7.8.2) (2022-08-25)


### Bug Fixes

* remove postpublish ([d401410](https://github.com/appfolio/react-gears/commit/d401410f71d68467d558695b40d0e94e608e680c))
* remove unsupported ignore-scripts flag ([b7bc621](https://github.com/appfolio/react-gears/commit/b7bc6211ea70a98035545508ac419d802bf54b46))

## [7.8.1](https://github.com/appfolio/react-gears/compare/v7.8.0...v7.8.1) (2022-08-25)


### Bug Fixes

* release scripts must use yarn npm publish ([a3a3443](https://github.com/appfolio/react-gears/commit/a3a34439e4570c1893ecc35ed430881ba837b0e1))

## [7.8.0](https://github.com/appfolio/react-gears/compare/v7.7.0...v7.8.0) (2022-08-25)


### Features

* convert formrow and formlabelgroup to ts ([1585aab](https://github.com/appfolio/react-gears/commit/1585aabe9e3fb941e8af29e48839889989acef5f))


### Bug Fixes

* add classname string to formrow ([c292165](https://github.com/appfolio/react-gears/commit/c292165dbc5e7c75f3ebd108370b30224c059e13))
* addressinput should call onchange with custom names ([dd99dba](https://github.com/appfolio/react-gears/commit/dd99dba36373c3c94cd50544794ba2b8889cb907))
* export used prop types ([61f6745](https://github.com/appfolio/react-gears/commit/61f6745e60b89e8818581701369739c96ec7623f))
* prevent sortable list double rendering ([be4e9a0](https://github.com/appfolio/react-gears/commit/be4e9a06d29334a2a8f7fb6be26f9ba37357e247))
* proper typings for overridable components ([5fdc975](https://github.com/appfolio/react-gears/commit/5fdc97561f2ee612b97566fe86d3cef5436f1312))


### Miscellaneous

* convert to yarn ([a2af9c1](https://github.com/appfolio/react-gears/commit/a2af9c1dc88616d76c8a8900b83ef0d52b1a1bd3))
* use yarn in package.json ([b9f474f](https://github.com/appfolio/react-gears/commit/b9f474fd147dc1360facb6c3850f5c8238365b52))

## [7.7.0](https://github.com/appfolio/react-gears/compare/v7.6.1...v7.7.0) (2022-07-27)


### Features

* make MultiSelectCombobox composable, allow input of selections ([2873636](https://github.com/appfolio/react-gears/commit/2873636a1d7f2c0e570039fa23c365562ff0844a))

## [7.6.1](https://github.com/appfolio/react-gears/compare/v7.6.0...v7.6.1) (2022-07-20)


### Bug Fixes

* add prop to identify last row in responsive table ([406b62b](https://github.com/appfolio/react-gears/commit/406b62b8eca4cd8631cc78d6b2f5d11f4edc0d2f))

## [7.6.0](https://github.com/appfolio/react-gears/compare/v7.5.0...v7.6.0) (2022-07-19)


### Features

* add prop to center year input on MonthInput and MonthCalendar ([5518ec2](https://github.com/appfolio/react-gears/commit/5518ec216fa92df512de694a22f547e3231e8cec))

## [7.5.0](https://github.com/appfolio/react-gears/compare/v7.4.0...v7.5.0) (2022-07-12)


### Features

* add API agnostic FeedbackButton ([27b4dfe](https://github.com/appfolio/react-gears/commit/27b4dfebd7b3401327daf92ddc8fbf673e67f0af))
* introduce new MultiSelectCombobox ([24c276e](https://github.com/appfolio/react-gears/commit/24c276ebd630737a70b3bba6787cc795cce0c16b))


### Bug Fixes

* minor tweaks for stability/linting/storybook ([bc5528a](https://github.com/appfolio/react-gears/commit/bc5528a6dd25133c7eb2dd838d346c8de9f0810e))
* work around typedef bug in react-use ([d8ec9b4](https://github.com/appfolio/react-gears/commit/d8ec9b43c13b48d06abb4291562bd293c39b8d6c))


### Miscellaneous

* convert to functional component ([cd67fac](https://github.com/appfolio/react-gears/commit/cd67fac4bbc35d60e9882b227495b5364949b9e4))
* typify component ([3931140](https://github.com/appfolio/react-gears/commit/39311404e0fe7029950dc417baff880f3a2e88ce))

## [7.4.0](https://github.com/appfolio/react-gears/compare/v7.3.0...v7.4.0) (2022-06-16)


### Features

* add granular steps component ([51fce7f](https://github.com/appfolio/react-gears/commit/51fce7f61aff1c12d2731137d86986025b5e2ab7))


### Bug Fixes

* fixed the chevron in the listitem to be centered ([19b6ce7](https://github.com/appfolio/react-gears/commit/19b6ce7fef571d3f4ac5889ef45f250c195a2f58))


### Miscellaneous

* rename Spinner.js to Spinner.tsx ([2c05d98](https://github.com/appfolio/react-gears/commit/2c05d98f9a4df4f1a6fc9b935e0f42f725527cdb))
* update package-lock.json ([1a008e7](https://github.com/appfolio/react-gears/commit/1a008e7282da9a67d9a6d4ac80a6b6310336c160))
* update Spinner to typescript ([2332855](https://github.com/appfolio/react-gears/commit/2332855e6281f77fa6e54cb201e82d8d83504a3a))

## [7.3.0](https://github.com/appfolio/react-gears/compare/v7.2.0...v7.3.0) (2022-06-02)


### Features

* add className prop to HasManyFields ([2b7f10d](https://github.com/appfolio/react-gears/commit/2b7f10d249a9241d36a2051a6621193245312a14))
* fix tabbing between radiogroups ([f3f8cbc](https://github.com/appfolio/react-gears/commit/f3f8cbc67895718fdc956340a0a9ccd7f11d71d6))

## [7.2.0](https://github.com/appfolio/react-gears/compare/v7.1.1...v7.2.0) (2022-05-25)


### Features

* merge the Tree component to react-gears ([14bdd6f](https://github.com/appfolio/react-gears/commit/14bdd6f2e77dbfef1f43edd190d1eec49c4eee5f))


### Miscellaneous

* replace uniqid dependency with counter ([b1e2d21](https://github.com/appfolio/react-gears/commit/b1e2d21192e36542a2ccbda4e37f4aa233e7df09))

### [7.1.1](https://github.com/appfolio/react-gears/compare/v7.1.0...v7.1.1) (2022-05-04)


### Bug Fixes

* remove named types as it is a breaking change ([7fa5329](https://github.com/appfolio/react-gears/commit/7fa5329539f64d81937f38e019e46b4c3ddc1b69))

## [7.1.0](https://www.github.com/appfolio/react-gears/compare/v7.0.4...v7.1.0) (2022-04-27)


### Features

* add dismissible to Alert props type ([55f0a01](https://www.github.com/appfolio/react-gears/commit/55f0a018a3f797fe067b2eaf4eb0da08ed680664))
* allow radiogroup label to be jsx element ([ab8ee51](https://www.github.com/appfolio/react-gears/commit/ab8ee51db3f999fb560d55da0f12bc7e24e5fab5))


### Bug Fixes

* conform popover to coastline look ([7835f2e](https://www.github.com/appfolio/react-gears/commit/7835f2eb1b770aa3c0f51bb0fdcb2c7fe17895e3))


### Miscellaneous

* update typescript; cleanup imports ([74882a4](https://www.github.com/appfolio/react-gears/commit/74882a4339c68580694835481a837f400c3877e2))

### [7.0.4](https://www.github.com/appfolio/react-gears/compare/v7.0.3...v7.0.4) (2022-04-01)


### Bug Fixes

* allSelectableSelected should use hasItem vs map.has ([d14dd91](https://www.github.com/appfolio/react-gears/commit/d14dd91eb56d0effdcac7897163051b69ef36315))
* jumpy combobox from popper ([e668ec0](https://www.github.com/appfolio/react-gears/commit/e668ec023b1c0b327f7c3aed7b9e7f51aecfcdcf))
* lint issues ([097ff39](https://www.github.com/appfolio/react-gears/commit/097ff39c91d8d93c40423cc4df41214b60b2d53e))
* **select:** have consistent clear (x) position ([0a4eca3](https://www.github.com/appfolio/react-gears/commit/0a4eca35eb2f9d6d304f41cfa1eb424e4fdbb77b))


### Miscellaneous

* convert FeatureBanner to TS/function ([a474e3a](https://www.github.com/appfolio/react-gears/commit/a474e3a23da4e22c7d0b9c82c0581a5964c47e29))

### [7.0.3](https://www.github.com/appfolio/react-gears/compare/v7.0.2...v7.0.3) (2022-03-29)


### Bug Fixes

* fixes following code review ([cf22858](https://www.github.com/appfolio/react-gears/commit/cf22858606b60a982af504b0a92a9b7d6eeaf113))


### Miscellaneous

* move components to their own directory ([5db1101](https://www.github.com/appfolio/react-gears/commit/5db1101100f03e82d3c6af11a5f8dd0ef8d814be))

### [7.0.2](https://www.github.com/appfolio/react-gears/compare/v7.0.1...v7.0.2) (2022-03-21)


### Bug Fixes

* better stories for popover to eliminate styling confusion ([2f83ffe](https://www.github.com/appfolio/react-gears/commit/2f83ffe6f77bbdf6bd04ef8ea39d51f2a1849566))
* no destructuring needed with Select component ([9a17f39](https://www.github.com/appfolio/react-gears/commit/9a17f39eabda1a3b3e6549ecfbfcb8aff78ed447))
* update list icons to match prod ([37760c9](https://www.github.com/appfolio/react-gears/commit/37760c9edd3e3198700aca0eeb1589aa8056ac7c))


### Miscellaneous

* add ignore-revs file ([0391339](https://www.github.com/appfolio/react-gears/commit/0391339bc5d7185c1ffbc6188349454f29755256))
* update eslint and format all files ([58c03e2](https://www.github.com/appfolio/react-gears/commit/58c03e25323a4a751115071024decbb472d10038))

### [7.0.1](https://www.github.com/appfolio/react-gears/compare/v7.0.0...v7.0.1) (2022-03-14)


### Bug Fixes

* coastline url for bootstrap5 ([09f1a2c](https://www.github.com/appfolio/react-gears/commit/09f1a2c46d532e4f48351d9bda65038ae015fbef))
* revert Table back to class component ([df9f103](https://www.github.com/appfolio/react-gears/commit/df9f1036bf80dafb23b26f01ee5f730fd8d5d495))


### Miscellaneous

* convert Tooltip to function/TS ([3b44e61](https://www.github.com/appfolio/react-gears/commit/3b44e61806be4c28407743369ebb2b0aa68a9bac))

## [7.0.0](https://www.github.com/appfolio/react-gears/compare/v6.15.1...v7.0.0) (2022-03-11)


### ⚠ BREAKING CHANGES

* update .close -> .btn-close
* update border-right/left -> border-start/end
* update text-right/left -> text-start/end
* update mr/l -> ms/e and pr/l -> ps/e
* update gutters to use .g-*, .gx-*, and .gy-*
* remove InputGroupAddon
* remove CustomInput in favor of Input
* update to reactstrap 9 and popper 2
* use bootstrap5 themes for storybook

### Features

* Add Accordion ([6494642](https://www.github.com/appfolio/react-gears/commit/6494642da95fedef66abd3c2c115dc525300e7c8))
* add form-group class into FormGroup ([3ebc96c](https://www.github.com/appfolio/react-gears/commit/3ebc96c2ed83ce31d10c87a6f2a1db77a547de7d))
* Add Offcanvas ([c2a31f3](https://www.github.com/appfolio/react-gears/commit/c2a31f39b575d14c805a6d79d4881119ed87bf43))
* migrate List to bootstrap 5 ([dfceb09](https://www.github.com/appfolio/react-gears/commit/dfceb09eba51a952886f3a48c000eb6471221446))
* Remove custom flex/margins in CheckboxGroup and RadioGroup. ([b5b9ff5](https://www.github.com/appfolio/react-gears/commit/b5b9ff50fcfb618160eee1a563a86fff947a32ff))
* remove CustomInput in favor of Input ([81f5423](https://www.github.com/appfolio/react-gears/commit/81f542398cb27807740b1b2cff5695040186754e))
* remove InputGroupAddon ([71bb53d](https://www.github.com/appfolio/react-gears/commit/71bb53d7f37f816a793a03c02ceef69526d05c5f))
* Replace .font-weight-* with .fw-* ([3541dff](https://www.github.com/appfolio/react-gears/commit/3541dffc7347c2e48364b37cd5386e2f6339c875))
* Replace .sr-only with .visually-hidden ([6677ab6](https://www.github.com/appfolio/react-gears/commit/6677ab6d458346f4eca197d6a8ab847b7ad4ca56))
* update .close -> .btn-close ([3795410](https://www.github.com/appfolio/react-gears/commit/3795410cd87af1efdfa41b66275d5beb32077599))
* update angle-left/right -> angle-start/end ([0e7663e](https://www.github.com/appfolio/react-gears/commit/0e7663e18e11352983753e94d688fdb07810b3fb))
* update border-right/left -> border-start/end ([162cf3e](https://www.github.com/appfolio/react-gears/commit/162cf3e6ac7e05b158d4dae14856170ffaa6fe4e))
* update gutters to use .g-*, .gx-*, and .gy-* ([675ed1e](https://www.github.com/appfolio/react-gears/commit/675ed1ee987af775a3a4f6224fa2d65320e52925))
* update jumbotron for backwards compatibility ([6dd0499](https://www.github.com/appfolio/react-gears/commit/6dd0499b930362cf578bc6800237274047c273ec))
* update mr/l -> ms/e and pr/l -> ps/e ([1506cbc](https://www.github.com/appfolio/react-gears/commit/1506cbc57a6abea2c325c83165afb773636445e4))
* update rounded-left/right -> rounded-start/end ([7a05aab](https://www.github.com/appfolio/react-gears/commit/7a05aab221bba3a744565527b5cb0aa54e93cef8))
* update text-right/left -> text-start/end ([95852e4](https://www.github.com/appfolio/react-gears/commit/95852e43b6a328344857233c04dc72d5a98fa410))
* update to reactstrap 9 and popper 2 ([0ffefea](https://www.github.com/appfolio/react-gears/commit/0ffefea1749b82ffbe9c6c01e594ae7477431168))


### Bug Fixes

* add align-stretch to the close button in HasManyFields ([914fd85](https://www.github.com/appfolio/react-gears/commit/914fd8539c6145bf0280a89d663db8fb1000a4f4))
* close icon font size should be .5rem ([f9a0198](https://www.github.com/appfolio/react-gears/commit/f9a0198cd53ef378dfeb4c70cc97b96552feb012))
* FormLabelGroup padding/margins ([a622264](https://www.github.com/appfolio/react-gears/commit/a6222647dbfdb724a72251037a0d4f4e1b94e0c0))
* js-datapair has mb-1 style built in ([eef35d2](https://www.github.com/appfolio/react-gears/commit/eef35d295ef863b8504c1417bb8f24a40ff03d74))
* popper types ([6fe6c97](https://www.github.com/appfolio/react-gears/commit/6fe6c97fbc94411daddd5c016354331f9de4eb29))
* type definition for getAlignment ([ec2c1b6](https://www.github.com/appfolio/react-gears/commit/ec2c1b68a6311b73cb5fad1a5f3dc007d7b1d70a))
* type imports from reactstrap ([6db8fe3](https://www.github.com/appfolio/react-gears/commit/6db8fe31d9ceb66d599f8f390934d2e459f3b441))


### build

* use bootstrap5 themes for storybook ([2b05e59](https://www.github.com/appfolio/react-gears/commit/2b05e5951189376ff3ad84e19d8bc93600559559))


### Miscellaneous

* Add fullscreen and xl options to Modal story ([4ab36ad](https://www.github.com/appfolio/react-gears/commit/4ab36ad77a9fda4154ce6567bbb0beca71d74a00))
* Add story for floating labels ([b4466a5](https://www.github.com/appfolio/react-gears/commit/b4466a53706e36ed3da0b4857de36d7bada5d319))
* **DateInput:** update positionFixed logic ([f8c19b6](https://www.github.com/appfolio/react-gears/commit/f8c19b6e79a9b64fa03e33eb71fc5663020ba039))
* remove Portal component ([e0a3367](https://www.github.com/appfolio/react-gears/commit/e0a3367514fca5a06226ee5ac49f66464c93424c))
* **storybook:** add story for InputGroup with multiple inputs ([91c494e](https://www.github.com/appfolio/react-gears/commit/91c494e49f64053a77210f0f27d5dcd7f0fe8673))
* Update tests for BS5 changes ([5007219](https://www.github.com/appfolio/react-gears/commit/500721997d4f7a3955723d3319f953759cd90df3))
* use es imports from reactstrap vs lib imports ([2b681bb](https://www.github.com/appfolio/react-gears/commit/2b681bb407b359fb24264225014afa84b2284353))

### [6.15.1](https://www.github.com/appfolio/react-gears/compare/v6.15.0...v6.15.1) (2022-03-10)


### Bug Fixes

* react-gears v6 will point to coastline v4 ([68c0731](https://www.github.com/appfolio/react-gears/commit/68c0731db505d84c4a029eaed633c19b69f89e35))

## [6.15.0](https://www.github.com/appfolio/react-gears/compare/v6.14.1...v6.15.0) (2022-03-10)


### Features

* **checkboxgroup:** add disabled option ([8699b57](https://www.github.com/appfolio/react-gears/commit/8699b5722e4f233a824ecd3518674e2787c0db1e))


### Miscellaneous

* convert AddressInput to functional/TS component ([582d7e8](https://www.github.com/appfolio/react-gears/commit/582d7e891d4b486e902720d087bd4198d1e1c55e))

### [6.14.1](https://www.github.com/appfolio/react-gears/compare/v6.14.0...v6.14.1) (2022-03-08)


### Miscellaneous

* convert SortableTable and UncontrolledTable to ts/func ([5a54baa](https://www.github.com/appfolio/react-gears/commit/5a54baafe91722b3e6295161fba70b8dc24df10c))

## [6.14.0](https://www.github.com/appfolio/react-gears/compare/v6.13.0...v6.14.0) (2022-02-18)


### Features

* add component for truncating text ([b70d9ef](https://www.github.com/appfolio/react-gears/commit/b70d9ef7a7895a4b9f45d271b6b3062defe382d5))

## [6.13.0](https://www.github.com/appfolio/react-gears/compare/v6.12.3...v6.13.0) (2022-02-17)


### Features

* **List:** allow colored backgrounds ([6ce0976](https://www.github.com/appfolio/react-gears/commit/6ce0976d36ad84a3f095fdee8973df758cc0902b))


### Bug Fixes

* let BlockPanel card-header class handle padding ([55d3598](https://www.github.com/appfolio/react-gears/commit/55d359848e02ce11a4c9277d75846a34eabb4115))
* remove small uppercase style from SummaryBox ([3a07287](https://www.github.com/appfolio/react-gears/commit/3a07287491152e0e1868052ab4e82edc9a703ea0))

### [6.12.3](https://www.github.com/appfolio/react-gears/compare/v6.12.2...v6.12.3) (2022-02-01)


### Bug Fixes

* allow containerClassName prop ([1aa2064](https://www.github.com/appfolio/react-gears/commit/1aa206411afff2aec87b535ce99c07067dd9a4f6))

### [6.12.2](https://www.github.com/appfolio/react-gears/compare/v6.12.1...v6.12.2) (2022-01-28)


### Bug Fixes

* allow conditional rendering of child elements ([64c199f](https://www.github.com/appfolio/react-gears/commit/64c199f6fbb4839703671b680d2050c256e2a27a))
* currencyinput should only toString if it exists ([d5e7ff1](https://www.github.com/appfolio/react-gears/commit/d5e7ff1ae357e8a006160dab0010b1dee79d0afc))
* listitem make selectable and onSelect optional ([9479a42](https://www.github.com/appfolio/react-gears/commit/9479a42c90ae0bb91d0eaea7896fafd5d7305295))

### [6.12.1](https://www.github.com/appfolio/react-gears/compare/v6.12.0...v6.12.1) (2022-01-24)


### Bug Fixes

* **CurrencyInput:** set latest value attr on the input html element ([34a5fb1](https://www.github.com/appfolio/react-gears/commit/34a5fb189d1f0e4c1816b59a448d943416f2c8ca))
* report visible rows on initial render ([02a8a1f](https://www.github.com/appfolio/react-gears/commit/02a8a1febede7099ae17149b212466598ee11096))


### Miscellaneous

* **CurrencyInput:** covert test to pure jest ([7db5a5b](https://www.github.com/appfolio/react-gears/commit/7db5a5bf1fb326195a78433cbc020753897235fd))
* **CurrencyInput:** run code formatter ([e57fafc](https://www.github.com/appfolio/react-gears/commit/e57fafcf2a835171d84ec8a5a8b2430fbbf43581))

## [6.12.0](https://www.github.com/appfolio/react-gears/compare/v6.11.2...v6.12.0) (2022-01-20)


### Features

* add visible rows notification to UncontrolledTable ([9371a66](https://www.github.com/appfolio/react-gears/commit/9371a66d9a853ed4f17117ad83dd84f5d2bd48d3))

### [6.11.2](https://www.github.com/appfolio/react-gears/compare/v6.11.1...v6.11.2) (2021-12-28)


### Bug Fixes

* **FormRow:** add typing support for all Input component's type ([ab13a34](https://www.github.com/appfolio/react-gears/commit/ab13a34de2309cd2802de312fd42a53230bdfa33))

### [6.11.1](https://www.github.com/appfolio/react-gears/compare/v6.11.0...v6.11.1) (2021-12-27)


### Bug Fixes

* add allowed sze types for font awesome icons ([eb0b502](https://www.github.com/appfolio/react-gears/commit/eb0b5025092474c223b95fd5754e0342ee8a0d26))

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
