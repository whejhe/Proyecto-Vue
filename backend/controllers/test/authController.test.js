// const { mockRequest, mockResponse } = require("jest-mock-req-res");
// const { register } = require("../authController");
// const { createUser, deleteUser } = require("../user.controllers")


// describe('Auth Controller', () => {
//     describe('register', () => {
//         it('should create a new user', async () => {
//             const req = {
//                 body: {
//                     username: 'zarlos',
//                     email: 'zarlos@gmail.com',
//                     password: '1234',
//                 },
//                 headers: {
//                     authorization: null,
//                 },
//             };
//             const res = mockResponse();
//             await register(req, res);

//             expect(res.status).toHaveBeenCalledWith(200);
//             expect(res.json).toHaveBeenCalledWith({
//                 token: expect.any(String),
//             });
//         });
//     });
// });

const { mockRequest, mockResponse } = require("jest-mock-req-res");
const { login } = require("../authController");

test("usuario logeado", async () => {
    const req = {
        body: {
            email: "carlos@gmail.com",
            password: "1234",
        },
        headers: {
            authorization: null,
        },
    };
    const res = mockResponse();

    await login(req, res);

    // expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
        token: expect.any(String),
    });
});