using System;
using System.Collections.Generic;

#nullable disable

namespace SocialNetworkPets.Model.Models
{
    public partial class Proveedor
    {
        public Proveedor()
        {
            Venta = new HashSet<Ventum>();
        }

        public int ProveedorId { get; set; }
        public string Correo { get; set; }
        public string Nombre { get; set; }
        public string Nit { get; set; }
        public string Direccion { get; set; }
        public bool? Eliminado { get; set; }
        public DateTime FechaCreacion { get; set; }

        public virtual ICollection<Ventum> Venta { get; set; }
    }
}
