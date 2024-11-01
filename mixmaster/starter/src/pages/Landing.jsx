import { useLoaderData } from "react-router-dom";
import axios from "axios";
import SearchForm from "../components/SearchForm";
import CocktailList from "../components/CocktailList";
const cocktailSearchUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";


  import { useQuery } from "@tanstack/react-query";

export const loader =
  (queryClient) =>
  async ({ request }) => {
    const url = new URL(request.url);
    const searchTerm = url.searchParams.get("search") || "";
    await queryClient.ensureQueryData(searchCocktailsQuery(searchTerm));
    // const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`);
    return { searchTerm };
  };

const searchCocktailsQuery = (searchTerm) => {
  return {
    queryKey: ["search", searchTerm || "all"],
    queryFn: async () => {
      // Default to 'a' if no search term is provided since API has changed
      searchTerm = searchTerm || "a";

      const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`);
      return response.data.drinks;
    },
  };
};


const Landing = () => {
   const { searchTerm } = useLoaderData();
   const {data:drinks} = useQuery(searchCocktailsQuery(searchTerm));
   return (
     <>
       <SearchForm searchTerm={searchTerm} />
       <CocktailList drinks={drinks} />
     </>
   );
};

export default Landing;

