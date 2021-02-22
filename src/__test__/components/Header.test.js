import React from "react";
import { mount, shallow } from 'enzyme';
import Header from "../../components/Header";
import ProviderMock from "../../__mocks__/ProviderMock";
import {create} from 'react-test-renderer';

describe('<Header />', () => {

    test('Render del componente <Header />', () => {
        const header = shallow(
            <ProviderMock>
                <Header />
            </ProviderMock>
        );
        console.log(header.debug())
        expect(header.length).toEqual(1);
    });

    test('Render del titulo <Header />', () => {
        const header = mount(
            <ProviderMock>
                <Header />
            </ProviderMock>
        );
        console.log(header.debug())
        expect( header.find(".Header-title").text()).toEqual("Platzi Store");
    })
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