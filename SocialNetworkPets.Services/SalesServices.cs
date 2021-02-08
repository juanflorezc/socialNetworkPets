using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using SocialNetworkPets.Model.Models;
using SocialNetworkPets.Services.interfaces;

namespace SocialNetworkPets.Services
{
    public class SalesServices : ISalesServices
    {
        private readonly SocialNetworkPetsContext _context;

        public SalesServices(SocialNetworkPetsContext context)
        {
            _context = context;
        }

        public async Task<List<Ventum>> getSales(string? prmNit, string? prmProducto, string? prmProveedor, DateTime? prmFecha)
        {
            var sales = _context.Venta.Where(x => !(bool)x.Eliminado).Include(x=>x.Proveedor).Include(x=>x.Producto).ToList();
            if(!string.IsNullOrEmpty(prmNit))
            {
                sales = sales.Where(x=>x.Proveedor.Nit==prmNit).ToList();
            }
            if (!string.IsNullOrEmpty(prmProducto))
            {
                sales = sales.Where(x => x.Producto.Nombre== prmProducto).ToList();
            }
            if (!string.IsNullOrEmpty(prmProveedor))
            {
                sales = sales.Where(x => x.Proveedor.Nombre == prmProveedor).ToList();
            }
            if (prmFecha!=null)
            {
                sales = sales.Where(x => x.FechaCreacion >= prmFecha).ToList();
            }
            foreach(var sale in sales)
            {
                sale.ProductoString = sale.Producto.Nombre;
                sale.ProveedorString = sale.Proveedor.Nombre;
                sale.Producto = null;
                sale.Proveedor = null;
            }
            return sales;
        }
    }
}
