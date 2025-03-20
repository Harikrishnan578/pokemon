Data Fetching: Uses fetch to retrieve Pokémon data from https://pokeapi.co/api/v2/pokemon/.

Pagination: Implements pagination using limit and offset parameters.

Component-Based Structure: Each Pokémon is displayed in a PokemonCard component.

Client-Side Rendering: Ensures seamless updates with React state and hooks.

Challenges & Trade-offs

Next.js Server Components Issue: Had to use "use client"; to make components work properly.

API Rate Limits: To handle API call limits, optimized fetching using Promise.all.#   p o k e m o n  
 