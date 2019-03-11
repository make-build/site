const dates = {
    eventDate: 'April 13th 2019',
    eventTime: '8:00am to 8:00pm',
};

const links = {
    registration: 'https://airtable.com/shrRmzfcOJ2vJcssf',
    mailTeam: 'mailto:team@makebuild.dev',
    facebookHackFSU: 'https://www.facebook.com/hackfsu',
    facebookEvent: '',
    github: 'https://github.com/make-build',
    coc: 'https://hackcodeofconduct.org/',
};

const host =
    process.env.NODE_ENV === 'development'
        ? 'http://localhost:3000'
        : `https://makebuild.dev`;

export { dates, links, host };
