import axios from "axios";

const edamamRecipe = axios.create({
  baseURL: "https://api.edamam.com",
  params: {
    app_id: "377d225d",
    app_key: "eeee5a3e442f0313053c11494e32dfce",
  },
});

const getRecipe = async (searchTitle, setRecipeList) => {
  await edamamRecipe
    .get("/search", { params: { q: searchTitle } })
    .then((response) => {
      setRecipeList(response.data.hits);
    })
    .catch((error) => {
      console.log(error);
    });
};

export { getRecipe };
