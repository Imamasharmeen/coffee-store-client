import swal from 'sweetalert';


const AddCoffee = () => {
    const handleSubmit = event =>{
        event.preventDefault();

        const form = event.target;
        const name =form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee = {name, chef, supplier, taste, category, details, photo}
        console.log(newCoffee)

        fetch('http://localhost:5000/addCoffee',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
        .then(res => res.json())
        .then(data=>{
            console.log(data)
            if(data.insertedID){
                swal("Success!", "Coffee added successfully!", "success");
            }
        })
    }
  return (
    <div>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="max-w-4xl w-full bg-white shadow-md rounded-lg p-8">
          {/* Back to Home */}
          <a
            href="#"
            className="text-gray-600 hover:text-gray-800 text-lg font-medium mb-6 block"
          >
            &larr; Back to home
          </a>

          {/* Heading */}
          <h1 className="text-2xl font-bold text-center mb-2">
            Add New Coffee
          </h1>
          <p className="text-gray-500 text-center mb-6">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-6 mb-4">
              {/* Coffee Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 mb-2 font-medium"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter coffee name"
                  className="w-full border-gray-700 rounded-lg shadow-sm focus:ring-2 focus:ring-gray-300 focus:outline-none px-4 py-2"
                />
              </div>
              {/* Coffee Chef */}
              <div>
                <label
                  htmlFor="chef"
                  className="block text-gray-700 mb-2 font-medium"
                >
                  Chef
                </label>
                <input
                  type="text"
                  name="chef"
                  placeholder="Enter coffee chef"
                  className="w-full border-gray-700 rounded-lg shadow-sm focus:ring-2 focus:ring-gray-300 focus:outline-none px-4 py-2"
                />
              </div>

              {/* Supplier */}
              <div>
                <label
                  htmlFor="supplier"
                  className="block text-gray-700 mb-2 font-medium"
                >
                  Supplier
                </label>
                <input
                  type="text"
                  name="supplier"
                  placeholder="Enter coffee supplier"
                  className="w-full border-gray-700 rounded-lg shadow-sm focus:ring-2 focus:ring-gray-300 focus:outline-none px-4 py-2"
                />
              </div>

              {/* Taste */}
              <div>
                <label
                  htmlFor="taste"
                  className="block text-gray-700 mb-2 font-medium"
                >
                  Taste
                </label>
                <input
                  type="text"
                  name="taste"
                  placeholder="Enter coffee taste"
                  className="w-full border-gray-700 rounded-lg shadow-sm focus:ring-2 focus:ring-gray-300 focus:outline-none px-4 py-2"
                />
              </div>

              {/* Category */}
              <div>
                <label
                  htmlFor="category"
                  className="block text-gray-700 mb-2 font-medium"
                >
                  Category
                </label>
                <input
                  type="text"
                  name="category"
                  placeholder="Enter coffee category"
                  className="w-full border-gray-700 rounded-lg shadow-sm focus:ring-2 focus:ring-gray-300 focus:outline-none px-4 py-2"
                />
              </div>

              {/* Details */}
              <div>
                <label
                  htmlFor="details"
                  className="block text-gray-700 mb-2 font-medium"
                >
                  Details
                </label>
                <input
                  type="text"
                  name="details"
                  placeholder="Enter coffee details"
                  className="w-full border-gray-00 rounded-lg shadow-sm focus:ring-2 focus:ring-gray-300 focus:outline-none px-4 py-2"
                />
              </div>
            </div>

            {/* Photo URL */}
            <div className="mb-6">
              <label
                htmlFor="photo"
                className="block text-gray-700 mb-2 font-medium"
              >
                Photo
              </label>
              <input
                type="url"
                name="photo"
                placeholder="Enter photo URL"
                className="w-full border-gray-700 rounded-lg shadow-sm focus:ring-2 focus:ring-gray-300 focus:outline-none px-4 py-2"
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="w-full bg-yellow-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-yellow-700 transition"
              >
                Add Coffee
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCoffee;
