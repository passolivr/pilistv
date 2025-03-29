import { Helmet } from 'react-helmet';

const FontPreloader = () => {
    return (
        <Helmet>
            {/* Neulis Cursive */}
            <link
                rel="preload"
                href="/assets/fonts/NeulisCursive-Regular.otf"
                as="font"
                type="font/otf"
                crossOrigin="anonymous"
            />
            <link
                rel="preload"
                href="/assets/fonts/NeulisCursive-Bold.otf"
                as="font"
                type="font/otf"
                crossOrigin="anonymous"
            />

            {/* Neulis Neue */}
            <link
                rel="preload"
                href="/assets/fonts/NeulisNeue-Regular.otf"
                as="font"
                type="font/otf"
                crossOrigin="anonymous"
            />
            <link
                rel="preload"
                href="/assets/fonts/NeulisNeue-Medium.otf"
                as="font"
                type="font/otf"
                crossOrigin="anonymous"
            />
            <link
                rel="preload"
                href="/assets/fonts/NeulisNeue-Bold.otf"
                as="font"
                type="font/otf"
                crossOrigin="anonymous"
            />
        </Helmet>
    );
};

export default FontPreloader; 