using System;
using System.Collections.Generic;

#nullable disable

namespace SocialNetworkPets.Model.Models
{
    public partial class Producto
    {
        public Producto()
        {
            Venta = new HashSet<Ventum>();
        }

        public int ProductoId { get; set; }
        public int ValorUnitario { get; set; }
        public string Nombre { get; set; }
        public bool? Eliminado { get; set; }
        public DateTime FechaCreacion { get; set; }

        public virtual ICollection<Ventum> Venta { get; set; }
    }
}
