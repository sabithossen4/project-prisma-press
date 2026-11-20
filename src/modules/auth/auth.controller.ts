import { NextFunction, Request, Response } from "express"
import { authService } from "./auth.service";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import httpStatus from 'http-status';

const loginUser = catchAsync(async (req: Request, res: Response, next: NextFunction) => {

    const payload = req.body;

    const loginResult = await authService.loginUser(payload);

    sendResponse(res, {
        statusCode : httpStatus.OK,
        success : true,
        message : "User logged in successfully",
        data : loginResult
    })

});

export const authController = {
    loginUser
}