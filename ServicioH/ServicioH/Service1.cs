using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Diagnostics;
using System.Linq;
using System.ServiceProcess;
using System.Text;
using System.Threading.Tasks;
using System.Threading;
using System.Timers;
using System.Configuration;


namespace ServicioH
{
    public partial class Service1 : ServiceBase
    {
        int eventId;
        System.Timers.Timer timer_ = new System.Timers.Timer();

        public Service1()
        {
            InitializeComponent();
        }
        void myTimer_Elapsed(object sender, System.Timers.ElapsedEventArgs e) 
        {
            timer_.Enabled = false;
            Procesa();
            timer_.Enabled = true;
        }

        protected override void OnStart(string[] args)
        {
            try
            {
                int n_tiempo_intervalo = Convert.ToInt32(ConfigurationManager.AppSettings["TiempoIntervalo"]);
                EventLog.WriteEntry("Se inicia el servicio de Restablecimiento de Hemocomponentes");
                timer_ = new System.Timers.Timer();
                timer_.Interval = n_tiempo_intervalo;
                timer_.Elapsed += new System.Timers.ElapsedEventHandler(myTimer_Elapsed);

                timer_.Start();
            }
            catch (Exception)
            {

                EventLog.WriteEntry("Error al iniciar el servicio");
            }

        }

        protected override void OnStop()
        {
            EventLog.WriteEntry("In en parada");
            timer_.Stop();
        }
        protected override void OnContinue()
        { 
            EventLog.WriteEntry("Continuar");
            timer_.Start();
            this.OnContinue();
        }
        protected override void OnPause()
        { 
                this.OnPause();
                timer_.Stop();
        }

        public void Procesa() 
        {
            DAO obj = new DAO();
            obj.Proceso();
        }
    }
}
