using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using SocialNetworkPets.Model.Models;
using SocialNetworkPets.Services.interfaces;
using SocialNetworkPets.JwtHelpers;
using SocialNetworkPets.api.Controllers;
using SocialNetworkPets.Authorization.JwtHelpers;
using Newtonsoft.Json;

namespace SocialNetworkPets.Services
{
    public class UsersServices : IUsersServices
    {
        private readonly SocialNetworkPetsContext _context;

        public UsersServices(SocialNetworkPetsContext context)
        {
            _context = context;
        }

        public async Task<Usuario> create(Usuario prmUser)
        {
            try
            {
                prmUser.FechaCreacion = DateTime.Now;
                prmUser.Eliminado = false;
                _context.Usuarios.Add(prmUser);
                _context.SaveChanges();
                return prmUser;
            }
            catch (Exception e)
            {
                throw e;
            }
        }

        #region login       

        /// <summary>
        /// login user
        /// </summary>
        /// <returns>usuario</returns>
        public async Task<Usuario> GetLogin(Usuario prmUsuario, string prmSecret, string prmIssuer, string prmAudience)
        {
            try
            {
                var usuario = _context.Usuarios.
                    Where(x=>x.Correo==prmUsuario.Correo && x.Passwprd==prmUsuario.Passwprd).FirstOrDefault();
                if(usuario!=null)
                {
                    usuario.Token = this.GenerateToken(prmSecret, prmIssuer, prmAudience, usuario);
                }
                return usuario;
            }
            catch(Exception e)
            {
                throw e;
            }
            
        }

        private JwtToken GenerateToken(string prmSecret, string prmIssuer, string prmAudience, Usuario prmUser)
        {
            var token = new JwtTokenBuilder()
            .AddSecurityKey(JwtSecurityKey.Create(prmSecret))
            .AddIssuer(prmIssuer)
            .AddAudience(prmAudience)
            .AddExpiryinMinute(300)
            .AddClaim("User", prmUser.Correo)
            .AddClaim("UserId", prmUser.UsuarioId.ToString())
            .Build();
            return token;
        }

        #endregion

    }
}
