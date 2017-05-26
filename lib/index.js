/**
  * @module gonebusy
  *
  * Gonebusy Booking Platform API Swagger Documentation
  */

'use strict';

const Configuration = require('./configuration');
const Environments = require('./Environments');
const SchedulesController = require('./Controllers/SchedulesController');
const UsersController = require('./Controllers/UsersController');
const ServicesController = require('./Controllers/ServicesController');
const ResourcesController = require('./Controllers/ResourcesController');
const SearchController = require('./Controllers/SearchController');
const PricingModelsController = require('./Controllers/PricingModelsController');
const CategoriesController = require('./Controllers/CategoriesController');
const BookingsController = require('./Controllers/BookingsController');
const UpdateUserByIdBody = require('./Models/UpdateUserByIdBody');
const UpdateUserByIdResponse = require('./Models/UpdateUserByIdResponse');
const CreateUserBody = require('./Models/CreateUserBody');
const UpdateResourceByIdBody = require('./Models/UpdateResourceByIdBody');
const CreateResourceBody = require('./Models/CreateResourceBody');
const UpdatePricingModelByIdBody = require('./Models/UpdatePricingModelByIdBody');
const CreatePricingModelBody = require('./Models/CreatePricingModelBody');
const CreateCategoryBody = require('./Models/CreateCategoryBody');
const DateRecursByEnum = require('./Models/DateRecursByEnum');
const GetUserByIdResponse = require('./Models/GetUserByIdResponse');
const CreateUserResponse = require('./Models/CreateUserResponse');
const CreateScheduleTimeWindowBody = require('./Models/CreateScheduleTimeWindowBody');
const UpdateBookingByIdBody = require('./Models/UpdateBookingByIdBody');
const OccurrenceEnum = require('./Models/OccurrenceEnum');
const RecursByEnum = require('./Models/RecursByEnum');
const EntitiesScheduleResponse = require('./Models/EntitiesScheduleResponse');
const FrequencyEnum = require('./Models/FrequencyEnum');
const CreateBookingBody = require('./Models/CreateBookingBody');
const EntitiesPricingModelResponse = require('./Models/EntitiesPricingModelResponse');
const GetUsersResponse = require('./Models/GetUsersResponse');
const DeleteServiceByIdResponse = require('./Models/DeleteServiceByIdResponse');
const UpdateServiceByIdResponse = require('./Models/UpdateServiceByIdResponse');
const GetServiceByIdResponse = require('./Models/GetServiceByIdResponse');
const GetServiceAvailableSlotsByIdResponse =
  require('./Models/GetServiceAvailableSlotsByIdResponse');
const CreateServiceResponse = require('./Models/CreateServiceResponse');
const GetServicesResponse = require('./Models/GetServicesResponse');
const SearchQueryResponse = require('./Models/SearchQueryResponse');
const DeleteScheduleTimeWindowByIdResponse =
  require('./Models/DeleteScheduleTimeWindowByIdResponse');
const UpdateScheduleTimeWindowByIdResponse =
  require('./Models/UpdateScheduleTimeWindowByIdResponse');
const CreateScheduleTimeWindowResponse = require('./Models/CreateScheduleTimeWindowResponse');
const DeleteScheduleByIdResponse = require('./Models/DeleteScheduleByIdResponse');
const GetScheduleByIdResponse = require('./Models/GetScheduleByIdResponse');
const CreateScheduleResponse = require('./Models/CreateScheduleResponse');
const GetSchedulesResponse = require('./Models/GetSchedulesResponse');
const DeleteResourceByIdResponse = require('./Models/DeleteResourceByIdResponse');
const UpdateResourceByIdResponse = require('./Models/UpdateResourceByIdResponse');
const GetResourceByIdResponse = require('./Models/GetResourceByIdResponse');
const GetResourceThingsResponse = require('./Models/GetResourceThingsResponse');
const CreateResourceResponse = require('./Models/CreateResourceResponse');
const GetResourcesResponse = require('./Models/GetResourcesResponse');
const UpdatePricingModelByIdResponse = require('./Models/UpdatePricingModelByIdResponse');
const GetPricingModelByIdResponse = require('./Models/GetPricingModelByIdResponse');
const CreatePricingModelResponse = require('./Models/CreatePricingModelResponse');
const EntitiesCategoryResponse = require('./Models/EntitiesCategoryResponse');
const EntitiesBookingResponse = require('./Models/EntitiesBookingResponse');
const GenderEnum = require('./Models/GenderEnum');
const GetPricingModelsResponse = require('./Models/GetPricingModelsResponse');
const GetCategoryByIdResponse = require('./Models/GetCategoryByIdResponse');
const CreateCategoryResponse = require('./Models/CreateCategoryResponse');
const GetCategoriesResponse = require('./Models/GetCategoriesResponse');
const CancelBookingByIdResponse = require('./Models/CancelBookingByIdResponse');
const UpdateBookingByIdResponse = require('./Models/UpdateBookingByIdResponse');
const EntitiesServiceResponse = require('./Models/EntitiesServiceResponse');
const EntitiesUserResponse = require('./Models/EntitiesUserResponse');
const GetBookingByIdResponse = require('./Models/GetBookingByIdResponse');
const CreateBookingResponse = require('./Models/CreateBookingResponse');
const EntitiesResourceResponse = require('./Models/EntitiesResourceResponse');
const EntitiesTimeWindowResponse = require('./Models/EntitiesTimeWindowResponse');
const GetBookingsResponse = require('./Models/GetBookingsResponse');
const EntitiesThingTypeResponse = require('./Models/EntitiesThingTypeResponse');
const EntitiesSearchResponse = require('./Models/EntitiesSearchResponse');
const EntitiesSlots = require('./Models/EntitiesSlots');
const EntitiesResourceAvailabilities = require('./Models/EntitiesResourceAvailabilities');
const EntitiesAvailabilityResponse = require('./Models/EntitiesAvailabilityResponse');
const CreateScheduleBody = require('./Models/CreateScheduleBody');
const EntitiesAddressEntity = require('./Models/EntitiesAddressEntity');
const UpdateServiceByIdBody = require('./Models/UpdateServiceByIdBody');
const CreateServiceBody = require('./Models/CreateServiceBody');
const UpdateScheduleTimeWindowByIdBody = require('./Models/UpdateScheduleTimeWindowByIdBody');
const EntitiesErrorErrorException = require('./Exceptions/EntitiesErrorErrorException');
const APIException = require('./Exceptions/APIException');


const initializer = {
    // functional components of gonebusy
    Configuration,
    Environments,
    // controllers of gonebusy
    SchedulesController,
    UsersController,
    ServicesController,
    ResourcesController,
    SearchController,
    PricingModelsController,
    CategoriesController,
    BookingsController,
    // models of gonebusy
    UpdateUserByIdBody,
    UpdateUserByIdResponse,
    CreateUserBody,
    UpdateResourceByIdBody,
    CreateResourceBody,
    UpdatePricingModelByIdBody,
    CreatePricingModelBody,
    CreateCategoryBody,
    DateRecursByEnum,
    GetUserByIdResponse,
    CreateUserResponse,
    CreateScheduleTimeWindowBody,
    UpdateBookingByIdBody,
    OccurrenceEnum,
    RecursByEnum,
    EntitiesScheduleResponse,
    FrequencyEnum,
    CreateBookingBody,
    EntitiesPricingModelResponse,
    GetUsersResponse,
    DeleteServiceByIdResponse,
    UpdateServiceByIdResponse,
    GetServiceByIdResponse,
    GetServiceAvailableSlotsByIdResponse,
    CreateServiceResponse,
    GetServicesResponse,
    SearchQueryResponse,
    DeleteScheduleTimeWindowByIdResponse,
    UpdateScheduleTimeWindowByIdResponse,
    CreateScheduleTimeWindowResponse,
    DeleteScheduleByIdResponse,
    GetScheduleByIdResponse,
    CreateScheduleResponse,
    GetSchedulesResponse,
    DeleteResourceByIdResponse,
    UpdateResourceByIdResponse,
    GetResourceByIdResponse,
    GetResourceThingsResponse,
    CreateResourceResponse,
    GetResourcesResponse,
    UpdatePricingModelByIdResponse,
    GetPricingModelByIdResponse,
    CreatePricingModelResponse,
    EntitiesCategoryResponse,
    EntitiesBookingResponse,
    GenderEnum,
    GetPricingModelsResponse,
    GetCategoryByIdResponse,
    CreateCategoryResponse,
    GetCategoriesResponse,
    CancelBookingByIdResponse,
    UpdateBookingByIdResponse,
    EntitiesServiceResponse,
    EntitiesUserResponse,
    GetBookingByIdResponse,
    CreateBookingResponse,
    EntitiesResourceResponse,
    EntitiesTimeWindowResponse,
    GetBookingsResponse,
    EntitiesThingTypeResponse,
    EntitiesSearchResponse,
    EntitiesSlots,
    EntitiesResourceAvailabilities,
    EntitiesAvailabilityResponse,
    CreateScheduleBody,
    EntitiesAddressEntity,
    UpdateServiceByIdBody,
    CreateServiceBody,
    UpdateScheduleTimeWindowByIdBody,
    // exceptions of gonebusy
    EntitiesErrorErrorException,
    APIException,
};

module.exports = initializer;
