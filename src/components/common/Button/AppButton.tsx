import type {
  ReactNode,
} from 'react';

import {
  Button,
  type ButtonProps,
} from '@mui/material';

import {
  ArrowUpRight,
} from 'lucide-react';

import {
  Link,
} from 'react-router-dom';

interface AppButtonProps
  extends Omit<
    ButtonProps,
    'endIcon' | 'href'
  > {
  showArrow?: boolean;

  endIcon?: ReactNode;

  /**
   * React Router internal navigation.
   *
   * Example:
   * to="/iletisim"
   */
  to?: string;

  /**
   * External URL or native anchor navigation.
   *
   * Example:
   * href="https://..."
   */
  href?: string;
}

export function AppButton({
  children,
  showArrow = false,
  endIcon,
  to,
  href,
  size = 'large',
  ...props
}: AppButtonProps) {
  const resolvedEndIcon =
    endIcon ??
    (
      showArrow
        ? <ArrowUpRight size={18} />
        : undefined
    );

  /**
   * Internal application navigation.
   */
  if (to) {
    return (
      <Button
        component={Link}
        to={to}
        size={size}
        endIcon={resolvedEndIcon}
        {...props}
      >
        {children}
      </Button>
    );
  }

  /**
   * External/native link.
   */
  if (href) {
    return (
      <Button
        component="a"
        href={href}
        size={size}
        endIcon={resolvedEndIcon}
        {...props}
      >
        {children}
      </Button>
    );
  }

  /**
   * Standard button.
   */
  return (
    <Button
      size={size}
      endIcon={resolvedEndIcon}
      {...props}
    >
      {children}
    </Button>
  );
}