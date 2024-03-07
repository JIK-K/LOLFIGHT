import Link from "next/link";
import { AnchorHTMLAttributes } from "react";
import type { LinkProps } from "next/link";

const CustomLink = ({ href, ...rest }: LinkProps & AnchorHTMLAttributes<HTMLAnchorElement>) => {
    const isInterLink = href && href.startsWith('/')
    const isAnchorLink = href && href.startsWith('#')

    if (isInterLink) {
            return <Link href={href} {...rest} />
    }

    if (isAnchorLink) {
        return <a href={href} {...rest} />
    }

    return <a target="_blank" rel="noopener noreferrer" href={href} {...rest} />
}

export default CustomLink