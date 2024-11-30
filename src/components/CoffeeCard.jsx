import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee }) => {
  const { _id, name, chef, taste, photo } = coffee;

  const handelDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
        console.log(result)
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/addCoffee/${_id}`, {
            method: 'DELETE'
        })
          .then((res) => res.json())
          .then((data) => {
             console.log('fetch data for delete',data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });

             
            }
          });
      }
    });
  };
  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img src={photo} alt="coffee" />
        </figure>
        <div className="flex w-full m-4 items-center justify-between">
          <div>
            <p>Name: {name}</p>
            <p>Chef: {chef}</p>
            <p>Taste: {taste}</p>
          </div>
          <div className="card-actions justify-end join join-vertical">
            <button className="btn join-item">View</button>

            <Link to={`/updateCoffee/${_id}`}>
            <button className="btn join-item">Edit</button>
            </Link>

            <button
              onClick={() => handelDelete(_id)}
              className="btn join-item bg-red-500"
            >
              X
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
