import { ComponentPropsWithoutRef, ReactNode } from "react";
import { Link } from "react-router-dom";

interface BaseProps {
    children: ReactNode;
    textOnly?: boolean;
}

type ButtonProps = ComponentPropsWithoutRef<'button'> & BaseProps & {to?: never};
type LinkProps = ComponentPropsWithoutRef<'a'> & BaseProps & {to: string};

function isRouterLink (props: ButtonProps | LinkProps): props is LinkProps {
    return 'to' in props;
}

function Button (props: ButtonProps | LinkProps ) {
    if (isRouterLink(props)) {
        const {textOnly, children, ...otherProps} = props;
        return <Link className={`button ${textOnly ? "button button--text-only" : ""}`} {...otherProps}>{children}</Link>
    }

    const {textOnly, children, ...otherProps} = props;
    return <button className={`button ${textOnly ? "button button--text-only" : ""}`} {...otherProps}>{children}</button>
};

export default Button;