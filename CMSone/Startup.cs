using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CMSone.Models;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Microsoft.Net.Http.Headers;
using Newtonsoft.Json.Serialization;
using Swashbuckle.AspNetCore.Swagger;

namespace CMSone
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors(c =>
            {
                c.AddPolicy("AllowOrigin", options => options.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());
            });

            //JSON Serializer
            services.AddMvc().AddJsonOptions(options =>
            options.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore)
                .AddJsonOptions(options => options.SerializerSettings.ContractResolver
                = new DefaultContractResolver());

            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_1);
            // services.AddControllers();
            services.AddSwaggerGen(c => {
                c.SwaggerDoc("v1", new Info
                {
                    Version = "v1",
                    Title = "Customer Management System",
                    Description = "ASP.NET Core 2.0 Web API",
                });
            });
            var connectionString = Configuration.GetConnectionString("DefaultConnection");
            services.AddDbContextPool<AppDbContext>(options => options.UseSqlServer(connectionString));
            services.AddIdentity<IdentityUser, IdentityRole>(Configuration =>
            {

            }).AddEntityFrameworkStores<AppDbContext>();
            var corsURLS = Configuration.GetSection("CORSURLS").GetChildren().ToDictionary(x => x.Key, x => x.Value);
            List<string> allowedURLS = new List<string>();
            if (corsURLS.Count > 0)
            {
                foreach (var item in corsURLS)
                {
                    if (item.Key.ToUpperInvariant() == "ALLOWEDURLS")
                    {
                        foreach (var value in item.Value.Split(";"))
                        {
                            allowedURLS.Add(value);
                        }
                    }
                }
            }
            services.AddCors(options =>
            {
                options.AddPolicy("CORSAPI", builder =>
                {
                    builder.WithOrigins(allowedURLS.ToArray())
                    .WithHeaders(HeaderNames.ContentType, "application/json")
                    .AllowAnyHeader()
                    .AllowAnyMethod()
                    .AllowAnyOrigin()
                    .WithMethods("GET", "POST");
                });
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            app.UseCors(options => options.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseMvc();
            app.UseSwagger();
            app.UseSwaggerUI(c => {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "My API V1");
            });

        }
    }
}
