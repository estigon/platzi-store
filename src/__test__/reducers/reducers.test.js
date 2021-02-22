import reducer from '../../reducers';
import ProduckMock from '../../__mocks__/ProductMock';

describe('pruebas a reducers', () => {
    test('estado inicial del reducer', () => {
        expect( reducer({}, '') ).toEqual({})//este reducer sin tipo de action debe retornar el objeto pasado
    })

    test('ADD_TO_CART', () => {
        const intitialState = {
            cart: []
        }
        const payload = ProduckMock
        const action = {
            type: 'ADD_TO_CART',
            payload
        }
        const expected = {
            cart: [
                ProduckMock
            ]
        }
        expect( reducer(intitialState, action) ).toEqual(expected)
    })

    test('REMOVE_FROM_CART', () => {
        const initialState = { cart: [ProduckMock] };
        const action = { type: 'REMOVE_FROM_CART', payload: ProduckMock };
        const expected = { cart: [] };
    
        console.log(reducer(initialState, action))
        expect(reducer(initialState, action)).toEqual(expected);
      });
})

