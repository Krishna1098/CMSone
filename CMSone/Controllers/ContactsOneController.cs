using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using CMSone.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace CMSone.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContactsOneController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        // private readonly IWebHostEnvironment _env;
        public ContactsOneController(IConfiguration configuration)//, IWebHostEnvironment env)
        {
            _configuration = configuration;
            //_env = env;
        }

        [HttpGet]
        public JsonResult Get()
        {
            string query = @" 
                            select Id,FirstName,LastName,Email,PhNo,Designation,Address
                            from 
                            dbo.Contact 
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
        public JsonResult Post(Contact lms)
        {
            string query = @" 
                           insert into dbo.Contact 
                           (FirstName,LastName,Email,PhNo,Designation,Address) 
                    values (@FirstName,@LastName,@Email,@PhNo,@Designation,@Address) 
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
                    myCommand.Parameters.AddWithValue("@FirstName", lms.FirstName);
                    myCommand.Parameters.AddWithValue("@LastName", lms.LastName);
                    myCommand.Parameters.AddWithValue("@Email", lms.Email);
                    myCommand.Parameters.AddWithValue("@PhNo", lms.PhNo);
                    myCommand.Parameters.AddWithValue("@Designation", lms.Designation);
                    myCommand.Parameters.AddWithValue("@Address", lms.Address);

                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Added Successfully");
        }

        [HttpPut]
        public JsonResult Put(Contact lms)
        {
            string query = @" 
                           update dbo.Contact 
                           set FirstName=@FirstName,LastName=@LastName,Email=@Email,PhNo=@PhNo,Designation=@Designation,Address=@Address 
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
                    myCommand.Parameters.AddWithValue("@FirstName", lms.FirstName);
                    myCommand.Parameters.AddWithValue("@LastName", lms.LastName);
                    myCommand.Parameters.AddWithValue("@Email", lms.Email);
                    myCommand.Parameters.AddWithValue("@PhNo", lms.PhNo);
                    myCommand.Parameters.AddWithValue("@Designation", lms.Designation);
                    myCommand.Parameters.AddWithValue("@Address", lms.Address);


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
                            delete from dbo.Contact where Id=@Id 
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