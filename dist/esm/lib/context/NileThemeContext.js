import React, { useContext, useMemo } from 'react';
import defaultVariables from '../variables';
import { mergeDeep } from '../helpers';
var NileThemeContext = React.createContext({});
var NileThemeProvider = function (_a) {
    var children = _a.children, theme = _a.theme;
    var themeValues = useMemo(function () { return mergeDeep(defaultVariables, theme !== null && theme !== void 0 ? theme : {}); }, [theme]);
    return React.createElement(NileThemeContext.Provider, { value: themeValues }, children);
};
export default NileThemeProvider;
export var useNileTheme = function () { return useContext(NileThemeContext); };
//# sourceMappingURL=NileThemeContext.js.map