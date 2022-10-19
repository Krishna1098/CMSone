using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CMSone.Models
{
    public class Project
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string BackendRequirements { get; set; }
        public string FrontendRequirements { get; set; }
        public string DatabaseRequirements { get; set; }
        public string Description { get; set; }
    }
}
