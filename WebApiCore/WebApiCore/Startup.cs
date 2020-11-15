using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using WebApiCore.Models;

namespace WebApiCore
{
    public class Startup
    {
        private string _connectionString = null;
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }
        public IConfiguration Configuration { get; }
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            /*services.AddCors(opt =>
            {
                opt.AddPolicy("CorsPolicy",
                    b => b.AllowAnyOrigin()
                          .AllowAnyMethod()
                          .AllowAnyHeader()
                          .AllowCredentials());
            }
            );*/

            services.AddMvc(option => option.EnableEndpointRouting = false);
            services.AddDbContext<ApiContext>(options =>
                    options.UseNpgsql(Configuration.GetConnectionString("DefaultConnection"))
                    );
            services.AddTransient<DataSeed>();
            /* services.AddEntityFrameworkNpgsql().AddDbContext<ApiContext>(opt => opt.UseNpgsql(_connectionString));*/
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env, DataSeed seeder)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            /*app.UseCors("CorsPolicy");*/

            var nCustomers = 20;
            var nOrders = 1000;
            seeder.SeedData(nCustomers, nOrders);

            app.UseMvc(routes =>
                routes.MapRoute("default", "api/{controller}/{action}/{id?}")
            );
        }
    }
}
