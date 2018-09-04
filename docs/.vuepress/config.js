module.exports = {
    title: 'Metaphor V2',
    description: 'A CSUN-Branded Theme for Bootstrap 4',
    base: '/metaphorV2/',
    head: [
        ['script', { src: 'https://code.jquery.com/jquery-3.3.1.min.js' }],
        ['script', { src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js' }],
        ['script', { src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js' }],
        ['script', { src: 'https://s3-us-west-2.amazonaws.com/csun-metalab/metaphor/dist/js/datepicker/datepicker.js' }]
    ],
    themeConfig: {
        search: false,
        repo: 'andrewMETALAB/metaphorV2',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Getting Started', link: '/getting-started/' },
            { text: 'Documentation', link: '/documentation/' }
        ],
        sidebar: [
            ['/', 'Home'],
            ['/getting-started/', 'Getting Started'],
            ['/documentation/', 'Documentation']
        ] 
    }
}
