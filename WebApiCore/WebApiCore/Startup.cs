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
       
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }
        public IConfiguration Configuration { get; }
        public void ConfigureServices(IServiceCollection services)
        {
			services.AddCors(options =>
			{
                    options.AddDefaultPolicy(builder =>
               builder.SetIsOriginAllowed(_ => true)
               .AllowAnyMethod()
               .AllowAnyHeader()
               .AllowCredentials());
            }
			);

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

			app.UseCors("CorsPolicy");

			var nCustomers = 20;
            var nOrders = 1000;
            seeder.SeedData(nCustomers, nOrders);

            app.UseMvc(routes =>
                routes.MapRoute("default", "api/{controller}/{action}/{id?}")
            );
        }
    }
}
