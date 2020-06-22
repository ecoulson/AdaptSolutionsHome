const colors = {
    text: 'white',
    background: '#232C47',
    darkAccent: '#3B3A39',
    lightAccent: '#F1D1CF',
    success: '#37D2A7',
    captions: '#939499'
}

const theme = {
    font: {
        fontFamily: 'myriad-pro, sans-serif'
    },
    h1: {
        fontSize: 96,
        fontWeight: 100,
        letterSpacing: -1.25,
        color: colors.text,
    },
    h2: {
        fontSize: 60,
        fontWeight: 500,
        letterSpacing: -0.5,
        color: colors.text,
    },
    h3: {
        fontSize: 48,
        fontWeight: 700,
        letterSpacing: 0,
        color: colors.text,
    },
    h4: {
        fontSize: 34,
        fontWeight: 600,
        letterSpacing: 0,
        lineHeight: "40px",
        color: colors.text,
    },
    h5: {
        fontSize: 24,
        fontWeight: 300,
        letterSpacing: 0.25,
        color: colors.text,
    },
    h6: {
        fontSize: 20,
        fontWeight: 500,
        letterSpacing: 0.25,
        color: colors.text,
    },
    body1: {
        fontSize: 16,
        fontWeight: 300,
        letterSpacing: 0.5,
        color: colors.text,
    },
    body2: {
        fontSize: 14,
        fontWeight: 300,
        letterSpacing: 0.25,
        color: colors.text,
    },
    button: {
        fontSize: 20,
        fontWeight: 500,
        letterSpacing: 1.5,
        backgroundColor: colors.success,
        padding: "8px 30px",
        boxShadow: "0px 0px 5px black",
        borderRadius: "30px",
        display: "block",
        width: "200px",
        margin: "0 auto",
        color: colors.text,
        textAlign: "center" as const,
        textDecoration: "none" as const
    },
    overline: {
        fontSize: 12,
        fontWeight: 300,
        letterSpacing: 1.5,
        color: colors.text,
    },
    colors: colors
};

export default theme;