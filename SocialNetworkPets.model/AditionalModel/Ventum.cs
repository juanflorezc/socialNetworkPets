using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

#nullable disable

namespace SocialNetworkPets.Model.Models
{
    public partial class Ventum
    {

        [NotMapped] 
        public string ProveedorString { get; set; }
        [NotMapped]
        public string ProductoString { get; set; }
        
    }
}
