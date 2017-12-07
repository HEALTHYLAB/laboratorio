using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.ServiceModel.Web;
using System.Text;

// NOTE: You can use the "Rename" command on the "Refactor" menu to change the class name "Service" in code, svc and config file together.
public class Service : IService
{
    public List<int> GetData(List<int> value, List<string> value2)
	{
        List<int> result = new List<int>();

        result.Add(2);
        result.Add(3);
        result.Add(4);
        return result;
	}

    public string receiveOrder(int idBanco, int idSolicitud, List<string> idHemocomp, List<string> cantidad)
    {
        return "OE00001";
    }

    public int checkStatus(int idSolicitud)
    {
        if (idSolicitud % 2 == 0)
        {
            return 1;
        }
        return 0;
    }

	public CompositeType GetDataUsingDataContract(CompositeType composite)
	{
		if (composite == null)
		{
			throw new ArgumentNullException("composite");
		}
		if (composite.BoolValue)
		{
			composite.StringValue += "Suffix";
		}
		return composite;
	}
}
