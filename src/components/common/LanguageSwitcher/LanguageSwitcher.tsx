import { useId, useState } from 'react';
import type { MouseEvent } from 'react';

import { Box, ButtonBase, Menu, MenuItem, alpha } from '@mui/material';

import { Check, ChevronDown, Globe } from 'lucide-react';

import { useLanguage } from '../../../hooks/useLanguage';

import type { Language } from '../../../features/language/LanguageContext';

interface LanguageOption {
  code: Language;
  label: string;
  name: string;
}

const languageOptions: LanguageOption[] = [
  { code: 'tr', label: 'TR', name: 'Türkçe' },
  { code: 'en', label: 'EN', name: 'English' },
  { code: 'de', label: 'DE', name: 'Deutsch' },
  { code: 'ru', label: 'RU', name: 'Русский' },
];

interface LanguageSwitcherProps {
  compact?: boolean;
}

export function LanguageSwitcher({
  compact = false,
}: LanguageSwitcherProps) {
  const { language, setLanguage } = useLanguage();

  const id = useId();
  const buttonId = `${id}-button`;
  const menuId = `${id}-menu`;

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const open = Boolean(anchorEl);

  const current =
    languageOptions.find((option) => option.code === language) ??
    languageOptions[0];

  const handleOpen = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelect = (code: Language) => {
    handleClose();

    if (code !== language) {
      void setLanguage(code);
    }
  };

  return (
    <>
      <ButtonBase
        id={buttonId}
        onClick={handleOpen}
        aria-label={current.name}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={open ? menuId : undefined}
        sx={(theme) => ({
          height: compact ? 40 : 38,
          px: compact ? 1 : 1.15,
          gap: 0.75,
          display: 'inline-flex',
          alignItems: 'center',
          border: '1px solid',
          borderColor: open ? 'primary.main' : 'divider',
          borderRadius: '7px',
          color: open ? 'primary.main' : 'text.primary',
          bgcolor: open
            ? alpha(
                theme.palette.primary.main,
                theme.palette.mode === 'dark' ? 0.14 : 0.06
              )
            : 'transparent',
          font: 'inherit',
          transition:
            'border-color 180ms ease, background-color 180ms ease, color 180ms ease',

          '&:hover': {
            borderColor: 'primary.main',
            bgcolor: 'action.hover',
            color: 'primary.main',
          },

          '&.Mui-focusVisible': {
            outline: '2px solid',
            outlineColor: 'primary.main',
            outlineOffset: 2,
          },
        })}
      >
        <Globe size={15} strokeWidth={1.8} />

        <Box
          component="span"
          sx={{
            fontSize: '0.7rem',
            fontWeight: 800,
            letterSpacing: '0.06em',
            lineHeight: 1,
          }}
        >
          {current.label}
        </Box>

        <Box
          component="span"
          sx={{
            display: 'flex',
            transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 220ms cubic-bezier(0.22, 1, 0.36, 1)',
            '@media (prefers-reduced-motion: reduce)': {
              transition: 'none',
            },
          }}
        >
          <ChevronDown size={14} strokeWidth={2} />
        </Box>
      </ButtonBase>

      <Menu
        id={menuId}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        marginThreshold={8}
        slotProps={{
          list: {
            role: 'listbox',
            'aria-labelledby': buttonId,
            disablePadding: true,
          },
        }}
        sx={(theme) => ({
          mt: 1,

          '& .MuiPaper-root': {
            minWidth: 190,
            p: 0.5,
            border: '1px solid',
            borderColor: 'divider',
            borderRadius: '10px',
            backgroundImage: 'none',
            bgcolor:
              theme.palette.mode === 'dark'
                ? 'rgba(12,20,16,0.96)'
                : 'rgba(255,255,255,0.98)',
            backdropFilter: 'blur(20px) saturate(150%)',
            WebkitBackdropFilter: 'blur(20px) saturate(150%)',
            boxShadow:
              theme.palette.mode === 'dark'
                ? '0 20px 50px rgba(0,0,0,0.45)'
                : '0 20px 50px rgba(17,54,39,0.14)',
          },
        })}
      >
        {languageOptions.map((option) => {
          const active = option.code === language;

          return (
            <MenuItem
              key={option.code}
              role="option"
              lang={option.code}
              selected={active}
              aria-selected={active}
              onClick={() => handleSelect(option.code)}
              sx={(theme) => ({
                minHeight: 44,
                px: 1,
                py: 0.5,
                gap: 1.5,
                borderRadius: '7px',
                color: active ? 'text.primary' : 'text.secondary',
                transition: 'background-color 160ms ease, color 160ms ease',

                '&:hover': {
                  bgcolor: 'action.hover',
                  color: 'text.primary',
                },

                '&.Mui-selected': {
                  bgcolor: alpha(
                    theme.palette.primary.main,
                    theme.palette.mode === 'dark' ? 0.16 : 0.08
                  ),
                },

                '&.Mui-selected:hover': {
                  bgcolor: alpha(
                    theme.palette.primary.main,
                    theme.palette.mode === 'dark' ? 0.22 : 0.12
                  ),
                },

                '&.Mui-focusVisible': {
                  outline: '2px solid',
                  outlineColor: 'primary.main',
                  outlineOffset: -2,
                },
              })}
            >
              <Box
                component="span"
                sx={{
                  width: 30,
                  height: 30,
                  flexShrink: 0,
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '6px',
                  bgcolor: active ? 'primary.main' : 'action.hover',
                  color: active ? 'primary.contrastText' : 'text.secondary',
                  fontSize: '0.62rem',
                  fontWeight: 800,
                  letterSpacing: '0.06em',
                  transition: 'background-color 160ms ease, color 160ms ease',
                }}
              >
                {option.label}
              </Box>

              <Box
                component="span"
                sx={{
                  flex: 1,
                  fontSize: '0.84rem',
                  fontWeight: active ? 700 : 600,
                }}
              >
                {option.name}
              </Box>

              {active && (
                <Box
                  component="span"
                  sx={{ display: 'flex', color: 'primary.main' }}
                >
                  <Check size={16} strokeWidth={2.2} />
                </Box>
              )}
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
}

export default LanguageSwitcher;