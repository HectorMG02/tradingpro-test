import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BookCard from './BookCard';

jest.mock('../../Icons/HearthIcon.jsx', () => ({
    __esModule: true,
    default: ({ isFavorite, toggleFavorite }) => (
        <button onClick={toggleFavorite}>
            {isFavorite ? 'Favorito' : 'No Favorito'}
        </button>
    ),
}));

describe('BookCard', () => {
    const bookMock = {
        title: 'Test Book',
        author: { name: 'Test Author' },
        synopsis:
            "This is a long synopsis for testing purposes. It should be trimmed if it's too long.",
        cover: '/test-cover.jpg',
        showDescription: true,
    };

    it('renders correctly', () => {
        render(
            <BookCard
                book={bookMock}
                showBookDetails={() => {}}
                isFavorite={false}
                toggleFavorite={() => {}}
            />
        );
        expect(screen.getByText('Test Book')).toBeInTheDocument();
        expect(screen.getByText('Test Author')).toBeInTheDocument();
        expect(
            screen.getByText(/This is a long synopsis for testing purposes/)
        ).toBeInTheDocument();
    });

    it('calls showBookDetails on click', () => {
        const showBookDetailsMock = jest.fn();
        render(
            <BookCard
                book={bookMock}
                showBookDetails={showBookDetailsMock}
                isFavorite={false}
                toggleFavorite={() => {}}
            />
        );
        fireEvent.click(screen.getByText('Test Book'));
        expect(showBookDetailsMock).toHaveBeenCalled();
    });

    it('toggles favorite on HearthIcon click', () => {
        const toggleFavoriteMock = jest.fn();
        render(
            <BookCard
                book={bookMock}
                showBookDetails={() => {}}
                isFavorite={false}
                toggleFavorite={toggleFavoriteMock}
            />
        );
        fireEvent.click(screen.getByText('No Favorito'));
        expect(toggleFavoriteMock).toHaveBeenCalledWith(bookMock);
    });
});
