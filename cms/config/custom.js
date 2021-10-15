module.exports = () => ({ 
    plugins: {
        navigation: {
            contentTypesNameFields: {
                'pages': ['name'],
            },
            gql: {
                navigationItemRelated: 'union NavigationRelated = Pages',
            },
        },
    },
})
