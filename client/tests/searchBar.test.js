/**
 * @jest-environment jsdom
 * @jest-mock react-router-dom
 */

import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import SearchBar from './SearchBar';
import '@testing-library/jest-dom/extend-expect';


test('SearchBar debe tener un input y redireccionar a la pagina detail', async () => {
  const { getByPlaceholderText, getByText, history } = render(
    <MemoryRouter initialEntries={['/']} initialIndex={0}>
      <SearchBar />
      <Route path="/detail/:name" render={({ match }) => <div>Detail Page: {match.params.name}</div>} />
    </MemoryRouter>
  );

  const input = getByPlaceholderText('What are you looking for?');
  
  fireEvent.change(input, { target: { value: 'pikachu' } });

  // Obtener el botón "Search" y simular un clic
  const searchButton = getByText('Search');
  fireEvent.click(searchButton);

 
  await waitFor(() => {
    expect(history.location.pathname).toBe('/detail/pikachu');
  });

 
});
