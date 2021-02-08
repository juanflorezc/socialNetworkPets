using SocialNetworkPets.JwtHelpers;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;


namespace SocialNetworkPets.Model.Models
{
    public partial class Usuario
    {        
        [NotMapped]
        public JwtToken Token { get; set; }
    }
}
