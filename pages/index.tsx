import { NextPage } from "next";
import Link from "next/link";
import { useCallback, useState } from "react";
import { FixedSizeList as List } from "react-window";
// import AutoSizer from "react-virtualized-auto-sizer";

import Layout from "../components/layout";
import useApiData from "../hooks/use-api-data";
import { useDebouncedState } from "../hooks/useDebounceState";
import Airport from "../types/airport";

const Page: NextPage = () => {
  const [query, setQuery] = useDebouncedState("");

  const airports = useApiData<Airport[]>(`/api/airports/${query}`, [], [query]);

  const airportItem: React.FC = ({
    index,
    style,
  }: {
    index: number;
    style: any;
  }) => {
    return (
      <div style={style}>
        <Link
          className="flex items-center p-5 mt-5 text-gray-800 border border-gray-200 rounded-lg shadow-sm hover:border-blue-600 focus:border-blue-600 focus:ring focus:ring-blue-200 focus:outline-none"
          href={`/airports/${airports[index].iata.toLowerCase()}`}
          key={airports[index].iata}
        >
          <span>
            {airports[index].name}, {airports[index].city}
          </span>
          <span className="ml-auto text-gray-500">
            {airports[index].country}
          </span>
        </Link>
      </div>
    );
  };

  const handleSearch = useCallback(
    (e) => {
      setQuery(e.target.value);
    },
    [setQuery]
  );

  return (
    <Layout>
      <h1 className="text-2xl font-bold">Code Challenge: Airports</h1>

      <h2 className="mt-10 text-xl font-semibold">All Airports</h2>

      <div className="mt-1 relative shadow-sm">
        <input
          type="text"
          name="query"
          id="query"
          className="focus:ring-blue-600 focus:border-blue-600 block w-full sm:text-sm border-gray-300 text-gray-800 rounded bg-gray-50 p-3"
          placeholder="Search by name, IATA, city, or country"
          onChange={handleSearch}
        />
      </div>

      <div>
        <List
          className="List"
          height={600}
          itemCount={airports.length}
          itemSize={75}
          width={800}
        >
          {airportItem}
        </List>
      </div>
    </Layout>
  );
};

export default Page;
