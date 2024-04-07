import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SavedBooksComponent from './SavedBooksComponent';

describe('SavedBooksComponent', () => {
    const mockBooks = [
        { id: '1', title: 'Book 1' },
        { id: '2', title: 'Book 2' },
    ];

    it('renders PictureBookCard for each saved book', () => {
        render(
            <SavedBooksComponent
                savedBooks={mockBooks}
                handleOpenModal={() => {}}
                removeBookFromSaved={() => {}}
            />
        );

        expect(screen.getAllByText(/Empty/).length).toBe(5 - mockBooks.length);
    });

    it('calls handleOpenModal with the correct book on PictureBookCard click', async () => {
        const handleOpenModalMock = jest.fn();
        render(
            <SavedBooksComponent
                savedBooks={mockBooks}
                handleOpenModal={handleOpenModalMock}
                removeBookFromSaved={() => {}}
            />
        );

        const bookCards = screen.getAllByTestId('picture-book-card');
        fireEvent.click(bookCards[0]);

        expect(handleOpenModalMock).toHaveBeenCalledWith(mockBooks[0]);
    });
});
