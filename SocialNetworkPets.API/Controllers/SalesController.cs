using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using SocialNetworkPets.Helpers;
using SocialNetworkPets.Model.Models;
using SocialNetworkPets.Services.interfaces;

namespace SocialNetworkPets.Controllers
{
    [ApiController]
    [Route("api/[controller]")]

    public class SalesController : ControllerBase
    {
        public readonly ISalesServices salesServices;
        private readonly ILogger _logger;
        public SalesController(ISalesServices prmSalesServices, ILogger<SalesController> logger)
        {
            salesServices = prmSalesServices;
            _logger = logger;
        }

        /// <summary>
        /// get a lists of sales
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [Route("getSales")]
        public async Task<List<Ventum>> GetSurveyResponses(string? prmNit, string? prmProducto, string? prmProveedor, DateTime? prmFecha)
        {
            return await salesServices.getSales(prmNit, prmProducto, prmProveedor, prmFecha);
        }

        
    }
}
