using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

[ApiController]
[Route("/api/[controller]")]
public class ErrorController : ControllerBase
{

    [HttpGet("not-found")]
    public IActionResult NotFoundError()
    {
        return NotFound(); //404
    }

    [HttpGet("bad-request")]
    public IActionResult BadRequestError()
    {
        return BadRequest(); //400
    }

    [HttpGet("unauthorized")]
    public IActionResult UnAuthorizedError()
    {
        return Unauthorized(); //401
    }

    [HttpGet("validation-error")]
    public IActionResult ValidationError()
    {
        ModelState.AddModelError("Validation Error 1", "validation Error details");
        ModelState.AddModelError("Validation Error 1", "validation Error details");
        return ValidationProblem(); //422
    }

     [HttpGet("server-error")]
    public IActionResult ServerError()
    {
        throw new Exception("server error"); //500
    }
}