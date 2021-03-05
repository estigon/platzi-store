import React from "react";
import { mount, shallow } from 'enzyme';
import Header from "../../components/Header";
import ProviderMock from "../../__mocks__/ProviderMock";
import {create} from 'react-test-renderer';

// import react-testing methods
import { render, fireEvent, waitFor, screen } from '@testing-library/react'

// add custom jest matchers from jest-dom
import '@testing-library/jest-dom/extend-expect'

describe('<Header />', () => {

    /*test('Render del componente <Header />', () => {
        const header = shallow(
            <ProviderMock>
                <Header />
            </ProviderMock>
        );
        //console.log(header.debug())
        expect(header.length).toEqual(1);
    });

    test('Render del titulo <Header />', () => {
        const header = shallow(
            <ProviderMock>
                <Header />
            </ProviderMock>
        );
       // console.log(header.debug())
        expect( header.find(".Header-title").text()).toEqual("Platzi Store");
    })*/

    test('prueba con testing library', () => {
        render(
            <ProviderMock>
                <Header />
            </ProviderMock>
        )
        expect( screen.getByText('Platzi Store')).toBeInTheDocument()
    })

   /* test('prueba 2 con testing library', () => {
        render(
            <ProviderMock>
                <Header />
            </ProviderMock>
        )

        console.log(screen.queryByText('gagsas'))
        expect( screen.queryByText('asdasd') ).toBeDefined()//no debmos probar con esta para este caso, esta funcion retorna null y la funcion toBeDefined() solo verifica que no sea undefined asi que el test pasa
    })*/
})

describe('Snapshot <Header />', () => {
    
    test('comprobar UI del elemento <Header />', () => {
        const header = create(
            <ProviderMock>
                <Header />
            </ProviderMock>
        )

        expect(header.toJSON()).toMatchSnapshot()
    })
})