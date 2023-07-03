import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformIconList from "./components/PlatformIconList";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";


function App() {
  const [selectedGgenre, setSelectedGgenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelctedPlatform] = useState<Platform | null>(
    null
  );

  return (
    <Grid
      templateAreas={{
        base: `'nav  ' ' main'`,
        lg: `'nav nav ' 'aside main'`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            selectedGenre={selectedGgenre}
            onSelectGenre={(genre) => setSelectedGgenre(genre)}
          />
        </GridItem>
      </Show>

      <GridItem area="main">
        <PlatformSelector
          selectedPlatform={selectedPlatform}
          onSelectPlatform={(platform) => setSelctedPlatform(platform)}
        />
        <GameGrid
          selectedPlatform={selectedPlatform}
          selectedGenre={selectedGgenre}
        />
      </GridItem>
    </Grid>
  );
}

export default App;
