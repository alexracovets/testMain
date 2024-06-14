const pathsScrollDesktop = [
    {
        pathname: '/',
        toUp: null,
        toDown: '/services'
    },
    {
        pathname: '/services',
        toUp: '/',
        toDown: '/cases'
    },
    {
        pathname: '/cases',
        toUp: '/services',
        toDown: '/about'
    },
    {
        pathname: '/about',
        toUp: '/cases',
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