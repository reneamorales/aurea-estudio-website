import { Link } from 'react-scroll';

interface ScrollLinkProps {
    to: string;
    className?: string;
    children: React.ReactNode;
}

export const ScrollLink: React.FC<ScrollLinkProps> = ({ to, className, children }) => {
    return (
        <Link
            to={to.replace('/#', '')}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className={className}
        >
            {children}
        </Link>
    );
};