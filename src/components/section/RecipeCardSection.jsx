import { useEffect, useState } from "react";
import { IoIosTimer } from "react-icons/io";
import { AiOutlineFire } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const RecipeCardSection = () => {
  const [recipes, setRecipes] = useState([]);
  const [wantToCook, setWantToCook] = useState([]);
  const [currentlyCooking, setCurrentlyCooking] = useState([]);

  // Fetch JSON data
  useEffect(() => {
    fetch("/recipes.json") // Path to your JSON file
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch recipes");
        }
        return response.json();
      })
      .then((data) => setRecipes(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  // Add to "Want to Cook"
  const handleWantToCook = (recipe) => {
    const alreadySelected = wantToCook.some(
      (item) => item.recipe_id === recipe.recipe_id
    );

    if (alreadySelected) {
      toast.error("This recipe is already in your 'Want to Cook' list!");
    } else {
      setWantToCook((prev) => [...prev, recipe]);
    }
  };

  // Move to "Currently Cooking"
  const handleCurrentlyCooking = (recipe) => {
    setWantToCook((prev) =>
      prev.filter((item) => item.recipe_id !== recipe.recipe_id)
    );
    setCurrentlyCooking((prev) => [...prev, recipe]);
  };

  // Calculate total time and calories
  const totalTime = currentlyCooking.reduce(
    (acc, item) => acc + parseInt(item.preparing_time),
    0
  );
  const totalCalories = currentlyCooking.reduce(
    (acc, item) => acc + parseInt(item.calories),
    0
  );

  return (
    <div className="flex ">
      {/* Left Side - Recipe Cards */}
      <div className="grid grid-cols-2 gap-6 w-2/3 ">
        {recipes.map((recipe) => (
          <div
            key={recipe.recipe_id}
            className="bg-white p-6 border border-gray-300 shadow-md rounded-lg overflow-hidden hover:shadow-lg transition"
          >
            {/* Recipe Image */}
            <img
              src={recipe.recipe_image}
              alt={recipe.recipe_name}
              className="w-full h-64 object-cover rounded-lg"
            />

            {/* Recipe Details */}
            <div className="pt-4">
              <h2 className="text-lg font-bold mb-2">{recipe.recipe_name}</h2>
              <p className="text-gray-600 mb-4">{recipe.short_description}</p>
              <div className="border-b border-gray-300"></div>{" "}
              {/*<!-- Horizontal Line -->*/}
              <p className="text-gray-800 font-semibold mb-2 pt-6">
                Ingredients: {recipe.ingredients.length}
              </p>
              <ul className="list-disc pl-4 mb-2">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index} className="text-gray-600 text-sm">
                    {ingredient}
                  </li>
                ))}
              </ul>
              <div className="flex pb-4 pt-6 gap-10">
                <div className="flex items-center gap-1">
                  <IoIosTimer className="text-gray-600" />
                  <span className="font-medium text-gray-600">
                    {recipe.preparing_time}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <AiOutlineFire className="text-gray-600" />
                  <span className="font-medium text-gray-600">
                    {recipe.calories}
                  </span>
                </div>
              </div>
              {/* Want to Cook Button */}
              <button
                className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition duration-300"
                onClick={() => handleWantToCook(recipe)}
              >
                Want to Cook
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Right Side Banner */}
      <div className="w-[40%] p-6 shadow-md border border-gray-300 ml-6 bg-white rounded-lg">
        {/* Want to Cook Section */}
        <h2 className="text-lg font-bold mb-4 text-center">
          Want to cook: {wantToCook.length}
        </h2>
        <table className="w-full text-center border-collapse  mb-8">
          <thead>
            <tr className="border-b border-gray-300">
              <th className="p-2"></th>
              <th className="p-2">Name</th>
              <th className="p-2">Time</th>
              <th className="p-2">Calories</th>
              <th className="p-2 ml-3 ">Action</th>
            </tr>
          </thead>
          <tbody>
            {wantToCook.map((recipe, index) => (
              <tr key={recipe.recipe_id} className=" text-sm text-gray-600">
                <td className="p-2">{index + 1}</td>
                <td className="p-2">{recipe.recipe_name}</td>
                <td className="p-2">{recipe.preparing_time}</td>
                <td className="p-2">{recipe.calories}</td>
                <td className="p-2">
                  <button
                    className="bg-green-500 text-black p-3 py-2 rounded-full hover:bg-green-600"
                    onClick={() => handleCurrentlyCooking(recipe)}
                  >
                    Preparing
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Currently Cooking Section */}
        <h2 className="text-lg font-bold mb-4 text-center">
          Currently cooking: {currentlyCooking.length}
        </h2>
        <table className="w-full text-center border-collapse">
          <thead>
            <tr className="border-b border-gray-300">
              <th className="p-2"></th>
              <th className="p-2">Name</th>
              <th className="p-2">Time</th>
              <th className="p-2">Calories</th>
            </tr>
          </thead>
          <tbody>
            {currentlyCooking.map((recipe, index) => (
              <tr key={recipe.recipe_id} className="text-sm text-gray-600">
                <td className="p-2">{index + 1}</td>
                <td className="p-2">{recipe.recipe_name}</td>
                <td className="p-2">{recipe.preparing_time}</td>
                <td className="p-2">{recipe.calories}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-6 text-sm text-right text-gray-700">
          <p>Total Time = {totalTime} minutes</p>
          <p>Total Calories = {totalCalories} calories</p>
        </div>
      </div>

      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
};
