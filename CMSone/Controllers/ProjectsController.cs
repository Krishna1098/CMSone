using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CMSone.Models;
using Microsoft.Extensions.Configuration;
using System.Data;
using System.Data.SqlClient;

namespace CMSone.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProjectsController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        // private readonly IWebHostEnvironment _env;
        public ProjectsController(IConfiguration configuration)//, IWebHostEnvironment env)
        {
            _configuration = configuration;
            //_env = env;
        }

        [HttpGet]
        public JsonResult Get()
        {
            string query = @" 
                            select Id,Title,BackendRequirements,FrontendRequirements,DatabaseRequirements,Description
                            from 
                            dbo.Project 
                            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("DefaultConnection");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult(table);
        }

        [HttpPost]
        public JsonResult Post(Project lms)
        {
            string query = @" 
                           insert into dbo.Project 
                           (Title,BackendRequirements,FrontendRequirements,DatabaseRequirements,Description) 
                    values (@Title,@BackendRequirements,@FrontendRequirements,@DatabaseRequirements,@Description) 
                            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("DefaultConnection");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    // myCommand.Parameters.AddWithValue("@LeaveID", lms.Leaveid); 
                    myCommand.Parameters.AddWithValue("@Title", lms.Title);
                    myCommand.Parameters.AddWithValue("@BackendRequirements", lms.BackendRequirements);
                    myCommand.Parameters.AddWithValue("@FrontendRequirements", lms.FrontendRequirements);
                    myCommand.Parameters.AddWithValue("@DatabaseRequirements", lms.DatabaseRequirements);
                    myCommand.Parameters.AddWithValue("@Description", lms.Description);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Added Successfully");
        }

        [HttpPut]
        public JsonResult Put(Project lms)
        {
            string query = @" 
                           update dbo.Project 
                           set Title=@Title,BackendRequirements=@BackendRequirements,FrontendRequirements=@FrontendRequirements,DatabaseRequirements=@DatabaseRequirements,Description=@Description 
                           where Id=@Id 
                            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("DefaultConnection");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@Id", lms.Id);
                    myCommand.Parameters.AddWithValue("@Title", lms.Title);
                    myCommand.Parameters.AddWithValue("@BackendRequirements", lms.BackendRequirements);
                    myCommand.Parameters.AddWithValue("@FrontendRequirements", lms.FrontendRequirements);
                    myCommand.Parameters.AddWithValue("@DatabaseRequirements", lms.DatabaseRequirements);
                    myCommand.Parameters.AddWithValue("@Description", lms.Description);


                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Updated Successfully");
        }


        [HttpDelete("{id}")]
        public JsonResult Delete(int id)
        {
            string query = @" 
                            delete from dbo.Project where Id=@Id 
                            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("DefaultConnection");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@Id", id);


                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Deleted Successfully");
        }

    }
}