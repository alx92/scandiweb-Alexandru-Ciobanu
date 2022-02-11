import React from "react";
import Category from "./Category";
import { useQuery, gql } from "@apollo/client";

const QUERY = gql`
  query {
    categories {
      name
      products {
        id
        name
      }
    }
  }
`;

const Categories = ({ name }) => {
  const { data } = useQuery(QUERY);

  const res = data?.categories?.filter((cat) => cat.name === name);

  return (
    <div>
      {res?.map((cat) => (
        <ol key={cat.name}>
          <Category categories={cat} />
        </ol>
      ))}
    </div>
  );
};

export default Categories;
