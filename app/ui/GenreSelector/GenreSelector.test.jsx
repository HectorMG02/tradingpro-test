import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import GenreSelector from './GenreSelector';

describe('GenreSelector', () => {
    const genres = ['Fantasía', 'Ciencia Ficción', 'Misterio'];
    const selectedGenre = 'Fantasía';
    const onGenreChangeMock = jest.fn();
    const total = 5;

    beforeEach(() => {
        render(
            <GenreSelector
                genres={genres}
                selectedGenre={selectedGenre}
                onGenreChange={onGenreChangeMock}
                total={total}
            />
        );
    });

    it('renders correctly with initial props', () => {
        genres.forEach((genre) => {
            expect(
                screen.getByRole('option', { name: genre })
            ).toBeInTheDocument();
        });
        expect(
            screen.getByRole('option', { name: 'Todos' })
        ).toBeInTheDocument();
        expect(
            screen.getByText(`Mostrando ${total} libros`)
        ).toBeInTheDocument();
    });

    it('calls onGenreChange when a genre is selected', async () => {
        const user = userEvent.setup();
        const select = screen.getByRole('combobox');
        await user.selectOptions(select, 'Misterio');
        expect(onGenreChangeMock).toHaveBeenCalled();
    });

    it('displays the correct text when total is 1', () => {
        const total = 1;
        render(
            <GenreSelector
                genres={genres}
                selectedGenre={selectedGenre}
                onGenreChange={onGenreChangeMock}
                total={total}
            />
        );

        expect(
            screen.getByText(`Mostrando ${total} libro`)
        ).toBeInTheDocument();
    });

    it('displays the correct text when total is 0', () => {
        const total = 0;
        render(
            <GenreSelector
                genres={genres}
                selectedGenre={selectedGenre}
                onGenreChange={onGenreChangeMock}
                total={total}
            />
        );

        expect(
            screen.getByText('No hay libros disponibles')
        ).toBeInTheDocument();
    });
});
