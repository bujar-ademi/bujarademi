using System;

namespace bujarademi.db.Entities
{
    public abstract class IdentifiableEntity<T> : IChangeTrackedEntity
    {
        public T Id { get; set; }
        public DateTime CreatedOn { get; set; }
        public DateTime? UpdatedOn { get; set; }
    }
}
