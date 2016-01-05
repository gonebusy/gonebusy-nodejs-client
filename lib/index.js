/**
  * @module gonebusy
  *  
  * GoneBusy Booking Platform API Swagger Documentation
  */

var configuration = require('./configuration'),
    BookingsController = require('./Controllers/BookingsController'),
    CategoriesController = require('./Controllers/CategoriesController'),
    PricingModelsController = require('./Controllers/PricingModelsController'),
    ResourcesController = require('./Controllers/ResourcesController'),
    SchedulesController = require('./Controllers/SchedulesController'),
    SearchController = require('./Controllers/SearchController'),
    ServicesController = require('./Controllers/ServicesController'),
    UsersController = require('./Controllers/UsersController'),
    CreateBookingBody = require('./Models/CreateBookingBody'),
    UpdateBookingByIdBody = require('./Models/UpdateBookingByIdBody'),
    CreateCategoryBody = require('./Models/CreateCategoryBody'),
    CreatePricingModelBody = require('./Models/CreatePricingModelBody'),
    UpdatePricingModelByIdBody = require('./Models/UpdatePricingModelByIdBody'),
    CreateResourceBody = require('./Models/CreateResourceBody'),
    UpdateResourceByIdBody = require('./Models/UpdateResourceByIdBody'),
    CreateScheduleBody = require('./Models/CreateScheduleBody'),
    CreateScheduleTimeWindowBody = require('./Models/CreateScheduleTimeWindowBody'),
    UpdateScheduleTimeWindowByIdBody = require('./Models/UpdateScheduleTimeWindowByIdBody'),
    CreateServiceBody = require('./Models/CreateServiceBody'),
    UpdateServiceByIdBody = require('./Models/UpdateServiceByIdBody'),
    CreateUserBody = require('./Models/CreateUserBody'),
    UpdateUserByIdBody = require('./Models/UpdateUserByIdBody'),
    RegisterUserAsProBody = require('./Models/RegisterUserAsProBody');


function initializer(){}

//Main functional components of gonebusy
initializer.configuration = configuration;
initializer.BookingsController = BookingsController;
initializer.CategoriesController = CategoriesController;
initializer.PricingModelsController = PricingModelsController;
initializer.ResourcesController = ResourcesController;
initializer.SchedulesController = SchedulesController;
initializer.SearchController = SearchController;
initializer.ServicesController = ServicesController;
initializer.UsersController = UsersController;

//Main Models of gonebusy
initializer.CreateBookingBody = CreateBookingBody;
initializer.UpdateBookingByIdBody = UpdateBookingByIdBody;
initializer.CreateCategoryBody = CreateCategoryBody;
initializer.CreatePricingModelBody = CreatePricingModelBody;
initializer.UpdatePricingModelByIdBody = UpdatePricingModelByIdBody;
initializer.CreateResourceBody = CreateResourceBody;
initializer.UpdateResourceByIdBody = UpdateResourceByIdBody;
initializer.CreateScheduleBody = CreateScheduleBody;
initializer.CreateScheduleTimeWindowBody = CreateScheduleTimeWindowBody;
initializer.UpdateScheduleTimeWindowByIdBody = UpdateScheduleTimeWindowByIdBody;
initializer.CreateServiceBody = CreateServiceBody;
initializer.UpdateServiceByIdBody = UpdateServiceByIdBody;
initializer.CreateUserBody = CreateUserBody;
initializer.UpdateUserByIdBody = UpdateUserByIdBody;
initializer.RegisterUserAsProBody = RegisterUserAsProBody;

module.exports = initializer;