/*
    Supported Syntaxes:

        <length> Any valid length value
        <number> Any valid number value
        <percentage> Any valid percentage value
        <length-percentage> Any valid length or percentage value, or any calc expression combining length and percentage components
        <color> Any valid color value
        <image> Any Any valid image value
        <url> Any valid url value
        <integer> Any valid integer value
        <angle> Any valid angle value
        <time> Any valid time value
        <resolution> Any valid resolution value
        <transform-list> Any valid transform function value
        <custom-ident> Any valid ident value
*/

CSS.registerProperty({
    name: '--primary',
    syntax: '<color>',
    initialValue: '#170a19',
    inherits: false
});

CSS.registerProperty({
    name: '--secondary',
    syntax: '<color>',
    initialValue: '#3c9d9b',
    inherits: false
});

CSS.registerProperty({
    name: '--tertiary',
    syntax: '<color>',
    initialValue: '#52de97',
    inherits: false
});

CSS.registerProperty({
    name: '--quaternary',
    syntax: '<color>',
    initialValue: '#c0ffb3',
    inherits: false
});