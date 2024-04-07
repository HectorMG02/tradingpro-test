import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import HearthIcon from './HearthIcon';

describe('HearthIcon', () => {
    it('renders with correct fill based on isFavorite', () => {
        const { rerender } = render(
            <HearthIcon isFavorite={true} toggleFavorite={() => {}} />
        );
        let svg = screen.getByTestId('hearth-icon-svg');
        expect(svg).toHaveAttribute('fill', 'currentColor');

        rerender(<HearthIcon isFavorite={false} toggleFavorite={() => {}} />);
        svg = screen.getByTestId('hearth-icon-svg');
        expect(svg).toHaveAttribute('fill', 'none');
    });

    it('calls toggleFavorite when clicked', () => {
        const toggleFavoriteMock = jest.fn();
        render(
            <HearthIcon
                isFavorite={false}
                toggleFavorite={toggleFavoriteMock}
            />
        );

        const button = screen.getByTestId('hearth-icon-button');
        fireEvent.click(button);

        expect(toggleFavoriteMock).toHaveBeenCalledTimes(1);
    });

    it('prevents event propagation when clicked', () => {
        const toggleFavoriteMock = jest.fn();
        const onButtonClickMock = jest.fn();

        render(
            <div onClick={onButtonClickMock}>
                <HearthIcon
                    isFavorite={false}
                    toggleFavorite={toggleFavoriteMock}
                />
            </div>
        );

        const innerButton = screen.getByTestId('hearth-icon-button');
        fireEvent.click(innerButton);

        expect(toggleFavoriteMock).toHaveBeenCalledTimes(1);
        expect(onButtonClickMock).not.toHaveBeenCalled();
    });
});
