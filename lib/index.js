/**
  * @module gonebusy
  *
  * Gonebusy Booking Platform API Swagger Documentation
  */

'use strict';

const Configuration = require('./configuration');
const Environments = require('./Environments');
const SchedulesController = require('./Controllers/SchedulesController');
const ResourcesController = require('./Controllers/ResourcesController');
const UsersController = require('./Controllers/UsersController');
const PricingModelsController = require('./Controllers/PricingModelsController');
const CategoriesController = require('./Controllers/CategoriesController');
const SearchController = require('./Controllers/SearchController');
const BookingsController = require('./Controllers/BookingsController');
const ServicesController = require('./Controllers/ServicesController');
const UpdateUserByIdResponse = require('./Models/UpdateUserByIdResponse');
const GetUserByIdResponse = require('./Models/GetUserByIdResponse');
const CreateUserResponse = require('./Models/CreateUserResponse');
const GetUsersResponse = require('./Models/GetUsersResponse');
const DeleteServiceByIdResponse = require('./Models/DeleteServiceByIdResponse');
const UpdateServiceByIdResponse = require('./Models/UpdateServiceByIdResponse');
const UpdateUserByIdBody = require('./Models/UpdateUserByIdBody');
const CreateUserBody = require('./Models/CreateUserBody');
const UpdateServiceByIdBody = require('./Models/UpdateServiceByIdBody');
const CreateServiceBody = require('./Models/CreateServiceBody');
const UpdateResourceByIdBody = require('./Models/UpdateResourceByIdBody');
const GenderEnum = require('./Models/GenderEnum');
const UpdateBookingByIdBody = require('./Models/UpdateBookingByIdBody');
const CreateResourceBody = require('./Models/CreateResourceBody');
const CreatePricingModelBody = require('./Models/CreatePricingModelBody');
const CreateCategoryBody = require('./Models/CreateCategoryBody');
const CreateBookingBody = require('./Models/CreateBookingBody');
const UpdatePricingModelByIdBody = require('./Models/UpdatePricingModelByIdBody');
const GetServiceByIdResponse = require('./Models/GetServiceByIdResponse');
const EntitiesServiceResponse = require('./Models/EntitiesServiceResponse');
const GetServiceAvailableSlotsByIdResponse =
  require('./Models/GetServiceAvailableSlotsByIdResponse');
const CreateServiceResponse = require('./Models/CreateServiceResponse');
const GetServicesResponse = require('./Models/GetServicesResponse');
const EntitiesScheduleResponse = require('./Models/EntitiesScheduleResponse');
const SearchQueryResponse = require('./Models/SearchQueryResponse');
const DeleteScheduleTimeWindowByIdResponse =
  require('./Models/DeleteScheduleTimeWindowByIdResponse');
const UpdateScheduleTimeWindowByIdResponse =
  require('./Models/UpdateScheduleTimeWindowByIdResponse');
const EntitiesAvailabilityResponse = require('./Models/EntitiesAvailabilityResponse');
const CreateScheduleTimeWindowResponse = require('./Models/CreateScheduleTimeWindowResponse');
const DeleteScheduleByIdResponse = require('./Models/DeleteScheduleByIdResponse');
const GetScheduleByIdResponse = require('./Models/GetScheduleByIdResponse');
const CreateScheduleResponse = require('./Models/CreateScheduleResponse');
const DateRecursByEnum = require('./Models/DateRecursByEnum');
const GetSchedulesResponse = require('./Models/GetSchedulesResponse');
const DeleteResourceByIdResponse = require('./Models/DeleteResourceByIdResponse');
const UpdateResourceByIdResponse = require('./Models/UpdateResourceByIdResponse');
const GetResourceByIdResponse = require('./Models/GetResourceByIdResponse');
const GetResourceThingsResponse = require('./Models/GetResourceThingsResponse');
const CreateResourceResponse = require('./Models/CreateResourceResponse');
const GetResourcesResponse = require('./Models/GetResourcesResponse');
const EntitiesUserResponse = require('./Models/EntitiesUserResponse');
const UpdatePricingModelByIdResponse = require('./Models/UpdatePricingModelByIdResponse');
const GetPricingModelByIdResponse = require('./Models/GetPricingModelByIdResponse');
const CreatePricingModelResponse = require('./Models/CreatePricingModelResponse');
const FrequencyEnum = require('./Models/FrequencyEnum');
const GetPricingModelsResponse = require('./Models/GetPricingModelsResponse');
const GetCategoryByIdResponse = require('./Models/GetCategoryByIdResponse');
const CreateCategoryResponse = require('./Models/CreateCategoryResponse');
const GetCategoriesResponse = require('./Models/GetCategoriesResponse');
const CancelBookingByIdResponse = require('./Models/CancelBookingByIdResponse');
const UpdateBookingByIdResponse = require('./Models/UpdateBookingByIdResponse');
const GetBookingByIdResponse = require('./Models/GetBookingByIdResponse');
const CreateBookingResponse = require('./Models/CreateBookingResponse');
const GetBookingsResponse = require('./Models/GetBookingsResponse');
const EntitiesThingTypeResponse = require('./Models/EntitiesThingTypeResponse');
const RecursByEnum = require('./Models/RecursByEnum');
const EntitiesSearchResponse = require('./Models/EntitiesSearchResponse');
const EntitiesSlots = require('./Models/EntitiesSlots');
const EntitiesResourceResponse = require('./Models/EntitiesResourceResponse');
const EntitiesResourceAvailabilities = require('./Models/EntitiesResourceAvailabilities');
const EntitiesPricingModelResponse = require('./Models/EntitiesPricingModelResponse');
const EntitiesCategoryResponse = require('./Models/EntitiesCategoryResponse');
const EntitiesBookingResponse = require('./Models/EntitiesBookingResponse');
const EntitiesAddressEntity = require('./Models/EntitiesAddressEntity');
const EntitiesTimeWindowResponse = require('./Models/EntitiesTimeWindowResponse');
const OccurrenceEnum = require('./Models/OccurrenceEnum');
const CreateScheduleBody = require('./Models/CreateScheduleBody');
const CreateScheduleTimeWindowBody = require('./Models/CreateScheduleTimeWindowBody');
const UpdateScheduleTimeWindowByIdBody = require('./Models/UpdateScheduleTimeWindowByIdBody');
const EntitiesErrorException = require('./Exceptions/EntitiesErrorException');
const APIException = require('./Exceptions/APIException');


const initializer = {
    // functional components of gonebusy
    Configuration,
    Environments,
    // controllers of gonebusy
    SchedulesController,
    ResourcesController,
    UsersController,
    PricingModelsController,
    CategoriesController,
    SearchController,
    BookingsController,
    ServicesController,
    // models of gonebusy
    UpdateUserByIdResponse,
    GetUserByIdResponse,
    CreateUserResponse,
    GetUsersResponse,
    DeleteServiceByIdResponse,
    UpdateServiceByIdResponse,
    UpdateUserByIdBody,
    CreateUserBody,
    UpdateServiceByIdBody,
    CreateServiceBody,
    UpdateResourceByIdBody,
    GenderEnum,
    UpdateBookingByIdBody,
    CreateResourceBody,
    CreatePricingModelBody,
    CreateCategoryBody,
    CreateBookingBody,
    UpdatePricingModelByIdBody,
    GetServiceByIdResponse,
    EntitiesServiceResponse,
    GetServiceAvailableSlotsByIdResponse,
    CreateServiceResponse,
    GetServicesResponse,
    EntitiesScheduleResponse,
    SearchQueryResponse,
    DeleteScheduleTimeWindowByIdResponse,
    UpdateScheduleTimeWindowByIdResponse,
    EntitiesAvailabilityResponse,
    CreateScheduleTimeWindowResponse,
    DeleteScheduleByIdResponse,
    GetScheduleByIdResponse,
    CreateScheduleResponse,
    DateRecursByEnum,
    GetSchedulesResponse,
    DeleteResourceByIdResponse,
    UpdateResourceByIdResponse,
    GetResourceByIdResponse,
    GetResourceThingsResponse,
    CreateResourceResponse,
    GetResourcesResponse,
    EntitiesUserResponse,
    UpdatePricingModelByIdResponse,
    GetPricingModelByIdResponse,
    CreatePricingModelResponse,
    FrequencyEnum,
    GetPricingModelsResponse,
    GetCategoryByIdResponse,
    CreateCategoryResponse,
    GetCategoriesResponse,
    CancelBookingByIdResponse,
    UpdateBookingByIdResponse,
    GetBookingByIdResponse,
    CreateBookingResponse,
    GetBookingsResponse,
    EntitiesThingTypeResponse,
    RecursByEnum,
    EntitiesSearchResponse,
    EntitiesSlots,
    EntitiesResourceResponse,
    EntitiesResourceAvailabilities,
    EntitiesPricingModelResponse,
    EntitiesCategoryResponse,
    EntitiesBookingResponse,
    EntitiesAddressEntity,
    EntitiesTimeWindowResponse,
    OccurrenceEnum,
    CreateScheduleBody,
    CreateScheduleTimeWindowBody,
    UpdateScheduleTimeWindowByIdBody,
    // exceptions of gonebusy
    EntitiesErrorException,
    APIException,
};

module.exports = initializer;
