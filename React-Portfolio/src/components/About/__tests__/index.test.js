import React from 'react';
//rendering component.
//Cleanup used to remove components from the DOM to prevent memory leaking or data collisions b/w tests
import { render, cleanup } from '@testing-library/react';
//access to custom matchers that are used to test DOM elements
import '@testing-library/jest-dom/extend-expect';
//importing component
import About from '..';

//After each tests, no left over memory data
afterEach(cleanup);

//declare component we're testing
describe('About component', () => {
    //First Test
    //IT and TEST can be used interchangeably
    //test('renders',....
    it('renders', () => {
        render(<About />);
    });

    //Second test
    it('matches snapshot DOM node structure', () => {
        //returns a snapshot of the About component
        const { asFragment } = render(<About />);
        //compare whether the expected and actual outcaomes match
        expect(asFragment()).toMatchSnapshot();
    })


})

