using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

/// <summary>
/// Summary description for BancoBE
/// </summary>
public class BancoBE
{
    public int id { get; set; }
    public string descripcion { get; set; }

	public BancoBE()
	{
		
	}

    public BancoBE(int id, string descripcion)
    {
        this.id = id;
        this.descripcion = descripcion;
    }
}