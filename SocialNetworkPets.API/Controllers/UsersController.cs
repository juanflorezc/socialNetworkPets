using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using SocialNetworkPets.api;
using SocialNetworkPets.Helpers;
using SocialNetworkPets.Model.Models;
//using SocialNetworkPets.model.Models;
using SocialNetworkPets.Services.interfaces;

namespace SocialNetworkPets.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UsersController : ControllerBase
    {
        public readonly IUsersServices usersServices;
        private readonly ILogger _logger;
        private readonly IOptions<AppSettings> _settings;
        public UsersController(IUsersServices prmUsersServices, ILogger<SalesController> logger,
            IOptions<AppSettings> settings)
        {
            usersServices = prmUsersServices;
            _logger = logger;
            _settings = settings;
        }
        
        #region Login        
        
        /// <summary>
        /// login
        /// </summary>
        /// <param name="prmUser"></param>
        /// <returns></returns>
        [HttpPost]
        [Route("login")]
        public async Task<IActionResult> login(Usuario prmUser)
        {
            try
            {
                var response = await usersServices.GetLogin(prmUser,_settings.Value.Secret, _settings.Value.petsIssuerJwt, _settings.Value.petsAudienceJwt);
                return Ok(response);
            }
            catch (Exception ex)
            {
                _logger.LogWarning(LogEvents.ExeptionError, ex, "Error Exception");
                return BadRequest(ex.ToString());
            }
        }
        #endregion

        #region creation        

        /// <summary>
        /// create
        /// </summary>
        /// <param name="prmUser"></param>
        /// <returns></returns>
        [HttpPost]
        [Route("create")]
        public async Task<IActionResult> Create(Usuario prmUser)
        {
            try
            {
                var response = await usersServices.create(prmUser);
                return Ok(response);
            }
            catch (Exception ex)
            {
                _logger.LogWarning(LogEvents.ExeptionError, ex, "Error Exception");
                return BadRequest(ex.ToString());
            }
        }
        #endregion

    }
}
