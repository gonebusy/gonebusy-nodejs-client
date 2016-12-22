const GetBookingsResponse = require(rootPath + '/lib/Models/GetBookingsResponse');
const CreateBookingResponse = require(rootPath + '/lib/Models/CreateBookingResponse');
const CancelBookingByIdResponse = require(rootPath + '/lib/Models/CancelBookingByIdResponse');
const UpdateBookingByIdResponse = require(rootPath + '/lib/Models/UpdateBookingByIdResponse');
const GetBookingByIdResponse = require(rootPath + '/lib/Models/GetBookingByIdResponse');

const BookingsController = Promise.promisifyAll(gonebusy.BookingsController);
const bookingsFixturesPath = fixturesPath + '/bookings';

const indexParams = { page: 1, per_page: 10 };
const requestIndexParams = _.chain(configuration).pick('authorization').assign(indexParams).value();

const getBookings = {
    nockRequest: function () {
        nock(configuration.BASEURI)
            .get('/bookings')
            .query(indexParams)
            .replyWithFile(200, bookingsFixturesPath + '/index.json');
    },
    promiseResolved: function () {
        return expect(BookingsController.getBookingsAsync(requestIndexParams)).to.eventually.be.resolved;
    },
    correctInstance: function () {
        return expect(BookingsController.getBookingsAsync(requestIndexParams)).to.eventually
            .be.an.instanceof(GetBookingsResponse);
    },
    correctContent: function () {
        return expect(BookingsController.getBookingsAsync(requestIndexParams)).to.eventually
            .have.property('bookings').and.have.lengthOf(1);
    }
};

const createParams = { service_id: 0, date: 'string', time: 'string', resource_id: 0, duration: 0, user_id: 0 };
const requestCreateParams = _.chain(configuration).pick('authorization').assign({ createBookingBody: createParams })
    .value();

const createBooking = {
    nockRequest: function () {
        nock(configuration.BASEURI)
            .post('/bookings/new', createParams)
            .replyWithFile(201, bookingsFixturesPath + '/show.json');
    },
    promiseResolved: function () {
        return expect(BookingsController.createBookingAsync(requestCreateParams)).to.eventually.be.resolved;
    },
    correctInstance: function () {
        return expect(BookingsController.createBookingAsync(requestCreateParams)).to.eventually
            .be.an.instanceof(CreateBookingResponse);
    },
    correctContent: function () {
        return expect(BookingsController.createBookingAsync(requestCreateParams)).to.eventually
            .have.property('booking').and.be.a('object').and.have.property('id');
    }
};

const bookingId = 0;
const requestInstanceParams = _.chain(configuration).pick('authorization').assign({ id: bookingId }).value();

const cancelBookingById = {
    nockRequest: function () {
        nock(configuration.BASEURI)
            .delete('/bookings/' + bookingId)
            .replyWithFile(200, bookingsFixturesPath + '/show.json');
    },
    promiseResolved: function () {
        return expect(BookingsController.cancelBookingByIdAsync(requestInstanceParams)).to.eventually.be.resolved;
    },
    correctInstance: function () {
        return expect(BookingsController.cancelBookingByIdAsync(requestInstanceParams)).to.eventually
            .be.an.instanceof(CancelBookingByIdResponse);
    },
    correctContent: function () {
        return expect(BookingsController.cancelBookingByIdAsync(requestInstanceParams)).to.eventually
            .have.property('booking').and.be.a('object').and.have.property('id').and.equal(bookingId);
    }
};

const updateBookingById = {
    nockRequest: function () {
        nock(configuration.BASEURI)
            .put('/bookings/' + bookingId)
            .replyWithFile(200, bookingsFixturesPath + '/show.json');
    },
    promiseResolved: function () {
        return expect(BookingsController.updateBookingByIdAsync(requestInstanceParams)).to.eventually.be.resolved;
    },
    correctInstance: function () {
        return expect(BookingsController.updateBookingByIdAsync(requestInstanceParams)).to.eventually
            .be.an.instanceof(UpdateBookingByIdResponse);
    },
    correctContent: function () {
        return expect(BookingsController.updateBookingByIdAsync(requestInstanceParams)).to.eventually
            .have.property('booking').and.be.a('object').and.have.property('id').and.equal(bookingId);
    }
};

const getBookingById = {
    nockRequest: function () {
        nock(configuration.BASEURI)
            .get('/bookings/' + bookingId)
            .replyWithFile(200, bookingsFixturesPath + '/show.json');
    },
    promiseResolved: function () {
        return expect(BookingsController.getBookingByIdAsync(requestInstanceParams)).to.eventually.be.resolved;
    },
    correctInstance: function () {
        return expect(BookingsController.getBookingByIdAsync(requestInstanceParams)).to.eventually
            .be.an.instanceof(GetBookingByIdResponse);
    },
    correctContent: function () {
        return expect(BookingsController.getBookingByIdAsync(requestInstanceParams)).to.eventually
            .have.property('booking').and.be.a('object').and.have.property('id').and.equal(bookingId);
    }
};

module.exports = {
    getBookings: getBookings,
    createBooking: createBooking,
    cancelBookingById: cancelBookingById,
    updateBookingById: updateBookingById,
    getBookingById: getBookingById
};
