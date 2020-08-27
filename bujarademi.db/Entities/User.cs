using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace bujarademi.db.Entities
{
	[Table("AspNetUsers")]
	public class User : IdentityUser
	{

		public virtual ICollection<IdentityUserClaim<string>> Claims { get; set; }
		public virtual ICollection<IdentityUserLogin<string>> Logins { get; set; }
		public virtual ICollection<IdentityUserToken<string>> Tokens { get; set; }
		public virtual ICollection<UserRole> UserRoles { get; set; }

		[PersonalData]
		[Display(Name = "First Name")]
		public string FirstName { get; set; }

		[PersonalData]
		[Display(Name = "Last Name")]
		public string LastName { get; set; }

		[PersonalData]
		public string Address { get; set; }

		[PersonalData]
		public string City { get; set; }

		[DisplayName("State / Province")]
		[PersonalData]
		public string State { get; set; }

		[Display(Name = "Postal / Zip Code")]
		[PersonalData]
		public string PostCode { get; set; }

		[Display(Name = "Country")]
		[PersonalData]
		public string Country { get; set; }

		[Display(Name = "Hunter's License")]
		[PersonalData]
		public string HunterLicense { get; set; }
	}
}
