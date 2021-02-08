using System;
using System.Collections.Generic;

#nullable disable

namespace SocialNetworkPets.Model.Models
{
    public partial class Ventum
    {
        public int VentaId { get; set; }
        public int ProveedorId { get; set; }
        public int ProductoId { get; set; }
        public int Cantidad { get; set; }
        public bool? Eliminado { get; set; }
        public DateTime FechaCreacion { get; set; }

        public virtual Producto Producto { get; set; }
        public virtual Proveedor Proveedor { get; set; }
    }
}
