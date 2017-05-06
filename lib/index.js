/**
  * @module Gonebusy01RubyNodePHPLib
  *
  * Gonebusy Booking Platform API Swagger Documentation
  */

'use strict';

const Configuration = require('./configuration');
const Environments = require('./Environments');
const BookingsController = require('./Controllers/BookingsController');
const CategoriesController = require('./Controllers/CategoriesController');
const PricingModelsController = require('./Controllers/PricingModelsController');
const ResourcesController = require('./Controllers/ResourcesController');
const SchedulesController = require('./Controllers/SchedulesController');
const SearchController = require('./Controllers/SearchController');
const ServicesController = require('./Controllers/ServicesController');
const UsersController = require('./Controllers/UsersController');
const EntitiesAddressEntity = require('./Models/EntitiesAddressEntity');
const EntitiesAvailabilityResponse = require('./Models/EntitiesAvailabilityResponse');
const EntitiesResourceAvailabilities = require('./Models/EntitiesResourceAvailabilities');
const EntitiesSlots = require('./Models/EntitiesSlots');
const EntitiesBookingResponse = require('./Models/EntitiesBookingResponse');
const EntitiesTimeWindowResponse = require('./Models/EntitiesTimeWindowResponse');
const EntitiesCategoryResponse = require('./Models/EntitiesCategoryResponse');
const EntitiesPricingModelResponse = require('./Models/EntitiesPricingModelResponse');
const EntitiesResourceResponse = require('./Models/EntitiesResourceResponse');
const EntitiesScheduleResponse = require('./Models/EntitiesScheduleResponse');
const EntitiesSearchResponse = require('./Models/EntitiesSearchResponse');
const EntitiesUserResponse = require('./Models/EntitiesUserResponse');
const EntitiesServiceResponse = require('./Models/EntitiesServiceResponse');
const EntitiesThingTypeResponse = require('./Models/EntitiesThingTypeResponse');
const GetBookingsResponse = require('./Models/GetBookingsResponse');
const CreateBookingBody = require('./Models/CreateBookingBody');
const RecursByEnum = require('./Models/RecursByEnum');
const FrequencyEnum = require('./Models/FrequencyEnum');
const OccurrenceEnum = require('./Models/OccurrenceEnum');
const DateRecursByEnum = require('./Models/DateRecursByEnum');
const CreateBookingResponse = require('./Models/CreateBookingResponse');
const GetBookingByIdResponse = require('./Models/GetBookingByIdResponse');
const UpdateBookingByIdBody = require('./Models/UpdateBookingByIdBody');
const UpdateBookingByIdResponse = require('./Models/UpdateBookingByIdResponse');
const CancelBookingByIdResponse = require('./Models/CancelBookingByIdResponse');
const GetCategoriesResponse = require('./Models/GetCategoriesResponse');
const CreateCategoryBody = require('./Models/CreateCategoryBody');
const CreateCategoryResponse = require('./Models/CreateCategoryResponse');
const GetCategoryByIdResponse = require('./Models/GetCategoryByIdResponse');
const GetPricingModelsResponse = require('./Models/GetPricingModelsResponse');
const CreatePricingModelBody = require('./Models/CreatePricingModelBody');
const CreatePricingModelResponse = require('./Models/CreatePricingModelResponse');
const GetPricingModelByIdResponse = require('./Models/GetPricingModelByIdResponse');
const UpdatePricingModelByIdBody = require('./Models/UpdatePricingModelByIdBody');
const UpdatePricingModelByIdResponse = require('./Models/UpdatePricingModelByIdResponse');
const GetResourcesResponse = require('./Models/GetResourcesResponse');
const CreateResourceBody = require('./Models/CreateResourceBody');
const GenderEnum = require('./Models/GenderEnum');
const CreateResourceResponse = require('./Models/CreateResourceResponse');
const GetResourceThingsResponse = require('./Models/GetResourceThingsResponse');
const GetResourceByIdResponse = require('./Models/GetResourceByIdResponse');
const UpdateResourceByIdBody = require('./Models/UpdateResourceByIdBody');
const UpdateResourceByIdResponse = require('./Models/UpdateResourceByIdResponse');
const DeleteResourceByIdResponse = require('./Models/DeleteResourceByIdResponse');
const GetSchedulesResponse = require('./Models/GetSchedulesResponse');
const CreateScheduleBody = require('./Models/CreateScheduleBody');
const CreateScheduleResponse = require('./Models/CreateScheduleResponse');
const GetScheduleByIdResponse = require('./Models/GetScheduleByIdResponse');
const DeleteScheduleByIdResponse = require('./Models/DeleteScheduleByIdResponse');
const CreateScheduleTimeWindowBody = require('./Models/CreateScheduleTimeWindowBody');
const CreateScheduleTimeWindowResponse = require('./Models/CreateScheduleTimeWindowResponse');
const UpdateScheduleTimeWindowByIdBody = require('./Models/UpdateScheduleTimeWindowByIdBody');
const UpdateScheduleTimeWindowByIdResponse =
  require('./Models/UpdateScheduleTimeWindowByIdResponse');
const DeleteScheduleTimeWindowByIdResponse =
  require('./Models/DeleteScheduleTimeWindowByIdResponse');
const SearchQueryResponse = require('./Models/SearchQueryResponse');
const GetServicesResponse = require('./Models/GetServicesResponse');
const CreateServiceBody = require('./Models/CreateServiceBody');
const CreateServiceResponse = require('./Models/CreateServiceResponse');
const GetServiceAvailableSlotsByIdResponse =
  require('./Models/GetServiceAvailableSlotsByIdResponse');
const GetServiceByIdResponse = require('./Models/GetServiceByIdResponse');
const UpdateServiceByIdBody = require('./Models/UpdateServiceByIdBody');
const UpdateServiceByIdResponse = require('./Models/UpdateServiceByIdResponse');
const DeleteServiceByIdResponse = require('./Models/DeleteServiceByIdResponse');
const GetUsersResponse = require('./Models/GetUsersResponse');
const CreateUserBody = require('./Models/CreateUserBody');
const CreateUserResponse = require('./Models/CreateUserResponse');
const GetUserByIdResponse = require('./Models/GetUserByIdResponse');
const UpdateUserByIdBody = require('./Models/UpdateUserByIdBody');
const UpdateUserByIdResponse = require('./Models/UpdateUserByIdResponse');
const EntitiesErrorErrorException = require('./Exceptions/EntitiesErrorErrorException');
const APIException = require('./Exceptions/APIException');


const initializer = {
    // functional components of Gonebusy01RubyNodePHPLib
    Configuration,
    Environments,
    // controllers of Gonebusy01RubyNodePHPLib
    BookingsController,
    CategoriesController,
    PricingModelsController,
    ResourcesController,
    SchedulesController,
    SearchController,
    ServicesController,
    UsersController,
    // models of Gonebusy01RubyNodePHPLib
    EntitiesAddressEntity,
    EntitiesAvailabilityResponse,
    EntitiesResourceAvailabilities,
    EntitiesSlots,
    EntitiesBookingResponse,
    EntitiesTimeWindowResponse,
    EntitiesCategoryResponse,
    EntitiesPricingModelResponse,
    EntitiesResourceResponse,
    EntitiesScheduleResponse,
    EntitiesSearchResponse,
    EntitiesUserResponse,
    EntitiesServiceResponse,
    EntitiesThingTypeResponse,
    GetBookingsResponse,
    CreateBookingBody,
    RecursByEnum,
    FrequencyEnum,
    OccurrenceEnum,
    DateRecursByEnum,
    CreateBookingResponse,
    GetBookingByIdResponse,
    UpdateBookingByIdBody,
    UpdateBookingByIdResponse,
    CancelBookingByIdResponse,
    GetCategoriesResponse,
    CreateCategoryBody,
    CreateCategoryResponse,
    GetCategoryByIdResponse,
    GetPricingModelsResponse,
    CreatePricingModelBody,
    CreatePricingModelResponse,
    GetPricingModelByIdResponse,
    UpdatePricingModelByIdBody,
    UpdatePricingModelByIdResponse,
    GetResourcesResponse,
    CreateResourceBody,
    GenderEnum,
    CreateResourceResponse,
    GetResourceThingsResponse,
    GetResourceByIdResponse,
    UpdateResourceByIdBody,
    UpdateResourceByIdResponse,
    DeleteResourceByIdResponse,
    GetSchedulesResponse,
    CreateScheduleBody,
    CreateScheduleResponse,
    GetScheduleByIdResponse,
    DeleteScheduleByIdResponse,
    CreateScheduleTimeWindowBody,
    CreateScheduleTimeWindowResponse,
    UpdateScheduleTimeWindowByIdBody,
    UpdateScheduleTimeWindowByIdResponse,
    DeleteScheduleTimeWindowByIdResponse,
    SearchQueryResponse,
    GetServicesResponse,
    CreateServiceBody,
    CreateServiceResponse,
    GetServiceAvailableSlotsByIdResponse,
    GetServiceByIdResponse,
    UpdateServiceByIdBody,
    UpdateServiceByIdResponse,
    DeleteServiceByIdResponse,
    GetUsersResponse,
    CreateUserBody,
    CreateUserResponse,
    GetUserByIdResponse,
    UpdateUserByIdBody,
    UpdateUserByIdResponse,
    // exceptions of Gonebusy01RubyNodePHPLib
    EntitiesErrorErrorException,
    APIException,
};

module.exports = initializer;
