import React from 'react'
import { mount, shallow } from "enzyme"
import Product from "../../components/Product"
import ProviderMock from "../../__mocks__/ProviderMock"
import ProductMock from '../../__mocks__/ProductMock'

describe('<Product />', () => {
    
    test('Probando render del elemento <Product />', () => {
        const product = shallow(
            <ProviderMock>
                <Product />
            </ProviderMock>
        )

        expect(product.length).toEqual(1)
    })

    test('Comprobando el funcionamiento del boton de comprar', () => {
        const handleAddToCart = jest.fn()// mock function
        const wrapper = mount(
            <ProviderMock>
                <Product 
                    product = {ProductMock}
                    handleAddToCart = {handleAddToCart}
                />
            </ProviderMock>
        )

        /**
         * Porque con esto me sigue dando positivo el test?
         * Para que se usa el ProviderMock que no se pueda hacer con el elemento individualmente?
         * Respuesta hasta ahora: Porque este componente no hace uso de connect de react-redux
         * Los componentes que hacen uso de de esa funcion reciben informacion del store a traves del provider
         * este recubre el componente <App /> para que el store este disponible para los elementos en el interior
         * del componente <App />
         */
        // const wrapper = mount(<Product 
        //     product = {ProductMock}
        //     handleAddToCart = {handleAddToCart}
        // />)

        wrapper.find('button').simulate('click')
        expect(handleAddToCart).toHaveBeenCalledTimes(1)
    })
})