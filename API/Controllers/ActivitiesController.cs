using Application.Activities;
using Domain;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [AllowAnonymous]
    [ApiController]
    public class ActivitiesController : BaseApiController
    {
        [HttpGet]
        public async Task<IActionResult> GetActivities(CancellationToken cancellationToken)
        {
            return HandleResult(await Mediator.Send(new List.Query(), cancellationToken));
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetActivity(Guid id, CancellationToken cancellationToken)
        {
            return HandleResult(await Mediator.Send(new Details.Query { Id = id }, cancellationToken));
        }

        [HttpPost]
        public async Task<IActionResult> CreateActivity([FromBody] Activity activity, CancellationToken cancellationToken)
        {
            return HandleResult(await Mediator.Send(new Create.Command { Activity = activity }, cancellationToken));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> EditActivity(Guid id, [FromBody] Activity activity, CancellationToken cancellationToken)
        {
            activity.Id = id;
            return HandleResult(await Mediator.Send(new Edit.Command { Activity = activity }, cancellationToken));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteActivity(Guid id, CancellationToken cancellationToken)
        {
            return HandleResult(await Mediator.Send(new Delete.Command { Id = id }, cancellationToken));
        }
    }
}