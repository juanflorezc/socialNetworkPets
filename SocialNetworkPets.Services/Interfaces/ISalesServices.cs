using SocialNetworkPets.Model.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
//using SocialNetworkPets.model.Models;

namespace SocialNetworkPets.Services.interfaces
{
    public interface ISalesServices
    {
        Task<List<Ventum>> getSales(string? prmNit, string? prmProducto, string? prmProveedor, DateTime? prmFecha);
    }
}
