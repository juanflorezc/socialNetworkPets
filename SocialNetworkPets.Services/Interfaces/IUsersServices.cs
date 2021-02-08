using SocialNetworkPets.Model.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
//using SocialNetworkPets.model.Models;

namespace SocialNetworkPets.Services.interfaces
{
    public interface IUsersServices
    {
        Task<Usuario> GetLogin(Usuario prmUsuario, string prmSecret, string prmIssuer, string prmAudience);
        Task<Usuario> create(Usuario prmUser);
    }
}
