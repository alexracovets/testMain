const pathsScrollDesktop = [
    {
        pathname: '/',
        toUp: null,
        toDown: '/services'
    },
    {
        pathname: '/services',
        toUp: '/',
        toDown: '/projects'
    },
    {
        pathname: '/projects',
        toUp: '/services',
        toDown: '/about'
    },
    {
        pathname: '/about',
        toUp: '/projects',
        toDown: '/q&a'
    },
    {
        pathname: '/q&a',
        toUp: '/about',
        toDown: '/contact'
    },
    {
        pathname: '/contact',
        toUp: '/q&a',
        toDown: null
    }
]

export default pathsScrollDesktop