import React, { useState } from "react";

// Import everything needed to use the `useQuery` hook
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { Dogs } from "./components/Dogs";
import { DogPhoto } from "./components/DogPhoto";

const client = new ApolloClient({
  uri: 'https://71z1g.sse.codesandbox.io/',
  cache: new InMemoryCache(),
})


export default function App() {
  const [selectedDog, setSelectedDog] = useState(null);

  function onDogSelected({ target }) {
    setSelectedDog(target.value);
  }

  return (
    <ApolloProvider client={client}>
      <div>
        <h2>Building Query components 🚀</h2>
        <Dogs onDogSelected={onDogSelected}></Dogs>
        { selectedDog && <DogPhoto breed={selectedDog}></DogPhoto> }
      </div>
    </ApolloProvider>
  );
}