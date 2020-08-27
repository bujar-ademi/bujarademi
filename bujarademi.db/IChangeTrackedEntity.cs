using System;

namespace bujarademi.db
{
    public interface IChangeTrackedEntity
    {
        DateTime CreatedOn { get; set; }
        DateTime? UpdatedOn { get; set; }
    }
}
