import { createContext } from 'react';

import type { ModalContextType } from '../../model';

export const ModalContext = createContext<ModalContextType | null>(null);
