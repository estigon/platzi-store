import React from 'react';
import { mount, shallow } from 'enzyme';
import Footer from '../../components/Footer';
import { create } from 'react-test-renderer';

describe('<Footer />', () => {
    const footer = mount(<Footer />);
    const footer2 = shallow(<Footer />);

    test('Render del componente Footer', () => {

        // console.log("mount")
        console.log(footer.debug())
        // console.log("shallow")
        console.log(footer2.debug())
        expect(footer.length).toEqual(1);
    });

    test('Render del titulo', () => {
        expect( footer.find('.Footer-title').text()).toEqual('Platzi Store')
    });
});

describe('Snapshot <Footer />', () => {

    test('comprobar UI del elemento <Footer />', () => {
        //pasamos al create el elemento sin provider porque no tiene que ver con redux
        const footer = create(<Footer />)
        expect(footer.toJSON()).toMatchSnapshot()
    })
})