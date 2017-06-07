
// export { default as Home } from './home'
// export { default as About } from './About'


import syncComponent from './core/syncComponent';

export const Home = syncComponent('Home', require('./routes/Home'));
export const About = syncComponent('About', require('./routes/About'));
