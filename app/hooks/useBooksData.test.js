import React from 'react';
import { render, act, screen } from '@testing-library/react';
import { useBooksData } from './useBooksData'; // Asegúrate de ajustar la importación según sea necesario

jest.mock('../lib/data.js', () => ({
    data: {
      library: [
        { id: 1, title: 'Book 1' },
        { id: 2, title: 'Book 2' },
      ]
    }
  }));

  
function TestComponent() {
  const books = useBooksData();
  return (
    <div>
      {books.map((book) => (
        <div key={book.id}>{book.title}</div>
      ))}
    </div>
  );
}

describe('useBooksData', () => {
  it('loads books data after asynchronous operation', async () => {
    jest.useFakeTimers();
    render(<TestComponent />);
    act(() => {
      jest.runAllTimers();
    });
    expect(screen.getByText('Book 1')).toBeInTheDocument();
  });
});
