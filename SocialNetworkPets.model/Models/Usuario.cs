using System;
using System.Collections.Generic;

#nullable disable

namespace SocialNetworkPets.Model.Models
{
    public partial class Usuario
    {
        public int UsuarioId { get; set; }
        public string Correo { get; set; }
        public string Nombres { get; set; }
        public string Apellidos { get; set; }
        public string Passwprd { get; set; }
        public bool? Eliminado { get; set; }
        public DateTime FechaCreacion { get; set; }
    }
}
