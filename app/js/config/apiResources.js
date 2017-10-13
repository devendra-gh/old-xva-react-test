export const requestConfig = {

    login: (name) => {
        return {
            method: 'get',
            url: `https://swapi.co/api/people/?search=${name}`,
        }
    },
    search: (input) => {
        return {
            method: 'get',
            url: `https://swapi.co/api/planets?search=${input}`,
        }
    },

};
