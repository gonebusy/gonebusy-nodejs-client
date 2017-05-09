# Change Log
All notable changes to this project will be documented in this file.

## [0.1.0] - 2017-05-08 ##
### NOTE - This version introduces breaking changes and additions listed below.

### Changed
- [#26](https://github.com/gonebusy/gonebusy-nodejs-client/pull/26) - All SDK methods now return Promises.  No need for a proxy async wrapper library such as Bluebird. - [@alexagranov](https://github.com/alexagranov)
- [#26](https://github.com/gonebusy/gonebusy-nodejs-client/pull/26) - CreateBookingBody `:date` attribute is now a DateTime rather than a String. - [@alexagranov](https://github.com/alexagranov)
- [#26](https://github.com/gonebusy/gonebusy-nodejs-client/pull/26) - TimeWindow attribute `:negation` has been renamed to `:unavailable`. - [@alexagranov](https://github.com/alexagranov)

### Added
- [#26](https://github.com/gonebusy/gonebusy-nodejs-client/pull/26) - POST /bookings/new now takes parameters supporting the creation of a recurring Booking. - [@alexagranov](https://github.com/alexagranov)
- [#26](https://github.com/gonebusy/gonebusy-nodejs-client/pull/26) - PUT /bookings/:id now takes parameters supporting the modification of a recurring Booking or instance of such. - [@alexagranov](https://github.com/alexagranov)
- [#26](https://github.com/gonebusy/gonebusy-nodejs-client/pull/26) - DELETE /bookings/:id now takes parameters supporting the cancellation of a recurring Booking or instance of such. - [@alexagranov](https://github.com/alexagranov)

## [0.0.9] - 2017-03-21 ##
### Added
- [#24](https://github.com/gonebusy/gonebusy-nodejs-client/pull/24) - Add schedules array to ServiceResponse - [@alexagranov](https://github.com/alexagranov)

## [0.0.8] - 2017-03-18 ##
### Fixed
- [#23](https://github.com/gonebusy/gonebusy-nodejs-client/pull/23) - Fix type of :gender to String; Add :primary_cal to ResourceResponse - [@alexagranov](https://github.com/alexagranov)

## [0.0.7] - 2017-03-06 ##
### Added
- update GET /schedules for query by resource_id, service_id

## [0.0.6] - 2017-02-13 ##
### Added
- update for HTTPS

## [0.0.5] - 2017-01-19 ##
### Removed
- Unnecessary /user/pros endpoint

## [0.0.4] - 2017-01-19 ##
### Fixed
- Issue #17 - Correct 'pricing_model' (instead of plural) response root for GET/PUT /pricing_models/:id and POST /pricing_models/new

## [0.0.3] - 2017-01-15 ##
### Added
- Pull #14 - adding Service :max_duration support
- CHANGELOG.md

## [0.0.2] - 2016-10-14 ##
- Initial public version

