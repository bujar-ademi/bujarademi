using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Text;

namespace bujarademi.db.Entities
{
	public class Role : IdentityRole
	{
		public virtual ICollection<UserRole> UserRoles { get; set; }
	}
}
