import getData from '../../utils/getData'

describe('Fetch api', () => {
    beforeEach(() => {
        fetch.resetMocks()
    })

    test('Llamar a una API y retornar datos', () => {
        fetch.mockResponseOnce(JSON.stringify({ data: '12345' }));
         return getData('https://google.com')//esta url no tiene nada que ver aqui, solo la enviamos como parametro porque lo requiere. sino fuese un mock si deberia ir la ruta real del api
        .then(res => {
            expect(res.data).toEqual('12345');
        });

        //expect(fetch.mock.calls[0][0]).toEqual('https://googles.com');
    })

})