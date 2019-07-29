import * as React from 'react';
import Helmet from 'react-helmet';

type PageLayoutProps = {
    children?: any;
    title?: string;
};

const PageLayout: React.FC <PageLayoutProps> = ({ children, title }) => {
    return (
        <div>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <main>{children}</main>
        </div>
    );
};

export default PageLayout;
