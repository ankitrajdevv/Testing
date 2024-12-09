const swappi = require('./script2')

it('call swapi to get people_promise' ,() =>{
   return swappi.getpeople_promise(fetch).then(data =>{
        expect(data.count).toEqual(82);
    })
})

it('calls swapi to get people_async', async () => {
    const data = await swappi.getpeople_promise(fetch);
    expect(data.count).toEqual(82);
});

it('call swapi to get people_promise' ,(done) =>{
    expect.assertions(2); // 1 expect(data).toEqual //2 if two such thing
    swappi.getpeople_async(fetch).then(data =>{
        expect(data.count).toEqual(82);
        expect(data.results.length).toBeGreaterThan(5);
        done();
    })
})

//mock fetch / spies => copy the behaviour of actual functions.
it('get people using mock fetch',()=>{
    const mockfetch = jest.fn().mockReturnValue(Promise.resolve({
        json:() => Promise.resolve({
            count:81,
            results :[0,1,2,3,4,5],
        })
    }))
    expect.assertions(2);
    return swappi.getpeople_async(mockfetch).then(data=>{
        expect(data.count).toEqual(81);
        expect(mockfetch).toBeCalledWith('https://swapi.dev/api/people');
    })
})