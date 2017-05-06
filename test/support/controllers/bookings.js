const GetBookingsResponse = require('../../../lib/Models/GetBookingsResponse');
const CreateBookingResponse = require('../../../lib/Models/CreateBookingResponse');
const CancelBookingByIdResponse = require('../../../lib/Models/CancelBookingByIdResponse');
const UpdateBookingByIdResponse = require('../../../lib/Models/UpdateBookingByIdResponse');
const GetBookingByIdResponse = require('../../../lib/Models/GetBookingByIdResponse');

const BookingsController = Promise.promisifyAll(gonebusy.BookingsController);
const bookingsFixturesPath = `${fixturesPath}/bookings`;

const indexParams = { page: 1, per_page: 10 };
const requestIndexParams = _.chain(configuration).pick('authorization').assign(indexParams).value();

const getBookings = {
    nockRequest() {
        nock(configuration.getBaseUri())
            .get('/bookings')
            .query(indexParams)
            .replyWithFile(200, `${bookingsFixturesPath}/index.json`);
    },
    promiseResolved() {
        return expect(BookingsController.getBookingsAsync(requestIndexParams)).to.eventually.be.resolved;
    },
    correctInstance() {
        return expect(BookingsController.getBookingsAsync(requestIndexParams)).to.eventually
            .be.an.instanceof(GetBookingsResponse);
    },
    correctContent() {
        return expect(BookingsController.getBookingsAsync(requestIndexParams)).to.eventually
            .have.property('bookings').and.have.lengthOf(1);
    }
};

const createParams = { service_id: 0, date: 'string', time: 'string', resource_id: 0, duration: 0, user_id: 0 };
const requestCreateParams = _.chain(configuration).pick('authorization').assign({ createBookingBody: createParams })
    .value();

const createBooking = {
    nockRequest() {
        nock(configuration.getBaseUri())
            .post('/bookings/new', createParams)
            .replyWithFile(201, `${bookingsFixturesPath}/show.json`);
    },
    promiseResolved() {
        return expect(BookingsController.createBookingAsync(requestCreateParams)).to.eventually.be.resolved;
    },
    correctInstance() {
        return expect(BookingsController.createBookingAsync(requestCreateParams)).to.eventually
            .be.an.instanceof(CreateBookingResponse);
    },
    correctContent() {
        return expect(BookingsController.createBookingAsync(requestCreateParams)).to.eventually
            .have.property('booking').and.be.a('object').and.have.property('id');
    }
};

const bookingId = 0;
const requestInstanceParams = _.chain(configuration).pick('authorization').assign({ id: bookingId }).value();

const cancelBookingById = {
    nockRequest() {
        nock(configuration.getBaseUri())
            .delete(`/bookings/${bookingId}`)
            .replyWithFile(200, `${bookingsFixturesPath}/show.json`);
    },
    promiseResolved() {
        return expect(BookingsController.cancelBookingByIdAsync(requestInstanceParams)).to.eventually.be.resolved;
    },
    correctInstance() {
        return expect(BookingsController.cancelBookingByIdAsync(requestInstanceParams)).to.eventually
            .be.an.instanceof(CancelBookingByIdResponse);
    },
    correctContent() {
        return expect(BookingsController.cancelBookingByIdAsync(requestInstanceParams)).to.eventually
            .have.property('booking').and.be.a('object').and.have.property('id').and.equal(bookingId);
    }
};

const updateBookingById = {
    nockRequest() {
        nock(configuration.getBaseUri())
            .put(`/bookings/${bookingId}`)
            .replyWithFile(200, `${bookingsFixturesPath}/show.json`);
    },
    promiseResolved() {
        return expect(BookingsController.updateBookingByIdAsync(requestInstanceParams)).to.eventually.be.resolved;
    },
    correctInstance() {
        return expect(BookingsController.updateBookingByIdAsync(requestInstanceParams)).to.eventually
            .be.an.instanceof(UpdateBookingByIdResponse);
    },
    correctContent() {
        return expect(BookingsController.updateBookingByIdAsync(requestInstanceParams)).to.eventually
            .have.property('booking').and.be.a('object').and.have.property('id').and.equal(bookingId);
    }
};

const getBookingById = {
    nockRequest() {
        nock(configuration.getBaseUri())
            .get(`/bookings/${bookingId}`)
            .replyWithFile(200, `${bookingsFixturesPath}/show.json`);
    },
    promiseResolved() {
        return expect(BookingsController.getBookingByIdAsync(requestInstanceParams)).to.eventually.be.resolved;
    },
    correctInstance() {
        return expect(BookingsController.getBookingByIdAsync(requestInstanceParams)).to.eventually
            .be.an.instanceof(GetBookingByIdResponse);
    },
    correctContent() {
        return expect(BookingsController.getBookingByIdAsync(requestInstanceParams)).to.eventually
            .have.property('booking').and.be.a('object').and.have.property('id').and.equal(bookingId);
    }
};

module.exports = {
    getBookings,
    createBooking,
    cancelBookingById,
    updateBookingById,
    getBookingById
};
