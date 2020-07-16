import React from 'react';

import { Messages } from 'config/language';

import { MessagesContext } from 'views/.tools/Contexts/MessagesContext';

export const MessagesProvider = ({ children }) => <MessagesContext.Provider value={{ ...Messages }}>{children}</MessagesContext.Provider>;
