## [5.0.6](https://github.com/event-storm/react-event-storm/compare/v5.0.5...v5.0.6) (2022-09-15)


### Bug Fixes

* **usesubscribe:** change effect to update ([0201092](https://github.com/event-storm/react-event-storm/commit/02010920d3dd7d071cdc7c54e01bad77c3cb677f))



## [5.0.5](https://github.com/event-storm/react-event-storm/compare/v5.0.4...v5.0.5) (2022-09-15)


### Bug Fixes

* **useSubscribe:** active was wrong by type ([eb90f56](https://github.com/event-storm/react-event-storm/commit/eb90f567abe72eee45e7d7bdd8a5d1412881d8a8))



## [5.0.4](https://github.com/event-storm/react-event-storm/compare/v5.0.3...v5.0.4) (2022-08-27)



## [5.0.3](https://github.com/event-storm/react-event-storm/compare/v5.0.2...v5.0.3) (2022-08-27)


### Bug Fixes

* **dependencies:** update event storm peer deps version ([9cae91d](https://github.com/event-storm/react-event-storm/commit/9cae91d1d9e6704f737934ea37a234b467f873f6))



## [5.0.2](https://github.com/event-storm/react-event-storm/compare/v5.0.1...v5.0.2) (2022-08-22)


### Bug Fixes

* **types:** fix the naming and exact typing of subscribe argument ([1c207f5](https://github.com/event-storm/react-event-storm/commit/1c207f5b5b03cea0a6815af4a8002b84de748536))



## [5.0.1](https://github.com/event-storm/react-event-storm/compare/v5.0.0...v5.0.1) (2022-08-22)


### Bug Fixes

* **usestorm:** unsubcribe on component unmount ([a3c04b9](https://github.com/event-storm/react-event-storm/commit/a3c04b9cea1a725a10385de45732c4b8d49369d8))



# [5.0.0](https://github.com/event-storm/react-event-storm/compare/v4.1.0...v5.0.0) (2022-08-21)


### Bug Fixes

* **event-storm:** bump fix version - multiple subscriptions issue fixed ([9c47530](https://github.com/event-storm/react-event-storm/commit/9c47530695f0743f8a06d573537cb3514f7fd2ad))


### BREAKING CHANGES

* **event-storm:** calling subscription's count inside storm selector has was causing bug becuas of
order. Now calling any time repeatiting or not, will not rely on order



# [4.1.0](https://github.com/event-storm/react-event-storm/compare/v4.0.0...v4.1.0) (2022-08-21)


### Features

* **event-storm:** update major version ([1aadafe](https://github.com/event-storm/react-event-storm/commit/1aadafe1a3ab21bbd43c7156e77d4058f4819888))



# [4.0.0](https://github.com/event-storm/react-event-storm/compare/v1.2.1...v4.0.0) (2022-08-21)


### Bug Fixes

* **deps:** remove package-lock. added by mistake ([d8f5d8c](https://github.com/event-storm/react-event-storm/commit/d8f5d8c1a272a9f9ef019d91995ec0918969318c))
* **integration:** update event-storm method name ([03a2283](https://github.com/event-storm/react-event-storm/commit/03a2283b6595e5e3f69fc5a86d5a0e48e582669e))
* **type:** fix types from store to storm ([3c7e21c](https://github.com/event-storm/react-event-storm/commit/3c7e21c7052ff993e9211095fb8b7ff81322e037))
* **types:** selectFragment generic part was wrong ([537a9e2](https://github.com/event-storm/react-event-storm/commit/537a9e28ffbb255453e3aaa63a9d122ab1fc63c3))
* **types:** selectFragment second argument must receive a generic ([126fd6b](https://github.com/event-storm/react-event-storm/commit/126fd6b875ae9103208a11fde5582b631148f378))


### Features

* **package:** event storm update integration ([dad9cbb](https://github.com/event-storm/react-event-storm/commit/dad9cbbb008b67d454495cef657ae35bf4e89c32))
* **project:** update event storm library ([3a0b897](https://github.com/event-storm/react-event-storm/commit/3a0b8975c4795ff15ed477928a662d28200a2127))


### BREAKING CHANGES

* **package:** publish method was renamed to be dispatch
* **project:** the useStore hook is renamed to useStorm



## [1.2.1](https://github.com/event-storm/react-event-storm/compare/v1.2.0...v1.2.1) (2021-08-15)



# [1.2.0](https://github.com/event-storm/react-event-storm/compare/v1.1.0...v1.2.0) (2021-08-15)


### Bug Fixes

* **usestore:** non registered key updates are inccorect ([6815ea4](https://github.com/event-storm/react-event-storm/commit/6815ea4e2e8a372f943e8ba225e83520a82c0d26))
* **usestore:** none existing key subscription not working ([2aded27](https://github.com/event-storm/react-event-storm/commit/2aded278fcc387878d31759fded60e086d8a8994))


### Features

* **usestore:** adding a control property for store subscription ([552eea0](https://github.com/event-storm/react-event-storm/commit/552eea06d480006d8252c1368ff3c9209b7dab14))



# [1.1.0](https://github.com/event-storm/react-event-storm/compare/v1.0.0...v1.1.0) (2021-07-10)


### Features

* **subcritpions:** add passive subscription support for handlers ([0ccbbc5](https://github.com/event-storm/react-event-storm/commit/0ccbbc505ae00b886cb8e0c7afea723c082b001c))



# [1.0.0](https://github.com/event-storm/react-event-storm/compare/v0.4.0...v1.0.0) (2021-07-05)


### Bug Fixes

* **types:** fix usePublish types ([9845526](https://github.com/event-storm/react-event-storm/commit/98455260f1db5002b413c8f723f109879d95094d))


### Features

* **store segment subscription:** each listener must subcribe individually to a segment ([dcb21cc](https://github.com/event-storm/react-event-storm/commit/dcb21cc67249ba195528a3031a2147de9cd819ba))


### BREAKING CHANGES

* **store segment subscription:** The store will update only for used models change



# [0.4.0](https://github.com/event-storm/react-event-storm/compare/v0.3.2...v0.4.0) (2021-06-21)


### Features

* **types:** imrpove typescript support ([e585f79](https://github.com/event-storm/react-event-storm/commit/e585f79317e5a6a9a4b4b1d918146c882881afb9))



## [0.3.2](https://github.com/event-storm/react-event-storm/compare/v0.3.1...v0.3.2) (2021-06-17)


### Bug Fixes

* **types:** add generic for IStore ([5daf8ed](https://github.com/event-storm/react-event-storm/commit/5daf8edf44747cba44f2c7e66ec15a449d68765d))



## [0.3.1](https://github.com/event-storm/react-event-storm/compare/v0.3.0...v0.3.1) (2021-06-09)


### Bug Fixes

* **types:** usePublish, useStore types correction ([0b5c378](https://github.com/event-storm/react-event-storm/commit/0b5c378b1888a82eb42e00d8b648320c8ad90999))



# [0.3.0](https://github.com/event-storm/react-event-storm/compare/v0.2.0...v0.3.0) (2021-04-03)


### Features

* **usepublish:** adding a hook for store publisher ([14d5ad4](https://github.com/event-storm/react-event-storm/commit/14d5ad4ea41e7acf17ec6d009907dc710f70011c))



# [0.2.0](https://github.com/event-storm/react-event-storm/compare/v0.1.0...v0.2.0) (2021-03-18)


### Bug Fixes

* **usestore:** proxied from wrong object ([9480fb4](https://github.com/event-storm/react-event-storm/commit/9480fb44732e2b2e1fd38756349601f6ca4d75bb))
* **usestore:** udpate was not perfromed ([acfed4b](https://github.com/event-storm/react-event-storm/commit/acfed4bc8ecde6205eec77712a88f6e184dd9cf3))


### Features

* **usestore:** adding a hook for retreiving the store ([1bdd474](https://github.com/event-storm/react-event-storm/commit/1bdd4744f6217f7a20c310677ee3d2dca86792f7))



# [0.1.0](https://github.com/event-storm/react-event-storm/compare/v0.0.6...v0.1.0) (2021-01-31)


### Bug Fixes

* **types:** change types to any ([d7cf85b](https://github.com/event-storm/react-event-storm/commit/d7cf85b8e4058d16327f6ce7a794f8e4ecb56462))


### Features

* **types:** add typescript support ([bfb6cbb](https://github.com/event-storm/react-event-storm/commit/bfb6cbb9c1013c29a1526e00e454a7d528c7e843))



## [0.0.6](https://github.com/event-storm/react-event-storm/compare/v0.0.5...v0.0.6) (2021-01-28)



## [0.0.5](https://github.com/event-storm/react-event-storm/compare/v0.0.4...v0.0.5) (2021-01-27)



## [0.0.4](https://github.com/event-storm/react-event-storm/compare/v0.0.3...v0.0.4) (2021-01-25)


### Bug Fixes

* **dist:** remove dist coming from action release ([222e38c](https://github.com/event-storm/react-event-storm/commit/222e38cd59574075010d9c0f1ca0fb4c5b935a2e))



## [0.0.3](https://github.com/event-storm/react-event-storm/compare/13e14f4b8bc14e0a81344abcb111a7a036587336...v0.0.3) (2021-01-25)


### Bug Fixes

* **package json:** edit entry module path ([13e14f4](https://github.com/event-storm/react-event-storm/commit/13e14f4b8bc14e0a81344abcb111a7a036587336))
* **rollup:** entry module path was wrong ([f180987](https://github.com/event-storm/react-event-storm/commit/f1809876f133cc31b5ad3d34a0617197a45d5708))



