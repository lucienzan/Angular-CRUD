namespace backend.Models
{
    public class SuperHeros
    {
        /// <summary>
        /// specific automactic increment 
        /// </summary>
        public string ? ID { get; set; }

        /// <summary>
        /// Name of hero firstName
        /// </summary>
        public string FirstName { get; set; } = string.Empty;

        /// <summary>
        /// Name of hero lasttName
        /// </summary>
        public string LastName { get; set; } = string.Empty;

        /// <summary>
        /// Name of hero fullName
        /// </summary>
        public string FullName { get; set; } = string.Empty;

        /// <summary>
        /// Name of hero power
        /// </summary>
        public string Power { get; set; } = string.Empty;

        /// <summary>
        /// Name of hero address
        /// </summary>
        public string Place { get; set; } = string.Empty;
    }
}
