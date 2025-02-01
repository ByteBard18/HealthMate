import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js"
import { AsyncHandler } from "../utils/AsyncHandler.js"

const healthcheck = AsyncHandler(async (req, res) => {
    try {
        return res.status(200).json(new ApiResponse(200, {}, "Healthcheck successful"))
    } catch (error) {
        return res.status(400).json(new ApiError(400, error.message))
    }
})

export default healthcheck