using Flights.ReadModels;
using Microsoft.AspNetCore.Mvc;
using System;

namespace Flights.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class FlightController : ControllerBase
    {

        private readonly ILogger<FlightController> _logger;

        public FlightController(ILogger<FlightController> logger)
        {
            _logger = logger;
        }

        Random random = new Random();

        [HttpGet]
        public IEnumerable<FlightRm> Search()
            => new FlightRm[]
            {
                new FlightRm(
                    Guid.NewGuid(),
                    "American Airlines",
                    random.Next(100, 1000).ToString(),
                    new TimePlaceRm("Los Angeles", DateTime.Now.AddHours(random.Next(1, 3))),
                    new TimePlaceRm("Istanbul", DateTime.Now.AddHours(random.Next(4, 10))),
                    random.Next(50, 500)
                ),
                new FlightRm(
                    Guid.NewGuid(),
                    "Lufthansa",
                    random.Next(100, 1000).ToString(),
                    new TimePlaceRm("New York", DateTime.Now.AddHours(random.Next(1, 3))),
                    new TimePlaceRm("Frankfurt", DateTime.Now.AddHours(random.Next(4, 10))),
                    random.Next(50, 500)
                ),
                new FlightRm(
                    Guid.NewGuid(),
                    "Emirates",
                    random.Next(100, 1000).ToString(),
                    new TimePlaceRm("Chicago", DateTime.Now.AddHours(random.Next(1, 3))),
                    new TimePlaceRm("Dubai", DateTime.Now.AddHours(random.Next(4, 10))),
                    random.Next(50, 500)
                ),
                new FlightRm(
                    Guid.NewGuid(),
                    "Delta Airlines",
                    random.Next(100, 1000).ToString(),
                    new TimePlaceRm("San Francisco", DateTime.Now.AddHours(random.Next(1, 3))),
                    new TimePlaceRm("London", DateTime.Now.AddHours(random.Next(4, 10))),
                    random.Next(50, 500)
                ),
                new FlightRm(
                    Guid.NewGuid(),
                    "Turkish Airlines",
                    random.Next(100, 1000).ToString(),
                    new TimePlaceRm("Miami", DateTime.Now.AddHours(random.Next(1, 3))),
                    new TimePlaceRm("Istanbul", DateTime.Now.AddHours(random.Next(4, 10))),
                    random.Next(50, 500)
                )
            };
    }
}