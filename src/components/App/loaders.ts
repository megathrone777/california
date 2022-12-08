import { defer, LoaderFunction } from "react-router-dom";

export const exampleLoader: LoaderFunction = () => {
  const vehicles = fetch("data/products.json").then((response: Response) =>
    response.json()
  );

  return defer({
    vehicles,
  });
};
