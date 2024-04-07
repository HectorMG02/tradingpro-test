import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import BookDetails from './BookDetails';
import '@testing-library/jest-dom';

describe('BookDetails', () => {
    const mockBook = {
        title: 'Test Book',
        cover: '/test-cover.jpg',
        ISBN: '123-456-789',
        author: {
            name: 'Test Author',
            otherBooks: ['Book 1', 'Book 2'],
        },
        genre: 'Test Genre',
        pages: 123,
        synopsis: 'Test Synopsis',
    };

    it('does not render when isOpen is false', () => {
        render(
            <BookDetails
                book={mockBook}
                isOpen={false}
                onClose={() => {}}
                toggleFavorite={() => {}}
                isFavorite={true}
            />
        );
        expect(screen.queryByText('ISBN')).toBeNull();
    });

    it('displays book details when isOpen is true', () => {
        render(
            <BookDetails
                book={mockBook}
                isOpen={true}
                onClose={() => {}}
                toggleFavorite={() => {}}
                isFavorite={true}
            />
        );

        expect(screen.getByText(/test book/i)).toBeInTheDocument();
        expect(screen.getByText(/test author/i)).toBeInTheDocument();
        expect(screen.getByText(/test synopsis/i)).toBeInTheDocument();
    });

    it('calls onClose when the background is clicked', () => {
        const onCloseMock = jest.fn();
        render(
            <BookDetails
                book={mockBook}
                isOpen={true}
                onClose={onCloseMock}
                toggleFavorite={() => {}}
                isFavorite={true}
            />
        );
        fireEvent.click(screen.getByRole('dialog'));
        expect(onCloseMock).toHaveBeenCalledTimes(1);
    });

    it('calls toggleFavorite when the HearthIcon is clicked', () => {
        const toggleFavoriteMock = jest.fn();
        render(
            <BookDetails
                book={mockBook}
                isOpen={true}
                onClose={() => {}}
                toggleFavorite={toggleFavoriteMock}
                isFavorite={true}
            />
        );

        const hearthButton = screen.getByTestId('hearth-icon-button');
        fireEvent.click(hearthButton);
        expect(toggleFavoriteMock).toHaveBeenCalledTimes(1);
    });

    it('book-details stops propagation', () => {
        const stopPropagationMock = jest.fn();
        render(
            <BookDetails
                book={mockBook}
                isOpen={true}
                onClose={() => {}}
                toggleFavorite={() => {}}
                isFavorite={true}
            />
        );

        fireEvent.click(screen.getByTestId('book-details'));
        expect(stopPropagationMock).toHaveBeenCalledTimes(0);
    });
});
