using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Negocios
{
    public class Exceptions
    {

        int _IdException;
        public Exceptions()
        {
            _IdException = 0;
        }

        public string getErrorMessage()
        {
            string erMessage;
            switch (_IdException)
            {
                case 0: erMessage = ""; break;
                case 1: erMessage = "Usuario no válido"; break;
                case 2: erMessage = "Login o Password incorrecto"; break;
                case 3: erMessage = "La contraseña del usuario ha caducado!"; break;
                case 101: erMessage = "Se ha detectado un error al enviar los datos"; break;
                case 102: erMessage = "Se ha detectado un error al actualiazar los datos"; break;
                case 103: erMessage = "No se ha encontrado ninguna ocurrencia al intentar eliminar los registros."; break;
                case 105: erMessage = "Error en el detalle del Item"; break;
                case 106: erMessage = "No existe detalle del Item"; break;
                case 120: erMessage = "Imposible mover el Item"; break;
                case 547: erMessage = "No se puede realizar la transacción, existe dependencia en los registros."; break;
                case 2601: erMessage = "El Usuario ya existe"; break;
                case 2610: erMessage = "Sólo puede ingresar un informe por mes"; break;
                //exception inscripcion al curso 
                case 2611: erMessage = "Su Nro de DNI ya esta registrado "; break;
                case 2612: erMessage = "Sólo puede inscribirse una vez"; break;
                case 2627: erMessage = "Se ha detectado duplicidad en el ingreso de información"; break;
                default: erMessage = "Se ha producido un error interno en el servidor (" + _IdException.ToString() + ")"; break;
            }
            if (erMessage != "") erMessage = "Error: " + erMessage;
            return erMessage;
        }

        public int IdException
        {
            get
            {
                return _IdException;
            }
            set
            {
                _IdException = value;
            }
        }
    }
}
